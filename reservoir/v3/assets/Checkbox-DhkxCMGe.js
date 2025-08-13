import{u as l,j as e,M as r,L as t,bv as d,C as o,bw as a}from"./iframe-CFLVJZOZ.js";import{C as x}from"./ComponentChangelogTable-DvY0SxTs.js";import{C as i,W as c,a as j,I as p,A as m,L as b}from"./Checkbox.stories-G-oy5T5x.js";import"./storybookUtils-BmTl87w5.js";const f=[{date:"2025-04-10",version:"3.6.0",type:"Update",affects:["Styles"],notes:["Syncs the focus color styles with the VDL."]},{date:"2025-02-13",version:"3.5.4",type:"Update",affects:["Styles"],notes:["Updates the check icon to use DS icon.","Sets the correct background color for all states."]},{date:"2024-05-23",version:"3.1.4",type:"Update",affects:["Styles"],notes:["Sets position relative so that is it visible when focused in a scrollable container."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles","Functionality"],notes:["Removes the warning message that is logged when a non-Checkbox component is passed a child.","Chakra 2.8 update."]}];function h(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.1.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.0"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#checked",target:"_self",children:"Checked"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#indeterminate",target:"_self",children:"Indeterminate"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#additional-states",target:"_self",children:"Additional States"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#label-using-jsx-elements",target:"_self",children:"Label Using JSX Elements"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(d,{of:i}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Checkbox"})," component renders a checkbox input element. The ",e.jsx(n.code,{children:"Checkbox"})," component should be used to allow users to select one or more options from a list of choices."]}),`
`,e.jsxs(n.p,{children:["Please note that the examples on this page show the ",e.jsx(n.code,{children:"Checkbox"})," component in isolation. It is recommended to use the ",e.jsx(n.code,{children:"Checkbox"}),` component inside the
DS `,e.jsx(n.code,{children:"CheckboxGroup"})," component. The ",e.jsx(n.code,{children:"CheckboxGroup"})," component will handle all the states and data management."]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Checkbox"})," component renders ",e.jsx(n.code,{children:"<label>"})," and ",e.jsx(n.code,{children:'<input type="checkbox" />'}),`
elements that are associated with each other; the label has a `,e.jsx(n.code,{children:"for"}),` attribute
with the value of the `,e.jsx(n.code,{children:"input"}),"'s ",e.jsx(n.code,{children:"id"}),` element. If there is helper or invalid text,
the `,e.jsx(n.code,{children:"<input>"})," element will have a ",e.jsx(n.code,{children:"aria-describedby"}),` attribute with the value of
the helper or invalid text.`]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"showLabel"})," is set to false, the ",e.jsx(n.code,{children:"labelText"}),` value will be set to the
`,e.jsx(n.code,{children:"<input>"}),"'s ",e.jsx(n.code,{children:"aria-label"})," attribute."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-1/checkbox-1.html",rel:"nofollow",children:"W3C WAI ARIA Checkbox Example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.a11ymatters.com/pattern/checkbox/",rel:"nofollow",children:"a11ymatters Accessible Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role",rel:"nofollow",children:"MDN ARIA: checkbox role"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/form/checkbox",rel:"nofollow",children:"Chakra UI Checkbox"})}),`
`]}),`
`,e.jsx(n.h2,{id:"checked",children:"Checked"}),`
`,e.jsxs(n.p,{children:["Note that the ",e.jsx(n.code,{children:"isChecked"})," property in this example is set to ",e.jsx(n.code,{children:"true"}),` and clicking
on it won't remove the checkmark; the `,e.jsx(n.code,{children:"isChecked"}),` prop must now be controlled
and removed manually by the parent component that controls this state.`]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h2,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsxs(n.p,{children:["Note: This state only changes the icon through the ",e.jsx(n.code,{children:"isIndeterminate"}),` prop. This
does not affect whether the checkbox is checked. The `,e.jsx(n.code,{children:"isIndeterminate"}),` prop must
now be controlled and removed by the parent component in order to remove this state.`]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"additional-states",children:"Additional States"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"label-using-jsx-elements",children:"Label Using JSX Elements"}),`
`,e.jsxs(n.p,{children:[`This is useful when you want to add dynamic content to the label or add
a layout to the label. View the `,e.jsx(n.code,{children:"CheckboxGroup"}),` documentation for this
usage.`]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:f})]})}function w(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(h,{...s})}):h(s)}export{w as default};
