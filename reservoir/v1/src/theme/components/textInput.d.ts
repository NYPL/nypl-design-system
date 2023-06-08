declare const TextInput: {
    parts: string[];
    baseStyle: ({ showLabel }: {
        showLabel: any;
    }) => {
        position: string;
        input: {
            bgColor: string;
            border: string;
            borderColor: string;
            borderRadius: string;
            fontSize: string;
            minHeight: {
                base: string;
                md: string;
            };
            py: string;
            px: string;
            _hover: {
                borderColor: string;
            };
            _disabled: {
                _placeholder: {
                    color: string;
                };
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
            _focus: {
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
            _placeholder: {
                color: string;
                fontStyle: string;
                lineHeight: string;
            };
            _invalid: {
                border: string;
                borderColor: string;
                boxShadow: string;
                color: string;
                _focus: {
                    borderColor: string;
                };
            };
            _dark: {
                bgColor: string;
                borderColor: string;
                _hover: {
                    borderColor: string;
                };
                _disabled: {
                    _placeholder: {
                        color: string;
                    };
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
                _focus: {
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
                _placeholder: {
                    color: string;
                };
                _invalid: {
                    borderColor: string;
                    color: string;
                };
            };
        };
        textarea: {
            lineheight: string;
            minHeight: string;
            bgColor: string;
            border: string;
            borderColor: string;
            borderRadius: string;
            fontSize: string;
            py: string;
            px: string;
            _hover: {
                borderColor: string;
            };
            _disabled: {
                _placeholder: {
                    color: string;
                };
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
            _focus: {
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
            _placeholder: {
                color: string;
                fontStyle: string;
                lineHeight: string;
            };
            _invalid: {
                border: string;
                borderColor: string;
                boxShadow: string;
                color: string;
                _focus: {
                    borderColor: string;
                };
            };
            _dark: {
                bgColor: string;
                borderColor: string;
                _hover: {
                    borderColor: string;
                };
                _disabled: {
                    _placeholder: {
                        color: string;
                    };
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
                _focus: {
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
                _placeholder: {
                    color: string;
                };
                _invalid: {
                    borderColor: string;
                    color: string;
                };
            };
        };
        clearButton: {
            borderRadius: string;
            minHeight: {
                base: string;
                md: string;
            };
            height: string;
            position: string;
            top: string;
            px: string;
            right: string;
            span: {
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
            zIndex: string;
        };
    };
    variants: {
        searchBar: {
            flex: string;
            input: {
                borderRightRadius: string;
            };
        };
        searchBarSelect: {
            flex: string;
            input: {
                borderRadius: string;
                borderTopLeftRadius: {
                    base: string;
                    md: string;
                };
                borderTopRightRadius: {
                    base: string;
                    md: string;
                };
            };
        };
    };
};
export default TextInput;
