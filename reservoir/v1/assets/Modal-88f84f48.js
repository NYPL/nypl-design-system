import{j as n,a as o,F as h}from"./jsx-runtime-09ad29cb.js";import{M as p,D as l,b as d,C as r,A as m}from"./index-42243e0e.js";import{M as u,W as c,u as g,C as f}from"./Modal.stories-76d8bd1a.js";import{M,u as b}from"./Modal-3c14c6e7.js";import{L as t}from"./Link-0ed02cf7.js";import{u as a}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./ButtonGroup-3ea9dbd7.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./Heading-2ec2ea62.js";import"./chakra-ui-modal.esm-af0e92e4.js";import"./chakra-ui-focus-lock.esm-eb172e6c.js";import"./index-fb519959.js";import"./defineProperty-f749b14d.js";import"./chakra-ui-portal.esm-c70f6466.js";import"./chakra-ui-transition.esm-402cd1c1.js";function s(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",strong:"strong"},a(),i.components);return o(h,{children:[n(p,{of:u}),`
`,n(e.h1,{id:"modal",children:"Modal"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.1.0"})})]}),o(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[`
`,n(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#modaltrigger",target:"_self",children:"ModalTrigger"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#modaltrigger-component-props",target:"_self",children:"ModalTrigger Component Props"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#usemodal",target:"_self",children:"useModal"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#usemodal-component-props",target:"_self",children:"useModal Component Props"}),`
`]}),`
`,o(e.li,{children:[`
`,n(t,{href:"#content-window-scrolling",target:"_self",children:"Content Window Scrolling"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(e.p,{children:n(e.em,{children:`Note: This component is going through an accessibility review and is not
recommended for use until it is updated.`})}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:"TBD"}),`
`,n(e.h2,{id:"modaltrigger",children:"ModalTrigger"}),`
`,n(l,{of:M}),`
`,n(d,{code:`
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
`,n(r,{of:c}),`
`,n(m,{of:c}),`
`,n(e.h2,{id:"usemodal",children:"useModal"}),`
`,n(l,{of:b}),`
`,o(e.p,{children:["You can retrieve the DS ",n(e.code,{children:"Modal"})," component and the ",n(e.code,{children:"onOpen"})," and ",n(e.code,{children:"onClose"}),` function
handlers when calling the `,n(e.code,{children:"useModal"})," function. The ",n(e.code,{children:"onOpen"}),` function handler is
used to open the `,n(e.code,{children:"Modal"}),` React component. This function can be passed to any
number of elements that use the `,n(e.code,{children:"onClick"})," attribute. The ",n(e.code,{children:"onClose"}),` function can
be used on any element that uses the `,n(e.code,{children:"onClick"})," attribute."]}),`
`,n(e.p,{children:o(e.strong,{children:["NOTE: in this case, the ",n(e.code,{children:"buttonText"}),` prop is not necessary since you have to
create and render your own button.`]})}),`
`,n(d,{code:`
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
`,n(r,{of:g}),`
`,n(e.h2,{id:"content-window-scrolling",children:"Content Window Scrolling"}),`
`,o(e.p,{children:["In either ",n(e.code,{children:"Modal"})," pattern, the main content inside the ",n(e.code,{children:"Modal"}),` component will
scroll while the `,n(e.code,{children:"Modal"}),`'s header and footer still stay static. Check the
example below with a lot of content inside the `,n(e.code,{children:"Modal"}),"."]}),`
`,n(r,{of:f})]})}function ne(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?n(e,Object.assign({},i,{children:n(s,i)})):s(i)}export{ne as default};
//# sourceMappingURL=Modal-88f84f48.js.map
