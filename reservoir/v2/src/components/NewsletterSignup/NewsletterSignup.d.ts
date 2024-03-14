import React from "react";
import { SectionTypes } from "../../helpers/types";
interface NewsletterSignupProps {
    /** Additional class name to add. */
    className?: string;
    /** Text displayed next to the confirmation icon after a successful email submission */
    confirmationHeading: string;
    /** Detail text for the confirmation view */
    confirmationText: string;
    /** Appears below the title to provide details about the newsletter. Accepts a string or an element. */
    descriptionText?: string | JSX.Element;
    /** Text displayed next to the error icon in case of an error in the email submission process*/
    errorHeading?: string;
    /** Appears below the title to provide details about next steps in case of an error. Accepts a string or an element. */
    errorText?: string | JSX.Element;
    /** Appears below the input field's example text to provide any additional instructions. Accepts a string or
     *  an element. */
    formHelperText?: string | JSX.Element;
    /** ID that other components can cross-reference for accessibility purposes */
    id?: string;
    /** Toggles the invalid state for the email field. */
    isInvalidEmail?: boolean;
    /** Value to determine the section color highlight. The default is set to "blogs" as it uses the
     * "ui.border.deafult" color.
     */
    newsletterSignupType?: SectionTypes;
    /** A handler function that will be called when the form is submitted. */
    onSubmit: (event: React.FormEvent<any>) => void;
    /** A handler function that will be called when the text input changes. */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Link to the relevant privacy policy page. */
    privacyPolicyLink?: string;
    /** Optional string value used to set the text for a `Heading` component, or
     * a DS Heading component that can be passed in.
     */
    title?: JSX.Element | string;
    /** The value of the email text input field. */
    valueEmail?: string;
    /** Used to specify what is displayed in the component form/feedback area. */
    view?: NewsletterSignupViewType;
}
export type NewsletterSignupViewType = "form" | "submitting" | "confirmation" | "error";
/**
 * The NewsletterSignup component provides a way for patrons to register for an
 * email-based newsletter distribution list.
 */
export declare const NewsletterSignup: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<NewsletterSignupProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default NewsletterSignup;
