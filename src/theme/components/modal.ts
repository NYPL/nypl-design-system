const Modal = {
  parts: [
    "header",
    "overlay",
    "dialogContainer",
    "dialog",
    "closeButton",
    "body",
    "footer",
  ],
  baseStyle: {
    dialog: {
      _dark: {
        bg: "dark.ui.bg.default",
      },
    },
    header: {
      _dark: {
        color: "dark.ui.typography.heading",
      },
    },
    body: {
      _dark: {
        color: "dark.ui.typography.body",
      },
    },
  },
};

export default Modal;
