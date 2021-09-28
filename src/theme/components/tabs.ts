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
    borderTopRadius: "xs",
    borderBottom: "1px solid",
    borderBottomColor: "ui.black",
  },
  _selected: {
    fontWeight: "bold",
    bg: "ui.gray.light-warm",
    border: "0",
    borderTopRadius: "xs",
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
  display: {
    // After 38em/600px, don't display the arrow button anymore.
    md: "none",
  },
  height: "44px",
  width: "44px !important",
  // Code from https://codesandbox.io/s/fxjeo for the mobile carousel
  pos: "absolute",
  top: "50%",
  marginTop: "-22px",
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
  margin: "0",
  overflowX: { base: "auto", md: "visible" },
  paddingBottom: { base: "5px", md: "0" },
  paddingLeft: { base: "4px", md: "0" },
  paddingRight: { base: "4px", md: "0" },
  paddingTop: { base: "4px", md: "0" },
  position: "relative",
};
const tabpanels = {
  paddingTop: "1px",
};
const carouselWrapper = {
  paddingLeft: {
    base: "40px",
    md: "0",
  },
};

const CustomTabs = {
  // tablist, tab, and tabpanels are existing keys which are extended but
  // buttonArrows, tablistWrapper, and carouselWrapper are custom elements
  // in the `Tabs` component.
  parts: ["buttonArrows", "tablistWrapper", "carouselWrapper"],
  baseStyle: {
    tablist,
    tab,
    // Only display the previous/next arrow buttons on mobile.
    buttonArrows,
    // To better align the mobile arrow buttons with the tablist.
    tablistWrapper,
    tabpanels,
    carouselWrapper,
  },
};

export default CustomTabs;
