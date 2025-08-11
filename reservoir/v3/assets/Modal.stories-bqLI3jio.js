import {
  ay as u,
  j as e,
  H as p,
  I,
  az as k,
  n as E,
  o as i,
  L as h,
} from "./iframe-D93LbwGv.js";
const z = {
    title: "Components/Overlays & Switchers/Modal",
    component: u,
    argTypes: {
      buttonText: { control: { type: "text" } },
      id: { control: !1 },
      modalProps: {
        control: { type: "object" },
        description:
          "Props to update the internal `Modal` component. This contains the`bodyContent`, `closeButtonLabel`, `confirmButtonLabel`, `headingText`, `isOpen`,`onClose`, or `onCancel` and `onConfirm`, and `type` props",
      },
    },
  },
  o = {
    args: {
      buttonText: "Button Text",
      id: "modal-trigger",
      modalProps: {
        type: "default",
        bodyContent: "body text",
        closeButtonLabel: "Close Button",
        headingText: e.jsx(p, {
          level: "h3",
          display: "flex",
          alignItems: "center",
          gap: "xs",
          size: "heading5",
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsx(I, {
                color: "ui.success.primary",
                name: "actionCheckCircleFilled",
                size: "large",
              }),
              "Modal Heading Text",
            ],
          }),
        }),
        onClose: () => {
          console.log("custom close");
        },
      },
    },
    render: (t) => e.jsx(u, { ...t }),
    parameters: { jest: ["Modal.test.tsx"] },
  },
  _ = () => {
    const { onClose: t, onOpen: n, Modal: d } = k(),
      m = {
        type: "default",
        bodyContent: e.jsxs(e.Fragment, {
          children: [
            e.jsx(i, { id: "custom-close", onClick: t, children: "Go back" }),
            e.jsx("p", { children: "This is the body content." }),
            e.jsx(i, {
              id: "custom-close2",
              onClick: t,
              children: "This is a custom close button.",
            }),
          ],
        }),
        closeButtonLabel: "Close Button",
        headingText: "Modal Heading Text",
        onClose: () => {
          console.log("custom close"), t();
        },
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(E, {
          children: [
            e.jsx(i, { id: "1", onClick: n, children: "Open Modal" }),
            e.jsx(i, {
              buttonType: "secondary",
              id: "2",
              onClick: n,
              children: "I can open the modal, too",
            }),
          ],
        }),
        e.jsx("div", {
          onClick: n,
          children:
            "I'm just a div and shouldn't be used in production but this is just an example",
        }),
        e.jsx(d, { ...m }),
      ],
    });
  },
  V = () => {
    const { onClose: t, onOpen: n, Modal: d } = k(),
      m = {
        type: "confirmation",
        bodyContent: e.jsx("p", { children: "This is the body content." }),
        closeButtonLabel: "Cancel Button",
        confirmButtonLabel: "Confirm Button",
        headingText: "useModal with Confirmation Variant",
        onCancel: () => {
          console.log("custom cancel"), t();
        },
        onConfirm: () => {
          console.log("custom confirm"), t();
        },
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(E, {
          children: [
            e.jsx(i, {
              id: "1",
              onClick: n,
              children: "Open Confirmation Modal",
            }),
            e.jsx(i, {
              buttonType: "secondary",
              id: "2",
              onClick: n,
              children: "I can open the modal, too",
            }),
          ],
        }),
        e.jsx(d, { ...m }),
      ],
    });
  },
  a = {
    argTypes: {
      type: {
        options: ["default", "confirmation"],
        table: { defaultValue: { summary: "default" } },
        description: "Modal variants: default or confirmation.",
      },
      buttonText: { table: { disable: !0 } },
      bodyContent: {
        control: { type: "text" },
        description: "The content to display in the modal body.",
      },
      closeButtonLabel: {
        control: { type: "text" },
        description:
          "The label for the close button OR the label for the cancel button in the confirmation variant.",
      },
      confirmButtonLabel: {
        control: { type: "text" },
        description: "The label for the confirm button.",
      },
      headingText: {
        control: { type: "text" },
        description:
          "The text to display in the modal heading. Can be a string or JSX Element.",
      },
      id: { control: !1 },
      isOpen: {
        control: !1,
        description: "Boolean to determine if the modal is open or closed.",
      },
      onClose: {
        control: !1,
        description:
          "Function to call when the modal is closed. Do not pass this prop with the confirmation variant.",
      },
      onConfirm: {
        control: !1,
        description:
          "Function to call when the modal action is confirmed. Do not pass this prop with the default variant.",
      },
      onCancel: {
        control: !1,
        description:
          "Function to call when the modal action is canceled. Do not pass this prop with the default variant.",
      },
      modalProps: { table: { disable: !0 } },
    },
    render: () => e.jsx(_, {}),
    name: "useModal Component",
  },
  W = {
    type: "default",
    bodyContent: e.jsxs(e.Fragment, {
      children: [
        e.jsx(p, { text: "Content Title" }),
        e.jsxs("p", {
          children: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.",
            e.jsx(h, {
              href: "http://nypl.org",
              children: "Porttitor eget dolor",
            }),
            " morbi non arcu risus quis varius. Faucibus in ornare quam viverra orci sagittis.",
          ],
        }),
        e.jsx("p", {
          children:
            "Nisl vel pretium lectus quam id leo in. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Diam maecenas sed enim ut sem viverra. Diam quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.",
        }),
        e.jsx("p", {
          children:
            "Ornare lectus sit amet est placerat in. Quis blandit turpis cursus in. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Feugiat nisl pretium fusce id velit ut tortor. Porttitor leo a diam sollicitudin tempor id eu nisl nunc.",
        }),
        e.jsx("p", {
          children:
            "Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Purus gravida quis blandit turpis cursus in hac. Morbi tempus iaculis urna id volutpat. Lectus nulla at volutpat diam ut venenatis. Donec ac odio tempor orci dapibus ultrices in iaculis. Dui vivamus arcu felis bibendum ut tristique. Cras semper auctor neque vitae tempus quam pellentesque. Placerat orci nulla pellentesque dignissim enim sit amet. Feugiat pretium nibh ipsum consequat. Placerat orci nulla pellentesque dignissim. Suspendisse faucibus interdum posuere lorem. Nullam non nisi est sit. Turpis egestas integer eget aliquet nibh praesent. Tortor at risus 'viverra adipiscing at. Eu augue ut lectus arcu bibendum at varius vel' pharetra.",
        }),
        e.jsx(p, { text: "Another Title" }),
        e.jsxs("p", {
          children: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt.",
            e.jsx(h, {
              href: "http://nypl.org",
              children: "Porttitor eget dolor",
            }),
            " morbi non arcu risus quis varius. Faucibus in ornare quam viverra orci sagittis.",
          ],
        }),
        e.jsx("p", {
          children:
            "Nisl vel pretium lectus quam id leo in. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Diam maecenas sed enim ut sem viverra. Diam quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.",
        }),
        e.jsx("p", {
          children:
            "Ornare lectus sit amet est placerat in. Quis blandit turpis cursus in. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Feugiat nisl pretium fusce id velit ut tortor. Porttitor leo a diam sollicitudin tempor id eu nisl nunc.",
        }),
        e.jsx("p", {
          children:
            "Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Purus gravida quis blandit turpis cursus in hac. Morbi tempus iaculis urna id volutpat. Lectus nulla at volutpat diam ut venenatis. Donec ac odio tempor orci dapibus ultrices in iaculis. Dui vivamus arcu felis bibendum ut tristique. Cras semper auctor neque vitae tempus quam pellentesque. Placerat orci nulla pellentesque dignissim enim sit amet. Feugiat pretium nibh ipsum consequat. Placerat orci nulla pellentesque dignissim. Suspendisse faucibus interdum posuere lorem. Nullam non nisi est sit. Turpis egestas integer eget aliquet nibh praesent. Tortor at risus 'viverra adipiscing at. Eu augue ut lectus arcu bibendum at varius vel' pharetra.",
        }),
      ],
    }),
    closeButtonLabel: "Close Button",
    headingText: "Modal Heading Text",
  },
  N = {
    type: "default",
    bodyContent: e.jsx("p", {
      children:
        'The heading of this modal is level "h2" and size "heading4", since no custom heading element has been passed in.',
    }),
    closeButtonLabel: "Close Button",
    headingText: "Default Heading",
  },
  A = {
    type: "confirmation",
    bodyContent: e.jsx("p", { children: "The action is happening" }),
    closeButtonLabel: "Cancel action",
    confirmButtonLabel: "Confirm action",
    onCancel: () => {
      console.log("cancel");
    },
    onConfirm: () => {
      console.log("confirm");
    },
    headingText: "This is an action",
  },
  s = { render: () => e.jsx(V, {}) },
  r = {
    render: () =>
      e.jsx(u, {
        buttonText: "Open confirmation modal",
        id: "modal-confirmation",
        modalProps: A,
      }),
  },
  l = {
    render: () =>
      e.jsx(u, {
        buttonText: "Button Text",
        id: "modal-scrolling",
        modalProps: N,
      }),
  },
  c = {
    render: () =>
      e.jsx(u, {
        buttonText: "Button Text",
        id: "modal-scrolling",
        modalProps: W,
      }),
  };
