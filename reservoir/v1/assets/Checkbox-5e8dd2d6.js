import{j as n,a as t,F as a}from"./jsx-runtime-09ad29cb.js";import{M as s,D as p,C as i,A as m}from"./index-42243e0e.js";import{C as l,W as c,a as b,I as f,A as u,L as k}from"./Checkbox.stories-0a019db8.js";import{L as r}from"./Link-0ed02cf7.js";import{u as d}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./Heading-2ec2ea62.js";import"./index-6148c31a.js";import"./Checkbox-ac4cd2b8.js";import"./ComponentWrapper-82a15cf7.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./index-fb519959.js";import"./Icon-6616a4b9.js";function h(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},d(),o.components);return t(a,{children:[n(s,{of:l}),`
`,n(e.h1,{id:"checkbox",children:"Checkbox"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.1.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
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
`,n(r,{href:"#checked",target:"_self",children:"Checked"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#indeterminate",target:"_self",children:"Indeterminate"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#focused",target:"_self",children:"Focused"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#disabled",target:"_self",children:"Disabled"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#helper-text",target:"_self",children:"Helper Text"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#error-text",target:"_self",children:"Error Text"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#label-using-jsx-elements",target:"_self",children:"Label Using JSX Elements"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:l}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Checkbox"})," component renders a checkbox input element. The ",n(e.code,{children:"Checkbox"})," component should be used to allow users to select one or more options from a list of choices."]}),`
`,t(e.p,{children:["Please note that the examples on this page show the ",n(e.code,{children:"Checkbox"})," component in isolation. It is recommended to use the ",n(e.code,{children:"Checkbox"}),` component inside the
DS `,n(e.code,{children:"CheckboxGroup"})," component. The ",n(e.code,{children:"CheckboxGroup"})," component will handle all the states and data management."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:c}),`
`,n(m,{of:c}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Checkbox"})," component renders ",n(e.code,{children:"<label>"})," and ",n(e.code,{children:'<input type="checkbox" />'}),`
elements that are associated with each other; the label has a `,n(e.code,{children:"for"}),` attribute
with the value of the `,n(e.code,{children:"input"}),"'s ",n(e.code,{children:"id"}),` element. If there is helper or invalid text,
the `,n(e.code,{children:"<input>"})," element will have a ",n(e.code,{children:"aria-describedby"}),` attribute with the value of
the helper or invalid text.`]}),`
`,t(e.p,{children:["When ",n(e.code,{children:"showLabel"})," is set to false, the ",n(e.code,{children:"labelText"}),` value will be set to the
`,n(e.code,{children:"<input>"}),"'s ",n(e.code,{children:"aria-label"})," attribute."]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-1/checkbox-1.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI ARIA Checkbox Example"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.a11ymatters.com/pattern/checkbox/",target:"_blank",rel:"nofollow noopener noreferrer",children:"a11ymatters Accessible Checkbox"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN ARIA: checkbox role"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/checkbox",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Checkbox"})}),`
`]}),`
`,n(e.h2,{id:"checked",children:"Checked"}),`
`,t(e.p,{children:["Note that the ",n(e.code,{children:"isChecked"})," property in this example is set to ",n(e.code,{children:"true"}),` and clicking
on it won't remove the checkmark; the `,n(e.code,{children:"isChecked"}),` prop must now be controlled
and removed manually by the parent component that controls this state.`]}),`
`,n(i,{of:b}),`
`,n(e.h2,{id:"indeterminate",children:"Indeterminate"}),`
`,t(e.p,{children:["Note: This state only changes the icon through the ",n(e.code,{children:"isIndeterminate"}),` prop. This
does not affect whether the checkbox is checked. The `,n(e.code,{children:"isIndeterminate"}),` prop must
now be controlled and removed by the parent component in order to remove this state.`]}),`
`,n(i,{of:f}),`
`,n(e.h2,{id:"additional-states",children:"Additional States"}),`
`,n(i,{of:u}),`
`,n(e.h2,{id:"label-using-jsx-elements",children:"Label Using JSX Elements"}),`
`,t(e.p,{children:[`This is useful when you want to add dynamic content to the label or add
a layout to the label. View the `,n(e.code,{children:"CheckboxGroup"}),` documentation for this
usage.`]}),`
`,n(i,{of:k})]})}function Z(o={}){const{wrapper:e}=Object.assign({},d(),o.components);return e?n(e,Object.assign({},o,{children:n(h,o)})):h(o)}export{Z as default};
//# sourceMappingURL=Checkbox-5e8dd2d6.js.map
