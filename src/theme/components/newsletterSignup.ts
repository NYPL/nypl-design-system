import { getSectionColors } from "../../helpers/getSectionColors";
import { SectionTypes } from "../../helpers/types";
interface NewsLetterStyleProps {
  newsletterSignupType: SectionTypes;
}

const NewsletterSignup = {
  parts: ["pitch", "privacy", "action"],
  baseStyle: ({ newsletterSignupType }: NewsLetterStyleProps) => ({
    alignItems: "center",
    borderWidth: { base: "0px 1px 1px 1px", md: "1px 1px 1px 0px" },
    maxWidth: "1280px",
    width: "100%",
    pitch: {
      // It's a two-column layout >md
      width: { base: "100%", md: "50%" },
      bg: "ui.bg.default",
      borderWidth: { base: ".75rem 0px 0px 0px", md: "0px 0px 0px .75rem" },
      borderLeftColor: {
        md: getSectionColors(
          newsletterSignupType,
          newsletterSignupType === "blogs" ? "secondary" : "primary"
        ),
      },
      borderTopColor: {
        base: getSectionColors(
          newsletterSignupType,
          newsletterSignupType === "blogs" ? "secondary" : "primary"
        ),
        md: "ui.border.default",
      },
      _dark: {
        bg: "dark.ui.bg.default",
        borderTopColor: { md: "dark.ui.border.default" },
        borderLeftColor: {
          md: getSectionColors(
            newsletterSignupType,
            newsletterSignupType === "blogs" ? "secondary" : "primary"
          ),
        },
      },
      padding: {
        base: "var(--nypl-space-s) var(--nypl-space-l) var(--nypl-space-l) var(--nypl-space-l)",
        md: "l",
        lg: "var(--nypl-space-l) var(--nypl-space-xxl) var(--nypl-space-l) var(--nypl-space-xl)",
      },
      alignItems: "flex-start",
      gap: "xs",
    },
    privacy: {
      fontSize: "desktop.caption",
      fontWeight: "caption",
    },
    action: {
      padding: { base: "l", lg: "var(--nypl-space-l) var(--nypl-space-xxl)" },
      // It's a two-column layout >md
      width: { base: "100%", md: "50%" },
    },
    form: {
      width: "100%",
    },
    // Overwrites the defaut styling of the From component layout
    "#newsletter-form-parent": {
      // The button is 78px wide and must sit to the right of the input field >lg.
      gridTemplateColumns: { base: null, xl: "1fr 78px" },
      gap: { base: "s", xl: "xs" },
    },
    button: {
      // The button must align w/ the input field, but using {align-items: center} doesn't quite work due to the input field not being the literal v-center.
      marginTop: { base: null, xl: "31px" },
    },
  }),
};

export default NewsletterSignup;
