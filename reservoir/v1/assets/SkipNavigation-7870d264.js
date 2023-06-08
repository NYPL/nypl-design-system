import{j as e,a as i,F as l}from"./jsx-runtime-09ad29cb.js";import{M as s}from"./index-5d3bb37f.js";import{L as o}from"./Link-0ed02cf7.js";import{u as a}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./Icon-6616a4b9.js";function r(t){const n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",code:"code"},a(),t.components);return i(l,{children:[e(s,{title:"Accessibility Guide/Skip Navigation"}),`
`,e(n.h1,{id:"skip-navigation",children:"Skip Navigation"}),`
`,e(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,e(o,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,i(n.li,{children:[`
`,e(o,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e(n.h2,{id:"general-information",children:"General Information"}),`
`,i(n.p,{children:[`An application's "skip navigation" is used to skip to the primary or main
content of a page. This component usually contains one link that is located at
the top of the page and is visually hidden until a user focuses on the link. In
the case of NYPL applications, the skip navigation contains two links; the first
link points to the main content of the page and the second link points to
accessibility information on
`,e(n.a,{href:"https://nypl.org/accessibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL.org/accessibility"}),`. For most digitial
applications on the NYPL.org platform, the `,e(n.a,{href:"https://github.com/NYPL/nypl-header-app",target:"_blank",rel:"nofollow noopener noreferrer",children:`NYPL
Header`}),` is used and this component
already renders a skip navigation area with links.`]}),`
`,i(n.p,{children:["In the Reservoir Design System (DS), the ",e(n.code,{children:"SkipNavigation"}),` component renders two
links.`]}),`
`,i(n.p,{children:["The first link points to the ",e(n.code,{children:'"#mainContent"'}),` anchor which an NYPL page is
expected to have. The `,e(n.code,{children:"TemplateAppContainer"})," component renders as a ",e(n.code,{children:"main"}),` HTML
element with a default `,e(n.code,{children:"id"})," of ",e(n.code,{children:'"mainContent"'}),`. While it's possible to update
the target of the skip link and the id of the `,e(n.code,{children:"<main>"}),` element, this is not
recommended. When using the DS' `,e(n.code,{children:"SkipNavigation"})," and ",e(n.code,{children:"TemplateAppContainer"}),`
components, this accessibility combination is automatically handled. When not
using the `,e(n.code,{children:"TemplateAppContainer"})," component, make sure to render a ",e(n.code,{children:"main"}),` HTML
element with an `,e(n.code,{children:"id"})," of ",e(n.code,{children:'"mainContent"'}),"."]}),`
`,i(n.p,{children:[`The second link points to additional accessibility information on
`,e(n.a,{href:"https://nypl.org/accessibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL.org/accessibility"}),"."]}),`
`,e(n.h2,{id:"resources",children:"Resources"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://webaim.org/techniques/skipnav/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAim Skip Navigation Link"})}),`
`,e(n.li,{children:e(n.a,{href:"https://www.a11ymatters.com/pattern/skip-link/",target:"_blank",rel:"nofollow noopener noreferrer",children:"A11ymatters Skip Navigation Link"})}),`
`]})]})}function Y(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(r,t)})):r(t)}export{Y as default};
//# sourceMappingURL=SkipNavigation-7870d264.js.map
