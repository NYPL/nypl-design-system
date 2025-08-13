import{u as c,j as e,M as h,L as s,bv as d,C as o,bw as a,S as x}from"./iframe-CFLVJZOZ.js";import{C as g}from"./ComponentChangelogTable-DvY0SxTs.js";import{T as l,W as r,S as j,C as p,B as m,L as u}from"./Toggle.stories-C12abSSe.js";const f=[{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(n.h1,{id:"toggle",children:"Toggle"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.25.8"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.0.0"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#controlled-toggle",target:"_self",children:"Controlled Toggle"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#browser-states",target:"_self",children:"Browser States"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#layouts",target:"_self",children:"Layouts"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(d,{of:l}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Toggle"}),` component is used as an alternative for the Checkbox component and
returns a boolean response. Like the Checkbox component, the `,e.jsx(n.code,{children:"Toggle"}),` component
can display a label to the right of the toggle and helper/error text below the
toggle.`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Toggle"}),` components are commonly used for “on/off” switches to perform binary
actions that occur immediately after a user “flips the switch.”`]}),`
`,e.jsx(n.p,{children:`The Toggle component label should clarify the action being performed. Labels
should be short and to the point, often three words or less.`}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Toggle"})," component is implemented using Chakra's ",e.jsx(n.code,{children:"Switch"}),` component. While
some accessibility resources state that using a `,e.jsx(n.code,{children:"<button>"}),` element is better for
a toggle or switch component, Chakra UI internally uses a `,e.jsx(n.code,{children:"checkbox"}),` element.
Because Chakra's `,e.jsx(n.code,{children:"Switch"}),` component handles the internal state so well and its
styles, we chose this over implementing this component with a `,e.jsx(n.code,{children:"<button>"})," element."]}),`
`,e.jsxs(n.p,{children:[`For comparison and reference, resources that build toggle components with the
`,e.jsx(n.code,{children:"<button>"})," element are linked below."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/form/switch",rel:"nofollow",children:"Chakra UI Switch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://w3c.github.io/aria-practices/examples/switch/switch-button.html",rel:"nofollow",children:"W3C Switch Example Using HTML Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://inclusive-components.design/toggle-button/",rel:"nofollow",children:"Inclusive Components Toggle Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.erikkroes.nl/blog/accessible-html-toggle-button-switch/",rel:"nofollow",children:"Accessible HTML Toggle Button (Switch)"})}),`
`]}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h2,{id:"controlled-toggle",children:"Controlled Toggle"}),`
`,e.jsxs(n.p,{children:["Note that the ",e.jsx(n.code,{children:"isChecked"})," property in this example is set to ",e.jsx(n.code,{children:"true"}),`. Clicking
on it won't change the toggle; The `,e.jsx(n.code,{children:"isChecked"}),` prop must now be controlled
and removed manually by the parent component that controls this state. The
`,e.jsx(n.code,{children:"onChange"})," function will be called every time the ",e.jsx(n.code,{children:"isChecked"})," prop changes."]}),`
`,e.jsx(x,{code:`
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
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"browser-states",children:"Browser States"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"layouts",children:"Layouts"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(g,{changelogData:f})]})}function y(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
