import { screenreaderOnly } from "./globalMixins";

const FeedbackBox = {
  parts: [
    "closeButton",
    "drawerBody",
    "drawerContent",
    "drawerHeader",
    "openButton",
  ],
  baseStyle: {
    closeButton: {
      /** This is overriding the default min-height value in order to keep the
       * button spacing symmetrical. */
      minHeight: "40px",
      right: "xs",
      p: "0",
      position: "absolute",
      span: screenreaderOnly(),
      top: "xs",
      _dark: {
        svg: {
          fill: "dark.ui.typography.heading",
        },
      },
    },
    drawerBody: {
      borderLeft: { base: undefined, md: "1px solid" },
      borderColor: "ui.border.default",
      paddingTop: "m",
      paddingBottom: "m",
      _dark: {
        background: "dark.ui.bg.page",
        borderColor: "dark.ui.border.default",
      },
    },
    drawerContent: {
      marginStart: "auto",
      width: { base: "100%", md: "375px" },
    },
    drawerHeader: {
      alignItems: "baseline",
      background: "ui.gray.light-cool",
      borderBottomWidth: "1px",
      borderLeftWidth: { base: undefined, md: "1px" },
      borderTopWidth: "1px",
      display: "flex",
      fontSize: "text.default",
      px: "m",
      paddingTop: "s",
      paddingBottom: "s",
      p: {
        marginBottom: "0",
      },
      _dark: {
        background: "dark.ui.bg.hover",
      },
    },
    openButton: {
      position: "fixed",
      borderRadius: "0",
      bottom: "0",
      right: "0",
      zIndex: "5",
    },
  },
};

export default FeedbackBox;
