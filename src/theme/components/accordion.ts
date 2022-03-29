const containerStyles = {
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  width: "100%",
  _hover: {
    borderColor: "ui.gray.medium",
    // The bottom border of the accordion item being hovered
    // over is hidden beneath the top border of the following
    // sibling, so we need to grab and change that border, as well.
    "& + .chakra-accordion__item": {
      borderTopColor: "ui.gray.medium",
    },
  },
};
const buttonStyles = {
  border: "none",
  fontWeight: "medium",
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
