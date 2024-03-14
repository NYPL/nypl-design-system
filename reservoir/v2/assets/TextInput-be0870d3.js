import{j as t,a as n,F as s}from"./jsx-runtime-fdf4db99.js";import{M as p,D as u,C as i,A as m,b as l}from"./index-445595fc.js";import{T as a,W as d,L as b,B as f,i as g,C as x,N as v,A as T,H as w,a as y}from"./TextInput.stories-29f2b5a9.js";import{C}from"./ComponentChangelogTable-310bbbfd.js";import{L as r}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./TextInput-70995d87.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./HelperErrorText-55c57f50.js";import"./Label-d380cca8.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./List-582282a6.js";import"./Table-64c6aa77.js";const L=[{date:"2023-11-09",version:"2.1.2",type:"Update",affects:["Accessibility"],notes:['Added the `autoComplete` prop for setting the "autocomplete" attribute manually.']},{date:"2023-10-18",version:"2.1.0",type:"Bug Fix",affects:["Accessibility"],notes:["Updated so the `aria-describedby` value is not overwritten as 'undefined' when `TextInput` is part of the `DatePicker` component."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size and font color."]}];function c(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3"},h(),o.components);return n(s,{children:[t(p,{of:a}),`
`,t(e.h1,{id:"textinput",children:"TextInput"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.22.0"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"2.1.2"})})]})]})]}),`
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
`,t(r,{href:"#autocomplete",target:"_self",children:"Autocomplete"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#labelling-variations",target:"_self",children:"Labelling Variations"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#browser-states",target:"_self",children:"Browser States"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#isclearable-button",target:"_self",children:"isClearable Button"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#number-type",target:"_self",children:"Number Type"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#html-in-helper-text",target:"_self",children:"HTML in Helper Text"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#textarea",target:"_self",children:"Textarea"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(u,{of:a}),`
`,n(e.p,{children:[`This component renders a text input form element. See below for configuration
information. For optimal accessibility, the `,t(e.code,{children:"labelText"}),` property is a required
prop, regardless of the label visibility. Additionally, while the `,t(e.code,{children:"id"}),` prop is
optional, a unique `,t(e.code,{children:"id"}),` attribute is necessary for accessibility. If the prop
is left blank, a value will be generated for you.`]}),`
`,t(e.h2,{id:"component-props",children:"Component Props"}),`
`,t(i,{of:d}),`
`,t(m,{of:d}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"TextInput"})," component renders an HTML ",t(e.code,{children:"<input>"}),` element which is accessible
via keyboard and screen reader. The `,t(e.code,{children:"aria-required"})," and ",t(e.code,{children:"required"}),` attributes are
set with the `,t(e.code,{children:"isRequired"})," prop. The ",t(e.code,{children:"aria-disabled"})," and ",t(e.code,{children:"disabled"}),` attributes are
set with the `,t(e.code,{children:"isDisabled"})," prop. The ",t(e.code,{children:"aria-invalid"})," is set with the ",t(e.code,{children:"isInvalid"}),`
prop.`]}),`
`,n(e.p,{children:["Internally, a ",t(e.code,{children:"Label"})," is associated with the ",t(e.code,{children:"<input>"})," element. When ",t(e.code,{children:"showLabel"}),`
is set to false, the `,t(e.code,{children:"<input>"})," element's ",t(e.code,{children:"aria-label"}),` attribute is set to the
required `,t(e.code,{children:"labelText"})," value. Some components that use ",t(e.code,{children:"TextInput"}),", like ",t(e.code,{children:"DatePicker"}),`,
give the `,t(e.code,{children:"<input>"})," an ",t(e.code,{children:"aria-label"})," regardless of whether ",t(e.code,{children:"showLabel"}),` is true or false.
This is because interacting with these elements is not as obvious to those using
screen readers and more information is necessary.`]}),`
`,n(e.p,{children:["The ",t(e.code,{children:"helperText"})," and the ",t(e.code,{children:"invalidText"})," are associated with the ",t(e.code,{children:"<input>"}),` element
through the `,t(e.code,{children:"aria-describedby"})," attribute."]}),`
`,n(e.p,{children:["When the ",t(e.code,{children:"isClearable"})," prop is set to ",t(e.code,{children:"true"}),`, as text is added to the input
field a close button is rendered to clear the input value. Once the close button
is clicked, the input value will be cleared, the close button will become hidden,
and focus will be set to the input element.`]}),`
`,n(e.p,{children:["When the ",t(e.code,{children:"type"})," prop is set to ",t(e.code,{children:'"textarea"'}),", the ",t(e.code,{children:"<textarea>"}),` element
is rendered instead of the `,t(e.code,{children:"<input>"}),` element. This element follows all the same
accessibility rules described above.`]}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN input: The Input (Form Input) element"})}),`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN textarea: The Textarea element"})}),`
`,t(e.li,{children:t(e.a,{href:"https://chakra-ui.com/docs/components/form/input",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Input"})}),`
`,t(e.li,{children:t(e.a,{href:"https://chakra-ui.com/docs/components/form/textarea",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Textarea"})}),`
`]}),`
`,t(e.h2,{id:"autocomplete",children:"Autocomplete"}),`
`,n(e.p,{children:["The native HTML ",t(e.code,{children:"autocomplete"}),` attribute is another tool that can be used to
improve accessibility. The `,t(e.code,{children:"autocomplete"}),` attribute improves the browser's
ability to pre-populate form fields with user-preferred values and makes inputs
easier and more efficient to complete for all users. For ease of use, the
`,t(e.code,{children:"TextInput"}),` component provides a few methods for incorporating the
`,t(e.code,{children:"autocomplete"})," attribute."]}),`
`,n(e.p,{children:["If the ",t(e.code,{children:"type"})," prop is set to ",t(e.code,{children:'"email"'}),", ",t(e.code,{children:'"tel"'}),", or ",t(e.code,{children:'"url"'}),`, the component will
automatically add the `,t(e.code,{children:"autocomplete"})," attribute with an appropriate value."]}),`
`,n(e.p,{children:["Additionally, the ",t(e.code,{children:"autoComplete"})," prop can be used to set the ",t(e.code,{children:"autocomplete"}),`
attribute manually. When the `,t(e.code,{children:"autoComplete"}),` prop is set, its value will be used
to set the `,t(e.code,{children:"autocomplete"}),` attribute on the input field. Furthermore, if the
`,t(e.code,{children:"type"})," prop is set to ",t(e.code,{children:'"email"'}),", ",t(e.code,{children:'"tel"'}),", or ",t(e.code,{children:'"url"'}),`, the value of the
`,t(e.code,{children:"autoComplete"}),` prop will override the value automatically added by the
component.`]}),`
`,n(e.p,{children:["Using the ",t(e.code,{children:"autoComplete"}),` prop can be helpful when it is necessary to set
`,t(e.code,{children:"autocomplete"}),` attribute values that are not automatically added by the
component or when privacy is a concern. For example, setting the `,t(e.code,{children:"autoComplete"}),`
prop to `,t(e.code,{children:'"off"'}),` will disable the native browser based autocomplete
functionality.`]}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN HTML attribute: Autocomplete"})}),`
`]}),`
`,t(e.h2,{id:"labelling-variations",children:"Labelling Variations"}),`
`,n(e.p,{children:["A TextInput can be rendered with or without visible labels. When ",t(e.code,{children:"showLabel"}),` is
set to `,t(e.code,{children:"false"}),", an ",t(e.code,{children:"aria-label"}),` attribute is added to the input/textarea element
to maintain accessibility. If the component needs to be required, the
`,t(e.code,{children:"showRequiredLabel"}),` prop can be used to show or hide the "(Required)" text
within the `,t(e.code,{children:"label"})," element."]}),`
`,t(i,{of:b}),`
`,t(e.h2,{id:"browser-states",children:"Browser States"}),`
`,t(i,{of:f}),`
`,t(e.h2,{id:"isclearable-button",children:"isClearable Button"}),`
`,n(e.p,{children:["Set the ",t(e.code,{children:"isClearable"})," prop to ",t(e.code,{children:"true"}),` to render a button that clears the input
value. This close button will render when the input has a value and disappear
when the input is empty, including after it is clicked.`]}),`
`,n(e.p,{children:[`This button has visually hidden text, a "close" icon, and renders on top
of the input field on the right side. This clear button does not render when
the `,t(e.code,{children:"type"})," prop is set to ",t(e.code,{children:'"textarea"'}),"."]}),`
`,n(e.p,{children:["Note: This works best when the ",t(e.code,{children:"TextInput"})," is used as an uncontrolled component."]}),`
`,t(i,{of:g}),`
`,t(e.h3,{id:"controlled-isclearablecallback-example",children:"Controlled isClearableCallback Example"}),`
`,n(e.p,{children:["A ",t(e.code,{children:"TextInput"})," component is controlled when the ",t(e.code,{children:"value"})," and ",t(e.code,{children:"onChange"}),` props are
set. For a controlled component, the `,t(e.code,{children:"isClearableCallback"}),` prop can be used to
clear the input value in the consuming application. This callback is only called
when the close button is clicked.`]}),`
`,t(l,{code:`
// ExampleControlled.js
export const App = () => {
  const [value, setValue] = React.useState("");
  return (
    <TextInput
      id="isClearable-controlled-example"
      isClearable
      isClearableCallback={() => setValue("")}
      labelText="What is your favorite color?"
      onChange={(e) => setValue(e.target.value)}
      placeholder="i.e. blue, green, etc."
      value={value}
    />
  );
};
`,language:"jsx"}),`
`,t(i,{of:x}),`
`,t(e.h2,{id:"number-type",children:"Number Type"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"TextInput"}),` component can be configured to render a number input by setting
`,t(e.code,{children:'type="number"'}),". In this input type, the ",t(e.code,{children:"maxLength"}),` prop does not restrict the
length of the number that is passed to the input. This is the expected behavior
as the native HTML input and `,t(e.code,{children:"maxlength"})," attribute behave this way."]}),`
`,n(e.p,{children:["For this type, the ",t(e.code,{children:"min"})," and ",t(e.code,{children:"max"}),` props do restrict the value of the number
input that is passed. This can be seen by using the up and down arrows to
increase or decrease the number value, respectively. However, if the `,t(e.code,{children:"max"}),` prop
is set to "200", for example, the user can still enter a number such as "400".
The consuming application must handle validating the entered number value.`]}),`
`,n(e.p,{children:["If the ",t(e.code,{children:"min"})," prop value is greater than the ",t(e.code,{children:"max"}),` prop value, it will trigger
the invalid state.`]}),`
`,t(i,{of:v}),`
`,t(e.h3,{id:"alternate-number-pattern",children:"Alternate Number Pattern"}),`
`,n(e.p,{children:[`Another pattern for entering numbers in a restrictive way is to use the
`,t(e.code,{children:"maxLength"})," and ",t(e.code,{children:"pattern"}),` props. Together, these props can be set to define how
many digits and what characters are allowed. For example, if a zip code is
required, the `,t(e.code,{children:"maxLength"}),' prop can be set to "5" and the ',t(e.code,{children:"pattern"}),` prop can be
set to `,t(e.code,{children:'"[0-9]\\*"'}),` to allow only numbers to be entered and limit the number of
characters to 5.`]}),`
`,n(e.p,{children:["Note that the ",t(e.code,{children:"type"}),` prop is not set to "number" in this example and that the
consuming application must handle validating the value entered. Browsers will
also provide their own validation for the input.`]}),`
`,t(l,{code:`
<TextInput
  helperText="Enter a 5-digit zip code."
  id="number-pattern"
  labelText="Enter a zip code"
  maxLength={5}
  pattern="[0-9]*"
  placeholder="i.e. 10018"
/>
`,language:"jsx"}),`
`,t(i,{of:T}),`
`,t(e.h2,{id:"html-in-helper-text",children:"HTML in Helper Text"}),`
`,n(e.p,{children:["HTML can be passed into the ",t(e.code,{children:"helperText"})," prop as a string or HTML."]}),`
`,t(l,{code:`
helperText="Choose <b>wisely!</b>"
// or
helperText={<>Choose <b>wisely!</b></>}
`,language:"jsx"}),`
`,t(i,{of:w}),`
`,t(e.h2,{id:"textarea",children:"Textarea"}),`
`,n(e.p,{children:["The TextInput component includes a multiline ",t(e.code,{children:"textarea"}),` form field. To render a
`,t(e.code,{children:"textarea"})," element, pass ",t(e.code,{children:'"textarea"'})," for the ",t(e.code,{children:"type"}),` prop. All the variations
described above are available for the `,t(e.code,{children:"textarea"})," option."]}),`
`,t(i,{of:y}),`
`,t(e.h2,{id:"changelog",children:"Changelog"}),`
`,t(C,{changelogData:L})]})}function ce(o={}){const{wrapper:e}=Object.assign({},h(),o.components);return e?t(e,Object.assign({},o,{children:t(c,o)})):c(o)}export{ce as default};
//# sourceMappingURL=TextInput-be0870d3.js.map
