const NewsLetterSignup = {
  baseStyle: {
    alignItems: "center",
    borderWidth: { base: "0 1px 1px 1px", md: "1px 1px 1px 0" },
    maxWidth: "1280px",
    width: "100%",
    "div#info": {
      alignItems: "flex-start",
      flex: "1 1 0",
      bg: "ui.bg.default",
    },
    "div#color-box": {
      alignSelf: "stretch",
    },
    "div#pitch": {
      width: { base: "100%", md: "50%" }, // It's a two-column layout >md
      padding: {
        base: "s l l l",
        md: "l",
        lg: "l xxl l xl",
      }, // md
      alignItems: "flex-start",
      gap: "xs",
      flex: "1 0 0",
    },
    "div#pitch, h3, #pitch>p, #pitch>a": { margin: "unset" },
    h3: {
      letterSpacing: "unset",
    },
    "a#privacy": {
      display: "flex",
      alignItems: "center",
      gap: "xxs",
      fontSize: "desktop.caption",
      fontWeight: "caption",
    },
    "div#action": {
      padding: { base: "l", lg: "l xxl" },
      width: { base: "100%", md: "50%" }, // It's a two-column layout >md
    },
    form: {
      width: "100%",
    },
    "#newsletter-form-parent": {
      gridTemplateColumns: { base: null, lg: "1fr 78px" }, // The button is 78px wide and must sit to the right of the input field >lg.
      gap: { base: "s", lg: "xs" },
    },
    input: {
      display: "flex",
      padding: "xs s",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "10px",
      alignSelf: "stretch",
      borderRadius: "2px",
      border: "1px solid ui.border.default",
      background: "ui.white",
    },
    "div#newsletterSignup-id-email-helperText": {
      fontWeight: "400",
    },
    button: {
      marginTop: { base: null, lg: "31px" }, // The button must align w/ the input field, but using {align-items: center} doesn't quite work due to the input field not being the literal v-center.
    },
  },
};

export default NewsLetterSignup;
