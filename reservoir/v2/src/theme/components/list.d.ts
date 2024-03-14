interface ListBaseStyle {
    inline?: boolean;
    noStyling: boolean;
}
export declare const baseListStyles: (inline?: boolean, noStyling?: boolean) => {
    margin: string;
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
export declare const baseUnorderedStyles: (noStyling?: boolean) => {
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
};
export declare const baseSectionDescriptionStyles: {
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
export declare const baseDescriptionStyles: {
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
declare const List: {
    parts: string[];
    baseStyle: ({ inline, noStyling }: ListBaseStyle) => {
        heading: {
            borderTop: string;
            borderColor: string;
            margin: string;
            padding: string;
            _dark: {
                borderColor: string;
            };
        };
        margin: string;
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
    variants: {
        ul: ({ noStyling }: ListBaseStyle) => {
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
        };
        ol: {
            margin: string;
            marginBottom: string;
        };
        dl: {
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
    };
};
export default List;
