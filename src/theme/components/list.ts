import { textMargin } from "./global";

const List = {
  baseStyle: ({ inline, noStyling }) => ({
    // Browser automatically applies margin, so by default we unset it.
    margin: noStyling ? "0" : "unset",
    listStyle: noStyling ? "none" : null,
    marginInlineStart: "unset",
    paddingLeft: noStyling ? "0" : "l",
    padding: noStyling ? "0" : null,
    display: inline ? "flex" : null,
    li: {
      marginRight: inline ? "xs" : null,
      listStyleType: inline ? "none" : null,
      _notFirst: {
        marginTop: inline ? null : "xxs",
      },
    },
  }),
  variants: {
    ul: ({ noStyling }) => ({
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
          marginLeft: "-1rem",
          width: "1rem",
        },
      },
    }),
    ol: textMargin,
    dl: {
      borderBottom: "1px solid",
      borderColor: "ui.gray.light-cool",
      paddingLeft: "0",
      h2: {
        borderTop: "3px solid",
        borderColor: "section.research.primary",
        margin: "0",
        padding: "var(--nypl-space-xs) 0 0",
      },
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
        paddingRight: { md: "table.column" },
      },
      dd: {
        margin: "0",
        paddingBottom: "s",
        borderTop: { base: "none", md: "1px solid" },
        borderColor: { md: "ui.gray.light-cool" },
        paddingTop: { md: "s" },
      },
    },
  },
};

export default List;
