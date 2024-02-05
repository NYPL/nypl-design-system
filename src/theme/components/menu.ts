import { SectionTypes } from "../../helpers/types";
import { getSectionColors } from "../../utils/getSectionColors";
interface MenuStyleProps {
  highlightColor: SectionTypes;
  showBorder: boolean;
  showLabel: boolean;
}

const Menu = {
  parts: [
    "groupItem",
    "actionItem",
    "dividerItem",
    "selected",
    "menuButton",
    "menuGroup",
    "menuList",
  ],
  baseStyle: ({
    highlightColor = "blogs",
    showBorder,
    showLabel,
  }: MenuStyleProps) => {
    const sectionColor = getSectionColors({
      type: highlightColor,
      colorValue: highlightColor === "blogs" ? "secondary" : "primary",
    });
    const lightSectionColor = sectionColor + "-05";
    const darkSectionColor = "dark." + sectionColor + "-10";
    return {
      groupItem: {
        padding: "8px 12px",
        lineHeight: "150%",
        fontWeight: "510",
        fontSize: "12px",
        margin: "0px",
        _dark: {
          textColor: "ui.white",
          bg: "dark.ui.bg.default",
        },
      },
      dividerItem: {
        margin: "0px",
        _dark: {
          textColor: "ui.white",
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
          textColor: "ui.white",
          bg: "dark.ui.bg.default",
          "> div > svg": {
            fill: "ui.white",
          },
          _hover: {
            bg: "dark.ui.bg.active",
          },
        },
      },
      selected: {
        _hover: {
          background:
            highlightColor === "blogs" ? "ui.bg.default" : lightSectionColor,
        },
        _active: {
          background:
            highlightColor === "blogs" ? "ui.bg.default" : lightSectionColor,
        },
        fontWeight: 500,
        borderLeftColor:
          highlightColor === "whatsOn" ? "#E9E9E933" : sectionColor,
        textColor: highlightColor === "blogs" ? "ui.black" : sectionColor,
        borderWidth: "0px 0px 0px 2px",
        background:
          highlightColor === "blogs" ? "ui.bg.default" : lightSectionColor,
        _dark: {
          textColor: "ui.white",
          background:
            highlightColor === "whatsOn"
              ? "dark.ui.bg.hover"
              : darkSectionColor,
        },
      },
      menuButton: {
        padding: showLabel ? "8px 16px" : "",
        borderRadius: "2px",
        fontSize: "14px",
        color: showBorder ? "ui.gray.xx-dark" : "ui.link.primary",
        fill: "ui.black",
        border: showBorder ? "1px solid #616161" : "unset",
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
          paddingTop: showLabel ? "" : "5px",
          margin: showLabel ? "" : "7px",
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
    };
  },
};

export default Menu;
