import{u as a,j as e,M as l,L as s,bv as c,C as h,bw as d}from"./iframe-D93LbwGv.js";import{C as p}from"./ComponentChangelogTable-Ck_3mwrR.js";import{S as t,W as o}from"./SkipNavigation.stories-DMsjqW6S.js";const x=[{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `SkipNavigationProps` interface."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(n.h1,{id:"skipnavigation",children:"SkipNavigation"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.28.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.2.0"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["NOTE: In order to see the links in the ",e.jsx(n.code,{children:"SkipNavigation"}),` component, start by focusing
on the button below by tabbing or clicking on it. Then press "tab" to see the
first link and press "tab" again to see the second link. Hiding the links
intentional as the links should initially be visually hidden.`]})}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`To create a useable page for screen readers, a link or a navigational list of
links should be added before all the content on a page. The Reservoir Design
System (DS) achieves this through the `,e.jsx(n.code,{children:"SkipNavigation"}),` component which renders
a `,e.jsx(n.code,{children:"<nav>"})," element with an ",e.jsx(n.code,{children:"aria-label"}),' of "Skip Navigation". Inside the ',e.jsx(n.code,{children:"<nav>"}),`
element, an unordered list is rendered.`]}),`
`,e.jsxs(n.p,{children:[`The reason this is a navigation list of links is because the first main link
points to the anchor of the main content, in this case `,e.jsx(n.code,{children:'"#mainContent"'}),`. The
second link points to accessibility information on `,e.jsx(n.a,{href:"https://nypl.org/accessibility",rel:"nofollow",children:"NYPL.org/accessibility"}),"."]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"../?path=/docs/accessibility-guide-skip-navigation--docs",children:"Skip Navigation accessibility guide"}),`
for more information on how to use this component with other DS components.`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/skipnav/",rel:"nofollow",children:"WebAIM Skip Navigation Links"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/css/invisiblecontent/#skipnavlinks",rel:"nofollow",children:'WebAIM CSS in Action "Skip" links'})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://css-tricks.com/a-deep-dive-on-skipping-to-content/",rel:"nofollow",children:"CSS-Tricks A Deep Dive on Skipping to Content"})}),`
`]}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(p,{changelogData:x})]})}function b(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{b as default};
