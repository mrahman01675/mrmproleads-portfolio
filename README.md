# MRMProLeads — Final Website

Primary domain: https://mrmproleads.com/

## Architecture
- GitHub: source/code
- Cloudflare Pages: hosting/CDN + auto deploy
- Spaceship: domain/DNS
- Spacemail: business email
- Netlify: no deployment dependency

## Locked commercial ladder
- $99 — Paid Research Test — 3 accounts
- $199 — Account Intelligence Sprint — 10 accounts
- $299 — Buying Committee Intelligence — 10 accounts
- $499 — Strategic Account Intelligence — 10 accounts
- $399/month — Monthly Account Intelligence — 10 fresh accounts/month

## Form delivery
The site form posts to `/api/pilot` (Cloudflare Pages Function). Set these Cloudflare Pages/Workers environment secrets/variables:
- `RESEND_API_KEY` — Resend API key
- `CONTACT_TO_EMAIL` — destination inbox
- `CONTACT_FROM_EMAIL` — verified sender address on the email provider

No public email address is displayed in the site UI.

## Assistant
`/assistant/` contains the MRMProLeads Assistant research-scoping experience. It helps visitors identify the appropriate research depth without inventing account facts.

## GA4
GA4 measurement ID already present in the site: `G-17ZBPZC3GE`. The primary form conversion is emitted as `generate_lead`; CTA interactions use `cta_click`.


## September 27, 2026 audit upgrade
- Added dedicated Pricing, FAQ and Comparison pages.
- Added AI-readable llms.txt and llms-full.txt.
- Added FAQPage, HowTo, BreadcrumbList, Service, Organization, DefinedTerm and Article structured data where supported by real site content.
- Expanded About page with positioning, methodology philosophy and public-data standard.
- Added a category-definition insight for research-led ABM intelligence.
- Kept case-study claims evidence-safe; no fabricated client names, star ratings or commercial outcomes were added.
- LinkedIn Insight Tag and Meta Pixel are intentionally not hardcoded without real account IDs. Enable them only after the IDs are supplied and only if paid/retargeting campaigns are actually planned.


## Client Hunter
The `/client-hunter/` page is the One-Stop Client Hunter layer. It includes browser-local diagnosis, a public-URL evidence preview via `/api/research-preview`, local CSV/XLSX account preview, service selection, offer-aware scope building, evidence transparency, research walkthrough, before/after comparison, and structured pilot qualification. The URL preview is deliberately evidence-conservative and does not fabricate ICP fit, intent, funding, revenue, or decision-maker facts.


## V5.2 — Client Hunter trust/conversion upgrade (2026-09-30)
- Upgraded `/api/research-preview` with observed timestamp and public evidence-source trail.
- Client Hunter preview now distinguishes public snapshot vs full paid account investigation.
- Added source-aware evidence links to preview results.
- Added a public-safe, documented six-account enterprise research case-study section without inventing commercial outcomes.
- Added a compact proof strip to the homepage using existing documented execution/process evidence.
- Added contextual Client Hunter CTAs to key service, methodology, insight, agency, resource, pricing, comparison, FAQ and product pages.
- Preserved the evidence rule: unknown information stays unknown; no fabricated testimonials, outcomes or buyer intent.
