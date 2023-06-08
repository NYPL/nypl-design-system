import{j as n,a as o,F as s}from"./jsx-runtime-09ad29cb.js";import{M as h,D as p,C as m,A as u,b as i}from"./index-5d3bb37f.js";import{F as d,W as c}from"./FeedbackBox.stories-8d4c0351.js";import{L as t}from"./Link-0ed02cf7.js";import{u as l}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./FeedbackBox-8fd366e4.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./Form-7babaf24.js";import"./SimpleGrid-e54e0b68.js";import"./Notification-69d32803.js";import"./Heading-2ec2ea62.js";import"./Radio-c107ee3b.js";import"./ComponentWrapper-82a15cf7.js";import"./Text-eabcdc0a.js";import"./utils-acca7d12.js";import"./chakra-ui-form-control.esm-c23b95fa.js";import"./RadioGroup-8ceb9bfa.js";import"./Fieldset-8799f492.js";import"./spacing-06362f80.js";import"./TextInput-3683470d.js";import"./Label-2b2058d3.js";import"./chakra-ui-modal.esm-af0e92e4.js";import"./chakra-ui-focus-lock.esm-eb172e6c.js";import"./index-fb519959.js";import"./defineProperty-f749b14d.js";import"./chakra-ui-portal.esm-c70f6466.js";import"./chakra-ui-transition.esm-402cd1c1.js";function a(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",a:"a",h3:"h3"},l(),r.components);return o(s,{children:[n(h,{of:d}),`
`,n(e.h1,{id:"feedbackbox",children:"FeedbackBox"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"1.3.0"})})]}),o(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[`
`,n(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#notification-text",target:"_self",children:"Notification Text"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#form-fields",target:"_self",children:"Form Fields"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#feedbackbox-screens",target:"_self",children:"FeedbackBox Screens"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#form-submission-data",target:"_self",children:"Form Submission Data"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#programmatically-open",target:"_self",children:"Programmatically Open"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:d}),`
`,n(e.p,{children:`An NYPL privacy policy link will render within every screen of the FeedbackBox
("form", "confirmation", and "error" ), and the link will open in a new tab.`}),`
`,o(e.p,{children:[n(e.strong,{children:"Note"}),": For the purposes of Storybook, only one (1) ",n(e.code,{children:"FeedbackBox"}),` component
example is rendered on the bottom right of this page. The `,n(e.code,{children:"FeedbackBox"}),` example
below alternately renders the "confirmation" and "error" screens on each form
submission. This is just to demonstrate the different states of the component.
In practice, the consuming app is responsible for handling the form submission.`]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(m,{of:c}),`
`,n(u,{of:c}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"FeedbackBox"}),` component is a complex component built from various Reservoir
DS and Chakra components. The two main components are the DS `,n(e.code,{children:"Button"}),` component
used to open Chakra's `,n(e.code,{children:"Drawer"})," component."]}),`
`,o(e.p,{children:[`When the primary button is clicked, the dialog opens and focus is set to the
first focusable element which is the "close" button that contains minus icon in
the header of the dialog. While opened, focus is trapped within the dialog until
it is closed either by clicking on the "close" or "Cancel" buttons, pressing the
"Escape" key, or by clicking outside of the dialog. When the `,n(e.code,{children:"FeedbackBox"}),`
component is closed, focus is set back to the primary button that opened the
dialog.`]}),`
`,o(e.p,{children:["The markup of the ",n(e.code,{children:"FeedbackBox"}),` structurally matches the modal dialog pattern
that is implemented by Chakra's `,n(e.code,{children:"Modal"})," and ",n(e.code,{children:"Drawer"}),` components. The container
has `,n(e.code,{children:"role=”dialog”"}),", ",n(e.code,{children:"aria-modal=”true”"}),", ",n(e.code,{children:"tabindex={0}"}),", ",n(e.code,{children:"aria-labelledby"}),` that
references the title within the dialog, and `,n(e.code,{children:"aria-describedby"}),` that references a
descriptive piece of text within the dialog.`]}),`
`,o(e.p,{children:["Within the ",n(e.code,{children:"FeedbackBox"}),` component, the radio input field is created from the DS
`,n(e.code,{children:"RadioGroup"})," and ",n(e.code,{children:"Radio"}),` components, and input fields are created from the DS
`,n(e.code,{children:"TextInput"}),` component. Each of these components has their own accessibility
features documented in their respective Storybook pages.`]}),`
`,n(e.p,{children:`When the form is submitted, focus is set to the confirmation message or the
error message if an error occurs.`}),`
`,o(e.p,{children:["Whereas the ",n(e.code,{children:"FeedbackBox"}),`'s primary button element is placed within the DOM
structure where it is rendered, the dialog DOM structure is appended to the end
of the DOM tree and it is done by Chakra.`]}),`
`,n(e.p,{children:"Resources:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN ARIA: dialog role"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C ARIA role=dialog"})}),`
`,n(e.li,{children:n(e.a,{href:"https://v1.chakra-ui.com/docs/components/overlay/modal#accessibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra Modal Accessibility"})}),`
`,n(e.li,{children:n(e.a,{href:"https://v1.chakra-ui.com/docs/components/overlay/drawer#accessibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra Drawer Accessibility"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-button--docs#accessibility",children:"DS Button Accessibility"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-textinput--docs#accessibility",children:"DS TextInput Accessibility"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-radio--docs#accessibility",children:"DS Radio Accessibility"})}),`
`,n(e.li,{children:n(e.a,{href:"../?path=/docs/components-form-elements-radiogroup--docs#accessibility",children:"DS RadioGroup Accessibility"})}),`
`]}),`
`,n(e.h2,{id:"notification-text",children:"Notification Text"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"notificationText"}),` prop can be used to display important or relevant
information above the form's description text. The text or JSX element passed
will be rendered in a Reservoir `,n(e.code,{children:"Notification"})," component."]}),`
`,n(e.h2,{id:"form-fields",children:"Form Fields"}),`
`,n(e.h3,{id:"comment-field",children:"Comment Field"}),`
`,o(e.p,{children:[`By default, only the required "Comment" textarea field will render inside the
`,n(e.code,{children:"FeedbackBox"})," component. There is a 500 character limit for this textarea field."]}),`
`,o(e.p,{children:[`Validating the "Comment" textarea field is the responsibility of the consuming
application. If there is an error, the `,n(e.code,{children:"isInvalidComment"}),` prop can be used to
toggle the invalid state.`]}),`
`,n(e.h3,{id:"category-field",children:"Category Field"}),`
`,o(e.p,{children:[`The "Category" field is an optional form field. This radio group form field
contains three values: "Comment", "Correction", and "Bug". The "Comment" option
will be selected by default. Use the `,n(e.code,{children:"showCategoryField"}),` prop to toggle the
visibility of this field.`]}),`
`,n(e.h3,{id:"email-field",children:"Email Field"}),`
`,o(e.p,{children:[`The "Email" field is an optional form field. This text input form field is an
email field. Use the `,n(e.code,{children:"showEmailField"}),` prop to toggle the visibility of this
field.`]}),`
`,o(e.p,{children:[`Validating the "Email" address value is the responsibility of the consuming
application. If there is an error, the `,n(e.code,{children:"isInvalidEmail"}),` prop can be used to
toggle the invalid state.`]}),`
`,n(e.h2,{id:"feedbackbox-screens",children:"FeedbackBox Screens"}),`
`,o(e.p,{children:["There are three main screens that will render in the ",n(e.code,{children:"FeedbackBox"}),` component:
the "form", "confirmation", and "error" screens. These are also based on the
`,n(e.code,{children:"view"})," prop available values."]}),`
`,o(e.p,{children:[`Once the form is submitted, a three (3) second timer starts. Once the timer is
complete, the "confirmation" screen is rendered. This is the default behavior
when no success or failure input is provided by the consuming application. This
means that if there is an error and the consuming application does not tell the
`,n(e.code,{children:"FeedbackBox"}),` component that there is an error, the "confirmation" screen will
render and this is not the correct or expected behavior.`]}),`
`,n(e.h3,{id:"form",children:"Form"}),`
`,o(e.p,{children:["This is the initial screen that will render based on the default ",n(e.code,{children:"view"}),` prop
value of `,n(e.code,{children:'"form"'}),`. The "form" screen will render an optional notification,
an optional description, up to three form fields, the privacy policy link,
and "Submit" and "Cancel" buttons.`]}),`
`,n(e.h3,{id:"confirmation",children:"Confirmation"}),`
`,o(e.p,{children:[`There are two ways to render the "confirmation" screen. This screen will render
automatically after the form is submitted and the three (3) second timer is
complete. The other option is to pass the `,n(e.code,{children:"view"})," prop a value of ",n(e.code,{children:'"confirmation"'}),`
to render the "confirmation" screen. This is useful if the consuming application
wants to render the "confirmation" screen immediately after a successful
API request.`]}),`
`,o(e.p,{children:[`The "confirmation" screen will render a check icon, a basic success message that
is always the same, an email-specific message when `,n(e.code,{children:"showEmailField"}),` is set to
`,n(e.code,{children:"true"}),", an additional confirmation message set through the ",n(e.code,{children:"confirmationText"}),`
prop, the privacy policy link, and a "Return to Browsing" button. When rendered,
focus will be set to the confirmation message.`]}),`
`,o(e.p,{children:[`Below is an example of the "confirmation" screen rendered immediately after a
successful API request. Setting the `,n(e.code,{children:"view"})," prop through a ",n(e.code,{children:"useState"}),` value is
only one way to update and pass the "confirmation" value to the `,n(e.code,{children:"FeedbackBox"}),`
component. Using the `,n(e.code,{children:"fetch"})," API is one possible approach."]}),`
`,n(i,{code:`
const [view, setView] = React.useState("form");
const apiEndpoint = "...";
const onSubmit = (values) => {
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(values),
  }).then((response) => {
    if (response.ok) {
      // Resolve the promise according to your application.
      // And then call:
      setView("confirmation");
    }
  });
};
// ...
<FeedbackBox
  onSubmit={onSubmit}
  showCategoryField
  showEmailField
  title="Help and Feedback"
  view={view}
/>
`,language:"jsx"}),`
`,n(e.h3,{id:"error",children:"Error"}),`
`,o(e.p,{children:['The only way to render the "error" screen is by passing the ',n(e.code,{children:"view"}),` prop a value
of `,n(e.code,{children:'"error"'}),". This ",n(e.strong,{children:"should"}),` be used if there is an error with the form
submission API request. This is the responsibility of the consuming application.`]}),`
`,n(e.p,{children:`The "error" screen will render an error icon, an error message, the privacy
policy link, and "Try Again" and "Return to Browsing" buttons. When rendered,
focus will be set to the error message.`}),`
`,o(e.p,{children:[`Below is an example of the "error" screen rendered immediately after a failed
API request. Setting the `,n(e.code,{children:"view"})," prop through a ",n(e.code,{children:"useState"}),` value is only one way
to update and pass the "error" value to the `,n(e.code,{children:"FeedbackBox"}),` component. Using the
`,n(e.code,{children:"fetch"})," API is one possible approach."]}),`
`,n(i,{code:`
const [view, setView] = React.useState("form");
const apiEndpoint = "...";
const onSubmit = (values) => {
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(values),
  })
    .then((response) => {
      if (response.ok) {
        // ...
      }
    })
    .catch((error) => {
      // Reject the promise according to your application.
      // And then call:
      setView("error");
    });
};
// ...
<FeedbackBox
  onSubmit={onSubmit}
  showCategoryField
  showEmailField
  title="Help and Feedback"
  view={view}
