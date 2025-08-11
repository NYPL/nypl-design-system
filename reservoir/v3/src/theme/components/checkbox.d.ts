declare const Checkbox: {
  baseStyle?: {
    helperErrorText: {
      marginStart: string;
      _disabled: {
        color: string;
        fontStyle: string;
      };
    };
    icon: {
      animation: any;
      width: string;
      height: string;
    };
    base: {
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
      alignItems: string;
      position: string;
    };
    control: {
      border: string;
      borderRadius: string;
      borderColor: string;
      bg: string;
      color: string;
      cursor: string;
      outline: string;
      transitionProperty: string;
      transitionDuration: string;
      _checked: {
        borderColor: string;
        color: string;
        _hover: {
          bg: string;
        };
        _disabled: {
          bg: string;
          borderColor: string;
          svg: {
            color: string;
          };
        };
        _indeterminate: {
          color: string;
          borderColor: string;
        };
      };
      _indeterminate: {
        color: string;
        borderColor: string;
      };
      _disabled: {
        bg: string;
        borderColor: string;
      };
      _focus: {
        boxShadow: string;
        outlineColor: string;
      };
      _invalid: {
        borderColor: string;
        color: string;
      };
      _dark: {
        borderColor: string;
        backgroundColor: string;
        color: string;
        _checked: {
          borderColor: string;
          color: string;
          _disabled: {
            backgroundColor: string;
            borderColor: string;
            svg: {
              color: string;
            };
          };
          _indeterminate: {
            color: string;
            borderColor: string;
          };
          _invalid: {
            borderColor: string;
            color: string;
          };
        };
        _indeterminate: {
          color: string;
          borderColor: string;
        };
        _disabled: {
          backgroundColor: string;
          borderColor: string;
          svg: {
            color: string;
          };
        };
        _focus: {
          boxShadow: string;
          outlineColor: string;
        };
        _invalid: {
          borderColor: string;
          color: string;
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
      cursor: string;
      verticalAlign: string;
    };
  };
  sizes?: {
    lg: {
      control: {
        borderRadius: string;
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
        | "base"
        | "label"
        | "container"
        | "icon"
        | "helperErrorText"
        | "control"
      )[];
    }>;
  };
  defaultProps?: {
    size?: "lg";
    variant?: string | number;
    colorScheme?: string;
  };
  parts: (
    | "base"
    | "label"
    | "container"
    | "icon"
    | "helperErrorText"
    | "control"
  )[];
};
export default Checkbox;
