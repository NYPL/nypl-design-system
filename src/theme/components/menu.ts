import { SectionTypes } from "../../helpers/types";
import { getSectionColors } from "../../utils/getSectionColors";
interface MenuStyleProps {
  highlightColor: SectionTypes;
  showBorder: boolean;
}

const Menu = {
  parts: ["menuItem", "menuButton", "menuGroup", "menuList", "icon"],
  baseStyle: ({ highlightColor, showBorder }: MenuStyleProps) => ({
    groupItem: {
      padding: "8px 12px",
      lineHeight: "150%",
      fontWeight: "500",
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
      padding: "8px 12px",
      fontSize: "14px",
      maxHeight: "40px",
      lineHeight: "150%",
      ":focus, :hover": {
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
      _dark: {
        bg: "dark.ui.bg.default",
        "> div > svg": {
          fill: showBorder ? "ui.white" : "dark.ui.link.secondary",
        },
      },
    },
    menuButton: {
      padding: "8px 16px",
      borderRadius: "2px",
      fontSize: "14px",
      color: showBorder ? "ui.gray.xx-dark" : "ui.link.secondary",
      border: showBorder ? "1px solid #BDBDBD" : "unset",
      _hover: { bg: "ui.link.primary-05" },
      _active: { bg: "ui.link.primary-05" },
      "> span > svg ": {
        fill: showBorder ? "ui.gray.xx-dark" : "ui.link.primary",
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
