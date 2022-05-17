const HeaderSearchBox = {
  parts: ["button", "form", "textInput", "radio"],
  baseStyle: {
    whiteSpace: "initial",
    position: "absolute",
    left: "0px",
    backgroundColor: "#1B7FA7",
    width: "100%",
    top: "222px",
    zIndex: "99999",
    color: "ui.white",
    svg: {
      color: "ui.white",
      fill: "ui.white",
      marginTop: "0",
    },
    button: {
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
      width: "1130px",
      margin: "35px auto 40px 120px",
      whiteSpace: "initial",
    },
    radio: {
      backgroundColor: "white",
      border: "1px solid white",
    },
    textInput: {
      input: {
        color: "ui.black",
      },
    },
  },
};

export default HeaderSearchBox;
