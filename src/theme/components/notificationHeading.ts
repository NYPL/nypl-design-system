import { NotificationVariants } from "../../components/Notification/Notification";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

interface NotificationHeadingBaseStyle extends StyleFunctionProps {
  icon: boolean;
  isCentered: boolean;
  variant: NotificationVariants;
}

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["heading"]);

const baseStyle = definePartsStyle(
  ({ icon, isCentered, variant }: NotificationHeadingBaseStyle) => {
    let color = "ui.typography.heading";
    if (variant === "announcement") {
      color = "ui.success.primary";
    } else if (variant === "warning") {
      color = "ui.error.primary";
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
          variant === "standard"
            ? "ui.status.primary"
            : variant === "announcement"
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
        _dark: {
          borderLeftColor:
            variant === "standard"
              ? "ui.status.primary"
              : variant === "announcement"
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
  }
);

const NotificationHeading = defineMultiStyleConfig({
  baseStyle,
});

export default NotificationHeading;
