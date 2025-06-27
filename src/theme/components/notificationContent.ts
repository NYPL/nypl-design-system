import { NotificationVariants } from "../../components/Notification/Notification";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

interface NotificationContentBaseStyle extends StyleFunctionProps {
  alignText: boolean;
  isCentered: boolean;
  notificationHeading: string;
  variant: NotificationVariants;
  showIcon: boolean;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["content"]);

const baseStyle = definePartsStyle(
  ({
    isCentered,
    notificationHeading,
    variant,
    showIcon,
  }: NotificationContentBaseStyle) => {
    return {
      display: "flex",
      justifyContent: "center",
      content: {
        color: variant === "warning" ? "ui.error.primary" : "currentColor",
        paddingStart:
          !isCentered && showIcon ? (notificationHeading ? "l" : "xs") : "0",
        pt: !isCentered ? "xxs" : "0",
        w: "100%",
        _dark: {
          borderLeftColor:
            variant === "standard"
              ? "ui.status.primary"
              : variant === "announcement"
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
