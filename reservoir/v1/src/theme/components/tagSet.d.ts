declare const _default: {
    TagSet: {
        baseStyle: () => {
            display: string;
            flexWrap: string;
            gap: string;
        };
    };
    TagSetExplore: {
        baseStyle: {
            display: string;
            alignItems: string;
            justifyContent: string;
            bg: string;
            border: string;
            borderColor: string;
            borderRadius: string;
            color: string;
            cursor: string;
            fontSize: string;
            height: {
                base: string;
                md: string;
            };
            minHeight: string;
            maxWidth: string;
            py: string;
            px: string;
            textDecoration: string;
            transition: string;
            _focusWithin: {
                boxShadow: string;
                outline: string;
                outlineOffset: string;
                outlineColor: string;
                zIndex: string;
                _dark: {
                    outlineColor: string;
                };
            };
            a: {
                border: string;
                _focus: {
                    outline: string;
                };
            };
            "> span": {
                display: string;
                overflow: string;
                textOverflow: string;
                whiteSpace: string;
            };
            svg: {
                fill: string;
            };
            _hover: {
                bg: string;
                a: {
                    color: string;
                };
                svg: {
                    fill: string;
                };
                "> span": {
                    color: string;
                };
            };
            _dark: {
                bg: string;
                borderColor: string;
                color: string;
                a: {
                    color: string;
                };
                svg: {
                    fill: string;
                };
                _hover: {
                    bg: string;
                    a: {
                        color: string;
                    };
                    svg: {
                        fill: string;
                    };
                    "> span": {
                        color: string;
                    };
                };
            };
        };
    };
    TagSetFilter: {
        parts: string[];
        baseStyle: ({ isDismissible }: {
            isDismissible: boolean;
        }) => {
            display: string;
            alignItems: string;
            justifyContent: string;
            bg: string;
            border: string;
            borderColor: string;
            borderRadius: string;
            color: string;
            cursor: string;
            height: {
                base: string;
                md: string;
            };
            minHeight: string;
            maxWidth: string;
            py: string;
            paddingLeft: string;
            paddingRight: string | {
                base: string;
                md: string;
            };
            fontSize: string;
            "> span": {
                display: string;
                overflow: string;
                textOverflow: string;
                whiteSpace: string;
            };
            _hover: {
                bg: string;
                borderColor: string;
            };
            _dark: {
                bg: string;
                borderColor: string;
                color: string;
                _hover: {
                    bg: string;
                    borderColor: string;
                };
            };
            clearAll: {
                color: string;
                height: {
                    base: string;
                    md: string;
                };
                fontSize: string;
                minHeight: string;
                _dark: {
                    color: string;
                };
            };
        };
    };
};
export default _default;
