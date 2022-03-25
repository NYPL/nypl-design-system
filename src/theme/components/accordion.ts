const containerStyles = {
  borderLeftWidth: "1px",
  borderRightWidth: "1px",
  width: "100%",
  _hover: {
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    borderColor: "ui.gray.dark",
    // The bottom border of the accordion item being hovered
    // over is hidden beneath the top border of the following
    // sibling, so we need to grab and change that border, as well.
    "& + .chakra-accordion__item": {
      borderTopColor: "ui.gray.dark",
    },
  },
};
const buttonStyles = {
  border: "none",
  fontWeight: 500,
  _expanded: {
    bg: "ui.gray.light-warm",
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
