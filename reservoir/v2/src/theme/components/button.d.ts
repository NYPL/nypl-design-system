export declare const buttonBaseStyle: {
    alignItems: string;
    borderRadius: string;
    display: string;
    cursor: string;
    color: string;
    fontWeight: string;
    justifyContent: string;
    lineHeight: string;
    textDecoration: string;
    wordWrap: string;
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
    svg: {
        fill: string;
    };
    _hover: {
        bg: string;
    };
    _visited: {
        color: string;
    };
    _disabled: {
        bg: string;
        color: string;
        opacity: string;
        pointerEvents: string;
    };
    _dark: {
        _disabled: {
            bg: string;
            color: string;
        };
    };
};
export declare const primary: ({ buttonSize }: {
    buttonSize?: string;
}) => any;
export declare const secondary: ({ buttonSize }: {
    buttonSize?: string;
}) => any;
export declare const pill: ({ buttonSize }: {
    buttonSize?: string;
}) => any;
export declare const callout: ({ buttonSize }: {
    buttonSize?: string;
}) => any;
export declare const noBrand: ({ buttonSize }: {
    buttonSize?: string;
}) => any;
declare const Button: {
    parts: string[];
    baseStyle: {
        alignItems: string;
        borderRadius: string;
        display: string;
        cursor: string;
        color: string;
        fontWeight: string;
        justifyContent: string;
        lineHeight: string;
        textDecoration: string;
        wordWrap: string;
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
        svg: {
            fill: string;
        };
        _hover: {
            bg: string;
        };
        _visited: {
            color: string;
        };
        _disabled: {
            bg: string;
            color: string;
            opacity: string;
            pointerEvents: string;
        };
        _dark: {
            _disabled: {
                bg: string;
                color: string;
            };
        };
    };
    variants: {
        primary: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
        secondary: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
        text: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
        link: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
        pill: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
        iconOnly: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
        callout: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
        noBrand: ({ buttonSize }: {
            buttonSize?: string;
        }) => any;
    };
    defaultProps: {
        variant: string;
    };
};
export default Button;
