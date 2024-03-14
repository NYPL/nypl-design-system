import{j as e,a as i,F as l}from"./jsx-runtime-fdf4db99.js";import{M as s}from"./index-445595fc.js";import{L as o}from"./Link-24c1437a.js";import{u as a}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function r(t){const n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",code:"code"},a(),t.components);return i(l,{children:[e(s,{title:"Accessibility Guide/Skip Navigation"}),`
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
`]})]})}function P(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e(n,Object.assign({},t,{children:e(r,t)})):r(t)}export{P as default};
//# sourceMappingURL=SkipNavigation-10398d75.js.map
