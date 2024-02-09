import { NotificationTypes } from "../../components/Notification/Notification";
import { customFocusColor } from "./global";

interface NotificationBaseStyle {
  isCentered: boolean;
  noMargin: boolean;
  notificationHeading: string;
  notificationType: NotificationTypes;
  showIcon: boolean;
}
interface NotificationContentBaseStyle {
  alignText: boolean;
  isCentered: boolean;
  notificationHeading: string;
  notificationType: NotificationTypes;
  showIcon: boolean;
}
interface NotificationHeadingBaseStyle {
  icon: boolean;
  isCentered: boolean;
  notificationType: NotificationTypes;
}

const Notification = {
  parts: ["container", "dismissibleButton", "icon"],
  baseStyle: ({
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
  },
};

const NotificationContent = {
  parts: ["content"],
  baseStyle: ({
    isCentered,
    notificationHeading,
    notificationType,
    showIcon,
  }: NotificationContentBaseStyle) => ({
    display: "flex",
    justifyContent: "center",
    content: {
      color: notificationType === "warning" ? "brand.primary" : "currentColor",
      marginTop: showIcon ? "xxxs" : "0",
      paddingStart:
        !isCentered && showIcon ? (notificationHeading ? "l" : "xs") : "0",
      pt: !isCentered && notificationHeading ? "xxs" : "0",
      w: "100%",
      _dark: {
        borderLeftColor:
          notificationType === "standard"
            ? "ui.status.primary"
            : notificationType === "announcement"
            ? "dark.ui.success.primary"
            : "dark.ui.error.primary",
        borderLeftStyle: !isCentered ? "solid" : "none",
        borderLeftWidth: "2px",
        marginTop: "0",
        paddingStart: !isCentered ? "xs" : "0",
        color: "dark.ui.typography.body",
        ml: !isCentered && showIcon ? (notificationHeading ? "l" : "xs") : "0",
      },
      // Links should always be underlined, and always be black if the
      // color mode is light.
      a: {
        color: "ui.black",
        textDecoration: "underline",
        _dark: {
          color: "dark.ui.link.primary",
          _hover: {
            color: "dark.ui.link.secondary",
          },
        },
        _focus: { ...customFocusColor("ui.black", "dark.ui.link.primary") },
      },
    },
  }),
};

const NotificationHeading = {
  parts: ["heading"],
  baseStyle: ({
    icon,
    isCentered,
    notificationType,
  }: NotificationHeadingBaseStyle) => {
    let color = "ui.typography.heading";
    if (notificationType === "announcement") {
      color = "section.research.secondary";
    } else if (notificationType === "warning") {
      color = "brand.primary";
    }
    return {
      display: "flex",
      flexDirection: isCentered ? "column" : "row",
      m: isCentered ? "auto" : "null",
      mb: isCentered ? "xs" : "0",
      px: isCentered ? "s" : "0",
      w: "fit-content",
      _dark: {
        borderBottomColor:
          notificationType === "standard"
            ? "ui.status.primary"
            : notificationType === "announcement"
            ? "dark.ui.success.primary"
            : "dark.ui.error.primary",
        borderBottomStyle: isCentered ? "solid" : "none",
        borderBottomWidth: "2px",
        color: "dark.ui.typography.heading",
        paddingBottom: isCentered ? "xs" : "0",
      },
      heading: {
        color,
        ml: icon && !isCentered ? "xs" : "0",
        mt: icon ? "xxxs" : "0",
        _dark: {
          borderLeftColor:
            notificationType === "standard"
              ? "ui.status.primary"
              : notificationType === "announcement"
              ? "dark.ui.success.primary"
              : "dark.ui.error.primary",
          borderLeftStyle: !isCentered ? "solid" : "none",
          borderLeftWidth: "2px",
          paddingLeft: !isCentered ? "xs" : "0",
        },
      },
      svg: {
        mx: isCentered ? "auto" : "",
        mb: isCentered ? "xxs" : "0",
        mt: isCentered ? undefined : "xxxs",
      },
    };
  },
};

export default {
  Notification,
  NotificationContent,
  NotificationHeading,
};
