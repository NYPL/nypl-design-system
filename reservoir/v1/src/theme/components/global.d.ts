/** Export "mixin" styles. */
export { screenreaderOnly, wrapperStyles } from "./globalMixins";
/** Reusable component styles. */
declare const activeFocus: (darkMode?: boolean) => {
    boxShadow: string;
    outline: string;
    outlineOffset: string;
    outlineColor: string;
    zIndex: string;
    _dark: {
        outlineColor: string;
    };
};
declare const checkboxRadioLabelStyles: {
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
declare const checkboxRadioControlSize: {
    h: string;
    w: string;
};
declare const checkboxRadioHelperErrorTextStyle: {
    marginStart: string;
    _disabled: {
        color: string;
        fontStyle: string;
    };
};
declare const checkboxRadioHoverStyles: {
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
};
declare const checkboxRadioGroupStyles: (isFullWidth?: boolean) => {
    helperErrorText: {
        marginTop: string;
    };
    label: {
        width: string;
    };
};
declare const defaultElementSizes: {
    mobileFieldHeight: string;
};
declare const labelLegendText: {
    display: string;
    fontSize: string;
    fontWeight: string;
    marginBottom: string;
    width: string;
    span: {
        fontWeight: string;
    };
    _dark: {
        color: string;
    };
};
declare const selectTextInputDisabledStyles: {
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
declare const selectTextInputFocusStyles: {
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
declare const textMargin: {
    margin: string;
    marginBottom: string;
};
export { activeFocus, checkboxRadioControlSize, checkboxRadioGroupStyles, checkboxRadioHelperErrorTextStyle, checkboxRadioHoverStyles, checkboxRadioLabelStyles, defaultElementSizes, labelLegendText, selectTextInputDisabledStyles, selectTextInputFocusStyles, textMargin, };
