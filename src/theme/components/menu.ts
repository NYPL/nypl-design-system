import { SectionTypes } from "../../helpers/types";
import { getSectionColors } from "../../utils/getSectionColors";
import { defaultElementSizes } from "./global";
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
        paddingY: "xs",
        paddingX: "s",
        lineHeight: "18px",
        fontWeight: "510",
        fontSize: "desktop.caption",
        textColor: "ui.typography.heading",
        margin: "0px",
        _dark: {
          textColor: "dark.ui.typography.body",
          bg: "dark.ui.bg.default",
        },
      },
      dividerItem: {
        margin: "0px",
        _dark: {
          textColor: "dark.ui.typography.body",
          bg: "dark.ui.bg.default",
        },
      },
      actionItem: {
        outline: "none !important",
        textColor: "ui.typography.body",
        paddingY: "xs",
        paddingX: "s",
        fontSize: "desktop.body.body2",
        fontWeight: "body.body2",
        lineHeight: "150%",
        "> div > svg": {
          fill: "ui.black",
        },
        _hover: {
          fontWeight: 510,
          bg: "ui.bg.hover",
        },
        _focus: {
          fontWeight: 510,
          bg: "ui.bg.hover",
        },
        _dark: {
          textColor: "dark.ui.typography.body",
          bg: "dark.ui.bg.default",
          "> div > svg": {
            fill: "dark.ui.typography.body",
          },
          _hover: {
            bg: "dark.ui.bg.active",
          },
        },
      },
      selected: {
        _hover: {
          background:
            highlightColor === "blogs" ? "ui.bg.hover" : lightSectionColor,
        },
        _active: {
          background:
            highlightColor === "blogs" ? "ui.bg.hover" : lightSectionColor,
        },
        fontWeight: 510,
        borderLeftColor: sectionColor,
        textColor:
          highlightColor === "blogs" ? "ui.typography.heading" : sectionColor,
        borderWidth: "0px 0px 0px 2px",
        background:
          highlightColor === "blogs" ? "ui.bg.default" : lightSectionColor,
        _dark: {
          textColor: "dark.ui.typography.heading",
          background:
            highlightColor === "whatsOn"
              ? "dark.ui.bg.hover"
              : darkSectionColor,
        },
      },
      menuButton: {
        minHeight: { base: defaultElementSizes.mobileFieldHeight, md: "40px" },
        minWidth: { base: defaultElementSizes.mobileFieldHeight, md: "40px" },
        whiteSpace: "nowrap",
        paddingY: showLabel ? "xs" : "unset",
        paddingX: showLabel ? "s" : "unset",
        borderRadius: "2px",
        fontSize: "desktop.button.default",
        textColor: showBorder ? "ui.typography.heading" : "ui.link.primary",
        fill: "ui.typography.heading",
        border: showBorder ? "1px solid" : "unset",
        borderColor: "ui.border.default",
        _hover: {
          bg: "ui.link.primary-05",
          textColor: showBorder ? "ui.typography.heading" : "ui.link.secondary",
          borderColor: "ui.border.hover",
        },
        _active: { bg: "ui.link.primary-05" },
        "> span ": {
          alignItems: showLabel ? undefined : "center",
          display: showLabel ? undefined : "flex",
          justifyContent: showLabel ? undefined : "center",
        },
        "> span > svg ": {
          fill: showBorder
            ? "ui.typography.heading"
            : showLabel
            ? "ui.link.primary"
            : "ui.black",
        },
        _dark: {
          textColor: showBorder
            ? "dark.ui.typography.heading"
            : "dark.ui.link.primary",
          borderColor: showBorder ? "dark.ui.border.default" : "unset",
          _hover: {
            bg: "dark.ui.link.primary-10",
            borderColor: showBorder ? "dark.ui.border.hover" : "unset",
            textColor: showBorder
              ? "dark.ui.typography.heading"
              : "dark.ui.link.secondary",
          },
          _active: { bg: "dark.ui.link.primary-10" },
          "> span > svg": {
            fill: "dark.ui.typography.heading",
          },
        },
      },
      menuList: {
        minWidth: "200px",
        outline: "0px",
        maxWidth: "300px",
        padding: "0px",
        borderRadius: "2px",
        border: "1px solid",
        borderColor: "ui.gray.light-cool",
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
