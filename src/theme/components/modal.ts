import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "header",
    "overlay",
    "dialogContainer",
    "dialog",
    "closeButton",
    "body",
    "footer",
  ]);

const Modal = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    dialog: {
      _dark: {
        bg: "dark.ui.bg.default",
      },
      borderRadius: "4px",
    },
    header: {
      color: "ui.typography.heading",
      fontWeight: "medium",
      _dark: {
        color: "dark.ui.typography.heading",
      },
      paddingTop: "l",
      paddingLeft: "l",
      paddingRight: "l",
      paddingBottom: "s",
      "h2, h3, h4, h5, h6": {
        marginBottom: 0,
      },
    },
    body: {
      _dark: {
        color: "dark.ui.typography.body",
      },
      paddingTop: 0,
      paddingLeft: "l",
      paddingRight: "l",
      paddingBottom: "m",
    },
    footer: {
      paddingTop: 0,
      paddingBottom: "l",
      paddingLeft: "l",
      paddingRight: "l",
    },
    closeButton: {
      marginRight: "-4px",
    },
  }),
});

export default Modal;
