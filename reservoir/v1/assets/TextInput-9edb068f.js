import{j as t,a as n,F as s}from"./jsx-runtime-09ad29cb.js";import{M as p,D as u,C as r,A as b,b as o}from"./index-42243e0e.js";import{T as a,W as d,L as m,B as f,i as x,C as T,N as g,A as w,H as v,a as y}from"./TextInput.stories-b8d8444a.js";import{L as i}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./TextInput-3683470d.js";import"./ComponentWrapper-82a15cf7.js";import"./Text-eabcdc0a.js";import"./Label-2b2058d3.js";import"./utils-acca7d12.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./chakra-ui-form-control.esm-c23b95fa.js";function c(l){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3"},h(),l.components);return n(s,{children:[t(p,{of:a}),`
`,t(e.h1,{id:"textinput",children:"TextInput"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.22.0"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.5.4"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#labelling-variations",target:"_self",children:"Labelling Variations"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#browser-states",target:"_self",children:"Browser States"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#isclearable-button",target:"_self",children:"isClearable Button"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#number-type",target:"_self",children:"Number Type"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#html-in-helper-text",target:"_self",children:"HTML in Helper Text"}),`
`]}),`
`,n(e.li,{children:[`
`,t(i,{href:"#textarea",target:"_self",children:"Textarea"}),`
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
`,t(r,{of:d}),`
`,t(b,{of:d}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"TextInput"})," component renders an HTML ",t(e.code,{children:"<input>"}),` element which is accessible
via keyboard and screen reader. The `,t(e.code,{children:"aria-required"})," and ",t(e.code,{children:"required"}),` attributes are
set with the `,t(e.code,{children:"isRequired"})," prop. The ",t(e.code,{children:"aria-disabled"})," and ",t(e.code,{children:"disabled"}),` attributes are
set with the `,t(e.code,{children:"isDisabled"})," prop. The ",t(e.code,{children:"aria-invalid"})," is set with the ",t(e.code,{children:"isInvalid"}),`
prop.`]}),`
`,n(e.p,{children:["Internally, a ",t(e.code,{children:"Label"})," is associated with the ",t(e.code,{children:"<input>"})," element. When ",t(e.code,{children:"showLabel"}),`
is set to false, the `,t(e.code,{children:"<input>"})," element's ",t(e.code,{children:"aria-label"}),` attribute is set to the
required `,t(e.code,{children:"labelText"})," value."]}),`
`,n(e.p,{children:["The ",t(e.code,{children:"helperText"})," and the ",t(e.code,{children:"invalidText"})," are associated with the ",t(e.code,{children:"<input>"}),` element
through the `,t(e.code,{children:"aria-describedby"})," attribute."]}),`
`,n(e.p,{children:["When the ",t(e.code,{children:"isClearable"})," prop is set to ",t(e.code,{children:"true"}),`, as text is added to the input
field a close button is rendered to clear the input value. Once the close button
is clicked, the input value will be cleared, the close button will become hidden,
and focus will be set to the input element.`]}),`
`,n(e.p,{children:["When the ",t(e.code,{children:"type"})," prop is set to ",t(e.code,{children:'"textarea"'}),", the ",t(e.code,{children:"<textarea>"}),` element
is rendered instead of the `,t(e.code,{children:"<input>"}),` element. This element follows all the same
accessibility rules described above.`]}),`
`,n(e.p,{children:["If the ",t(e.code,{children:"type"})," prop is set to ",t(e.code,{children:'"email"'}),", ",t(e.code,{children:'"tel"'}),", or ",t(e.code,{children:'"url"'}),`, the appropriate
`,t(e.code,{children:"autocomplete"}),` attribute will be added. The autocomplete attribute makes inputs
easier and more efficient to complete for all users.`]}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN input: The Input (Form Input) element"})}),`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN textarea: The Textarea element"})}),`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN HTML attribute: Autocomplete"})}),`
`,t(e.li,{children:t(e.a,{href:"https://chakra-ui.com/docs/components/form/input",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Input"})}),`
`,t(e.li,{children:t(e.a,{href:"https://chakra-ui.com/docs/components/form/textarea",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Textarea"})}),`
`]}),`
`,t(e.h2,{id:"labelling-variations",children:"Labelling Variations"}),`
`,n(e.p,{children:["A TextInput can be rendered with or without visible labels. When ",t(e.code,{children:"showLabel"}),` is
set to `,t(e.code,{children:"false"}),", an ",t(e.code,{children:"aria-label"}),` attribute is added to the input/textarea element
to maintain accessibility. If the component needs to be required, the
`,t(e.code,{children:"showRequiredLabel"}),` prop can be used to show or hide the "(Required)" text
within the `,t(e.code,{children:"label"})," element."]}),`
`,t(r,{of:m}),`
`,t(e.h2,{id:"browser-states",children:"Browser States"}),`
`,t(r,{of:f}),`
`,t(e.h2,{id:"isclearable-button",children:"isClearable Button"}),`
`,n(e.p,{children:["Set the ",t(e.code,{children:"isClearable"})," prop to ",t(e.code,{children:"true"}),` to render a button that clears the input
value. This close button will render when the input has a value and disappear
when the input is empty, including after it is clicked.`]}),`
`,n(e.p,{children:[`This button has visually hidden text, a "close" icon, and renders on top
of the input field on the right side. This clear button does not render when
the `,t(e.code,{children:"type"})," prop is set to ",t(e.code,{children:'"textarea"'}),"."]}),`
`,n(e.p,{children:["Note: This works best when the ",t(e.code,{children:"TextInput"})," is used as an uncontrolled component."]}),`
`,t(r,{of:x}),`
`,t(e.h3,{id:"controlled-isclearablecallback-example",children:"Controlled isClearableCallback Example"}),`
`,n(e.p,{children:["A ",t(e.code,{children:"TextInput"})," component is controlled when the ",t(e.code,{children:"value"})," and ",t(e.code,{children:"onChange"}),` props are
set. For a controlled component, the `,t(e.code,{children:"isClearableCallback"}),` prop can be used to
clear the input value in the consuming application. This callback is only called
when the close button is clicked.`]}),`
`,t(o,{code:`
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
`,t(r,{of:T}),`
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
`,t(r,{of:g}),`
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
`,t(o,{code:`
<TextInput
  helperText="Enter a 5-digit zip code."
  id="number-pattern"
  labelText="Enter a zip code"
  maxLength={5}
  pattern="[0-9]*"
  placeholder="i.e. 10018"
/>
`,language:"jsx"}),`
`,t(r,{of:w}),`
`,t(e.h2,{id:"html-in-helper-text",children:"HTML in Helper Text"}),`
`,n(e.p,{children:["HTML can be passed into the ",t(e.code,{children:"helperText"})," prop as a string or HTML."]}),`
`,t(o,{code:`
helperText="Choose <b>wisely!</b>"
// or
helperText={<>Choose <b>wisely!</b></>}
`,language:"jsx"}),`
`,t(r,{of:v}),`
`,t(e.h2,{id:"textarea",children:"Textarea"}),`
`,n(e.p,{children:["The TextInput component includes a multiline ",t(e.code,{children:"textarea"}),` form field. To render a
`,t(e.code,{children:"textarea"})," element, pass ",t(e.code,{children:'"textarea"'})," for the ",t(e.code,{children:"type"}),` prop. All the variations
described above are available for the `,t(e.code,{children:"textarea"})," option."]}),`
`,t(r,{of:y})]})}function re(l={}){const{wrapper:e}=Object.assign({},h(),l.components);return e?t(e,Object.assign({},l,{children:t(c,l)})):c(l)}export{re as default};
//# sourceMappingURL=TextInput-9edb068f.js.map
