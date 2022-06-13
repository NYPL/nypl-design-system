import { headerFocus } from "./header";

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
      _focus: headerFocus,
    },
    desktopSearchBtn: {
      alignSelf: "end",
      backgroundColor: "transparent",
      borderRadius: "100px",
      borderWidth: "2px",
      height: "60px",
      maxHeight: "60px",
      padding: "15px",
      width: "60px",
      _focus: { ...headerFocus, borderRadius: "100px" },
      _hover: {
        backgroundColor: "transparent",
        ...headerFocus,
        borderRadius: "100px",
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
      _focus: { ...headerFocus, borderRadius: "100px" },
      _hover: { ...headerFocus, borderRadius: "100px" },
    },
    textInput: {
      input: {
        color: "ui.black",
        _focus: headerFocus,
        _hover: headerFocus,
      },
    },
  }),
};

export default HeaderSearchForm;
