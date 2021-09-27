const containerStyles = {
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  borderColor: "ui.gray.medium",
  width: "100%",
};
const buttonStyles = {
  border: "none",
  fontWeight: 500,
  _hover: {
    bg: "ui.gray.light",
  },
};
const panelStyles = {
  paddingTop: 2, // --space-xs
  paddingRight: 24, // --space-xxxl
  paddingLeft: 4, // --space-s
  paddingBottom: 2, // --space-xs
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
