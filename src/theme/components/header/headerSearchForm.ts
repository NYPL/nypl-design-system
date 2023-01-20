import { headerLightBlue, headerBlue, headerFocus } from "./header";

const HeaderSearchForm = {
  parts: ["searchBtn", "form", "radio", "textInput"],
  baseStyle: {
    color: "ui.white",
    backgroundColor: headerBlue,
    left: "0px",
    minHeight: { base: "180px", md: "235px" },
    position: "absolute",
    whiteSpace: "initial",
    width: "100%",
    zIndex: "99999",
    svg: {
      color: "ui.white",
      fill: "ui.white",
      marginTop: "0",
    },
    form: {
      margin: { md: "45px auto 40px auto" },
      maxWidth: { md: "1312px" },
      whiteSpace: "initial",
      "> div": {
        margin: "20px 15px 0",
        marginLeft: { md: "m", lg: "140px" },
        marginRight: { md: "m" },
      },
    },
    "#radio-group-search-type": {
      margin: { base: "0 20px 20px", md: "0" },
    },
    textInput: {
      label: {
        fontSize: {
          base: "heading.callout",
          sm: "heading.tertiary",
          md: "heading.secondary",
        },
      },
      input: {
        borderRadius: { md: "5px" },
        color: "ui.black",
        minHeight: { base: "65px", md: "60px" },
        paddingLeft: { base: "25px", md: "15px" },
        _placeholder: {
          fontSize: { base: "20px" },
          fontStyle: "normal",
        },
        _focus: headerFocus,
        _hover: headerFocus,
      },
    },
    searchBtn: {
      alignSelf: "end",
      backgroundColor: "transparent",
      borderColor: "ui.white",
      borderRadius: "100px",
      borderWidth: "2px",
      height: { base: "65px", md: "60px" },
      marginTop: "40px",
      marginEnd: "0",
      maxHeight: "65px",
      svg: {
        marginTop: "xs",
      },
      width: { base: "65px", md: "60px" },
      _focus: { ...headerFocus, borderRadius: "100px" },
      _hover: {
        backgroundColor: "transparent",
        ...headerFocus,
        borderRadius: "100px",
      },
    },
    radio: {
      backgroundColor: "white",
      border: "1px solid white",
      _focus: { ...headerFocus, borderRadius: "100px" },
      _hover: { ...headerFocus, borderRadius: "100px" },
    },
    // Specifically target the radio buttons.
    ".chakra-radio": {
      alignItems: "center",
    },
    // Specifically target the radio labels.
    ".chakra-radio__label": {
      fontWeight: "medium",
    },
    mobileBtns: {
      alignItems: "center",
      backgroundColor: headerBlue,
      borderRadius: "0",
      display: "flex",
      fontSize: "16px",
      flex: "1",
      justifyContent: "center",
      padding: "25px 0",
      svg: {
        fill: headerLightBlue,
        marginLeft: "15px",
      },
      _hover: {
        backgroundColor: headerBlue,
      },
      _focus: headerFocus,
    },
  },
};

export default HeaderSearchForm;
