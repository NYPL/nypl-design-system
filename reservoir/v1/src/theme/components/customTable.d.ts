interface BaseStyleProps {
    columnHeadersBackgroundColor?: string;
    columnHeadersTextColor?: string;
    showRowDividers?: boolean;
    useRowHeaders?: boolean;
}
export declare const baseTRStyles: (columnHeadersBackgroundColor?: string, showRowDividers?: boolean, useRowHeaders?: boolean) => {
    borderBottom: {
        base: string;
        md: number;
    };
    borderColor: string;
    display: {
        base: string;
        md: string;
    };
    paddingBottom: number | {
        base: string;
        md: string;
    };
    paddingTop: number | {
        base: string;
        md: string;
    };
    _first: {
        borderTop: {
            base: string;
            md: string;
        };
        borderColor: string;
    };
    _dark: {
        borderColor: string;
    };
};
export declare const baseCellStyles: (columnHeadersBackgroundColor?: string, columnHeadersTextColor?: string, showRowDividers?: boolean, useRowHeaders?: boolean) => {
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
    _first: {
        paddingStart: {
            base: string;
            md: string;
        };
        borderBottom: string | {
            base: string;
            md: string;
        };
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
};
export declare const baseTHStyles: (columnHeadersBackgroundColor?: string, columnHeadersTextColor?: string, showRowDividers?: boolean, useRowHeaders?: boolean) => {
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
};
export declare const baseTDStyles: (columnHeadersBackgroundColor?: string, columnHeadersTextColor?: string, showRowDividers?: boolean, useRowHeaders?: boolean) => {
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
};
export declare const baseStyle: ({ columnHeadersBackgroundColor, columnHeadersTextColor, showRowDividers, useRowHeaders, }: BaseStyleProps) => {
    tbody: {
        th: {
            backgroundColor: {
                base: string;
                md: string;
            };
            color: string;
            verticalAlign: string;
            _dark: {
                backgroundColor: {
                    base: string;
                    md: string;
                };
                color: string;
            };
        };
        td: {
            verticalAlign: string;
        };
    };
    thead: {
        display: {
            base: string;
            md: string;
        };
    };
    tr: {
        borderBottom: {
            base: string;
            md: number;
        };
        borderColor: string;
        display: {
            base: string;
            md: string;
        };
        paddingBottom: number | {
            base: string;
            md: string;
        };
        paddingTop: number | {
            base: string;
            md: string;
        };
        _first: {
            borderTop: {
                base: string;
                md: string;
            };
            borderColor: string;
        };
        _dark: {
            borderColor: string;
        };
    };
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
    };
    caption: {
        captionSide: string;
        color: string;
        fontSize: string;
        fontWeight: string;
        marginBottom: string;
        marginStart: string;
        marginEnd: string;
        marginTop: string;
        padding: string;
        textAlign: string;
        _dark: {
            color: string;
        };
    };
};
declare const CustomTable: {
    baseStyle: ({ columnHeadersBackgroundColor, columnHeadersTextColor, showRowDividers, useRowHeaders, }: BaseStyleProps) => {
        tbody: {
            th: {
                backgroundColor: {
                    base: string;
                    md: string;
                };
                color: string;
                verticalAlign: string;
                _dark: {
                    backgroundColor: {
                        base: string;
                        md: string;
                    };
                    color: string;
                };
            };
            td: {
                verticalAlign: string;
            };
        };
        thead: {
            display: {
                base: string;
                md: string;
            };
        };
        tr: {
            borderBottom: {
                base: string;
                md: number;
            };
            borderColor: string;
            display: {
                base: string;
                md: string;
            };
            paddingBottom: number | {
                base: string;
                md: string;
            };
            paddingTop: number | {
                base: string;
                md: string;
            };
            _first: {
                borderTop: {
                    base: string;
                    md: string;
                };
                borderColor: string;
            };
            _dark: {
                borderColor: string;
            };
        };
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
        };
        caption: {
            captionSide: string;
            color: string;
            fontSize: string;
            fontWeight: string;
            marginBottom: string;
            marginStart: string;
            marginEnd: string;
            marginTop: string;
            padding: string;
            textAlign: string;
            _dark: {
                color: string;
            };
        };
    };
};
export default CustomTable;
