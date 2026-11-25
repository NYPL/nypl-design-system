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
    notification: {
      // TO DO v5: this doesn't correspond to a notification variant color
      background: "v5.surface.subtle.informative.default",
      borderRadius: "v5.soft",
      padding: "4px 16px",
      width: "100%",
    },
    closeButton: {
      height: "v5.form.height.sm",
      width: "v5.form.height.sm",
      minHeight: "v5.form.height.sm",
      minWidth: "v5.form.height.sm",
      marginInlineStart: "auto",
      p: "0",
      span: screenreaderOnly(),
    },
    drawerBody: {
      borderLeft: { base: undefined, md: "1px solid" },
      borderColor: {
        base: undefined,
        md: "v5.border.prominent.neutral.default",
      },
      py: "v5.feedbackBox.container.paddingY",
    },
    drawerContent: {
      marginStart: "auto",
      width: { base: "100%", md: "400px" },
      aside: {
        color: "v5.text.heading.default",
      },
    },
    drawerHeader: {
      alignItems: "center",
      background: "v5.surface.subtle.neutral.default",
      borderBottomWidth: "1px",
      borderLeftWidth: { base: undefined, md: "1px" },
      borderColor: "v5.border.prominent.neutral.default",
      borderTopWidth: "1px",
      color: "v5.text.heading.default",
      display: "flex",
      fontSize: "v5.body",
      fontWeight: "v5.semibold",
      paddingLeft: "v5.feedbackBox.header.paddingX",
      paddingRight: "v5.inset.tight",
      py: "v5.feedbackBox.header.paddingY",
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
        boxShadow: "0 0 0 6px var(--nypl-colors-v5-genericWhite) !important",
      },
    },
    // TO DO v5: revisit with RadioGroup
    radioGroup: {
      ".ds-radioGroup-stack": {
        flexDirection: { base: "column", md: "row" },
        gap: { base: "s", md: "l" },
      },
    },
  }),
});

export default FeedbackBox;
