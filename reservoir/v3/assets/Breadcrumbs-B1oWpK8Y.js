import{u as c,j as e,M as d,L as s,bv as h,S as o,C as t,bw as p}from"./iframe-CFLVJZOZ.js";import{C as x}from"./ComponentChangelogTable-DvY0SxTs.js";import{B as i,W as l,L as u,C as j,a as m}from"./Breadcrumbs.stories-DIH5XXkl.js";const b=[{date:"2025-01-30",version:"3.5.3",type:"Update",affects:["Styles","Accessibility"],notes:["Updates arrow to be center aligned vertically.","Adds screenreaderOnly styles to span inside breadcrumb so link has descriptive text on mobile."]},{date:"2024-08-29",version:"3.3.0",type:"Update",affects:["Functionality"],notes:["Adds `customLinkComponent` and `linkProps` props to allow clientside routing."]},{date:"2024-07-03",version:"3.1.7",type:"Update",affects:["Styles"],notes:["Adds `digitalCollections` color variant."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles"],notes:["Updates focus ring color to match color of text."]}];function a(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(n.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.0.3"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.5.3"})})]})]})]}),`
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
`,e.jsx(s,{href:"#long-titles",target:"_self",children:"Long Titles"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#custom-link-and-link-props",target:"_self",children:"Custom Link and Link Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#color-variations",target:"_self",children:"Color Variations"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(o,{code:`
const breadcrumbsData = [
{ url: "#", text: "Parent" },
{ url: "#", text: "Child" },
{ url: "#", text: "Grandchild" },
];
// ...
<Breadcrumbs breadcrumbsData={breadcrumbsData} />
`,language:"tsx"}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Only one ",e.jsx(n.code,{children:"Breadcrumbs"}),` component should be rendered on a page. This is because
only one HTML `,e.jsx(n.code,{children:"<nav>"})," element with an ",e.jsx(n.code,{children:"aria-label"}),` attribute value of
"Breadcrumbs" should be rendered on a page. The DS `,e.jsx(n.code,{children:"Breadcrumbs"}),` component
renders this HTML landmark so only one component must be rendered on a page.`]}),`
`,e.jsxs(n.p,{children:["Internally, links are organized in a ",e.jsx(n.code,{children:"ul"}),` list element. The current page link is
denoted by an `,e.jsx(n.code,{children:"aria-current"}),' attribute value of "page".']}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html",rel:"nofollow",children:"W3 Breadcrumbs Practice"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/navigation/breadcrumb",rel:"nofollow",children:"Chakra UI Breadcrumb"})}),`
`]}),`
`,e.jsx(n.h2,{id:"long-titles",children:"Long Titles"}),`
`,e.jsxs(n.p,{children:[`Ideally, breadcrumb page titles should be short and concise. In cases where a
breadcrumb page title is over 40 characters, the `,e.jsx(n.code,{children:"Breadcrumb"}),` component will
truncate the title and an ellipsis will be added to the end of the truncated
text. The full title will be shown in a `,e.jsx(n.code,{children:"Tooltip"}),` component when hovering over
the truncated page title.`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"custom-link-component-and-link-props",children:"Custom Link Component and Link Props"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"customLinkComponent"}),` prop allows apps with internal routers (Next.js, for example) to pass their custom link component
into the `,e.jsx(n.code,{children:"Breadcrumbs"})," component. This allows the ",e.jsx(n.code,{children:"Breadcrumbs"})," links to use client-side routing, so users can navigate between pages without reloading the full page."]}),`
`,e.jsxs(n.p,{children:["Additionally, the ",e.jsx(n.code,{children:"linkProps"})," prop on ",e.jsx(n.code,{children:"breadcrumbsData"})," allows any of the framework's ",e.jsx(n.a,{href:"https://nextjs.org/docs/app/api-reference/components/link",rel:"nofollow",children:"custom props"})," to be applied on a link-by-link basis."]}),`
`,e.jsxs(n.p,{children:["Note: assigning a value for ",e.jsx(n.code,{children:"href"})," in ",e.jsx(n.code,{children:"linkProps"})," will override the ",e.jsx(n.code,{children:"url"})," prop, so we recommend against this."]}),`
`,e.jsx(o,{code:`
// Example with Next.js Link and its associated custom props (scroll, replace, prefetch)
import Link from "next/link";

const breadcrumbsDataWithLinkProps = [
{ url: "#", text: "Parent", linkProps: { replace: true, scroll: false }}
{ url: "#", text: "Child", linkProps: { replace: true }}
{ url: "#", text: "Grandchild" },
];

<Breadcrumbs
customLinkComponent={Link}
breadcrumbsData={breadcrumbsDataWithLinkProps}
/>
`,language:"tsx"}),`
`,e.jsxs(n.p,{children:["Below story uses the DS ",e.jsx(n.code,{children:"Link"})," component."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h2,{id:"color-variations",children:"Color Variations"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Breadcrumbs"}),` component background color can be set to a value of the
`,e.jsx(n.code,{children:"breadcrumbsType"})," type. If the ",e.jsx(n.code,{children:"breadcrumbsType"}),` prop is omitted, the default
background color is `,e.jsx(n.code,{children:'"whatsOn"'})," (",e.jsx(n.code,{children:"ui.black"}),")."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:b})]})}function y(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{y as default};
