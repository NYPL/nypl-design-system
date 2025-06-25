import { NotificationVariants } from "../../components/Notification/Notification";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";
import { customFocusColor } from "./global";

interface NotificationBaseStyle extends StyleFunctionProps {
  isCentered: boolean;
  notificationHeading: string;
  variant: NotificationVariants;
  showIcon: boolean;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["container", "dismissibleButton"]);

const baseStyle = definePartsStyle(
  ({ isCentered, notificationHeading, variant }: NotificationBaseStyle) => {
    let bg = "ui.status.primary";
    if (variant === "announcement" || variant === "warning") {
      bg = "ui.gray.x-light-cool";
    }
    return {
      bg,
      display: "flex",
      fontSize: "desktop.body.body2", // slightly smaller than the default size
      position: "relative",
      p: "inset.default",
      textAlign: isCentered ? "center" : null,
      _dark: {
        bg: "dark.ui.bg.hover",
      },
      container: {
        display: "flex",
        flexDirection: isCentered || notificationHeading ? "column" : "row",
        m: "auto",
        maxWidth: "var(--nypl-breakpoint-xl)",
        paddingEnd: "s",
        paddingStart: "s",
        w: "100%",
      },
      dismissibleButton: {
        border: "none",
        bgColor: "inherit",
        alignItems: "center",
        color: "ui.typography.heading",
        display: "flex",
        h: "32px",
        w: "32px",
        minWidth: "0",
        position: "absolute",
        right: "0",
        top: "0",
        svg: {
          marginTop: "0",
        },
        _dark: {
          color: "dark.ui.typography.heading",
        },
        _focus: {
          // This pseudo-class selector is needed for overriding Chakra styles
          [":not([disabled])"]: customFocusColor(
            "ui.typography.heading",
            "dark.ui.typography.heading"
          ),
        },
        _hover: {
          bg: "inherit",
        },
      },
    };
  }
);

const Notification = defineMultiStyleConfig({
  baseStyle,
});

export default Notification;
