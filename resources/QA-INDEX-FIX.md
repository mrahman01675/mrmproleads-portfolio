# MRMProLeads Resources Index Fix — Article #20 Package

## Issue observed
The supplied Article #20 package rendered the end of `resources/index.html` incorrectly. The PDF capture shows four resource cards (Articles #12–#15) outside the `<main class="resources-shell">` container, immediately before the footer. The same capture also shows repeated copies of the newer Article #16–#20 cards.

## Surgical fix
- Removed duplicate `resource-card` sections while preserving the first occurrence of each resource link.
- Moved Articles #12–#15 back inside the Resources `<main>` container.
- Preserved the existing header, footer, embedded logo, CSS, scripts, article content, URLs, sitemap, and backend-related files.
- No Worker/API/DNS/Resend changes.

## Source-level QA
- `resources/index.html` has exactly one `<main class="resources-shell">`.
- Footer follows the main container.
- No direct-child `resource-card` remains outside `<main>`.
- 21 legacy/article resource sections remain inside main.
- 4 article-card anchors (#12–#15) are inside main.
- Total unique resource links represented: 25.
- Sitemap unchanged.
- This is source-level QA; no browser-rendered PASS is claimed.
