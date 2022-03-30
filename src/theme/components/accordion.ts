const containerStyles = {
  border: "none",
  width: "100%",
};
const buttonStyles = {
  borderWidth: "1px",
  fontWeight: "medium",
};
const panelStyles = {
  padding: "s",
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  borderBottomWidth: "1px",
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
