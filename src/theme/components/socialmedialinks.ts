// maybe set the border to always be on, but invisible if prop is set to "none"?

import { StyleFunctionProps } from "@chakra-ui/theme-tools";

function getRadius(size) {
  let radiusSize = "18px";
  switch (size) {
    case "medium":
      radiusSize = "24px";
      break;
    case "large":
      radiusSize = "32px";
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
    // ul styles are not specifically identified as ul:
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "8px",
    li: {
      padding: "8px",
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
  variants: {
    // Each variant is a function that returns stuff
    straight(props: StyleFunctionProps) {
      const { color, layout } = props;
      let theseColors = getColor(color);
      return {
        flexDirection: layout,
        li: {
          borderRadius: "2px",
          borderWidth: "2px",
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
          borderRadius: getRadius(size).radiusSize,
          borderColor: theseColors.ltColor,
          borderWidth: "1px",
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

// circular: {
//   li: {
//
//     border: "1px solid var(--ui-typography-heading, #191919)",
//   }
// },
// straight: {
//   li: {
//     borderRadius: "2px",
//         border: "1px solid var(--ui-typography-heading, #191919)",}
// },
