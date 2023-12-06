import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle, StyleFunctionProps } from "@chakra-ui/system";

import { textMargin } from "./global";

interface ListBaseStyle extends Partial<StyleFunctionProps> {
  inline?: boolean;
  noStyling?: boolean;
}

export const baseListStyles = defineStyle((props?: ListBaseStyle) => ({
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
}));

// For specific component variants
export const unorderedStyles = defineStyle((props?: ListBaseStyle) => ({
  ...textMargin,
  listStyle: "none",
  li: {
    _before: {
      color: "ui.gray.medium",
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
}));
export const baseSectionDescriptionStyles = {
  borderBottom: "1px solid",
  borderColor: "ui.border.default",
  paddingStart: "0",
  h2: {
    borderTop: "3px solid",
    borderColor: "ui.border.default",
    margin: "0",
    padding: "var(--nypl-space-xs) 0 0",
    _dark: {
      borderColor: "dark.ui.border.default",
    },
  },
  _dark: {
    borderColor: "dark.ui.border.default",
  },
};
export const descriptionStyles = defineStyle({
  ...baseSectionDescriptionStyles,
  dl: {
    display: "grid",
    gridTemplateColumns: { base: "100%", md: "max(250px) 1fr" },
    gridTemplateRows: "1fr",
    margin: "var(--nypl-space-xs) 0 0",
  },
  dt: {
    borderTop: "1px solid",
    borderColor: "ui.border.default",
    color: "ui.typography.heading",
    fontWeight: "label.default",
    paddingBottom: { base: "0", md: "s" },
    paddingTop: "s",
    paddingEnd: { md: "table.column" },
    _dark: {
      borderColor: "dark.ui.border.default",
      color: "dark.ui.typography.heading",
    },
  },
  dd: {
    margin: "0",
    paddingBottom: "s",
    borderTop: { base: "none", md: "1px solid" },
    borderColor: { md: "ui.border.default" },
    paddingTop: { md: "s" },
    _dark: {
      borderColor: { md: "dark.ui.border.default" },
    },
  },
});

const List = defineStyleConfig({
  baseStyle: baseListStyles,
  variants: {
    ul: unorderedStyles,
    ol: textMargin,
    dl: descriptionStyles,
  },
});

export default List;
