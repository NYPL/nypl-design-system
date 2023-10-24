import { getSectionColors } from "../../helpers/getSectionColors";
import { SectionTypes } from "../../helpers/types";
interface NewsLetterStyleProps {
  newsletterSignupType: SectionTypes;
}

const NewsletterSignup = {
  parts: ["pitch", "privacy", "action"],
  baseStyle: ({ newsletterSignupType }: NewsLetterStyleProps) => ({
    borderWidth: { base: "0px 1px 1px 1px", md: "1px 1px 1px 0px" },
    width: "100%",
    pitch: {
      alignItems: "flex-start",
      bg: "ui.bg.default",
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
      borderWidth: { base: ".75rem 0px 0px 0px", md: "0px 0px 0px .75rem" },
      gap: "xs",
      justifyContent: "center",
      width: { base: "100%", md: "50%" }, // It's a two-column layout >md
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
    },
    privacy: {
      fontSize: "desktop.caption",
      fontWeight: "caption",
    },
    action: {
      justifyContent: "center",
      padding: { base: "l", lg: "var(--nypl-space-l) var(--nypl-space-xxl)" },
      width: { base: "100%", md: "50%" }, // It's a two-column layout >md
    },
    form: {
      width: "100%",
    },
    // Overwrites the defaut styling of the From component layout
    "#newsletter-form-parent": {
      // The button is 78px wide and must sit to the right of the input field >lg.
      gridTemplateColumns: { base: null, lg: "1fr 78px" },
      gap: { base: "s", lg: "xs" },
    },
    button: {
      // The button must align w/ the input field, but using {align-items: center} doesn't quite work due to the input field not being the literal v-center.
      marginTop: { base: null, lg: "31px" },
    },
  }),
};

export default NewsletterSignup;