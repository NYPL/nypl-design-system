import { StyleFunctionProps } from "@chakra-ui/system";
interface ListBaseStyle extends Partial<StyleFunctionProps> {
  inline?: boolean;
  noStyling?: boolean;
}
export declare const baseListStyles: (props?: ListBaseStyle) => {
  margin: string;
  listStyle: string;
  marginInlineStart: string;
  paddingStart: string;
  padding: string;
  display: string;
  li: {
    marginEnd: string;
    listStyleType: string;
    _notFirst: {
      marginTop: string;
    };
  };
};
export declare const baseSectionDescriptionStyles: (
  showRowDividers?: boolean
) => {
  borderBottom: string;
  borderColor: string;
  paddingStart: string;
  h2: {
    borderTop: string;
    borderColor: string;
    margin: string;
    padding: string;
    _dark: {
      borderColor: string;
    };
  };
  _dark: {
    borderColor: string;
  };
};
export declare const unorderedStyles: (props?: ListBaseStyle) => {
  listStyle: string;
  li: {
    _before: {
      color: string;
      content: string;
      display: string;
      fontWeight: string;
      fontSize: string;
      lineHeight: string;
      marginStart: string;
      width: string;
    };
    _dark: {
      _before: {
        color: string;
      };
    };
  };
  margin: string;
  marginBottom: string;
};
export declare const descriptionStyles: (showRowDividers?: boolean) => {
  dl: {
    display: string;
    gridTemplateColumns: {
      base: string;
      md: string;
    };
    gridTemplateRows: string;
    margin: string;
  };
  dt: {
    borderTop: string;
    borderColor: string;
    color: string;
    fontWeight: string;
    paddingBottom: {
      base: string;
      md: string;
    };
    paddingTop: string;
    _dark: {
      borderColor: string;
      color: string;
    };
  };
  dd: {
    margin: string;
    paddingBottom: string;
    borderTop: {
      base: string;
      md: string;
    };
    borderColor: {
      md: string;
    };
    paddingStart: {
      md: string;
    };
    paddingTop: {
      md: string;
    };
    _dark: {
      borderColor: {
        md: string;
      };
    };
  };
  borderBottom: string;
  borderColor: string;
  paddingStart: string;
  h2: {
    borderTop: string;
    borderColor: string;
    margin: string;
    padding: string;
    _dark: {
      borderColor: string;
    };
  };
  _dark: {
    borderColor: string;
  };
};
declare const List: {
  baseStyle?: ({ inline, noStyling }: ListBaseStyle) => {
    base: {
      margin: string;
      listStyle: string;
      marginInlineStart: string;
      paddingStart: string;
      padding: string;
      display: string;
      li: {
        marginEnd: string;
        listStyleType: string;
        _notFirst: {
          marginTop: string;
        };
      };
    };
    heading: {
      borderTop: string;
      borderColor: string;
      margin: string;
      padding: string;
      _dark: {
        borderColor: string;
      };
    };
  };
  sizes?: {
    [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
      keys: ("base" | "heading")[];
    }>;
  };
  variants?: {
    ul: (props: StyleFunctionProps) => {
      base: {
        listStyle: string;
        li: {
          _before: {
            color: string;
            content: string;
            display: string;
            fontWeight: string;
            fontSize: string;
            lineHeight: string;
            marginStart: string;
            width: string;
          };
          _dark: {
            _before: {
              color: string;
            };
          };
        };
        margin: string;
        marginBottom: string;
      };
    };
    ol: {
      base: {
        margin: string;
        marginBottom: string;
      };
    };
    dl: ({ showRowDividers }: StyleFunctionProps) => {
      base: {
        dl: {
          display: string;
          gridTemplateColumns: {
            base: string;
            md: string;
          };
          gridTemplateRows: string;
          margin: string;
        };
        dt: {
          borderTop: string;
          borderColor: string;
          color: string;
          fontWeight: string;
          paddingBottom: {
            base: string;
            md: string;
          };
          paddingTop: string;
          _dark: {
            borderColor: string;
            color: string;
          };
        };
        dd: {
          margin: string;
          paddingBottom: string;
          borderTop: {
            base: string;
            md: string;
          };
          borderColor: {
            md: string;
          };
          paddingStart: {
            md: string;
          };
          paddingTop: {
            md: string;
          };
          _dark: {
            borderColor: {
              md: string;
            };
          };
        };
        borderBottom: string;
        borderColor: string;
        paddingStart: string;
        h2: {
          borderTop: string;
          borderColor: string;
          margin: string;
          padding: string;
          _dark: {
            borderColor: string;
          };
        };
        _dark: {
          borderColor: string;
        };
      };
    };
  };
  defaultProps?: {
    size?: string | number;
    variant?: "dl" | "ol" | "ul";
    colorScheme?: string;
  };
  parts: ("base" | "heading")[];
};
export default List;
