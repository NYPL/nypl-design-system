import{j as n,a as t,F as h}from"./jsx-runtime-fdf4db99.js";import{M as p,D as m,C as r,A as u,b as a}from"./index-445595fc.js";import{N as s,W as c,D as g,C as f,a as b,b as w}from"./NewsletterSignup.stories-99d82adc.js";import{L as i}from"./Link-24c1437a.js";import{C as S}from"./ComponentChangelogTable-310bbbfd.js";import{u as d}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./index-6148c31a.js";import"./NewsletterSignup-1e975f5c.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./Form-b79b3734.js";import"./SimpleGrid-bd04b221.js";import"./Text-d88b2f7a.js";import"./TextInput-70995d87.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./HelperErrorText-55c57f50.js";import"./Label-d380cca8.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./useNYPLBreakpoints-2881f83d.js";import"./types-ee6958f5.js";import"./List-582282a6.js";import"./Table-64c6aa77.js";const v=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `title` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]},{date:"2023-11-09",version:"2.1.2",type:"Update",affects:["Styles"],notes:["Updates the dark mode color variants for the `newsletterSignupType` prop."]},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Accessibility"],notes:["Updates `tabindex` value from 0 to -1. See Accessibility section for details."]},{date:"2023-10-18",version:"2.1.0",type:"New Feature",affects:["Accessibility","Documentation","Functionality","Styles"],notes:["Adds the NewsletterSignup component to the DS library"]}];function l(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em"},d(),o.components);return t(h,{children:[n(p,{of:s}),`
`,n(e.h1,{id:"newslettersignup",children:"NewsletterSignup"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"2.1.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#jsx-elements-passed-to-descriptiontext-prop",children:"JSX Elements passed to descriptionText Prop"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#custom-title-heading",target:"_self",children:"Custom Title Heading"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#form-submission-data",target:"_self",children:"Form Submission Data"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#interactive-example-with-onchange-and-onsubmit",target:"_self",children:"Interactive Example with onChange and onSubmit"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#component-states",target:"_self",children:"Component States"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:s}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(r,{of:c}),`
`,n(u,{of:c}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"NewsletterSignup"}),` component is a complex component built from various
Reservoir DS and Chakra components.`]}),`
`,t(e.p,{children:["The ",n(e.code,{children:"title"})," prop of the ",n(e.code,{children:"NewsletterSignup"})," component expects a ",n(e.code,{children:"HTML Element"}),` or
a `,n(e.code,{children:"React Component"}),". By default it renders a ",n(e.code,{children:"h2"}),` tag with text of
`,n(e.code,{children:'"Sign Up for Our Newsletter"'}),` but it is the responsibility of the consuming app
to pass the heading tag (`,n(e.code,{children:"h*"}),`) that aligns with the page structure and ensures
accessibility.`]}),`
`,t(e.p,{children:["Within the ",n(e.code,{children:"NewsletterSignup"})," component, the DS ",n(e.code,{children:"form"}),` component wraps around
two DS `,n(e.code,{children:"FormField"})," components. Those",n(e.code,{children:"FormField"})," components hold a DS ",n(e.code,{children:"TextInput"}),`
component of `,n(e.code,{children:'type="email"'})," and a DS ",n(e.code,{children:"Button"})," component of ",n(e.code,{children:'type="submit"'}),`
respectively. Each of these components has their own accessibility features
documented in their respective Storybook pages.`]}),`
`,t(e.p,{children:["After the ",n(e.code,{children:"NewsletterSignup"}),` form is submitted, focus is set to the confirmation
message or the error message if an error occurs. The `,n(e.code,{children:"tabindex"}),` for the focused
element is set to `,n(e.code,{children:'"-1"'}),`, allowing for programmatic focus to be set. After focus
is set programmatically, the user will be in control of focus and will not be
able to tab back to the confirmation message or error message after tabbing
away. This is standard accessibility behavior and the user should not expect to
be able to tab back to a non-interactive element.`]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Headings"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-form--docs#accessibility",children:"DS Form Accessibility"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-button--docs#accessibility",children:"DS Button Accessibility"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-textinput--docs#accessibility",children:"DS TextInput Accessibility"})}),`
`]}),`
`,n(e.h2,{id:"jsx-elements-passed-to-descriptiontext-prop",children:"JSX Elements passed to descriptionText Prop"}),`
`,t(e.p,{children:["Alternatively to a ",n(e.code,{children:"descriptionText"})," of type ",n(e.code,{children:"string"}),`, a HTML Element or React
component can be passed. When passing a JSX Element, the consuming app is
responsible to assure its accessibility.`]}),`
`,n(e.p,{children:n(e.em,{children:"NOTE: This is applicable for all component props accepting HTML/JSX elements."})}),`
`,n(r,{of:g}),`
`,n(e.h2,{id:"custom-title-heading",children:"Custom Title Heading"}),`
`,t(e.p,{children:["The optional ",n(e.code,{children:"title"})," prop will render the ",n(e.code,{children:"Newsletter"}),"'s heading as an ",n(e.code,{children:"h2"}),`
element (sized as an `,n(e.code,{children:"h3"}),") by default with text ",n(e.code,{children:'"Sign Up for Our Newsletter"'}),`.
When the `,n(e.code,{children:"title"})," value is a string, the default heading will be an ",n(e.code,{children:"h2"}),` but not
sized as an `,n(e.code,{children:"h3"}),". It's possible that the ",n(e.code,{children:"h2"}),` element will not fit in an app's
heading hierarchy. If this is the case,`,n(e.code,{children:"title"})," can also take a ",n(e.code,{children:"JSX.Element"}),`
type value.`]}),`
`,t(e.p,{children:["In the following example, the heading is an ",n(e.code,{children:"h4"})," defined as:"]}),`
`,n(a,{code:`
// String Heading Example
const stringHeading = "Custom string heading";
// ...

<NewsletterSignup title={stringHeading} {...otherArgs} />

// JSX Heading Example

const jsxHeading = <Heading level="h4">Custom h4 DS Heading</Heading>;
// ...

<NewsletterSignup title={jsxHeading} {...otherArgs} />
`,language:"jsx"}),`
`,n(r,{of:f}),`
`,n(e.h2,{id:"form-submission-data",children:"Form Submission Data"}),`
`,t(e.p,{children:["Submitted form data can be retrieved when the ",n(e.code,{children:"NewsletterSignup"}),` component is
submitted through the required `,n(e.code,{children:"onSubmit"}),` prop. This prop expects a function and
it will be called when the form is submitted. Similar to other DS
form-components that have function props, the data from the component will be
returned in the function's argument. In this case, it will be a single object.`]}),`
`,n(e.p,{children:`The submitted form data will be passed as an object that the parent component
can use. The returned object will always contain the "email" field.`}),`
`,t(e.p,{children:["Below is an example callback function named ",n(e.code,{children:"onSubmit"}),` that is passed to the
`,n(e.code,{children:"NewsletterSignup"})," component's ",n(e.code,{children:"onSubmit"}),` prop and how the view is controlled in
the data submission process. The form data will be returned through the
function's argument as an object, called `,n(e.code,{children:"values"})," in the example below."]}),`
`,n(a,{code:`
const [view, setView] = React.useState("form");
const onSubmit = async (values) => {
  e.preventDefault();
  setView("submitting");
  const endpoint = "...";
  //Form the request for sending data to the server.
  const options = {
    method: "POST",
    headers: {Content-Type: "application/json"},
    body: JSON.stringify(values),
  };
  //Send the form and await response.
  try {
    const response = await fetch(endpoint, options);
    const result = await response.json();
    setView("confirmation");
  } catch (error) {
    setView("error");
  }
};

//....

<NewsletterSignup onChange={onChange} onSubmit={onSubmit} view={view} />

`,language:"jsx"}),`
`,n(e.h2,{id:"interactive-example-with-onchange-and-onsubmit",children:"Interactive Example with onChange and onSubmit"}),`
`,n(e.p,{children:n(e.em,{children:"NOTE: open the browser console to see the values logged in the example below."})}),`
`,t(e.p,{children:["The input value typed into the ",n(e.code,{children:"TextInput"})," of the ",n(e.code,{children:"NewsletterSignup"}),` component
can be accessed by the functions passed to the `,n(e.code,{children:"onChange"})," and ",n(e.code,{children:"onSubmit"})," prop."]}),`
`,t(e.p,{children:["Both the ",n(e.code,{children:"onChange"})," and ",n(e.code,{children:"onSubmit"}),` callback functions can retrieved the
submitted value as `,n(e.code,{children:"event.target.email.value"})," through the ",n(e.code,{children:"event"}),` object passed
as the single argument.`]}),`
`,t(e.p,{children:["The following example logs the ",n(e.code,{children:"event.target.email.value"}),` to the console on each
`,n(e.code,{children:"onChange"}),` call and upon clicking the Submit button which triggers the
`,n(e.code,{children:"onSubmit"}),` function and simulate a submission. The component will transition
through a `,n(e.code,{children:'"submitting"'})," view to an alternating ",n(e.code,{children:'"confirmation"'}),", ",n(e.code,{children:'"error"'}),` or
"invalid Email" view.`]}),`
`,n(a,{code:`
function NewsletterSignupOnSubmitExampleComponent() {
  const [view, setView] = React.useState("form");
  const [inputVal, setInputVal] = React.useState("");
  const handleChange = (event) => {
    console.log(\`onChange Email Input value: \${event.target.value}\`);
    setInputVal(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(\`onSubmit Email Input value: \${event.target.email.value}\`);
  };
  return (
    <NewsletterSignup
    id="interactive"
    view={view}
    isInvalidEmail={counter === 3}
    valueEmail={inputVal}
    onChange={handleChange}
    onSubmit={handleSubmit}
    confirmationHeading="Thank you for signing up!"
    confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
    />
  );
} `,language:"jsx"}),`
`,n(r,{of:b}),`
`,n(e.h2,{id:"component-states",children:"Component States"}),`
`,n(r,{of:w}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(S,{changelogData:v})]})}function he(o={}){const{wrapper:e}=Object.assign({},d(),o.components);return e?n(e,Object.assign({},o,{children:n(l,o)})):l(o)}export{he as default};
//# sourceMappingURL=NewsletterSignup-82e87684.js.map
