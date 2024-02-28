import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { StyleFunctionProps } from "@chakra-ui/system";

import { SectionTypes } from "../../helpers/types";
import { getSectionColors } from "../../utils/getSectionColors";
import { defaultElementSizes } from "./global";

interface MenuStyleProps extends StyleFunctionProps {
  highlightColor: SectionTypes;
  showBorder: boolean;
  showLabel: boolean;
}

// This function creates a set of function that helps us
// create multipart component styles.
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "groupItem",
    "actionItem",
    "dividerItem",
    "selected",
    "menuButton",
    "menuList",
  ]);

const Menu = defineMultiStyleConfig({
  baseStyle: definePartsStyle(
    ({ highlightColor = "blogs", showBorder, showLabel }: MenuStyleProps) => {
      // TO-DO: Change this to explicit color variants.
      const sectionColor = getSectionColors({
        type: highlightColor,
        colorValue:
          highlightColor === "blogs" || highlightColor === "research"
            ? "secondary"
            : "primary",
      });
      const lightSectionColor = `${sectionColor}-05`;
      const darkSectionColor = `dark.${sectionColor}-10`;
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
          borderLeftColor:
            highlightColor === "blogs"
              ? "dark.ui.border.default"
              : highlightColor === "whatsOn"
              ? "dark.section.whatsOn.primary"
              : sectionColor,
          textColor:
            highlightColor === "blogs" || highlightColor === "connect"
              ? "ui.typography.heading"
              : sectionColor,
          borderWidth: "0px 0px 0px 2px",
          background:
            highlightColor === "blogs" ? "ui.bg.default" : lightSectionColor,
          _dark: {
            textColor: "dark.ui.typography.heading",
            background:
              highlightColor === "whatsOn" || highlightColor === "blogs"
                ? "dark.ui.bg.hover"
                : darkSectionColor,
          },
        },
        menuButton: {
          minHeight: {
            base: defaultElementSizes.mobileFieldHeight,
            md: "40px",
          },
          minWidth: { base: defaultElementSizes.mobileFieldHeight, md: "40px" },
          whiteSpace: "nowrap",
          paddingY: showLabel ? "xs" : "unset",
          paddingX: showLabel ? "s" : "unset",
          borderRadius: "2px",
          fontSize: "desktop.button.default",
          textColor: showBorder ? "ui.typography.heading" : "ui.link.primary",
          border: showBorder ? "1px solid" : "unset",
          borderColor: "ui.border.default",
          _hover: {
            bg: "ui.link.primary-05",
            textColor: showBorder
              ? "ui.typography.heading"
              : "ui.link.secondary",
            borderColor: "ui.border.hover",
            "> span > svg ": {
              fill: showBorder
                ? "ui.typography.heading"
                : showLabel
                ? "ui.link.secondary"
                : "ui.black",
            },
          },
          _active: {
            bg: "ui.link.primary-05",
            textColor: showBorder
              ? "ui.typography.heading"
              : "ui.link.secondary",
            borderColor: "ui.border.hover",
            "> span > svg ": {
              fill: showBorder
                ? "ui.typography.heading"
                : showLabel
                ? "ui.link.secondary"
                : "ui.black",
            },
          },

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
              : "ui.typography.heading",
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
            bgColor: "dark.ui.bg.default",
          },
          boxShadow: "none",
          overflowY: "auto",
          maxHeight: "320px",
        },
      };
    }
  ),
});

export default Menu;
