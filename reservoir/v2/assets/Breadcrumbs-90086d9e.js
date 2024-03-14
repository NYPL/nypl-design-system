import{j as r,a as n,F as h}from"./jsx-runtime-fdf4db99.js";import{M as s,D as m,b as p,C as i,A as b}from"./index-445595fc.js";import{C as u}from"./ComponentChangelogTable-310bbbfd.js";import{B as a,W as l,L as g,C as f}from"./Breadcrumbs.stories-2a5dc022.js";import{L as o}from"./Link-24c1437a.js";import{u as d}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";import"./index-6148c31a.js";import"./Breadcrumbs-527e5d08.js";import"./Icon-4eeffe51.js";import"./Tooltip-88733f7d.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./ComponentWrapper-aa2910be.js";import"./popper-f3391c26.js";import"./chakra-ui-portal.esm-6752a0d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./index-13103a50.js";const C=[{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles"],notes:["Updates focus ring color to match color of text."]}];function c(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",p:"p",a:"a"},d(),t.components);return n(h,{children:[r(s,{of:a}),`
`,r(e.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.0.3"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"2.1.6"})})]})]})]}),`
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
`,n(e.li,{children:[`
`,r(o,{href:"#changelog",target:"_self",children:"Changelog"}),`
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
`,r(i,{of:g}),`
`,r(e.h2,{id:"color-variations",children:"Color Variations"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Breadcrumbs"}),` component background color can be set to a value of the
`,r(e.code,{children:"breadcrumbsType"})," type. If the ",r(e.code,{children:"breadcrumbsType"}),` prop is omitted, the default
background color is `,r(e.code,{children:'"whatsOn"'})," (",r(e.code,{children:"ui.black"}),")."]}),`
`,r(i,{of:f}),`
`,r(e.h2,{id:"changelog",children:"Changelog"}),`
`,r(u,{changelogData:C})]})}function ie(t={}){const{wrapper:e}=Object.assign({},d(),t.components);return e?r(e,Object.assign({},t,{children:r(c,t)})):c(t)}export{ie as default};
//# sourceMappingURL=Breadcrumbs-90086d9e.js.map
