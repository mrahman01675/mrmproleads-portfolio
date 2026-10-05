const MAX_BYTES = 700_000;
const MAX_REDIRECTS = 2;

export async function onRequestPost({ request }) {
  const securityHeaders = { 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff' };
  if (request.method !== 'POST') return json({error:'Method not allowed.'},405,securityHeaders);
  const contentType = request.headers.get('content-type') || '';
  if (!/application\/json/i.test(contentType)) return json({error:'JSON request body required.'},415,securityHeaders);
  const length = Number(request.headers.get('content-length') || 0);
  if (length && length > 4096) return json({error:'Request too large.'},413,securityHeaders);
  try {
    const body = await request.json();
    let url = String(body?.url || '').trim();
    if (!url) return json({ error: 'A public company URL is required.' }, 400, securityHeaders);
    if (url.length > 500) return json({ error: 'The URL is too long.' }, 400, securityHeaders);
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    const parsed = new URL(url);
    if (!['http:','https:'].includes(parsed.protocol) || parsed.username || parsed.password || (parsed.port && !['80','443'].includes(parsed.port))) return json({ error: 'Only public HTTP(S) URLs on standard ports are supported.' }, 400, securityHeaders);
    if (!isSafeHostname(parsed.hostname)) return json({ error: 'That hostname is not allowed for public research preview.' }, 400, securityHeaders);
    const result = await fetchPublic(url, 0);
    return json({
      finalUrl: result.url,
      hostname: new URL(result.url).hostname,
      title: result.title,
      description: result.description,
      headings: result.headings,
      linkedinLinks: result.linkedinLinks,
      contactLinks: result.contactLinks,
      signalCues: result.signalCues,
      icpCue: result.icpCue,
      gaps: result.gaps,
      sources: result.sources,
      observedAt: result.observedAt
    });
  } catch (e) {
    return json({ error: 'The public page could not be fetched. Try the company homepage or use the pilot form with the URL.' }, 502, securityHeaders);
  }
}

async function fetchPublic(url, depth) {
  const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'MRMProLeads-Public-Research-Preview/1.0' } });
  if (res.status >= 300 && res.status < 400) {
    if (depth >= MAX_REDIRECTS) throw new Error('Too many redirects');
    const loc = res.headers.get('location');
    if (!loc) throw new Error('Redirect without location');
    const next = new URL(loc, url);
    if (!['http:','https:'].includes(next.protocol) || next.username || next.password || (next.port && !['80','443'].includes(next.port))) throw new Error('Unsafe redirect');
    if (!isSafeHostname(next.hostname)) throw new Error('Unsafe redirect');
    return fetchPublic(next.toString(), depth + 1);
  }
  if (!res.ok) throw new Error('Public page unavailable');
  const type = res.headers.get('content-type') || '';
  if (!/text\/html|application\/xhtml\+xml/i.test(type)) throw new Error('The URL did not return a public HTML page');
  const reader = res.body?.getReader();
  if (!reader) throw new Error('No readable response');
  const chunks = [];
  let total = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BYTES) { await reader.cancel(); break; }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) { bytes.set(c, off); off += c.byteLength; }
  const html = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
  return parsePage(html, url);
}

function parsePage(html, url) {
  const clean = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<!--([\s\S]*?)-->/g, ' ');
  const title = decode(textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
  const description = decode(attrMatch(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i) || attrMatch(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i));
  const headings = [...clean.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)].map(m => decode(strip(m[1]))).filter(Boolean).slice(0, 12);
  const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({ href: m[1], text: decode(strip(m[2])) }));
  const base = new URL(url);
  const normalizedLinks = links.map(x => {
    try { return { ...x, absolute: new URL(x.href, url).toString() }; } catch { return { ...x, absolute: '' }; }
  });
  const linkedinLinks = normalizedLinks.filter(x => /linkedin\.com\/(in|company)\//i.test(x.absolute)).length;
  const contactLinks = normalizedLinks.filter(x => /(contact|about|team|sales|demo|book|calendly|mailto:)/i.test(x.href + ' ' + x.text)).length;
  const lower = strip(clean).toLowerCase();
  const cues = [];
  if (/(careers|jobs|we're hiring|join our team|open roles)/i.test(lower)) cues.push('Careers / hiring cue observed');
  if (/(product launch|launched|new product|new release|announcing|announcement)/i.test(lower)) cues.push('Product / announcement cue observed');
  if (/(funding|raised|series a|series b|seed round|investment)/i.test(lower)) cues.push('Funding / investment cue observed');
  if (/(expanding|expansion|new market|new office|international)/i.test(lower)) cues.push('Expansion cue observed');
  if (/(partnership|partnered|integration|integrates with)/i.test(lower)) cues.push('Partnership / integration cue observed');
  const icpCue = /(saas|software|platform|api|b2b|enterprise|businesses|teams|ai|salesforce)/i.test(lower) ? 'Relevant B2B/software vocabulary is publicly observable; exact ICP fit still requires the buyer’s criteria.' : 'ICP fit is not established from the fetched page alone.';
  const gaps = [];
  if (!title) gaps.push('Page title not established');
  if (!description) gaps.push('Meta description not established');
  if (!headings.length) gaps.push('No useful H1–H3 headings observed');
  if (!linkedinLinks) gaps.push('No public LinkedIn route observed');
  if (!contactLinks) gaps.push('No obvious contact/about/demo route observed');
  if (!cues.length) gaps.push('No clear hiring/product/funding/expansion/partnership cue observed on this page');
  const sourceLinks = normalizedLinks.filter(x => x.absolute && (/linkedin\.com\/(in|company)\//i.test(x.absolute) || /(careers|jobs|contact|about|team|sales|demo|book|calendly|partner|integration|product|news|press|announcement)/i.test(x.href + ' ' + x.text)));
  const seen = new Set();
  const sources = [{ label: 'Fetched public page', url }];
  for (const x of sourceLinks) {
    if (sources.length >= 8) break;
    try {
      const u = new URL(x.absolute);
      if (u.protocol !== 'https:' && u.protocol !== 'http:') continue;
      if (!/^([a-z0-9.-]+)$/i.test(u.hostname)) continue;
      const key = u.toString();
      if (seen.has(key) || key === url) continue;
      seen.add(key);
      sources.push({ label: x.text || u.pathname.replace(/\/+$/,'').split('/').filter(Boolean).pop() || u.hostname, url: key });
    } catch {}
  }
  return { url, title, description, headings, linkedinLinks, contactLinks, signalCues: cues, icpCue, gaps, sources, observedAt: new Date().toISOString() };
}

function isSafeHostname(host) {
  const h = host.toLowerCase().replace(/^\[|\]$/g, '');
  if (h === 'localhost' || h.endsWith('.localhost') || h === 'metadata.google.internal') return false;
  if (/^(127\.|10\.|192\.168\.|169\.254\.)/.test(h)) return false;
  if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(h)) return false;
  if (h === '::1' || h.startsWith('fc') || h.startsWith('fd') || h.startsWith('fe80:')) return false;
  return /^[a-z0-9.-]+$/.test(h);
}
function textMatch(s, r){const m=s.match(r);return m?m[1]:''}
function attrMatch(s,r){const m=s.match(r);return m?m[1]:''}
function strip(s){return String(s||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim()}
function decode(s){return String(s||'').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)))}
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}})}
