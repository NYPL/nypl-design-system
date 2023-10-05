import { getSectionColors } from "../../helpers/getSectionColors";
import { SectionTypes } from "../../helpers/types";
interface NewsLetterStyleProps {
  newsletterSignupType: SectionTypes;
}

const NewsLetterSignup = {
  baseStyle: ({ newsletterSignupType }: NewsLetterStyleProps) => ({
    alignItems: "center",
    borderWidth: { base: ".75rem 1px 1px 1px", md: "1px 1px 1px .75rem" },
    borderLeftColor: {
      md: getSectionColors(newsletterSignupType, "primary"),
    },
    borderTopColor: {
      base: getSectionColors(newsletterSignupType, "primary"),
      md: "ui.border.default",
    },
    _dark: {
      borderColor: "dark.ui.border.default",
      borderTopColor: { md: "dark.ui.border.default" },
      borderLeftColor: {
        md: getSectionColors(newsletterSignupType, "primary"),
      },
    },
    maxWidth: "1280px",
    width: "100%",
    "div#pitch": {
      // It's a two-column layout >md
      width: { base: "100%", md: "50%" },
      bg: "ui.bg.default",
      _dark: {
        bg: "dark.ui.bg.default",
      },
      padding: {
        base: "var(--nypl-space-s) var(--nypl-space-l) var(--nypl-space-l) var(--nypl-space-l)", // @todo For some reason using "padding:" with more than one shorthand value, e.g. l, sm, xxl, doesn't work.
        md: "l",
        lg: "var(--nypl-space-l) var(--nypl-space-xxl) var(--nypl-space-l) var(--nypl-space-xl)",
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
      padding: { base: "l", lg: "var(--nypl-space-l) var(--nypl-space-xxl)" },
      // It's a two-column layout >md
      width: { base: "100%", md: "50%" },
    },
    form: {
      width: "100%",
    },
    "#newsletter-form-parent": {
      // The button is 78px wide and must sit to the right of the input field >lg.
      gridTemplateColumns: { base: null, xl: "1fr 78px" },
      gap: { base: "s", xl: "xs" },
    },
    input: {
      display: "flex",
      padding: "var(--nypl-space-xs) var(--nypl-space-s)",
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
      // The button must align w/ the input field, but using {align-items: center} doesn't quite work due to the input field not being the literal v-center.
      marginTop: { base: null, xl: "31px" },
    },
  }),
};

export default NewsLetterSignup;
