/**
 * Grid layout based on https://www.joshwcomeau.com/css/full-bleed/
 */
declare const _default: {
    Template: {
        baseStyle: {
            boxSizing: string;
            color: string;
            display: string;
            gridTemplateColumns: string;
            rowGap: string;
            _dark: {
                color: string;
            };
        };
        sizes: {};
        defaultProps: {};
    };
    TemplateBreakout: {
        baseStyle: {
            width: string;
            gridColumn: string;
        };
    };
    TemplateContent: {
        baseStyle: {
            gridColumn: string;
            display: string;
            gridTemplateColumns: string;
            paddingY: number;
            paddingX: string;
            gap: string;
        };
        variants: {
            left: {
                gridTemplateColumns: {
                    md: string;
                };
            };
            right: {
                gridTemplateColumns: {
                    md: string;
                };
            };
        };
    };
    TemplateContentTopBottom: {
        baseStyle: {
            gridColumn: {
                base: string;
                md: string;
            };
            height: string;
        };
    };
    TemplateContentPrimary: {
        baseStyle: {
            gridColumn: {
                base: string;
                md: string;
            };
        };
        variants: {
            left: {
                gridColumn: {
                    base: string;
                    md: string;
                };
                marginEnd: {
                    md: number;
                };
                minWidth: {
                    md: number;
                };
            };
            right: {
                gridColumn: {
                    base: string;
                    md: string;
                };
            };
        };
    };
    TemplateContentSidebar: {
        variants: {
            left: {
                gridColumn: string;
            };
            right: {
                gridColumn: {
                    base: string;
                    md: string;
                };
            };
        };
    };
};
export default _default;
