import{j as t,a as n,F as m}from"./jsx-runtime-09ad29cb.js";import{M as b,D as g,C as o,A as a,b as l}from"./index-42243e0e.js";import{T as c,E as s,F as d,a as u}from"./TagSet.stories-61004179.js";import{L as r}from"./Link-0ed02cf7.js";import{u as p}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./TagSet-8b2c5816.js";import"./Icon-6616a4b9.js";import"./Tooltip-aeab1bc9.js";import"./Image-3405777f.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./popper-f3391c26.js";import"./chakra-ui-portal.esm-c70f6466.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./index-fb519959.js";import"./Button-a3ea41e0.js";function h(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",em:"em",a:"a"},p(),i.components);return n(m,{children:[t(b,{of:c}),`
`,t(e.h1,{id:"tagset",children:"TagSet"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"1.2.0"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.5.0"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#explore-variant",target:"_self",children:"Explore Variant"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#filter-variant",target:"_self",children:"Filter Variant"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(g,{of:c}),`
`,t(e.h2,{id:"explore-variant",children:"Explore Variant"}),`
`,n(e.p,{children:['An "explore" ',t(e.code,{children:"TagSet"}),` variant is used to display content that can help a user
start a search and promote exploration. These tags are not dismissible and
should be used as links to other pages with the content highlighted on the new
page.`]}),`
`,t(e.p,{children:"Notes:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The ",t(e.code,{children:"isDismissible"})," and ",t(e.code,{children:"onClick"})," props are not used in this variant."]}),`
`]}),`
`,t(o,{of:s}),`
`,t(a,{of:s}),`
`,t(e.h3,{id:"tagsetdata-prop-for-explore-variant",children:"`tagSetData` Prop for Explore Variant"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"tagSetData"})," prop is an array of objects that contain ",t(e.code,{children:"iconName"})," and ",t(e.code,{children:"label"}),`
properties. The `,t(e.code,{children:"iconName"}),` is the name of the icon to display through the
Reservoir `,t(e.code,{children:"Icon"})," component and is optional. The ",t(e.code,{children:"label"})," ",t(e.em,{children:"MUST"}),` be a React
element; typically, links are expected to be used for the "explore" variant.`]}),`
`,t(l,{code:`
const tagSetData = [
  {
    label: (
      <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/components-basic-elements-card--with-controls">
        Card
      </a>
    ),
  },
  {
    iconName: "fileTypeDoc",
    label: (
      <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/components-page-layout-structuredcontent--controls">
        StructuredContent
      </a>
    ),
  },
  {
    iconName: "alertWarningOutline",
    label: (
      <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/components-feedback-progressindicator--with-controls">
        ProgressIndicator
      </a>
    ),
  },
  {
    iconName: "actionSettings",
    label: (
      <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/hooks-usenyplbreakpoints--docs">
        useNYPLBreakpoints React hook
      </a>
    ),
  },
];
`,language:"tsx"}),`
`,t(e.h2,{id:"filter-variant",children:"Filter Variant"}),`
`,n(e.p,{children:['A "filter" ',t(e.code,{children:"TagSet"}),` variant is used to display keywords the user selected to
filter content on a page. For example, in a search results page, the filter
criteria a user selects would be displayed back to the user through the "filter"
`,t(e.code,{children:"TagSet"}),` variant. These tags can be dismissed by the user and the scope of the
content should be updated accordingly -- but the update to display the proper
filters and updated results are the responsibility of the consuming application.`]}),`
`,t(e.p,{children:"Notes:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The ",t(e.code,{children:"isDismissible"})," prop is optional and the ",t(e.code,{children:"onClick"}),` prop is required for
this variant.`]}),`
`,n(e.li,{children:["The ",t(e.code,{children:"onClick"})," prop will only fire when ",t(e.code,{children:"isDismissible"}),` is true and the user
clicks a tag.`]}),`
`,n(e.li,{children:["Icons will not be rendered when ",t(e.code,{children:"isDismissible"}),` is true. In this case, the "X"
close icon will be rendered instead.`]}),`
`,n(e.li,{children:["When the ",t(e.code,{children:"isDismissible"}),` prop is true, a "Clear Filters" button will be
rendered at the end of the list of tags. Clicking this button will also
trigger the `,t(e.code,{children:"onClick"})," prop."]}),`
`]}),`
`,t(o,{of:d}),`
`,t(a,{of:d}),`
`,t(e.h3,{id:"tagsetdata-prop-for-filter-variant",children:"`tagSetData` Prop for Filter Variant"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"tagSetData"})," prop is an array of objects that contain ",t(e.code,{children:"iconName"})," and ",t(e.code,{children:"label"}),`
properties. The `,t(e.code,{children:"iconName"}),` is the name of the icon to display through the
Reservoir `,t(e.code,{children:"Icon"})," component and is optional. The ",t(e.code,{children:"label"})," ",t(e.em,{children:"MUST"}),` be a string for
the filter type.`]}),`
`,t(l,{code:`
const tagSetData = [
  { iconName: "utilityAccountFilled", label: "Abbey Road" },
  { iconName: "actionLaunch", label: "The Beatles" },
  { iconName: "alertWarningOutline", label: "Revolver" },
  {
    iconName: "check",
    label: "The Beatles Sgt. Pepper's Lonely Hearts Club Band",
  },
];
`,language:"tsx"}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:['All properly implemented tags in the "explore" and "filter" ',t(e.code,{children:"TagSet"}),` variants
are accessible.`]}),`
`,t(e.p,{children:`For the "explore" variant, tags are expected to be set as links and are
therefore focusable.`}),`
`,n(e.p,{children:[`For the "filter" variant, tags are rendered as buttons to perform in-page
clicking behavior. When `,t(e.code,{children:"isDismissible"})," is true, the ",t(e.code,{children:"aria-label"}),` attribute is
updated to include `,t(e.code,{children:'", click to remove filter"'}),`. For example, for a tag with a
label of `,t(e.code,{children:'"Abbey Road"'}),", the ",t(e.code,{children:"aria-label"})," will be ",t(e.code,{children:'"Abbey Road, click to remove filter"'}),"."]}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI-ARIA Button"})}),`
`]}),`
`,t(e.h2,{id:"examples",children:"Examples"}),`
`,t(o,{of:u})]})}function $(i={}){const{wrapper:e}=Object.assign({},p(),i.components);return e?t(e,Object.assign({},i,{children:t(h,i)})):h(i)}export{$ as default};
//# sourceMappingURL=TagSet-6669350c.js.map
