import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// root, tablist, tab, tabpanel, and tabpanels are existing keys which are extended but
// buttonArrows, tablistWrapper, and carouselParent are custom elements
// in the `Tabs` component.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "root",
    "tab",
    "tabpanels",
    "tabpanel",
    "tablist",
    "buttonArrows",
    "tablistWrapper",
    "carouselParent",
  ]);

const tablist = {
  borderColor: "ui.black",
  width: "max-content",
};
const tab = {
  background: "transparent",
  border: "0",
  borderBottom: "1px solid",
  color: "ui.typography.heading",
  height: { base: "44px" },
  marginEnd: {
    base: "0",
    md: "1px",
  },
  paddingEnd: {
    base: "s",
    md: "l",
    lg: "xl",
  },
  paddingInlineStart: "s",
  paddingStart: "s",
  whiteSpace: "nowrap",
  _hover: {
    bg: "ui.gray.x-light-cool",
    borderTopRadius: "sm",
    borderBottom: "1px solid",
    borderBottomColor: "ui.black",
  },
  _selected: {
    fontWeight: "bold",
    bg: "ui.gray.light-cool",
    border: "0",
    borderTopRadius: "sm",
    borderBottom: "3px solid",
    borderBottomColor: "ui.black",
    paddingBottom: "5px",
  },
  _focus: {
    boxShadow: "0",
  },
  _dark: {
    color: "dark.ui.typography.heading",
    border: "1px solid transparent",
    borderBottom: "1px solid",
    borderBottomColor: "dark.ui.border.default",
    _hover: {
      bg: "dark.ui.bg.hover",
    },
    _selected: {
      color: "dark.ui.typography.heading",
      border: "0",
      bg: "dark.ui.bg.active",
      borderBottom: "3px solid",
    },
  },
};
// Only display the previous/next arrow buttons on mobile.
const buttonArrows = {
  bg: "transparent",
  color: "black",
  border: "0",
  borderRadius: "0",
  display: {
    // After 38em/600px, don't display the arrow button anymore.
    md: "none",
  },
  height: "44px",
  width: "44px !important",
  top: "8px",
  marginStart: "4px",
  marginEnd: "4px",
  // Code from https://codesandbox.io/s/fxjeo for the mobile carousel
  pos: "absolute",
  transition: "0.6s ease",
  zIndex: "9999",
  _hover: {
    bg: "unset",
    color: "unset",
    borderColor: "unset",
  },
  _disabled: {
    color: "ui.disabled.primary",
  },
  _dark: {
    color: "dark.ui.typography.heading",
    _disabled: {
      color: "dark.ui.disabled.primary",
    },
  },
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
  paddingStart: { base: "4px", md: "0" },
  paddingEnd: { base: "4px", md: "0" },
  paddingTop: { base: "4px", md: "0" },
  position: "relative",
  _dark: {
    borderColor: "dark.ui.border.hover",
  },
};
const tabpanels = {
  paddingTop: "2px",
};

const carouselParent = {
  position: { base: "absolute", md: "relative" },
  left: { base: "50px", md: "auto" },
  paddingBottom: { base: "5px", md: "4px" },
  paddingStart: "4px",
  paddingEnd: "4px",
  paddingTop: { base: "4px" },
  right: { base: "52px", md: "4px" },
  top: { base: "4px" },
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  overflowY: "hidden",
  overflowX: "scroll",
};

const CustomTabs = defineMultiStyleConfig({
  // tablist, tab, and tabpanels are existing keys which are extended but
  // buttonArrows, tablistWrapper, and carouselParent are custom elements
  // in the `Tabs` component.
  baseStyle: definePartsStyle({
    tabpanel: {},
    root: {},
    tabpanels,
    tablist,
    tab,
    // Only display the previous/next arrow buttons on mobile.
    buttonArrows,
    // To better align the mobile arrow buttons with the tablist.
    tablistWrapper,
    carouselParent,
  }),
  defaultProps: {
    colorScheme: "ui.black",
  },
});

export default CustomTabs;
