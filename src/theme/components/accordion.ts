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
};
const panelStyles = {
  paddingTop: "xs",
  paddingRight: "xxxl",
  paddingLeft: "s",
  paddingBottom: "xs",
};

const Accordion = {
  parts: ["container", "button", "panel"],
  baseStyle: {
    container: containerStyles,
    button: buttonStyles,
    panel: panelStyles,
  },
  variants: {
    statusNull: {
      button: {
        bg: "ui.white",
      },
    },
    statusDefault: {
      button: {
        bg: "ui.gray.light-warm",
      },
    },
    statusWarning: {
      button: {
        bg: "ui.status.primary",
      },
    },
    statusError: {
      button: {
        bg: "ui.status.secondary",
      },
    },
  },
};

export default Accordion;
