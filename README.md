Current hardening release: V5.5.7.2 — Cloudflare redirect configuration fix.


> **Current hardening release: V5.5.7 — production hardening pass.**

# MRMProLeads — Final Website

Primary domain: https://mrmproleads.com/

## Architecture
- GitHub: source/code
- Cloudflare Workers: primary production Worker + static assets + API routes
- Spaceship: domain/DNS
- Spacemail: business email
- Netlify: backup deployment via netlify.toml; redirects to .com

## Locked commercial ladder
- $99 — Paid Research Test — 3 accounts
- $199 — Account Intelligence Sprint — 10 accounts
- $299 — Buying Committee Intelligence — 10 accounts
- $499 — Strategic Account Intelligence — 10 accounts
- $399/month — Monthly Account Intelligence — 10 fresh accounts/month

## Form delivery
The site form posts to `/api/pilot` through the production Cloudflare Worker. Set these Worker environment secrets/variables:
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


## Research Starter
The `/research-starter/` page is the One-Stop Research Starter layer. It includes browser-local diagnosis, a public-URL evidence preview via `/api/research-preview`, local CSV/XLSX account preview, service selection, offer-aware scope building, evidence transparency, research walkthrough, before/after comparison, and structured pilot qualification. The URL preview is deliberately evidence-conservative and does not fabricate ICP fit, intent, funding, revenue, or decision-maker facts.


## V5.2 — Research Starter trust/conversion upgrade (2026-09-30)
- Upgraded `/api/research-preview` with observed timestamp and public evidence-source trail.
- Research Starter preview now distinguishes public snapshot vs full paid account investigation.
- Added source-aware evidence links to preview results.
- Added a public-safe, documented six-account enterprise research case-study section without inventing commercial outcomes.
- Added a compact proof strip to the homepage using existing documented execution/process evidence.
- Added contextual Research Starter CTAs to key service, methodology, insight, agency, resource, pricing, comparison, FAQ and product pages.
- Preserved the evidence rule: unknown information stays unknown; no fabricated testimonials, outcomes or buyer intent.


### V5.2 Founder / Brand Rendering Fix (2026-10-04)
- Hero founder portrait now uses the full-frame square founder image instead of the cropped 4:5 variant.
- Hero signal board overlap reduced so the founder portrait remains clearly visible.
- Navbar MRMProLeads logo is served as an external optimized asset for smaller HTML payloads and better caching.
- Existing V5.2 features and content are preserved.


## V5.2 GODMODE conversion/UI cleanup — 2026-10-04
- Hero founder portrait removed; replaced with evidence-led account-intelligence visual.
- Built-for strip upgraded into larger premium positioning cards.
- Client path reframed as Discover → Diagnose → Review → Pilot → Retain.
- Evidence claims boxes use positive/boundary color coding and sharper language.
- Homepage methodology condensed; full methodology remains linked.
- Revenue ecosystem reframed around one research engine and a standalone flywheel.
- Publishing section now uses MRMProLeads.com as the umbrella business HQ.
- Editorial flow duplicate removed.
- Footer reduced to essential navigation.


## V5.3 — Conversion Architecture (2026-10-04)
- Homepage is now the premium conversion layer: centered hero, separate Account Intelligence showcase, Research Starter teaser, $99 pilot path, proof/evidence, methodology preview, founder trust and editorial teaser.
- Deep material is preserved on dedicated pages: `/account-intelligence/`, `/methodology/`, `/proof/`, `/pricing/`, `/insights/`, `/resources/`, `/about/`.
- `/research-starter/` is the public utility; `/client-hunter/` remains only as a noindex compatibility alias.
- Editorial is positioned as a secondary authority + passive-income layer through Insights, Resource Hub and Gumroad; services remain the core commercial offer.
- Public-facing terminology no longer uses the internal Client Hunter label.
- Existing analytics, form infrastructure, evidence discipline, founder assets and public links are preserved.

## Research Starter V5.4 split
The Research Starter is intentionally split into two focused pages:

- `/research-starter/` — Diagnose + Research URL + Upload Accounts
- `/research-starter/scope/` — Service Selector + Scope Builder + Walkthrough + Evidence + Before/After + Pilot

The workflow navigation is floating/compact and auto-hides while scrolling down. Context from page 1 can be carried into the pilot page locally through browser storage.
