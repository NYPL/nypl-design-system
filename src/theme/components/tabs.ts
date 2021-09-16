const CustomTabs = {
  baseStyle: {
    tablist: {
      borderBottom: "10px !important",
      borderColor: "ui.black",
      maxWidth: {
        base: "100%",
        lg: "100%",
      },
      paddingBottom: { base: "4px", md: "0" },
      paddingLeft: { base: "4px", md: "0" },
      paddingRight: { base: "4px", md: "0" },
      paddingTop: { base: "4px", md: "0" },
      overflowX: { base: "scroll", md: "visible" },
      // "overflow-y": "visible",
      // "-ms-overflow-style": "none",
      // "scrollbar-width": "none",
      // _webkitScrollbar: {
      //   display: "none",
      // },
    },
    tab: {
      color: "black !important",
      paddingInlineStart: 4,
      paddingLeft: 4,
      border: "none",
      borderBottom: "1px solid",
      borderColor: "ui.black",
      fontSize: "20px !important",
      marginRight: {
        base: "0",
        md: "1px",
      },
      paddingRight: {
        base: 4,
        md: 12,
      },
      whiteSpace: "nowrap",
      _hover: {
        bg: "ui.gray.warm-xlight",
        borderTopRadius: 2,
        borderBottom: "1px solid",
        borderBottomColor: "ui.black",
      },
      _selected: {
        fontWeight: "bold",
        bg: "ui.gray.warm-light",
        border: "none",
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
      border: "none",
      display: {
        base: "inline-block",
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
    },
  },
  defaultProps: {},
};

export default CustomTabs;
