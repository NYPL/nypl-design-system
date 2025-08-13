import{u as h,j as e,M as u,L as o,bv as a,ay as x,S as i,C as s,bw as l,az as p}from"./iframe-CFLVJZOZ.js";import{C as m}from"./ComponentChangelogTable-DvY0SxTs.js";import{M as g,W as d,u as r,C as f,a as j,D as b,b as y}from"./Modal.stories-CL2I0y0Z.js";const w=[{date:"2025-05-22",version:"3.6.2",type:"Update",affects:["Styles"],notes:["Removes use of `useNYPLBreakpoints` and replaces with equivalent Chakra syntax."]},{date:"2025-03-20",version:"3.5.5",type:"Update",affects:["Styles"],notes:["Updates spacing and border radius to match VDL."]},{date:"2024-05-15",version:"3.1.3",type:"Update",affects:["Functionality","Styles"],notes:["Adds new `type` prop for the `'confirmation'` variant."]},{date:"2024-03-28",version:"3.0.1",type:"Update",affects:["Styles"],notes:["Sets default heading size to 'heading4' for `Modal` header."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Functionality","Styles"],notes:["Chakra 2.8 update.","Uses the useDSHeading hook internally to render a DS Heading for the `Modal`'s `headingText` prop."]}];function c(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:g}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.1.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.2"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#best-practices",target:"_self",children:"Best Practices"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#using-the-modal-usemodal-vs-modaltrigger",target:"_self",children:"Usage"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#modaltrigger",target:"_self",children:"ModalTrigger"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#modaltrigger-component-props",target:"_self",children:"ModalTrigger Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#usemodal",target:"_self",children:"useModal"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#usemodal-component-props",target:"_self",children:"useModal Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#confirmation-variant",target:"_self",children:"Confirmation Modal Variant"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#default-heading-text",target:"_self",children:"Default Heading Text"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#custom-heading-text",target:"_self",children:"Custom Heading Text"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#content-window-scrolling",target:"_self",children:"Content Window Scrolling"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(o,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Modal"}),` component is used to focus a user's attention on a piece of information or a specific task via a window
that overlays the page content. When a modal is activated, user interactions with the page are blocked until a task is
completed or canceled.`]}),`
`,e.jsx(n.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Modal"}),` component should only be used when a user action that has destructive, or irreversible consequences needs
to be confirmed. Use modal dialogs for important warnings, as a way to prevent or correct critical errors (e.g.
confirm a cancellation). For example, if a user is canceling a reservation or appointment, a modal can be used to
confirm that the user intended to cancel the item. With this pattern, modals should always present a cancel button to
exit out of the modal and a button that will execute the selected action.`]}),`
`,e.jsxs(n.p,{children:[`When a modal is first activated, it can be very jarring for users, especially users with cognitive disabilities.
Because of this, the `,e.jsx(n.code,{children:"Modal"}),` component should only be used when a user's direct action activates the modal.
A modal should never appear out of no where without a user's explicit action to activate the modal.
For example, a modal should not open on its own three seconds after a page loads. Conversely, a modal may be activated
when a user clicks a "Delete item" button.`]}),`
`,e.jsx(n.p,{children:"Modal should not be used to display media like image and videos."}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"modal-titles",children:"Modal titles"}),`
`,e.jsx(n.p,{children:`Modals must have a title and the title should communicate the general idea of the modal intention, such as the outcome
of an action. Titles should use the same or similar phrasing as the call-to-action that was used to activate the modal.`}),`
`,e.jsx(n.h3,{id:"modal-descriptions",children:"Modal descriptions"}),`
`,e.jsx(n.p,{children:`Modal descriptions should include any additional information or context that a user needs to know in order to make one
of the decisions offered by the action buttons. Descriptions should be written in complete sentences.`}),`
`,e.jsx(n.h3,{id:"action-button-labels",children:"Action button labels"}),`
`,e.jsx(n.p,{children:`Action button labels should be specific and actionable and should ultimately describe the next steps for a user.
When possible, the main action button label should use the same language as the action mentioned in the modal title.
If someone were to only read the word or phrase on the button, they should be able to get the general idea of the
modal’s underlying message. For example, if a modal's title is “Delete item,” use "Delete" instead of "Yes" for the
main action button label.`}),`
`,e.jsx(n.h3,{id:"asking-questions",children:"Asking questions"}),`
`,e.jsx(n.p,{children:`Avoid asking a question in a modal title. Questions such as “Are you sure you want to quit?” or “Do you want to cancel?”
are redundant and can undermine a user's confidence in a decision they've already made when taking the previous action
that activated the modal. Asking a question also leads to a yes/no set of actions, which can become confusing. Instead,
re-frame the wording of the modal title to focus on the outcome or effect.`}),`
`,e.jsx(n.p,{children:`It’s OK to ask a question in a modal description to confirm if a user wants to go ahead with an action.
However, even when a question is used in a modal description, distinct button action labels should be used to show that
a user has control over what happens next.`}),`
`,e.jsxs(n.h3,{id:"example-text-for-a-confirmation-modal",children:["Example text (for a ",e.jsx(n.code,{children:"confirmation"})," modal)"]}),`
`,e.jsx(n.p,{children:"Modal title: Confirm reservation cancellation"}),`
`,e.jsx(n.p,{children:"Modal description: Your upcoming reservation will be cancelled."}),`
`,e.jsx(n.p,{children:"Action button: [Cancel] [Confirm]"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:`When a modal is activated, focus should be set to a significant element that gives context to the modal intention.
When a modal closes, focus should return to an element relevant to the action that was selected in the modal.
For example, if a modal was closed by clicking a cancel button, focus should be placed on the element that was
originally clicked to activate the modal. Similarly, if a modal was closed by clicking a button that will add a new
element to the page, focus should be placed on the new element that was added to the page.`}),`
`,e.jsx(n.p,{children:`Keyboard focus should also be constrained to remain within the dialog while it is open. Pressing TAB should advance
focus to the next interactive element in the dialog. If pressing tab while focused on the last element, then focus
should wrap to the first interactive element within the dialog. Similarly when tabbing backward with SHIFT+TAB then
focus should proceed backward until hitting the first interactive element and then wrap to the last interactive element.`}),`
`,e.jsx(n.p,{children:"In addition to having a cancel button, users should be able to exit a modal by pressing the ESC key."}),`
`,e.jsx(n.h3,{id:"resources",children:"Resources"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",rel:"nofollow",children:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"})}),`
`,e.jsx(n.h2,{id:"using-the-modal-usemodal-vs-modaltrigger",children:"Using the modal: useModal vs. ModalTrigger"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ModalTrigger"}),' is a component that contains both the "trigger", or the button that opens the modal, and the modal itself. When you use ',e.jsx(n.code,{children:"ModalTrigger"}),`,
you pass only the modal props and the button text, and the `,e.jsx(n.code,{children:"ModalTrigger"})," calls the ",e.jsx(n.code,{children:"onClose"})," and ",e.jsx(n.code,{children:"onOpen"})," functions internally."]}),`
`,e.jsxs(n.p,{children:["Or, you can call ",e.jsx(n.code,{children:"useModal()"}),". ",e.jsx(n.code,{children:"useModal()"})," returns the Modal component, the ",e.jsx(n.code,{children:"onClose"})," function, and the ",e.jsx(n.code,{children:"onOpen"}),` function, giving you the responsibility to
pass `,e.jsx(n.code,{children:"onOpen"})," and ",e.jsx(n.code,{children:"onClose"})," to your custom open and close functions."]}),`
`,e.jsx(n.h2,{id:"modaltrigger",children:"ModalTrigger"}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(i,{code:`
import { ModalTrigger } from "@nypl/design-system-react-components";

//...

<ModalTrigger
buttonText="Button Text"
id="modal-trigger"
modalProps={{
  type: "default",
  bodyContent: "body text",
  closeButtonLabel: "Close Button",
  headingText: (
    <Heading
      level="h3"
      display="flex"
      alignItems="center"
      gap="xs"
      size="heading5"
    >
      <>
        <Icon
          color="ui.success.primary"
          name="actionCheckCircleFilled"
          size="large"
        />
        Modal Heading Text
      </>
    </Heading>
  ),
  onClose: () => {
    console.log("custom close");
  },
}}
/>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"modaltrigger-component-props",children:"ModalTrigger Component Props"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h2,{id:"usemodal",children:"useModal"}),`
`,e.jsx(a,{of:p}),`
`,e.jsxs(n.p,{children:["You can retrieve the DS ",e.jsx(n.code,{children:"Modal"})," component and the ",e.jsx(n.code,{children:"onOpen"})," and ",e.jsx(n.code,{children:"onClose"}),` function
handlers when calling the `,e.jsx(n.code,{children:"useModal"})," function. The ",e.jsx(n.code,{children:"onOpen"}),` function handler is
used to open the `,e.jsx(n.code,{children:"Modal"}),` React component. This function can be passed to any
number of elements that use the `,e.jsx(n.code,{children:"onClick"})," attribute. The ",e.jsx(n.code,{children:"onClose"}),` function can
be used on any element that uses the `,e.jsx(n.code,{children:"onClick"})," attribute."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["NOTE: in this case, the ",e.jsx(n.code,{children:"buttonText"}),` prop is not necessary since you have to
create and render your own button.`]})}),`
`,e.jsx(i,{code:`
import { useModal } from "@nypl/design-system-react-components";
// useModal example with default props
export const ModalStory = (args) => {
const { onClose, onOpen, Modal } = useModal();
const modalProps = {
  type: "default",
  bodyContent: (
    <>
      <Button id="custom-close" onClick={onClose}>
        Go back
      </Button>
      <p>This is the body content.</p>
      <Button id="custom-close2" onClick={onClose}>
        This is a custom close button.
      </Button>
    </>
  ),
  closeButtonLabel: "Close Button",
  headingText: "Modal Heading Text",
  onClose: () => {
    console.log("custom close");
    onClose();
  },
};
return (
  <>
    <ButtonGroup>
      <Button id="1" onClick={onOpen}>
        Open Modal
      </Button>
      <Button buttonType="secondary" id="2" onClick={onOpen}>
        I can open the modal, too
      </Button>
    </ButtonGroup>
    <div onClick={onOpen}>
      I'm just a div and shouldn't be used in production but this is just an
      example
    </div>
    <Modal {...modalProps} />
  </>
);
};
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"usemodal-component-props",children:"useModal Component Props"}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h2,{id:"confirmation-variant",children:"Confirmation Variant"}),`
`,e.jsxs(n.p,{children:['The "confirmation" ',e.jsx(n.code,{children:"Modal"}),` variant is used when the modal can confirm or revoke the modal's content. Accordingly, there are two buttons
in the footer instead of the one in the default modal. Each button has its own custom function (`,e.jsx(n.code,{children:"onCancel"}),", ",e.jsx(n.code,{children:"onConfirm"}),`) that will close the modal.
Additionally, the `,e.jsx(n.code,{children:"onCancel"}),` function will be called when using
any of the other available methods for closing the modal,
including clicking the "X" close button in the upper right corner
of the modal, clicking anywhere outside the modal UI, or using
the `,e.jsx(n.code,{children:"ESC"})," button."]}),`
`,e.jsx(n.p,{children:"Notes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"onConfirm"}),", ",e.jsx(n.code,{children:"onCancel"}),", and ",e.jsx(n.code,{children:"confirmButtonLabel"})," props are required for this variant."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"onClose"})," modal prop should NOT be passed."]}),`
`,e.jsxs(n.li,{children:["When using the ",e.jsx(n.code,{children:"ModalTrigger"}),", ",e.jsx(n.code,{children:"onConfirm"})," and ",e.jsx(n.code,{children:"onCancel"})," will call the ",e.jsx(n.code,{children:"onClose"})," from the ",e.jsx(n.code,{children:"useModal"})," hook internally."]}),`
`,e.jsxs(n.li,{children:["When using the ",e.jsx(n.code,{children:"useModal"})," hook, as with the ",e.jsx(n.code,{children:"onClose"})," prop, pass the ",e.jsx(n.code,{children:"onClose"})," function from the hook to ",e.jsx(n.code,{children:"onCancel"})," and ",e.jsx(n.code,{children:"onConfirm"}),`:
for example, `,e.jsx(n.code,{children:"onCancel: () => { onClose(); }"}),"."]}),`
`]}),`
`,e.jsx(i,{code:`
// ModalTrigger example with confirmation props
<ModalTrigger
  buttonText="Confirm"
  id="modal-confirmation"
  modalProps={{
    type: "confirmation",
    bodyContent: "The action is happening",
    closeButtonLabel: "Cancel action",
    confirmButtonLabel: "Confirm action",
    onCancel: () => {
      console.log("Custom cancel");
      // Calls onClose internally.
    },
    onConfirm: () => {
      console.log("Custom confirm");
      // Calls onClose internally.
    },
    headingText: (
      <Heading
        level="h3"
        display="flex"
        alignItems="center"
        gap="xs"
        size="heading5"
      >
        <>
          <Icon
            color="ui.success.primary"
            name="actionCheckCircleFilled"
            size="large"
          />
          This is an action
        </>
      </Heading>
    ),
  }}
/>
`,language:"jsx"}),`
`,e.jsx(n.p,{children:'See console for "Cancel"/"Confirm" messages from their respective buttons.'}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"default-heading-text",children:"Default Heading Text"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"Modal"})," component will render a DS level ",e.jsx(n.code,{children:"h2"}),` and size
`,e.jsx(n.code,{children:"heading4"})," ",e.jsx(n.code,{children:"Heading"})," component when a string is passed to the ",e.jsx(n.code,{children:"headingText"}),`
prop.`]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"custom-heading-text",children:"Custom Heading Text"}),`
`,e.jsxs(n.p,{children:[`However, a custom heading can be
passed to the `,e.jsx(n.code,{children:"headingText"}),` property. This can be useful when you want to add
additional elements to the heading, such as an icon, or to set the level to
something other than an `,e.jsx(n.code,{children:"h2"}),"."]}),`
`,e.jsxs(n.p,{children:["In the following example, the heading is an ",e.jsx(n.code,{children:"h3"})," ",e.jsx(n.code,{children:"Heading"}),` component with an
additional icon.`]}),`
`,e.jsx(i,{code:`
// Example for the ModalTrigger component.
modalProps={{
type: "default",
bodyContent: "body text",
closeButtonLabel: "Close Button",
headingText: (
  <Heading
    level="h3"
    display="flex"
    alignItems="center"
    gap="xs"
    size="heading5"
  >
    <>
      <Icon
        color="ui.success.primary"
        name="actionCheckCircleFilled"
        size="large"
      />
      Modal Heading Text
    </>
  </Heading>
),
}}
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"content-window-scrolling",children:"Content Window Scrolling"}),`
`,e.jsxs(n.p,{children:["In either ",e.jsx(n.code,{children:"Modal"})," pattern, the main content inside the ",e.jsx(n.code,{children:"Modal"}),` component will
scroll while the `,e.jsx(n.code,{children:"Modal"}),`'s header and footer still stay static. Check the
example below with a lot of content inside the `,e.jsx(n.code,{children:"Modal"}),"."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(m,{changelogData:w}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{})})]})}function T(t={}){const{wrapper:n}={...h(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{T as default};
