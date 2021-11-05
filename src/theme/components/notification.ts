import { NotificationTypes } from "../../components/Notification/NotificationTypes";

const Notification = {
  parts: ["container", "dismissibleButton", "icon"],
  baseStyle: ({ centered, noMargin, notificationType }) => {
    let bg = "ui.status.primary";
    if (notificationType === NotificationTypes.Announcement) {
      bg = "ui.gray.light-cool";
    } else if (notificationType === NotificationTypes.Warning) {
      bg = "ui.gray.xx-light-cool";
    }
    return {
      bg,
      display: "flex",
      fontSize: "-1",
      padding: "var(--space) var(--space-l)",
      position: "relative",
      textAlign: centered ? "center" : null,
      borderRadius: noMargin ? "0" : "4px",
      margin: noMargin ? "0" : "s",
      container: {
        margin: "auto",
        width: "100%",
        maxWidth: "var(--breakpoint-large)",
      },
      dismissibleButton: {
        border: "none",
        alignItems: "center",
        bgColor: "inherit",
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
  baseStyle: ({ alignText, notificationType }) => ({
    display: "flex",
    justifyContent: "center",
    content: {
      width: "100%",
      paddingLeft: alignText ? "calc(var(--space-m) + var(--space-s))" : null,
      color:
        notificationType === NotificationTypes.Warning
          ? "brand.primary"
          : "currentColor",
    },
  }),
};

const NotificationHeading = {
  parts: ["heading"],
  baseStyle: ({ centered, notificationType }) => {
    let color = "ui.black";
    if (notificationType === NotificationTypes.Announcement) {
      color = "section.research.secondary";
    } else if (notificationType === NotificationTypes.Warning) {
      color = "brand.primary";
    }
    return {
      display: "flex",
      marginBottom: "xxs",
      justifyContent: centered ? "center" : null,
      heading: {
        marginBottom: "0",
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
