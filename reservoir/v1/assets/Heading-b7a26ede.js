import{j as n,a as i,F as a}from"./jsx-runtime-09ad29cb.js";import{M as s,D as p,C as o,A as g,b as m}from"./index-5d3bb37f.js";import{H as h,W as l,D as f,S as u,B as b,L as w}from"./Heading.stories-d011f081.js";import{L as t}from"./Link-0ed02cf7.js";import{u as c}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./Icon-6616a4b9.js";function d(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},c(),r.components);return i(a,{children:[n(s,{of:h}),`
`,n(e.h1,{id:"heading",children:"Heading"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.0.4"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#default-heading-styles",target:"_self",children:"Default Heading Styles"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#size-styles",target:"_self",children:"Size Styles"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#heading-with-bold-text",target:"_self",children:"Heading with Bold Text"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#heading-with-links",target:"_self",children:"Heading with Links"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:h}),`
`,i(e.p,{children:["A ",n(e.code,{children:"Heading"})," component will render a standard HTML ",n(e.code,{children:"<h>"}),` tag (1-6). The heading's
text can be passed in through a `,n(e.code,{children:"text"}),` prop or as a child. Default styles for
semantic elements can be overwritten using the `,n(e.code,{children:"size"})," prop."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(o,{of:l}),`
`,n(g,{of:l}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i(e.p,{children:[`When adding headings to a webpage, it is important to ensure that the heading
hierarchy is consistent. This means they should start with only one `,n(e.code,{children:"h1"}),` for the
page title and then proceed with `,n(e.code,{children:"h2"}),"s, ",n(e.code,{children:"h3"}),"s, ",n(e.code,{children:"h4"}),"s, ",n(e.code,{children:"h5"}),"s and ",n(e.code,{children:"h6"}),`s in the
proper order and not skipping any. For example, the following is invalid HTML:`]}),`
`,n(m,{code:`
<h1>Page Title</h1>
<h2>Subtitle</h2>
<h4>Sub-subtitle</h4>
`,language:"html"}),`
`,n(e.p,{children:"Resources:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Headings"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.a11yproject.com/posts/how-to-accessible-heading-structure/",target:"_blank",rel:"nofollow noopener noreferrer",children:"A11y Project Accessible heading structure"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/typography/heading",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Heading"})}),`
`]}),`
`,n(e.h2,{id:"default-styles",children:"Default Styles"}),`
`,n(o,{of:f}),`
`,n(e.h2,{id:"size-styles",children:"Size Styles"}),`
`,i(e.p,{children:["Note: The ",n(e.code,{children:"level"})," prop for the ",n(e.code,{children:"Heading"}),` components in this example are all set
to `,n(e.code,{children:'level="one"'}),"."]}),`
`,n(o,{of:u}),`
`,n(e.h2,{id:"heading-with-bold-text",children:"Heading with Bold Text"}),`
`,n(o,{of:b}),`
`,n(e.h2,{id:"heading-with-links",children:"Heading with Links"}),`
`,i(e.p,{children:["When the ",n(e.code,{children:"url"})," prop is passed to ",n(e.code,{children:"Heading"}),", a child ",n(e.code,{children:"<a>"}),` element is created and
the heading text becomes an active link.`]}),`
`,n(o,{of:w})]})}function U(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?n(e,Object.assign({},r,{children:n(d,r)})):d(r)}export{U as default};
//# sourceMappingURL=Heading-b7a26ede.js.map
