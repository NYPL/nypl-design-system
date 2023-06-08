import{j as r,a as n,F as c}from"./jsx-runtime-09ad29cb.js";import{M as s,D as p,C as i,A as m}from"./index-5d3bb37f.js";import{R as l,C as a,B as f,H as u,L as b}from"./Radio.stories-2129a3f8.js";import{L as o}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./Radio-c107ee3b.js";import"./ComponentWrapper-82a15cf7.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./Icon-6616a4b9.js";function d(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},h(),t.components);return n(c,{children:[r(s,{of:l}),`
`,r(e.h1,{id:"radio",children:"Radio"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.22.0"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"1.5.0"})})]})]})]}),`
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
`,r(o,{href:"#browser-states",target:"_self",children:"Browser States"}),`
`]}),`
`,n(e.li,{children:[`
`,r(o,{href:"#helper-and-error-text",target:"_self",children:"Helper and Error Text"}),`
`]}),`
`,n(e.li,{children:[`
`,r(o,{href:"#label-using-jsx-elements",target:"_self",children:"Label Using JSX Elements"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"overview",children:"Overview"}),`
`,r(p,{of:l}),`
`,n(e.p,{children:[`This component renders a radio button form element. Note that all these examples
show the `,r(e.code,{children:"Radio"})," button in isolation. We recommend to always use the ",r(e.code,{children:"Radio"}),`
component inside the Design System `,r(e.code,{children:"RadioGroup"})," component. The ",r(e.code,{children:"RadioGroup"}),`
component will handle all the states and data management.`]}),`
`,r(e.h2,{id:"component-props",children:"Component Props"}),`
`,r(i,{of:a}),`
`,r(m,{of:a}),`
`,r(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Radio"})," component renders an ",r(e.code,{children:"input"})," element with the ",r(e.code,{children:'type="radio"'}),` attribute.
This HTML element is accessible by default.`]}),`
`,n(e.p,{children:["When ",r(e.code,{children:"showLabel"})," is set to false, the ",r(e.code,{children:"labelText"}),` value will be set to the
`,r(e.code,{children:"<input>"}),"'s ",r(e.code,{children:"aria-label"})," attribute."]}),`
`,r(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:r(e.a,{href:"https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C ARIA radiogroup and radio example"})}),`
`,r(e.li,{children:r(e.a,{href:"https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/radio/radio-1/radio-1.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Radio Button Example"})}),`
`,r(e.li,{children:r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",target:"_blank",rel:"nofollow noopener noreferrer",children:'MDN input type="radio"'})}),`
`,r(e.li,{children:r(e.a,{href:"https://dequeuniversity.com/library/aria/radio-and-radio-group",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Radio and Radio Group"})}),`
`,r(e.li,{children:r(e.a,{href:"https://chakra-ui.com/docs/components/form/radio",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Radio"})}),`
`]}),`
`,r(e.h2,{id:"browser-states",children:"Browser States"}),`
`,r(i,{of:f}),`
`,r(e.h2,{id:"helper-and-error-text",children:"Helper and Error Text"}),`
`,r(i,{of:u}),`
`,r(e.h2,{id:"jsx-element-labels",children:"JSX Element Labels"}),`
`,n(e.p,{children:[`This is useful when you want to add dynamic content to the label or add
a layout to the label. View the `,r(e.code,{children:"RadioGroup"}),` documentation for this
usage.`]}),`
`,r(i,{of:b})]})}function K(t={}){const{wrapper:e}=Object.assign({},h(),t.components);return e?r(e,Object.assign({},t,{children:r(d,t)})):d(t)}export{K as default};
//# sourceMappingURL=Radio-0b0ad7d7.js.map
