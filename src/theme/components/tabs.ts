const CustomTabs = {
  baseStyle: {
    tablist: {
      // no custom styles
    },
    tab: {
      color: "black !important",
      paddingInlineStart: 4,
      paddingLeft: 4,
      background: "transparent",
      border: "0",
      borderBottom: "1px solid",
      borderColor: "red",
      marginRight: {
        base: "0",
        md: "1px",
      },
      paddingRight: {
        base: 4,
        md: 8,
        lg: 12,
      },
      whiteSpace: "nowrap",
      _hover: {
        bg: "ui.gray.x-light-warm",
        borderTopRadius: 2,
        borderBottom: "1px solid",
        borderBottomColor: "ui.black",
      },
      _selected: {
        fontWeight: "bold",
        bg: "ui.gray.light-warm",
        border: "0",
        borderTopRadius: 2,
        borderBottom: "3px solid",
        borderBottomColor: "ui.black",
        paddingBottom: "5px",
      },
      _focus: {
        boxShadow: 0,
      },
    },
    // Only display the previous/next arrow buttons on mobile.
    buttonArrows: {
      border: "0",
      display: {
        // base: "none", // "inline-block" - hiding until the full "arrow" functionality is built out
        // After 38em/600px, don't display the arrow button anymore.
        md: "none",
      },
      height: "44px",
      width: "44px !important",
    },
    // Just to better align the mobile arrow buttons with the tablist.
    tablistWrapper: {
      display: "flex",
      alignItems: "center",
      borderBottom: {
        base: "0",
        md: "1px solid black",
      },
      margin: {
        base: "-4px",
        md: "0",
      },
      overflowX: { base: "auto", md: "visible" },
      paddingBottom: { base: "5px", md: "0" },
      paddingLeft: { base: "4px", md: "0" },
      paddingRight: { base: "4px", md: "0" },
      paddingTop: { base: "4px", md: "0" },
    },
  },
  defaultProps: {},
};

export default CustomTabs;
