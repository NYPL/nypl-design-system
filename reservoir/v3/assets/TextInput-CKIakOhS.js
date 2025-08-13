import{u as d,j as e,M as h,L as n,bv as p,C as s,bw as x,B as o,J as u,S as r}from"./iframe-CFLVJZOZ.js";import{T as l,W as a,L as j,B as b,i as m,C as f,F as g,N as y,A as v,H as w,a as T}from"./TextInput.stories-Bld61kfs.js";import{C}from"./ComponentChangelogTable-DvY0SxTs.js";import"./storybookUtils-BmTl87w5.js";const I=[{date:"2025-04-10",version:"3.6.0",type:"Update",affects:["Functionality","Styles"],notes:["Does not render the clearable button if `isDisabled` is true.","Updates placeholder text color for dark mode."]},{date:"2025-03-20",version:"3.5.5",type:"Update",affects:["Functionality"],notes:["Updates the `labelText` prop type to `string | JSX.Element`"]},{date:"2024-12-19",version:"3.5.1",type:"Bug Fix",affects:["Functionality","Accessibility"],notes:["Fixes conflicting internal and external ref props and values for the clearable button focus management."]},{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase"]},{date:"2024-05-23",version:"3.1.4",type:"Update",affects:["Accessibility"],notes:["Updates how aria-describedby is set."]},{date:"2024-04-11",version:"3.1.0",type:"Update",affects:["Styles"],notes:["Reduced the spacing between the field label and the field itself."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-11-09",version:"2.1.2",type:"Update",affects:["Accessibility"],notes:['Added the `autoComplete` prop for setting the "autocomplete" attribute manually.']},{date:"2023-10-18",version:"2.1.0",type:"Bug Fix",affects:["Accessibility"],notes:["Updated so the `aria-describedby` value is not overwritten as 'undefined' when `TextInput` is part of the `DatePicker` component."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size and font color."]}];function c(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l}),`
`,e.jsx(t.h1,{id:"textinput",children:"TextInput"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Component Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"0.22.0"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.6.0"})})]})]})]}),`
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
`,e.jsx(n,{href:"#autocomplete",target:"_self",children:"Autocomplete"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#labelling-variations",target:"_self",children:"Labelling Variations"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#browser-states",target:"_self",children:"Browser States"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#isclearable-button",target:"_self",children:"isClearable Button"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#number-type",target:"_self",children:"Number Type"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#html-in-helper-text",target:"_self",children:"HTML in Helper Text"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#textarea",target:"_self",children:"Textarea"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(p,{of:l}),`
`,e.jsxs(t.p,{children:[`This component renders a text input form element. See below for configuration
information. For optimal accessibility, the `,e.jsx(t.code,{children:"labelText"}),` property is a required
prop, regardless of the label visibility. Additionally, while the `,e.jsx(t.code,{children:"id"}),` prop is
optional, a unique `,e.jsx(t.code,{children:"id"}),` attribute is necessary for accessibility. If the prop
is left blank, a value will be generated for you.`]}),`
`,e.jsx(t.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TextInput"})," component renders an HTML ",e.jsx(t.code,{children:"<input>"}),` element which is accessible
via keyboard and screen reader. The `,e.jsx(t.code,{children:"aria-required"})," and ",e.jsx(t.code,{children:"required"}),` attributes are
set with the `,e.jsx(t.code,{children:"isRequired"})," prop. The ",e.jsx(t.code,{children:"aria-disabled"})," and ",e.jsx(t.code,{children:"disabled"}),` attributes are
set with the `,e.jsx(t.code,{children:"isDisabled"})," prop. The ",e.jsx(t.code,{children:"aria-invalid"})," is set with the ",e.jsx(t.code,{children:"isInvalid"}),`
prop.`]}),`
`,e.jsxs(t.p,{children:["Internally, a ",e.jsx(t.code,{children:"Label"})," is associated with the ",e.jsx(t.code,{children:"<input>"})," element. When ",e.jsx(t.code,{children:"showLabel"}),`
is set to false, the `,e.jsx(t.code,{children:"<input>"})," element's ",e.jsx(t.code,{children:"aria-label"}),` attribute is set to the
required `,e.jsx(t.code,{children:"labelText"})," value. Some components that use ",e.jsx(t.code,{children:"TextInput"}),", like ",e.jsx(t.code,{children:"DatePicker"}),`,
give the `,e.jsx(t.code,{children:"<input>"})," an ",e.jsx(t.code,{children:"aria-label"})," regardless of whether ",e.jsx(t.code,{children:"showLabel"}),` is true or false.
This is because interacting with these elements is not as obvious to those using
screen readers and more information is necessary.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"helperText"})," and the ",e.jsx(t.code,{children:"invalidText"})," are associated with the ",e.jsx(t.code,{children:"<input>"}),` element
through the `,e.jsx(t.code,{children:"aria-describedby"})," attribute."]}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"isClearable"})," prop is set to ",e.jsx(t.code,{children:"true"}),`, as text is added to the input
field a close button is rendered to clear the input value. Once the close button
is clicked, the input value will be cleared, the close button will become hidden,
and focus will be set to the input element.`]}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.code,{children:"type"})," prop is set to ",e.jsx(t.code,{children:'"textarea"'}),", the ",e.jsx(t.code,{children:"<textarea>"}),` element
is rendered instead of the `,e.jsx(t.code,{children:"<input>"}),` element. This element follows all the same
accessibility rules described above.`]}),`
`,e.jsx(t.p,{children:"Resources:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",rel:"nofollow",children:"MDN input: The Input (Form Input) element"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",rel:"nofollow",children:"MDN textarea: The Textarea element"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://chakra-ui.com/docs/components/form/input",rel:"nofollow",children:"Chakra UI Input"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://chakra-ui.com/docs/components/form/textarea",rel:"nofollow",children:"Chakra UI Textarea"})}),`
`]}),`
`,e.jsx(t.h2,{id:"autocomplete",children:"Autocomplete"}),`
`,e.jsxs(t.p,{children:["The native HTML ",e.jsx(t.code,{children:"autocomplete"}),` attribute is another tool that can be used to
improve accessibility. The `,e.jsx(t.code,{children:"autocomplete"}),` attribute improves the browser's
ability to pre-populate form fields with user-preferred values and makes inputs
easier and more efficient to complete for all users. For ease of use, the
`,e.jsx(t.code,{children:"TextInput"}),` component provides a few methods for incorporating the
`,e.jsx(t.code,{children:"autocomplete"})," attribute."]}),`
`,e.jsxs(t.p,{children:["If the ",e.jsx(t.code,{children:"type"})," prop is set to ",e.jsx(t.code,{children:'"email"'}),", ",e.jsx(t.code,{children:'"tel"'}),", or ",e.jsx(t.code,{children:'"url"'}),`, the component will
automatically add the `,e.jsx(t.code,{children:"autocomplete"})," attribute with an appropriate value."]}),`
`,e.jsxs(t.p,{children:["Additionally, the ",e.jsx(t.code,{children:"autoComplete"})," prop can be used to set the ",e.jsx(t.code,{children:"autocomplete"}),`
attribute manually. When the `,e.jsx(t.code,{children:"autoComplete"}),` prop is set, its value will be used
to set the `,e.jsx(t.code,{children:"autocomplete"}),` attribute on the input field. Furthermore, if the
`,e.jsx(t.code,{children:"type"})," prop is set to ",e.jsx(t.code,{children:'"email"'}),", ",e.jsx(t.code,{children:'"tel"'}),", or ",e.jsx(t.code,{children:'"url"'}),`, the value of the
`,e.jsx(t.code,{children:"autoComplete"}),` prop will override the value automatically added by the
component.`]}),`
`,e.jsxs(t.p,{children:["Using the ",e.jsx(t.code,{children:"autoComplete"}),` prop can be helpful when it is necessary to set
`,e.jsx(t.code,{children:"autocomplete"}),` attribute values that are not automatically added by the
component or when privacy is a concern. For example, setting the `,e.jsx(t.code,{children:"autoComplete"}),`
prop to `,e.jsx(t.code,{children:'"off"'}),` will disable the native browser based autocomplete
functionality.`]}),`
`,e.jsx(t.p,{children:"Resources:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",rel:"nofollow",children:"MDN HTML attribute: Autocomplete"})}),`
`]}),`
`,e.jsx(t.h2,{id:"labelling-variations",children:"Labelling Variations"}),`
`,e.jsxs(t.p,{children:["A TextInput can be rendered with or without visible labels. When ",e.jsx(t.code,{children:"showLabel"}),` is
set to `,e.jsx(t.code,{children:"false"}),", an ",e.jsx(t.code,{children:"aria-label"}),` attribute is added to the input/textarea element
to maintain accessibility. If the component needs to be required, the
`,e.jsx(t.code,{children:"showRequiredLabel"}),` prop can be used to show or hide the "(required)" text
within the `,e.jsx(t.code,{children:"label"})," element."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(t.h2,{id:"browser-states",children:"Browser States"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(t.h2,{id:"isclearable-button",children:"isClearable Button"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"isClearable"})," prop to ",e.jsx(t.code,{children:"true"}),` to render a button that clears the input
value. This close button will render when the input has a value and disappear
when the input is empty, including after it is clicked.`]}),`
`,e.jsxs(t.p,{children:[`This button has visually hidden text, a "close" icon, and renders on top
of the input field on the right side. This clear button does not render when
the `,e.jsx(t.code,{children:"type"})," prop is set to ",e.jsx(t.code,{children:'"textarea"'}),"."]}),`
`,e.jsx(o,{mb:"s",content:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"RECOMMENDATION:"})," The clear button works best when the `TextInput` is used as an uncontrolled component."]}),type:"recommendation"}),`
`,e.jsx(o,{content:e.jsxs(e.Fragment,{children:[e.jsx(t.strong,{children:"IMPORTANT:"})," The clear button will not render when...",e.jsxs(u,{noStyling:!0,mb:"0",children:[e.jsx(t.li,{children:'- the `type` prop is set to `"textarea"`'}),e.jsx(t.li,{children:"- the `isDisabled` prop is set to `true`"})]})]}),type:"informative"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h3,{id:"controlled-isclearablecallback-example",children:"Controlled isClearableCallback Example"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.code,{children:"TextInput"})," component is controlled when the ",e.jsx(t.code,{children:"value"})," and ",e.jsx(t.code,{children:"onChange"}),` props are
set. For a controlled component, the `,e.jsx(t.code,{children:"isClearableCallback"}),` prop can be used to
clear the input value in the consuming application. This callback is only called
when the close button is clicked.`]}),`
`,e.jsx(r,{code:`
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
`,e.jsx(s,{of:f}),`
`,e.jsx(t.h3,{id:"focus-ref-management",children:"Focus Ref Management"}),`
`,e.jsxs(t.p,{children:[`Focus management is important for accessibility and can get complicated in pages
that have multiple focusable elements and various user interactions. The
following is an example found in the Research Catalog's
`,e.jsx(t.a,{href:"https://nypl.org/research/research-catalog/account",rel:"nofollow",children:"My Account"}),` page (you have
to sign in) where the page's accessibility requirement conflicted with the
`,e.jsx(t.code,{children:"TextInput"}),` component's internal focus management. This was apparent through the
use of the clearable "X" button and has now been resolved.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TextInput"}),` component keeps track of it's own ref for clearing the input
field. If your app needs to manage focus separately, you should still pass a ref
to the `,e.jsx(t.code,{children:"TextInput"})," component as you normally would with a React component."]}),`
`,e.jsx(t.p,{children:`In the following example, when the user clicks on the "Edit" button, focus needs
to go to the input field. It is the consuming application's responsibility to
send focus to the input field when the "Edit" button is clicked.`}),`
`,e.jsx(r,{code:`
// Snippet shorten for brevity
<Button
id="edit"
ref={editBtnRef}
onClick={() => {
  setIsEdit(true);
  setTimeout(() => inputRef.current?.focus(), 0);
}}
>
Edit
</Button>
// In Edit mode
<TextInput
ref={inputRef}
id="focus-management"
labelText="What is your favorite color?"
onFocus={() => setIsEdit(true)}
placeholder="i.e. blue, green, etc."
isClearable
isClearableCallback={() => setValue("")}
value={value}
onChange={(e) => setValue(e.target.value)}
/>
`,language:"jsx"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(t.h2,{id:"number-type",children:"Number Type"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TextInput"}),` component can be configured to render a number input by setting
`,e.jsx(t.code,{children:'type="number"'}),". In this input type, the ",e.jsx(t.code,{children:"maxLength"}),` prop does not restrict the
length of the number that is passed to the input. This is the expected behavior
as the native HTML input and `,e.jsx(t.code,{children:"maxlength"})," attribute behave this way."]}),`
`,e.jsxs(t.p,{children:["For this type, the ",e.jsx(t.code,{children:"min"})," and ",e.jsx(t.code,{children:"max"}),` props do restrict the value of the number
input that is passed. This can be seen by using the up and down arrows to
increase or decrease the number value, respectively. However, if the `,e.jsx(t.code,{children:"max"}),` prop
is set to "200", for example, the user can still enter a number such as "400".
The consuming application must handle validating the entered number value.`]}),`
`,e.jsxs(t.p,{children:["If the ",e.jsx(t.code,{children:"min"})," prop value is greater than the ",e.jsx(t.code,{children:"max"}),` prop value, it will trigger
the invalid state.`]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(t.h3,{id:"alternate-number-pattern",children:"Alternate Number Pattern"}),`
`,e.jsxs(t.p,{children:[`Another pattern for entering numbers in a restrictive way is to use the
`,e.jsx(t.code,{children:"maxLength"})," and ",e.jsx(t.code,{children:"pattern"}),` props. Together, these props can be set to define how
many digits and what characters are allowed. For example, if a zip code is
required, the `,e.jsx(t.code,{children:"maxLength"}),' prop can be set to "5" and the ',e.jsx(t.code,{children:"pattern"}),` prop can be
set to `,e.jsx(t.code,{children:'"[0-9]\\*"'}),` to allow only numbers to be entered and limit the number of
characters to 5.`]}),`
`,e.jsxs(t.p,{children:["Note that the ",e.jsx(t.code,{children:"type"}),` prop is not set to "number" in this example and that the
consuming application must handle validating the value entered. Browsers will
also provide their own validation for the input.`]}),`
`,e.jsx(r,{code:`
<TextInput
helperText="Enter a 5-digit zip code."
id="number-pattern"
labelText="Enter a zip code"
maxLength={5}
pattern="[0-9]*"
placeholder="i.e. 10018"
/>
`,language:"jsx"}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(t.h2,{id:"html-in-helper-text",children:"HTML in Helper Text"}),`
`,e.jsxs(t.p,{children:["HTML can be passed into the ",e.jsx(t.code,{children:"helperText"})," prop as a string or HTML."]}),`
`,e.jsx(r,{code:`
helperText="Choose <b>wisely!</b>"
// or
helperText={<>Choose <b>wisely!</b></>}
`,language:"jsx"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(t.h2,{id:"textarea",children:"Textarea"}),`
`,e.jsxs(t.p,{children:["The TextInput component includes a multiline ",e.jsx(t.code,{children:"textarea"}),` form field. To render a
`,e.jsx(t.code,{children:"textarea"})," element, pass ",e.jsx(t.code,{children:'"textarea"'})," for the ",e.jsx(t.code,{children:"type"}),` prop. All the variations
described above are available for the `,e.jsx(t.code,{children:"textarea"})," option."]}),`
`,e.jsx(s,{of:T}),`
`,e.jsx(t.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(C,{changelogData:I})]})}function F(i={}){const{wrapper:t}={...d(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(c,{...i})}):c(i)}export{F as default};
