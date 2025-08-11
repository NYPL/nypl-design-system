import{u as d,j as e,M as a,L as l,bv as h,C as s,bw as u,S as t}from"./iframe-D93LbwGv.js";import{C as x}from"./ComponentChangelogTable-Ck_3mwrR.js";import{F as i,W as r,a as p,L as m,U as j,C as g,M as f,T as b}from"./FilterBarInline.stories-D-dolKAQ.js";import"./useMultiSelect-amaASZqv.js";const C=[{date:"2024-08-29",version:"3.3.0",type:"Update",affects:["Documentation","Functionality"],notes:["Adds closeOnBlur prop to the render prop function to apply closeOnBlur to MultiSelect children."]},{date:"2024-07-25",version:"3.2.0",type:"New Feature",affects:["Accessibility","Documentation","Functionality","Styles"],notes:["Adds FilterBarInline component."]}];function c(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(n.h1,{id:"filterbarinline",children:"FilterBarInline"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.2.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.3.0"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#filterbarinline-heading",target:"_self",children:"FilterBarInline Heading"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#layout-patterns",target:"_self",children:"Layout Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#ui-containers",target:"_self",children:"UI Containers"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#passing-children",target:"_self",children:"Passing Children"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#controlling-state-using-selecteditems-onclear-and-onsubmit-props",target:"_self",children:"Controlling State Using selectedItems, onClear, and onSubmit Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#tagset-example",target:"_self",children:"TagSet Example"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:i}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"FilterBarInline"}),` is a wrapper component for filter components and individual form
input components. The DS considers the following components as filter components:
`,e.jsx(n.code,{children:"CheckboxGroup"}),", ",e.jsx(n.code,{children:"MultiSelectGroup"}),",",e.jsx(n.code,{children:"RadioGroup"}),", ",e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"DatePicker"}),`,
`,e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"Radio"}),", ",e.jsx(n.code,{children:"Select"}),", ",e.jsx(n.code,{children:"Slider"}),", ",e.jsx(n.code,{children:"TextInput"}),", and ",e.jsx(n.code,{children:"Toggle"}),"."]}),`
`,e.jsx(n.p,{children:`The wrapped components/component groups can be displayed in a column or in a row
layout.`}),`
`,e.jsxs(n.p,{children:["It is recommended to use real-time filtering in conjunction with the ",e.jsx(n.code,{children:"TagSet"}),` component.
If the consuming app is not using the above, then `,e.jsx(n.code,{children:"FilterBarInline"}),` can render
additional `,e.jsx(n.code,{children:"Clear All"})," and a ",e.jsx(n.code,{children:"Apply Filters"})," buttons. The two ",e.jsx(n.em,{children:"optional"}),` buttons are
controlled by the `,e.jsx(n.code,{children:"onClear"})," or ",e.jsx(n.code,{children:"onSubmit"})," props respectively."]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterBarInline"}),` component is a wrapper component for components with filter
functionality. The accessibility of `,e.jsx(n.code,{children:"FilterBarInline"}),` depends on the passed child
components accessibility. See the accessibility details of valid FilterBarInline child
components:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-checkboxgroup--docs#accessibility",children:"CheckboxGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-multiselectgroup--docs#accessibility",children:"MultiSelectGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-radiogroup--docs#accessibility",children:"RadioGroup"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-checkbox--docs#accessibility",children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-datepicker--docs#accessibility",children:"DatePicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-multiselect--docs#accessibility",children:"MultiSelect"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-radio--docs#accessibility",children:"Radio"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-select--docs#accessibility",children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-slider--docs#accessibility",children:"Slider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-textinput--docs#accessibility",children:"TextInput"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-toggle--docs#accessibility",children:"Toggle"})}),`
`]}),`
`,e.jsx(n.h2,{id:"filterbarinline-heading",children:"FilterBarInline Heading"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterBarInline"}),` component can be rendered with and without a heading. By
default, when a string is passed to the `,e.jsx(n.code,{children:"heading"}),` prop, the
`,e.jsx(n.code,{children:"FilterBarInline"})," component will render an ",e.jsx(n.code,{children:"h2"})," element sized as a ",e.jsx(n.code,{children:"heading5"}),`
heading. If this causes accessibility issues in your app, you can set a custom
heading by passing in a DS `,e.jsx(n.code,{children:"Heading"})," component."]}),`
`,e.jsxs(n.p,{children:["In the following examples, the ",e.jsx(n.code,{children:"FilterBarInline"})," component will render custom ",e.jsx(n.code,{children:"h3"}),`
and `,e.jsx(n.code,{children:"h5"}),` elements. Note that no matter what heading level is set, the size will
always be set to `,e.jsx(n.code,{children:"heading5"})," internally by the ",e.jsx(n.code,{children:"FilterBarInline"})," component."]}),`
`,e.jsx(t,{code:`

const customH3 = <Heading level="h3">Custom H3 Heading</Heading>;
const customH5 = <Heading level="h5">Custom H5 Heading</Heading>;

<FilterBarInline heading={customH3} {...props} />
<FilterBarInline heading={customH5} {...props} />
`,language:"tsx"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"layout-patterns",children:"Layout Patterns"}),`
`,e.jsxs(n.p,{children:["The display of the ",e.jsx(n.code,{children:"FilterBarInline"})," child components can be set to a ",e.jsx(n.code,{children:'"row"'}),` or a
`,e.jsx(n.code,{children:'"column"'})," layout. On screen width under 600px width the ",e.jsx(n.code,{children:"layout"}),` is
automatically set to `,e.jsx(n.code,{children:'"column"'}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," when ",e.jsx(n.code,{children:'layout = "row"'})," is passed, ",e.jsx(n.code,{children:"MultiSelect"}),` components will have
`,e.jsx(n.code,{children:"closeOnBlur"})," set to ",e.jsx(n.code,{children:"true"})," by default and when ",e.jsx(n.code,{children:'layout = "column"'}),` is passed,
the `,e.jsx(n.code,{children:"closeOnBlur"})," prop will be set to ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," when ",e.jsx(n.code,{children:'layout = "column"'})," is passed, ",e.jsx(n.code,{children:"MultiSelect"}),` components will have
`,e.jsx(n.code,{children:"isBlockElement"})," set to ",e.jsx(n.code,{children:"true"})," by default and the child components ",e.jsx(n.code,{children:"width"}),`
will be set to `,e.jsx(n.code,{children:'"full"'}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," ",e.jsx(n.code,{children:"CheckboxGroup"}),", ",e.jsx(n.code,{children:"MultiSelectGroup"}),", and ",e.jsx(n.code,{children:"RadioGroup"})," ",e.jsx(n.code,{children:"layout"}),` prop will
match the value of the `,e.jsx(n.code,{children:"layout"})," set for the ",e.jsx(n.code,{children:"FilterBarInline"})," component."]}),`
`,e.jsxs(n.p,{children:["Refer to the ",e.jsx(l,{href:"#passing-children",target:"_self",children:"Passing Children"}),`
section for more information on how these prop value are passed in the
`,e.jsx(n.code,{children:"renderChildren"})," prop."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"ui-containers",children:"UI Containers"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterBarInline"}),` component will often be rendered within a UI container with
`,e.jsx(n.code,{children:"background-color"})," and ",e.jsx(n.code,{children:"padding"}),` styles applied. This treatment can easily be
accomplished using the `,e.jsx(n.code,{children:"Box"})," component with inline styles."]}),`
`,e.jsx(n.p,{children:`If a consuming app supports dark mode, styles for both light and dark mode will
be required for the UI container element.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"}),` Future DS updates may provide a standalone component to implement a
UI container similar to what is used in these example.`]}),`
`,e.jsx(n.h3,{id:"row-layout",children:"Row Layout"}),`
`,e.jsx(t,{code:`
/* LIGHT MODE ONLY */
// Add container for row layout
<Box bg="ui.bg.default" p="inset.wide">
<FilterBarInline
  layout="row"
  renderChildren={() => {
    // Filter components...
  }}
  // ...
/>
</Box>
`,language:"jsx"}),`
`,e.jsx(t,{code:`
/* DARK MODE SUPPORT */
// Import useColorModeValue hook
import { useColorModeValue } from "@nypl/design-system-react-components";
// ...
// Use hook to set values for light and dark mode
const containerBgColor = useColorModeValue(
"ui.bg.default",
"dark.ui.bg.default"
);
// ...
// Add container for row layout
<Box bg={containerBgColor} p="inset.wide">
<FilterBarInline
  layout="row"
  renderChildren={() => {
    // Filter components...
  }}
  // ...
/>
</Box>
; `,language:"jsx"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"column-layout",children:"Column Layout"}),`
`,e.jsx(t,{code:`
/* LIGHT MODE ONLY */
// Add container for column layout
<Box bg="ui.bg.default" p="inset.default">
<FilterBarInline
  layout="column"
  renderChildren={() => {
    // Filter components...
  }}
  // ...
/>
</Box>
`,language:"jsx"}),`
`,e.jsx(t,{code:`
/* DARK MODE SUPPORT */
// ...
// Import useColorModeValue hook
import { useColorModeValue } from "@nypl/design-system-react-components";
// ...
// Use hook to set values for light and dark mode
const containerBgColor = useColorModeValue(
"ui.bg.default",
"dark.ui.bg.default"
);
// ...
// Add container for column layout
<Box bg={containerBgColor} p="inset.default">
<FilterBarInline
  layout="column"
  renderChildren={() => {
    // Filter components...
  }}
  // ...
/>
</Box>;
`,language:"jsx"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"passing-children",children:"Passing Children"}),`
`,e.jsx(s,{of:f}),`
`,e.jsxs(n.p,{children:[`In order to control the styling and props passed to children form elements,
the `,e.jsx(n.code,{children:"FilterBarInline"})," component accepts ",e.jsx(n.code,{children:"CheckboxGroup"}),", ",e.jsx(n.code,{children:"MultiSelectGroup"}),`,
`,e.jsx(n.code,{children:"RadioGroup"}),", ",e.jsx(n.code,{children:"Checkbox"}),", ",e.jsx(n.code,{children:"DatePicker"}),", ",e.jsx(n.code,{children:"MultiSelect"}),", ",e.jsx(n.code,{children:"Radio"}),", ",e.jsx(n.code,{children:"Select"}),`,
`,e.jsx(n.code,{children:"Slider"}),", ",e.jsx(n.code,{children:"TextInput"}),", and ",e.jsx(n.code,{children:"Toggle"})," children through its ",e.jsx(n.code,{children:"renderChildren"}),` render
prop function.`]}),`
`,e.jsxs(n.p,{children:[`This callback prop function returns an object argument with three properties:
`,e.jsx(n.code,{children:"isBlockElement"}),", ",e.jsx(n.code,{children:"layout"}),", and ",e.jsx(n.code,{children:"width"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"isBlockElement"})," argument value should be passed to the ",e.jsx(n.code,{children:"isBlockElement"}),`
prop of `,e.jsx(n.code,{children:"MultiSelect"})," children."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"closeOnBlur"})," argument value should be passed to the ",e.jsx(n.code,{children:"closeOnBlur"}),`
prop of `,e.jsx(n.code,{children:"MultiSelect"})," children."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"layout"})," argument value should be passed to the ",e.jsx(n.code,{children:"layout"}),` prop of
`,e.jsx(n.code,{children:"CheckboxGroup"}),", ",e.jsx(n.code,{children:"MultiSelectGroup"}),", and ",e.jsx(n.code,{children:"RadioGroup"})," children."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"width"})," argument value should be passed to the ",e.jsx(n.code,{children:"multiSelectWidth"}),` prop of
`,e.jsx(n.code,{children:"MultiSelectGroup"})," children and the ",e.jsx(n.code,{children:"width"})," prop of ",e.jsx(n.code,{children:"MultiSelect"})," children."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Here is an example of the shape of ",e.jsx(n.code,{children:"FilterBarInline"}),":"]}),`
`,e.jsx(t,{code:`
<FilterBarInline
id="..."
heading="..."
renderChildren={({ isBlockElement, closeOnBlur, layout, width }) => {
  return (...)
}}
/>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"controlling-state-using-selecteditems-onclear-and-onsubmit-props",children:"Controlling State Using selectedItems, onClear, and onSubmit Props"}),`
`,e.jsx(n.h3,{id:"selecteditems",children:"selectedItems"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FilterBarInline"}),` component does not store its state internally. It expects
a `,e.jsx(n.code,{children:"selectedItems"}),` prop whose value is an array of selected values of the filter
children.`]}),`
`,e.jsxs(n.p,{children:[`To control each of the child form elements, you must pass the appropriate
`,e.jsx(n.code,{children:"onChange"})," and ",e.jsx(n.code,{children:"value"}),` props to them. Find documentation on how to do this on each
individual component page.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useMultiSelect"}),` is an optional but recommended hook for cases where managing
the state of the component in the consuming app is less of a concern and general
ease of use is prefered. Find the full documentation under
`,e.jsx(n.a,{href:"../?path=/docs/hooks-usemultiselect--docs",children:"useMultiSelect"})]}),`
`,e.jsx(t,{code:`
const { onChange, onMixedStateChange, selectedItems, onClear, onClearAll } = useMultiSelect();
const [selectedCheckbox, setSelectedCheckbox] = useState([]);
const [textValue, setTextValue] = useState("");
const [selectedFilterItems, setSelectedFilterItems] = useState([
selectedItems,
selectedCheckbox,
textValue,
]);
useEffect(() => {
setSelectedFilterItems([selectedItems, selectedCheckbox, textValue]);
}, [selectedItems, selectedCheckbox, textValue]);
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"onclear",children:"onClear"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Clear all filters"})," button will only be visible when the ",e.jsx(n.code,{children:"onClear"}),` prop is
passed. The `,e.jsx(n.code,{children:"Apply filters"})," button will only be visible when the ",e.jsx(n.code,{children:"onSubmit"}),` prop is
passed. Consuming apps are responsible for handling the logic and subsequent UI
updates expected when the `,e.jsx(n.code,{children:"onSubmit"})," and ",e.jsx(n.code,{children:"onClear"})," handlers are called."]}),`
`,e.jsx(t,{code:`
const onClearFilterBar = () => {
onClearAll();
setSelectedCheckbox([]);
setTextValue("");
};`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"onsubmit",children:"onSubmit"}),`
`,e.jsxs(n.p,{children:["It is expected that the ",e.jsx(n.code,{children:"onSubmit"}),` handler will read the current values from the
child form elements (the filters) and update the associated search results list
based on those values.`]}),`
`,e.jsxs(n.p,{children:["It is expected that the ",e.jsx(n.code,{children:"onClear"}),` handler will clear all of the current values
from the child form elements and restore the associated search results list to an
unfiltered state.`]}),`
`,e.jsx(n.p,{children:`To have better readability of the code it is recommended to separate nested render
prop functions:`}),`
`,e.jsx(t,{code:`
// function for renderMultiSelect prop of MultiSelectGroup 
const renderMultiSelect = (closeOnBlur, { isBlockElement, multiSelectWidth }) => {
return (
  shortMultiSelectItems &&
  shortMultiSelectItems.map((multiSelect) => (
    <MultiSelect
      buttonText={multiSelect.name}
      closeOnBlur={closeOnBlur}
      id={multiSelect.id}
      isBlockElement={isBlockElement}
      items={multiSelect.items}
      key={multiSelect.id}
      onClear={() => onClear(multiSelect.id)}
      onChange={(e) => onChange(e.target.id, multiSelect.id)}
      onMixedStateChange={(e) => {
        return onMixedStateChange(e.target.id, multiSelect.id, multiSelect.items);
      }}
      selectedItems={selectedItems}
      width={multiSelectWidth}
    />
  )) 
); 
};`,language:"jsx"}),`
`,e.jsx(t,{code:`
// function for renderChildren prop of FilterBar 
const renderFilterComponents = ({ closeOnBlur, layout, width }) => {
return (
  <>
    <MultiSelectGroup
      id="multiselect-group"
      labelText="MultiSelect Group"
      layout={layout}
      multiSelectWidth={width}
      renderMultiSelect={renderMultiSelect.bind(this, closeOnBlur)}
    />
    <CheckboxGroup
      id="checkbox-example"
      labelText="Checkbox Group"
      name="checkboxExample"
      layout={layout}
      value={selectedCheckbox}
      onChange={(e) => {
        setSelectedCheckbox(e);
      }}
    >
      <Checkbox id="checkbox-1" value="1" labelText="Checkbox 1" />
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
    </CheckboxGroup>
    <TextInput
      id="textinput-example"
      isClearable
      isClearableCallback={() => setTextValue("")}
      labelText="What is your favorite color?"
      onChange={(e) => setTextValue(e.target.value)}
      placeholder="i.e. blue, green, etc."
      value={textValue}
    />
  </>
); 
};
`,language:"jsx"}),`
`,e.jsx(t,{code:`
return (
<FilterBarInline
  id={args.id}
  heading={args.heading}
  layout={args.layout}
  onClear={onClearFilterBar}
  onSubmit={() => console.log(selectedFilterItems)}
  selectedItems={selectedFilterItems}
  renderChildren={renderFilterComponents}
/>
); `,language:"jsx"}),`
`,e.jsx(n.h2,{id:"tagset-example",children:"TagSet Example"}),`
`,e.jsx(s,{of:b}),`
`,e.jsxs(n.p,{children:["The following code is one example of how the ",e.jsx(n.code,{children:"FilterBarInline"}),` component can
be used with the `,e.jsx(n.code,{children:"TagSet"}),` component. Consuming apps can modify this to fit their
use case by ensuring the `,e.jsx(n.code,{children:"tagSetData"}),` is updated with changes to filter items and
vice versa.`]}),`
`,e.jsx(t,{code:`
const [tagSetData, setTagSetData] = useState<TagSetFilterDataProps[]>([]);
// update tagSetData with selectedFilterItems
useEffect(() => {
const newTags = [];
for (let item of selectedFilterItems[0]) {
  newTags.push({
    id: \`tag-\${item}\`,
    label: item,
  });
}
if (selectedFilterItems[1] !== "")
  newTags.push({ id: "tag-color", label: selectedFilterItems[1] });
  
setTagSetData(newTags);
}, [selectedFilterItems]);
// handler for updating selected items when tag is clicked
const handleOnClick = (tag) => {
if (tag.id === "clear-filters") {
  setSelectedCheckbox([]);
  setTextValue("");
  setTagSetData([]);
  return;
}
setSelectedCheckbox((checkboxes) =>
  checkboxes.filter((checkbox) => {
    return \`tag-\${checkbox}\` !== tag.id;
  })
);
if (tag.id === "tag-color") {
  setTextValue("");
}
setTagSetData((prevTagSetData) =>
  prevTagSetData.filter((tag) => {
  return tag.id !== tag.id;
})
);
}; `,language:"jsx"}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:C})]})}function B(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{B as default};
