const containerStyles = {
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  width: "100%",
  _hover: {
    borderColor: "ui.gray.medium",
  },
};
const buttonStyles = {
  border: "none",
  fontWeight: 500,
  _expanded: {
    bg: "ui.gray.light-warm",
  },
  _hover: {
    bg: "ui.white",
  },
};
const panelStyles = {
  padding: "s",
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
