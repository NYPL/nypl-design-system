import { StyleFunctionProps } from "@chakra-ui/system";
interface CardBaseStyleProps extends StyleFunctionProps {
    hasImage: boolean;
    imageIsAtEnd: boolean;
    isAlignedRightActions: boolean;
    isBordered: boolean;
    isCentered: boolean;
    layout: string;
    mainActionLink: boolean;
    imageSize: keyof typeof imageSizes;
}
interface CardImageBaseStyleProps extends StyleFunctionProps {
    imageIsAtEnd: boolean;
    isCentered: boolean;
    size: keyof typeof imageSizes;
    layout: string;
}
interface CardActionsBaseStyleProps extends StyleFunctionProps {
    bottomBorder: boolean;
    isCentered: boolean;
    layout: string;
    topBorder: boolean;
}
declare const imageSizes: {
    xxsmall: {
        flex: {
            base: string;
            md: string;
        };
        width: string;
    };
    xsmall: {
        flex: {
            md: string;
        };
    };
    small: {
        flex: {
            md: string;
        };
    };
    medium: {
        flex: {
            md: string;
        };
    };
    large: {
        flex: {
            md: string;
        };
    };
};
declare const _default: {
    ReservoirCard: {
        baseStyle?: ({ hasImage, imageIsAtEnd, isAlignedRightActions, isBordered, isCentered, layout, mainActionLink, imageSize, }: CardBaseStyleProps) => {
            base: {
                width: string;
                containerType: string;
            };
            wrapper: {
                display: string;
                maxWidth: string;
                textAlign: string;
                alignItems: string;
                border: string;
                borderColor: string;
                _dark: {
                    borderColor: string;
                };
                flexFlow: string;
            } | {
                display: string;
                maxWidth?: undefined;
                textAlign: string;
                alignItems: string;
                border: string;
                borderColor: string;
                _dark: {
                    borderColor: string;
                };
                flexFlow: string;
            } | {
                display: string;
                maxWidth: string;
                textAlign: string;
                alignItems: string;
                border?: undefined;
                borderColor?: undefined;
                _dark?: undefined;
                flexFlow: string;
            } | {
                display: string;
                maxWidth?: undefined;
                textAlign: string;
                alignItems: string;
                border?: undefined;
                borderColor?: undefined;
                _dark?: undefined;
                flexFlow: string;
            };
            actions: {
                width: string;
            };
            body: {
                margin: any;
                padding: any;
            };
            heading: {
                marginBottom: string;
                a: {
                    textDecoration: string;
                    _dark: {
                        color: string;
                    };
                    _hover: {
                        _dark: {
                            color: string;
                        };
                        textDecoration: string;
                        textDecorationStyle: string;
                        textDecorationThickness: string;
                        color: string;
                    };
                    textDecorationStyle: string;
                    textDecorationThickness: string;
                    color: string;
                    textUnderlineOffset: string;
                };
            };
        };
        sizes?: {
            [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
                keys: ("base" | "body" | "heading" | "action")[];
            }>;
        };
        variants?: {
            [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
                keys: ("base" | "body" | "heading" | "action")[];
            }>;
        };
        defaultProps?: {
            size?: string | number;
            variant?: string | number;
            colorScheme?: string;
        };
        parts: ("base" | "body" | "heading" | "action")[];
    };
    CardActions: {
        baseStyle?: ({ bottomBorder, isCentered, layout, topBorder, }: CardActionsBaseStyleProps) => {
            justifyContent: any;
            borderColor: string;
            _dark: {
                borderColor: string;
            };
            borderBottom: string;
            paddingBottom: string;
            borderTop: string;
            paddingTop: string;
            marginBottom: string;
            columnGap: string;
            display: string;
            _last: {
                marginBottom: string;
            };
        } | {
            justifyContent: any;
            borderColor: string;
            _dark: {
                borderColor: string;
            };
            borderBottom?: undefined;
            paddingBottom?: undefined;
            borderTop: string;
            paddingTop: string;
            marginBottom: string;
            columnGap: string;
            display: string;
            _last: {
                marginBottom: string;
            };
        } | {
            justifyContent: any;
            borderColor: string;
            _dark: {
                borderColor: string;
            };
            borderBottom: string;
            paddingBottom: string;
            borderTop?: undefined;
            paddingTop?: undefined;
            marginBottom: string;
            columnGap: string;
            display: string;
            _last: {
                marginBottom: string;
            };
        } | {
            justifyContent: any;
            borderColor: string;
            _dark: {
                borderColor: string;
            };
            borderBottom?: undefined;
            paddingBottom?: undefined;
            borderTop?: undefined;
            paddingTop?: undefined;
            marginBottom: string;
            columnGap: string;
            display: string;
            _last: {
                marginBottom: string;
            };
        };
        sizes?: {
            [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
        };
        variants?: {
            [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
        };
        defaultProps?: {
            size?: string | number;
            variant?: string | number;
            colorScheme?: string;
        };
    };
    CardContent: {
        baseStyle?: {
            marginBottom: string;
            _last: {
                marginBottom: string;
            };
        };
        sizes?: {
            [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
        };
        variants?: {
            [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
        };
        defaultProps?: {
            size?: string | number;
            variant?: string | number;
            colorScheme?: string;
        };
    };
    CardImage: {
        baseStyle?: ({ imageIsAtEnd, isCentered, layout }: CardImageBaseStyleProps) => {
            textAlign: string;
            alignItems: string;
            marginBottom: string[];
            width?: undefined;
            marginTop: string;
            order: string;
        } | {
            marginBottom: string;
            width: string;
            textAlign?: undefined;
            alignItems?: undefined;
            marginTop: string;
            order: string;
        } | {
            textAlign: string;
            alignItems: string;
            marginBottom: string[];
            width?: undefined;
            marginTop?: undefined;
            order?: undefined;
        } | {
            marginBottom: string;
            width: string;
            textAlign?: undefined;
            alignItems?: undefined;
            marginTop?: undefined;
            order?: undefined;
        };
        sizes?: {
            [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
        };
        variants?: {
            [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
        };
        defaultProps?: {
            size?: string | number;
            variant?: string | number;
            colorScheme?: string;
        };
    };
};
export default _default;
