import{j as n,a as t,F as s}from"./jsx-runtime-09ad29cb.js";import{M as p,D as u,C as c,A as m,b as r}from"./index-5d3bb37f.js";import{C as a,W as i,L as b,E as x,R as k,D as C,a as f,I as g,P as v}from"./CheckboxGroup.stories-76184922.js";import{L as o}from"./Link-0ed02cf7.js";import{u as d}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./Checkbox-ac4cd2b8.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-checkbox.esm-6eb4bb1a.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./index-fb519959.js";import"./CheckboxGroup-ac2921c3.js";import"./Fieldset-8799f492.js";import"./spacing-06362f80.js";import"./types-5ca2ba04.js";function h(l){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em",h3:"h3"},d(),l.components);return t(s,{children:[n(p,{of:a}),`
`,n(e.h1,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.25.1"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
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
`,n(o,{href:"#layout-patterns",target:"_self",children:"Layout Patterns"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#required",target:"_self",children:"Required"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#disabled",target:"_self",children:"Disabled"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#labels-using-jsx-elements",target:"_self",children:"Labels Using JSX Elements"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#indeterminate-example",target:"_self",children:"Indeterminate Example"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#getting-checkbox-input-values",target:"_self",children:"Getting Checkbox Input Values"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#programmatically-update",target:"_self",children:"Programmatically Update"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(u,{of:a}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(c,{of:i}),`
`,n(m,{of:i}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"CheckboxGroup"})," renders a group of ",n(e.code,{children:"Checkbox"}),` components that are wrapped in
a `,n(e.code,{children:"<fieldset>"})," element. The ",n(e.code,{children:"<fieldset>"})," element renders a ",n(e.code,{children:"<legend>"}),` element that
can be visually hidden through the `,n(e.code,{children:"showLabel"})," prop."]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/checkbox",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Checkbox"})}),`
`]}),`
`,n(e.h2,{id:"layout-patterns",children:"Layout Patterns"}),`
`,t(e.p,{children:["Use the ",n(e.code,{children:"layout"})," prop to set the ",n(e.code,{children:"Checkbox"}),` buttons to display in a column or in
a row.`]}),`
`,n(c,{of:b}),`
`,n(e.h2,{id:"errored",children:"Errored"}),`
`,n(c,{of:x}),`
`,n(e.h2,{id:"required",children:"Required"}),`
`,n(c,{of:k}),`
`,n(e.h2,{id:"disabled",children:"Disabled"}),`
`,n(c,{of:C}),`
`,n(e.h2,{id:"labels-using-jsx-elements",children:"Labels Using JSX Elements"}),`
`,t(e.p,{children:["React elements can be passed to the ",n(e.code,{children:"labelText"})," prop of the ",n(e.code,{children:"Checkbox"}),`
component. This is useful if you need to pass information as part of the label.
For example, if a `,n(e.code,{children:"Checkbox"}),` label needs to display how many items that option
has, it can be displayed with the help of the `,n(e.code,{children:"Flex"})," and ",n(e.code,{children:"Spacer"})," components."]}),`
`,t(e.p,{children:["Note: the width of ",n(e.code,{children:"CheckboxGroup"})," is ",n(e.em,{children:"not"}),` set to full width by default. In
order to make this work, pass in the `,n(e.code,{children:"isFullWidth"})," prop."]}),`
`,n(c,{of:f}),`
`,n(e.h2,{id:"indeterminate-example",children:"Indeterminate Example"}),`
`,n(e.p,{children:`The "indeterminate" state can be used when a group of checkboxes are not all
checked or unchecked. In the following example, if only one child checkebox is
checked, the parent checkbox will be in the "indeterminate" state. Once both
children are checked, the parent will be in the "checked" state.`}),`
`,t(e.p,{children:[`The following working example can be used in your application to keep track of
the checked and indeterminate states - taken and modified from Chakra's
`,n(e.a,{href:"https://chakra-ui.com/docs/form/checkbox#indeterminate",target:"_blank",rel:"nofollow noopener noreferrer",children:"Checkbox"}),` documentation.
Note that this example is specifically using Reservoir Design System (DS)
`,n(e.code,{children:"Checkbox"})," and ",n(e.code,{children:"CheckboxGroup"})," components."]}),`
`,n(r,{code:`
  export function IndeterminateExample() {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return (
    <CheckboxGroup
      id="indeterminate"
      labelText="Indeterminate Example"
      name="indeterminate-example"
    >
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        labelText="Parent Checkbox"
        id="parent-checkbox"
      />
      <Checkbox
        isChecked={checkedItems[0]}
        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        labelText="Child Checkbox 1"
        id="child-checkbox-1"
      />
      <Checkbox
        isChecked={checkedItems[1]}
        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        labelText="Child Checkbox 2"
        id="child-checkbox-2"
      />
    </CheckboxGroup>
  )`,language:"tsx"}),`
`,n(c,{of:g}),`
`,n(e.h2,{id:"getting-checkbox-input-values",children:"Getting Checkbox Input Values"}),`
`,n(e.h3,{id:"controlled-component-using-name-defaultvalue-and-onchange-props",children:"Controlled Component using name, defaultValue, and onChange props"}),`
`,t(e.p,{children:[`If your application uses controlled React components and the DS CheckboxGroup
must be controlled, you can extract the data through the `,n(e.code,{children:"name"}),", ",n(e.code,{children:"defaultValue"}),`,
and `,n(e.code,{children:"onChange"})," props. The ",n(e.code,{children:"onChange"}),` function will be called every time a new
`,n(e.code,{children:"Checkbox"})," value is checked or unchecked."]}),`
`,n(r,{code:`
 const onChange = (data: string[]) => {
  // This will return the values selected as an array of strings.
  // Ex: ["2", "4"]
  console.log(data);
};
// ...

// Example of the DS CheckboxGroup instance with the function above:

<CheckboxGroup
  id="controlled-example"
  labelText="Checkbox Group"
  name="CheckboxExample"
  defaultValue={["2"]}
  onChange={onChange}
>
  <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
  <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
  <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
</CheckboxGroup>
;`,language:"jsx"}),`
`,n(e.h3,{id:"uncontrolled-component-using-refs",children:"Uncontrolled Component using ref's"}),`
`,t(e.p,{children:["If your application uses uncontrolled components, you can pass React ",n(e.code,{children:"ref"}),` props
to the DS CheckboxGroup component to get the selected value from the DOM.`]}),`
`,t(e.p,{children:["The following example is using the ",n(e.code,{children:"register"})," React ",n(e.code,{children:"ref"}),` from the
`,n(e.code,{children:"react-hook-form"})," package."]}),`
`,n(r,{code:`
import { useFormContext, Controller } from "react-hook-form";
// ...
const { register, handleSubmit, control } = useFormContext();
// ...
const submitForm = (formData) => {
  // This will return an object with all the DOM element values that were
  // registered with a 'name' attribute.
  // {
  //   checkboxExample: ["3"]
  // }
  console.log(formData);
  // ...
};

<form
  onSubmit={handleSubmit(submitForm)}
  method="post"
  action="/some/api/endpoint"
>
  <Controller
    as={
      <CheckboxGroup
        id="uncontrolled-example"
        labelText="Checkbox Group"
        name="checkboxExample"
        defaultValue={["3"]}
        ref={register()}
      >
        <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      </CheckboxGroup>
    }
    name="checkboxExample"
    control={control}
  />
</form>
;`,language:"jsx"}),`
`,t(e.p,{children:["The above is specific to ",n(e.code,{children:"react-hook-form"}),` but a similar pattern can be used
with normal React `,n(e.code,{children:"ref"})," values."]}),`
`,n(r,{code:`
const CheckboxGroupRef = React.createRef<HTMLInputElement>();
// ...
<CheckboxGroup
  id="uncontrolled-example"
  labelText="Checkbox Group"
  name="checkboxExample"
  defaultValue={["3"]}
  ref={CheckboxGroupRef}
>
  <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
  <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
  <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
</CheckboxGroup>

// ...
// Get the value through:
const onSubmit = () => {
// ...
const CheckboxGroupValue = CheckboxGroupRef.current.value;
};`,language:"jsx"}),`
`,n(e.h3,{id:"programmatically-update",children:"Programmatically Update"}),`
`,t(e.p,{children:["Within the ",n(e.code,{children:"CheckboxGroup"}),", individual ",n(e.code,{children:"Checkbox"}),`es can be updated programmatically
through the `,n(e.code,{children:"value"})," prop. Similar to the ",n(e.code,{children:"defaultValue"})," prop, the ",n(e.code,{children:"value"}),` prop
also accepts an array of strings.`]}),`
`,t(e.p,{children:["When passing selected values through the ",n(e.code,{children:"value"}),` prop, the consuming app is now
controlling the state of the values. By default, the `,n(e.code,{children:"CheckboxGroup"}),` component
returns the value(s) checked to the consuming app through the `,n(e.code,{children:"onChange"}),` callback.
Note that the `,n(e.code,{children:"defaultValue"}),` prop is not necessary unless there are values that
should be checked when the component first renders.`]}),`
`,t(e.p,{children:["In the following example, the ",n(e.code,{children:"CheckboxGroup"}),` component works as expected, but
now there are three (3) additional buttons that can update the selected checkboxes
within the `,n(e.code,{children:"CheckboxGroup"}),` component. Open the browser's console to see the
`,n(e.code,{children:"onChange"})," callback being called ",n(e.em,{children:"only"}),` when checkboxes are checked or unchecked.
Clicking on a button does not trigger the `,n(e.code,{children:"onChange"}),` callback but does update
the values.`]}),`
`,n(r,{code:`
export function CheckboxGroupValuesUpdateExample() {
  const [value, setValue] = useState([]);
  const onClick1 = () => {
    setValue(["art", "science", "math"]);
  };
  const onClick2 = () => {
    setValue(["math", "music", "magic"]);
  };
  const onClick3 = () => {
    setValue(["physics", "science", "chemistry"]);
  };
  const onChange = (data) => {
    setValue(data);
    console.log("Selected values:", data);
  };
  return (
    <VStack align="stretch" spacing="m">
      <span>Set values to:</span>
      <ButtonGroup>
        <Button id="btn1" onClick={onClick1}>
          "art", "science", "math"
        </Button>
        <Button id="btn2" onClick={onClick2}>
          "math", "music", "magic"
        </Button>
        <Button id="btn3" onClick={onClick3}>
          "physics", "science", "chemistry"
        </Button>
      </ButtonGroup>
      <CheckboxGroup
        id="programmatically-update-example"
        labelText="Course Selection"
        name="courseSelection"
        onChange={onChange}
        value={value}
      >
        <Checkbox id="art" labelText="Art" value="art" />
        <Checkbox id="chemistry" labelText="Chemistry" value="chemistry" />
        <Checkbox id="english" labelText="English" value="english" />
        <Checkbox id="magic" labelText="Magic" value="magic" />
        <Checkbox id="math" labelText="Math" value="math" />
        <Checkbox id="music" labelText="Music" value="music" />
        <Checkbox id="physics" labelText="Physics" value="physics" />
        <Checkbox id="science" labelText="Science" value="science" />
      </CheckboxGroup>
    </VStack>
  );
}`,language:"jsx"}),`
`,n(c,{of:v})]})}function he(l={}){const{wrapper:e}=Object.assign({},d(),l.components);return e?n(e,Object.assign({},l,{children:n(h,l)})):h(l)}export{he as default};
//# sourceMappingURL=CheckboxGroup-2ace418e.js.map
