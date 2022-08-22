import { headerBlue, headerFocus, headerLightBlueIcon } from "./header";

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
    // These two are styles for the fieldsets:
    "#fieldset-search": {
      margin: { base: "20px 15px 0", md: "0" },
    },
    "#radio-group-search-type": {
      margin: { base: "0 40px 20px", md: "0" },
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
    // Specifically target the radio buttons.
    ".chakra-radio": {
      alignItems: "center",
    },
    // Specifically target the radio labels.
    ".chakra-radio__label": {
      fontSize: "18px",
      fontWeight: "medium",
    },
  },
};

export default HeaderSearchForm;
