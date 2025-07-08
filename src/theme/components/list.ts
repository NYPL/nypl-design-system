import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["base", "heading"]);

interface ListBaseStyle extends Partial<StyleFunctionProps> {
  inline?: boolean;
  noStyling?: boolean;
}

export const baseListStyles = (props: ListBaseStyle = {}) => ({
  // Browser automatically applies margin, so by default we unset it.
  margin: props.noStyling ? "0" : "unset",
  listStyle: props.noStyling ? "none" : null,
  marginInlineStart: "unset",
  paddingStart: props.noStyling ? "0" : "l",
  padding: props.noStyling ? "0" : null,
  display: props.inline ? "flex" : null,
  li: {
    marginEnd: props.inline ? "xs" : null,
    listStyleType: props.inline ? "none" : null,
    _notFirst: {
      marginTop: props.inline ? null : "xxs",
    },
  },
});

const baseHeadingStyles = (showRowDividers = true) => ({
  borderTop: showRowDividers ? "3px solid" : "none",
  borderColor: "ui.border.default",
  margin: "0",
  padding: "var(--nypl-space-xs) 0 0",
  _dark: {
    borderColor: "dark.ui.border.default",
  },
});

export const baseSectionDescriptionStyles = (showRowDividers = true) => ({
  borderBottom: showRowDividers ? "1px solid" : "none",
  borderColor: "ui.border.default",
  paddingStart: "0",
  h2: baseHeadingStyles(showRowDividers),
  _dark: {
    borderColor: "dark.ui.border.default",
  },
});
// For specific component variants
export const unorderedStyles = (props: ListBaseStyle = {}) => ({
  listStyle: "none",
  li: {
    _before: {
      color: "ui.border.hover",
      // \2022 is the CSS Code/unicode for a bullet.
      content: props.noStyling ? "unset" : `"\\2022"`,
      // Needed to add space between the bullet and the text.
      display: "inline-block",
      fontWeight: "bold",
      fontSize: "2",
      lineHeight: "0.9",
      marginStart: "-1rem",
      width: "1rem",
    },
    _dark: {
      _before: {
        color: "ui.gray.semi-dark",
      },
    },
  },
});

export const descriptionStyles = (showRowDividers = true) => ({
  ...baseSectionDescriptionStyles(showRowDividers),
  dl: {
    display: "grid",
    gridTemplateColumns: { base: "100%", md: "max(250px) 1fr" },
    gridTemplateRows: "1fr",
    margin: "var(--nypl-space-xs) 0 0",
  },
  dt: {
    borderTop: showRowDividers ? "1px solid" : "none",
    borderColor: "ui.border.default",
    color: "ui.typography.heading",
    fontWeight: "label.default",
    paddingBottom: { base: "0", md: "s" },
    paddingTop: "s",
    _dark: {
      borderColor: "dark.ui.border.default",
      color: "dark.ui.typography.heading",
    },
  },
  dd: {
    margin: "0",
    paddingBottom: "s",
    borderTop: { base: "none", md: showRowDividers ? "1px solid" : "none" },
    borderColor: { md: "ui.border.default" },
    paddingStart: { md: "table.column" },
    paddingTop: { md: "s" },
    _dark: {
      borderColor: { md: "dark.ui.border.default" },
    },
  },
});

const List = defineMultiStyleConfig({
  baseStyle: definePartsStyle(({ inline, noStyling }: ListBaseStyle) => ({
    base: baseListStyles({ inline, noStyling }),
    heading: baseHeadingStyles(),
  })),
  /** NOTE: Only the `ul` and `dl` variants require additional styles. */
  variants: {
    ul: definePartsStyle((props) => ({
      base: unorderedStyles(props),
    })),
    dl: ({ showRowDividers }) =>
      definePartsStyle({
        base: descriptionStyles(showRowDividers),
      }),
  },
});

export default List;
