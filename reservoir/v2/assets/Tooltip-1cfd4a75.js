import{j as e,a as n,F as p}from"./jsx-runtime-fdf4db99.js";import{M as s,D as a,C as t,A as m}from"./index-445595fc.js";import{T as l,W as d,O as f,a as b,b as u,U as g,c as T,D as w,d as C}from"./Tooltip.stories-8fc11a78.js";import{L as r}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./Radio-8cdc7037.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./RadioGroup-8ef77e28.js";import"./Fieldset-46002ef9.js";import"./spacing-06362f80.js";import"./SimpleGrid-bd04b221.js";import"./Toggle-3062d19c.js";import"./chakra-ui-checkbox.esm-772830ca.js";import"./index-13103a50.js";import"./Tooltip-88733f7d.js";import"./popper-f3391c26.js";import"./chakra-ui-portal.esm-6752a0d2.js";function c(i){const o=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",em:"em"},h(),i.components);return n(p,{children:[e(s,{of:l}),`
`,e(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,n(o.table,{children:[e(o.thead,{children:n(o.tr,{children:[e(o.th,{children:"Component Version"}),e(o.th,{children:"DS Version"})]})}),n(o.tbody,{children:[n(o.tr,{children:[e(o.td,{children:"Added"}),e(o.td,{children:e(o.code,{children:"1.1.0"})})]}),n(o.tr,{children:[e(o.td,{children:"Latest"}),e(o.td,{children:e(o.code,{children:"2.0.0"})})]})]})]}),`
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
`,e(t,{of:C})]})}function mo(i={}){const{wrapper:o}=Object.assign({},h(),i.components);return o?e(o,Object.assign({},i,{children:e(c,i)})):c(i)}export{mo as default};
//# sourceMappingURL=Tooltip-1cfd4a75.js.map
