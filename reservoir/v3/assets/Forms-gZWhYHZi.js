import{u as o,j as e,M as s,L as l}from"./iframe-D93LbwGv.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Style Guide/Forms"}),`
`,e.jsx(n.h1,{id:"forms",children:"Forms"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#form-input-components",target:"_self",children:"Form Input Components"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#input-labelling",target:"_self",children:"Input Labelling"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#input-states",target:"_self",children:"Input States"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#figma-reference",target:"_self",children:"Figma Reference"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.a,{href:"../?path=/story/components-form-elements-form--with-controls",children:"Form"}),`
component to control the placement and spacing for standard HTML forms.`]}),`
`,e.jsx(n.h2,{id:"form-layout",children:"Form Layout"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Form"}),` component offers two child-components to assist with layout:
`,e.jsx(n.code,{children:"FormRow"})," and ",e.jsx(n.code,{children:"FormField"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FormField"}),` component is used as a parent for all input components from
the Reservoir Design System (DS) (`,e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"TextInput"}),`, etc.). When using the
`,e.jsx(n.code,{children:"Form"}),` is it is necessary to wrap each individual form input component within
a `,e.jsx(n.code,{children:"FormField"})," component to ensure proper spacing and responsiveness."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FormRow"})," component is used as a parent of multiple ",e.jsx(n.code,{children:"FormField"}),` components
when you need to render more than one input component in a horizontal row.`]}),`
`,e.jsx(n.p,{children:`The recommended layout and spacing within individual form input components is
built into the components. Consuming apps should rely on the components to
handle NYPL best practices for layout and responsiveness.`}),`
`,e.jsx(n.h2,{id:"form-input-components",children:"Form Input Components"}),`
`,e.jsx(n.p,{children:`The list of form input fields available in the Reservoir Design System (DS)
includes, but is not limited to, the following:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Button"}),`
`,e.jsx(n.li,{children:"Checkbox"}),`
`,e.jsx(n.li,{children:"CheckboxGroup"}),`
`,e.jsx(n.li,{children:"DatePicker"}),`
`,e.jsx(n.li,{children:"Fieldset"}),`
`,e.jsx(n.li,{children:"FileUploader ***"}),`
`,e.jsx(n.li,{children:"Form"}),`
`,e.jsx(n.li,{children:"Label"}),`
`,e.jsx(n.li,{children:"MultiSelect"}),`
`,e.jsx(n.li,{children:"Radio"}),`
`,e.jsx(n.li,{children:"RadioGroup"}),`
`,e.jsx(n.li,{children:"SearchBar"}),`
`,e.jsx(n.li,{children:"Select"}),`
`,e.jsx(n.li,{children:"Slider"}),`
`,e.jsx(n.li,{children:"TextInput (text, tel, url, number, password, textarea)"}),`
`,e.jsx(n.li,{children:"Toggle"}),`
`]}),`
`,e.jsx(n.p,{children:"*** currently under development"}),`
`,e.jsx(n.h2,{id:"input-labelling",children:"Input Labelling"}),`
`,e.jsx(n.p,{children:`Most form components in the DS will have the option to show a
label, basic helper text and error text.`}),`
`,e.jsx(n.p,{children:`For accessibility compliance, a text value for the label is always required. If
necessary, the label can be hidden from the screen. In cases where the label is
hidden, appropriate ARIA tags will be added to the form input component.`}),`
`,e.jsxs(n.p,{children:["When the label is visible, ",e.jsx(n.code,{children:"CheckboxGroup"}),", ",e.jsx(n.code,{children:"DatePicker"}),", ",e.jsx(n.code,{children:"FileUploader"}),`,
`,e.jsx(n.code,{children:"RadioGroup"}),", ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Slider"})," and ",e.jsx(n.code,{children:"TextInput"}),` will show the label at the top
of the rendered component. While `,e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"Radio"})," and ",e.jsx(n.code,{children:"Toggle"}),` will show the
label to the right of the input field.`]}),`
`,e.jsx(n.p,{children:"The helper and error text will always be rendered below the input field."}),`
`,e.jsx(n.h2,{id:"input-states",children:"Input States"}),`
`,e.jsx(n.p,{children:"All form input fields offer styling for the following states:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"static"}),`
`,e.jsx(n.li,{children:"focused"}),`
`,e.jsx(n.li,{children:"errored"}),`
`,e.jsx(n.li,{children:"disabled"}),`
`]}),`
`,e.jsx(n.h2,{id:"figma-reference",children:"Figma Reference"}),`
`,e.jsx(n.p,{children:"For additional spacing information, please refer to the Figma Main file."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/?node-id=10734%3A2768",rel:"nofollow",children:"General Forms Page"})}),`
`]})]})}function d(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default};
