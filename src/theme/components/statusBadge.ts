const StatusBadge = {
  baseStyle: {
    borderRadius: "base",
    color: "ui.black",
    display: "block",
    fontSize: "-1",
    fontStyle: "italic",
    py: "xxs",
    px: "xs",
    textAlign: "center",
    width: "fit-content",
  },
  variants: {
    low: {
      bg: "ui.gray.light-cool",
    },
    medium: {
      bg: "ui.status.primary",
    },
    high: {
      bg: "ui.status.secondary",
    },
  },
};

export default StatusBadge;
