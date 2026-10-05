# MRMProLeads Production Smoke Test

Run these after the V5.5.7 source is deployed. Do not put secrets in this file or in GitHub.

## Browser checks
- `https://mrmproleads.com/` loads with HTTPS and no mixed-content warnings.
- `/about/`, `/services/`, `/pricing/`, `/research-starter/`, `/insights/` load normally.
- Main CTA scrolls/navigates to the intended pilot action.
- Pilot form can be focused and submitted from keyboard.

## API checks
### Pilot
Submit the production form with a real test address you control. Expected:
- HTTP `303` from `/api/pilot`
- redirect to `/success.html`
- email received by the configured MRMProLeads inbox
- reply-to equals the submitted email

### Research preview
POST JSON to `/api/research-preview` with a public company URL. Expected:
- HTTP `200`
- JSON includes `finalUrl`, `title`, `description`, `headings`, `signalCues`, `gaps`, `sources`, `observedAt`
- private/local hostnames are rejected

## Headers
Confirm production responses include at least:
- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Content-Security-Policy`

## Deployment architecture
GitHub `main` → Cloudflare primary (`mrmproleads.com`) + Netlify backup (`mrmproleads.netlify.app`).
The existing Cloudflare Worker remains the Worker; do not create another Worker.
