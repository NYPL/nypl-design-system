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
  backgroundColor: "ui.gray.light-warm",
  height: "auto",
  padding: "s",
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
