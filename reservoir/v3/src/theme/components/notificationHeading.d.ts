import { NotificationTypes } from "../../components/Notification/Notification";
import { StyleFunctionProps } from "@chakra-ui/system";
interface NotificationHeadingBaseStyle extends StyleFunctionProps {
  icon: boolean;
  isCentered: boolean;
  notificationType: NotificationTypes;
}
declare const NotificationHeading: {
  baseStyle?: ({
    icon,
    isCentered,
    notificationType,
  }: NotificationHeadingBaseStyle) => {
    display: string;
    flexDirection: string;
    m: string;
    mb: string;
    px: string;
    w: string;
    _dark: {
      borderBottomColor: string;
      borderBottomStyle: string;
      borderBottomWidth: string;
      color: string;
      paddingBottom: string;
    };
    heading: {
      color: string;
      ml: string;
      _dark: {
        borderLeftColor: string;
        borderLeftStyle: string;
        borderLeftWidth: string;
        paddingLeft: string;
      };
    };
    svg: {
      mx: string;
      mb: string;
      mt: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "heading"[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: "heading"[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: "heading"[];
};
export default NotificationHeading;