/>
`,language:"jsx"}),`
`,n(e.h2,{id:"form-submission-data",children:"Form Submission Data"}),`
`,o(e.p,{children:["Submitted form data can be retrieved when the ",n(e.code,{children:"FeedbackBox"}),` component is
submitted through the required `,n(e.code,{children:"onSubmit"}),` prop. This prop expects a function and
it will be called when the form is submitted. Similar to other DS form-components
that have function props, the data from the component will be returned in the
function's argument. In this case, it will be a single object.`]}),`
`,o(e.p,{children:[`The submitted form data will be passed as an object that the parent component
can use. The object will always contain the `,n(e.code,{children:"comment"}),` field. If the "category"
field is visible through the `,n(e.code,{children:"showCategoryField"}),` prop, then the object will also
contain the `,n(e.code,{children:"category"}),` field. If the "email" field is visible through the
`,n(e.code,{children:"showEmailField"})," prop, then the object will also contain the ",n(e.code,{children:"email"})," field."]}),`
`,o(e.p,{children:["Below is an example callback function named ",n(e.code,{children:"onSubmit"}),` that is passed to the
`,n(e.code,{children:"FeedbackBox"})," component's ",n(e.code,{children:"onSubmit"}),` prop. The form data will be returned through
the function's argument as an object, called `,n(e.code,{children:"values"})," in the example below."]}),`
`,n(i,{code:`
const onSubmit = (values) => {
  console.log("Submitted values:", values);
  // "Submitted values:",
  // {
  //   category: "Bug",
  //   comment: "Typo in the second paragraph, third sentence.",
  //   email: "email@email.com",
  // }
};
// ...
<FeedbackBox
  onSubmit={onSubmit}
  showCategoryField
  showEmailField
  title="Help and Feedback"
