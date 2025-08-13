import{u as l,j as e,M as r,y as d,bu as h,L as s}from"./iframe-CFLVJZOZ.js";const c=""+new URL("activeFiltersList-NjLNO_jL.png",import.meta.url).href;function t(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Style Guide/Filtering/Page elements/Active filters list"}),`
`,e.jsx(i.h1,{id:"active-filters-list",children:"Active filters list"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"active filters"})," list is used to display filters that have been applied."]}),`
`,e.jsx(d,{alt:"Example of active filters list",src:c,...h}),`
`,e.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(s,{href:"#rendering",target:"_self",children:"Rendering"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(s,{href:"#position",target:"_self",children:"Position"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(s,{href:"#visibility",target:"_self",children:"Visibility"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(s,{href:"#labeling",target:"_self",children:"Labeling"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(s,{href:"#adding-filters",target:"_self",children:"Adding filters"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(s,{href:"#clearing-filters",target:"_self",children:"Clearing filters"}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"rendering",children:"Rendering"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"active filters"}),` list should be rendered using the DS
`,e.jsx(i.a,{href:"./?path=/docs/components-content-display-tagset--docs",children:"TagSet"})," component."]}),`
`,e.jsx(i.h2,{id:"position",children:"Position"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"active filters"})," list should be positioned directly above the ",e.jsx(i.code,{children:"results"})," list."]}),`
`,e.jsx(i.h2,{id:"visibility",children:"Visibility"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"active filters"}),` list should only be visible after at least one filter option
has been applied.`]}),`
`,e.jsx(i.h2,{id:"labeling",children:"Labeling"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"active filters"}),' list should include an "Active filters" label.']}),`
`,e.jsx(i.h2,{id:"adding-filters",children:"Adding filters"}),`
`,e.jsxs(i.p,{children:["A new tag should be added to the ",e.jsx(i.code,{children:"TagSet"}),` as each new filter option is applied.
The tags in the `,e.jsx(i.code,{children:"TagSet"})," should be listed in the order they were selected."]}),`
`,e.jsxs(i.p,{children:[`In use cases where a keyword search term has been applied to the search results,
the `,e.jsx(i.code,{children:"active filters"}),` list should not include the search term. Rather, the search
term should be incorporated into the `,e.jsx(i.code,{children:"total results"})," heading."]}),`
`,e.jsx(i.h2,{id:"clearing-filters",children:"Clearing filters"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"TagSet"}),` component will render a "Clear filters" button when more than one
filter option has been applied. Clicking the "Clear filters" button should:`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["reset all form input elements within the ",e.jsx(i.code,{children:"filter bar"})]}),`
`,e.jsxs(i.li,{children:["remove all tags from the ",e.jsx(i.code,{children:"TagSet"})," component"]}),`
`,e.jsxs(i.li,{children:["update the ",e.jsx(i.code,{children:"results"})," list to an unfiltered state"]}),`
`,e.jsxs(i.li,{children:["update the ",e.jsx(i.code,{children:"total results"})," heading to reflect the updated ",e.jsx(i.code,{children:"results"})," list"]}),`
`]})]})}function o(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{o as default};
