declare const Checkbox: {
    parts: string[];
    baseStyle: {
        _hover: {
            span: {
                _first: {
                    borderColor: string;
                };
                _checked: {
                    borderColor: string;
                };
                _disabled: {
                    borderColor: string;
                };
                _invalid: {
                    borderColor: string;
                };
            };
            _dark: {
                span: {
                    _first: {
                        borderColor: string;
                    };
                    _checked: {
                        borderColor: string;
                    };
                    _disabled: {
                        borderColor: string;
                    };
                    _invalid: {
                        borderColor: string;
                    };
                };
            };
        };
        icon: {
            transitionProperty: string;
            transitionDuration: string;
            width: string;
            height: string;
        };
        control: {
            border: string;
            borderRadius: string;
            borderColor: string;
            backgroundColor: string;
            color: string;
            outline: string;
            transitionProperty: string;
            transitionDuration: string;
            _checked: {
                bg: string;
                borderColor: string;
                color: string;
                _hover: {
                    bg: string;
                };
                _disabled: {
                    bg: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                _indeterminate: {
                    color: string;
                    borderColor: string;
                };
            };
            _indeterminate: {
                color: string;
                borderColor: string;
            };
            _disabled: {
                bg: string;
                borderColor: string;
            };
            _focus: {
                boxShadow: string;
                outlineColor: string;
            };
            _invalid: {
                borderColor: string;
                color: string;
            };
            _dark: {
                borderColor: string;
                backgroundColor: string;
                color: string;
                _checked: {
                    borderColor: string;
                    color: string;
                    _disabled: {
                        backgroundColor: string;
                        borderColor: string;
                        svg: {
                            color: string;
                        };
                    };
                    _indeterminate: {
                        color: string;
                        borderColor: string;
                    };
                    _invalid: {
                        borderColor: string;
                        color: string;
                    };
                };
                _indeterminate: {
                    color: string;
                    borderColor: string;
                };
                _disabled: {
                    backgroundColor: string;
                    borderColor: string;
                    svg: {
                        color: string;
                    };
                };
                _focus: {
                    boxShadow: string;
                    outlineColor: string;
                };
                _invalid: {
                    borderColor: string;
                    color: string;
                };
            };
        };
        label: {
            userSelect: string;
            fontWeight: string;
            marginBottom: string;
            marginStart: string;
            width: string;
            _disabled: {
                color: string;
                opacity: number;
                fontStyle: string;
            };
            _invalid: {
                color: string;
            };
            _dark: {
                _disabled: {
                    color: string;
                };
                _invalid: {
                    color: string;
                };
            };
        };
        helperErrorText: {
            marginStart: string;
            _disabled: {
                color: string;
                fontStyle: string;
            };
        };
    };
    sizes: {
        lg: {
            control: {
                borderRadius: string;
                h: string;
                w: string;
            };
            label: {
                fontSize: string;
            };
        };
    };
    defaultProps: {
        size: string;
        colorScheme: string;
    };
};
export default Checkbox;
