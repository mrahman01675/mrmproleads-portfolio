# MRMProLeads — Master Changelog

> Consolidated record of the version changelogs, audits, QA reports, and surgical fix notes found in the supplied repository snapshot.
> Source snapshot: `MRMProLeads_GitHub_Repo_Inquiry_Classification_Matched.zip`
> Consolidated documents: **33**

## Contents

1. [V5.3-CHANGELOG.md](#v5-3-changelog-md)
2. [V5.3.1-CHANGELOG.md](#v5-3-1-changelog-md)
3. [V5.3.4-GODMODE-FINAL-AUDIT.md](#v5-3-4-godmode-final-audit-md)
4. [V5.3.5-FOOTER-FINAL-AUDIT.md](#v5-3-5-footer-final-audit-md)
5. [V5.3.8-TECHNICAL-NORMALIZATION-AUDIT.md](#v5-3-8-technical-normalization-audit-md)
6. [V5.3.9-VISUAL-FIX-AUDIT.md](#v5-3-9-visual-fix-audit-md)
7. [V5.3.19-RESEARCH-STARTER-VISUAL-AUDIT.md](#v5-3-19-research-starter-visual-audit-md)
8. [V5.3.21-GODMODE-ONE-SHOT-AUDIT-REPORT.md](#v5-3-21-godmode-one-shot-audit-report-md)
9. [V5.4-CHANGELOG.md](#v5-4-changelog-md)
10. [V5.4-GODMODE-FINAL-AUDIT.md](#v5-4-godmode-final-audit-md)
11. [V5.4.1-GODMODE-FINAL-CORRECTIONS.md](#v5-4-1-godmode-final-corrections-md)
12. [V5.4.2-GODMODE-FINAL-AUDIT.md](#v5-4-2-godmode-final-audit-md)
13. [V5.4.3-SCREENSHOT-FIX-NOTES.md](#v5-4-3-screenshot-fix-notes-md)
14. [V5.4.4-SURGICAL-FIX-NOTES.md](#v5-4-4-surgical-fix-notes-md)
15. [V5.4.8-PROOF-STRIP-VISUAL-FIX.md](#v5-4-8-proof-strip-visual-fix-md)
16. [V5.4.9-PILOT-CTA-CONTRAST-FIX.md](#v5-4-9-pilot-cta-contrast-fix-md)
17. [V5.5.0-RESEARCH-STACK-CONSOLIDATION.md](#v5-5-0-research-stack-consolidation-md)
18. [V5.5.2-OFFER-LADDER-CTA-FIX.md](#v5-5-2-offer-ladder-cta-fix-md)
19. [V5.5.3-INSIGHTS-FLYWHEEL-NAV-FIX.md](#v5-5-3-insights-flywheel-nav-fix-md)
20. [V5.5.4-ABOUT-PREMIUM-PRESENTATION.md](#v5-5-4-about-premium-presentation-md)
21. [V5.5.5-RESEARCH-PILLARS-PREMIUM.md](#v5-5-5-research-pillars-premium-md)
22. [V5.5.6-ABOUT-OPERATING-STANDARD-PILLARS.md](#v5-5-6-about-operating-standard-pillars-md)
23. [V5.5.7-PRODUCTION-HARDENING.md](#v5-5-7-production-hardening-md)
24. [V5.5.7.1-CLOUDFLARE-WORKER-FIX.md](#v5-5-7-1-cloudflare-worker-fix-md)
25. [V5.5.7.2-CLOUDFLARE-REDIRECT-FIX.md](#v5-5-7-2-cloudflare-redirect-fix-md)
26. [V5.5.7.7-SITE-WIDE-PREMIUM-CTA-NORMALIZATION.md](#v5-5-7-7-site-wide-premium-cta-normalization-md)
27. [V5.5.7.9-SITE-WIDE-LINK-GLOW.md](#v5-5-7-9-site-wide-link-glow-md)
28. [V5.5.7.10-CTA-ICON-CORRECTION.md](#v5-5-7-10-cta-icon-correction-md)
29. [V5.5.7.13-FOOTER-NAV-DE-DUPLICATION.md](#v5-5-7-13-footer-nav-de-duplication-md)
30. [V5.5.7.16-PROOF-GLANCE-FIGURE-MATCH.md](#v5-5-7-16-proof-glance-figure-match-md)
31. [V5.5.7.18-PUBLIC-RESOURCES-CARD-REDESIGN.md](#v5-5-7-18-public-resources-card-redesign-md)
32. [V5.5.7.20-FOOTER-FINAL-LAYOUT.md](#v5-5-7-20-footer-final-layout-md)
33. [V5.5.8.2-SURGICAL-MOBILE-REFINEMENT.md](#v5-5-8-2-surgical-mobile-refinement-md)

---

<!-- Source file: V5.3-CHANGELOG.md -->

# MRMProLeads V5.3 — Premium Conversion Architecture

Date: 2026-10-04

## Core change
The homepage is now a premium conversion layer rather than the full MRMProLeads business encyclopedia. Deep material remains available through dedicated subpages.

## Homepage
- Centered premium hero; founder portrait is not used in the hero.
- Account Intelligence is a separate showcase immediately below the top brand/fit layer.
- Added Research Starter teaser linking to `/research-starter/`.
- Preserved the core "What you receive", Why Account Intelligence, $99 pilot, methodology preview, proof, evidence, resources, founder, FAQ and pilot form layers.
- Removed deep/repetitive homepage blocks that belong in subpages: full diagnostic, full URL preview, full framework, full offer ladder, duplicate deliverables, client path deep dive, revenue ecosystem, publishing/distribution architecture and assistant block.
- Added a compact Research & Insights editorial showcase for authority, SEO and passive-income pathways.
- Major section heading groups are centered while card/body copy remains readable.

## Deep pages
- `/account-intelligence/` — full intelligence framework, output model, research proof demo and comparison logic.
- `/methodology/` — detailed methodology.
- `/proof/` — proof + evidence + public resources.
- `/pricing/` — complete offer ladder.
- `/insights/` — editorial hub with Medium, Resource Hub and Gumroad pathways.
- `/about/` — dedicated founder version with founder portrait and operating philosophy.
- `/research-starter/` — full interactive research utility.
- `/client-hunter/` — noindex compatibility alias only.

## External ecosystem preserved
- LinkedIn
- Medium
- Gumroad
- MRMProLeads Notion Resource Hub
- Existing public LinkedIn framework link

## Trust / technical preservation
- Existing GA4 measurement preserved.
- Existing Resend/env form infrastructure preserved.
- Existing evidence discipline preserved.
- Existing logo and founder assets preserved.
- `.com` canonical architecture preserved.
- No deployment configuration changed.
- No new Cloudflare project created.

## Deployment
This build is **NOT deployed**. Review locally first. After explicit approval only:
GitHub main → Cloudflare production → live QA → GSC verification.

---

<!-- Source file: V5.3.1-CHANGELOG.md -->

# MRMProLeads V5.3.1

Targeted conversion/UI correction build from V5.3.

- Centered major section heading groups consistently, including Founder and Pilot contact sections.
- Added responsive desktop/mobile alignment rules without forcing card/body copy to center.
- Clarified $99 Paid Research Test scope: evidence-backed 3-account test with primary buyer/relevant buying role, not full buying-committee mapping.
- Standardized the primary pilot CTA language.
- Reframed Research Starter to accept a small account set rather than implying 3–5 accounts at the $99 price.
- Clarified research proof count as 1,263 populated records, with 1,265 as the underlying serial range.
- Reduced tool-stack prominence conceptually without removing functionality.
- Refined Research & Insights editorial wording for client-facing clarity.
- Changed non-success form analytics from `generate_lead` to `pilot_form_started`; `generate_lead` remains on successful conversion only.
- No deployment changes.

---

<!-- Source file: V5.3.4-GODMODE-FINAL-AUDIT.md -->

# MRMProLeads V5.3.4 — GODMODE Final Audit

## Release focus
- Embedded footer logo for reliable local preview and production.
- Rebuilt footer hierarchy so site navigation and external ecosystem links are visibly separated.
- Responsive footer behavior for desktop/tablet/mobile.
- Preserved LinkedIn, Medium, Gumroad and Resource Hub.
- Preserved founder section, research starter, proof, pricing, methodology, services and existing functionality.
- Preserved premium dark/navy + gold visual system.

## Buyer/conversion corrections
- $99 offer remains a controlled 3-account paid research test.
- Primary buyer/relevant buying role wording is used instead of implying unlimited buying-committee depth at $99.
- Research Starter avoids implying that 5 accounts are included in the $99 test.
- Proof headline uses 1,263 populated research records; the 1,265 serial range is treated as supporting audit context.
- Public-facing Client Hunter terminology is absent.

## Static QA
- Internal local references checked: no broken local references found.
- All substantive pages have title/canonical/meta description except intentional 404/success utility pages.
- Success page is noindex/nofollow.
- No deployment configuration was changed.

## Not changed
- Cloudflare project/deployment settings.
- GitHub production branch.
- Form secrets.
- Founder photo placement rule: no founder photo in hero.
- Existing public-safe evidence rules.

---

<!-- Source file: V5.3.5-FOOTER-FINAL-AUDIT.md -->

# MRMProLeads V5.3.5 Footer Final Audit

- Embedded footer logo switched to the supplied premium PNG asset (data URI) for reliable local preview.
- Footer logo enlarged to 220px desktop / 200px small mobile for stronger brand weight.
- Site navigation remains a separate row from external ecosystem links.
- LinkedIn, Medium, Gumroad and Resource Hub now use explicit spacing; no pseudo-separator concatenation.
- Desktop footer uses two-column lower row; mobile stacks cleanly.
- No deployment performed.

---

<!-- Source file: V5.3.8-TECHNICAL-NORMALIZATION-AUDIT.md -->

# MRMProLeads V5.3.8 — Technical Normalization Audit

Date: 2026-10-04

- Direct GA4 `G-17ZBPZC3GE` normalized across all HTML pages. GTM intentionally not added.
- Public/indexable pages normalized with title/description, Open Graph and Twitter/X metadata.
- Existing `.com` canonicals retained.
- Missing deep-page `BreadcrumbList` structured data added.
- About page strengthened with Person + Organization relationship.
- Research Evidence Framework corrected to one H1 and H2 section hierarchy.
- No fabricated dates, ratings, reviews, testimonials, revenue or performance claims.
- Existing V5.3.7 UI/footer preserved.

## Verification
`HTML=23, indexable=20, GA_missing=0, OG_missing=0, Twitter_missing=0, title_missing=0, desc_missing=0, canonical_missing=0, evidence_framework_H1=1`

---

<!-- Source file: V5.3.9-VISUAL-FIX-AUDIT.md -->

# MRMProLeads V5.3.9 — Visual / Rendering Fix Audit

Date: 2026-10-05

## Fixed

1. Removed malformed nested `<style><style>` markup from:
   - `account-intelligence/index.html`
   - `proof/index.html`
   This was causing CSS source text to render visibly in the page.

2. Fixed Insights editorial cards in `insights/index.html`.
   - Added `.grid3` layout styling.
   - Added `.grid3 .card` presentation and hover treatment.
   - Added `.tag` styling.
   - Added responsive one-column behavior below 650px.
   This prevents the top editorial cards from rendering as browser-default blue links.

## QA checks

- No remaining `<style><style>` occurrences.
- No public HTML page contains more than one H1.
- GA4 tag `G-17ZBPZC3GE` is present in the V5.3.8 source across all HTML pages checked.
- ZIP integrity verified with `unzip -t`.

## Scope discipline

No redesign, content rewrite, DNS change, pricing change, or conversion architecture change was made.
Existing V5.3.8 structure and functionality are preserved.

---

<!-- Source file: V5.3.19-RESEARCH-STARTER-VISUAL-AUDIT.md -->

# V5.3.19 Research Starter Visual Audit

- Replaced desktop two-column hero with a premium centered vertical composition.
- Solid, clearly visible navbar background; retained embedded MRMProLeads logo.
- Centered hero copy and client-path card.
- Preserved prior interaction logic and one-click preview files.
- Responsive stack retained for tablet/mobile.

---

<!-- Source file: V5.3.21-GODMODE-ONE-SHOT-AUDIT-REPORT.md -->

# MRMProLeads V5.3.21 — GODMODE One-Shot Audit & QA

## Source of truth
V5.3.20 Global Brand Header/Footer Fix package.

## A. Problems found
- Header/footer implementation was not actually canonical across the public site: several pages still used legacy `header.nav` / `site-footer` shells while a smaller set used the newer canonical shell.
- Shared stylesheet loading was inconsistent across public pages.
- Favicon loading was missing on most public/indexable pages.
- Research Starter contained a second logo-bearing workflow bar, creating duplicate branding/navigation layers.
- Deep research page CSS was still page-local and could regress independently.
- Public pages had inconsistent shell styling even when the visible navigation labels were similar.
- Existing source contained no broken internal links, no JSON-LD parse errors, and no JavaScript syntax errors after excluding JSON-LD scripts.

## B. Root causes
1. The site evolved through page-specific inline CSS/templates rather than one enforced shell.
2. Header/footer markup and class names were duplicated across page families.
3. Common assets/metadata were not normalized across all indexable pages.
4. Research Starter had both a global shell and a workflow-specific logo bar.

## C. Fixes implemented
- Normalized all 20 public/indexable HTML pages to one canonical MRMProLeads header.
- Normalized all 20 public/indexable HTML pages to one canonical MRMProLeads footer.
- Embedded the canonical branded logo in the shell so header/footer rendering does not depend on a fragile relative image path.
- Added `/assets/site-premium.css` to every public/indexable page.
- Added favicon `/assets/favicon-64.png` to every public/indexable page.
- Centralized canonical shell CSS in `assets/site-premium.css`.
- Centralized deep-page CSS in the shared stylesheet.
- Converted Research Starter's secondary navigation into a workflow-only subnav without a duplicate logo.
- Added stronger dark-theme contrast and keyboard focus treatment for controls/links.
- Added current-page `aria-current="page"` to canonical navigation where applicable.
- Preserved existing page content, offers, pricing, forms, APIs, URLs, research logic, and business architecture.
- Preserved `404.html`, `success.html`, and `client-hunter/index.html` as special/noindex routes.

## D. Pages affected
20 public/indexable pages were normalized:
- `/`
- `/about/`
- `/faq/`
- `/proof/`
- `/resources/`
- `/pricing/`
- `/assistant/`
- `/products/`
- `/account-intelligence/`
- `/insights/`
- `/compare/`
- `/services/`
- `/agency-research/`
- `/research-starter/`
- `/case-studies/`
- `/methodology/`
- `/privacy/`
- `/insights/research-led-abm-intelligence/`
- `/evidence/research-evidence-framework/`
- `/evidence/research-at-scale/`

## E. QA results
- 20/20 public pages: exactly one canonical header.
- 20/20 public pages: exactly one canonical footer.
- 20/20 public pages: canonical branded header logo present.
- 20/20 public pages: canonical branded footer logo present.
- 20/20 public pages: shared stylesheet present.
- 20/20 public pages: favicon present.
- 20/20 public pages: GA4 `G-17ZBPZC3GE` present.
- 20/20 public pages: one H1.
- 20/20 public pages: title, meta description, canonical URL present.
- 20/20 public pages: Open Graph core tags present.
- 20/20 public pages: Twitter card metadata present.
- JSON-LD parsing: pass.
- Inline JavaScript syntax check: pass.
- Internal link audit: 0 broken internal links.
- Duplicate ID audit: 0 duplicate IDs.
- Sitemap audit: 20 URLs, all map to existing page files.
- Raw visible CSS-pattern text audit: 0 occurrences on public pages.
- Special noindex routes preserved.

## F. Known limitation
A full real-browser screenshot/console automation pass could not be completed inside the build container because the available headless Chromium process did not terminate reliably. The source-level regression suite above passed, and the previously observed screenshots were used as visual defect evidence, but final human visual approval in the Windows local preview remains the authoritative last step before production deployment.

## G. Final package
V5.3.21 is packaged with the complete site source, assets, shared CSS, existing JavaScript, `START-PREVIEW.bat`, `STOP-PREVIEW.bat`, and this audit report.

---

<!-- Source file: V5.4-CHANGELOG.md -->

# V5.4 — Research Starter + Global Production QA

## Added
- Split Research Starter into `/research-starter/` and `/research-starter/scope/`.
- Added scoped Research Starter visual system in `assets/site-premium.css`.
- Added `assets/research-starter-inputs.js`.
- Added `assets/research-starter-scope.js`.
- Added browser-local context handoff between Research Starter pages.
- Added floating/auto-hiding workflow navigation.
- Added constrained centered card system for Research Starter.
- Added `/research-starter/scope/` to sitemap.

## Fixed
- Research Starter page length / information density.
- Workflow navigation competing with canonical site header.
- Wide utility cards that visually stretched across the page.
- CTA contrast on the canonical Request a Pilot button.
- Local preview interaction messaging for the public-evidence endpoint.
- Cross-page pilot context continuity.

## Preserved
- Existing offers and pricing.
- Existing research workflow and evidence boundaries.
- Existing canonical header/footer/logo system.
- Existing GA4 configuration.
- Existing public URLs.
- Existing pilot form endpoint and field names.
- Existing local upload parsing behavior.

## QA
See `V5.4-GODMODE-FINAL-AUDIT.md` for the full regression audit.

---

<!-- Source file: V5.4-GODMODE-FINAL-AUDIT.md -->

# MRMProLeads V5.4 — GODMODE Final Audit

## Executive decision
The Research Starter workflow has been split into two focused public pages to reduce scroll fatigue and improve buyer comprehension:

1. `/research-starter/` — Diagnose, public URL evidence preview, and existing-account upload.
2. `/research-starter/scope/` — Research-layer selection, scope builder, walkthrough, evidence transparency, before/after, and pilot request.

The change is a targeted evolution of the existing V5.3.x architecture. Existing offers, pricing, forms, business logic, canonical shell, logo treatment, analytics and public URLs were preserved.

## Buyer / visitor lens

### Problems identified
- The Research Starter was too long for a high-intent visitor and mixed discovery, qualification, research mechanics and conversion into one continuous page.
- Workflow navigation competed visually with the canonical site header.
- Research Starter content boxes were visually wider than the premium front-page card system and could read like full-width utility panels.
- Some interactive elements inherited generic/global styles, creating inconsistent button contrast.
- The header CTA could become visually low-contrast in certain states.
- Research Starter interactions were tightly coupled to a single-page DOM, making the long page harder to maintain and making local static preview behavior less obvious.

### Product decisions
- Split the workflow at the natural buyer decision boundary: **inputs/evidence first → scope/pilot second**.
- Keep the canonical global MRMProLeads header/footer on both pages.
- Make the workflow nav compact, floating and auto-hiding on downward scroll; it reappears when the visitor scrolls upward.
- Use centered, constrained cards rather than full-width panels.
- Keep card dimensions content-driven with sensible min-height behavior rather than artificial fixed heights.
- Maintain a strong dark-theme contrast system and explicit CTA contrast.
- Preserve local-only upload behavior and the production evidence API path.
- Persist the visitor's pilot context between the two Research Starter pages using `localStorage`, so the second page can inherit URL/account/diagnostic context without exposing it publicly.

## Functional changes

### Page 1 — Research Starter
- Diagnostic Back/Next flow retained and made self-contained.
- Public URL evidence preview retained.
- Local static mode now clearly reports when `/api/research-preview` is unavailable rather than appearing broken.
- CSV/XLSX account preview retained and kept browser-local.
- Diagnostic, URL preview and upload results can carry relevant context into the Scope & Pilot page.
- Added clear continuation CTA to the second page.

### Page 2 — Research Scope & Pilot
- Service selector retained.
- Scope builder retained with existing offer ladder and prices.
- Research walkthrough retained.
- Evidence transparency retained.
- Before/after comparison retained.
- Pilot request form retained.
- Context from page 1 is restored when available.

## Visual system
- Research Starter cards use a constrained ~960px content system.
- Section headings are centered and capped for readable line length.
- Service cards are centered and balanced rather than stretched across the viewport.
- Evidence rows use a consistent three-column desktop structure and collapse safely on smaller screens.
- Form remains two-column on desktop and one-column on mobile.
- Header CTA uses dark text on the gold background for reliable contrast.
- Workflow subnav is visually subordinate to the canonical header and does not carry a duplicate logo.
- Mobile layouts collapse without intentional horizontal overflow.

## Global site regression audit
Static audit completed across 21 public/indexable HTML pages:

- Canonical header: **21/21**
- Canonical footer: **21/21**
- Branded header logo: **21/21**
- Branded footer logo: **21/21**
- Shared premium stylesheet: **21/21**
- Favicon: **21/21**
- GA4 `G-17ZBPZC3GE`: **21/21**
- Exactly one H1: **21/21**
- Title + meta description + canonical: **21/21**
- Core Open Graph metadata: **21/21**
- Twitter card metadata: **21/21**
- JSON-LD parsing: **PASS**
- Duplicate IDs: **0**
- Broken internal route targets: **0**
- Sitemap routes match public page routes: **PASS**
- JavaScript syntax checks: **PASS**
- CSS brace/parenthesis balance: **PASS**
- Raw visible CSS-pattern leakage: **0 found by static scan**

## Local preview
Included:
- `START-PREVIEW.bat`
- `STOP-PREVIEW.bat`

The preview opens `/research-starter/` automatically. The Scope & Pilot page is available at `/research-starter/scope/` and is also linked from the workflow navigation.

## Important limitation
The build environment could not complete a real Windows Chrome screenshot/interaction pass against `127.0.0.1`; browser automation was blocked by the environment. Source-level QA, JavaScript syntax checks, HTML parsing, route checks, metadata checks, and the supplied visual evidence were used for regression validation. Final Windows visual approval remains the authoritative pre-deployment gate.

## No fabricated claims
No new client result, testimonial, revenue claim, buying-intent claim, contact identity, or research outcome was invented.

---

<!-- Source file: V5.4.1-GODMODE-FINAL-CORRECTIONS.md -->

# MRMProLeads V5.4.1 — GODMODE Final Corrections

Base: V5.4 Research Starter Beyond Godlevel (2026-10-05).

## Implemented
- Restored the Research Tool Stack on Insights as a reusable data-driven section.
- Preserved known tool links from the prior MRMProLeads tool stack: Apollo.io and Snov.io partner links; LinkedIn Sales Navigator, HubSpot, Hunter and NeverBounce official links.
- Added `assets/tools-config.js` so future tools/affiliate links can be added by editing one array without changing the layout.
- Added clear partner-link disclosure.
- Added clickable CTAs to every pricing package.
- Centered pricing-card presentation while keeping feature lists readable.
- Normalized Research Starter button/input styling to prevent browser-default controls.
- Equalized research service-card sizing/alignment.
- Added floating Research Starter workflow auto-hide behavior.
- Preserved the existing V5.4 two-page Research Starter architecture and functionality.

## Guardrails
- No new fabricated claims, testimonials, outcomes or proof.
- No deployment performed.
- GitHub/Cloudflare/Netlify architecture unchanged.

---

<!-- Source file: V5.4.2-GODMODE-FINAL-AUDIT.md -->

# MRMProLeads V5.4.2 — GODMODE Final Correction Audit

Base: V5.4.1.

Implemented systemic corrections from the Windows visual review:
- Clarified methodology hierarchy: 4 strategic stages + 5 internal research capabilities.
- Rebuilt methodology cards into balanced, constrained premium cards.
- Removed duplicate Research Starter CTA blocks on Resources and Methodology.
- Normalized pricing package CTA buttons so every package has a clear clickable primary action.
- Centered pricing-card presentation while retaining left-readable feature lists.
- Styled Research Starter diagnostic choices as branded controls instead of browser-default buttons.
- Styled native file-picker button.
- Strengthened floating Research Starter workflow navigation into real pill controls.
- Reduced homepage hero dead space while preserving the atmospheric gradient.
- Kept canonical header transparent/glass rather than opaque.
- Preserved the two-page Research Starter architecture and all existing offers, pricing, forms, URLs, analytics and business logic.

No deployment performed.

---

<!-- Source file: V5.4.3-SCREENSHOT-FIX-NOTES.md -->

# MRMProLeads V5.4.3 — Screenshot-driven correction pass

Fixed from local Chrome screenshots:

- Homepage hero dead space reduced.
- Services offer-ladder cards changed from stretched/equal-height to content-driven.
- Methodology remains 4 strategic stages + 5 supporting capabilities; capability layout is now visually grouped as 3+2 on desktop.
- Research Starter workflow nav converted from floating browser-like strip into a real premium subnav.
- Research Starter client-path arrow chain converted into a pill-based process strip.
- Research Starter Back control restyled as a proper secondary action.
- Insights duplicate Research Starter CTA removed; tailored contextual CTA retained.

No deployment, business logic, pricing, form infrastructure, or domain architecture changed.

---

<!-- Source file: V5.4.4-SURGICAL-FIX-NOTES.md -->

# V5.4.4 — Research Starter Surgical Fix

- Removed the obsolete floating Research Starter workflow mini-nav from `/research-starter/`.
- Corrected the Diagnose Back control so it uses the MRMProLeads dark secondary-button treatment instead of browser/default link styling.
- Added stronger focus/hover states while preserving the existing primary gold Next action.
- No content, pricing, form logic, or business-flow changes.

---

<!-- Source file: V5.4.8-PROOF-STRIP-VISUAL-FIX.md -->

# V5.4.8 — Proof Strip Visual Fix

Targeted correction to the homepage Public Proof at a Glance section.

- Restored stacked/centered metric hierarchy: metric first, description second.
- Converted the three proof links into balanced premium cards.
- Equalized card height and spacing.
- Preserved all existing text, links, numbers, destinations, and disclosure copy.
- Added responsive 2-column and 1-column behavior.
- No other page content or functionality changed.

---

<!-- Source file: V5.4.9-PILOT-CTA-CONTRAST-FIX.md -->

# MRMProLeads V5.4.9 — Pilot CTA Contrast Fix

## Surgical change
- Standardized pilot/commercial CTA buttons to the MRMProLeads gold gradient.
- Forced CTA text to true near-black (`#0a0e16`) with `!important` and `-webkit-text-fill-color` to prevent inherited/legacy text colors.
- Applied to canonical header `Request a Pilot`, `.btn-primary`, `.offer-cta`, contact/pilot CTA links, and pilot form primary buttons.
- Preserved existing links, destinations, copy, layout, branding, functionality, and all non-CTA content.

## Intended visual
Gold/yellow button + black text, matching the existing premium MRMProLeads CTA treatment.

---

<!-- Source file: V5.5.0-RESEARCH-STACK-CONSOLIDATION.md -->

# V5.5.0 — Research Stack Consolidation

- Removed the duplicate "Research stack" section from the homepage.
- Consolidated the displayed research-tool names into the maintainable `assets/tools-config.js` configuration used by `/insights/`.
- Preserved existing affiliate/partner links for Apollo.io and Snov.io.
- Preserved existing official links for LinkedIn Sales Navigator, HubSpot, Hunter and NeverBounce.
- Added the former homepage stack items: Public web research, CRM / account data, Email verification, and Google Sheets / Excel.
- Future tools can still be added by editing only `assets/tools-config.js`; no layout HTML changes are required.
- No other homepage section was intentionally changed.

---

<!-- Source file: V5.5.2-OFFER-LADDER-CTA-FIX.md -->

# V5.5.2 — Offer Ladder CTA Fix

## Change
Added a clickable Request/Pilot CTA to every card in `/services/` → Offer ladder.

## CTA mapping
- $99 · 3 accounts → Request the $99 / 3-account test →
- $199 · 10 accounts → Request the $199 sprint →
- $299 · 10 accounts → Request the $299 scope →
- $499 · 10 accounts → Request the $499 scope →
- $399/month · 10 fresh → Request monthly intelligence →
- Custom → Request a custom scope →

All CTAs point to `/#contact` and use the same gold + black treatment as the pricing CTAs.

## Pricing
`/pricing/` already had matching clickable CTAs for all six offers, so its content/link structure was preserved.

## Scope
No pricing, offer copy, destinations, or other page sections were changed.

---

<!-- Source file: V5.5.3-INSIGHTS-FLYWHEEL-NAV-FIX.md -->

# V5.5.3 — Insights Flywheel & Navigation Fix

## Changes
- Replaced `/insights/` publishing-system anchor link with a dedicated `/insights/publishing-system/` page.
- Replaced `/insights/` monetization-model anchor link with a dedicated `/insights/monetization-model/` page.
- Added both new pages to `sitemap.xml`.
- Upgraded the Content Flywheel section on `/insights/` into a premium circular visual system with six stages and a central MRMProLeads outcome.
- Added responsive mobile fallback for the flywheel.
- Preserved the existing research-first / affiliate-disclosure positioning.
- No changes to offer pricing or payment logic.

---

<!-- Source file: V5.5.4-ABOUT-PREMIUM-PRESENTATION.md -->

# MRMProLeads V5.5.4 — About Premium Presentation

## Scope
Surgical visual upgrade to `/about/` only, based on the approved V5.5.3 baseline.

## Changes
- Reworked the founder-page CTA area into three distinct contextual CTA cards:
  - Account Intelligence
  - Research Starter
  - Insights
- Replaced the flat Operating Standard text strip with a premium framed panel.
- Added three evidence principles:
  1. Evidence first
  2. Human reviewed
  3. Unknown stays unknown
- Added restrained blue/gold/violet accents consistent with the existing MRMProLeads visual system.
- Added a direct link to the Evidence Framework from the Operating Standard panel.
- Added responsive stacking for mobile.
- No business claims, pricing, proof numbers, or existing routes were changed.

---

<!-- Source file: V5.5.5-RESEARCH-PILLARS-PREMIUM.md -->

# MRMProLeads V5.5.5 — Premium Research Pillars

## Change
Replaced the plain hero micro-line with a unified premium Research Standard component.

### Three pillars
1. Human-Reviewed Research
2. Buying Committee Mapping
3. Contact Intelligence

## UX intent
The component answers the immediate differentiation question after the hero: what makes the research different?

## Scope
- Homepage only
- No content claims added beyond the existing positioning
- Existing navigation and CTA destinations preserved
- Responsive desktop/mobile treatment included

---

<!-- Source file: V5.5.6-ABOUT-OPERATING-STANDARD-PILLARS.md -->

# MRMProLeads V5.5.6 — About Operating Standard Pillars

- Refined `/about/` Operating Standard into a stronger premium presentation.
- Added explicit “THREE RESEARCH PILLARS” visual cue.
- Highlighted the three existing standards as the primary visual anchors: Evidence first, Human reviewed, Unknown stays unknown.
- Added subtle blue/gold/violet accent treatment and responsive behavior.
- Preserved existing copy, routes, footer, and evidence framework CTA.

---

<!-- Source file: V5.5.7-PRODUCTION-HARDENING.md -->

# MRMProLeads V5.5.7 — Production Hardening

This release is a surgical hardening pass over V5.5.6. No new visual product features were introduced.

## Included
- Externalized repeated base64 logo and founder portrait assets to reduce HTML payload and improve caching.
- Added explicit portrait dimensions to reduce CLS risk.
- Fixed stale Open Graph/Twitter metadata on the two Insights detail pages.
- Improved key-page meta descriptions.
- Added Google Fonts preconnect on pages that load Google Fonts.
- Added a lightweight site-wide analytics normalization layer for CTA and pilot-form interaction tracking without duplicating pages that already have those events.
- Hardened `/api/pilot` input handling and Resend timeout behavior.
- Hardened `/api/research-preview` request size, content-type, URL, redirect and standard-port checks.
- Added no-store/security response headers to API responses.
- Added a Netlify backup redirect to `mrmproleads.com`.

## Intentionally NOT changed
- Existing brand/design system.
- Existing pricing/offers.
- Existing public-proof claims.
- Existing Cloudflare Worker project. No new Worker is created by this package.

## Final live certification still requires
1. Attach `mrmproleads.com` as a **Custom Domain** to the existing Cloudflare Worker `mrmproleads`.
2. Confirm the Worker actually serves the site and `/api/pilot` + `/api/research-preview`.
3. Confirm production secrets `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are present in the environment used by `/api/pilot`.
4. Submit one real pilot form and confirm receipt + `/success.html`.
5. Run one real research-preview request against a public company homepage.
6. Verify HTTPS, security headers, canonical redirects, mobile layout and keyboard focus on the live `.com`.
7. Deploy the same GitHub `main` source to Netlify backup and confirm the backup redirect.

Until those live checks pass, the build should be described as **production-ready candidate**, not live-certified.

---

<!-- Source file: V5.5.7.1-CLOUDFLARE-WORKER-FIX.md -->

# V5.5.7.1 — Cloudflare Worker Deployment Fix

## Why
The V5.5.7 Cloudflare build failed because the Netlify `_redirects` file contains an absolute destination URL. Wrangler's Worker static-assets parser requires relative redirect targets.

## Fix
- Added `wrangler.toml` with an explicit `_worker.js` entrypoint.
- Added `.assetsignore` so Netlify-only `_redirects`/`_headers`, Worker source, Functions source, Git metadata, and local/audit files are not uploaded as public static assets.
- Excluded `.git`, `.wrangler`, local preview helpers, and audit Markdown files from public static assets.
- Added `_worker.js` to serve static assets and route `/api/pilot` and `/api/research-preview` through the existing API modules.
- Added lightweight per-IP in-memory request throttling for both API endpoints.
- Added production security headers at the Worker layer.

## Cloudflare

Cloudflare Static Assets now use `_worker.js` with `run_worker_first = ["/api/*"]`, so API requests are handled by the Worker while normal pages/assets remain static.

## Netlify
Netlify still uses the root `_redirects` and `functions/api/*` files. The same GitHub source therefore remains compatible with the Netlify backup architecture.

## Important
Cloudflare Worker secrets still need to exist in the Worker environment: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.

---

<!-- Source file: V5.5.7.2-CLOUDFLARE-REDIRECT-FIX.md -->

# MRMProLeads V5.5.7.2 — Cloudflare Redirect Fix

## Root cause
The repository-level `_redirects` file used a domain-level source:
`https://mrmproleads.netlify.app/* https://mrmproleads.com/:splat 301!`

Cloudflare Workers Static Assets does not support domain-level redirect sources in `_redirects`; `_redirects` sources must be relative paths. This caused the production deployment to fail with `Invalid _redirects configuration` / `Only relative URLs are allowed`.

## Fix
- Removed the root `_redirects` file from the Cloudflare-deployed asset tree.
- Added `netlify.toml` for the Netlify-only backup redirect from `mrmproleads.netlify.app/*` to `https://mrmproleads.com/:splat`.
- Preserved the existing Cloudflare Worker + Static Assets architecture.
- Preserved `.assetsignore`, `_worker.js`, `wrangler.toml`, API routes, security hardening, analytics, SEO, and existing site content.

## Deployment architecture
GitHub `main` → Cloudflare Worker (primary) + Netlify (backup).

Cloudflare primary: `https://mrmproleads.com`
Netlify backup: `https://mrmproleads.netlify.app` → 301 to `.com`

## Validation
The Cloudflare-specific `_redirects` parser should no longer receive the invalid domain-level rule.

---

<!-- Source file: V5.5.7.7-SITE-WIDE-PREMIUM-CTA-NORMALIZATION.md -->

# V5.5.7.7 — Site-Wide Premium CTA Normalization

- Normalized actionable content CTAs across existing internal HTML pages.
- Premium CTA treatment: gold border, subtle gold gradient, rounded 14px box, soft glow, hover lift, focus-visible state, and arrow affordance.
- Preserved existing href targets and content.
- Excluded header/footer navigation and whole-card links from the CTA treatment.
- Preserved the latest homepage gap/resource CTA work and success-page color fix.
- No API, Worker, Resend, or non-HTML deployment files were changed.

---

<!-- Source file: V5.5.7.9-SITE-WIDE-LINK-GLOW.md -->

# V5.5.7.9 — Site-Wide Clickable Link Premium Glow

- Applied the same premium gold bordered/glow treatment to every textual clickable `<a>` across the existing HTML pages.
- Preserved existing link text, destinations, and existing arrows such as `→`; no generated arrow/icon is added.
- Excluded only the skip link, brand/logo anchor, and empty anchors.
- Added hover, focus-visible, active, responsive, and reduced-motion states.
- Cloudflare Worker, API functions, Resend configuration, and non-HTML runtime files are unchanged.

---

<!-- Source file: V5.5.7.10-CTA-ICON-CORRECTION.md -->

# MRMProLeads V5.5.7.10 — CTA Icon Correction

## Fix
Removed CSS-generated circular arrow/icon affordances from premium clickable links.

## Preserved
- Existing text arrows such as `→` and `↗`
- Premium gold border/gradient/glow
- Hover lift
- Focus-visible state
- Existing URLs, copy, layout, forms, APIs, and deployment configuration

## Scope
HTML presentation only.

---

<!-- Source file: V5.5.7.13-FOOTER-NAV-DE-DUPLICATION.md -->

# V5.5.7.13 — Footer Navigation De-duplication

Removed footer links that duplicate the primary header navigation: Services, Account Intelligence, Proof, Pricing, Insights, and About.

Kept non-duplicative footer destinations such as Resources, Privacy, brand/home, and external/social links.

No URLs, header navigation, forms, APIs, Worker configuration, or Resend configuration were changed.

---

<!-- Source file: V5.5.7.16-PROOF-GLANCE-FIGURE-MATCH.md -->

# V5.5.7.16 — Proof-at-a-Glance Figure Match

Surgical visual correction only.

The three Proof-at-a-Glance linked figure cards (6, 1,263, Public sample) are explicitly forced to share the same gold border, subtle gold gradient, glow, hover and focus treatment, including visited-link state.

No text, destination, API, form, Worker, Resend, or footer/navigation behavior changed.

---

<!-- Source file: V5.5.7.18-PUBLIC-RESOURCES-CARD-REDESIGN.md -->

# V5.5.7.18 — Public Resources Card Redesign

Surgical visual update to `/proof/` public resources.

- Rebuilt the three public-resource cards as a stable responsive 3-column grid.
- Added consistent gold borders, subtle gold glow, premium dark gradient and hover lift.
- Added small inline SVG icons for Sample / Standard / Evidence.
- Converted card CTAs into full-width filled-gold action bars for clear hierarchy and contrast.
- Preserved all existing URLs, copy, and the existing `→` arrow convention.
- No API, Worker, Resend, form, or deployment configuration changes.

---

<!-- Source file: V5.5.7.20-FOOTER-FINAL-LAYOUT.md -->

# V5.5.7.20 — Footer Final Layout

- Removed Resource Hub from footer because Resources already links to the resource library.
- Moved LinkedIn, Medium, Gumroad, Resources and Privacy into one right-side premium link group.
- Moved copyright directly beneath the MRMProLeads brand/description on the left.
- Kept existing premium gold link styling and destinations.
- No API, Worker, Resend, form, or content logic changed.

---

<!-- Source file: V5.5.8.2-SURGICAL-MOBILE-REFINEMENT.md -->

# MRMProLeads V5.5.8.2 — Surgical Mobile Refinement

## Changes
- Mobile navigation normalized to: Home, About, Services, Methodology, Pricing, Insights, Resources, Request a Pilot.
- Desktop navigation remains visually protected by the existing mobile-only CSS layer.
- Mobile menu now moves focus to the first link when opened.
- Focus returns to the hamburger when Escape/outside-click/close is used.
- Added outside-click close behavior.
- Added background scroll lock while the mobile menu is open.
- Preserved Escape-key support and ARIA expanded/controls/label state.
- Added explicit focus-visible treatment for mobile navigation controls.

## Preserved
- V5.5.7.20 approved footer.
- Pilot backend / Worker / Resend / DNS.
- GA4 and existing analytics.
- SEO/schema/content.
- Existing URLs.
- Desktop layout and typography.
- Existing mobile hero, pricing, forms and CTA structure.

## Versioning
Source: V5.5.8.1 Mobile UX Refinement
Target: V5.5.8.2
Date: 2026-10-06

---
