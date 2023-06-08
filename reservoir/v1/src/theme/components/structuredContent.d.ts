interface StructuredContentBaseStyle {
    hasFigureImage: boolean;
    imageAspectRatio: string;
    imagePosition: string;
}
declare const StructuredContent: {
    parts: string[];
    baseStyle: ({ hasFigureImage, imageAspectRatio, imagePosition, }: StructuredContentBaseStyle) => {
        h1: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
        };
        h2: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        h3: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        h4: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
        };
        fallback: {
            width: string;
            marginTop: string;
            marginStart: string;
            marginEnd: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
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
                    lg: string;
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
                        base: string;
                        md: string; /** The following styles are meant to target HTML elements that are
                         * not rendered from the Reservoir DS. Typically, these HTML elements
                         * are added from an API response.
                         */
                    }; /** The following styles are meant to target HTML elements that are
                     * not rendered from the Reservoir DS. Typically, these HTML elements
                     * are added from an API response.
                     */
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
                    lg: string;
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
                        base: string;
                        md: string; /** The following styles are meant to target HTML elements that are
                         * not rendered from the Reservoir DS. Typically, these HTML elements
                         * are added from an API response.
                         */
                    }; /** The following styles are meant to target HTML elements that are
                     * not rendered from the Reservoir DS. Typically, these HTML elements
                     * are added from an API response.
                     */
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
