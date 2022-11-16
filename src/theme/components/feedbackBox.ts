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
      span: screenreaderOnly(),
    },
    drawerBody: {
      paddingTop: "m",
      paddingBottom: "m",
    },
    drawerContent: {
      marginStart: "auto",
      width: { base: "100%", md: "375px" },
    },
    drawerHeader: {
      alignItems: "baseline",
      background: "ui.gray.light-cool",
      borderBottomWidth: "1px",
      display: "flex",
      fontSize: "text.default",
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
      zIndex: "5",
    },
  },
};

export default FeedbackBox;
