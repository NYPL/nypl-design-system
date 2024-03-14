import{j as n,a as t,F as h}from"./jsx-runtime-fdf4db99.js";import{M as u,D as l,b as r,C as a,A as m}from"./index-445595fc.js";import{M as p,W as s,u as g,C as f}from"./Modal.stories-122875dd.js";import{M as b,u as w}from"./Modal-0e03a3bb.js";import{L as o}from"./Link-24c1437a.js";import{u as c}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./ButtonGroup-c2c033a6.js";import"./useNYPLBreakpoints-2881f83d.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./chakra-ui-modal.esm-25230bce.js";import"./index-13103a50.js";import"./defineProperty-84a138b7.js";import"./chakra-ui-portal.esm-6752a0d2.js";import"./chakra-ui-transition.esm-3069754e.js";function d(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a",strong:"strong"},c(),i.components);return t(h,{children:[n(u,{of:p}),`
`,n(e.h1,{id:"modal",children:"Modal"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.1.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.0.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#best-practices",target:"_self",children:"Best Practices"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#modaltrigger",target:"_self",children:"ModalTrigger"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#modaltrigger-component-props",target:"_self",children:"ModalTrigger Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#usemodal",target:"_self",children:"useModal"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#usemodal-component-props",target:"_self",children:"useModal Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(o,{href:"#content-window-scrolling",target:"_self",children:"Content Window Scrolling"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Modal"}),` component is used to focus a user's attention on a piece of information or a specific task via a window
that overlays the page content. When a modal is activated, user interactions with the page are blocked until a task is
completed or canceled.`]}),`
`,n(e.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Modal"}),` component should only be used when a user action that has destructive, or irreversible consequences needs
to be confirmed. Use modal dialogs for important warnings, as a way to prevent or correct critical errors (e.g.
confirm a cancellation). For example, if a user is canceling a reservation or appointment, a modal can be used to
confirm that the user intended to cancel the item. With this pattern, modals should always present a cancel button to
exit out of the modal and a button that will execute the selected action.`]}),`
`,t(e.p,{children:[`When a modal is first activated, it can be very jarring for users, especially users with cognitive disabilities.
Because of this, the `,n(e.code,{children:"Modal"}),` component should only be used when a user's direct action activates the modal.
A modal should never appear out of no where without a user's explicit action to activate the modal.
For example, a modal should not open on its own three seconds after a page loads. Conversely, a modal may be activated
when a user clicks a "Delete item" button.`]}),`
`,n(e.p,{children:"Modal should not be used to display media like image and videos."}),`
`,n(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n(e.h3,{id:"modal-titles",children:"Modal titles"}),`
`,n(e.p,{children:`Modals must have a title and the title should communicate the general idea of the modal intention, such as the outcome
of an action. Titles should use the same or similar phrasing as the call-to-action that was used to activate the modal.`}),`
`,n(e.h3,{id:"modal-descriptions",children:"Modal descriptions"}),`
`,n(e.p,{children:`Modal descriptions should include any additional information or context that a user needs to know in order to make one
of the decisions offered by the action buttons. Descriptions should be written in complete sentences.`}),`
`,n(e.h3,{id:"action-button-labels",children:"Action button labels"}),`
`,n(e.p,{children:`Action button labels should be specific and actionable and should ultimately describe the next steps for a user.
When possible, the main action button label should use the same language as the action mentioned in the modal title.
If someone were to only read the word or phrase on the button, they should be able to get the general idea of the
modal’s underlying message. For example, if a modal's title is “Delete item,” use "Delete" instead of "Yes" for the
main action button label.`}),`
`,n(e.h3,{id:"asking-questions",children:"Asking questions"}),`
`,n(e.p,{children:`Avoid asking a question in a modal title. Questions such as “Are you sure you want to quit?” or “Do you want to cancel?”
are redundant and can undermine a user's confidence in a decision they've already made when taking the previous action
that activated the modal. Asking a question also leads to a yes/no set of actions, which can become confusing. Instead,
re-frame the wording of the modal title to focus on the outcome or effect.`}),`
`,n(e.p,{children:`It’s OK to ask a question in a modal description to confirm if a user wants to go ahead with an action.
However, even when a question is used in a modal description, distinct button action labels should be used to show that
a user has control over what happens next.`}),`
`,n(e.h3,{id:"example-text",children:"Example text"}),`
`,n(e.p,{children:"Modal title: Confirm reservation cancellation"}),`
`,n(e.p,{children:"Modal description: Your upcoming reservation will be cancelled."}),`
`,n(e.p,{children:"Action buttons: [Cancel] [Confirm]"}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:`When a modal is activated, focus should be set to a significant element that gives context to the modal intention.
When a modal closes, focus should return to an element relevant to the action that was selected in the modal.
For example, if a modal was closed by clicking a cancel button, focus should be placed on the element that was
originally clicked to activate the modal. Similarly, if a modal was closed by clicking a button that will add a new
element to the page, focus should be placed on the new element that was added to the page.`}),`
`,n(e.p,{children:`Keyboard focus should also be constrained to remain within the dialog while it is open. Pressing TAB should advance
focus to the next interactive element in the dialog. If pressing tab while focused on the last element, then focus
should wrap to the first interactive element within the dialog. Similarly when tabbing backward with SHIFT+TAB then
focus should proceed backward until hitting the first interactive element and then wrap to the last interactive element.`}),`
`,n(e.p,{children:"In addition to having a cancel button, users should be able to exit a modal by pressing the ESC key."}),`
`,n(e.h3,{id:"resources",children:"Resources"}),`
`,n(e.p,{children:n(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"})}),`
`,n(e.h2,{id:"modaltrigger",children:"ModalTrigger"}),`
`,n(l,{of:b}),`
`,n(r,{code:`
import { ModalTrigger } from "@nypl/design-system-react-components";

//...

<ModalTrigger
  buttonText="Button Text"
  id="modal-trigger"
  modalProps={{
    bodyContent: "body text",
    closeButtonLabel: "Close Button",
    headingText: "Modal Heading Text",
    onClose: () => {
      console.log("custom close");
    },
  }}
/>
`,language:"jsx"}),`
`,n(e.h2,{id:"modaltrigger-component-props",children:"ModalTrigger Component Props"}),`
`,n(a,{of:s}),`
`,n(m,{of:s}),`
`,n(e.h2,{id:"usemodal",children:"useModal"}),`
`,n(l,{of:w}),`
`,t(e.p,{children:["You can retrieve the DS ",n(e.code,{children:"Modal"})," component and the ",n(e.code,{children:"onOpen"})," and ",n(e.code,{children:"onClose"}),` function
handlers when calling the `,n(e.code,{children:"useModal"})," function. The ",n(e.code,{children:"onOpen"}),` function handler is
used to open the `,n(e.code,{children:"Modal"}),` React component. This function can be passed to any
number of elements that use the `,n(e.code,{children:"onClick"})," attribute. The ",n(e.code,{children:"onClose"}),` function can
be used on any element that uses the `,n(e.code,{children:"onClick"})," attribute."]}),`
`,n(e.p,{children:t(e.strong,{children:["NOTE: in this case, the ",n(e.code,{children:"buttonText"}),` prop is not necessary since you have to
create and render your own button.`]})}),`
`,n(r,{code:`
import { useModal } from "@nypl/design-system-react-components";
// ...
export const ModalStory = (args) => {
  const { onClose, onOpen, Modal } = useModal();
  const modalProps = {
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
`,n(e.h2,{id:"usemodal-component-props",children:"useModal Component Props"}),`
`,n(a,{of:g}),`
`,n(e.h2,{id:"content-window-scrolling",children:"Content Window Scrolling"}),`
`,t(e.p,{children:["In either ",n(e.code,{children:"Modal"})," pattern, the main content inside the ",n(e.code,{children:"Modal"}),` component will
scroll while the `,n(e.code,{children:"Modal"}),`'s header and footer still stay static. Check the
example below with a lot of content inside the `,n(e.code,{children:"Modal"}),"."]}),`
`,n(a,{of:f})]})}function ne(i={}){const{wrapper:e}=Object.assign({},c(),i.components);return e?n(e,Object.assign({},i,{children:n(d,i)})):d(i)}export{ne as default};
//# sourceMappingURL=Modal-da40d8c7.js.map
