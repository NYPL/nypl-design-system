import { NotificationTypes } from "../../components/Notification/Notification";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

interface NotificationContentBaseStyle extends StyleFunctionProps {
  alignText: boolean;
  isCentered: boolean;
  notificationHeading: string;
  notificationType: NotificationTypes;
  showIcon: boolean;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["content"]);

const baseStyle = definePartsStyle(
  ({
    isCentered,
    notificationHeading,
    notificationType,
    showIcon,
  }: NotificationContentBaseStyle) => {
    return {
      display: "flex",
      justifyContent: "center",
      content: {
        color:
          notificationType === "warning" ? "brand.primary" : "currentColor",
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
          ml:
            !isCentered && showIcon ? (notificationHeading ? "l" : "xs") : "0",
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
        },
      },
    };
  }
);

const NotificationContent = defineMultiStyleConfig({
  baseStyle,
});

export default NotificationContent;
