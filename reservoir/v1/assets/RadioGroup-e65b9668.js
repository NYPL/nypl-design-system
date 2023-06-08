import{j as o,a as n,F as h}from"./jsx-runtime-09ad29cb.js";import{M as p,D as m,C as i,A as u,b as l}from"./index-5d3bb37f.js";import{R as a,C as d,L as f,B as g,J as b,a as R,U as x}from"./RadioGroup.stories-1a6ed6ef.js";import{L as t}from"./Link-0ed02cf7.js";import{u as s}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./Form-7babaf24.js";import"./SimpleGrid-e54e0b68.js";import"./Radio-c107ee3b.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./RadioGroup-8ceb9bfa.js";import"./Fieldset-8799f492.js";import"./spacing-06362f80.js";function c(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em",h3:"h3",strong:"strong"},s(),r.components);return n(h,{children:[o(p,{of:a}),`
`,o(e.h1,{id:"radiogroup",children:"RadioGroup"}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Component Version"}),o(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"Added"}),o(e.td,{children:o(e.code,{children:"0.25.0"})})]}),n(e.tr,{children:[o(e.td,{children:"Latest"}),o(e.td,{children:o(e.code,{children:"1.5.0"})})]})]})]}),`
`,o(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,o(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,o(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,o(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,o(t,{href:"#layout-patterns",target:"_self",children:"Layout Patterns"}),`
`]}),`
`,n(e.li,{children:[`
`,o(t,{href:"#browser-states",target:"_self",children:"Browser States"}),`
`]}),`
`,n(e.li,{children:[`
`,o(t,{href:"#labels-using-jsx-elements",target:"_self",children:"Labels Using JSX Elements"}),`
`]}),`
`,n(e.li,{children:[`
`,o(t,{href:"#getting-radio-input-values",target:"_self",children:"Getting Radio Input Values"}),`
`]}),`
`]}),`
`,o(e.h2,{id:"overview",children:"Overview"}),`
`,o(m,{of:a}),`
`,o(e.h2,{id:"component-props",children:"Component Props"}),`
`,o(i,{of:d}),`
`,o(u,{of:d}),`
`,o(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",o(e.code,{children:"RadioGroup"})," renders a group of ",o(e.code,{children:"Radio"}),` components that are wrapped in a
`,o(e.code,{children:"<fieldset>"})," element. The ",o(e.code,{children:"<fieldset>"})," element renders a ",o(e.code,{children:"<legend>"}),` element that
can be visually hidden through the `,o(e.code,{children:"showLabel"})," prop."]}),`
`,o(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,o(e.li,{children:o(e.a,{href:"https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C ARIA radiogroup and radio example"})}),`
`,o(e.li,{children:o(e.a,{href:"https://dequeuniversity.com/library/aria/radio-and-radio-group",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Radio and Radio Group"})}),`
`,o(e.li,{children:o(e.a,{href:"https://chakra-ui.com/docs/components/form/radio",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Radio"})}),`
`]}),`
`,o(e.h2,{id:"layout-patterns",children:"Layout Patterns"}),`
`,n(e.p,{children:["Use the ",o(e.code,{children:"layout"})," prop to set the ",o(e.code,{children:"Radio"}),` buttons to display in a column or in
a row.`]}),`
`,o(i,{of:f}),`
`,o(e.h2,{id:"browser-states",children:"Browser States"}),`
`,o(i,{of:g}),`
`,o(e.h2,{id:"labels-using-jsx-elements",children:"Labels Using JSX Elements"}),`
`,n(e.p,{children:["React elements can be passed to the ",o(e.code,{children:"labelText"})," prop of the ",o(e.code,{children:"Radio"}),` component.
This is useful if you need to pass information as part of the label. For example,
if a `,o(e.code,{children:"Radio"}),` label needs to display how many items that option has, it can be
displayed with the help of the `,o(e.code,{children:"Flex"})," and ",o(e.code,{children:"Spacer"})," components."]}),`
`,n(e.p,{children:["Note: the width of ",o(e.code,{children:"RadioGroup"})," is ",o(e.em,{children:"not"}),` set to full width by default. In
order to make this work, pass in the `,o(e.code,{children:"isFullWidth"})," prop."]}),`
`,o(i,{of:b}),`
`,o(e.h2,{id:"getting-radio-input-values",children:"Getting Radio Input Values"}),`
`,o(e.h3,{id:"controlled-component-using-name-and-onchange-props",children:"Controlled Component using `name` and `onChange` props"}),`
`,n(e.p,{children:[`If your application uses controlled React components and the Reservoir Design
System (DS) `,o(e.code,{children:"RadioGroup"}),` must be controlled, you can extract the data through the
`,o(e.code,{children:"name"})," and ",o(e.code,{children:"onChange"})," props. This will be called every time a new ",o(e.code,{children:"Radio"}),` value
is selected. Open the browser's console to see the output.`]}),`
`,o(l,{code:`
function RadioGroupControlledExample() {
  const onChange = (selected) => {
    // This will return the value selected as a string.
    console.log(\`Controlled example. Selected: \${selected}\`);
  };
  return (
    <RadioGroup
      defaultValue="3"
      id="controlled-example"
      labelText="Controlled RadioGroup"
      name="radioGroupExample"
      onChange={onChange}
    >
      <Radio id="2" labelText="Radio 2" value="2" />
      <Radio id="3" labelText="Radio 3" value="3" />
      <Radio id="4" labelText="Radio 4" value="4" />
    </RadioGroup>
  );
}
`,language:"jsx"}),`
`,o(i,{of:R}),`
`,o(e.h3,{id:"uncontrolled-component-using-refs",children:"Uncontrolled Component using `ref`s"}),`
`,o(e.p,{children:n(e.strong,{children:["NOTE: this, along with Chakra's own ",o(e.code,{children:"RadioGroup"}),` component, are not working
at this time and we recommend to use the controlled pattern above.`]})}),`
`,n(e.p,{children:["If your application uses uncontrolled components, you can pass React ",o(e.code,{children:"ref"}),` props
to the DS `,o(e.code,{children:"RadioGroup"})," component to get the selected value from the DOM."]}),`
`,n(e.p,{children:["The following example is using the ",o(e.code,{children:"register"})," React ",o(e.code,{children:"ref"}),` from the
`,o(e.code,{children:"react-hook-form"})," package."]}),`
`,o(l,{code:`
import { useFormContext, Controller } from "react-hook-form";
// ...
const { register, handleSubmit, control } = useFormContext();
// ...
const submitForm = (formData) => {
  // This will return an object with all the DOM element values that were
  // registered with a \`name\` attribute.
  // {
  //   radioExample: "3"
  // }
  console.log(formData);
  // ...
};
<form
  id="example-form"
  onSubmit={handleSubmit(submitForm)}
  method="post"
  action="/some/api/endpoint"
>
  <Controller
    as={
      <RadioGroup
        defaultValue="3"
        id="uncontrolled-example"
        labelText="RadioGroup Uncontrolled"
        name="radioGroupExample"
        ref={register()}
      >
        <Radio id="2" labelText="Radio 2" value="2" />
        <Radio id="3" labelText="Radio 3" value="3" />
        <Radio id="4" labelText="Radio 4" value="4" />
      </RadioGroup>
    }
    control={control}
    name="radioGroupExample"
  />
</form>
`,language:"jsx"}),`
`,n(e.p,{children:["The above is specific to ",o(e.code,{children:"react-hook-form"}),` but a similar pattern can be used
with normal React `,o(e.code,{children:"ref"}),` values. Open the browser's console to see the output
`,n(e.strong,{children:["although, at the moment, forwarding the ref to Chakra's own ",o(e.code,{children:"RadioGroup"}),`
component is not working.`]})]}),`
`,o(l,{code:`
export function RadioGroupUncontrolledExample() {
  const radioGroupRef = React.createRef();
  // Get the value through:
  const onSubmit = (e) => {
    e.preventDefault();
    const radioGroupValue = radioGroupRef.current.value;
    console.log(\`Uncontrolled example. Selected: \${radioGroupValue}\`);
  };
  return (
    <Form id="form" onSubmit={onSubmit}>
      <SimpleGrid columns="1">
        <RadioGroup
          defaultValue="3"
          id="uncontrolled-example"
          labelText="Uncontrolled RadioGroup"
          name="radioGroupExample"
          ref={radioGroupRef}
        >
          <Radio id="2" labelText="Radio 2" value="2" />
          <Radio id="3" labelText="Radio 3" value="3" />
          <Radio id="4" labelText="Radio 4" value="4" />
        </RadioGroup>
        <ButtonGroup>
          <Button id="submit" type="submit">
            Submit
          </Button>
        </ButtonGroup>
      </SimpleGrid>
    </Form>
  );
}
`,language:"jsx"}),`
`,o(i,{of:x})]})}function le(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?o(e,Object.assign({},r,{children:o(c,r)})):c(r)}export{le as default};
//# sourceMappingURL=RadioGroup-e65b9668.js.map
