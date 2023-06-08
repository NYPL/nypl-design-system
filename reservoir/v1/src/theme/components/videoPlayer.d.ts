declare const VideoPlayer: {
    baseStyle: {
        inside: {
            height: string;
            overflow: string;
            paddingBottom: string;
            position: string;
        };
        iframe: {
            height: string;
            left: string;
            margin: string;
            position: string;
            top: string;
            width: string;
        };
        helperText: {
            marginBottom: string;
            marginTop: string;
        };
    };
    variants: {
        fourByThree: {
            inside: {
                paddingBottom: string;
            };
        };
        invalid: {
            backgroundColor: string;
            border: string;
            borderColor: string;
            height: string;
            padding: string;
            _dark: {
                bg: string;
                border: string;
                borderColor: string;
            };
        };
        square: {
            inside: {
                paddingBottom: string;
            };
        };
    };
};
export default VideoPlayer;
