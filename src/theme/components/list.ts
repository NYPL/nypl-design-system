import { textMargin } from "./global";

interface ListBaseStyle {
  inline?: boolean;
  noStyling: boolean;
}

export const baseListStyles = (inline = false, noStyling = false) => ({
  // Browser automatically applies margin, so by default we unset it.
  margin: noStyling ? "0" : "unset",
  listStyle: noStyling ? "none" : null,
  marginInlineStart: "unset",
  paddingStart: noStyling ? "0" : "l",
  padding: noStyling ? "0" : null,
  display: inline ? "flex" : null,
  li: {
    marginEnd: inline ? "xs" : null,
    listStyleType: inline ? "none" : null,
    _notFirst: {
      marginTop: inline ? null : "xxs",
    },
  },
});
export const baseUnorderedStyles = (noStyling = false) => ({
  ...textMargin,
  listStyle: "none",
  li: {
    _before: {
      color: "ui.gray.medium",
      // \2022 is the CSS Code/unicode for a bullet.
      content: noStyling ? "unset" : `"\\2022"`,
      // Needed to add space between the bullet and the text.
      display: "inline-block",
      fontWeight: "bold",
      fontSize: "2",
      lineHeight: "0.9",
      marginStart: "-1rem",
      width: "1rem",
    },
  },
});
export const baseSectionDescriptionStyles = {
  borderBottom: "1px solid",
  borderColor: "ui.gray.light-cool",
  paddingStart: "0",
  h2: {
    borderTop: "3px solid",
    borderColor: "ui.gray.medium",
    margin: "0",
    padding: "var(--nypl-space-xs) 0 0",
  },
};
export const baseDescriptionStyles = {
  ...baseSectionDescriptionStyles,
  dl: {
    display: "grid",
    gridTemplateColumns: { base: "100%", md: "max(250px) 1fr" },
    gridTemplateRows: "1fr",
    margin: "var(--nypl-space-xs) 0 0",
  },
  dt: {
    borderTop: "1px solid",
    borderColor: "ui.gray.light-cool",
    fontWeight: "label.default",
    paddingBottom: { base: "0", md: "s" },
    paddingTop: "s",
    paddingEnd: { md: "table.column" },
  },
  dd: {
    margin: "0",
    paddingBottom: "s",
    borderTop: { base: "none", md: "1px solid" },
    borderColor: { md: "ui.gray.light-cool" },
    paddingTop: { md: "s" },
  },
};

const List = {
  baseStyle: ({ inline, noStyling }: ListBaseStyle) =>
    baseListStyles(inline, noStyling),
  variants: {
    ul: ({ noStyling }: ListBaseStyle) => baseUnorderedStyles(noStyling),
    ol: textMargin,
    dl: baseDescriptionStyles,
  },
};

export default List;
