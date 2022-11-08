import { screenreaderOnly } from "./globalMixins";

const FeedbackBox = {
  parts: ["closeBtn", "content", "header"],
  baseStyle: {
    openBtn: {
      position: "fixed",
      borderRadius: "0",
      bottom: "0",
      right: "0",
      zIndex: "5",
    },
    closeBtn: {
      span: screenreaderOnly(),
    },
    content: {
      marginStart: "auto",
      width: { base: "100%", md: "450px" },
    },
    header: {
      alignItems: "baseline",
      background: "ui.gray.light-cool",
      borderBottomWidth: "1px",
      display: "flex",
      px: "m",
      paddingTop: "s",
      paddingBottom: "s",
      p: {
        marginBottom: "0",
      },
    },
    body: {
      paddingTop: "m",
      paddingBottom: "m",
    },
  },
};

export default FeedbackBox;
