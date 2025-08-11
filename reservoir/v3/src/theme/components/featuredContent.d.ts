import { StyleFunctionProps } from "@chakra-ui/system";
interface FeaturedContentBaseStyleProps extends StyleFunctionProps {
  imagePosition: string;
  imageWidth: string;
  isFullWidth: boolean;
}
declare const FeaturedContent: {
  baseStyle?: ({
    imagePosition,
    imageWidth,
    isFullWidth,
  }: FeaturedContentBaseStyleProps) => {
    base: {
      bgColor: string;
      left: string;
      marginLeft: string;
      marginRight: string;
      position: string;
      right: string;
      width: string;
      _dark: {
        bgColor: string;
      };
      img: {
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
      containerType: string;
    };
    wrapper: {
      alignItems: string;
      display: string;
      maxWidth: string;
      minHeight: string;
      marginY: string;
      marginX: string;
      padding: string;
      width: string;
    };
    text: {
      display: string;
      flex: number;
      flexDirection: string;
      justifyContent: string;
      padding: string;
    };
    imgWrapper: {
      backgroundPosition: string;
      backgroundSize: string;
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("text" | "imgWrapper" | "wrapper")[];
    }>;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("text" | "imgWrapper" | "wrapper")[];
    }>;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
  parts: ("text" | "imgWrapper" | "wrapper")[];
};
export default FeaturedContent;
