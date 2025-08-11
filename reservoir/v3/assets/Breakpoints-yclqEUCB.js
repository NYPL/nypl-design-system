import{u as a,j as e,M as o,L as s,S as r}from"./iframe-D93LbwGv.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Style Guide/Breakpoints"}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#css-variables",target:"_self",children:"CSS Variables"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#scss-variables",target:"_self",children:"SCSS Variables"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#figma-reference",target:"_self",children:"Figma Reference"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsx(n.p,{children:`The Reservoir Design System (DS) adheres to four global breakpoints for
responsive layouts and typography.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mobile: 320px"}),`
`,e.jsx(n.li,{children:"Tablet Portrait: 600px"}),`
`,e.jsx(n.li,{children:"Tablet Landscape: 960px"}),`
`,e.jsx(n.li,{children:"Desktop: 1280px"}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(n.p,{children:"The following CSS variables are available through the DS."}),`
`,e.jsx(r,{code:`
--nypl-breakpoint-small: 320px;
--nypl-breakpoint-medium: 600px;
--nypl-breakpoint-large: 960px;
--nypl-breakpoint-xl: 1280px;
`,language:"css"}),`
`,e.jsx(n.h2,{id:"scss-variables",children:"SCSS Variables"}),`
`,e.jsxs(n.p,{children:["If you are using SCSS and imported the DS ",e.jsx(n.code,{children:"/dist/resources.scss"}),` file, then you
can use the following SCSS variables in your media queries or SCSS `,e.jsx(n.code,{children:"breakpoint"}),`
function (if used).`]}),`
`,e.jsx(r,{code:`
$nypl-breakpoint-small: 320px;
$nypl-breakpoint-medium: 600px;
$nypl-breakpoint-large: 960px;
$nypl-breakpoint-xl: 1280px;
$nypl-max-width: $nypl-breakpoint-xl;
`,language:"scss"}),`
`,e.jsx(n.h2,{id:"figma-reference",children:"Figma Reference"}),`
`,e.jsx(n.p,{children:"For additional spacing information, please refer to the Figma Main file."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17983%3A60146",rel:"nofollow",children:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17983%3A60146"})}),`
`]})]})}function c(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{c as default};
