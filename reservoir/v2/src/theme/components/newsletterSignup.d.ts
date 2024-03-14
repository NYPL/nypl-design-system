import { SectionTypes } from "../../helpers/types";
interface NewsLetterStyleProps {
    newsletterSignupType: SectionTypes;
}
declare const NewsletterSignup: {
    parts: string[];
    baseStyle: ({ newsletterSignupType }: NewsLetterStyleProps) => {
        borderWidth: {
            base: string;
            md: string;
        };
        width: string;
        pitch: {
            alignItems: string;
            bg: string;
            borderLeftColor: {
                md: string | {
                    primary: string;
                    secondary: string;
                };
            };
            borderTopColor: {
                base: string | {
                    primary: string;
                    secondary: string;
                };
                md: string;
            };
            borderWidth: {
                base: string;
                md: string;
            };
            gap: string;
            justifyContent: string;
            width: {
                base: string;
                md: string;
            };
            _dark: {
                bg: string;
                borderTopColor: {
                    md: string;
                };
                borderLeftColor: {
                    md: string | {
                        primary: string;
                        secondary: string;
                    };
                };
            };
            padding: {
                base: string;
                md: string;
                lg: string;
            };
        };
        privacy: {
            fontSize: string;
            fontWeight: string;
        };
        action: {
            justifyContent: string;
            padding: {
                base: string;
                lg: string;
            };
            width: {
                base: string;
                md: string;
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
        };
    };
};
export default NewsletterSignup;
