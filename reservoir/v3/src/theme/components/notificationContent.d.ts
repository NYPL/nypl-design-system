import { NotificationTypes } from "../../components/Notification/Notification";
import { StyleFunctionProps } from "@chakra-ui/system";
interface NotificationContentBaseStyle extends StyleFunctionProps {
    alignText: boolean;
    isCentered: boolean;
    notificationHeading: string;
    notificationType: NotificationTypes;
    showIcon: boolean;
}
declare const NotificationContent: {
    baseStyle?: ({ isCentered, notificationHeading, notificationType, showIcon, }: NotificationContentBaseStyle) => {
        display: string;
        justifyContent: string;
        content: {
            color: string;
            paddingStart: string;
            pt: string;
            w: string;
            _dark: {
                borderLeftColor: string;
                borderLeftStyle: string;
                borderLeftWidth: string;
                marginTop: string;
                paddingStart: string;
                color: string;
                ml: string;
            };
            a: {
                color: string;
                textDecoration: string;
                _dark: {
                    color: string;
                    _hover: {
                        color: string;
                    };
                };
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: "content"[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: "content"[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: "content"[];
};
export default NotificationContent;
