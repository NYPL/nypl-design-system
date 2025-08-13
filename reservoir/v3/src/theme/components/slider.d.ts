import { StyleFunctionProps } from "@chakra-ui/system";
interface CustomSliderBaseStyle extends StyleFunctionProps {
    isDarkMode: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
    showBoxes: boolean;
    showValues: boolean;
}
declare const CustomSlider: {
    baseStyle?: ({ isDarkMode, isDisabled, isInvalid, showBoxes, showValues, }: CustomSliderBaseStyle) => {
        container: {
            display: string;
            alignItems: string;
        };
        label: {
            marginBottom: string;
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
        filledTrack: {
            bgColor: string;
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
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("track" | "container" | "textInput" | "thumb" | "filledTrack" | "leftValue" | "rightValue" | "sliderContainer")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("track" | "container" | "textInput" | "thumb" | "filledTrack" | "leftValue" | "rightValue" | "sliderContainer")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("track" | "container" | "textInput" | "thumb" | "filledTrack" | "leftValue" | "rightValue" | "sliderContainer")[];
};
export default CustomSlider;
