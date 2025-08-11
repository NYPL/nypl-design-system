import { NotificationTypes } from "../../components/Notification/Notification";
import { StyleFunctionProps } from "@chakra-ui/system";
interface NotificationBaseStyle extends StyleFunctionProps {
    isCentered: boolean;
    noMargin: boolean;
    notificationHeading: string;
    notificationType: NotificationTypes;
    showIcon: boolean;
}
declare const Notification: {
    baseStyle?: ({ isCentered, noMargin, notificationHeading, notificationType, }: NotificationBaseStyle) => {
        bg: string;
        borderRadius: string;
        display: string;
        fontSize: string;
        m: string;
        position: string;
        p: string;
        textAlign: string;
        _dark: {
            bg: string;
        };
        container: {
            display: string;
            flexDirection: string;
            m: string;
            maxWidth: string;
            paddingEnd: string;
            paddingStart: string;
            w: string;
        };
        dismissibleButton: {
            border: string;
            bgColor: string;
            alignItems: string;
            color: string;
            display: string;
            h: string;
            w: string;
            minWidth: string;
            position: string;
            right: string;
            top: string;
            svg: {
                marginTop: string;
            };
            _dark: {
                color: string;
            };
            _focus: {
                ":not([disabled])": {
                    boxShadow: string;
                    outline: string;
                    outlineOffset: string;
                    outlineColor: any;
                    zIndex: string;
                    _dark: {
                        outlineColor: any;
                    };
                };
            };
            _hover: {
                bg: string;
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "dismissibleButton")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "dismissibleButton")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("container" | "dismissibleButton")[];
};
export default Notification;
