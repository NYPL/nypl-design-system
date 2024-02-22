const StatusBadge = {
  baseStyle: {
    alignItems: "center",
    borderRadius: "base",
    color: "ui.typography.heading",
    display: "flex",
    fontSize: "desktop.body.body2", // slightly smaller than the default size
    fontStyle: "italic",
    py: "inset.extranarrow",
    px: "inset.narrow",
    width: "fit-content",
    _dark: {
      backgroundColor: "dark.ui.bg.active",
      borderLeft: "4px solid",
      borderColor: "dark.ui.border.default",
      color: "dark.ui.typography.heading",
    },
  },
  variants: {
    low: {
      bg: "ui.gray.light-cool",
    },
    medium: {
      bg: "ui.status.primary",
      _dark: {
        borderColor: "ui.status.primary",
      },
    },
    high: {
      bg: "ui.status.secondary",
      _dark: {
        borderColor: "dark.ui.error.primary",
      },
    },
  },
};

export default StatusBadge;
