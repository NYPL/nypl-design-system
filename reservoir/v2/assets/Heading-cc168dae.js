import{j as n,a as t,F as s}from"./jsx-runtime-fdf4db99.js";import{M as p,D as g,C as i,A as u,b as l}from"./index-445595fc.js";import{C as f}from"./ComponentChangelogTable-310bbbfd.js";import{H as o,W as h,D as m,a as b,S as y,b as v,O as w,c as x,d as z,B as S,L as T}from"./Heading.stories-b29b20f8.js";import{L as d}from"./Link-24c1437a.js";import{u as a}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";import"./index-6148c31a.js";import"./Icon-4eeffe51.js";const H=[{date:"2024-02-22",version:"2.1.6",type:"Bug Fix",affects:["Styles"],notes:['Fixed the desktop font size for the "heading5" variant.']},{date:"2024-02-05",version:"2.1.5",type:"Update",affects:["Styles"],notes:["Updated to use a custom `@media query` method to handle the responsive `font-size` styles."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Styles"],notes:['Updated the `font-weight` to "regular" for the `subtitle1` and `subtitle2` text styles.']},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Accessibility"],notes:['Updated the `aria-roledescription` value to "subtitle" (a more familiar and recognizable term) for the `overline` element.']},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size and font color."]}];function c(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",strong:"strong"},a(),r.components);return t(s,{children:[n(p,{of:o}),`
`,n(e.h1,{id:"heading",children:"Heading"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.0.4"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.6"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(d,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#updated-typographic-styles",target:"_self",children:"Updated Typographic Styles"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#native-heading-elements",target:"_self",children:"Native Heading Elements"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#size-styles",target:"_self",children:"Size Styles"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#overline-and-subtitle",target:"_self",children:"Overline and Subtitle Elements"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#heading-with-bold-text",target:"_self",children:"Heading with Bold Text"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#heading-with-links",target:"_self",children:"Heading with Links"}),`
`]}),`
`,t(e.li,{children:[`
`,n(d,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(g,{of:o}),`
`,t(e.p,{children:["A ",n(e.code,{children:"Heading"})," component will render a standard HTML ",n(e.code,{children:"<h>"}),` tag (1-6). The heading's
text can be passed in through a `,n(e.code,{children:"text"}),` prop or as a child. Default styles for
semantic elements can be overwritten using the `,n(e.code,{children:"size"})," prop."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:h}),`
`,n(u,{of:h}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:[`When adding headings to a webpage, it is important to ensure that the heading
hierarchy is consistent. This means they should start with only one `,n(e.code,{children:"h1"}),` for the
page title and then proceed with `,n(e.code,{children:"h2"}),"s, ",n(e.code,{children:"h3"}),"s, ",n(e.code,{children:"h4"}),"s, ",n(e.code,{children:"h5"}),"s and ",n(e.code,{children:"h6"}),`s in the
proper order and not skipping any. For example, the following is invalid HTML:`]}),`
`,n(l,{code:`
<h1>Page Title</h1>
<h2>Subtitle</h2>
<h4>Sub-subtitle</h4>
`,language:"html"}),`
`,t(e.p,{children:[`When either the overline or subtitle elements are rendered as part of the
heading, then the whole lockup will be wrapped in an `,n(e.code,{children:"<hgroup>"}),` element with
proper `,n(e.code,{children:"role"})," and ",n(e.code,{children:"aria-roledescription"}),` attributes applied. Please note that
both the overline and subtitle elements use `,n(e.code,{children:'"Subtitle"'}),` - a familiar and
recognizable term - for the `,n(e.code,{children:"aria-roledescription"})," attribute."]}),`
`,n(l,{code:`
<hgroup role="group" aria-roledescription="Heading group">
  <p aria-roledescription="Subtitle">Overline</p>
  <h2>Heading Title</h2>
  <p aria-roledescription="Subtitle">Subtitle</p>
</hgroup>
`,language:"html"}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Headings"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.a11yproject.com/posts/how-to-accessible-heading-structure/",target:"_blank",rel:"nofollow noopener noreferrer",children:"A11y Project Accessible heading structure"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/typography/heading",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Heading"})}),`
`]}),`
`,n(e.h2,{id:"updated-typographic-styles",children:"Updated Typographic Styles"}),`
`,n(e.p,{children:`New typographic styles were introduced in June 2023 and the new styles are the
supported options. The old typographic styles are still available, but they have
been deprecated.`}),`
`,n(e.h2,{id:"native-heading-elements",children:"Native Heading Elements"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"level"})," prop can be used to set a native heading element (ex. ",n(e.code,{children:"<h1>"}),`,
`,n(e.code,{children:"<h2>"}),", ...)."]}),`
`,n(l,{code:`
<Heading level="h1" />
`,language:"jsx"}),`
`,t(e.p,{children:[`The default text styles for the native heading element levels correspond
directly with the values of the `,n(e.code,{children:"size"})," prop. For example, the ",n(e.code,{children:"heading1"}),` size is
the default style for the `,n(e.code,{children:"<h1>"})," element. The ",n(e.code,{children:"heading2"}),` size is the default
style for the `,n(e.code,{children:"<h2>"})," element. And so on."]}),`
`,t(e.p,{children:[`Based on the June 2023 updates, the following values should be used for the
`,n(e.code,{children:"level"})," prop."]}),`
`,t(e.p,{children:[n(e.code,{children:"h1"}),", ",n(e.code,{children:"h2"}),", ",n(e.code,{children:"h3"}),", ",n(e.code,{children:"h4"}),", ",n(e.code,{children:"h5"}),", ",n(e.code,{children:"h6"})]}),`
`,n(i,{of:m}),`
`,n(e.h3,{id:"deprecated-options",children:"Deprecated Options"}),`
`,t(e.p,{children:["The older ",n(e.code,{children:"level"}),` values and the associated styles are still available, but the
values have been deprecated and they should only used to fulfill older design
requirements.`]}),`
`,t(e.p,{children:["For the deprecated options, the ",n(e.code,{children:"primary"}),` size is the default style for the
`,n(e.code,{children:"<h1>"})," element. The ",n(e.code,{children:"secondary"})," size is the default style for the ",n(e.code,{children:"<h2>"}),`
element. The `,n(e.code,{children:"tertiary"})," size is the default style for the ",n(e.code,{children:"<h3>"}),` element. And
the `,n(e.code,{children:"callout"})," size is the default style for the ",n(e.code,{children:"<h4>"})," element. ",n(e.code,{children:"<h5>"}),` and
`,n(e.code,{children:"<h6>"})," do not have corresponding ",n(e.code,{children:"size"})," styles."]}),`
`,t(e.p,{children:[n(e.code,{children:"one"}),", ",n(e.code,{children:"two"}),", ",n(e.code,{children:"three"}),", ",n(e.code,{children:"four"}),", ",n(e.code,{children:"five"}),", ",n(e.code,{children:"six"})]}),`
`,n(i,{of:b}),`
`,n(e.h3,{id:"migrating-from-old-to-new",children:"Migrating from Old to New"}),`
`,t(e.p,{children:["When adopting the new ",n(e.code,{children:"level"}),` values, there is a direct relationship between the
deprecated values and the new values. For example, from a DOM persepctive, `,n(e.code,{children:"two"}),`
should be replaced with `,n(e.code,{children:"h2"}),", as they will both render the ",n(e.code,{children:"<h2>"}),` element.
Please note that migrating to the new `,n(e.code,{children:"level"}),` values will change the styles for
the headings. Make sure to use the `,n(e.code,{children:"size"})," prop to make adjustments as needed."]}),`
`,n(e.h2,{id:"size-styles",children:"Size Styles"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"size"}),` prop can be used to override the default styles of the native heading
elements.`]}),`
`,n(l,{code:`
<Heading size="heading1" />
`,language:"jsx"}),`
`,t(e.p,{children:[`Based on the June 2023 updates, the following values should be used for the
`,n(e.code,{children:"size"})," prop."]}),`
`,t(e.p,{children:[n(e.code,{children:"display1"}),", ",n(e.code,{children:"heading1"}),", ",n(e.code,{children:"heading2"}),", ",n(e.code,{children:"heading3"}),", ",n(e.code,{children:"heading4"}),", ",n(e.code,{children:"heading5"}),`,
`,n(e.code,{children:"heading6"})]}),`
`,t(e.p,{children:["For usage recommendations of each of the ",n(e.code,{children:"size"}),` options, please refer to the
`,n(e.a,{href:"../?path=/docs/style-guide-typography--docs#size-options",children:`Typography Style
Guide`}),"."]}),`
`,t(e.p,{children:[n(e.strong,{children:"Note:"})," In the examples below, the ",n(e.code,{children:"level"})," prop is set to ",n(e.code,{children:'level="h1"'}),` for
each `,n(e.code,{children:"Heading"})," component and the ",n(e.code,{children:"size"})," prop is used to adjust the text size."]}),`
`,n(i,{of:y}),`
`,n(e.h3,{id:"deprecated-options-1",children:"Deprecated Options"}),`
`,t(e.p,{children:["The older ",n(e.code,{children:"size"}),` values and the associated styles are still available, but the
values have been deprecated and they should only used to fulfill older design
requirements.`]}),`
`,t(e.p,{children:[n(e.code,{children:"primary"}),", ",n(e.code,{children:"secondary"}),", ",n(e.code,{children:"tertiary"}),", ",n(e.code,{children:"callout"})]}),`
`,t(e.p,{children:[n(e.strong,{children:"Note:"})," In the examples below, the ",n(e.code,{children:"level"})," prop is set to ",n(e.code,{children:'level="one"'}),` for
each `,n(e.code,{children:"Heading"})," component and the ",n(e.code,{children:"size"})," prop is used to adjust the text size."]}),`
`,n(i,{of:v}),`
`,n(e.h2,{id:"overline-and-subtitle",children:"Overline and Subtitle"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Heading"}),` component offers two additional text elements as part of the full
heading lockup: overline and subtitle. When the `,n(e.code,{children:"overline"})," or ",n(e.code,{children:"subtitle"}),` props
are passed, the `,n(e.code,{children:"Heading"}),` component will handle the DOM structure and styling
for the corresponding text elements.`]}),`
`,t(e.p,{children:[`The styling of the overline and subtitle elements include differentiating the
font size for both elements based on the `,n(e.code,{children:"size"})," prop. For ",n(e.code,{children:"display1"}),`,
`,n(e.code,{children:"heading1"}),", and ",n(e.code,{children:"heading2"}),`, the text for these elements will be one size. And
for `,n(e.code,{children:"heading3"}),", ",n(e.code,{children:"heading4"}),", ",n(e.code,{children:"heading5"}),", and ",n(e.code,{children:"heading6"}),`, the text for these
elements will be another (smaller) size.`]}),`
`,t(e.p,{children:[n(e.strong,{children:"Note:"})," In the examples below, the ",n(e.code,{children:"level"})," prop is set to ",n(e.code,{children:'level="h1"'}),` for
each `,n(e.code,{children:"Heading"})," component and the ",n(e.code,{children:"size"})," prop is used to adjust the text size."]}),`
`,n(e.h3,{id:"overline",children:"Overline"}),`
`,t(e.p,{children:["Use the ",n(e.code,{children:"overline"}),` prop to set the text for an eyebrow text element that sits
above the heading text. The overline text is styled to be all uppercase.`]}),`
`,n(l,{code:`
<Heading
  overline="Overline"
  text="Lorem ipsum dolor"
/>
`,language:"jsx"}),`
`,n(i,{of:w}),`
`,n(e.h3,{id:"subtitle",children:"Subtitle"}),`
`,t(e.p,{children:["Use the ",n(e.code,{children:"subtitle"}),` prop to set the text for a text element that sits below the
heading text.`]}),`
`,n(l,{code:`
<Heading
  subtitle="The subtitle text sits below the main heading text."
  text="Lorem ipsum dolor"
/>
`,language:"jsx"}),`
`,n(i,{of:x}),`
`,n(e.h3,{id:"full-heading-lockup",children:"Full Heading Lockup"}),`
`,t(e.p,{children:["Or use both the ",n(e.code,{children:"overline"})," and ",n(e.code,{children:"subtitle"}),` props in combination to render a fully
composed heading lockup.`]}),`
`,n(l,{code:`
<Heading
  overline="Overline"
  subtitle="The subtitle text sits below the main heading text."
  text="Lorem ipsum dolor"
/>
`,language:"jsx"}),`
`,n(i,{of:z}),`
`,n(e.h2,{id:"heading-with-bold-text",children:"Heading with Bold Text"}),`
`,n(i,{of:S}),`
`,n(e.h2,{id:"heading-with-links",children:"Heading with Links"}),`
`,t(e.p,{children:["When the ",n(e.code,{children:"url"})," prop is passed to ",n(e.code,{children:"Heading"}),", a child ",n(e.code,{children:"<a>"}),` element is created and
the heading text becomes an active link.`]}),`
`,n(i,{of:T}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(f,{changelogData:H})]})}function ne(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?n(e,Object.assign({},r,{children:n(c,r)})):c(r)}export{ne as default};
//# sourceMappingURL=Heading-cc168dae.js.map
