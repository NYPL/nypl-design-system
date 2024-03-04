// @todo maybe set the border to always be on, but invisible if prop is set to "none"?

import { StyleFunctionProps } from "@chakra-ui/theme-tools";

function getPadding(size) {
  let paddingSize = "xs"; // 8px / .5rem
  switch (size) {
    case "medium":
      paddingSize = "0.75rem"; // 12px @todo There is no JS token for this value. I assume it is ok to mix tokens & absolute values.
      break;
    case "large":
      paddingSize = "s"; // 16px / 1rem
      break;
  }
  return {
    paddingSize,
  };
}

function getColor(color) {
  let ltColor = "ui.typography.heading",
    dkColor = "dark.ui.typography.heading";

  switch (color) {
    case "link":
      ltColor = "ui.link.primary";
      dkColor = "dark.ui.link.primary";
      break;
    case "textInverse":
      ltColor = "ui.typography.inverse.heading";
      dkColor = "dark.ui.typography.inverse.heading";
      break;
  }

  return {
    ltColor,
    dkColor,
  };
}

const SocialMediaLinks = {
  // The base styles for each part
  baseStyle: (props: StyleFunctionProps) => {
    const { labelsOn, layout } = props;
    return {
      // ul styles should not specifically be identified as ul:
      display: "flex",
      alignItems: "flex-start",
      justifyContent: { base: "center", md: "unset" },
      flexDirection: { base: labelsOn ? "column" : "row", md: layout },
      flexWrap: "wrap",
      gap: "s", // 1rem / 16px
      marginBottom: "unset",
      li: {
        marginInlineEnd: "0",
        marginTop: "0",
        width: { base: labelsOn ? "100%" : "unset", md: "unset" },
        _notFirst: {
          marginTop: "0",
        },
      },
      a: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        minHeight: { base: "44px", md: "unset" },
        minWidth: { base: "44px", md: "unset" },
        fontStyle: "normal",
        fontSize: "desktop.body.body2",
        textDecoration: "none",
        color: "ui.typography.heading",
        _hover: {
          color: "ui.typography.heading",
        },
        _visited: {
          color: "ui.typography.heading",
        },
        _dark: {
          color: "dark.ui.typography.heading",
          _hover: {
            color: "dark.ui.typography.heading",
          },
          _visited: {
            color: "dark.ui.typography.heading",
          },
        },
      },
      div: {
        display: "flex",
        alignItems: "center",
        gap: "xs", // .5rem / 8px
        alignSelf: "stretch",
        justifyContent: "center",
        width: "fit-content",
        height: "fit-content",
      },
      svg: {
        fill: "ui.typography.heading",
        _dark: {
          fill: "dark.ui.typography.heading",
        },
      },
    };
  },
  // The variants are based on border values
  variants: {
    // Each variant is a function that returns an object with styles for that variant.
    straight(props: StyleFunctionProps) {
      const { color } = props;
      let theseColors = getColor(color);
      return {
        gap: "xs", // Borders require the gap to reduce from 1rem to .5rem / 8px.
        a: {
          color: theseColors.ltColor,
          _hover: {
            color: theseColors.ltColor,
          },
          _visited: {
            color: theseColors.ltColor,
          },
          _dark: {
            borderColor: theseColors.dkColor,
            color: theseColors.dkColor,
            _hover: {
              color: theseColors.dkColor,
            },
            _visited: {
              color: theseColors.dkColor,
            },
          },
        },
        div: {
          padding: "xs",
          borderRadius: "button.default",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: theseColors.ltColor,
          width: "100%",
          _dark: {
            borderColor: theseColors.dkColor,
          },
        },
        svg: {
          fill: theseColors.ltColor,
          _dark: {
            fill: theseColors.dkColor,
            borderColor: theseColors.dkColor,
          },
        },
      };
    },
    circular(props: StyleFunctionProps) {
      const { color, size } = props;
      let theseColors = getColor(color);
      return {
        gap: "xs",
        a: {
          color: theseColors.ltColor,
          _hover: {
            color: theseColors.ltColor,
          },
          _visited: {
            color: theseColors.ltColor,
          },
          _dark: {
            color: theseColors.dkColor,
            _hover: {
              color: theseColors.dkColor,
            },
            _visited: {
              color: theseColors.dkColor,
            },
          },
        },
        div: {
          padding: getPadding(size).paddingSize,
          borderRadius: "100%",
          borderColor: theseColors.ltColor,
          borderWidth: "0.0625rem",
          borderStyle: "solid",
          _dark: {
            borderColor: theseColors.dkColor,
          },
        },
        svg: {
          fill: theseColors.ltColor,
          _dark: {
            fill: theseColors.dkColor,
          },
        },
      };
    },
    // Variant 3
    none(props: StyleFunctionProps) {
      const { color } = props;
      let theseColors = getColor(color);
      return {
        a: {
          color: theseColors.ltColor,
          _hover: {
            color: theseColors.ltColor,
          },
          _visited: {
            color: theseColors.ltColor,
          },
          _dark: {
            color: theseColors.dkColor,
            _hover: {
              color: theseColors.dkColor,
            },
            _visited: {
              color: theseColors.dkColor,
            },
          },
        },
        svg: {
          fill: theseColors.ltColor,
          _dark: {
            fill: theseColors.dkColor,
          },
        },
      };
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: "none",
  },
};

export default SocialMediaLinks;
