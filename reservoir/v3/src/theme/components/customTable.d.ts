import { StyleFunctionProps } from "@chakra-ui/system";
import { TableBodyTextSizes } from "../../components/Table/Table";
interface BaseStyleProps extends StyleFunctionProps {
    columnHeadersBackgroundColor?: string;
    columnHeadersTextColor?: string;
    tableTextSize?: TableBodyTextSizes;
    isScrollable?: boolean;
    showRowDividers?: boolean;
    useRowHeaders?: boolean;
}
export declare const fixedColumnStyles: (isScrollable?: boolean, useRowHeaders?: boolean) => {
    backgroundColor: string;
    borderRight: string | {
        base: any;
        md: string;
    };
    left: {
        base: any;
        md: string;
    };
    position: string;
    zIndex: string;
    _dark: {
        backgroundColor: string;
        borderRight: string | {
            base: any;
            md: string;
        };
    };
};
export declare const baseTRStyles: (columnHeadersBackgroundColor?: string, isScrollable?: boolean, showRowDividers?: boolean, useRowHeaders?: boolean) => {
    borderBottom: number | {
        base: string;
        md: number;
    };
    borderColor: string;
    display: string | {
        base: string;
        md: string;
    };
    paddingBottom: string | number | {
        base: string;
        md: string;
    };
    paddingTop: string | number | {
        base: string;
        md: string;
    };
    _first: {
        borderTop: string | {
            base: string;
            md: string;
        };
        borderColor: string;
    };
    _dark: {
        borderColor: string;
    };
};
export declare const baseCellStyles: (columnHeadersBackgroundColor?: string, columnHeadersTextColor?: string, tableTextSize?: any, isScrollable?: boolean, showRowDividers?: boolean) => {
    border: string;
    borderBottom: string;
    borderColor: string;
    display: {
        base: string;
        md: string;
    };
    fontSize: string;
    gap: string;
    letterSpacing: string;
    lineHeight: number;
    paddingBottom: string | {
        base: string;
        md: string;
    };
    paddingEnd: string;
    paddingStart: string | {
        base: string;
        md: string;
    };
    paddingTop: string | {
        base: string;
        md: string;
    };
    _first: {
        borderBottom: string;
        _dark: {
            borderBottom: string;
        };
    };
    _last: {
        borderBottom: string;
        borderColor: string;
    };
    "> span": {
        flexBasis: string;
        paddingBottom: {
            base: string;
            md: string;
        };
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
export declare const baseTHStyles: (columnHeadersBackgroundColor?: string, columnHeadersTextColor?: string, tableTextSize?: string, isScrollable?: boolean, showRowDividers?: boolean, useRowHeaders?: boolean) => {
    color: string;
    fontWeight: string;
    fontSize: string;
    textTransform: string;
    _first: {
        backgroundColor: string;
        borderRight: string | {
            base: any;
            md: string;
        };
        left: {
            base: any;
            md: string;
        };
        position: string;
        zIndex: string;
        _dark: {
            backgroundColor: string;
            borderRight: string | {
                base: any;
                md: string;
            };
        };
    };
    _dark: {
        color: string;
    };
    border: string;
    borderBottom: string;
    borderColor: string;
    display: {
        base: string;
        md: string;
    };
    gap: string;
    letterSpacing: string;
    lineHeight: number;
    paddingBottom: string | {
        base: string;
        md: string;
    };
    paddingEnd: string;
    paddingStart: string | {
        base: string;
        md: string;
    };
    paddingTop: string | {
        base: string;
        md: string;
    };
    _last: {
        borderBottom: string;
        borderColor: string;
    };
    "> span": {
        flexBasis: string;
        paddingBottom: {
            base: string;
            md: string;
        };
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
export declare const baseTDStyles: (columnHeadersBackgroundColor?: string, columnHeadersTextColor?: string, tableTextSize?: string, isScrollable?: boolean, showRowDividers?: boolean) => {
    _last: {
        borderBottom: string | {
            base: number;
            md: string;
        };
    };
    border: string;
    borderBottom: string;
    borderColor: string;
    display: {
        base: string;
        md: string;
    };
    fontSize: string;
    gap: string;
    letterSpacing: string;
    lineHeight: number;
    paddingBottom: string | {
        base: string;
        md: string;
    };
    paddingEnd: string;
    paddingStart: string | {
        base: string;
        md: string;
    };
    paddingTop: string | {
        base: string;
        md: string;
    };
    _first: {
        borderBottom: string;
        _dark: {
            borderBottom: string;
        };
    };
    "> span": {
        flexBasis: string;
        paddingBottom: {
            base: string;
            md: string;
        };
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
export declare const baseStyle: ({ columnHeadersBackgroundColor, columnHeadersTextColor, tableTextSize, isScrollable, showRowDividers, useRowHeaders, }: BaseStyleProps) => {
    base: {
        overflow: string;
        maxWidth: string;
        whiteSpace: string;
        /** Show shadow to scroll */
        background: string;
        backgroundRepeat: string;
        backgroundColor: string;
        backgroundSize: string;
        backgroundPosition: string;
        backgroundAttachment: string;
        _dark: {
            /** Show shadow to scroll */
            background: string;
            backgroundRepeat: string;
            backgroundColor: string;
            backgroundSize: string;
            backgroundPosition: string;
            backgroundAttachment: string;
        };
    };
    innerTable: {
        borderCollapse: string;
        borderSpacing: number;
        tbody: {
            th: {
                backgroundColor: string | {
                    base: "ui.gray.x-light-cool";
                    md: "ui.white" | "ui.gray.xx-light-cool";
                };
                color: string;
                fontWeight: string;
                fontSize: string;
                textTransform: string;
                verticalAlign: string;
                _dark: {
                    color: string;
                };
            };
            td: {
                verticalAlign: string;
            };
        };
        thead: {
            display: {
                base: "none";
                md: "table-header-group";
            };
            th: {
                _first: {
                    backgroundColor: string;
                    _dark: {
                        backgroundColor: string;
                    };
                };
            };
        };
        tr: {
            borderBottom: number | {
                base: string;
                md: number;
            };
            borderColor: string;
            display: string | {
                base: string;
                md: string;
            };
            paddingBottom: string | number | {
                base: string;
                md: string;
            };
            paddingTop: string | number | {
                base: string;
                md: string;
            };
            _first: {
                borderTop: string | {
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
            fontSize: string;
            textTransform: string;
            _first: {
                backgroundColor: string;
                borderRight: string | {
                    base: any;
                    md: string;
                };
                left: {
                    base: any;
                    md: string;
                };
                position: string;
                zIndex: string;
                _dark: {
                    backgroundColor: string;
                    borderRight: string | {
                        base: any;
                        md: string;
                    };
                };
            };
            _dark: {
                color: string;
            };
            border: string;
            borderBottom: string;
            borderColor: string;
            display: {
                base: string;
                md: string;
            };
            gap: string;
            letterSpacing: string;
            lineHeight: number;
            paddingBottom: string | {
                base: string;
                md: string;
            };
            paddingEnd: string;
            paddingStart: string | {
                base: string;
                md: string;
            };
            paddingTop: string | {
                base: string;
                md: string;
            };
            _last: {
                borderBottom: string;
                borderColor: string;
            };
            "> span": {
                flexBasis: string;
                paddingBottom: {
                    base: string;
                    md: string;
                };
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
            _last: {
                borderBottom: string | {
                    base: number;
                    md: string;
                };
            };
            border: string;
            borderBottom: string;
            borderColor: string;
            display: {
                base: string;
                md: string;
            };
            fontSize: string;
            gap: string;
            letterSpacing: string;
            lineHeight: number;
            paddingBottom: string | {
                base: string;
                md: string;
            };
            paddingEnd: string;
            paddingStart: string | {
                base: string;
                md: string;
            };
            paddingTop: string | {
                base: string;
                md: string;
            };
            _first: {
                borderBottom: string;
                _dark: {
                    borderBottom: string;
                };
            };
            "> span": {
                flexBasis: string;
                paddingBottom: {
                    base: string;
                    md: string;
                };
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
            fontSize: {
                base: "mobile.heading.heading2";
                md: "desktop.heading.heading2";
            };
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
declare const CustomTable: {
    baseStyle?: ({ columnHeadersBackgroundColor, columnHeadersTextColor, tableTextSize, isScrollable, showRowDividers, useRowHeaders, }: BaseStyleProps) => {
        base: {
            overflow: string;
            maxWidth: string;
            whiteSpace: string;
            /** Show shadow to scroll */
            background: string;
            backgroundRepeat: string;
            backgroundColor: string;
            backgroundSize: string;
            backgroundPosition: string;
            backgroundAttachment: string;
            _dark: {
                /** Show shadow to scroll */
                background: string;
                backgroundRepeat: string;
                backgroundColor: string;
                backgroundSize: string;
                backgroundPosition: string;
                backgroundAttachment: string;
            };
        };
        innerTable: {
            borderCollapse: string;
            borderSpacing: number;
            tbody: {
                th: {
                    backgroundColor: string | {
                        base: "ui.gray.x-light-cool";
                        md: "ui.white" | "ui.gray.xx-light-cool";
                    };
                    color: string;
                    fontWeight: string;
                    fontSize: string;
                    textTransform: string;
                    verticalAlign: string;
                    _dark: {
                        color: string;
                    };
                };
                td: {
                    verticalAlign: string;
                };
            };
            thead: {
                display: {
                    base: "none";
                    md: "table-header-group";
                };
                th: {
                    _first: {
                        backgroundColor: string;
                        _dark: {
                            backgroundColor: string;
                        };
                    };
                };
            };
            tr: {
                borderBottom: number | {
                    base: string;
                    md: number;
                };
                borderColor: string;
                display: string | {
                    base: string;
                    md: string;
                };
                paddingBottom: string | number | {
                    base: string;
                    md: string;
                };
                paddingTop: string | number | {
                    base: string;
                    md: string;
                };
                _first: {
                    borderTop: string | {
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
                fontSize: string;
                textTransform: string;
                _first: {
                    backgroundColor: string;
                    borderRight: string | {
                        base: any;
                        md: string;
                    };
                    left: {
                        base: any;
                        md: string;
                    };
                    position: string;
                    zIndex: string;
                    _dark: {
                        backgroundColor: string;
                        borderRight: string | {
                            base: any;
                            md: string;
                        };
                    };
                };
                _dark: {
                    color: string;
                };
                border: string;
                borderBottom: string;
                borderColor: string;
                display: {
                    base: string;
                    md: string;
                };
                gap: string;
                letterSpacing: string;
                lineHeight: number;
                paddingBottom: string | {
                    base: string;
                    md: string;
                };
                paddingEnd: string;
                paddingStart: string | {
                    base: string;
                    md: string;
                };
                paddingTop: string | {
                    base: string;
                    md: string;
                };
                _last: {
                    borderBottom: string;
                    borderColor: string;
                };
                "> span": {
                    flexBasis: string;
                    paddingBottom: {
                        base: string;
                        md: string;
                    };
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
                _last: {
                    borderBottom: string | {
                        base: number;
                        md: string;
                    };
                };
                border: string;
                borderBottom: string;
                borderColor: string;
                display: {
                    base: string;
                    md: string;
                };
                fontSize: string;
                gap: string;
                letterSpacing: string;
                lineHeight: number;
                paddingBottom: string | {
                    base: string;
                    md: string;
                };
                paddingEnd: string;
                paddingStart: string | {
                    base: string;
                    md: string;
                };
                paddingTop: string | {
                    base: string;
                    md: string;
                };
                _first: {
                    borderBottom: string;
                    _dark: {
                        borderBottom: string;
                    };
                };
                "> span": {
                    flexBasis: string;
                    paddingBottom: {
                        base: string;
                        md: string;
                    };
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
                fontSize: {
                    base: "mobile.heading.heading2";
                    md: "desktop.heading.heading2";
                };
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
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("base" | "innerTable")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("base" | "innerTable")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("base" | "innerTable")[];
};
export default CustomTable;
