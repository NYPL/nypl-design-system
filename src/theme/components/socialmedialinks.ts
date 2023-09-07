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
  baseStyle: {
    // ul styles should not specifically identified as ul:
    display: "flex",
    flexDirection: { base: "column", md: "row" }, // @todo Storybook doesn't seem to dynamically update this when you change the viewport control.
    alignItems: "flex-start",
    gap: "s",
    width: { base: "100%", width: "unset" },
    li: {
      boxSizing: "border-box",
      marginInlineEnd: "0",
      marginTop: "0",
      width: { base: "100%", md: "unset" },
      _notFirst: {
        marginTop: "0",
      },
    },
    a: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexWrap: "wrap",
      minWidth: { base: "44px", md: "unset" },
      minHeight: { base: "44px", md: "unset" },
      fontStyle: "normal",
      fontSize: "desktop.body.body2",
      textDecoration: "none",
      color: "ui.typography.heading",
      _hover: {
        color: "ui.typography.heading",
      },
      _dark: {
        color: "dark.ui.typography.heading",
        _hover: {
          color: "dark.ui.typography.heading",
        },
      },
    },
    div: {
      display: "flex",
      alignItems: "center",
      gap: "xs",
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
  },
  // The variants are bordered
  // @todo The borders add 2px to total width of each <li />, e.g. small w/ borders = 36px. But the figma has it at 34px.
  //   Are the borders supposed to be inside the <li />? Or can we live with the extra 2px?
  variants: {
    // Each variant is a function that returns an object with styles for that variant.
    straight(props: StyleFunctionProps) {
      const { color, layout } = props;
      let theseColors = getColor(color);
      return {
        flexDirection: layout,
        gap: "xs",
        a: {
          color: theseColors.ltColor,
          _hover: {
            color: theseColors.ltColor,
          },
          _dark: {
            borderColor: theseColors.dkColor,
            color: theseColors.dkColor,
            _hover: {
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
      const { color, size, layout } = props;
      let theseColors = getColor(color);
      return {
        flexDirection: layout,
        gap: "xs",
        a: {
          color: theseColors.ltColor,
          _hover: {
            color: theseColors.ltColor,
          },
          _dark: {
            color: theseColors.dkColor,
            _hover: {
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
      const { color, layout } = props;
      let theseColors = getColor(color);
      return {
        flexDirection: layout,
        a: {
          color: theseColors.ltColor,
          _hover: {
            color: theseColors.ltColor,
          },
          _dark: {
            color: theseColors.dkColor,
            _hover: {
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
