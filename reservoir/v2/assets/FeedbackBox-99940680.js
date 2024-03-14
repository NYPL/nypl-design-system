import{j as n,a as o,F as s}from"./jsx-runtime-fdf4db99.js";import{M as h,D as p,C as m,A as f,b as t}from"./index-445595fc.js";import{C as u}from"./ComponentChangelogTable-310bbbfd.js";import{F as c,W as a}from"./FeedbackBox.stories-b5811bca.js";import{L as i}from"./Link-24c1437a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";import"./index-6148c31a.js";import"./FeedbackBox-9e7be7e7.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./ButtonGroup-c2c033a6.js";import"./useNYPLBreakpoints-2881f83d.js";import"./Form-b79b3734.js";import"./SimpleGrid-bd04b221.js";import"./Notification-715070ee.js";import"./Radio-8cdc7037.js";import"./ComponentWrapper-aa2910be.js";import"./HelperErrorText-55c57f50.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./RadioGroup-8ef77e28.js";import"./Fieldset-46002ef9.js";import"./spacing-06362f80.js";import"./TextInput-70995d87.js";import"./Label-d380cca8.js";import"./chakra-ui-modal.esm-25230bce.js";import"./index-13103a50.js";import"./defineProperty-84a138b7.js";import"./chakra-ui-portal.esm-6752a0d2.js";import"./chakra-ui-transition.esm-3069754e.js";const b=[{date:"2024-02-05",version:"2.1.5",type:"Update",affects:["Accessibility","Functionality"],notes:["Updates the focus ring style for the open button.","Updates the required comment field so it cannot be submitted when empty.","Forcibly focuses on the open button when the form is closed."]},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Accessibility"],notes:["Updates `tabindex` value from 0 to -1. See Accessibility section for details."]},{date:"2023-10-18",version:"2.1.0",type:"Update",affects:["Styles"],notes:["Remove the underline on the component's `Privacy Policy` link."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size, font color, and text link patterns."]}];function d(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",a:"a",h3:"h3"},l(),r.components);return o(s,{children:[n(h,{of:c}),`
`,n(e.h1,{id:"feedbackbox",children:"FeedbackBox"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"1.3.0"})})]}),o(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.5"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[`
`,n(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#notification-text",target:"_self",children:"Notification Text"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#form-fields",target:"_self",children:"Form Fields"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#feedbackbox-screens",target:"_self",children:"FeedbackBox Screens"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#form-submission-data",target:"_self",children:"Form Submission Data"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#programmatically-open",target:"_self",children:"Programmatically Open"}),`
`]}),`
`,o(e.li,{children:[`
`,n(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:c}),`
`,n(e.p,{children:`An NYPL privacy policy link will render within every screen of the FeedbackBox
("form", "confirmation", and "error" ), and the link will open in a new tab.`}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(e.p,{children:n(e.strong,{children:"Notes"})}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:["For the purposes of Storybook, only one (1) ",n(e.code,{children:"FeedbackBox"}),` component
example is rendered on the bottom right of this page. The `,n(e.code,{children:"FeedbackBox"}),` example
below alternately renders the "confirmation" and "error" screens on each form
submission. This is just to demonstrate the different states of the component.
In practice, the consuming app is responsible for handling the form submission.`]}),`
`,o(e.li,{children:["The background color and color mode can be updated in the ",n(e.code,{children:"FeedbackBox"}),`
"With Controls" tab in Storybook. To get a better idea of how the `,n(e.code,{children:"FeedbackBox"}),`
component renders on top of different color backgrounds in this Docs page,
the background is scrollable and it contains four different background colors:
`,n(e.code,{children:"ui.white"}),", ",n(e.code,{children:"ui.bg.default"}),", ",n(e.code,{children:"dark.ui.bg.default"}),", and ",n(e.code,{children:"dark.ui.bg.page"}),"."]}),`
`]}),`
`,n(m,{of:a}),`
`,n(f,{of:a}),`
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
`,o(e.p,{children:["After the ",n(e.code,{children:"FeedbackBox"}),` form is submitted, focus is set to the confirmation
message or the error message if an error occurs. The `,n(e.code,{children:"tabindex"}),` for the focused
element is set to `,n(e.code,{children:'"-1"'}),`, allowing for programmatic focus to be set. After focus
is set programmatically, the user will be in control of focus and will not be
able to tab back to the confirmation message or error message after tabbing
away. This is standard accessibility behavior and the user should not expect to
be able to tab back to a non-interactive element.`]}),`
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
`,n(t,{code:`
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
`,n(t,{code:`
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
`,n(t,{code:`
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
`,n(t,{code:`
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
`,n(t,{code:`
import { useFeedbackBox } from "@nypl/design-system-react-components";
`,language:"jsx"}),`
`,o(e.p,{children:["This hook will return an object with the ",n(e.code,{children:"FeedbackBox"}),` component, a boolean
value, and two functions.`]}),`
`,n(t,{code:`
const { FeedbackBox, isOpen, onClose, onOpen } = useFeedbackBox();
`,language:"jsx"}),`
`,o(e.p,{children:["The ",n(e.code,{children:"FeedbackBox"}),` component is the same as the one imported directly, but now
the `,n(e.code,{children:"isOpen"})," value and ",n(e.code,{children:"onClose"})," and ",n(e.code,{children:"onOpen"}),` functions are exposed and
available to the consuming application. The only function that will be used
directly is the `,n(e.code,{children:"onOpen"})," function. Pass ",n(e.code,{children:"isOpen"})," and ",n(e.code,{children:"onClose"}),` to the
`,n(e.code,{children:"FeedbackBox"}),"."]}),`
`,n(t,{code:`
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
`,n(t,{code:`
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
}; `,language:"jsx"}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(u,{changelogData:b})]})}function be(r={}){const{wrapper:e}=Object.assign({},l(),r.components);return e?n(e,Object.assign({},r,{children:n(d,r)})):d(r)}export{be as default};
//# sourceMappingURL=FeedbackBox-99940680.js.map
