import { NotificationTypes } from "../../components/Notification/NotificationTypes";

const Notification = {
  parts: ["container", "dismissibleButton", "dismissibleIcon", "icon"],
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
        alignItems: "center",
        bgColor: "inherit",
        color: "ui.black",
        display: "flex",
        height: { base: "var(--space-l)", lg: "var(--space-m)" },
        width: { base: "var(--space-l)", lg: "var(--space-m)" },
        padding: "0",
        position: "absolute",
        right: "xs",
        top: "xs",
        _hover: {
          bg: "inherit",
        },
      },
      dismissibleIcon: {
        height: "var(--space-m)",
        marginRight: "0",
        width: "var(--space-m)",
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
