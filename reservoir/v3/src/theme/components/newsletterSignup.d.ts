import { StyleFunctionProps } from "@chakra-ui/system";
import { HighlightColorTypes } from "../../components/NewsletterSignup/NewsletterSignup";
interface NewsLetterStyleProps extends StyleFunctionProps {
    highlightColor: HighlightColorTypes;
}
declare const NewsletterSignup: {
    baseStyle?: ({ highlightColor }: NewsLetterStyleProps) => {
        borderWidth: {
            base: string;
            md: string;
        };
        width: string;
        pitch: {
            bg: string;
            borderLeftColor: {
                md: "section.blogs.secondary" | "section.books-and-more.primary" | "brand.primary" | "section.connect.primary" | "section.education.primary" | "section.locations.primary" | "section.research.primary" | "section.research-library.lpa" | "section.research-library.schomburg" | "section.whats-on.primary" | "ui.gray.medium" | "section.research-library.schwartzman";
            };
            borderTopColor: {
                base: "section.blogs.secondary" | "section.books-and-more.primary" | "brand.primary" | "section.connect.primary" | "section.education.primary" | "section.locations.primary" | "section.research.primary" | "section.research-library.lpa" | "section.research-library.schomburg" | "section.whats-on.primary" | "ui.gray.medium" | "section.research-library.schwartzman";
                md: "ui.border.default";
            };
            borderWidth: {
                base: ".5rem 0px 0px 0px";
                md: "0px 0px 0px .5rem";
            };
            gap: string;
            justifyContent: string;
            width: {
                base: "100%";
                md: "50%";
            };
            _dark: {
                bg: string;
                borderTopColor: {
                    md: "dark.ui.border.default";
                };
                borderLeftColor: {
                    md: "dark.section.blogs.secondary" | "dark.section.locations.primary" | "dark.brand.primary" | "dark.section.books-and-more.primary" | "dark.section.connect.primary" | "dark.section.education.primary" | "dark.section.research.primary" | "dark.section.research-library.lpa" | "dark.section.research-library.schomburg" | "dark.section.whats-on.primary" | "dark.ui.gray.medium" | "dark.section.research-library.schwartzman";
                };
            };
            padding: {
                base: "var(--nypl-space-s) var(--nypl-space-l) var(--nypl-space-l) var(--nypl-space-l)";
                md: "l";
                lg: "var(--nypl-space-l) var(--nypl-space-xxl) var(--nypl-space-l) var(--nypl-space-xl)";
            };
        };
        privacy: {
            fontSize: string;
            fontWeight: string;
        };
        action: {
            justifyContent: string;
            padding: {
                base: "l";
                lg: "var(--nypl-space-l) var(--nypl-space-xxl)";
            };
            width: {
                base: "100%";
                md: "50%";
            };
        };
        form: {
            width: string;
        };
        "#newsletter-form-parent": {
            gridTemplateColumns: {
                base: any;
                lg: string;
            };
            gap: {
                base: string;
                lg: string;
            };
        };
        button: {
            marginTop: {
                base: any;
                lg: string;
            };
            height: string;
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("pitch" | "privacy" | "action")[];
        }>;
    };
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("pitch" | "privacy" | "action")[];
        }>;
    };
    defaultProps?: {
        size?: string | number;
        variant?: string | number;
        colorScheme?: string;
    };
    parts: ("pitch" | "privacy" | "action")[];
};
export default NewsletterSignup;
