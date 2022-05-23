const HeaderSearchForm = {
  parts: ["desktopSearchBtn", "form", "textInput", "radio"],
  baseStyle: ({ isMobile }) => ({
    whiteSpace: "initial",
    position: "absolute",
    left: "0px",
    backgroundColor: "#1B7FA7",
    width: "100%",
    zIndex: "99999",
    color: "ui.white",
    svg: {
      color: "ui.white",
      fill: "ui.white",
      marginTop: "0",
    },
    mobileBtns: {
      backgroundColor: "#1B7FA7",
      flex: "1",
      svg: {
        fill: "#78CCED",
      },
      _hover: {
        backgroundColor: "#1B7FA7",
      },
      _focus: {
        borderRadius: "none",
        outlineColor: "#135772 !important",
        outlineOffset: "0 !important",
        outlineStyle: "solid !important",
        outlineWidth: "0.1875em !important",
      },
    },
    desktopSearchBtn: {
      backgroundColor: "transparent",
      alignSelf: "end",
      height: "60px",
      maxHeight: "60px",
      width: "60px",
      borderRadius: "100px",
      padding: "15px",
      _hover: {
        backgroundColor: "transparent",
      },
    },
    form: {
      // width: isMobile ? null : "1130px",
      margin: isMobile ? "0" : "35px 50px 40px 120px",
      whiteSpace: "initial",
    },
    fieldset: isMobile
      ? {
          margin: "15px",
          marginBottom: "0",
        }
      : {},
    radio: {
      backgroundColor: "white",
      border: "1px solid white",
    },
    textInput: {
      input: {
        color: "ui.black",
      },
    },
  }),
};

export default HeaderSearchForm;
