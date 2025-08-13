import{u as d,j as e,M as a,L as s,bv as h,C as r,bw as c}from"./iframe-CFLVJZOZ.js";import{C as x}from"./ComponentChangelogTable-DvY0SxTs.js";import{L as i,W as l,R as p,C as u}from"./Label.stories-BZymRHVI.js";const j=[{date:"2025-03-20",version:"3.5.5",type:"Update",affects:["Styles"],notes:['Changes the font weight for the `(required)` label to `"light"`.']},{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase."]},{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `LabelProps` interface."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(t.h1,{id:"label",children:"Label"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Component Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"0.0.10"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.5.5"})})]})]})]}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#isrequired-helper-text",target:"_self",children:"isRequired helper text"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#requiredlabeltext-to-customize-required-label",target:"_self",children:"requiredLabelText to customize required label"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(t.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Label"})," component is an accessible HTML ",e.jsx(t.code,{children:"<label>"}),` element. The JSX prop
`,e.jsx(t.code,{children:"htmlFor"})," should be set to the ",e.jsx(t.code,{children:"id"}),` of the input element that the label is
associated with. This is the proper way to label inputs so that screenreaders
can read the label, without the use of the `,e.jsx(t.code,{children:"aria-label"}),` attribute on the input
element.`]}),`
`,e.jsxs(t.p,{children:["Note: All form-related Reservoir components already implement this ",e.jsx(t.code,{children:"Label"}),`
component so there is no need to use this component unless if you are building
a new form-related input component.`]}),`
`,e.jsx(t.p,{children:"Resources:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://webaim.org/techniques/forms/advanced",rel:"nofollow",children:"WebAIM Creating Accessible Forms"})}),`
`]}),`
`,e.jsx(t.h2,{id:"isrequired-helper-text",children:"isRequired helper text"}),`
`,e.jsxs(t.p,{children:["An optional helper string can be rendered at the end of the ",e.jsx(t.code,{children:"Label"}),` text through
the `,e.jsx(t.code,{children:"isRequired"}),` prop. This is useful for visually labeling a field as required
with the `,e.jsx(t.code,{children:'"(required)"'})," text next to the label's text. This is set to ",e.jsx(t.code,{children:"false"}),`
by default.`]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.h2,{id:"requiredlabeltext-to-customize-required-label",children:"requiredLabelText to customize required label"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"requiredLabelText"}),` prop accepts values for type string and is available to update the "(required)" text.
It is recommend to be used carefully and to only pass text that means "required", including in other languages.
We also recommend a maximum of two words for this text.
Note: The parenthesis will be added automatically by the component.`]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(t.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:j})]})}function g(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{g as default};
