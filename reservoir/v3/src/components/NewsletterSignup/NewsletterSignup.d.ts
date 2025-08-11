import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export interface NewsletterSignupProps {
  /** Additional class name to add. */
  className?: string;
  /** Text displayed next to the confirmation icon after a successful email submission */
  confirmationHeading: string;
  /** Detail text for the confirmation view */
  confirmationText?: string | JSX.Element;
  /** Appears below the title to provide details about the newsletter. Accepts a string or an element. */
  descriptionText?: string | JSX.Element;
  /** Text displayed next to the error icon in case of an error in the email submission process*/
  errorHeading: string;
  /** Appears below the title to provide details about next steps in case of an error. Accepts a string or an element. */
  errorText?: string | JSX.Element;
  /** Appears below the input field's example text to provide any additional instructions. Accepts a string or
   *  an element. */
  formHelperText?: string | JSX.Element;
  /** ID that other components can cross-reference for accessibility purposes */
  id?: string;
  /** Toggles the invalid state for the email field. */
  isInvalidEmail?: boolean;
  /** Value to determine the section color highlight.
   */
  highlightColor?: HighlightColorTypes;
  /** A handler function that will be called when the form is submitted. */
  onSubmit: (event: React.FormEvent<any>) => void;
  /** A handler function that will be called when the text input changes. */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Gives option to remove the default Privacy Link if a custom one is provided
   * NOTE: A Privacy Policy link should always be included.
   */
  showPrivacyLink?: boolean;
  /** Link to the relevant privacy policy page. */
  privacyPolicyLink?: string;
  /** Sets the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  title: JSX.Element | string;
  /** The value of the email text input field. */
  valueEmail?: string;
  /** Used to specify what is displayed in the component form/feedback area. */
  view?: NewsletterSignupViewType;
}
export declare const highlightColorTypesArray: readonly [
  "ui.gray.medium",
  "section.blogs.secondary",
  "section.books-and-more.primary",
  "brand.primary",
  "section.connect.primary",
  "section.education.primary",
  "section.locations.primary",
  "section.research.primary",
  "section.research-library.lpa",
  "section.research-library.schomburg",
  "section.research-library.schwartzman",
  "section.whats-on.primary"
];
export type HighlightColorTypes = typeof highlightColorTypesArray[number];
export type NewsletterSignupViewType =
  | "form"
  | "submitting"
  | "confirmation"
  | "error";
/**
 * The NewsletterSignup component provides a way for patrons to register for an
 * email-based newsletter distribution list.
 */
export declare const NewsletterSignup: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<NewsletterSignupProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<NewsletterSignupProps>
>;
export default NewsletterSignup;
