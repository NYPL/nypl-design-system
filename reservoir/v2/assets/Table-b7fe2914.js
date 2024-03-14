import{j as r,a as n,F as h}from"./jsx-runtime-fdf4db99.js";import{M as s,D as p,C as l,A as m,b}from"./index-445595fc.js";import{T as i,W as d,a as f,R as u,b as w,C as v,J as y}from"./Table.stories-6a5cc1d5.js";import{L as t}from"./Link-24c1437a.js";import{u as c}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./Table-64c6aa77.js";import"./Icon-4eeffe51.js";function a(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},c(),o.components);return n(h,{children:[r(s,{of:i}),`
`,r(e.h1,{id:"table",children:"Table"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.25.9"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"2.0.0"})})]})]})]}),`
`,r(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,r(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#title",target:"_self",children:"Title"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#row-dividers",target:"_self",children:"Row Dividers"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#row-headers",target:"_self",children:"Row Headers"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#custom-header-colors",target:"_self",children:"Custom Header Colors"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#jsx-elements",target:"_self",children:"JSX Elements"}),`
`]}),`
`,n(e.li,{children:[`
`,r(t,{href:"#responsive-mobile-layout",target:"_self",children:"Responsive Mobile Layout"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"overview",children:"Overview"}),`
`,r(p,{of:i}),`
`,r(e.h2,{id:"component-props",children:"Component Props"}),`
`,r(l,{of:d}),`
`,r(m,{of:d}),`
`,r(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["Internally, the HTML for the ",r(e.code,{children:"Table"}),` element is structured with proper semantic
use of the `,r(e.code,{children:"table"}),", ",r(e.code,{children:"caption"}),", ",r(e.code,{children:"thead"}),", ",r(e.code,{children:"tbody"}),", ",r(e.code,{children:"tr"}),", and ",r(e.code,{children:"td"}),` HTML elements.
When titles are added through the `,r(e.code,{children:"titleText"})," prop, the ",r(e.code,{children:"caption"}),` element will
be rendered above the `,r(e.code,{children:"thead"})," element."]}),`
`,r(e.p,{children:`This component should be used to render tabular data only and not used for layout
purposes.`}),`
`,n(e.p,{children:[`For improved accessibility, column headers are required and the first row
in the table will always be rendered as a `,r(e.code,{children:"thead"})," with a child ",r(e.code,{children:"tr"}),` and
corresponsing `,r(e.code,{children:"th"})," cells. Additionally, the first cell in a ",r(e.code,{children:"tr"})," row can be a ",r(e.code,{children:"th"}),`
header cell. Each `,r(e.code,{children:"th"}),` header cell has an appropriate scope attribute set to
either `,r(e.code,{children:'scope="col"'})," or ",r(e.code,{children:'scope="row"'}),". For example, every ",r(e.code,{children:"th"})," cell in a ",r(e.code,{children:"thead"}),`
`,r(e.code,{children:"tr"})," row will have ",r(e.code,{children:'scope="col"'}),". Every ",r(e.code,{children:"th"})," cell in a ",r(e.code,{children:"tbody"})," ",r(e.code,{children:"tr"}),` row will
have `,r(e.code,{children:'scope="row"'}),"."]}),`
`,n(e.p,{children:[`Header cells are visually different from the standard table data. Use the
`,r(e.code,{children:"columnHeaders"}),` prop to pass the data for the column headers. Use the
`,r(e.code,{children:"useRowHeaders"}),` prop to render the first cell in every row as a header. If a
table has two levels of headers (such as two levels of horizontal headers), break
the data into two separate tables.`]}),`
`,r(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:r(e.a,{href:"https://www.w3.org/WAI/tutorials/tables/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Tables Tutorial"})}),`
`,r(e.li,{children:r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN table: The Table element"})}),`
`,r(e.li,{children:r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN HTML table advance features and accessibility"})}),`
`,r(e.li,{children:r(e.a,{href:"https://chakra-ui.com/docs/components/data-display/table",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Table"})}),`
`]}),`
`,r(e.h2,{id:"title",children:"Title"}),`
`,n(e.p,{children:["Use the ",r(e.code,{children:"titleText"})," prop to add a title to the table."]}),`
`,r(l,{of:f}),`
`,r(e.h2,{id:"row-dividers",children:"Row Dividers"}),`
`,n(e.p,{children:["Use the ",r(e.code,{children:"showRowDividers"})," prop to render a divider between each row."]}),`
`,r(l,{of:u}),`
`,r(e.h2,{id:"row-headers",children:"Row Headers"}),`
`,n(e.p,{children:["Use the ",r(e.code,{children:"useRowHeaders"}),` prop to render the first cell in every row as a header.
Notice that they turn bold.`]}),`
`,r(l,{of:w}),`
`,r(e.h2,{id:"custom-header-colors",children:"Custom Header Colors"}),`
`,n(e.p,{children:["It's possible to customize the header colors by using the ",r(e.code,{children:"columnHeadersBackgroundColor"}),`
and `,r(e.code,{children:"columnHeadersTextColor"}),` props. Note that the colors need to have sufficient
color contrast.`]}),`
`,r(l,{of:v}),`
`,r(e.h2,{id:"jsx-elements",children:"JSX Elements"}),`
`,n(e.p,{children:["It's possible to pass in JSX elements in the ",r(e.code,{children:"tableData"})," prop."]}),`
`,r(b,{code:`
export const charactersData = [
  [
    "Tom",
    "Nook",
    <Image
      alt="Tom Nook"
      size="small"
      src="https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
    />,
  ],
  [
    "Isabelle",
    "-",
    <Image
      alt="Isabelle"
      size="small"
      src="https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
    />,
  ],
  [
    "K.K.",
    "Slider",
    <Image
      alt="K.K Slider"
      size="small"
      src="https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
    />,
  ],
];
`,language:"jsx"}),`
`,r(l,{of:y}),`
`,r(e.h2,{id:"responsive-mobile-layout",children:"Responsive Mobile Layout"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Table"}),` component is responsive. Please note that for a mobile viewport the
standard horizontal layout of an HTML table is converted to a stacked vertical
layout, with each "row" visually separated by a prominent horizontal rule. Despite
the significant visual changes in the responsive layout, all component props are
still functional.`]}),`
`,n(e.p,{children:["To view and test this in Storybook, go to the ",r(e.a,{href:"../?path=/story/components-page-layout-table--with-controls",children:"With Controls"}),`
Story and change the viewport in the Storybook toolbar at the top of the page.`]})]})}function B(o={}){const{wrapper:e}=Object.assign({},c(),o.components);return e?r(e,Object.assign({},o,{children:r(a,o)})):a(o)}export{B as default};
//# sourceMappingURL=Table-b7fe2914.js.map
