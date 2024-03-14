import{j as r,a as n,F as c}from"./jsx-runtime-fdf4db99.js";import{M as s,D as p,C as i,A as m}from"./index-445595fc.js";import{R as l,C as a,B as f,H as u,L as b}from"./Radio.stories-c17fb171.js";import{L as o}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Radio-8cdc7037.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./HelperErrorText-55c57f50.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./Icon-4eeffe51.js";function d(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},h(),t.components);return n(c,{children:[r(s,{of:l}),`
`,r(e.h1,{id:"radio",children:"Radio"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.22.0"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"2.0.0"})})]})]})]}),`
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
`,r(i,{of:b})]})}function Q(t={}){const{wrapper:e}=Object.assign({},h(),t.components);return e?r(e,Object.assign({},t,{children:r(d,t)})):d(t)}export{Q as default};
//# sourceMappingURL=Radio-01bdea1d.js.map
