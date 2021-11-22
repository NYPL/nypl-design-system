const FileDisplay = {
  parts: [
    "container",
    "deleteButton",
    "formatIcon",
    "formatFileName",
    "helper",
    "leftIcon",
    "textContainer",
  ],
  baseStyle: {
    container: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      bg: "ui.gray.light-cool",
    },
    deleteButton: {
      bg: "ui.gray.light-cool)",
      svg: {
        marginTop: "0",
      },
      _hover: { bg: "ui.gray.light-cool)" },
    },
    formatIcon: {
      marginRight: "10px",
    },
    formatFileName: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    helper: {
      marginTop: "xs",
    },
    leftIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 10,
      minWidth: 10,
    },
    textContainer: {
      width: "80%",
      display: "flex",
    },
  },
};

export default FileDisplay;