var g, b, f, x, C;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((g = o.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    buttonText: "Button Text",
    id: "modal-trigger",
    modalProps: {
      type: "default",
      bodyContent: "body text",
      closeButtonLabel: "Close Button",
      headingText: <Heading level="h3" display="flex" alignItems="center" gap="xs" size="heading5">
          <>
            <Icon color="ui.success.primary" name="actionCheckCircleFilled" size="large" />
            Modal Heading Text
          </>
        </Heading>,
      onClose: () => {
        console.log("custom close");
      }
    }
  },
  render: args => <ModalTrigger {...args} />,
  parameters: {
    jest: ["Modal.test.tsx"]
  }
}`,
      ...((f = (b = o.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : f.source),
    },
    description: {
      story:
        "Main Story for the Modal component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((C = (x = o.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : C.description),
    },
  },
};
var y, T, v;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((y = a.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  argTypes: {
    type: {
      options: ["default", "confirmation"],
      table: {
        defaultValue: {
          summary: "default"
        }
      },
      description: "Modal variants: default or confirmation."
    },
    buttonText: {
      table: {
        disable: true
      }
    },
    bodyContent: {
      control: {
        type: "text"
      },
      description: "The content to display in the modal body."
    },
    closeButtonLabel: {
      control: {
        type: "text"
      },
      description: "The label for the close button OR the label for the cancel button in the confirmation variant."
    },
    confirmButtonLabel: {
      control: {
        type: "text"
      },
      description: "The label for the confirm button."
    },
    headingText: {
      control: {
        type: "text"
      },
      description: "The text to display in the modal heading. Can be a string or JSX Element."
    },
    id: {
      control: false
    },
    isOpen: {
      control: false,
      description: "Boolean to determine if the modal is open or closed."
    },
    onClose: {
      control: false,
      description: "Function to call when the modal is closed. Do not pass this prop with the confirmation variant."
    },
    onConfirm: {
      control: false,
      description: "Function to call when the modal action is confirmed. Do not pass this prop with the default variant."
    },
    onCancel: {
      control: false,
      description: "Function to call when the modal action is canceled. Do not pass this prop with the default variant."
    },
    modalProps: {
      table: {
        disable: true
      }
    }
  },
  render: () => <ModalStory />,
  name: "useModal Component"
}`,
      ...((v = (T = a.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : v.source),
    },
  },
};
var j, M, q;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((j = s.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: `{
  render: () => <ConfirmationModalStory />
}`,
      ...((q = (M = s.parameters) == null ? void 0 : M.docs) == null
        ? void 0
        : q.source),
    },
  },
};
var P, B, S;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((P = r.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  render: () => <ModalTrigger buttonText="Open confirmation modal" id="modal-confirmation" modalProps={confirmationProps} />
}`,
      ...((S = (B = r.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var L, F, D;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((L = l.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  render: () => <ModalTrigger buttonText="Button Text" id="modal-scrolling" modalProps={defaultHeadingModalProps} />
}`,
      ...((D = (F = l.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var O, w, H;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((O = c.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  render: () => <ModalTrigger buttonText="Button Text" id="modal-scrolling" modalProps={scrollModalProps} />
}`,
      ...((H = (w = c.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : H.source),
    },
  },
};
const R = [
    "WithControls",
    "useModalStory",
    "ConfirmationUseModal",
    "ConfirmationVariant",
    "DefaultHeading",
    "ContentWindowScrolling",
  ],
  J = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ConfirmationUseModal: s,
        ConfirmationVariant: r,
        ContentWindowScrolling: c,
        DefaultHeading: l,
        WithControls: o,
        __namedExportsOrder: R,
        default: z,
        useModalStory: a,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { s as C, l as D, J as M, o as W, r as a, c as b, a as u };
