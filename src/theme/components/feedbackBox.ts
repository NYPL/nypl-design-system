import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { screenreaderOnly } from "./globalMixins";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers([
    "closeButton",
    "notification",
    "drawerBody",
    "drawerContent",
    "drawerHeader",
    "openButton",
    "radioGroup",
  ]);

const FeedbackBox = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    fontFamily: "v5.base",
    notification: {
      fontFamily: "v5.base",
      // TO DO v5: this doesn't correspond to a notification variant color
      background: "v5.surface.subtle.informative.emphasis !important",
      borderRadius: "4px",
      padding: "4px 16px",
    },
    closeButton: {
      /** This is overriding the default min-height value in order to keep the
       * button spacing symmetrical. */
      minHeight: "40px",
      minWidth: "40px",
      right: "xs",
      p: "0",
      position: "absolute",
      span: screenreaderOnly(),
      top: "xs",
    },
    drawerBody: {
      borderLeft: { base: undefined, md: "1px solid" },
      borderColor: {
        base: undefined,
        md: "v5.border.prominent.neutral.default",
      },
      paddingTop: "m",
      paddingBottom: "m",
    },
    drawerContent: {
      marginStart: "auto",
      width: { base: "100%", md: "400px" },
      aside: {
        color: "v5.text.heading.default",
      },
    },
    drawerHeader: {
      alignItems: "baseline",
      background: "v5.surface.subtle.neutral.default",
      borderBottomWidth: "1px",
      borderLeftWidth: { base: undefined, md: "1px" },
      borderColor: "v5.border.prominent.neutral.default",
      borderTopWidth: "1px",
      fontFamily: "v5.base",
      color: "v5.text.heading.default",
      display: "flex",
      fontSize: "v5.body",
      fontWeight: "v5.semibold",
      px: "m",
      paddingTop: "s",
      paddingBottom: "s",
      p: {
        marginBottom: "0",
      },
    },
    openButton: {
      position: "fixed",
      borderRadius: "0",
      bottom: "0",
      right: "0",
      zIndex: "10000",
      _focus: {
        zIndex: "10000 !important",
      },
    },
    radioGroup: {
      ".ds-radioGroup-stack": {
        flexDirection: { base: "column", md: "row" },
        gap: { base: "s", md: "l" },
      },
    },
  }),
});

export default FeedbackBox;
