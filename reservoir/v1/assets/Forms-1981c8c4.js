import{j as n,a as i,F as d}from"./jsx-runtime-09ad29cb.js";import{M as c}from"./index-42243e0e.js";import{L as o}from"./Link-0ed02cf7.js";import{u as t}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./Icon-6616a4b9.js";function l(r){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",code:"code"},t(),r.components);return i(d,{children:[n(c,{title:"Style Guide/Forms"}),`
`,n(e.h1,{id:"forms",children:"Forms"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(o,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#form-input-components",target:"_self",children:"Form Input Components"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#input-labelling",target:"_self",children:"Input Labelling"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#input-states",target:"_self",children:"Input States"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#figma-reference",target:"_self",children:"Figma Reference"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"general-information",children:"General Information"}),`
`,i(e.p,{children:["Use the ",n(e.a,{href:"../?path=/story/components-form-elements-form--with-controls",children:"Form"}),`
component to control the placement and spacing for standard HTML forms.`]}),`
`,n(e.h2,{id:"form-layout",children:"Form Layout"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Form"}),` component offers two child-components to assist with layout:
`,n(e.code,{children:"FormRow"})," and ",n(e.code,{children:"FormField"}),"."]}),`
`,i(e.p,{children:["The ",n(e.code,{children:"FormField"}),` component is used as a parent for all input components from
the Reservoir Design System (DS) (`,n(e.code,{children:"Button"}),", ",n(e.code,{children:"Select"}),", ",n(e.code,{children:"TextInput"}),`, etc.). When using the
`,n(e.code,{children:"Form"}),` is it is necessary to wrap each individual form input component within
a `,n(e.code,{children:"FormField"})," component to ensure proper spacing and responsiveness."]}),`
`,i(e.p,{children:["The ",n(e.code,{children:"FormRow"})," component is used as a parent of multiple ",n(e.code,{children:"FormField"}),` components
when you need to render more than one input component in a horizontal row.`]}),`
`,n(e.p,{children:`The recommended layout and spacing within individual form input components is
built into the components. Consuming apps should rely on the components to
handle NYPL best practices for layout and responsiveness.`}),`
`,n(e.h2,{id:"form-input-components",children:"Form Input Components"}),`
`,n(e.p,{children:`The list of form input fields available in the Reservoir Design System (DS)
includes, but is not limited to, the following:`}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Button"}),`
`,n(e.li,{children:"Checkbox"}),`
`,n(e.li,{children:"CheckboxGroup"}),`
`,n(e.li,{children:"DatePicker"}),`
`,n(e.li,{children:"Fieldset"}),`
`,n(e.li,{children:"FileUploader ***"}),`
`,n(e.li,{children:"Form"}),`
`,n(e.li,{children:"Label"}),`
`,n(e.li,{children:"MultiSelect"}),`
`,n(e.li,{children:"Radio"}),`
`,n(e.li,{children:"RadioGroup"}),`
`,n(e.li,{children:"SearchBar"}),`
`,n(e.li,{children:"Select"}),`
`,n(e.li,{children:"Slider"}),`
`,n(e.li,{children:"TextInput (text, tel, url, number, password, textarea)"}),`
`,n(e.li,{children:"Toggle"}),`
`]}),`
`,n(e.p,{children:"*** currently under development"}),`
`,n(e.h2,{id:"input-labelling",children:"Input Labelling"}),`
`,n(e.p,{children:`Most form components in the DS will have the option to show a
label, basic helper text and error text.`}),`
`,n(e.p,{children:`For accessibility compliance, a text value for the label is always required. If
necessary, the label can be hidden from the screen. In cases where the label is
hidden, appropriate ARIA tags will be added to the form input component.`}),`
`,i(e.p,{children:["When the label is visible, ",n(e.code,{children:"CheckboxGroup"}),", ",n(e.code,{children:"DatePicker"}),", ",n(e.code,{children:"FileUploader"}),`,
`,n(e.code,{children:"RadioGroup"}),", ",n(e.code,{children:"Select"}),", ",n(e.code,{children:"Slider"})," and ",n(e.code,{children:"TextInput"}),` will show the label at the top
of the rendered component. While `,n(e.code,{children:"Checkbox"}),", ",n(e.code,{children:"Radio"})," and ",n(e.code,{children:"Toggle"}),` will show the
label to the right of the input field.`]}),`
`,n(e.p,{children:"The helper and error text will always be rendered below the input field."}),`
`,n(e.h2,{id:"input-states",children:"Input States"}),`
`,n(e.p,{children:"All form input fields offer styling for the following states:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"static"}),`
`,n(e.li,{children:"focused"}),`
`,n(e.li,{children:"errored"}),`
`,n(e.li,{children:"disabled"}),`
`]}),`
`,n(e.h2,{id:"figma-reference",children:"Figma Reference"}),`
`,n(e.p,{children:"For additional spacing information, please refer to the Figma Main file."}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/?node-id=10734%3A2768",target:"_blank",rel:"nofollow noopener noreferrer",children:"General Forms Page"})}),`
`]})]})}function k(r={}){const{wrapper:e}=Object.assign({},t(),r.components);return e?n(e,Object.assign({},r,{children:n(l,r)})):l(r)}export{k as default};
//# sourceMappingURL=Forms-1981c8c4.js.map
