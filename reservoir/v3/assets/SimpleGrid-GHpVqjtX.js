import{u as l,j as e,M as h,L as i,bv as c,C as r,bw as a}from"./iframe-CFLVJZOZ.js";import{S as d,W as t,I as x,a as p,C as j}from"./SimpleGrid.stories-x_7mQ_Iw.js";import{C as m}from"./ComponentChangelogTable-DvY0SxTs.js";import"./iconVariables-Bcc5qynd.js";const g=[{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
`,e.jsx(n.h1,{id:"simplegrid",children:"SimpleGrid"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.25.1"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.0.0"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#other-simplegrid-examples",target:"_self",children:"Other SimpleGrid Examples"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(c,{of:d}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"SimpleGrid"}),` component is used to render UI elements in a uniform grid
layout, with the column widths and grid spacing fixed throughout the grid.`]}),`
`,e.jsxs(n.p,{children:["The NYPL standards for the items per row in a grid is ",e.jsx(n.code,{children:"3"})," for desktop, ",e.jsx(n.code,{children:"2"}),` for
tablet and `,e.jsx(n.code,{children:"1"})," for mobile. By default, the ",e.jsx(n.code,{children:"SimpleGrid"}),` component uses these
standards and the `,e.jsx(n.code,{children:"columns"})," prop is optional. If the ",e.jsx(n.code,{children:"columns"}),` prop is used, the
tablet breakpoint will be dropped and only the mobile breakpoint (1 item per
row) will be triggered.`]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(a,{of:t}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The CSS grid layout properties are used for the ",e.jsx(n.code,{children:"SimpleGrid"}),` component. We don't
recommend using property rules that change the visual order of elements on the
page that don't match with its DOM order. This is because a screenreader won't
pick up `,e.jsx(n.code,{children:"SimpleGrid"}),` CSS rules and will read the page in the expected DOM order
rather than the visual order.`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility",rel:"nofollow",children:"MDN CSS Grid Layout and Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"other-simplegrid-examples",children:"Other SimpleGrid Examples"}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["This example is rendering ",e.jsx(n.code,{children:"Icon"})," components with the ",e.jsx(n.code,{children:"columns"})," prop set to ",e.jsx(n.code,{children:"5"}),"."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"images",children:"Images"}),`
`,e.jsxs(n.p,{children:["This example is rendering square ",e.jsx(n.code,{children:"Image"})," components with the ",e.jsx(n.code,{children:"columns"}),` prop set
to `,e.jsx(n.code,{children:"6"}),"."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"horizontal-cards",children:"Horizontal Cards"}),`
`,e.jsxs(n.p,{children:["This example is rendering horizontal ",e.jsx(n.code,{children:"Card"})," components with the ",e.jsx(n.code,{children:"columns"}),` prop
set to `,e.jsx(n.code,{children:"1"}),"."]}),`
`,e.jsx(r,{of:j}),`
`," ",`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(m,{changelogData:g})]})}function S(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{S as default};
