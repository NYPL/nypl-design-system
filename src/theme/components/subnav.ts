import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

// This function creates a set of function that helps us
// create multipart component styles.
const {
  defineMultiStyleConfig: subNavChildrenDefineMultiStyleConfig,
  definePartsStyle: subNavChildrenDefinePartsStyle,
} = createMultiStyleConfigHelpers(["outLine"]);

const {
  defineMultiStyleConfig: subNavDefineMultiStyleConfig,
  definePartsStyle: subNavDefinePartsStyle,
} = createMultiStyleConfigHelpers([
  "base",
  "container",
  "primaryActions",
  "selectedItem",
  "secondaryActions",
]);

interface SubNavStyleProps extends StyleFunctionProps {
  backgroundColor: string;
  highlightColor: string;
}

interface SubNavChildrenStyleProps extends StyleFunctionProps {
  isOutlined: boolean;
}

const commonStyles = () => ({
  alignItems: "center",
  display: "inline-flex",
  fontSize: "desktop.button.large",
  fontWeight: "regular",
  gap: "xs",
  height: { base: "44px", md: "unset" },
  lineHeight: "1.5",
  position: "relative",
  px: "s",
  py: "xxs",
  textDecoration: "none !important",
  transition: "background-color 0.2s, color 0.2s",
});

const ulStyles = {
  p: { base: "s", md: "xs" },
  gap: "xs",
  li: {
    marginEnd: "unset",
  },
  margin: "0",
};

const SubNav = subNavDefineMultiStyleConfig({
  baseStyle: subNavDefinePartsStyle(
    ({ backgroundColor, highlightColor }: SubNavStyleProps) => {
      const defaultLabelColor = "var(--nypl-colors-ui-typography-body)";
      const defaultLabelColorDark =
        "var(--nypl-colors-dark-ui-typography-body)";
      const defaultColor = (colorMode: string = "light") => {
        const finalForColorMode =
          colorMode === "dark" ? defaultLabelColorDark : defaultLabelColor;
        return `${finalForColorMode} !important`;
      };
      const highlightOrDefaultColor = (colorMode: string = "light") => {
        const finalForColorMode =
          colorMode === "dark" ? defaultLabelColorDark : defaultLabelColor;
        return highlightColor
          ? `${highlightColor} !important`
          : `${finalForColorMode} !important`;
      };

      const defaultLinkColor = "var(--nypl-colors-ui-link-primary)";
      const defaultLinkColorDark = "var(--nypl-colors-dark-ui-link-primary)";
      const highlightOrLinkColor = (colorMode: string = "light") => {
        const finalForColorMode =
          colorMode === "dark" ? defaultLinkColorDark : defaultLinkColor;
        return highlightColor
          ? `${highlightColor} !important`
          : `${finalForColorMode} !important`;
      };

      const highlightOrBorderColor = (colorMode: string = "light") => {
        const finalPrefix = colorMode === "dark" ? `${colorMode}.` : "";
        return highlightColor || `${finalPrefix}ui.border.default`;
      };

      const defaultBgColor = "var(--nypl-colors-ui-link-primary-05)";
      const defaultBgColorDark = "var(--nypl-colors-dark-ui-link-primary-10)";
      const finalBackgroundColor = (colorMode: string = "light") => {
        const finalForColorMode =
          colorMode === "dark" ? defaultBgColorDark : defaultBgColor;
        return backgroundColor || `${finalForColorMode} !important`;
      };

      const primaryActionsStyles = {
        ...commonStyles(),
        svg: {
          fill: defaultColor("light"),
          margin: { base: "0", md: null },
          _dark: {
            fill: defaultColor("dark"),
          },
        },
        _hover: {
          backgroundColor: finalBackgroundColor("light"),
          color: defaultColor("light"),
          _dark: {
            backgroundColor: finalBackgroundColor("dark"),
            color: defaultColor("dark"),
          },
          svg: {
            fill: highlightOrDefaultColor("light"),
            _dark: {
              fill: highlightOrDefaultColor("dark"),
            },
          },
        },
      };
      const secondaryActionsStyles = {
        ...commonStyles(),
        color: highlightOrLinkColor("light"),
        _dark: {
          color: highlightOrLinkColor("dark"),
        },
        svg: {
          fill: highlightOrLinkColor("light"),
          margin: { base: "0", md: null },
          _dark: {
            fill: highlightOrLinkColor("dark"),
          },
        },
        _hover: {
          background: finalBackgroundColor("light"),
          color: highlightOrLinkColor("light"),
          _dark: {
            backgroundColor: finalBackgroundColor("dark"),
            color: highlightOrLinkColor("dark"),
          },
          svg: {
            fill: highlightOrLinkColor("light"),
            _dark: {
              fill: highlightOrLinkColor("dark"),
            },
          },
        },
      };
      return {
        base: {
          ".ds-subNav-selectedItem": {
            color: highlightOrLinkColor("light"),
            fontWeight: "bold",
            backgroundColor: finalBackgroundColor("light"),
            "&:hover": {
              color: highlightOrLinkColor("light"),
            },
            _dark: {
              color: highlightOrLinkColor("dark"),
              "&:hover": {
                color: highlightOrLinkColor("dark"),
              },
            },
          },
          borderBottom: "1px solid",
          borderColor: highlightOrBorderColor("light"),
          display: "flex",
          justifyContent: "center",
          _dark: {
            borderColor: highlightOrBorderColor("dark"),
          },
        },
        container: {
          maxWidth: "1280px",
          px: { base: "0", md: "s", xl: "xs" },
          width: "100%",
        },
        scrollableList: {
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          position: "relative",
          scrollbarWidth: "none",
        },
        primaryActions: {
          ...ulStyles,
          width: "100%",
          button: {
            color: defaultColor("light"),
            ...primaryActionsStyles,
            _dark: {
              color: defaultColor("dark"),
            },
          },
          a: {
            color: defaultColor("light"),
            ...primaryActionsStyles,
            _dark: {
              color: defaultColor("dark"),
            },
          },
        },
        secondaryActions: {
          ...ulStyles,
          width: "fit-content",
          whiteSpace: "nowrap",
          button: {
            color: highlightOrLinkColor("light"),
            ...secondaryActionsStyles,
            _dark: {
              color: highlightOrLinkColor("dark"),
            },
          },
          a: {
            color: highlightOrLinkColor("light"),
            ...secondaryActionsStyles,
            _dark: {
              color: highlightOrLinkColor("dark"),
            },
          },
        },
        fadeEffect: {
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "50px",
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
          pointerEvents: "none",
          zIndex: 1,
          _dark: {
            background:
              "linear-gradient(to left, rgba(25, 25, 25, 1) 0%, rgba(25, 25, 25, 0) 100%)",
          },
        },
        primaryList: {
          position: "relative",
          display: "flex",
          width: "100%",
          overflowX: "auto",
        },
      };
    }
  ),
});

const SubNavChildren = subNavChildrenDefineMultiStyleConfig({
  baseStyle: subNavChildrenDefinePartsStyle(
    ({ isOutlined }: SubNavChildrenStyleProps) => {
      return {
        outLine: {
          border: isOutlined !== undefined ? "1px solid" : "none",
          borderRadius: "6px",
        },
      };
    }
  ),
});

export { SubNav, SubNavChildren };
