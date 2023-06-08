import{j as n,a as t,F as d}from"./jsx-runtime-09ad29cb.js";import{M as a,D as p,C as i,A as m,b as g}from"./index-42243e0e.js";import{T as l,W as c,S as f,C as u,B as b,L as w}from"./Toggle.stories-b5a2115a.js";import{L as o}from"./Link-0ed02cf7.js";import{u as s}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./SimpleGrid-e54e0b68.js";import"./Toggle-9580209e.js";import"./ComponentWrapper-82a15cf7.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./index-fb519959.js";import"./Icon-6616a4b9.js";function h(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a"},s(),r.components);return t(d,{children:[n(a,{of:l}),`
`,n(e.h1,{id:"toggle",children:"Toggle"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.25.8"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.3"})})]})]})]}),`
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
`,n(o,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#controlled-toggle",target:"_self",children:"Controlled Toggle"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#browser-states",target:"_self",children:"Browser States"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#layouts",target:"_self",children:"Layouts"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:l}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Toggle"}),` component is used as an alternative for the Checkbox component and
returns a boolean response. Like the Checkbox component, the `,n(e.code,{children:"Toggle"}),` component
can display a label to the right of the toggle and helper/error text below the
toggle.`]}),`
`,n(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,t(e.p,{children:[n(e.code,{children:"Toggle"}),` components are commonly used for “on/off” switches to perform binary
actions that occur immediately after a user “flips the switch.”`]}),`
`,n(e.p,{children:`The Toggle component label should clarify the action being performed. Labels
should be short and to the point, often three words or less.`}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:c}),`
`,n(m,{of:c}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Toggle"})," component is implemented using Chakra's ",n(e.code,{children:"Switch"}),` component. While
some accessibility resources state that using a `,n(e.code,{children:"<button>"}),` element is better for
a toggle or switch component, Chakra UI internally uses a `,n(e.code,{children:"checkbox"}),` element.
Because Chakra's `,n(e.code,{children:"Switch"}),` component handles the internal state so well and its
styles, we chose this over implementing this component with a `,n(e.code,{children:"<button>"})," element."]}),`
`,t(e.p,{children:[`For comparison and reference, resources that build toggle components with the
`,n(e.code,{children:"<button>"})," element are linked below."]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/switch",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Switch"})}),`
`,n(e.li,{children:n(e.a,{href:"https://w3c.github.io/aria-practices/examples/switch/switch-button.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Switch Example Using HTML Button"})}),`
`,n(e.li,{children:n(e.a,{href:"https://inclusive-components.design/toggle-button/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Inclusive Components Toggle Buttons"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.erikkroes.nl/blog/accessible-html-toggle-button-switch/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Accessible HTML Toggle Button (Switch)"})}),`
`]}),`
`,n(e.h2,{id:"sizes",children:"Sizes"}),`
`,n(i,{of:f}),`
`,n(e.h2,{id:"controlled-toggle",children:"Controlled Toggle"}),`
`,t(e.p,{children:["Note that the ",n(e.code,{children:"isChecked"})," property in this example is set to ",n(e.code,{children:"true"}),`. Clicking
on it won't change the toggle; The `,n(e.code,{children:"isChecked"}),` prop must now be controlled
and removed manually by the parent component that controls this state. The
`,n(e.code,{children:"onChange"})," function will be called every time the ",n(e.code,{children:"isChecked"})," prop changes."]}),`
`,n(g,{code:`
const isChecked = true;
const onChange = (e) => {
  // This will return the value through the event object.
  console.log(e.target.value);
};

<Toggle
  id="toggle"
  isChecked={true}
  labelText="Controlled Toggle"
  onChange={onChange}
/>
`,language:"jsx"}),`
`,n(i,{of:u}),`
`,n(e.h2,{id:"browser-states",children:"Browser States"}),`
`,n(i,{of:b}),`
`,n(e.h2,{id:"layouts",children:"Layouts"}),`
`,n(i,{of:w})]})}function ee(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?n(e,Object.assign({},r,{children:n(h,r)})):h(r)}export{ee as default};
//# sourceMappingURL=Toggle-66571ff6.js.map
