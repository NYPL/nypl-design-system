import {
  headerBlue,
  headerFocus,
  headerLightBlue,
  headerLightBlueIcon,
} from "./header";

const HeaderSearchForm = {
  parts: ["desktopSearchBtn", "form", "mobileSearchIcon", "radio", "textInput"],
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
        marginLeft: { md: "m", lg: "140px" },
        marginRight: { md: "m" },
      },
    },
    fieldset: {
      margin: { base: "20px 15px 0", md: "0" },
    },
    textInput: {
      label: {
        fontSize: { md: "18px" },
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
    mobileSearchIcon: {
      display: { md: "none" },
      fill: `${headerLightBlueIcon} !important`,
      left: "20px",
      position: "absolute",
      top: "45px",
    },
    desktopSearchBtn: {
      alignSelf: "end",
      backgroundColor: "transparent",
      borderRadius: "100px",
      borderWidth: "2px",
      height: "75px",
      maxHeight: "75px",
      width: "75px",
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
    mobileBtns: {
      alignItems: "center",
      backgroundColor: headerBlue,
      borderRadius: "0",
      display: "flex",
      fontSize: "16px",
      flex: "1",
      padding: "35px 0",
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
