import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

const baseStyle = defineStyle({
  borderRadius: "base",
  color: "ui.typography.heading",
  display: "block",
  fontSize: "desktop.body.body2", // slightly smaller than the default size
  fontStyle: "italic",
  py: "inset.extranarrow",
  px: "inset.narrow",
  textAlign: "center",
  width: "fit-content",
  _dark: {
    backgroundColor: "dark.ui.bg.active",
    borderLeft: "4px solid",
    borderColor: "dark.ui.border.default",
    color: "dark.ui.typography.heading",
  },
});

// Variants
const low = defineStyle({ bg: "ui.gray.light-cool" });
const medium = defineStyle({
  bg: "ui.status.primary",
  _dark: {
    borderColor: "ui.status.primary",
  },
});
const high = defineStyle({
  bg: "ui.status.secondary",
  _dark: {
    borderColor: "dark.ui.error.primary",
  },
});

const StatusBadge = defineStyleConfig({
  baseStyle,
  variants: {
    low,
    medium,
    high,
  },
});

export default StatusBadge;
