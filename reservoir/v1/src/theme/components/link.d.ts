export declare const baseLinkStyles: {
    color: string;
    textDecoration: string;
    _dark: {
        color: string;
    };
    _hover: {
        color: string;
        _dark: {
            color: string;
        };
    };
};
declare const Link: {
    parts: string[];
    baseStyle: {
        /** This is needed for custom anchor elements or link components
         * that are passed as children to the `Link` component. */
        a: {
            _hover: {
                color: string;
            };
        };
        /** The element will handle descriptive text added to aid
         * screen readers. */
        srOnly: {
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
        textDecoration: string;
        _dark: {
            color: string;
        };
        _hover: {
            color: string;
            _dark: {
                color: string;
            };
        };
    };
    variants: {
        link: {};
        disabled: {
            color: string;
            pointerEvents: string;
        };
        moreLink: {
            alignItems: string;
            display: string;
            svg: {
                height: string;
                width: string;
                textDecoration: string;
                fill: string;
            };
        };
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
        };
        buttonPrimary: any;
        buttonSecondary: any;
        buttonPill: any;
        buttonCallout: any;
        buttonNoBrand: any;
        buttonDisabled: any;
    };
};
export default Link;
