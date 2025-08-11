declare const VideoPlayer: {
  baseStyle?: {
    base: {
      iframe: {
        height: string;
        left: string;
        margin: string;
        position: string;
        top: string;
        width: string;
      };
    };
    inside: {
      height: string;
      overflow: string;
      paddingBottom: string;
      position: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("base" | "inside")[];
    }>;
  };
  variants?: {
    fourByThree: {
      inside: {
        paddingBottom: string;
      };
    };
    invalid: {
      base: {
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
    };
    square: {
      inside: {
        paddingBottom: string;
      };
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?: "invalid" | "square" | "fourByThree";
    colorScheme?: string;
  };
  parts: ("base" | "inside")[];
};
export default VideoPlayer;
