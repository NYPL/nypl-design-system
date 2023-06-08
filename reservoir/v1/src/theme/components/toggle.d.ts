import { ToggleSizes } from "../../components/Toggle/Toggle";
interface ToggleBaseStyle {
    isDisabled: boolean;
    size: ToggleSizes;
}
declare const _default: {
    Toggle: {
        parts: string[];
        baseStyle: ({ isDisabled, size }: ToggleBaseStyle) => {
            label: {
                alignItems: string;
                display: string;
                width: string;
            };
            helperErrorText: {
                marginStart: string;
                fontStyle: string;
            };
        };
        defaultProps: {
            size: string;
        };
    };
    Switch: {
        baseStyle: ({ size }: {
            size: string;
        }) => {
            alignItems: string;
            track: {
                backgroundColor: string;
                border: string;
                borderColor: string;
                p: string;
                _checked: {
                    bg: string;
                    borderColor: string;
                    opacity: number;
                };
                _invalid: {
                    bg: string;
                    borderColor: string;
                    "> span": {
                        bg: string;
                    };
                };
                _disabled: {
                    bg: string;
                    borderColor: string;
                    _checked: {
                        opacity: number;
                    };
                };
                _focus: {
                    outline: string;
                    outlineColor: string;
                    outlineOffset: string;
                    zIndex: string;
                };
                _dark: {
                    bgColor: string;
                    borderColor: string;
                    _checked: {
                        bg: string;
                        borderColor: string;
                    };
                    _invalid: {
                        bg: string;
                        borderColor: string;
                        "> span": {
                            bg: string;
                        };
                    };
                    _disabled: {
                        bg: string;
                        borderColor: string;
                        opacity: number;
                        ".chakra-switch__thumb": {
                            bgColor: string;
                        };
                    };
                    _focus: {
                        outlineColor: string;
                    };
                };
            };
            label: {
                fontSize: string;
                marginStart: string;
                marginTop: string;
                _disabled: {
                    color: string;
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
            thumb: {
                _dark: {
                    bgColor: string;
                };
            };
        };
        sizes: {
            sm: {
                container: {
                    [x: string]: string;
                };
            };
            lg: {
                container: {
                    [x: string]: string;
                };
            };
        };
        defaultProps: {
            colorScheme: string;
        };
    };
};
export default _default;
