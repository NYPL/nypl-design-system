declare const Radio: {
  baseStyle?: {
    control: {
      verticalAlign: string;
      transitionProperty: string;
      transitionDuration: string;
      border: string;
      borderRadius: string;
      borderColor: string;
      backgroundColor: string;
      color: string;
      outline: string;
      _checked: {
        bg: string;
        borderColor: string;
        color: string;
        _disabled: {
          borderColor: string;
          bg: string;
          _before: {
            bg: string;
          };
        };
        _invalid: {
          _hover: {
            borderColor: string;
          };
          _before: {
            borderColor: string;
            bg: string;
          };
        };
        _hover: {
          bg: string;
        };
        _before: {
          content: string;
          display: string;
          w: string;
          h: string;
          borderRadius: string;
          bg: string;
        };
      };
      _disabled: {
        borderColor: string;
        bg: string;
      };
      _focus: {
        boxShadow: string;
        outline: string;
        outlineOffset: string;
        outlineColor: string;
        zIndex: string;
        _dark: {
          outlineColor: string;
        };
      };
      _invalid: {
        borderColor: string;
      };
      _dark: {
        borderColor: string;
        backgroundColor: string;
        _checked: {
          borderColor: string;
          _disabled: {
            borderColor: string;
            _before: {
              bg: string;
            };
          };
          _invalid: {
            borderColor: string;
            _before: {
              borderColor: string;
              bg: string;
            };
          };
        };
        _disabled: {
          borderColor: string;
          _before: {
            bg: string;
          };
        };
        _focus: {
          boxShadow: string;
        };
        _invalid: {
          borderColor: string;
        };
        _before: {
          bg: string;
        };
      };
    };
    label: {
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
    container: {};
    helperErrorText: {
      marginStart: string;
      _disabled: {
        color: string;
        fontStyle: string;
      };
    };
    hiddenLabel: {
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
    md: {
      control: {
        h: string;
        w: string;
      };
      label: {
        fontSize: string;
      };
    };
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: (
        | "label"
        | "container"
        | "helperErrorText"
        | "control"
        | "hiddenLabel"
      )[];
    }>;
  };
  defaultProps?: {
    size?: "md";
    variant?: string | number;
    colorScheme?: string;
  };
  parts: (
    | "label"
    | "container"
    | "helperErrorText"
    | "control"
    | "hiddenLabel"
  )[];
};
export declare const RadioWrapper: {
  baseStyle?: {
    label: {
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
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
  };
  variants?: {
    [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
  };
  defaultProps?: {
    size?: string | number;
    variant?: string | number;
    colorScheme?: string;
  };
};
export default Radio;
