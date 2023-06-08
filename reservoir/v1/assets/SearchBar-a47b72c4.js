import{j as t,a as n,F as s}from"./jsx-runtime-09ad29cb.js";import{M as p,D as u,C as o,A as m,b as l}from"./index-5d3bb37f.js";import{S as i,W as a,i as b,H as f,a as g,E as x,D as v,b as S,c as T}from"./SearchBar.stories-088657df.js";import{L as r}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./SearchBar-3a276fc1.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./Select-43c64995.js";import"./Label-2b2058d3.js";import"./utils-acca7d12.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./TextInput-3683470d.js";import"./index-58d3fd43.js";function d(c){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",em:"em",strong:"strong",h4:"h4"},h(),c.components);return n(s,{children:[t(p,{of:i}),`
`,t(e.h1,{id:"searchbar",children:"SearchBar"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.0.4"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.5.1"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#form-components",target:"_self",children:"Form Components"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#search-autocomplete",target:"_self",children:"Search Autocomplete"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#form-states",target:"_self",children:"Form States"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#heading-and-description-text",target:"_self",children:"Heading and Description Text"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#textinput-and-onsubmit-values",target:"_self",children:"TextInput and onSubmit Values"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(u,{of:i}),`
`,n(e.p,{children:["The main wrapper element that is rendered is a ",t(e.code,{children:"<form>"}),` DOM element. All the
props passed to `,t(e.code,{children:"SearchBar"})," will apply to the ",t(e.code,{children:"<form>"}),` element and its children.
The `,t(e.code,{children:"SearchBar"})," component will render a ",t(e.code,{children:"Select"}),` component (optional),
`,t(e.code,{children:"TextInput"})," component, ",t(e.code,{children:"Button"})," component, and ",t(e.code,{children:"HelperErrorText"}),` component
based on the required props.`]}),`
`,n(e.p,{children:["The ",t(e.code,{children:"Select"}),` dropdown narrows the search within a specific category, typically
title or author. Toggle the `,t(e.code,{children:"Select"})," through the Controls."]}),`
`,n(e.p,{children:["Note: The labels for the ",t(e.code,{children:"Select"})," and ",t(e.code,{children:"TextInput"}),` components are not visible but
aria-labels are used to make these children components accessible.`]}),`
`,t(e.h2,{id:"component-props",children:"Component Props"}),`
`,t(o,{of:a}),`
`,t(m,{of:a}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"SearchBar"})," component is implemented with Reservoir ",t(e.code,{children:"Select"}),", ",t(e.code,{children:"TextInput"}),`,
and `,t(e.code,{children:"Button"}),` accessible components. This a "complete" component that renders an
HTML `,t(e.code,{children:"<form>"})," element that is submitted with a ",t(e.code,{children:"<button>"})," element of ",t(e.code,{children:'type="submit"'}),`.
The `,t(e.code,{children:"<form>"})," element also has a ",t(e.code,{children:'role="search"'}),` attribute that allows
screenreaders to pick up this entire search form.`]}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"../?path=/docs/components-form-elements-select--docs",children:"Reservoir Select"})}),`
`,t(e.li,{children:t(e.a,{href:"../?path=/docs/components-form-elements-textinput--docs",children:"Reservoir TextInput"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.a11ymatters.com/pattern/accessible-search/",target:"_blank",rel:"nofollow noopener noreferrer",children:"a11ymatters Accessible Search Form"})}),`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/search_role",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN ARIA: search role"})}),`
`]}),`
`,t(e.h2,{id:"form-components",children:"Form Components"}),`
`,t(e.h3,{id:"select-component",children:"Select Component"}),`
`,n(e.p,{children:["To render an optional ",t(e.code,{children:"Select"}),` component, an object must be passed to the
`,t(e.code,{children:"selectProps"})," prop. It ",t(e.em,{children:"must"})," include ",t(e.code,{children:"name"}),", ",t(e.code,{children:"labelText"}),", and ",t(e.code,{children:"optionsData"}),`
properties. The `,t(e.code,{children:"id"}),", ",t(e.code,{children:"onChange"}),", and ",t(e.code,{children:"value"}),` properties are optional. The
`,t(e.code,{children:"labelText"})," value won't be rendered but will be used for its ",t(e.code,{children:"aria-label"}),`
attribute.`]}),`
`,n(e.p,{children:["If you want to control the ",t(e.code,{children:"Select"})," component, you ",t(e.strong,{children:"must"})," pass the ",t(e.code,{children:"onChange"}),`
and `,t(e.code,{children:"value"})," props to the ",t(e.code,{children:"selectProps"}),` prop object. You must then control the
state of the selected value in your application. See the example at end of this
page for a full demonstration.`]}),`
`,n(e.p,{children:["The ",t(e.code,{children:"optionsData"})," prop is an array of objects that contain the ",t(e.code,{children:"text"}),` and
`,t(e.code,{children:"value"})," properties."]}),`
`,t(l,{code:`
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
`,n(e.p,{children:[`Add the rest of the properties to the object that will be passed to the
`,t(e.code,{children:"selectProps"})," prop."]}),`
`,t(l,{code:`
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
`,t(e.h3,{id:"textinput-component",children:"TextInput Component"}),`
`,n(e.p,{children:["To render the ",t(e.code,{children:"TextInput"}),` component, an object must be passed to the
`,t(e.code,{children:"textInputProps"})," prop. It ",t(e.em,{children:"must"})," include ",t(e.code,{children:"labelText"})," and ",t(e.code,{children:"name"}),` properties. The
`,t(e.code,{children:"labelText"})," value won't be rendered but will be used for its ",t(e.code,{children:"aria-label"}),`
attribute. Optional properties to pass include `,t(e.code,{children:"defaultValue"}),", ",t(e.code,{children:"id"}),", ",t(e.code,{children:"isClearable"}),`,
`,t(e.code,{children:"isClearableCallback"}),", ",t(e.code,{children:"max"}),", ",t(e.code,{children:"maxLength"}),", ",t(e.code,{children:"min"}),", ",t(e.code,{children:"onChange"}),", ",t(e.code,{children:"pattern"}),`,
`,t(e.code,{children:"placeholder"}),", and ",t(e.code,{children:"value"}),"."]}),`
`,t(l,{code:`
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
`,t(e.h4,{id:"isclearable-and-isclearablecallback",children:"isClearable and isClearableCallback"}),`
`,n(e.p,{children:["In the ",t(e.code,{children:"textInputProps"})," object, set the ",t(e.code,{children:"isClearable"}),` prop to true to render
a button that clears the input value. If additional functionality is needed
when the button is clicked, pass a function to the `,t(e.code,{children:"isClearableCallback"})," prop."]}),`
`,n(e.p,{children:[`The behavior for this feature is documented in the TextInput component's
`,t(e.a,{href:"../?path=/docs/components-form-elements-textinput--docs#isclearable-button",children:"isClearable Button"}),`
section.`]}),`
`,t(l,{code:`
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
`,t(o,{of:b}),`
`,t(e.h3,{id:"custom-input-component",children:"Custom Input Component"}),`
`,n(e.p,{children:["To render a custom input component, pass the component to the ",t(e.code,{children:"textInputElement"}),`
prop. This will render your custom input component such as an `,t(e.code,{children:"Autocomplete"}),`
component. Check the "Search Autocomplete" example for more details.`]}),`
`,t(l,{code:`
const textInputElement = <CustomInput {...props} />;
// ...
<SearchBar
  id="searchBar"
  onSubmit={() => {}}
  textInputElement={textInputElement}
  // ...
/>
`,language:"jsx"}),`
`,t(e.h3,{id:"button-component",children:"Button Component"}),`
`,n(e.p,{children:["A ",t(e.code,{children:"Button"})," component will automatically be rendered for the ",t(e.code,{children:"SearchBar"}),`
component. If you want to pass a callback function to the `,t(e.code,{children:"Button"}),`, use the
`,t(e.code,{children:"buttonOnClick"})," prop."]}),`
`,n(e.p,{children:["It's also possible to render the ",t(e.code,{children:"ButtonType.NoBrand"}),` variant style when the
`,t(e.code,{children:"noBrandButtonType"})," prop is set to ",t(e.code,{children:"true"}),". The ",t(e.code,{children:"ButtonType.Primary"}),` variant
style is used by default.`]}),`
`,t(e.h3,{id:"helpererrortext-component",children:"HelperErrorText Component"}),`
`,n(e.p,{children:["To render the ",t(e.code,{children:"HelperErrorText"}),` component, pass a string or HTML to the
`,t(e.code,{children:"helperText"})," prop. For the invalid state when ",t(e.code,{children:"isInvalid"}),` is true, pass the
error string or HTML in the `,t(e.code,{children:"invalidText"})," prop."]}),`
`,t(l,{code:`
const helperText = "";
// ...
<SearchBar
  id="searchBar"
  onSubmit={() => {}}
  helperText="Search for items in <b>Animal Crossing New Horizons</b>."
  // ...
/>
`,language:"jsx"}),`
`,t(o,{of:f}),`
`,t(e.h2,{id:"search-autocomplete",children:"Search Autocomplete"}),`
`,n(e.p,{children:["While the Design System does not implement an ",t(e.code,{children:"Autosuggest"})," or ",t(e.code,{children:"Autocomplete"}),`
component, it does show a pattern for using the `,t(e.code,{children:"react-autosuggest"}),` package.
In this example, we're using the `,t(e.code,{children:"react-autosuggest"}),` example found in the
Basic Autosuggest story as the main component inside the `,t(e.code,{children:"SearchBar"})," component."]}),`
`,n(e.p,{children:["In order to render this custom input element in the ",t(e.code,{children:"SearchBar"}),` component, pass
it in the `,t(e.code,{children:"textInputElement"})," prop. Do not pass an object to the ",t(e.code,{children:"textInputProps"}),`
prop since the custom input component passed in `,t(e.code,{children:"textInputElement"}),` will take
precedence.`]}),`
`,t(o,{of:g}),`
`,t(e.h2,{id:"form-states",children:"Form States"}),`
`,n(e.p,{children:["Use the Controls in the ",t(e.code,{children:"Basic"}),` example to see different states in real time.
Here are the same possible states of the `,t(e.code,{children:"SearchBar"})," component in static examples."]}),`
`,t(e.h3,{id:"error-state",children:"Error State"}),`
`,n(e.p,{children:["For the error state, set the ",t(e.code,{children:"isInvalid"})," prop to ",t(e.code,{children:"true"}),`. This will update the
state for all its children. If you passed a custom input element, you must
handle the error state yourself.`]}),`
`,t(o,{of:x}),`
`,t(e.h3,{id:"disabled-state",children:"Disabled State"}),`
`,n(e.p,{children:["For the disabled state, set the ",t(e.code,{children:"isDisabled"})," prop to ",t(e.code,{children:"true"}),`. This will update
the state for all its children. If you passed a custom input element, you must
handle the disabled state yourself.`]}),`
`,t(o,{of:v}),`
`,t(e.h2,{id:"heading-and-description-text",children:"Heading and Description Text"}),`
`,n(e.p,{children:["Use the ",t(e.code,{children:"descriptionText"})," and ",t(e.code,{children:"headingText"}),` props to render a heading and
description above the main `,t(e.code,{children:"SearchBar"})," form component."]}),`
`,t(o,{of:S}),`
`,t(e.h2,{id:"textinput-and-onsubmit-values",children:"TextInput and onSubmit Values"}),`
`,t(e.p,{children:t(e.em,{children:"NOTE: open the browser console to see the values logged in the example below."})}),`
`,n(e.p,{children:["It is possible to get certain values from the ",t(e.code,{children:"SearchBar"}),` component by passing
callback functions as props.`]}),`
`,n(e.p,{children:["The keyword value in the ",t(e.code,{children:"TextInput"}),` component can be accessed by passing a
function to the `,t(e.code,{children:"onChange"})," property in the ",t(e.code,{children:"textInputProp"}),` prop. This is useful
for validating the keyword the user entered.`]}),`
`,t(e.p,{children:"To get values when the form is submitted, you must:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["pass values for the ",t(e.code,{children:"name"})," property in the ",t(e.code,{children:"selectProps"})," and ",t(e.code,{children:"textInputProps"}),`
prop objects.`]}),`
`,n(e.li,{children:["get the values returned in the ",t(e.code,{children:"onSubmit"})," callback function."]}),`
`]}),`
`,n(e.p,{children:["In the following example, the ",t(e.code,{children:"name"})," for the ",t(e.code,{children:"Select"}),` is "selectName" and the
`,t(e.code,{children:"name"})," for the ",t(e.code,{children:"TextInput"}),' is "textInputName". The ',t(e.code,{children:"onSubmit"}),` function can get
the submitted values through the `,t(e.code,{children:"event"}),` object. In the example below, the
values can be retrieved as `,t(e.code,{children:"event.target.selectName.value"}),` and
`,t(e.code,{children:"event.target.textInputName.value"}),"."]}),`
`,t(l,{code:`
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
`,t(o,{of:T})]})}function le(c={}){const{wrapper:e}=Object.assign({},h(),c.components);return e?t(e,Object.assign({},c,{children:t(d,c)})):d(c)}export{le as default};
//# sourceMappingURL=SearchBar-a47b72c4.js.map
