export declare const baseButtonStyle: {
  alignItems: string;
  borderRadius: string;
  display: string;
  cursor: string;
  color: string;
  fontWeight: string;
  height: string;
  justifyContent: string;
  lineHeight: string;
  minWidth: string;
  textDecoration: string;
  transitionDuration: string;
  wordWrap: string;
  svg: {
    fill: string;
  };
  _hover: {
    bg: string;
  };
  _visited: {
    color: string;
  };
  _disabled: {
    bg: string;
    color: string;
    opacity: string;
    pointerEvents: string;
  };
  _dark: {
    _disabled: {
      bg: string;
      color: string;
    };
  };
};
export declare const buttonBaseStyle: {
  base: {
    alignItems: string;
    borderRadius: string;
    display: string;
    cursor: string;
    color: string;
    fontWeight: string;
    height: string;
    justifyContent: string;
    lineHeight: string;
    minWidth: string;
    textDecoration: string;
    transitionDuration: string;
    wordWrap: string;
    svg: {
      fill: string;
    };
    _hover: {
      bg: string;
    };
    _visited: {
      color: string;
    };
    _disabled: {
      bg: string;
      color: string;
      opacity: string;
      pointerEvents: string;
    };
    _dark: {
      _disabled: {
        bg: string;
        color: string;
      };
    };
  };
  /** The element will handle descriptive text added to aid
   * screen readers. */
  screenreaderOnly: {
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
};
export declare const primary: ({ buttonSize }: any) => {
  base: any;
  screenreaderOnly: {};
};
export declare const secondary: ({ buttonSize }: any) => {
  base: any;
};
export declare const pill: ({ buttonSize }: any) => {
  base: any;
};
export declare const callout: ({ buttonSize }: any) => {
  base: any;
};
export declare const noBrand: ({ buttonSize }: any) => {
  base: any;
};
declare const Button: {
  baseStyle?: {
    base: {
      alignItems: string;
      borderRadius: string;
      display: string;
      cursor: string;
      color: string;
      fontWeight: string;
      height: string;
      justifyContent: string;
      lineHeight: string;
      minWidth: string;
      textDecoration: string;
      transitionDuration: string;
      wordWrap: string;
      svg: {
        fill: string;
      };
      _hover: {
        bg: string;
      };
      _visited: {
        color: string;
      };
      _disabled: {
        bg: string;
        color: string;
        opacity: string;
        pointerEvents: string;
      };
      _dark: {
        _disabled: {
          bg: string;
          color: string;
        };
      };
    };
    /** The element will handle descriptive text added to aid
     * screen readers. */
    screenreaderOnly: {
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
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("base" | "screenreaderOnly")[];
    }>;
  };
  variants?: {
    primary: ({ buttonSize }: any) => {
      base: any;
      screenreaderOnly: {};
    };
    secondary: ({ buttonSize }: any) => {
      base: any;
    };
    text: ({ buttonSize }: any) => {
      base: any;
    };
    link: ({ buttonSize }: any) => {
      base: any;
    };
    pill: ({ buttonSize }: any) => {
      base: any;
    };
    iconOnly: ({ buttonSize }: any) => {
      base: any;
    };
    callout: ({ buttonSize }: any) => {
      base: any;
    };
    noBrand: ({ buttonSize }: any) => {
      base: any;
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?:
      | "link"
      | "text"
      | "primary"
      | "secondary"
      | "callout"
      | "pill"
      | "iconOnly"
      | "noBrand";
    colorScheme?: string;
  };
  parts: ("base" | "screenreaderOnly")[];
};
export default Button;
