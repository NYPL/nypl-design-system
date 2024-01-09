import { NotificationTypes } from "../../components/Notification/Notification";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

interface NotificationBaseStyle extends StyleFunctionProps {
  isCentered: boolean;
  noMargin: boolean;
  notificationHeading: string;
  notificationType: NotificationTypes;
  showIcon: boolean;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["container", "dismissibleButton"]);

const baseStyle = definePartsStyle(
  ({
    isCentered,
    noMargin,
    notificationHeading,
    notificationType,
  }: NotificationBaseStyle) => {
    let bg = "ui.status.primary";
    if (notificationType === "announcement" || notificationType === "warning") {
      bg = "ui.gray.x-light-cool";
    }
    return {
      bg,
      borderRadius: noMargin ? "0" : "4px",
      display: "flex",
      fontSize: "desktop.body.body2", // slightly smaller than the default size
      m: noMargin ? "0" : "s",
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
