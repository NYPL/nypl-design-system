import{j as n,a as t,F as s}from"./jsx-runtime-09ad29cb.js";import{M as a,D as m,C as i,A as p}from"./index-5d3bb37f.js";import{S as l,C as h,W as f,a as u,E as g,b as T,c as b}from"./StructuredContent.stories-19cc4f1d.js";import{L as r}from"./Link-0ed02cf7.js";import{u as d}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./StructuredContent-4cd8cf1d.js";import"./Heading-2ec2ea62.js";import"./Image-3405777f.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./Icon-6616a4b9.js";function c(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em"},d(),o.components);return t(s,{children:[n(a,{of:l}),`
`,n(e.h1,{id:"structuredcontent",children:"StructuredContent"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.25.9"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#with-html-string-text-content",target:"_self",children:"With HTML String Text Content"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#with-html-element-text-content",target:"_self",children:"With HTML Element Text Content"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:l}),`
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
`,n(i,{of:f}),`
`,n(e.h2,{id:"with-html-element-text-content",children:"With HTML Element Text Content"}),`
`,t(e.p,{children:["The following content is passed as HTML DOM elements to the ",n(e.code,{children:"bodyContent"})," prop."]}),`
`,n(i,{of:u}),`
`,n(e.h2,{id:"examples",children:"Examples"}),`
`,t(e.p,{children:["The following has two ",n(e.code,{children:"StructuredContent"}),` components. The first one has an image
but no callout content. The second component does not have an image.`]}),`
`,n(i,{of:g}),`
`,t(e.p,{children:["The following has three ",n(e.code,{children:"StructuredContent"}),` components. The first one only has
the callout content. The second has no callout content but an image and text content.
The third one does not contain an image.`]}),`
`,n(i,{of:T}),`
`,t(e.p,{children:["The following has two ",n(e.code,{children:"StructuredContent"}),` components. The first one only displays
text content. The second one has a callout content and image spanning full width.`]}),`
`,n(i,{of:b})]})}function K(o={}){const{wrapper:e}=Object.assign({},d(),o.components);return e?n(e,Object.assign({},o,{children:n(c,o)})):c(o)}export{K as default};
//# sourceMappingURL=StructuredContent-3fb213ac.js.map
