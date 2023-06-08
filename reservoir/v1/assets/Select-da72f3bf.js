import{j as n,a as t,F as s}from"./jsx-runtime-09ad29cb.js";import{M as p,D as u,C as i,A as m,b as r}from"./index-5d3bb37f.js";import{S as c,W as a,L as b,E as f,D as g,G as v,a as w}from"./Select.stories-2b1cd025.js";import{L as o}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./Form-7babaf24.js";import"./SimpleGrid-e54e0b68.js";import"./Select-43c64995.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./Label-2b2058d3.js";import"./utils-acca7d12.js";import"./chakra-ui-form-control.esm-c23b95fa.js";function d(l){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em",h3:"h3"},h(),l.components);return t(s,{children:[n(p,{of:c}),`
`,n(e.h1,{id:"select",children:"Select"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.7.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.4"})})]})]})]}),`
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
`,n(o,{href:"#option-elements",target:"_self",children:"Option Elements"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#labelling-variations",target:"_self",children:"Labelling Variations"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#disabled",target:"_self",children:"Disabled"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#getting-select-input-value",target:"_self",children:"Getting Select Input Value"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(u,{of:c}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Select"})," component renders a ",n(e.code,{children:"select"})," element along with its ",n(e.code,{children:"option"}),`
children. For optimal accessibility, the `,n(e.code,{children:"labelText"}),` property is a required
prop, regardless of the label visibility. Additionally, while the `,n(e.code,{children:"id"}),` prop is
optional, a unique `,n(e.code,{children:"id"}),` attribute is necessary for accessibility. If the prop
is left blank, a value will be generated for you.`]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:a}),`
`,n(m,{of:a}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Select"})," component renders an HTML ",n(e.code,{children:"<select>"}),` element which is accessible.
It's the developer's responsibility to ensure that the appropriate `,n(e.code,{children:"<option>"}),`
elements are provided as children. Internally, a `,n(e.code,{children:"Label"}),` is associated with the
`,n(e.code,{children:"<select>"})," element."]}),`
`,t(e.p,{children:["When ",n(e.code,{children:"showLabel"})," is set to false, the ",n(e.code,{children:"labelText"}),` value will be set to the
`,n(e.code,{children:"<select>"}),"'s ",n(e.code,{children:"aria-label"})," attribute."]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN select: The HTML Select element"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/select",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Select"})}),`
`]}),`
`,n(e.h2,{id:"option-elements",children:"Option Elements"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Select"}),` component renders all the necessary wrapping and associated text
elements, but the select options `,n(e.em,{children:"need"})," to be child ",n(e.code,{children:"<option>"})," HTML elements."]}),`
`,n(r,{code:`
<Select id="select" labelText="What is your favorite color?" name="color">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="black">Black</option>
  <option value="white">White</option>
</Select>
`,language:"jsx"}),`
`,t(e.p,{children:["There are two NYPL best practices to consider when using the ",n(e.code,{children:"Select"}),` component
and `,n(e.code,{children:"option"})," HTML elements:"]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:`Use no more than 10 options. If more than 10 options are needed, an
auto-complete text input is a good alternative.`}),`
`,n(e.li,{children:`Use at least four options. If fewer than three options are needed, a radio
button group is a good alternative.`}),`
`]}),`
`,n(e.h2,{id:"labelling-variations",children:"Labelling Variations"}),`
`,t(e.p,{children:[`A Select can be rendered with or without a visible label. If the label is visible,
it can be displayed above (the default) or inline with the select input using the
`,n(e.code,{children:"labelPosition"}),` prop. Note that the label will only display inline when the device
width exceeds the `,n(e.code,{children:"--nypl-breakpoint-medium"})," breakpoint, or 600px. When ",n(e.code,{children:"showLabel"}),`
is set to `,n(e.code,{children:"false"}),", an ",n(e.code,{children:"aria-label"}),` attribute is added to the select input to maintain
accessibility. If the component needs to be required, the `,n(e.code,{children:"showRequiredLabel"}),` prop
can be used to show or hide the "Required" text within the `,n(e.code,{children:"label"})," element."]}),`
`,n(i,{of:b}),`
`,n(e.h2,{id:"errored",children:"Errored"}),`
`,n(i,{of:f}),`
`,n(e.h2,{id:"disabled",children:"Disabled"}),`
`,n(i,{of:g}),`
`,n(e.h2,{id:"getting-select-input-value",children:"Getting Select Input Value"}),`
`,n(e.h3,{id:"controlled-component-using-value-and-onchange-props",children:"Controlled Component using value and onChange props"}),`
`,t(e.p,{children:[`If your application uses controlled React components and the Reservoir Design
System (DS) `,n(e.code,{children:"Select"}),` component must be controlled, you can pass and extract the
value through the `,n(e.code,{children:"value"})," and ",n(e.code,{children:"onChange"}),` props. This will be called every time
a new `,n(e.code,{children:"option"})," value is selected."]}),`
`,n(e.p,{children:`Try it out: open up the browser's console to see new values being logged on
each change.`}),`
`,n(r,{code:`
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
`,n(i,{of:v}),`
`,n(e.h3,{id:"uncontrolled-component-using-refs",children:"Uncontrolled Component using refs"}),`
`,t(e.p,{children:["If your application uses uncontrolled components, you can pass a React ",n(e.code,{children:"ref"}),`
prop to the DS Select component to get the selected value from the DOM. Note
that this example uses a `,n(e.code,{children:"Form"})," and a ",n(e.code,{children:"Button"}),` to submit the form, only then
will the value be available.`]}),`
`,n(e.p,{children:`Try it out: open up the browser's console to see new values being logged on
each change.`}),`
`,n(r,{code:`
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
`,n(i,{of:w})]})}function te(l={}){const{wrapper:e}=Object.assign({},h(),l.components);return e?n(e,Object.assign({},l,{children:n(d,l)})):d(l)}export{te as default};
//# sourceMappingURL=Select-da72f3bf.js.map
