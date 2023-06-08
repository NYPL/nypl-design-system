import{j as e,a as n,F as p}from"./jsx-runtime-09ad29cb.js";import{M as s,D as a,C as t,A as m}from"./index-5d3bb37f.js";import{T as l,W as d,O as f,a as b,b as u,U as g,c as T,D as w,d as C}from"./Tooltip.stories-8ad016d9.js";import{L as r}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./Image-3405777f.js";import"./Radio-c107ee3b.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./RadioGroup-8ceb9bfa.js";import"./Fieldset-8799f492.js";import"./spacing-06362f80.js";import"./SimpleGrid-e54e0b68.js";import"./Toggle-9580209e.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./index-fb519959.js";import"./Tooltip-aeab1bc9.js";import"./popper-f3391c26.js";import"./chakra-ui-portal.esm-c70f6466.js";function c(i){const o=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",em:"em"},h(),i.components);return n(p,{children:[e(s,{of:l}),`
`,e(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,n(o.table,{children:[e(o.thead,{children:n(o.tr,{children:[e(o.th,{children:"Component Version"}),e(o.th,{children:"DS Version"})]})}),n(o.tbody,{children:[n(o.tr,{children:[e(o.td,{children:"Added"}),e(o.td,{children:e(o.code,{children:"1.1.0"})})]}),n(o.tr,{children:[e(o.td,{children:"Latest"}),e(o.td,{children:e(o.code,{children:"1.5.0"})})]})]})]}),`
`,e(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(o.ul,{children:[`
`,n(o.li,{children:[`
`,e(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(o.li,{children:[`
`,e(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(o.li,{children:[`
`,e(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(o.li,{children:[`
`,e(r,{href:"#examples",target:"_self",children:"Examples"}),`
`]}),`
`]}),`
`,e(o.h2,{id:"overview",children:"Overview"}),`
`,e(a,{of:l}),`
`,n(o.p,{children:["The ",e(o.code,{children:"Tooltip"}),` component shows contextual help or information about a specific
component when a user hovers or focuses on the component.`]}),`
`,e(o.h2,{id:"component-props",children:"Component Props"}),`
`,e(t,{of:d}),`
`,e(m,{of:d}),`
`,e(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(o.p,{children:["The DS ",e(o.code,{children:"Tooltip"}),` component is implemented with Chakra UI and Chakra handles the
appropriate aria-describedby attribute for the element that the tooltip is associated with.`]}),`
`,n(o.p,{children:["The ",e(o.code,{children:"Tooltip"}),` component is accessible via keyboard. The color contrast between
foreground color and background color is 4.5:1. If text size is 200%, the
button scales with text so there is no overlap.`]}),`
`,e(o.p,{children:`If a tooltip is associated with a form control (text, radio, checkbox, etc),
the text for the tooltip should be included in the form control label.`}),`
`,e(o.p,{children:"Resources:"}),`
`,n(o.ul,{children:[`
`,e(o.li,{children:e(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI ARIA Tooltip"})}),`
`,e(o.li,{children:e(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN ARIA: tooltip role"})}),`
`,e(o.li,{children:e(o.a,{href:"https://chakra-ui.com/docs/components/overlay/tooltip",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Tooltip"})}),`
`]}),`
`,e(o.h2,{id:"examples",children:"Examples"}),`
`,e(o.h3,{id:"tooltips-on-form-options",children:"Tooltips on form options"}),`
`,n(o.p,{children:["When using the ",e(o.code,{children:"Tooltip"})," component in forms containing ",e(o.code,{children:"Checkbox"}),", ",e(o.code,{children:"Radio"}),", and ",e(o.code,{children:"Toggle"}),`,
the `,e(o.code,{children:"shouldWrapChildren"}),` prop needs to be included to correctly position the tooltip in
relation to it's child. The underlying `,e(o.code,{children:"ref"}),` of these components point to the visually hidden
input element. `,e(o.code,{children:"shouldWrapChildren"}),` ensures that the size of the visually hidden element is
in sync with the rendered visual control.`]}),`
`,e(t,{of:f}),`
`,e(o.h3,{id:"tooltip-on-image-component",children:"Tooltip on Image component"}),`
`,n(o.p,{children:["When using the ",e(o.code,{children:"Tooltip"})," component on an ",e(o.code,{children:"Image"}),` component, the
`,e(o.code,{children:"shouldWrapChildren"})," prop should ",e(o.em,{children:"not"})," be used. This causes the ",e(o.code,{children:"Image"}),`'s
aspect ratio to not render properly.`]}),`
`,e(t,{of:b}),`
`,e(o.h3,{id:"tooltip-on-linked-icon",children:"Tooltip on Linked Icon"}),`
`,e(t,{of:u}),`
`,e(o.h3,{id:"tooltip-with-icon-content",children:"Tooltip with Icon Content"}),`
`,e(t,{of:g}),`
`,e(o.h3,{id:"tooltip-with-image-content",children:"Tooltip with Image Content"}),`
`,e(t,{of:T}),`
`,e(o.h3,{id:"disabling-tooltip",children:"Disabling Tooltip"}),`
`,n(o.p,{children:["A tooltip can be disabled by passing the ",e(o.code,{children:"isDisabled"})," prop."]}),`
`,e(t,{of:w}),`
`,n(o.p,{children:["By default, the ",e(o.code,{children:"Tooltip"})," is not shown for a disabled ",e(o.code,{children:"Button"}),". To show the ",e(o.code,{children:"Tooltip"}),`
on a disabled `,e(o.code,{children:"Button"}),", pass the ",e(o.code,{children:"shouldWrapChildren"})," prop."]}),`
`,e(t,{of:C})]})}function ao(i={}){const{wrapper:o}=Object.assign({},h(),i.components);return o?e(o,Object.assign({},i,{children:e(c,i)})):c(i)}export{ao as default};
//# sourceMappingURL=Tooltip-cb2b96c5.js.map