/>
`,language:"jsx"}),`
`,n(e.h3,{id:"hidden-field-values",children:"Hidden Field Values"}),`
`,o(e.p,{children:[`If more key/value pair data needs to be submitted to the API endpoint along with
the form data from the `,n(e.code,{children:"FeedbackBox"})," component, the ",n(e.code,{children:"hiddenFields"}),` prop can be
used. This prop accepts an object of key/value pairs. The object data will be
merged with the submitted form data.`]}),`
`,n(i,{code:`
const hiddenFields = {
  "hidden-field-1": "hidden-field-value-1",
  "hidden-field-2": "hidden-field-value-2",
};
const onSubmit = (values) => {
  console.log("Submitted values:", values);
  // {
  //   category: "Bug",
  //   comment: "Typo in the second paragraph, third sentence.",
  //   email: "email@email.com",
  //   "hidden-field-1": "hidden-field-value-1",
  //   "hidden-field-2": "hidden-field-value-2",
  // }
};
// ...
<FeedbackBox
  hiddenFields={hiddenFields}
  onSubmit={onSubmit}
  showCategoryField
  showEmailField
  title="Help and Feedback"
/>
`,language:"jsx"}),`
`,n(e.h2,{id:"programmatically-open",children:"Programmatically Open"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"FeedbackBox"}),` component can be opened programmatically if needed, but this
requires an extra step when importing and implementing the component. Instead
of importing the `,n(e.code,{children:"FeedbackBox"})," component directly, use the ",n(e.code,{children:"useFeedbackBox"}),` hook
to get the `,n(e.code,{children:"FeedbackBox"})," component and helper functions."]}),`
`,n(i,{code:`
import { useFeedbackBox } from "@nypl/design-system-react-components";
`,language:"jsx"}),`
`,o(e.p,{children:["This hook will return an object with the ",n(e.code,{children:"FeedbackBox"}),` component, a boolean
value, and two functions.`]}),`
`,n(i,{code:`
const { FeedbackBox, isOpen, onClose, onOpen } = useFeedbackBox();
`,language:"jsx"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"FeedbackBox"}),` component is the same as the one imported directly, but now
the `,n(e.code,{children:"isOpen"})," value and ",n(e.code,{children:"onClose"})," and ",n(e.code,{children:"onOpen"}),` functions are exposed and
available to the consuming application. The only function that will be used
directly is the `,n(e.code,{children:"onOpen"})," function. Pass ",n(e.code,{children:"isOpen"})," and ",n(e.code,{children:"onClose"}),` to the
`,n(e.code,{children:"FeedbackBox"}),"."]}),`
`,n(i,{code:`
const { onOpen, isOpen, onClose, FeedbackBox } = useFeedbackBox();
// ...
<FeedbackBox
  isOpen={isOpen}
  onClose={onClose}
  onOpen={onOpen}
  title="Help and Feedback"
  {...otherProps}
/>
`,language:"jsx"}),`
`,o(e.p,{children:["Finally, the ",n(e.code,{children:"onOpen"})," function can be used to programmatically open the ",n(e.code,{children:"FeedbackBox"}),`
component through another element or behavior in the consuming app. See the
example below that uses a custom `,n(e.code,{children:"Button"}),` to open the Modal. The existing button
that is rendered by the `,n(e.code,{children:"FeedbackBox"})," component will still work as expected."]}),`
`,n(i,{code:`
import { useFeedbackBox } from "@nypl/design-system-react-components";
// ...
const MyComponent = () => {
  const { onOpen, isOpen, onClose, FeedbackBox } = useFeedbackBox();
  // ...
  return (
    <>
      <Button id="open-feedback-box" onClick={onOpen}>
        Manually Open FeedbackBox
      </Button>
      <FeedbackBox
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        title="Help and Feedback"
        {...otherProps}
      />
    </>
  );
}; `,language:"jsx"})]})}function he(r={}){const{wrapper:e}=Object.assign({},l(),r.components);return e?n(e,Object.assign({},r,{children:n(a,r)})):a(r)}export{he as default};
//# sourceMappingURL=FeedbackBox-057419d6.js.map
