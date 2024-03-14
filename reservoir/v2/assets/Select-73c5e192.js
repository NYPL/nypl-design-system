import{j as n,a as t,F as s}from"./jsx-runtime-fdf4db99.js";import{M as p,D as u,C as l,A as m,b as r}from"./index-445595fc.js";import{S as c,W as a,L as b,E as f,D as g,G as v,a as w}from"./Select.stories-d51b3310.js";import{L as o}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./Form-b79b3734.js";import"./SimpleGrid-bd04b221.js";import"./Select-2c2d1d20.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./HelperErrorText-55c57f50.js";import"./Label-d380cca8.js";import"./chakra-ui-form-control.esm-5c4917b4.js";function d(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em",h3:"h3"},h(),i.components);return t(s,{children:[n(p,{of:c}),`
`,n(e.h1,{id:"select",children:"Select"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.7.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.0.0"})})]})]})]}),`
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
`,n(l,{of:a}),`
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
`,n(l,{of:b}),`
`,n(e.h2,{id:"errored",children:"Errored"}),`
`,n(l,{of:f}),`
`,n(e.h2,{id:"disabled",children:"Disabled"}),`
`,n(l,{of:g}),`
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
`,n(l,{of:v}),`
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
`,n(l,{of:w})]})}function oe(i={}){const{wrapper:e}=Object.assign({},h(),i.components);return e?n(e,Object.assign({},i,{children:n(d,i)})):d(i)}export{oe as default};
//# sourceMappingURL=Select-73c5e192.js.map
