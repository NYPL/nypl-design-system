const CustomTabs = {
  baseStyle: {
    tablist: {
      borderColor: "ui.black",
      borderTopRadius: 2,
      maxWidth: {
        base: "70%",
        lg: "100%",
      },
    },
    tab: {
      color: "black !important",
      paddingInlineStart: 4,
      paddingLeft: 4,
      border: "none",
      borderColor: "ui.black",
      marginRight: "1px",
      paddingRight: {
        base: 4,
        md: 12,
      },
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
    },
    // Just to better align the mobile arrow buttons with the tablist.
    tablistWrapper: {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid black",
    },
  },
  defaultProps: {},
};

export default CustomTabs;
