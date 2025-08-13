import{u as o,j as e,M as d,L as l,a as n,y as r,bu as t}from"./iframe-CFLVJZOZ.js";const h=""+new URL("focusLiveFiltering-C-KmvDTb.gif",import.meta.url).href,c=""+new URL("focusKeywordSearch-BaaZzS66.gif",import.meta.url).href,f=""+new URL("focusClearingFilters-CV9KI8L_.gif",import.meta.url).href,g=""+new URL("focusPagination-zRzs_z3X.gif",import.meta.url).href,p=""+new URL("focusSorting-A-gVtlLL.gif",import.meta.url).href;function a(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Style Guide/Filtering/Accessibility"}),`
`,e.jsx(i.h1,{id:"filtering-accessibility",children:"Filtering accessibility"}),`
`,e.jsx(i.p,{children:`The following accessibility recommendations are applicable for real-time UI
updates resulting from user actions. If UI updates will be applied after a full
page refresh, then no additional accommodations need to be applied.`}),`
`,e.jsx(i.h2,{id:"table-of-contents",children:"Table of contents"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#aria-live",target:"_self",children:"Using aria-live"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#focus-management",target:"_self",children:"Focus management"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#applying-search-terms",target:"_self",children:"Applying search terms"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#applying-filters",target:"_self",children:"Applying filters"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#clearing-filters",target:"_self",children:"Clearing filters"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#pagination",target:"_self",children:"Pagination"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#sorting",target:"_self",children:"Sorting"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(l,{href:"#modal-overlay",target:"_self",children:"Modal overlay"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"using-aria-live",children:"Using aria-live"}),`
`,e.jsxs(i.p,{children:["The parent element housing the ",e.jsx(i.code,{children:"total results"}),` heading should include the
`,e.jsx(i.code,{children:'aria-live="polite"'}),` attribute. This will ensure that real-time updates made to
the heading text are announced to screen reader users.`]}),`
`,e.jsx(i.h2,{id:"focus-management",children:"Focus management"}),`
`,e.jsx(i.h3,{id:"applying-search-terms",children:"Applying search terms"}),`
`,e.jsxs(n,{display:"grid",gridTemplateColumns:{base:"1fr",md:"1fr 1fr"},gap:{base:"xs",md:"l"},children:[e.jsx(n,{children:e.jsxs(i.p,{children:["When a search term is applied using the ",e.jsx(i.code,{children:"keyword search"}),` field, focus should
be moved to the `,e.jsx(i.code,{children:"total results"})," heading."]})}),e.jsx(r,{alt:"Example of full-page filtering app",border:"1px solid var(--nypl-colors-ui-border-default)",src:c,...t})]}),`
`,e.jsx(i.h3,{id:"applying-filters",children:"Applying filters"}),`
`,e.jsx(i.h4,{id:"live-filtering",children:"Live filtering"}),`
`,e.jsxs(n,{display:"grid",gridTemplateColumns:{base:"1fr",md:"1fr 1fr"},gap:{base:"xs",md:"l"},children:[e.jsx(n,{children:e.jsx(i.p,{children:`For live filtering, as a user makes changes to filtering options, focus
should be maintained on the filter the user is interacting with.`})}),e.jsx(r,{alt:"Example of full-page filtering app",border:"1px solid var(--nypl-colors-ui-border-default)",src:h,...t})]}),`
`,e.jsx(i.h4,{id:"batch-filtering",children:"Batch filtering"}),`
`,e.jsxs(n,{display:"grid",gridTemplateColumns:{base:"1fr",md:"1fr 1fr"},gap:{base:"xs",md:"l"},children:[e.jsx(n,{children:e.jsxs(i.p,{children:["For batch filtering, focus should be moved to the ",e.jsx(i.code,{children:"total results"}),` heading
after the "Apply filters" button has been clicked.`]})}),e.jsx(n,{})]}),`
`,e.jsx(i.h3,{id:"clearing-filters",children:"Clearing filters"}),`
`,e.jsxs(n,{display:"grid",gridTemplateColumns:{base:"1fr",md:"1fr 1fr"},gap:{base:"xs",md:"l"},children:[e.jsxs(n,{children:[e.jsxs(i.p,{children:["When filters are cleared using the methods available in the ",e.jsx(i.code,{children:"active filters"}),`
list or by clicking the "Clear all filters" button in the `,e.jsx(i.code,{children:"filter bar"}),`, focus
should be moved to the `,e.jsx(i.code,{children:"total results"})," heading."]}),e.jsx(i.p,{children:`When clearing a filter by manually resetting an individual form input element,
focus should be maintained on the filter the user is interacting with.`})]}),e.jsx(r,{alt:"Example of full-page filtering app",border:"1px solid var(--nypl-colors-ui-border-default)",src:f,...t})]}),`
`,e.jsx(i.h3,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(n,{display:"grid",gridTemplateColumns:{base:"1fr",md:"1fr 1fr"},gap:{base:"xs",md:"l"},children:[e.jsx(n,{children:e.jsxs(i.p,{children:["When using the ",e.jsx(i.code,{children:"pagination"})," menu to update the ",e.jsx(i.code,{children:"results"}),` list, focus should
be moved to the `,e.jsx(i.code,{children:"total results"})," heading."]})}),e.jsx(r,{alt:"Example of full-page filtering app",border:"1px solid var(--nypl-colors-ui-border-default)",src:g,...t})]}),`
`,e.jsx(i.h3,{id:"sorting",children:"Sorting"}),`
`,e.jsxs(n,{display:"grid",gridTemplateColumns:{base:"1fr",md:"1fr 1fr"},gap:{base:"xs",md:"l"},children:[e.jsx(n,{children:e.jsxs(i.p,{children:["After selecting an option in the ",e.jsx(i.code,{children:"sorting"}),` menu, focus should be maintained
on the `,e.jsx(i.code,{children:"sorting"})," menu."]})}),e.jsx(r,{alt:"Example of full-page filtering app",border:"1px solid var(--nypl-colors-ui-border-default)",src:p,...t})]}),`
`,e.jsx(i.h3,{id:"modal-overlay",children:"Modal overlay"}),`
`,e.jsxs(i.p,{children:["When the modal overlay that is generated as part of the ",e.jsx(i.code,{children:"FilterBarPopup"}),`
component is closed by clicking the close X in the UI, by clicking outside the
modal overlay, or by pressing ESC on the keyboard, focus should be moved to the
button that was initially clicked to launch the modal overlay. This is the
default behavior of the modal overlay.`]}),`
`,e.jsxs(i.p,{children:["When the modal overlay that is generated as part of the ",e.jsx(i.code,{children:"FilterBarPopup"}),`
component is closed by clicking the "Show results" button in the UI, focus
should be moved to the `,e.jsx(i.code,{children:"total results"})," heading"]})]})}function m(s={}){const{wrapper:i}={...o(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(a,{...s})}):a(s)}export{m as default};
