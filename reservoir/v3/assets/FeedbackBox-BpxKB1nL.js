import{u as d,j as e,M as c,L as o,bv as l,C as h,bw as p,S as t}from"./iframe-CFLVJZOZ.js";import{C as m}from"./ComponentChangelogTable-DvY0SxTs.js";import{F as s,W as r}from"./FeedbackBox.stories-CqTZs8x2.js";const x=[{date:"2025-05-22",version:"3.6.2",type:"Update",affects:["Styles"],notes:["Removes use of `useNYPLBreakpoints` and replaces with equivalent CSS."]},{date:"2025-02-13",version:"3.5.4",type:"Update",affects:["Styles"],notes:["Sets the font weight for the popup header to `medium`.",'Changes the font weight for the `(required)` label on the `Textarea` element to `"medium"`.']},{date:"2024-10-02",version:"3.4.0",type:"Update",affects:["Styles"],notes:["Increases the z-index of the `Drawer` component so it displays above all other elements on a page."]},{date:"2024-09-19",version:"3.3.2",type:"Update",affects:["Styles"],notes:["Changes 'r' in '(required)' label from upper- to lowercase"]},{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `FeedbackBoxProps` interface."]},{date:"2024-07-03",version:"3.1.7",type:"Update",affects:["Styles"],notes:["Adds interaction tests for the Controls story."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2024-02-05",version:"2.1.5",type:"Update",affects:["Accessibility","Functionality"],notes:["Updates the focus ring style for the open button.","Updates the required comment field so it cannot be submitted when empty.","Forcibly focuses on the open button when the form is closed."]},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Accessibility"],notes:["Updates `tabindex` value from 0 to -1. See Accessibility section for details."]},{date:"2023-10-18",version:"2.1.0",type:"Update",affects:["Styles"],notes:["Remove the underline on the component's `Privacy Policy` link."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size, font color, and text link patterns."]}];function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s}),`
`,e.jsx(n.h1,{id:"feedbackbox",children:"FeedbackBox"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.3.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.2"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#notification-text",target:"_self",children:"Notification Text"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#form-fields",target:"_self",children:"Form Fields"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#feedbackbox-screens",target:"_self",children:"FeedbackBox Screens"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#form-submission-data",target:"_self",children:"Form Submission Data"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#programmatically-open",target:"_self",children:"Programmatically Open"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.p,{children:`An NYPL privacy policy link will render within every screen of the FeedbackBox
("form", "confirmation", and "error" ), and the link will open in a new tab.`}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Notes"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For the purposes of Storybook, only one (1) ",e.jsx(n.code,{children:"FeedbackBox"}),` component
example is rendered on the bottom right of this page. The `,e.jsx(n.code,{children:"FeedbackBox"}),` example
below alternately renders the "confirmation" and "error" screens on each form
submission. This is just to demonstrate the different states of the component.
In practice, the consuming app is responsible for handling the form submission.`]}),`
`,e.jsxs(n.li,{children:["The background color and color mode can be updated in the ",e.jsx(n.code,{children:"FeedbackBox"}),`
"With Controls" tab in Storybook. To get a better idea of how the `,e.jsx(n.code,{children:"FeedbackBox"}),`
component renders on top of different color backgrounds in this Docs page,
the background is scrollable and it contains four different background colors:
`,e.jsx(n.code,{children:"ui.white"}),", ",e.jsx(n.code,{children:"ui.bg.default"}),", ",e.jsx(n.code,{children:"dark.ui.bg.default"}),", and ",e.jsx(n.code,{children:"dark.ui.bg.page"}),"."]}),`
`]}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FeedbackBox"}),` component is a complex component built from various Reservoir
DS and Chakra components. The two main components are the DS `,e.jsx(n.code,{children:"Button"}),` component
used to open Chakra's `,e.jsx(n.code,{children:"Drawer"})," component."]}),`
`,e.jsxs(n.p,{children:[`When the primary button is clicked, the dialog opens and focus is set to the
first focusable element which is the "close" button that contains minus icon in
the header of the dialog. While opened, focus is trapped within the dialog until
it is closed either by clicking on the "close" or "Cancel" buttons, pressing the
"Escape" key, or by clicking outside of the dialog. When the `,e.jsx(n.code,{children:"FeedbackBox"}),`
component is closed, focus is set back to the primary button that opened the
dialog.`]}),`
`,e.jsxs(n.p,{children:["The markup of the ",e.jsx(n.code,{children:"FeedbackBox"}),` structurally matches the modal dialog pattern
that is implemented by Chakra's `,e.jsx(n.code,{children:"Modal"})," and ",e.jsx(n.code,{children:"Drawer"}),` components. The container
has `,e.jsx(n.code,{children:"role=”dialog”"}),", ",e.jsx(n.code,{children:"aria-modal=”true”"}),", ",e.jsx(n.code,{children:"tabindex={0}"}),", ",e.jsx(n.code,{children:"aria-labelledby"}),` that
references the title within the dialog, and `,e.jsx(n.code,{children:"aria-describedby"}),` that references a
descriptive piece of text within the dialog.`]}),`
`,e.jsxs(n.p,{children:["Within the ",e.jsx(n.code,{children:"FeedbackBox"}),` component, the radio input field is created from the DS
`,e.jsx(n.code,{children:"RadioGroup"})," and ",e.jsx(n.code,{children:"Radio"}),` components, and input fields are created from the DS
`,e.jsx(n.code,{children:"TextInput"}),` component. Each of these components has their own accessibility
features documented in their respective Storybook pages.`]}),`
`,e.jsxs(n.p,{children:["After the ",e.jsx(n.code,{children:"FeedbackBox"}),` form is submitted, focus is set to the confirmation
message or the error message if an error occurs. The `,e.jsx(n.code,{children:"tabindex"}),` for the focused
element is set to `,e.jsx(n.code,{children:'"-1"'}),`, allowing for programmatic focus to be set. After focus
is set programmatically, the user will be in control of focus and will not be
able to tab back to the confirmation message or error message after tabbing
away. This is standard accessibility behavior and the user should not expect to
be able to tab back to a non-interactive element.`]}),`
`,e.jsxs(n.p,{children:["Whereas the ",e.jsx(n.code,{children:"FeedbackBox"}),`'s primary button element is placed within the DOM
structure where it is rendered, the dialog DOM structure is appended to the end
of the DOM tree and it is done by Chakra.`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role",rel:"nofollow",children:"MDN ARIA: dialog role"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box",rel:"nofollow",children:"W3C ARIA role=dialog"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://v1.chakra-ui.com/docs/components/overlay/modal#accessibility",rel:"nofollow",children:"Chakra Modal Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://v1.chakra-ui.com/docs/components/overlay/drawer#accessibility",rel:"nofollow",children:"Chakra Drawer Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-button--docs#accessibility",children:"DS Button Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-textinput--docs#accessibility",children:"DS TextInput Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-radio--docs#accessibility",children:"DS Radio Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-form-elements-radiogroup--docs#accessibility",children:"DS RadioGroup Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"notification-text",children:"Notification Text"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"notificationText"}),` prop can be used to display important or relevant
information above the form's description text. The text or JSX element passed
will be rendered in a Reservoir `,e.jsx(n.code,{children:"Notification"})," component."]}),`
`,e.jsx(n.h2,{id:"form-fields",children:"Form Fields"}),`
`,e.jsx(n.h3,{id:"comment-field",children:"Comment Field"}),`
`,e.jsxs(n.p,{children:[`By default, only the required "Comment" textarea field will render inside the
`,e.jsx(n.code,{children:"FeedbackBox"})," component. There is a 500 character limit for this textarea field."]}),`
`,e.jsxs(n.p,{children:[`Validating the "Comment" textarea field is the responsibility of the consuming
application. If there is an error, the `,e.jsx(n.code,{children:"isInvalidComment"}),` prop can be used to
toggle the invalid state.`]}),`
`,e.jsx(n.h3,{id:"category-field",children:"Category Field"}),`
`,e.jsxs(n.p,{children:[`The "Category" field is an optional form field. This radio group form field
contains three values: "Comment", "Correction", and "Bug". The "Comment" option
will be selected by default. Use the `,e.jsx(n.code,{children:"showCategoryField"}),` prop to toggle the
visibility of this field.`]}),`
`,e.jsx(n.h3,{id:"email-field",children:"Email Field"}),`
`,e.jsxs(n.p,{children:[`The "Email" field is an optional form field. This text input form field is an
email field. Use the `,e.jsx(n.code,{children:"showEmailField"}),` prop to toggle the visibility of this
field.`]}),`
`,e.jsxs(n.p,{children:[`Validating the "Email" address value is the responsibility of the consuming
application. If there is an error, the `,e.jsx(n.code,{children:"isInvalidEmail"}),` prop can be used to
toggle the invalid state.`]}),`
`,e.jsx(n.h2,{id:"feedbackbox-screens",children:"FeedbackBox Screens"}),`
`,e.jsxs(n.p,{children:["There are three main screens that will render in the ",e.jsx(n.code,{children:"FeedbackBox"}),` component:
the "form", "confirmation", and "error" screens. These are also based on the
`,e.jsx(n.code,{children:"view"})," prop available values."]}),`
`,e.jsxs(n.p,{children:[`Once the form is submitted, a three (3) second timer starts. Once the timer is
complete, the "confirmation" screen is rendered. This is the default behavior
when no success or failure input is provided by the consuming application. This
means that if there is an error and the consuming application does not tell the
`,e.jsx(n.code,{children:"FeedbackBox"}),` component that there is an error, the "confirmation" screen will
render and this is not the correct or expected behavior.`]}),`
`,e.jsx(n.h3,{id:"form",children:"Form"}),`
`,e.jsxs(n.p,{children:["This is the initial screen that will render based on the default ",e.jsx(n.code,{children:"view"}),` prop
value of `,e.jsx(n.code,{children:'"form"'}),`. The "form" screen will render an optional notification,
an optional description, up to three form fields, the privacy policy link,
and "Submit" and "Cancel" buttons.`]}),`
`,e.jsx(n.h3,{id:"confirmation",children:"Confirmation"}),`
`,e.jsxs(n.p,{children:[`There are two ways to render the "confirmation" screen. This screen will render
automatically after the form is submitted and the three (3) second timer is
complete. The other option is to pass the `,e.jsx(n.code,{children:"view"})," prop a value of ",e.jsx(n.code,{children:'"confirmation"'}),`
to render the "confirmation" screen. This is useful if the consuming application
wants to render the "confirmation" screen immediately after a successful
API request.`]}),`
`,e.jsxs(n.p,{children:[`The "confirmation" screen will render a check icon, a basic success message that
is always the same, an email-specific message when `,e.jsx(n.code,{children:"showEmailField"}),` is set to
`,e.jsx(n.code,{children:"true"}),", an additional confirmation message set through the ",e.jsx(n.code,{children:"confirmationText"}),`
prop, the privacy policy link, and a "Return to Browsing" button. When rendered,
focus will be set to the confirmation message.`]}),`
`,e.jsxs(n.p,{children:[`Below is an example of the "confirmation" screen rendered immediately after a
successful API request. Setting the `,e.jsx(n.code,{children:"view"})," prop through a ",e.jsx(n.code,{children:"useState"}),` value is
only one way to update and pass the "confirmation" value to the `,e.jsx(n.code,{children:"FeedbackBox"}),`
component. Using the `,e.jsx(n.code,{children:"fetch"})," API is one possible approach."]}),`
`,e.jsx(t,{code:`
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
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsxs(n.p,{children:['The only way to render the "error" screen is by passing the ',e.jsx(n.code,{children:"view"}),` prop a value
of `,e.jsx(n.code,{children:'"error"'}),". This ",e.jsx(n.strong,{children:"should"}),` be used if there is an error with the form
submission API request. This is the responsibility of the consuming application.`]}),`
`,e.jsx(n.p,{children:`The "error" screen will render an error icon, an error message, the privacy
policy link, and "Try Again" and "Return to Browsing" buttons. When rendered,
focus will be set to the error message.`}),`
`,e.jsxs(n.p,{children:[`Below is an example of the "error" screen rendered immediately after a failed
API request. Setting the `,e.jsx(n.code,{children:"view"})," prop through a ",e.jsx(n.code,{children:"useState"}),` value is only one way
to update and pass the "error" value to the `,e.jsx(n.code,{children:"FeedbackBox"}),` component. Using the
`,e.jsx(n.code,{children:"fetch"})," API is one possible approach."]}),`
`,e.jsx(t,{code:`
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
`,e.jsx(n.h2,{id:"form-submission-data",children:"Form Submission Data"}),`
`,e.jsxs(n.p,{children:["Submitted form data can be retrieved when the ",e.jsx(n.code,{children:"FeedbackBox"}),` component is
submitted through the required `,e.jsx(n.code,{children:"onSubmit"}),` prop. This prop expects a function and
it will be called when the form is submitted. Similar to other DS form-components
that have function props, the data from the component will be returned in the
function's argument. In this case, it will be a single object.`]}),`
`,e.jsxs(n.p,{children:[`The submitted form data will be passed as an object that the parent component
can use. The object will always contain the `,e.jsx(n.code,{children:"comment"}),` field. If the "category"
field is visible through the `,e.jsx(n.code,{children:"showCategoryField"}),` prop, then the object will also
contain the `,e.jsx(n.code,{children:"category"}),` field. If the "email" field is visible through the
`,e.jsx(n.code,{children:"showEmailField"})," prop, then the object will also contain the ",e.jsx(n.code,{children:"email"})," field."]}),`
`,e.jsxs(n.p,{children:["Below is an example callback function named ",e.jsx(n.code,{children:"onSubmit"}),` that is passed to the
`,e.jsx(n.code,{children:"FeedbackBox"})," component's ",e.jsx(n.code,{children:"onSubmit"}),` prop. The form data will be returned through
the function's argument as an object, called `,e.jsx(n.code,{children:"values"})," in the example below."]}),`
`,e.jsx(t,{code:`
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
`,e.jsx(n.h3,{id:"hidden-field-values",children:"Hidden Field Values"}),`
`,e.jsxs(n.p,{children:[`If more key/value pair data needs to be submitted to the API endpoint along with
the form data from the `,e.jsx(n.code,{children:"FeedbackBox"})," component, the ",e.jsx(n.code,{children:"hiddenFields"}),` prop can be
used. This prop accepts an object of key/value pairs. The object data will be
merged with the submitted form data.`]}),`
`,e.jsx(t,{code:`
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
`,e.jsx(n.h2,{id:"programmatically-open",children:"Programmatically Open"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FeedbackBox"}),` component can be opened programmatically if needed, but this
requires an extra step when importing and implementing the component. Instead
of importing the `,e.jsx(n.code,{children:"FeedbackBox"})," component directly, use the ",e.jsx(n.code,{children:"useFeedbackBox"}),` hook
to get the `,e.jsx(n.code,{children:"FeedbackBox"})," component and helper functions."]}),`
`,e.jsx(t,{code:`
import { useFeedbackBox } from "@nypl/design-system-react-components";
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["This hook will return an object with the ",e.jsx(n.code,{children:"FeedbackBox"}),` component, a boolean
value, and two functions.`]}),`
`,e.jsx(t,{code:`
const { FeedbackBox, isOpen, onClose, onOpen } = useFeedbackBox();
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FeedbackBox"}),` component is the same as the one imported directly, but now
the `,e.jsx(n.code,{children:"isOpen"})," value and ",e.jsx(n.code,{children:"onClose"})," and ",e.jsx(n.code,{children:"onOpen"}),` functions are exposed and
available to the consuming application. The only function that will be used
directly is the `,e.jsx(n.code,{children:"onOpen"})," function. Pass ",e.jsx(n.code,{children:"isOpen"})," and ",e.jsx(n.code,{children:"onClose"}),` to the
`,e.jsx(n.code,{children:"FeedbackBox"}),"."]}),`
`,e.jsx(t,{code:`
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
`,e.jsxs(n.p,{children:["Finally, the ",e.jsx(n.code,{children:"onOpen"})," function can be used to programmatically open the ",e.jsx(n.code,{children:"FeedbackBox"}),`
component through another element or behavior in the consuming app. See the
example below that uses a custom `,e.jsx(n.code,{children:"Button"}),` to open the Modal. The existing button
that is rendered by the `,e.jsx(n.code,{children:"FeedbackBox"})," component will still work as expected."]}),`
`,e.jsx(t,{code:`
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
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(m,{changelogData:x})]})}function j(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{j as default};
