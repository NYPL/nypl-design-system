import { ProgressIndicatorSizes } from "../../components/ProgressIndicator/ProgressIndicator";
interface ProgressIndicatorBaseStyle {
    darkMode: boolean;
    size: ProgressIndicatorSizes;
}
declare const ProgressIndicator: {
    parts: string[];
    baseStyle: ({ darkMode, size }: ProgressIndicatorBaseStyle) => {
        color: string;
        fontSize: string;
        _dark: {
            color: string;
        };
        circular: {
            svg: {
                height: string;
                width: string;
                display: string;
                circle: {
                    _first: {
                        stroke: string;
                        _dark: {
                            stroke: string;
                        };
                    };
                    _last: {
                        stroke: string;
                        _dark: {
                            stroke: string;
                        };
                    };
                };
            };
        };
        circularContainer: {
            alignItems: string;
            display: string;
            flexDirection: string;
            width: string;
        };
        linear: {
            "> div": {
                bg: string;
                _dark: {
                    bg: string;
                };
            };
            flex: number;
            bg: string;
            height: {
                base: string;
                md: string;
            };
            _dark: {
                bg: string;
                color: string;
            };
        };
        linearContainer: {
            display: string;
            alignItems: string;
        };
        linearPercentage: {
            padding: string;
            flex: number;
        };
    };
};
export default ProgressIndicator;
