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
    },
    header: {
      color: "ui.typography.heading",
      fontWeight: "medium",
      _dark: {
        color: "dark.ui.typography.heading",
      },
    },
    body: {
      _dark: {
        color: "dark.ui.typography.body",
      },
    },
  }),
});

export default Modal;
