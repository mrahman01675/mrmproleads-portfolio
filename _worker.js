const ALLOWED_ORIGINS = new Set([
  'https://mrmproleads.com',
  'https://www.mrmproleads.com',
  'http://localhost',
  'http://127.0.0.1'
]);

const RATE_BUCKETS = new Map();
const RATE_LIMITS = {
  '/api/pilot': { limit: 5, windowMs: 10 * 60 * 1000 },
  '/api/research-preview': { limit: 20, windowMs: 10 * 60 * 1000 }
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/api/pilot') {
      if (!rateAllowed(request, '/api/pilot')) return apiText('Too many requests. Please try again later.', 429);
      if (request.method !== 'POST') return apiText('Method not allowed', 405, { Allow: 'POST' });
      if (!originAllowed(request)) return apiText('Origin not allowed', 403);
      const mod = await import('./functions/api/pilot.js');
      const response = await mod.onRequestPost({ request, env, ctx, params: {} });
      return withSecurityHeaders(response);
    }

    if (path === '/api/research-preview') {
      if (!rateAllowed(request, '/api/research-preview')) return json({ error: 'Too many requests. Please try again later.' }, 429);
      if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405, { Allow: 'POST' });
      if (!originAllowed(request)) return json({ error: 'Origin not allowed.' }, 403);
      const mod = await import('./functions/api/research-preview.js');
      const response = await mod.onRequestPost({ request, env, ctx, params: {} });
      return withSecurityHeaders(response);
    }

    const response = await env.ASSETS.fetch(request);
    return withSecurityHeaders(response);
  }
};

function originAllowed(request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    return ALLOWED_ORIGINS.has(new URL(origin).origin);
  } catch {
    return false;
  }
}

function rateAllowed(request, path) {
  const rule = RATE_LIMITS[path];
  if (!rule) return true;
  const forwarded = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || 'unknown';
  const ip = forwarded.split(',')[0].trim().slice(0, 64);
  const now = Date.now();
  const key = `${path}:${ip}`;
  const previous = RATE_BUCKETS.get(key);
  if (!previous || now - previous.start >= rule.windowMs) {
    RATE_BUCKETS.set(key, { start: now, count: 1 });
    return true;
  }
  if (previous.count >= rule.limit) return false;
  previous.count += 1;
  return true;
}

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  if (new URL(response.url || 'https://mrmproleads.com/').pathname.startsWith('/api/')) {
    headers.set('Cache-Control', 'no-store');
  }
  if (headers.get('Content-Type')?.includes('text/html')) {
    headers.set('Content-Security-Policy', "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; frame-src 'self';");
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function apiText(message, status, extra = {}) {
  return withSecurityHeaders(new Response(message, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8', ...extra } }));
}

function json(data, status = 200, extra = {}) {
  return withSecurityHeaders(new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extra } }));
}
