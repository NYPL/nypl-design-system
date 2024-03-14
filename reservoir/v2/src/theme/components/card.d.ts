interface CardBaseStyleProps {
    hasImage: boolean;
    imageIsAtEnd: boolean;
    isAlignedRightActions: boolean;
    isBordered: boolean;
    isCentered: boolean;
    layout: string;
    mainActionLink: boolean;
}
interface CardImageBaseStyleProps {
    imageIsAtEnd: boolean;
    isCentered: boolean;
    size: keyof typeof imageSizes;
    layout: string;
}
interface CardActionsBaseStyleProps {
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
    Card: {
        parts: string[];
        baseStyle: ({ hasImage, imageIsAtEnd, isAlignedRightActions, isBordered, isCentered, layout, mainActionLink, }: CardBaseStyleProps) => {
            display: string;
            flexFlow: {
                base: string;
                md: string;
            };
            maxWidth: string;
            textAlign: string;
            alignItems: string;
            border: string;
            borderColor: string;
            _dark: {
                borderColor: string;
            };
            actions: {
                flexShrink: {
                    base: string;
                    md: string;
                };
                marginStart: {
                    base: string;
                    md: string;
                };
                marginTop: {
                    base: string;
                    md: string;
                };
                maxWidth: {
                    base: string;
                    md: string;
                };
                width: string;
            };
            body: {
                display: {
                    md: string;
                };
                flexBasis: {
                    sm: string;
                };
                flexFlow: {
                    md: string;
                };
                margin: any;
                padding: any;
                width: {
                    base: string;
                    md: string;
                };
            };
            heading: {
                marginBottom: string;
                a: {
                    textDecoration: string;
                    color: string;
                    textDecorationStyle: string;
                    textDecorationThickness: string;
                    textUnderlineOffset: string;
                    _dark: {
                        color: string;
                    };
                    _hover: {
                        color: string;
                        textDecorationStyle: string;
                        textDecorationThickness: string;
                        _dark: {
                            color: string;
                        };
                    };
                };
            };
        } | {
            display: string;
            flexFlow: string;
            maxWidth?: undefined;
            textAlign: string;
            alignItems: string;
            border: string;
            borderColor: string;
            _dark: {
                borderColor: string;
            };
            actions: {
                flexShrink: {
                    base: string;
                    md: string;
                };
                marginStart: {
                    base: string;
                    md: string;
                };
                marginTop: {
                    base: string;
                    md: string;
                };
                maxWidth: {
                    base: string;
                    md: string;
                };
                width: string;
            };
            body: {
                display: {
                    md: string;
                };
                flexBasis: {
                    sm: string;
                };
                flexFlow: {
                    md: string;
                };
                margin: any;
                padding: any;
                width: {
                    base: string;
                    md: string;
                };
            };
            heading: {
                marginBottom: string;
                a: {
                    textDecoration: string;
                    color: string;
                    textDecorationStyle: string;
                    textDecorationThickness: string;
                    textUnderlineOffset: string;
                    _dark: {
                        color: string;
                    };
                    _hover: {
                        color: string;
                        textDecorationStyle: string;
                        textDecorationThickness: string;
                        _dark: {
                            color: string;
                        };
                    };
                };
            };
        } | {
            display: string;
            flexFlow: {
                base: string;
                md: string;
            };
            maxWidth: string;
            textAlign: string;
            alignItems: string;
            border?: undefined;
            borderColor?: undefined;
            _dark?: undefined;
            actions: {
                flexShrink: {
                    base: string;
                    md: string;
                };
                marginStart: {
                    base: string;
                    md: string;
                };
                marginTop: {
                    base: string;
                    md: string;
                };
                maxWidth: {
                    base: string;
                    md: string;
                };
                width: string;
            };
            body: {
                display: {
                    md: string;
                };
                flexBasis: {
                    sm: string;
                };
                flexFlow: {
                    md: string;
                };
                margin: any;
                padding: any;
                width: {
                    base: string;
                    md: string;
                };
            };
            heading: {
                marginBottom: string;
                a: {
                    textDecoration: string;
                    color: string;
                    textDecorationStyle: string;
                    textDecorationThickness: string;
                    textUnderlineOffset: string;
                    _dark: {
                        color: string;
                    };
                    _hover: {
                        color: string;
                        textDecorationStyle: string;
                        textDecorationThickness: string;
                        _dark: {
                            color: string;
                        };
                    };
                };
            };
        } | {
            display: string;
            flexFlow: string;
            maxWidth?: undefined;
            textAlign: string;
            alignItems: string;
            border?: undefined;
            borderColor?: undefined;
            _dark?: undefined;
            actions: {
                flexShrink: {
                    base: string;
                    md: string;
                };
                marginStart: {
                    base: string;
                    md: string;
                };
                marginTop: {
                    base: string;
                    md: string;
                };
                maxWidth: {
                    base: string;
                    md: string;
                };
                width: string;
            };
            body: {
                display: {
                    md: string;
                };
                flexBasis: {
                    sm: string;
                };
                flexFlow: {
                    md: string;
                };
                margin: any;
                padding: any;
                width: {
                    base: string;
                    md: string;
                };
            };
            heading: {
                marginBottom: string;
                a: {
                    textDecoration: string;
                    color: string;
                    textDecorationStyle: string;
                    textDecorationThickness: string;
                    textUnderlineOffset: string;
                    _dark: {
                        color: string;
                    };
                    _hover: {
                        color: string;
                        textDecorationStyle: string;
                        textDecorationThickness: string;
                        _dark: {
                            color: string;
                        };
                    };
                };
            };
        };
    };
    CardActions: {
        baseStyle: ({ bottomBorder, isCentered, layout, topBorder, }: CardActionsBaseStyleProps) => {
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
    };
    CardContent: {
        baseStyle: {
            marginBottom: string;
            _last: {
                marginBottom: string;
            };
        };
    };
    CardImage: {
        baseStyle: ({ imageIsAtEnd, isCentered, layout, size, }: CardImageBaseStyleProps) => {
            flex: {
                md: string;
            };
            maxWidth: {
                base: string;
                md: string;
            };
            textAlign: string;
            alignItems: string;
            margin: {
                base: string;
                md: string;
            };
            width: {
                base: string;
                md: any;
            };
            marginBottom: string[];
            marginTop: string;
            order: string;
        } | {
            marginBottom: string;
            width: string;
            marginTop: string;
            order: string;
        } | {
            flex: {
                md: string;
            };
            maxWidth: {
                base: string;
                md: string;
            };
            textAlign: string;
            alignItems: string;
            margin: {
                base: string;
                md: string;
            };
            width: {
                base: string;
                md: any;
            };
            marginBottom: string[];
            marginTop?: undefined;
            order?: undefined;
        } | {
            marginBottom: string;
            width: string;
            marginTop?: undefined;
            order?: undefined;
        };
    };
};
export default _default;
