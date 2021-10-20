const List = {
  baseStyle: ({ inline, noStyling }) => ({
    // Browser automatically applies margin, so by default we unset it.
    margin: noStyling ? "0" : "unset",
    listStyle: noStyling ? "none" : null,
    marginInlineStart: "unset",
    padding: noStyling ? "0" : null,
    display: inline ? "flex" : null,
    li: {
      marginRight: inline ? "xs" : null,
      listStyleType: inline ? "none" : null,
    },
  }),
  variants: {
    ul: ({ noStyling }) => ({
      margin: "unset",
      listStyle: "none",
      li: {
        _before: {
          color: "ui.gray.medium",
          // \2022 is the CSS Code/unicode for a bullet.
          content: noStyling ? "unset" : `"\\2022"`,
          // Needed to add space between the bullet and the text.
          display: "inline-block",
          fontWeight: "bold",
          marginLeft: "-1em",
          width: "1em",
        },
      },
    }),
    dl: {
      borderBottom: "1px solid",
      borderColor: "ui.gray.light-cool",
      h2: {
        borderTop: "3px solid",
        borderColor: "section.research.primary",
        margin: "0",
        padding: "var(--space-xs) 0 0",
      },
      dl: {
        display: "grid",
        gridTemplateColumns: { base: "100%", md: "max(225px) 1fr" },
        gridTemplateRows: "1fr",
        margin: "var(--space-xs) 0 0",
      },
      dt: {
        borderTop: "1px solid",
        borderColor: "ui.gray.light-cool",
        fontSize: "0",
        fontWeight: "bold",
        paddingBottom: { base: "0", md: "s" },
        paddingTop: "s",
        paddingRight: { md: "m" },
      },
      dd: {
        fontSize: "0",
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
