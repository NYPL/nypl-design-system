import{u as i,j as e,M as d,L as n,bv as h,C as s,bw as p,S as o}from"./iframe-D93LbwGv.js";import{C as x}from"./ComponentChangelogTable-Ck_3mwrR.js";import{S as l,a,b as u,i as m,H as j,c as b,E as f,D as g,d as v,e as S}from"./SearchBar.stories-rKIbJtyV.js";import"./storybookUtils-BmTl87w5.js";const y=[{date:"2025-05-22",version:"3.6.2",type:"Update",affects:["Styles"],notes:["Removes use of `useNYPLBreakpoints` and replaces with equivalent CSS."]},{date:"2025-04-24",version:"3.6.1",type:"Update",affects:["Styles"],notes:["Removes the text input right border."]},{date:"2025-03-20",version:"3.5.5",type:"Update",affects:["Styles"],notes:["Updates styles with container queries to be more responsive."]},{date:"2024-10-24",version:"3.4.1",type:"Update",affects:["Styles"],notes:["Updates the styles to allow more room for the label text."]},{date:"2024-10-02",version:"3.4.0",type:"Update",affects:["Functionality"],notes:["Updates invalid text in the SearchBar component to include 'There was a problem. ' prefix"]},{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase"]},{date:"2024-08-29",version:"3.3.0",type:"Update",affects:["Styles"],notes:["Updates styles on mobile breakpoints, adds span element to text for CSS targeting."]},{date:"2024-06-20",version:"3.1.6",type:"Update",affects:["Styles"],notes:["Adds interaction tests for the Controls story."]},{date:"2024-05-23",version:"3.1.4",type:"Update",affects:["Accessibility"],notes:["Updates the internal `TextInput` component's aria-describedby value to include the `SearchBar`'s helper text ID."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation","Styles"],notes:["Updated the `headingText` prop to allow JSX to render custom heading elements for accessible heading hierarchy.","Added a z-index on hover to the select icon so it no longer disappears."]}];function c(r){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(t.h1,{id:"searchbar",children:"SearchBar"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Component Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"0.0.4"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.6.2"})})]})]})]}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#with-custom-heading",target:"_self",children:"With Custom Heading"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#form-components",target:"_self",children:"Form Components"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#search-autocomplete",target:"_self",children:"Search Autocomplete"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#form-states",target:"_self",children:"Form States"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#heading-and-description-text",target:"_self",children:"Heading and Description Text"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#textinput-and-onsubmit-values",target:"_self",children:"TextInput and onSubmit Values"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:l}),`
`,e.jsxs(t.p,{children:["The main wrapper element that is rendered is a ",e.jsx(t.code,{children:"<form>"}),` DOM element. All the
props passed to `,e.jsx(t.code,{children:"SearchBar"})," will apply to the ",e.jsx(t.code,{children:"<form>"}),` element and its children.
The `,e.jsx(t.code,{children:"SearchBar"})," component will render a ",e.jsx(t.code,{children:"Select"}),` component (optional),
`,e.jsx(t.code,{children:"TextInput"})," component, ",e.jsx(t.code,{children:"Button"})," component, and ",e.jsx(t.code,{children:"HelperErrorText"}),` component
based on the required props.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Select"}),` dropdown narrows the search within a specific category, typically
title or author. Toggle the `,e.jsx(t.code,{children:"Select"})," through the Controls."]}),`
`,e.jsxs(t.p,{children:["Note: The labels for the ",e.jsx(t.code,{children:"Select"})," and ",e.jsx(t.code,{children:"TextInput"}),` components are not visible but
aria-labels are used to make these children components accessible.`]}),`
`,e.jsx(t.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"SearchBar"})," component is implemented with Reservoir ",e.jsx(t.code,{children:"Select"}),", ",e.jsx(t.code,{children:"TextInput"}),`,
and `,e.jsx(t.code,{children:"Button"}),` accessible components. This a "complete" component that renders an
HTML `,e.jsx(t.code,{children:"<form>"})," element that is submitted with a ",e.jsx(t.code,{children:"<button>"})," element of ",e.jsx(t.code,{children:'type="submit"'}),`.
The `,e.jsx(t.code,{children:"<form>"})," element also has a ",e.jsx(t.code,{children:'role="search"'}),` attribute that allows
screenreaders to pick up this entire search form.`]}),`
`,e.jsx(t.p,{children:"Resources:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"../?path=/docs/components-form-elements-select--docs",children:"Reservoir Select"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"../?path=/docs/components-form-elements-textinput--docs",children:"Reservoir TextInput"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.a11ymatters.com/pattern/accessible-search/",rel:"nofollow",children:"a11ymatters Accessible Search Form"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/search_role",rel:"nofollow",children:"MDN ARIA: search role"})}),`
`]}),`
`,e.jsx(t.h2,{id:"with-custom-heading",children:"With Custom Heading"}),`
`,e.jsxs(t.p,{children:["By default, the ",e.jsx(t.code,{children:"SearchBar"})," will render an ",e.jsx(t.code,{children:"h2"}),` element when a string is
passed to the `,e.jsx(t.code,{children:"headingText"}),` component. If this is an accessibility issue, it's
possible to pass in a custom heading element.`]}),`
`,e.jsxs(t.p,{children:["In the following example, an ",e.jsx(t.code,{children:"h4"})," is rendered through the DS ",e.jsx(t.code,{children:"Heading"})," component."]}),`
`,e.jsx(o,{code:`

const customH4 = <Heading level="h4">Custom H4 Heading</Heading>;

<SearchBar headingText={customH4} {...props} />
`,language:"tsx"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(t.h2,{id:"form-components",children:"Form Components"}),`
`,e.jsx(t.h3,{id:"select-component",children:"Select Component"}),`
`,e.jsxs(t.p,{children:["To render an optional ",e.jsx(t.code,{children:"Select"}),` component, an object must be passed to the
`,e.jsx(t.code,{children:"selectProps"})," prop. It ",e.jsx(t.em,{children:"must"})," include ",e.jsx(t.code,{children:"name"}),", ",e.jsx(t.code,{children:"labelText"}),", and ",e.jsx(t.code,{children:"optionsData"}),`
properties. The `,e.jsx(t.code,{children:"id"}),", ",e.jsx(t.code,{children:"onChange"}),", and ",e.jsx(t.code,{children:"value"}),` properties are optional. The
`,e.jsx(t.code,{children:"labelText"})," value won't be rendered but will be used for its ",e.jsx(t.code,{children:"aria-label"}),`
attribute.`]}),`
`,e.jsxs(t.p,{children:["If you want to control the ",e.jsx(t.code,{children:"Select"})," component, you ",e.jsx(t.strong,{children:"must"})," pass the ",e.jsx(t.code,{children:"onChange"}),`
and `,e.jsx(t.code,{children:"value"})," props to the ",e.jsx(t.code,{children:"selectProps"}),` prop object. You must then control the
state of the selected value in your application. See the example at end of this
page for a full demonstration.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"optionsData"})," prop is an array of objects that contain the ",e.jsx(t.code,{children:"text"}),` and
`,e.jsx(t.code,{children:"value"})," properties."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," when ",e.jsx(t.code,{children:"Select"}),` options have a length greater than approximately 30
characters then the text will be truncated.`]}),`
`,e.jsx(o,{code:`
const optionsGroup = [
{ text: "Art", value: "art" },
{ text: "Bushes", value: "bushes" },
{ text: "Clothing", value: "clothing" },
{ text: "Flowers", value: "flowers" },
{ text: "Fossils", value: "fossils" },
{ text: "Fruits", value: "fruits" },
{ text: "Furniture", value: "furniture" },
{ text: "Songs", value: "songs" },
{ text: "Tools", value: "tools" },
{ text: "Villagers and their beloved pets", value: "villagers" },
];
`,language:"jsx"}),`
`,e.jsxs(t.p,{children:[`Add the rest of the properties to the object that will be passed to the
`,e.jsx(t.code,{children:"selectProps"})," prop."]}),`
`,e.jsx(o,{code:`
const selectProps = {
labelText: "Select a category",
name: "select-form-name",
onChange: (event) => {
  console.log(event.target.value);
},
optionsData: optionsGroup,
value: "Art",
};

// ...

<SearchBar
id="searchBar"
onSubmit={() => {}}
selectProps={selectProps}
// ...
/>
`,language:"jsx"}),`
`,e.jsx(t.h3,{id:"textinput-component",children:"TextInput Component"}),`
`,e.jsxs(t.p,{children:["To render the ",e.jsx(t.code,{children:"TextInput"}),` component, an object must be passed to the
`,e.jsx(t.code,{children:"textInputProps"})," prop. It ",e.jsx(t.em,{children:"must"})," include ",e.jsx(t.code,{children:"labelText"})," and ",e.jsx(t.code,{children:"name"}),` properties. The
`,e.jsx(t.code,{children:"labelText"})," value won't be rendered but will be used for its ",e.jsx(t.code,{children:"aria-label"}),`
attribute. Optional properties to pass include `,e.jsx(t.code,{children:"defaultValue"}),", ",e.jsx(t.code,{children:"id"}),", ",e.jsx(t.code,{children:"isClearable"}),`,
`,e.jsx(t.code,{children:"isClearableCallback"}),", ",e.jsx(t.code,{children:"max"}),", ",e.jsx(t.code,{children:"maxLength"}),", ",e.jsx(t.code,{children:"min"}),", ",e.jsx(t.code,{children:"onChange"}),", ",e.jsx(t.code,{children:"pattern"}),`,
`,e.jsx(t.code,{children:"placeholder"}),", and ",e.jsx(t.code,{children:"value"}),"."]}),`
`,e.jsx(o,{code:`
const textInputProps = {
defaultValue: "Horizon",
isClearable: true,
isClearableCallback: () => {},
labelText: "Item Search",
max: "10"
maxLength: "10",
min: "1",
name: "textInputName",
onChange: (event) => {
  console.log(event.target.value);
},
pattern: "[0-9]*",
placeholder: "Item Search",
value: "Horizon"
};
// ...
<SearchBar
id="searchBar"
onSubmit={() => {}}
textInputProps={textInputProps}
// ...
/>
`,language:"jsx"}),`
`,e.jsx(t.h4,{id:"isclearable-and-isclearablecallback",children:"isClearable and isClearableCallback"}),`
`,e.jsxs(t.p,{children:["In the ",e.jsx(t.code,{children:"textInputProps"})," object, set the ",e.jsx(t.code,{children:"isClearable"}),` prop to true to render
a button that clears the input value. If additional functionality is needed
when the button is clicked, pass a function to the `,e.jsx(t.code,{children:"isClearableCallback"})," prop."]}),`
`,e.jsxs(t.p,{children:[`The behavior for this feature is documented in the TextInput component's
`,e.jsx(t.a,{href:"../?path=/docs/components-form-elements-textinput--docs#isclearable-button",children:"isClearable Button"}),`
section.`]}),`
`,e.jsx(o,{code:`
<SearchBar
descriptionText="Begin typing for the clear button to appear. Once clicked, the value in the text input field will be cleared."
id="textInput-isClearable"
onSubmit={() => {}}
textInputProps={{
  isClearable: true,
  isClearableCallback: () => {
    console.log("Clear button clicked from the \`isClearableCallback\` prop.");
  },
  labelText: "Item Search",
  name: "textInputName",
  placeholder: "Item Search",
}}
/>
`,language:"jsx"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h3,{id:"custom-input-component",children:"Custom Input Component"}),`
`,e.jsxs(t.p,{children:["To render a custom input component, pass the component to the ",e.jsx(t.code,{children:"textInputElement"}),`
prop. This will render your custom input component such as an `,e.jsx(t.code,{children:"Autocomplete"}),`
component. Check the "Search Autocomplete" example for more details.`]}),`
`,e.jsx(o,{code:`
const textInputElement = <CustomInput {...props} />;
// ...
<SearchBar
id="searchBar"
onSubmit={() => {}}
textInputElement={textInputElement}
// ...
/>
`,language:"jsx"}),`
`,e.jsx(t.h3,{id:"button-component",children:"Button Component"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.code,{children:"Button"})," component will automatically be rendered for the ",e.jsx(t.code,{children:"SearchBar"}),`
component. If you want to pass a callback function to the `,e.jsx(t.code,{children:"Button"}),`, use the
`,e.jsx(t.code,{children:"buttonOnClick"})," prop."]}),`
`,e.jsxs(t.p,{children:["It's also possible to render the ",e.jsx(t.code,{children:"ButtonType.NoBrand"}),` variant style when the
`,e.jsx(t.code,{children:"noBrandButtonType"})," prop is set to ",e.jsx(t.code,{children:"true"}),". The ",e.jsx(t.code,{children:"ButtonType.Primary"}),` variant
style is used by default.`]}),`
`,e.jsx(t.h3,{id:"helpererrortext-component",children:"HelperErrorText Component"}),`
`,e.jsxs(t.p,{children:["To render the ",e.jsx(t.code,{children:"HelperErrorText"}),` component, pass a string or HTML to the
`,e.jsx(t.code,{children:"helperText"})," prop. For the invalid state when ",e.jsx(t.code,{children:"isInvalid"}),` is true, pass the
error string or HTML in the `,e.jsx(t.code,{children:"invalidText"})," prop."]}),`
`,e.jsx(o,{code:`
const helperText = "";
// ...
<SearchBar
id="searchBar"
onSubmit={() => {}}
helperText="Search for items in <b>Animal Crossing New Horizons</b>."
// ...
/>
`,language:"jsx"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(t.h2,{id:"search-autocomplete",children:"Search Autocomplete"}),`
`,e.jsxs(t.p,{children:["While the Design System does not implement an ",e.jsx(t.code,{children:"Autosuggest"})," or ",e.jsx(t.code,{children:"Autocomplete"}),`
component, it does show a pattern for using the `,e.jsx(t.code,{children:"react-autosuggest"}),` package.
In this example, we're using the `,e.jsx(t.code,{children:"react-autosuggest"}),` example found in the
Basic Autosuggest story as the main component inside the `,e.jsx(t.code,{children:"SearchBar"})," component."]}),`
`,e.jsxs(t.p,{children:["In order to render this custom input element in the ",e.jsx(t.code,{children:"SearchBar"}),` component, pass
it in the `,e.jsx(t.code,{children:"textInputElement"})," prop. Do not pass an object to the ",e.jsx(t.code,{children:"textInputProps"}),`
prop since the custom input component passed in `,e.jsx(t.code,{children:"textInputElement"}),` will take
precedence.`]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(t.h2,{id:"form-states",children:"Form States"}),`
`,e.jsxs(t.p,{children:["Use the Controls in the ",e.jsx(t.code,{children:"Basic"}),` example to see different states in real time.
Here are the same possible states of the `,e.jsx(t.code,{children:"SearchBar"})," component in static examples."]}),`
`,e.jsx(t.h3,{id:"error-state",children:"Error State"}),`
`,e.jsxs(t.p,{children:["For the error state, set the ",e.jsx(t.code,{children:"isInvalid"})," prop to ",e.jsx(t.code,{children:"true"}),`. This will update the
state for all its children. If you passed a custom input element, you must
handle the error state yourself.`]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(t.h3,{id:"disabled-state",children:"Disabled State"}),`
`,e.jsxs(t.p,{children:["For the disabled state, set the ",e.jsx(t.code,{children:"isDisabled"})," prop to ",e.jsx(t.code,{children:"true"}),`. This will update
the state for all its children. If you passed a custom input element, you must
handle the disabled state yourself.`]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(t.h2,{id:"heading-and-description-text",children:"Heading and Description Text"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"descriptionText"})," and ",e.jsx(t.code,{children:"headingText"}),` props to render a heading and
description above the main `,e.jsx(t.code,{children:"SearchBar"})," form component."]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(t.h2,{id:"textinput-and-onsubmit-values",children:"TextInput and onSubmit Values"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"NOTE: open the browser console to see the values logged in the example below."})}),`
`,e.jsxs(t.p,{children:["It is possible to get certain values from the ",e.jsx(t.code,{children:"SearchBar"}),` component by passing
callback functions as props.`]}),`
`,e.jsxs(t.p,{children:["The keyword value in the ",e.jsx(t.code,{children:"TextInput"}),` component can be accessed by passing a
function to the `,e.jsx(t.code,{children:"onChange"})," property in the ",e.jsx(t.code,{children:"textInputProp"}),` prop. This is useful
for validating the keyword the user entered.`]}),`
`,e.jsx(t.p,{children:"To get values when the form is submitted, you must:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["pass values for the ",e.jsx(t.code,{children:"name"})," property in the ",e.jsx(t.code,{children:"selectProps"})," and ",e.jsx(t.code,{children:"textInputProps"}),`
prop objects.`]}),`
`,e.jsxs(t.li,{children:["get the values returned in the ",e.jsx(t.code,{children:"onSubmit"})," callback function."]}),`
`]}),`
`,e.jsxs(t.p,{children:["In the following example, the ",e.jsx(t.code,{children:"name"})," for the ",e.jsx(t.code,{children:"Select"}),` is "selectName" and the
`,e.jsx(t.code,{children:"name"})," for the ",e.jsx(t.code,{children:"TextInput"}),' is "textInputName". The ',e.jsx(t.code,{children:"onSubmit"}),` function can get
the submitted values through the `,e.jsx(t.code,{children:"event"}),` object. In the example below, the
values can be retrieved as `,e.jsx(t.code,{children:"event.target.selectName.value"}),` and
`,e.jsx(t.code,{children:"event.target.textInputName.value"}),"."]}),`
`,e.jsx(o,{code:`
export function SearchBarValueExample() {
const [selectValue, setSelectValue] = React.useState("Tools");
const selectOnChange = (event) => {
  console.log(\`onChange Select value: \${event.target.value}\`);
  setSelectValue(event.target.value);
};
const textInputOnChange = (event) => {
  console.log(\`onChange TextInput value: \${event.target.value}\`);
};
const onSubmit = (event) => {
  event.preventDefault();
  console.log(\`onSubmit Select value: \${event.target.selectName.value}\`);
  console.log(\`onSubmit TextInput value \${event.target.textInputName.value}\`);
};
return (
  <SearchBar
    helperText="Search for an item"
    invalidText="Could not find the item :("
    id="example-1"
    onSubmit={onSubmit}
    selectProps={{
      labelText: "Select a category",
      name: "selectName",
      onChange: selectOnChange,
      optionsData: optionsGroup,
      value: selectValue,
    }}
    textInputProps={{
      labelText: "Item Search",
      name: "textInputName",
      onChange: textInputOnChange,
      placeholder: "Item Search",
    }}
  />
);
}
`,language:"jsx"}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(t.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:y})]})}function B(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(c,{...r})}):c(r)}export{B as default};
