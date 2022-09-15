import { NotificationTypes } from "../../components/Notification/Notification";

interface NotificationBaseStyle {
  dismissible: boolean;
  isCentered: boolean;
  isDark: boolean;
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
  isDark: boolean;
  notificationType: NotificationTypes;
}

const Notification = {
  parts: ["container", "dismissibleButton", "icon"],
  baseStyle: ({
    dismissible,
    isCentered,
    isDark,
    noMargin,
    notificationHeading,
    notificationType,
    showIcon,
  }: NotificationBaseStyle) => {
    let bg = "ui.status.primary";
    if (isDark) {
      bg = "dark.ui.bg.hover";
    } else if (
      notificationType === "announcement" ||
      notificationType === "warning"
    ) {
      bg = "ui.gray.x-light-cool";
    }
    return {
      bg,
      borderRadius: noMargin ? "0" : "4px",
      display: "flex",
      fontSize: "text.caption", // slightly smaller than the default size
      m: noMargin ? "0" : "s",
      position: "relative",
      p: "inset.default",
      textAlign: isCentered ? "center" : null,
      container: {
        display: "flex",
        flexDirection: isCentered || notificationHeading ? "column" : "row",
        m: "auto",
        maxWidth: "var(--nypl-breakpoint-xl)",
        paddingEnd: dismissible ? "l" : null,
        paddingStart: isCentered && dismissible ? "l" : showIcon ? "xs" : null,
        w: "100%",
      },
      dismissibleButton: {
        border: "none",
        bgColor: "inherit",
        alignItems: "center",
        color: "ui.black",
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
          color: "dark.ui.typography.body",
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
      pt: !isCentered && notificationHeading ? "xs" : "0",
      w: "100%",
      _dark: {
        borderLeftColor:
          notificationType === "standard"
            ? "ui.status.primary"
            : notificationType === "announcement"
            ? "ui.success.primary"
            : "dark.ui.error.primary",
        borderLeftStyle: !isCentered ? "solid" : "none",
        borderLeftWidth: "2px",
        paddingLeft: !isCentered ? "xs" : "0",
        color: "dark.ui.typography.body",
        ml: !isCentered && showIcon ? "l" : "0",
      },
      // Links should always be underlined, and always be black if the
      // color mode is light.
      a: {
        color: "ui.black",
        textDecoration: "underline",
        _dark: {
          color: "dark.ui.typography.body",
        },
      },
    },
  }),
};

const NotificationHeading = {
  parts: ["heading"],
  baseStyle: ({
    icon,
    isCentered,
    isDark,
    notificationType,
  }: NotificationHeadingBaseStyle) => {
    let color = "ui.black";
    if (isDark) {
      color = "dark.ui.typography.heading";
    } else if (notificationType === "announcement") {
      color = "section.research.secondary";
    } else if (notificationType === "warning") {
      color = "brand.primary";
    }
    return {
      display: "flex",
      m: isCentered ? "auto" : "null",
      mb: isCentered ? "xs" : "0",
      px: isCentered ? "s" : "0",
      w: "fit-content",
      _dark: {
        borderBottomColor:
          notificationType === "standard"
            ? "ui.status.primary"
            : notificationType === "announcement"
            ? "ui.success.primary"
            : "dark.ui.error.primary",
        borderBottomStyle: isCentered ? "solid" : "none",
        borderBottomWidth: "2px",
        paddingBottom: isCentered ? "xs" : "0",
      },
      heading: {
        color,
        ml: icon ? "xs" : "0",
        mt: icon ? "xxxs" : "0",
        _dark: {
          borderLeftColor:
            notificationType === "standard"
              ? "ui.status.primary"
              : notificationType === "announcement"
              ? "ui.success.primary"
              : "dark.ui.error.primary",
          borderLeftStyle: !isCentered ? "solid" : "none",
          borderLeftWidth: "2px",
          paddingLeft: !isCentered ? "xs" : "0",
        },
      },
    };
  },
};

export default {
  Notification,
  NotificationContent,
  NotificationHeading,
};
