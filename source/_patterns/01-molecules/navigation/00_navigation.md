---
state: inprogress
---

Accessibility & FUNctional Requirements
MN-001: Breadcrumb DRAFT / INCOMPLETE
- This is a <nav> element
-  NAV element has `aria-label=”Breadcrumbs”
- The first item in the NAV element is visibly hidden text (Screenreader-only class) reading “You are here:”
- Links are organized in an ul
- “/” should not be readable by screenreader; one way would be to add `aria-hidden='true'` to them

MN-002: Pagination DRAFT / INCOMPLETE
- This is a <nav> with `aria-label=”Pagination”`
- Links are organized in an ul
- Current selection has an `aria-label` “Current page: #” and an `aria-current`. (NB: we need to test aria-current functionality in QA)
- All non-current links have aria-label. `aria-label=”Page #”` for now.