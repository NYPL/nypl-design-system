import{j as n,a as t,F as a}from"./jsx-runtime-fdf4db99.js";import{M as s,D as m,C as i,A as p,b as g}from"./index-445595fc.js";import{S as r,C as h,W as u,a as f,b as T,E as C,c as x,d as b}from"./StructuredContent.stories-11d12362.js";import{L as o}from"./Link-24c1437a.js";import{C as w}from"./ComponentChangelogTable-310bbbfd.js";import{u as d}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./StructuredContent-f237afd9.js";import"./useDSHeading-94e72700.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./Icon-4eeffe51.js";import"./List-582282a6.js";import"./Table-64c6aa77.js";const y=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `headingText` and `calloutText` props to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function c(l){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em"},d(),l.components);return t(a,{children:[n(s,{of:r}),`
`,n(e.h1,{id:"structuredcontent",children:"StructuredContent"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.25.9"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#with-html-string-text-content",target:"_self",children:"With HTML String Text Content"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#with-html-element-text-content",target:"_self",children:"With HTML Element Text Content"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#with-custom-heading-levels",target:"_self",children:"With Custom Heading Levels"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:r}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:h}),`
`,n(p,{of:h}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"StructuredContent"}),` component is a structured container around a specific
set of content. While the main image can be controlled through the `,n(e.code,{children:"imageProps"}),`
prop, the content will not always be controlled. If the content that is being
passed is coming from a CMS, the content can contain any set of HTML elements that
are `,n(e.em,{children:"not"}),` controlled through Reservoir DS components. While this component
attempts to style the added elements, we cannot guarantee that the content will
be accessible. Please review your content and make sure that:`]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"The content's font-size to be scaled to 200% without content overlapping."}),`
`,n(e.li,{children:"Any additional images have descriptive (but not too lengthy) alt text."}),`
`,t(e.li,{children:["Any additional heading levels should not be skipped. Meaning, a ",n(e.code,{children:"<h2>"}),` should
not be followed by a `,n(e.code,{children:"<h4>"}),"."]}),`
`,n(e.li,{children:"Any links or text with colors should have a 4.5:1 contrast ratio."}),`
`]}),`
`,n(e.h2,{id:"with-html-string-text-content",children:"With HTML String Text Content"}),`
`,t(e.p,{children:["The following body content is passed as a string to the ",n(e.code,{children:"bodyContent"}),` prop. It
includes HTML tags in the string.`]}),`
`,n(i,{of:u}),`
`,n(e.h2,{id:"with-html-element-text-content",children:"With HTML Element Text Content"}),`
`,t(e.p,{children:["The following content is passed as HTML DOM elements to the ",n(e.code,{children:"bodyContent"})," prop."]}),`
`,n(i,{of:f}),`
`,n(e.h2,{id:"with-custom-heading-levels",children:"With Custom Heading Levels"}),`
`,t(e.p,{children:["By default, the ",n(e.code,{children:"StructuredContent"})," component will render its ",n(e.code,{children:"headingText"}),` as
an `,n(e.code,{children:"h2"})," and its ",n(e.code,{children:"calloutText"})," as an ",n(e.code,{children:"h3"}),`. If this needs to be updated in a
consuming application, it's possible to pass custom `,n(e.code,{children:"Heading"}),` or h* HTML
elements.`]}),`
`,t(e.p,{children:["In the following examples, the ",n(e.code,{children:"headingText"})," is rendered as an ",n(e.code,{children:"h3"}),` and the
`,n(e.code,{children:"calloutText"})," is rendered as an ",n(e.code,{children:"h4"}),`. Note that both headings are rendered
sequentially, so the callout heading level MUST be the next heading after the
`,n(e.code,{children:"headingText"})," level."]}),`
`,n(g,{code:`

const customH3heading = <Heading level="h3">Custom H3 Heading Text</Heading>;
const customH4callout = <Heading level="h4">Custom H4 callout Text</Heading>;

<StructuredContent
  headingText={customH3heading}
  calloutText={customH4callout}
  {...otherProps}
/>
`,language:"tsx"}),`
`,n(i,{of:T}),`
`,n(e.h2,{id:"examples",children:"Examples"}),`
`,t(e.p,{children:["The following has two ",n(e.code,{children:"StructuredContent"}),` components. The first one has an image
but no callout content. The second component does not have an image.`]}),`
`,n(i,{of:C}),`
`,t(e.p,{children:["The following has three ",n(e.code,{children:"StructuredContent"}),` components. The first one only has
the callout content. The second has no callout content but an image and text content.
The third one does not contain an image.`]}),`
`,n(i,{of:x}),`
`,t(e.p,{children:["The following has two ",n(e.code,{children:"StructuredContent"}),` components. The first one only displays
text content. The second one has a callout content and image spanning full width.`]}),`
`,n(i,{of:b}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(w,{changelogData:y})]})}function oe(l={}){const{wrapper:e}=Object.assign({},d(),l.components);return e?n(e,Object.assign({},l,{children:n(c,l)})):c(l)}export{oe as default};
//# sourceMappingURL=StructuredContent-a9d98508.js.map
