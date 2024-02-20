import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["container", "button", "panel"]);

const containerStyles = {
  border: "none",
  width: "100%",
  _dark: {
    bg: "dark.ui.bg.default",
    borderColor: "dark.ui.border.default",
  },
};
const buttonStyles = {
  borderWidth: "1px",
  " > span ": {
    display: "flex",
    alignItems: "center",
    minHeight: "21px",
  },
  color: "ui.typography.heading",
  fontWeight: "medium",
  svg: {
    marginStart: "s",
  },
  _dark: {
    bg: "dark.ui.bg.default",
    color: "dark.ui.typography.heading",
  },
};
const panelStyles = {
  padding: "s",
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  borderBottomWidth: "1px",
  _dark: {
    bg: "dark.ui.bg.default",
    color: "dark.ui.typography.body",
    borderColor: "dark.ui.border.default",
  },
};

const Accordion = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: containerStyles,
    button: buttonStyles,
    panel: panelStyles,
  }),
});

export default Accordion;
