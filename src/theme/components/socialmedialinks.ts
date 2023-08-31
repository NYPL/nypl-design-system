// maybe set the border to always be on, but invisible if prop is set to "none"?

import { StyleFunctionProps } from "@chakra-ui/theme-tools";

function getRadius(size) {
  let radiusSize = "119.125rem"; // 18px @todo Seems to be non standard. Should it be 16px / 1rem / 's'?
  switch (size) {
    case "medium":
      radiusSize = "m"; // 24px
      break;
    case "large":
      radiusSize = "l"; // 32px
      break;
  }
  return {
    radiusSize,
  };
}

function getColor(color) {
  let ltColor = "ui.typography.heading",
    dkColor = "dark.ui.typography.heading",
    ltBgColor,
    dkBgColor;

  switch (color) {
    case "link":
      ltColor = "ui.link.primary";
      dkColor = "dark.ui.link.primary";
      break;
    case "textInverse":
      ltColor = "ui.typography.inverse.heading";
      dkColor = "dark.ui.typography.inverse.heading";
      ltBgColor = "ui.typography.heading";
      dkBgColor = "dark.ui.typography.heading";
  }

  return {
    ltColor,
    dkColor,
    ltBgColor,
    dkBgColor,
  };
}

const SocialMediaLinks = {
  // The parts of the component
  parts: ["li", "a", "svg", "span"],
  // The base styles for each part
  baseStyle: {
    // ul styles should not specifically identified as ul:
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "s",
    li: {
      marginInlineEnd: "0",
      marginTop: "0",
      _notFirst: {
        marginTop: "0",
      },
    },
    a: {
      display: "flex",
      alignItems: "center",
      gap: "xs",
      alignSelf: "stretch",
      fontStyle: "normal",
      fontSize: "desktop.body.body2",
      textDecoration: "none",
      color: "ui.typography.heading",
      _dark: {
        color: "dark.ui.typography.heading",
      },
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
    // Each variant is a function that returns stuff
    straight(props: StyleFunctionProps) {
      const { color, layout } = props;
      let theseColors = getColor(color);
      return {
        flexDirection: layout,
        bg: theseColors.ltBgColor,
        _dark: {
          bg: theseColors.dkBgColor,
        },
        li: {
          padding: "xs",
          borderRadius: "button.default",
          borderWidth: "0.0625rem", // 1px. @todo Should it be 2px / xxxs?
          borderStyle: "solid",
          borderColor: theseColors.ltColor,
          _dark: {
            borderColor: theseColors.dkColor,
          },
        },
        a: {
          color: theseColors.ltColor,
          _dark: {
            borderColor: theseColors.dkColor,
          },
        },
        svg: {
          fill: theseColors.ltColor,
          _dark: {
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
        bg: theseColors.ltBgColor,
        _dark: {
          bg: theseColors.dkBgColor,
        },
        li: {
          padding: "xs",
          borderRadius: getRadius(size).radiusSize,
          borderColor: theseColors.ltColor,
          borderWidth: "0.0625rem",
          borderStyle: "solid",
          _dark: {
            borderColor: theseColors.dkColor,
          },
        },
        a: {
          color: theseColors.ltColor,
          _dark: {
            color: theseColors.dkColor,
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
        bg: theseColors.ltBgColor,
        _dark: {
          bg: theseColors.dkBgColor,
        },
        a: {
          color: theseColors.ltColor,
          _dark: {
            color: theseColors.dkColor,
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
