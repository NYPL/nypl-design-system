const tablist = {
  borderColor: "ui.black",
};
const tab = {
  color: "black !important",
  paddingInlineStart: "s",
  paddingLeft: "s",
  background: "transparent",
  border: "0",
  borderBottom: "1px solid",
  borderColor: "red",
  height: { base: "44px" },
  marginRight: {
    base: "0",
    md: "1px",
  },
  paddingRight: {
    base: "s",
    md: "l",
    lg: "xl",
  },
  whiteSpace: "nowrap",
  _hover: {
    bg: "ui.gray.x-light-warm",
    borderTopRadius: "4px",
    borderBottom: "1px solid",
    borderBottomColor: "ui.black",
  },
  _selected: {
    fontWeight: "bold",
    bg: "ui.gray.light-warm",
    border: "0",
    borderTopRadius: "4px",
    borderBottom: "3px solid",
    borderBottomColor: "ui.black",
    paddingBottom: "5px",
  },
  _focus: {
    boxShadow: "0",
  },
};
// Only display the previous/next arrow buttons on mobile.
const buttonArrows = {
  border: "0",
  borderRadius: "0",
  display: {
    // After 38em/600px, don't display the arrow button anymore.
    md: "none",
  },
  height: "44px",
  width: "44px !important",
  top: "8px",
  marginLeft: "4px",
  marginRight: "4px",
  // Code from https://codesandbox.io/s/fxjeo for the mobile carousel
  pos: "absolute",
  transition: "0.6s ease",
  zIndex: "9999",
};
const tablistWrapper = {
  display: "flex",
  alignItems: "center",
  borderBottom: {
    base: "0",
    md: "1px solid black",
  },
  height: { base: "58px", md: "auto" },
  margin: "0",
  overflowX: { base: "auto", md: "visible" },
  paddingBottom: { base: "5px", md: "0" },
  paddingLeft: { base: "4px", md: "0" },
  paddingRight: { base: "4px", md: "0" },
  paddingTop: { base: "4px", md: "0" },
  position: "relative",
};
const tabpanels = {
  paddingTop: "2px",
};

const carouselParent = {
  position: { base: "absolute", md: "relative" },
  left: { base: "50px", md: "auto" },
  paddingBottom: { base: "5px", md: "0" },
  paddingLeft: { base: "4px", md: "0" },
  paddingRight: "0",
  paddingTop: { base: "4px", md: "0" },
  right: { base: "52px", md: "auto" },
  top: { base: "4px", md: "0" },
  overflowX: { base: "hidden", md: "visible" },
};

const CustomTabs = {
  // tablist, tab, and tabpanels are existing keys which are extended but
  // buttonArrows, tablistWrapper, and carouselParent are custom elements
  // in the `Tabs` component.
  parts: ["buttonArrows", "tablistWrapper", "carouselParent"],
  baseStyle: {
    tablist,
    tab,
    // Only display the previous/next arrow buttons on mobile.
    buttonArrows,
    // To better align the mobile arrow buttons with the tablist.
    tablistWrapper,
    tabpanels,
    carouselParent,
  },
};

export default CustomTabs;
