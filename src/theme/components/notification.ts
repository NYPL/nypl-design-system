import { NotificationTypes } from "../../components/Notification/Notification";

interface NotificationBaseStyle {
  dismissible: boolean;
  isCentered: boolean;
  noMargin: boolean;
  notificationType: NotificationTypes;
}
interface NotificationContentBaseStyle {
  alignText: boolean;
  icon: boolean;
  notificationType: NotificationTypes;
}
interface NotificationHeadingBaseStyle {
  icon: boolean;
  isCentered: boolean;
  notificationType: NotificationTypes;
}

const Notification = {
  parts: ["container", "dismissibleButton", "icon"],
  baseStyle: ({
    dismissible,
    isCentered,
    noMargin,
    notificationType,
  }: NotificationBaseStyle) => {
    let bg = "ui.status.primary";
    if (notificationType === "announcement" || notificationType === "warning") {
      bg = "ui.gray.x-light-cool";
    }
    return {
      bg,
      display: "flex",
      fontSize: "text.caption", // slightly smaller than the default size
      position: "relative",
      textAlign: isCentered ? "center" : null,
      borderRadius: noMargin ? "0" : "4px",
      margin: noMargin ? "0" : "s",
      container: {
        margin: "auto",
        maxWidth: "var(--nypl-breakpoint-xl)",
        padding: "inset.default",
        paddingRight: dismissible ? "l" : null,
        paddingLeft: isCentered && dismissible ? "l" : null,
        width: "100%",
      },
      dismissibleButton: {
        border: "none",
        bgColor: "inherit",
        alignItems: "center",
        color: "ui.black",
        display: "flex",
        height: "32px",
        width: "32px",
        minWidth: "0",
        position: "absolute",
        right: "0",
        top: "0",
        svg: {
          marginTop: "0",
        },
        _hover: {
          bg: "inherit",
        },
      },
      icon: {
        flexShrink: "0",
        marginRight: "s",
      },
    };
  },
};

const NotificationContent = {
  parts: ["content"],
  baseStyle: ({
    alignText,
    icon,
    notificationType,
  }: NotificationContentBaseStyle) => ({
    display: "flex",
    justifyContent: "center",
    content: {
      color: notificationType === "warning" ? "brand.primary" : "currentColor",
      marginTop: icon ? "xxxs" : "0",
      paddingLeft: alignText
        ? "calc(var(--nypl-space-m) + var(--nypl-space-s))"
        : null,
      width: "100%",
      // Links should always be black and underlined.
      a: {
        color: "ui.black",
        _hover: {
          color: "ui.black",
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
    notificationType,
  }: NotificationHeadingBaseStyle) => {
    let color = "ui.black";
    if (notificationType === "announcement") {
      color = "section.research.secondary";
    } else if (notificationType === "warning") {
      color = "brand.primary";
    }
    return {
      display: "flex",
      marginBottom: "xxs",
      justifyContent: isCentered ? "center" : null,
      heading: {
        marginBottom: "0",
        marginTop: icon ? "xxxs" : "0",
        color,
      },
    };
  },
};

export default {
  Notification,
  NotificationContent,
  NotificationHeading,
};
