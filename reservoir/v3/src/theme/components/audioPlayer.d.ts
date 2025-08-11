declare const AudioPlayer: {
  baseStyle?: {
    base: {};
    invalid: {
      backgroundColor: string;
      border: string;
      borderColor: string;
      padding: string;
      _dark: {
        bg: string;
        border: string;
        borderColor: string;
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("invalid" | "base")[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("invalid" | "base")[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: ("invalid" | "base")[];
};
export default AudioPlayer;
