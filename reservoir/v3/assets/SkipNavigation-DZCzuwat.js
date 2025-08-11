import{u as s,j as n,M as a,L as t}from"./iframe-D93LbwGv.js";function o(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Accessibility Guide/Skip Navigation"}),`
`,n.jsx(e.h1,{id:"skip-navigation",children:"Skip Navigation"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(t,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(t,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"general-information",children:"General Information"}),`
`,n.jsxs(e.p,{children:[`An application's "skip navigation" is used to skip to the primary or main
content of a page. This component usually contains one link that is located at
the top of the page and is visually hidden until a user focuses on the link. In
the case of NYPL applications, the skip navigation contains two links; the first
link points to the main content of the page and the second link points to
accessibility information on
`,n.jsx(e.a,{href:"https://nypl.org/accessibility",rel:"nofollow",children:"NYPL.org/accessibility"}),`. For most digitial
applications on the NYPL.org platform, the `,n.jsx(e.a,{href:"https://github.com/NYPL/nypl-header-app",rel:"nofollow",children:`NYPL
Header`}),` is used and this component
already renders a skip navigation area with links.`]}),`
`,n.jsxs(e.p,{children:["In the Reservoir Design System (DS), the ",n.jsx(e.code,{children:"SkipNavigation"}),` component renders two
links.`]}),`
`,n.jsxs(e.p,{children:["The first link points to the ",n.jsx(e.code,{children:'"#mainContent"'}),` anchor which an NYPL page is
expected to have. The `,n.jsx(e.code,{children:"TemplateAppContainer"})," component renders as a ",n.jsx(e.code,{children:"main"}),` HTML
element with a default `,n.jsx(e.code,{children:"id"})," of ",n.jsx(e.code,{children:'"mainContent"'}),`. While it's possible to update
the target of the skip link and the id of the `,n.jsx(e.code,{children:"<main>"}),` element, this is not
recommended. When using the DS' `,n.jsx(e.code,{children:"SkipNavigation"})," and ",n.jsx(e.code,{children:"TemplateAppContainer"}),`
components, this accessibility combination is automatically handled. When not
using the `,n.jsx(e.code,{children:"TemplateAppContainer"})," component, make sure to render a ",n.jsx(e.code,{children:"main"}),` HTML
element with an `,n.jsx(e.code,{children:"id"})," of ",n.jsx(e.code,{children:'"mainContent"'}),"."]}),`
`,n.jsxs(e.p,{children:[`The second link points to additional accessibility information on
`,n.jsx(e.a,{href:"https://nypl.org/accessibility",rel:"nofollow",children:"NYPL.org/accessibility"}),"."]}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://webaim.org/techniques/skipnav/",rel:"nofollow",children:"WebAim Skip Navigation Link"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.a11ymatters.com/pattern/skip-link/",rel:"nofollow",children:"A11ymatters Skip Navigation Link"})}),`
`]})]})}function r(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{r as default};
