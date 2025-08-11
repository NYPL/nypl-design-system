import{u as c,j as e,M as d,L as t,bv as h,C as o,bw as p,S as s}from"./iframe-D93LbwGv.js";import{C as u}from"./ComponentChangelogTable-Ck_3mwrR.js";import{S as i,W as r,L as x,E as j,D as f,A as m,G as b,a as g}from"./Select.stories-BUvq4aqy.js";import"./storybookUtils-BmTl87w5.js";const v=[{date:"2025-04-10",version:"3.6.0",type:"Update",affects:["Functionality","Accessibility"],notes:["Adds the `autoComplete` prop to the select element.","Adds `requiredLabelText` prop to allow customization of the '(required)' text.","Fixes the vertical alignment of the label for the `inline` variant."]},{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase"]},{date:"2024-08-29",version:"3.3.0",type:"Update",affects:["Functionality"],notes:["Updates component to accept a `defaultValue` prop to set initial value of uncontrolled components."]},{date:"2024-06-20",version:"3.1.6",type:"Update",affects:["Styles"],notes:["Adds interaction tests for the Controls story."]},{date:"2024-04-11",version:"3.1.0",type:"Update",affects:["Styles"],notes:["Reduced the spacing between the field label and the field itself."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function a(l){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.7.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.0"})})]})]})]}),`
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
`,e.jsx(t,{href:"#option-elements",target:"_self",children:"Option Elements"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#labelling-variations",target:"_self",children:"Labelling Variations"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#disabled",target:"_self",children:"Disabled"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#autocomplete",target:"_self",children:"Autocomplete"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#getting-select-input-value",target:"_self",children:"Getting Select Input Value"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:i}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component renders a ",e.jsx(n.code,{children:"select"})," element along with its ",e.jsx(n.code,{children:"option"}),`
children. For optimal accessibility, the `,e.jsx(n.code,{children:"labelText"}),` property is a required
prop, regardless of the label visibility. Additionally, while the `,e.jsx(n.code,{children:"id"}),` prop is
optional, a unique `,e.jsx(n.code,{children:"id"}),` attribute is necessary for accessibility. If the prop
is left blank, a value will be generated for you.`]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component renders an HTML ",e.jsx(n.code,{children:"<select>"}),` element which is accessible.
It's the developer's responsibility to ensure that the appropriate `,e.jsx(n.code,{children:"<option>"}),`
elements are provided as children. Internally, a `,e.jsx(n.code,{children:"Label"}),` is associated with the
`,e.jsx(n.code,{children:"<select>"})," element."]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"showLabel"})," is set to false, the ",e.jsx(n.code,{children:"labelText"}),` value will be set to the
`,e.jsx(n.code,{children:"<select>"}),"'s ",e.jsx(n.code,{children:"aria-label"})," attribute."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",rel:"nofollow",children:"MDN select: The HTML Select element"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/form/select",rel:"nofollow",children:"Chakra UI Select"})}),`
`]}),`
`,e.jsx(n.h2,{id:"option-elements",children:"Option Elements"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"}),` component renders all the necessary wrapping and associated text
elements, but the select options `,e.jsx(n.em,{children:"need"})," to be child ",e.jsx(n.code,{children:"<option>"})," HTML elements."]}),`
`,e.jsx(s,{code:`
<Select id="select" labelText="What is your favorite color?" name="color">
<option value="red">Red</option>
<option value="green">Green</option>
<option value="blue">Blue</option>
<option value="black">Black</option>
<option value="white">White</option>
</Select>
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["There are two NYPL best practices to consider when using the ",e.jsx(n.code,{children:"Select"}),` component
and `,e.jsx(n.code,{children:"option"})," HTML elements:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Use no more than 10 options. If more than 10 options are needed, an
auto-complete text input is a good alternative.`}),`
`,e.jsx(n.li,{children:`Use at least four options. If fewer than three options are needed, a radio
button group is a good alternative.`}),`
`]}),`
`,e.jsx(n.h2,{id:"labelling-variations",children:"Labelling Variations"}),`
`,e.jsxs(n.p,{children:[`A Select can be rendered with or without a visible label. If the label is visible,
it can be displayed above (the default) or inline with the select input using the
`,e.jsx(n.code,{children:"labelPosition"}),` prop. Note that the label will only display inline when the device
width exceeds the `,e.jsx(n.code,{children:"--nypl-breakpoint-medium"})," breakpoint, or 600px. When ",e.jsx(n.code,{children:"showLabel"}),`
is set to `,e.jsx(n.code,{children:"false"}),", an ",e.jsx(n.code,{children:"aria-label"}),` attribute is added to the select input to maintain
accessibility. If the component needs to be required, the `,e.jsx(n.code,{children:"showRequiredLabel"}),` prop
can be used to show or hide the "required" text within the `,e.jsx(n.code,{children:"label"})," element."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"errored",children:"Errored"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"autocomplete",children:"AutoComplete"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component can accept all HTML ",e.jsx(n.code,{children:"autocomplete"})," values."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"getting-select-input-value",children:"Getting Select Input Value"}),`
`,e.jsx(n.h3,{id:"controlled-component-using-value-and-onchange-props",children:"Controlled Component using value and onChange props"}),`
`,e.jsxs(n.p,{children:[`If your application uses controlled React components and the Reservoir Design
System (DS) `,e.jsx(n.code,{children:"Select"}),` component must be controlled, you can pass and extract the
value through the `,e.jsx(n.code,{children:"value"})," and ",e.jsx(n.code,{children:"onChange"}),` props. This will be called every time
a new `,e.jsx(n.code,{children:"option"})," value is selected."]}),`
`,e.jsx(n.p,{children:`Try it out: open up the browser's console to see new values being logged on
each change.`}),`
`,e.jsx(s,{code:`
export function SelectControlledExample() {
const [value, setValue] = React.useState();
const onChange = (e) => {
  // This will return the value selected through the event object.
  console.log(e.target.value);
  setValue(e.target.value);
};
return (
  <Select
    helperText="This is the helper text."
    id="example-1"
    labelText="What is your favorite color?"
    name="color"
    onChange={onChange}
    value={value}
  >
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    <option value="black">Black</option>
    <option value="white">White</option>
  </Select>
);
}
`,language:"jsx"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h3,{id:"uncontrolled-component-using-refs",children:"Uncontrolled Component using refs"}),`
`,e.jsxs(n.p,{children:["If your application uses uncontrolled components, you can pass a React ",e.jsx(n.code,{children:"ref"}),`
prop to the DS Select component to get the selected value from the DOM. Note
that this example uses a `,e.jsx(n.code,{children:"Form"})," and a ",e.jsx(n.code,{children:"Button"}),` to submit the form, only then
will the value be available. Additionally, you may pass a `,e.jsx(n.code,{children:"defaultValue"}),` prop
to set the component's initial value.`]}),`
`,e.jsx(n.p,{children:`Try it out: open up the browser's console to see new values being logged on
each change.`}),`
`,e.jsx(s,{code:`
export function SelectUncontrolledExample() {
const selectRef = React.createRef();
const onSubmit = () => {
  const selectValue = selectRef.current.value;
  console.log("Using uncontrolled ref:", selectValue);
};
return (
  <Form id="form">
    <FormField>
      <Select
        defaultValue="white"
        helperText="This is the helper text."
        id="example-2"
        labelText="What is your favorite color?"
        name="color"
        ref={selectRef}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Button id="submit" onClick={onSubmit}>
        Submit
      </Button>
    </FormField>
  </Form>
);
}
`,language:"jsx"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(u,{changelogData:v})]})}function T(l={}){const{wrapper:n}={...c(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(a,{...l})}):a(l)}export{T as default};
