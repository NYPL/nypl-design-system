interface SelectBaseStyle {
    labelPosition: string;
}
declare const Select: {
    parts: string[];
    baseStyle: ({ labelPosition }: SelectBaseStyle) => {
        inline: {
            display: {
                md: string;
            };
            gap: {
                md: string;
            };
            alignItems: {
                md: string;
            };
        };
        select: {
            flex: {
                md: string;
            };
            backgroundColor: string;
            borderRadius: string;
            borderColor: string;
            fontSize: string;
            minHeight: {
                base: string;
                md: string;
            };
            paddingTop: string;
            paddingEnd: string;
            paddingBottom: string;
            paddingStart: string;
            _hover: {
                borderColor: string;
            };
            _active: {
                borderColor: string;
                _dark: {
                    borderColor: string;
                    boxShadow: string;
                    outline: string;
                    outlineOffset: string;
                    outlineColor: string;
                    zIndex: string;
                    _dark: {
                        outlineColor: string;
                    };
                };
                boxShadow: string;
                outline: string;
                outlineOffset: string;
                outlineColor: string;
                zIndex: string;
            };
            _disabled: {
                bg: string;
                borderColor: string;
                color: string;
                opacity: string;
                _dark: {
                    bg: string;
                    borderColor: string;
                    color: string;
                };
            };
            _focus: {
                "+ .chakra-select__icon-wrapper": {
                    zIndex: string;
                };
                borderColor: string;
                _dark: {
                    borderColor: string;
                    boxShadow: string;
                    outline: string;
                    outlineOffset: string;
                    outlineColor: string;
                    zIndex: string;
                    _dark: {
                        outlineColor: string;
                    };
                };
                boxShadow: string;
                outline: string;
                outlineOffset: string;
                outlineColor: string;
                zIndex: string;
            };
            _invalid: {
                border: string;
                borderColor: string;
                boxShadow: string;
                color: string;
            };
            _dark: {
                backgroundColor: string;
                borderColor: string;
                color: string;
                _hover: {
                    borderColor: string;
                };
                _invalid: {
                    borderColor: string;
                    color: string;
                };
            };
        };
    };
    variants: {
        searchbar: {
            select: {
                flex: string;
                borderRightColor: {
                    md: string;
                };
                borderRightRadius: {
                    md: string;
                };
            };
        };
    };
    defaultProps: {
        size: string;
    };
};
export default Select;
