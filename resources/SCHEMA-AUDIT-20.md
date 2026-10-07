# Structured Data Audit — Articles 01–20

Every article has exactly two JSON-LD blocks: `Article` and `BreadcrumbList`.

Article fields normalized: headline, description, author (Person), publisher (Organization), mainEntityOfPage, url, keywords.
Breadcrumb path normalized: Home → Resources → exact article title.
No fabricated datePublished/dateModified was added.
Google recommends Article structured data where applicable and recommends validating markup; BreadcrumbList can clarify page hierarchy.
