interface StructuredContentBaseStyle {
    hasFigureImage: boolean;
    imageAspectRatio: string;
    imagePosition: string;
}
declare const StructuredContent: {
    parts: string[];
    baseStyle: ({ hasFigureImage, imageAspectRatio, imagePosition, }: StructuredContentBaseStyle) => {
        one: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
        };
        two: {
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        three: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        four: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        fallback: {
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontWeight: string;
            lineHeight: string;
        };
        display1: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading1: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading2: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading3: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading4: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            a: {
                textUnderlineOffset: string;
            };
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading5: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        heading6: {
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            width: string;
            "@media (min-width: 0px)": {
                fontSize: string;
            };
            "@media (min-width: 600px)": {
                fontSize: string;
            };
        };
        imageFigure: {
            marginBottom: string;
            maxWidth?: string;
            float: string[];
            marginStart: string[];
            marginEnd: string[];
            width: string;
        };
        imageWrapper: {
            marginBottom: string;
            maxWidth?: string;
            float: string[];
            marginStart: string[];
            marginEnd: string[];
            width: string;
        };
        image: {
            maxWidth?: string;
            float: string[];
            marginStart: string[];
            marginEnd: string[];
            marginBottom: string;
        };
        /** The following styles are meant to target HTML elements that are
         * not rendered from the Reservoir DS. Typically, these HTML elements
         * are added from an API response.
         */
        ".structuredcontent-body > div": {
            marginTop: string;
            marginInlineEnd: string;
            marginBottom: string;
            marginInlineStart: string;
        };
        a: {
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
        ul: {
            listStyle: string;
            li: {
                _before: {
                    color: string;
                    content: string;
                    display: string;
                    fontWeight: string;
                    fontSize: string;
                    lineHeight: string;
                    marginStart: string;
                    width: string;
                };
                _dark: {
                    _before: {
                        color: string;
                    };
                };
            };
            margin: string;
            marginBottom: string;
            marginInlineStart: string;
            paddingStart: string;
            padding: string;
            display: string;
        };
        ol: {
            margin: string;
            marginBottom: string;
            listStyle: string;
            marginInlineStart: string;
            paddingStart: string;
            padding: string;
            display: string;
            li: {
                marginEnd: string;
                listStyleType: string;
                _notFirst: {
                    marginTop: string;
                };
            };
        };
        section: {
            borderBottom: string;
            borderColor: string;
            paddingStart: string;
            h2: {
                borderTop: string;
                borderColor: string;
                margin: string;
                padding: string;
                _dark: {
                    borderColor: string;
                };
            };
            _dark: {
                borderColor: string;
            };
        };
        dl: {
            display: string;
            gridTemplateColumns: {
                base: string;
                md: string;
            };
            gridTemplateRows: string;
            margin: string;
        };
        dt: {
            borderTop: string;
            borderColor: string;
            color: string;
            fontWeight: string;
            paddingBottom: {
                base: string;
                md: string;
            };
            paddingTop: string;
            paddingEnd: {
                md: string;
            };
            _dark: {
                borderColor: string;
                color: string;
            };
        };
        dd: {
            margin: string;
            paddingBottom: string;
            borderTop: {
                base: string;
                md: string;
            };
            borderColor: {
                md: string;
            };
            paddingTop: {
                md: string;
            };
            _dark: {
                borderColor: {
                    md: string;
                };
            };
        };
        table: {
            width: string;
            th: {
                color: string;
                fontWeight: string;
                textTransform: string;
                _first: {
                    paddingStart: {
                        base: string;
                        md: string;
                    };
                };
                _dark: {
                    color: string;
                };
                border: string;
                borderBottom: string;
                borderColor: {
                    base: string;
                    md: string;
                } | {
                    base: string;
                    md: string;
                };
                display: {
                    base: string;
                    md: string;
                };
                fontSize: {
                    base: string;
                    md: string;
                };
                gap: string;
                letterSpacing: string;
                lineHeight: number;
                paddingBottom: {
                    base: string;
                    md: string;
                };
                paddingStart: number;
                paddingEnd: {
                    base: string;
                    md: string;
                };
                paddingTop: {
                    base: string;
                    md: string;
                };
                _last: {
                    paddingEnd: {
                        base: string;
                        md: string;
                    };
                    borderBottom: string;
                    borderColor: {
                        base: string;
                        md: string;
                    } | {
                        base: string;
                        md: string;
                    };
                };
                "> span": {
                    flexBasis: string;
                    paddingBottom: {
                        base: string;
                        md: string;
                    };
                    paddingEnd: string;
                    paddingTop: {
                        base: string; /** The following styles are meant to target HTML elements that are
                         * not rendered from the Reservoir DS. Typically, these HTML elements
                         * are added from an API response.
                         */
                        md: string;
                    };
                    _first: {
                        bg: string;
                        color: string;
                        fontWeight: string;
                        paddingStart: string;
                        _dark: {
                            color: string;
                        };
                    };
                };
                textAlign: string;
                paddingInlineStart: string;
                paddingInlineEnd: string;
            };
            td: {
                _first: {
                    paddingStart: {
                        base: string;
                        md: string;
                    };
                };
                _last: {
                    borderBottom: {
                        base: number;
                        md: string;
                    };
                    borderColor: {
                        base: string;
                        md: string;
                    } | {
                        base: string;
                        md: string;
                    };
                };
                border: string;
                borderBottom: string;
                borderColor: {
                    base: string;
                    md: string;
                } | {
                    base: string;
                    md: string;
                };
                display: {
                    base: string;
                    md: string;
                };
                fontSize: {
                    base: string;
                    md: string;
                };
                gap: string;
                letterSpacing: string;
                lineHeight: number;
                paddingBottom: {
                    base: string;
                    md: string;
                };
                paddingStart: number;
                paddingEnd: {
                    base: string;
                    md: string;
                };
                paddingTop: {
                    base: string;
                    md: string;
                };
                "> span": {
                    flexBasis: string;
                    paddingBottom: {
                        base: string;
                        md: string;
                    };
                    paddingEnd: string;
                    paddingTop: {
                        base: string; /** The following styles are meant to target HTML elements that are
                         * not rendered from the Reservoir DS. Typically, these HTML elements
                         * are added from an API response.
                         */
                        md: string;
                    };
                    _first: {
                        bg: string;
                        color: string;
                        fontWeight: string;
                        paddingStart: string;
                        _dark: {
                            color: string;
                        };
                    };
                };
                textAlign: string;
                paddingInlineStart: string;
                paddingInlineEnd: string;
            };
        };
    };
};
export default StructuredContent;
