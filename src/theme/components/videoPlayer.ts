const fourByThree = {
  inside: {
    paddingBottom: "75%",
  },
};

const square = {
  inside: {
    paddingBottom: "100%",
  },
};

const invalid = {
  backgroundColor: "ui.gray.light-cool",
  border: "1px solid",
  borderColor: "ui.border.default",
  height: "auto",
  padding: "s",
  _dark: {
    bg: "dark.ui.bg.default",
    border: "1px solid",
    borderColor: "dark.ui.border.default",
  },
};

const VideoPlayer = {
  baseStyle: {
    inside: {
      height: "0",
      overflow: "hidden",
      paddingBottom: "56.25%",
      position: "relative",
    },
    iframe: {
      height: "100%",
      left: "0",
      margin: "auto",
      position: "absolute",
      top: "0",
      width: "100%",
    },
    helperText: {
      marginBottom: "0",
      marginTop: "xs",
    },
  },
  variants: {
    fourByThree,
    invalid,
    square,
  },
};

export default VideoPlayer;
