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

const Accordion = {
  parts: ["container", "button", "panel"],
  baseStyle: {
    container: containerStyles,
    button: buttonStyles,
    panel: panelStyles,
  },
};

export default Accordion;
