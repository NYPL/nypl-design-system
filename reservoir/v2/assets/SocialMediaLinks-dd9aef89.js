import{j as n,a as i,F as d}from"./jsx-runtime-fdf4db99.js";import{M as h,D as p,C as t,A as m,b as u}from"./index-445595fc.js";import{G as f}from"./SocialMediaLinks-b6af0be3.js";import{T as b}from"./Table-64c6aa77.js";import{S as a,W as l,L as y,a as w,C as v,B as k,b as g,n as L}from"./SocialMediaLinks.stories-39c68454.js";import{L as r}from"./Link-24c1437a.js";import{u as c}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Icon-4eeffe51.js";import"./index-6148c31a.js";import"./types-ee6958f5.js";function s(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",a:"a",h3:"h3"},c(),o.components);return i(d,{children:[n(h,{of:a}),`
`,n(e.h1,{id:"socialmedialinks",children:"SocialMediaLinks"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"2.0.0"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.0.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#with-controls",target:"_self",children:"With Controls"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#variations",target:"_self",children:"Variations"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#responsive-design",target:"_self",children:"Responsive Design"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:a}),`
`,n(e.h2,{id:"with-controls",children:"With Controls"}),`
`,n(t,{of:l}),`
`,i(e.p,{children:["Passing an array of social media objects to the ",n(e.code,{children:"linksData"}),` prop allows you to control which social media types are
displayed, the order they appear, the specific URL used in the link, and the text used for the label of each.
Of these, only the `,n(e.code,{children:"type"})," value is required. The other two props, ",n(e.code,{children:"labelText"})," and ",n(e.code,{children:"url"}),` are optional and will display
a default value if left undeclared. Order is determined by the order of the array. You may also pass
`,n(e.em,{children:"no"})," ",n(e.code,{children:"linksData"})," prop and the component will return all available social media links with their default values. See ",n(e.a,{href:"#heading-nodata",children:`an
example`})," at the bottom of this document."]}),`
`,i(e.p,{children:[`Labels are exposed in this example to demonstrate that the text is changed for the middle icon. Click "Show Code," above,
to view the sample `,n(e.code,{children:"linksData"})," code."]}),`
`,n(m,{of:l}),`
`,n(e.h3,{id:"available-social-media-types--their-default-values",children:"Available Social Media Types & Their Default Values"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"linksData"})," prop accepts an array of objects. Each object may be composed of three values: ",n(e.code,{children:"type"}),", ",n(e.code,{children:"labelText"}),`,
and `,n(e.code,{children:"url"}),". Of these, only ",n(e.code,{children:"type"}),` is required, determining which of the allowed social media icons will be displayed.
Each type has a default value for its label text and url. See table below for allowed types and default values.
If values are set for `,n(e.code,{children:"labelText"})," and/or ",n(e.code,{children:"url"})," in the ",n(e.code,{children:"linksData"}),` array, those values will override the defaults.
For example:`]}),`
`,n(u,{code:`
const myLinksData = [
  { type: "twitter", labelText: "NYPL Educators", url: "https://twitter.com/NYPLEducators"},
  { type: "instagram", labelText: "NYPL Educators", url: "https://www.instagram.com/nypleducators"},
  { type: "facebook", labelText: "NYPL Educators", url: "https://www.facebook.com/NYPLEducators"},
];
// ...
<SocialMediaLinks linksData=myLinksData />
`,language:"tsx"}),`
`,n(t,{withSource:"none",children:n(b,{columnHeaders:["Type","Label Text","URL","Icon Name*"],tableData:f(),showRowDividers:!0})}),`
`,i(e.p,{children:["* ",n(e.code,{children:"Icon Name"})," is not a prop. It is returned automatically by the component. Its value is shown here for transparency."]}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i(e.p,{children:["Internally, links are organized in a ",n(e.code,{children:"ul"}),` list element using the
`,n(e.a,{href:"/?path=/docs/components-typography-styles-list--docs",children:"List"}),`,
`,n(e.a,{href:"/?path=/docs/components-navigation-link--docs",children:"Link"}),`, and
`,n(e.a,{href:"/?path=/docs/components-media-icons-icon--docs",children:"Icon"})," components."]}),`
`,i(e.p,{children:["If the ",n(e.code,{children:"showLabels"})," prop is set to ",n(e.code,{children:"false"})," the labels are still visible to screen reader software."]}),`
`,n(e.h3,{id:"resources",children:"Resources"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://dequeuniversity.com/tips/list-markup",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Semantic Markup for Lists"})}),`
`,n(e.li,{children:n(e.a,{href:"https://design-system.w3.org/styles/svg-icons.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C SVG icons"})}),`
`,n(e.li,{children:n(e.a,{href:"https://css-tricks.com/accessible-svg-icons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Accessible SVG icons"})}),`
`]}),`
`,n(e.h2,{id:"variations",children:"Variations"}),`
`,i(e.p,{children:["The below variations can be combined in any way EXCEPT ONE. You may ",n(e.em,{children:"NOT"})," combine circular borders with labels."]}),`
`,n(e.h3,{id:"layout-variations",children:"Layout Variations"}),`
`,n(e.p,{children:`NOTE: Icons will stack automatically for any viewport less than or equal to the "md" breakpoint (currently 600px).
This layout prop is therefore effectively limited to desktop views.`}),`
`,n(t,{of:y,sourceState:"none"}),`
`,n(e.h3,{id:"size-variations",children:"Size Variations"}),`
`,n(t,{of:w,sourceState:"none"}),`
`,n(e.h3,{id:"color-variations",children:"Color Variations"}),`
`,n(t,{of:v,sourceState:"none"}),`
`,n(e.h3,{id:"border-variations",children:"Border Variations"}),`
`,n(t,{of:k,sourceState:"none"}),`
`,n(e.h3,{id:"label-variations",children:"Label Variations"}),`
`,n(t,{of:g,sourceState:"none"}),`
`,n(e.h3,{id:"without-linksdata-prop-default",children:"Without linksData Prop (Default)"}),`
`,n(t,{of:L,sourceState:"none"}),`
`,n(e.h2,{id:"responsive-design",children:"Responsive Design"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:'Icons will stack automatically for any viewport less than or equal to the "md" breakpoint (currently 600px).'}),`
`,n(e.li,{children:`The minimum clickable area for a link on a mobile device is 44px. This requirement causes the spacing between
small and medium icons to be greater than when in a column layout in a desktop viewport.`}),`
`]})]})}function $(o={}){const{wrapper:e}=Object.assign({},c(),o.components);return e?n(e,Object.assign({},o,{children:n(s,o)})):s(o)}export{$ as default};
//# sourceMappingURL=SocialMediaLinks-dd9aef89.js.map
