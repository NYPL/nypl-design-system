import{j as r,a as n,F as h}from"./jsx-runtime-09ad29cb.js";import{M as s,D as m,b as p,C as i,A as b}from"./index-42243e0e.js";import{B as a,W as l,L as u,C as f}from"./Breadcrumbs.stories-22b78721.js";import{L as o}from"./Link-0ed02cf7.js";import{u as d}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Breadcrumbs-983ea904.js";import"./Icon-6616a4b9.js";import"./Tooltip-aeab1bc9.js";import"./Image-3405777f.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./popper-f3391c26.js";import"./chakra-ui-portal.esm-c70f6466.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./index-fb519959.js";import"./utils-acca7d12.js";function c(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",p:"p",a:"a"},d(),t.components);return n(h,{children:[r(s,{of:a}),`
`,r(e.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.0.3"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"1.5.3"})})]})]})]}),`
`,r(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,r(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,r(o,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,r(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,r(o,{href:"#long-titles",target:"_self",children:"Long Titles"}),`
`]}),`
`,n(e.li,{children:[`
`,r(o,{href:"#color-variations",target:"_self",children:"Color Variations"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"overview",children:"Overview"}),`
`,r(m,{of:a}),`
`,r(p,{code:`
const breadcrumbsData = [
  { url: "#", text: "Parent" },
  { url: "#", text: "Child" },
  { url: "#", text: "Grandchild" },
];
// ...
<Breadcrumbs breadcrumbsData={breadcrumbsData} />
`,language:"tsx"}),`
`,r(e.h2,{id:"component-props",children:"Component Props"}),`
`,r(i,{of:l}),`
`,r(b,{of:l}),`
`,r(e.h3,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["Only one ",r(e.code,{children:"Breadcrumbs"}),` component should be rendered on a page. This is because
only one HTML `,r(e.code,{children:"<nav>"})," element with an ",r(e.code,{children:"aria-label"}),` attribute value of
"Breadcrumbs" should be rendered on a page. The DS `,r(e.code,{children:"Breadcrumbs"}),` component
renders this HTML landmark so only one component must be rendered on a page.`]}),`
`,n(e.p,{children:["Internally, links are organized in a ",r(e.code,{children:"ul"}),` list element. The current page link is
denoted by an `,r(e.code,{children:"aria-current"}),' attribute value of "page".']}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:r(e.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3 Breadcrumbs Practice"})}),`
`,r(e.li,{children:r(e.a,{href:"https://chakra-ui.com/docs/components/navigation/breadcrumb",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Breadcrumb"})}),`
`]}),`
`,r(e.h2,{id:"long-titles",children:"Long Titles"}),`
`,n(e.p,{children:[`Ideally, breadcrumb page titles should be short and concise. In cases where a
breadcrumb page title is over 40 characters, the `,r(e.code,{children:"Breadcrumb"}),` component will
truncate the title and an ellipsis will be added to the end of the truncated
text. The full title will be shown in a `,r(e.code,{children:"Tooltip"}),` component when hovering over
the truncated page title.`]}),`
`,r(i,{of:u}),`
`,r(e.h2,{id:"color-variations",children:"Color Variations"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Breadcrumbs"}),` component background color can be set to a value of the
`,r(e.code,{children:"breadcrumbsType"})," type. If the ",r(e.code,{children:"breadcrumbsType"}),` prop is omitted, the default
background color is `,r(e.code,{children:'"whatsOn"'})," (",r(e.code,{children:"ui.black"}),")."]}),`
`,r(i,{of:f})]})}function $(t={}){const{wrapper:e}=Object.assign({},d(),t.components);return e?r(e,Object.assign({},t,{children:r(c,t)})):c(t)}export{$ as default};
//# sourceMappingURL=Breadcrumbs-d7b1db36.js.map
