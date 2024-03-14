export declare const baseLinkStyles: {
    color: string;
    textDecoration: string;
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
declare const Link: {
    parts: string[];
    baseStyle: ({ finalIsUnderlined, hasVisitedState }: {
        finalIsUnderlined?: boolean;
        hasVisitedState: any;
    }) => {
        _visited: {
            color: string;
            _dark: {
                color: string;
            };
        } | {
            color?: undefined;
            _dark?: undefined;
        };
        textDecoration: string;
        /** This is needed for custom anchor elements or link components
         * that are passed as children to the `Link` component. */
        a: {
            _hover: {
                color: string;
            };
        };
        /** The element will handle descriptive text added to aid
         * screen readers. */
        screenreaderOnly: {
            clip: string;
            height: {
                base: string;
                md: string;
            };
            overflow: string;
            position: {
                base: string;
                md: string;
            };
            width: {
                base: string;
                md: string;
            };
            wordWrap: string;
        };
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
    variants: {
        button: {
            width: string;
            borderRadius: string;
            lineHeight: string;
            display: string;
            cursor: string;
            color: string;
            justifyContent: string;
            py: string;
            px: string;
            textDecoration: string;
            fontWeight: string;
            bg: string;
            _dark: {
                color: string;
                bg: string;
            };
            _hover: {
                color: string;
                bg: string;
                textDecoration: string;
                _dark: {
                    color: string;
                    bg: string;
                };
            };
            _visited: {
                color: string;
                _dark: {
                    _visited: {
                        color: string;
                    };
                };
            };
        };
        buttonCallout: ({ hasVisitedState }: {
            hasVisitedState: any;
        }) => any;
        buttonDisabled: ({ hasVisitedState }: {
            hasVisitedState: any;
        }) => any;
        buttonNoBrand: ({ hasVisitedState }: {
            hasVisitedState: any;
        }) => any;
        buttonPill: ({ hasVisitedState }: {
            hasVisitedState: any;
        }) => any;
        buttonPrimary: ({ hasVisitedState }: {
            hasVisitedState: any;
        }) => any;
        buttonSecondary: ({ hasVisitedState }: {
            hasVisitedState: any;
        }) => any;
        moreLink: ({ hasVisitedState }: {
            hasVisitedState: any;
        }) => {
            alignItems: string;
            display: string;
            svg: {
                height: string;
                width: string;
                textDecoration: string;
                fill: string;
            };
            _hover: {
                color: string;
                textDecoration: string;
            };
            _visited: {
                svg: {
                    fill: string;
                };
                _dark: {
                    svg: {
                        fill: string;
                    };
                };
            } | {
                svg?: undefined;
                _dark?: undefined;
            };
        };
    };
};
export default Link;
