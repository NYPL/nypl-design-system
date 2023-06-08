import { NotificationTypes } from "../../components/Notification/Notification";
interface NotificationBaseStyle {
    isCentered: boolean;
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
    notificationType: NotificationTypes;
}
declare const _default: {
    Notification: {
        parts: string[];
        baseStyle: ({ isCentered, noMargin, notificationHeading, notificationType, }: NotificationBaseStyle) => {
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
                _hover: {
                    bg: string;
                };
            };
        };
    };
    NotificationContent: {
        parts: string[];
        baseStyle: ({ isCentered, notificationHeading, notificationType, showIcon, }: NotificationContentBaseStyle) => {
            display: string;
            justifyContent: string;
            content: {
                color: string;
                marginTop: string;
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
    };
    NotificationHeading: {
        parts: string[];
        baseStyle: ({ icon, isCentered, notificationType, }: NotificationHeadingBaseStyle) => {
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
                mt: string;
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
            };
        };
    };
};
export default _default;
