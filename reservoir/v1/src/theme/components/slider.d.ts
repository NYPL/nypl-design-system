interface CustomSliderBaseStyle {
    isDarkMode: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
    showBoxes: boolean;
    showValues: boolean;
}
declare const CustomSlider: {
    parts: string[];
    baseStyle: ({ isDarkMode, isDisabled, isInvalid, showBoxes, showValues, }: CustomSliderBaseStyle) => {
        container: {
            display: string;
            alignItems: string;
        };
        leftValue: {
            color: string;
            _dark: {
                color: string;
            };
            marginTop: string;
            marginBottom: string;
            marginEnd: string;
            marginStart: string;
        };
        rightValue: {
            marginStart: string;
            marginEnd: string;
            color: string;
            _dark: {
                color: string;
            };
            marginTop: string;
            marginBottom: string;
        };
        textInput: {
            minWidth: string;
        };
        sliderContainer: {
            marginStart: string;
            marginEnd: string;
        };
        filledTrack: {
            bgColor: string;
        };
        track: {
            bgColor: string;
            _disabled: {
                bgColor: string;
            };
            _dark: {
                bgColor: string;
                _disabled: {
                    bgColor: string;
                };
            };
        };
        thumb: {
            border: string;
            borderColor: string;
            boxShadow: string;
            _active: {
                transform: string;
            };
            _disabled: {
                bgColor: string;
                borderColor: string;
            };
            _dark: {
                bgColor: string;
                _disabled: {
                    bgColor: string;
                    borderColor: string;
                };
            };
        };
    };
};
export default CustomSlider;
