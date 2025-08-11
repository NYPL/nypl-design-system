import{u as r,j as e,M as i,L as t,bv as d,C as o,bw as x,S as l}from"./iframe-D93LbwGv.js";import{C as u}from"./ComponentChangelogTable-Ck_3mwrR.js";import{C as s,W as a,L as p,E as b,R as m,D as k,a as j,I as C,P as g}from"./CheckboxGroup.stories-KiU_FbBH.js";const f=[{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase"]},{date:"2024-07-03",version:"3.1.7",type:"Update",affects:["Documentation"],notes:["Adds interaction tests for the Controls story."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles","Functionality"],notes:["Removes console warning for children elements that are not `Checkbox` components.","Chakra 2.8 update."]}];function h(c){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n.h1,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.25.1"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.3.2"})})]})]})]}),`
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
`,e.jsx(t,{href:"#layout-patterns",target:"_self",children:"Layout Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#errored",target:"_self",children:"Errored"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#required",target:"_self",children:"Required"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#disabled",target:"_self",children:"Disabled"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#labels-using-jsx-elements",target:"_self",children:"Labels Using JSX Elements"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#indeterminate-example",target:"_self",children:"Indeterminate Example"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#getting-checkbox-input-values",target:"_self",children:"Getting Checkbox Input Values"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#programmatically-update",target:"_self",children:"Programmatically Update"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CheckboxGroup"})," renders a group of ",e.jsx(n.code,{children:"Checkbox"}),` components that are wrapped in
a `,e.jsx(n.code,{children:"<fieldset>"})," element. The ",e.jsx(n.code,{children:"<fieldset>"})," element renders a ",e.jsx(n.code,{children:"<legend>"}),` element that
can be visually hidden through the `,e.jsx(n.code,{children:"showLabel"})," prop."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/form/checkbox",rel:"nofollow",children:"Chakra UI Checkbox"})}),`
`]}),`
`,e.jsx(n.h2,{id:"layout-patterns",children:"Layout Patterns"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"layout"})," prop to set the ",e.jsx(n.code,{children:"Checkbox"}),` buttons to display in a column or in
a row.`]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"errored",children:"Errored"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"required",children:"Required"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(n.h2,{id:"labels-using-jsx-elements",children:"Labels Using JSX Elements"}),`
`,e.jsxs(n.p,{children:["React elements can be passed to the ",e.jsx(n.code,{children:"labelText"})," prop of the ",e.jsx(n.code,{children:"Checkbox"}),`
component. This is useful if you need to pass information as part of the label.
For example, if a `,e.jsx(n.code,{children:"Checkbox"}),` label needs to display how many items that option
has, it can be displayed with the help of the `,e.jsx(n.code,{children:"Flex"})," and ",e.jsx(n.code,{children:"Spacer"})," components."]}),`
`,e.jsxs(n.p,{children:["Note: the width of ",e.jsx(n.code,{children:"CheckboxGroup"})," is ",e.jsx(n.em,{children:"not"}),` set to full width by default. In
order to make this work, pass in the `,e.jsx(n.code,{children:"isFullWidth"})," prop."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h2,{id:"indeterminate-example",children:"Indeterminate Example"}),`
`,e.jsx(n.p,{children:`The "indeterminate" state can be used when a group of checkboxes are not all
checked or unchecked. In the following example, if only one child checkebox is
checked, the parent checkbox will be in the "indeterminate" state. Once both
children are checked, the parent will be in the "checked" state.`}),`
`,e.jsxs(n.p,{children:[`The following working example can be used in your application to keep track of
the checked and indeterminate states - taken and modified from Chakra's
`,e.jsx(n.a,{href:"https://chakra-ui.com/docs/form/checkbox#indeterminate",rel:"nofollow",children:"Checkbox"}),` documentation.
Note that this example is specifically using Reservoir Design System (DS)
`,e.jsx(n.code,{children:"Checkbox"})," and ",e.jsx(n.code,{children:"CheckboxGroup"})," components."]}),`
`,e.jsx(l,{code:`
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
`,e.jsx(o,{of:C}),`
`,e.jsx(n.h2,{id:"getting-checkbox-input-values",children:"Getting Checkbox Input Values"}),`
`,e.jsx(n.h3,{id:"controlled-component-using-name-defaultvalue-and-onchange-props",children:"Controlled Component using name, defaultValue, and onChange props"}),`
`,e.jsxs(n.p,{children:[`If your application uses controlled React components and the DS CheckboxGroup
must be controlled, you can extract the data through the `,e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"defaultValue"}),`,
and `,e.jsx(n.code,{children:"onChange"})," props. The ",e.jsx(n.code,{children:"onChange"}),` function will be called every time a new
`,e.jsx(n.code,{children:"Checkbox"})," value is checked or unchecked."]}),`
`,e.jsx(l,{code:`
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
`,e.jsx(n.h3,{id:"uncontrolled-component-using-refs",children:"Uncontrolled Component using ref's"}),`
`,e.jsxs(n.p,{children:["If your application uses uncontrolled components, you can pass React ",e.jsx(n.code,{children:"ref"}),` props
to the DS CheckboxGroup component to get the selected value from the DOM.`]}),`
`,e.jsxs(n.p,{children:["The following example is using the ",e.jsx(n.code,{children:"register"})," React ",e.jsx(n.code,{children:"ref"}),` from the
`,e.jsx(n.code,{children:"react-hook-form"})," package."]}),`
`,e.jsx(l,{code:`
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
`,e.jsxs(n.p,{children:["The above is specific to ",e.jsx(n.code,{children:"react-hook-form"}),` but a similar pattern can be used
with normal React `,e.jsx(n.code,{children:"ref"})," values."]}),`
`,e.jsx(l,{code:`
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
`,e.jsx(n.h3,{id:"programmatically-update",children:"Programmatically Update"}),`
`,e.jsxs(n.p,{children:["Within the ",e.jsx(n.code,{children:"CheckboxGroup"}),", individual ",e.jsx(n.code,{children:"Checkbox"}),`es can be updated programmatically
through the `,e.jsx(n.code,{children:"value"})," prop. Similar to the ",e.jsx(n.code,{children:"defaultValue"})," prop, the ",e.jsx(n.code,{children:"value"}),` prop
also accepts an array of strings.`]}),`
`,e.jsxs(n.p,{children:["When passing selected values through the ",e.jsx(n.code,{children:"value"}),` prop, the consuming app is now
controlling the state of the values. By default, the `,e.jsx(n.code,{children:"CheckboxGroup"}),` component
returns the value(s) checked to the consuming app through the `,e.jsx(n.code,{children:"onChange"}),` callback.
Note that the `,e.jsx(n.code,{children:"defaultValue"}),` prop is not necessary unless there are values that
should be checked when the component first renders.`]}),`
`,e.jsxs(n.p,{children:["In the following example, the ",e.jsx(n.code,{children:"CheckboxGroup"}),` component works as expected, but
now there are three (3) additional buttons that can update the selected checkboxes
within the `,e.jsx(n.code,{children:"CheckboxGroup"}),` component. Open the browser's console to see the
`,e.jsx(n.code,{children:"onChange"})," callback being called ",e.jsx(n.em,{children:"only"}),` when checkboxes are checked or unchecked.
Clicking on a button does not trigger the `,e.jsx(n.code,{children:"onChange"}),` callback but does update
the values.`]}),`
`,e.jsx(l,{code:`
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
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(u,{changelogData:f})]})}function T(c={}){const{wrapper:n}={...r(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(h,{...c})}):h(c)}export{T as default};
