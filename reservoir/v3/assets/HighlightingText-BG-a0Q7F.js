import{u as l,j as e,M as t,L as r,a as s}from"./iframe-D93LbwGv.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Accessibility Guide/Highlighting Text"}),`
`,e.jsx(i.h1,{id:"highlighting-text",children:"Highlighting Text"}),`
`,e.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{href:"#nypl-recommendations",target:"_self",children:"NYPL Recommendations"}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(r,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"general-information",children:"General Information"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"<mark>"}),` HTML element is intended to represent text which is marked or
highlighted for reference or notation purposes. The element can be used to
implement highlighted text for semantic coding purposes.`]}),`
`,e.jsx(i.p,{children:`From a visual perspective, highlighting text in the UI requires more than a just
a color indicator, as color should not be used as the only visual means of
distinguishing a visual element.`}),`
`,e.jsxs(i.p,{children:["By combining the semantic meaning of the ",e.jsx(i.code,{children:"<mark>"}),` element and layering on an
additional visual indicator beside color, the highlight will fulfill the
requirements of both the relevant WCAG 2.1 AA success criteria.`]}),`
`,e.jsx(i.h2,{id:"nypl-recommendations",children:"NYPL Recommendations"}),`
`,e.jsxs(i.p,{children:[`The NYPL Reservoir Design System (DS) provides semantic design tokens for a
range of colors that can be used for highlighting text. It is recommended to
use `,e.jsx(i.code,{children:"yellow"}),` to highlight text, but other colors may be used based on the use
case.`]}),`
`,e.jsxs(i.p,{children:["To meet WCAG 2.1 AA requirements, the full implementation of the ",e.jsx(i.code,{children:"highlight"}),`
requires the addition of at least one of the following styles.`]}),`
`,e.jsx(i.h3,{id:"heavier-font-weight",children:"Heavier Font Weight"}),`
`,e.jsxs(i.p,{children:["Set the font weight to ",e.jsx(i.code,{children:"bold"})," (700)."]}),`
`,e.jsx(i.h4,{id:"examples",children:"Examples"}),`
`,e.jsxs("p",{children:["This"," ",e.jsx(s,{as:"mark",__css:{bgColor:"ui.highlighter.yellow",fontWeight:"bold",px:"xxxs"},children:"word"})," ","is highlighted with yellow."]}),`
`,e.jsxs("p",{children:["This"," ",e.jsx(s,{as:"mark",__css:{bgColor:"ui.highlighter.blue",fontWeight:"bold",px:"xxxs"},children:"word"})," ","is highlighted with blue."]}),`
`,e.jsx(i.h3,{id:"border",children:"Border"}),`
`,e.jsx(i.p,{children:"Add a 1px border using a contrast compliant color."}),`
`,e.jsx(i.h4,{id:"examples-1",children:"Examples"}),`
`,e.jsxs("p",{children:["This ",e.jsx(s,{as:"mark",__css:{bgColor:"ui.highlighter.yellow",border:"1px solid",borderColor:"ui.gray.semi-dark",px:"xxxs"},children:"word"})," is highlighted with yellow."]}),`
`,e.jsxs("p",{children:["This"," ",e.jsx(s,{as:"mark",__css:{bgColor:"ui.highlighter.blue",border:"1px solid",borderColor:"ui.gray.semi-dark",px:"xxxs"},children:"word"})," ","is highlighted with blue."]}),`
`,e.jsx(i.h2,{id:"resources",children:"Resources"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html",rel:"nofollow",children:"WCAG Success Criterion 1.4.1 Use of Color"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"http://localhost:6006/?path=/docs/style-guide-colors--docs#highlighter-colors",rel:"nofollow",children:"NYPL Reservoir Design System Color Palette: Highlighter Colors"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark",rel:"nofollow",children:"The Mark Text element"})}),`
`]})]})}function d(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default};
