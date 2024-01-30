import { SectionTypes } from "../../helpers/types";
import { getSectionColors } from "../../utils/getSectionColors";
interface MenuStyleProps {
  highlightColor: SectionTypes;
  showBorder: boolean;
  showLabel: boolean;
}

const Menu = {
  parts: ["menuItem", "menuButton", "menuGroup", "menuList"],
  baseStyle: ({ highlightColor, showBorder, showLabel }: MenuStyleProps) => ({
    groupItem: {
      padding: "8px 12px",
      lineHeight: "150%",
      fontWeight: "510",
      fontSize: "12px",
      margin: "0px",
      _dark: {
        bg: "dark.ui.bg.default",
      },
    },
    dividerItem: {
      margin: "0px",
      _dark: {
        bg: "dark.ui.bg.default",
      },
    },
    actionItem: {
      outline: "none !important",
      padding: "8px 12px",
      fontSize: "14px",
      lineHeight: "150%",
      _hover: {
        fontWeight: 510,
        bg: "ui.bg.hover",
      },
      _focus: {
        fontWeight: 510,
        bg: "ui.bg.hover",
      },
      _dark: {
        bg: "dark.ui.bg.default",
        "> div > svg": {
          fill: "ui.white",
        },
        _hover: {
          bg: "dark.ui.bg.active",
        },
      },
    },
    ".selected": {
      //bg: "green !important",
      fontWeight: 500,
      borderLeftColor: getSectionColors({
        type: highlightColor,
        //colorValue: highlightColor === "blogs" ? "secondary" : "primary",
      }),
      textColor: getSectionColors({
        type: highlightColor,
        //colorValue: highlightColor === "blogs" ? "secondary" : "primary",
      }),
      borderWidth: "0px 0px 0px 1px",
      background: getSectionColors({
        type: highlightColor,
        //colorValue: highlightColor === "blogs" ? "secondary" : "primary",
      }),
    },
    menuButton: {
      padding: showLabel ? "8px 16px" : "8px 8px",
      borderRadius: "2px",
      fontSize: "14px",
      color: showBorder ? "ui.gray.xx-dark" : "ui.link.primary",
      fill: "ui.black",
      border: showBorder ? "1px solid #BDBDBD" : "unset",
      _hover: {
        bg: "ui.link.primary-05",
        color: showBorder ? "" : "ui.link.secondary",
      },
      _active: { bg: "ui.link.primary-05" },
      "> span > svg ": {
        fill: showBorder
          ? "ui.gray.xx-dark"
          : showLabel
          ? "ui.link.primary"
          : "ui.black",
      },
      _dark: {
        color: showBorder ? "ui.white" : "dark.ui.link.secondary",
        borderColor: showBorder ? "dark.ui.border.hover" : "unset",
        _hover: { bg: "dark.ui.link.primary-10" },
        _active: { bg: "dark.ui.link.primary-10" },
        "> span > svg": {
          fill: showBorder ? "ui.white" : "dark.ui.link.secondary",
        },
      },
    },
    menuList: {
      minWidth: "200px",
      outline: "0px",
      maxWidth: "300px",
      padding: "0px",
      borderRadius: "2px",
      border: "1px solid ui.gray.light-cool",
      _dark: {
        borderColor: "dark.ui.border-default",
      },
      boxShadow: "none",
      overflowY: "auto",
      maxHeight: "320px",
    },
  }),
};

export default Menu;
