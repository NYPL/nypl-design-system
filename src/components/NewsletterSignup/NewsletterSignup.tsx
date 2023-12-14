import {
  Box,
  chakra,
  Stack,
  useColorModeValue,
  useMultiStyleConfig,
  VStack,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Button from "../Button/Button";
import Form, { FormField } from "../Form/Form";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import Text from "../Text/Text";
import TextInput from "../TextInput/TextInput";
import Heading from "../Heading/Heading";
import useDSHeading from "../../hooks/useDSHeading";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";
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

export type NewsletterSignupViewType =
  | "form"
  | "submitting"
  | "confirmation"
  | "error";

const defaultDescriptionText =
  "Stay connected with the latest research news from NYPL, including information about our events, programs, " +
  "exhibitions, and collections.";
const defaultTitle = (
  <Heading noSpace size="heading3" text="Sign Up for Our Newsletter" />
);

/**
 * The NewsletterSignup component provides a way for patrons to register for an
 * email-based newsletter distribution list.
 */
export const NewsletterSignup = chakra(
  forwardRef<HTMLDivElement, NewsletterSignupProps>(
    (
      {
        className,
        confirmationHeading,
        confirmationText,
        descriptionText = defaultDescriptionText,
        errorHeading = "Oops! Something went wrong.",
        errorText,
        formHelperText,
        id,
        isInvalidEmail = false,
        newsletterSignupType = "blogs",
        onChange,
        onSubmit,
        privacyPolicyLink = "https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy",
        valueEmail,
        title,
        view = "form",
        ...rest
      },
      ref?
    ) => {
      const { isLargerThanMobile } = useNYPLBreakpoints();
      const styles = useMultiStyleConfig("NewsletterSignup", {
        newsletterSignupType,
      });
      const iconColor = useColorModeValue(null, "dark.ui.typography.body");
      const errorColor = useColorModeValue(
        "ui.error.primary",
        "dark.ui.error.primary"
      );
      const isFormView = view === "form" || view === "submitting";
      const finalTitle = useDSHeading({
        title,
        id,
        customDefaultHeading: defaultTitle,
      });

      // Manage focus to ensure accessibility when confirmation or error message is rendered.
      const focusRef = React.useRef<HTMLDivElement>(null);
      // When view prop changes, set focus to the confirmation or error content element.
      React.useEffect(() => {
        focusRef.current?.focus();
      }, [view]);
      return (
        <Stack
          direction={isLargerThanMobile ? "row" : "column"}
          ref={ref}
          __css={styles}
          {...rest}
        >
          <VStack __css={styles.pitch} alignItems="flex-start">
            {finalTitle}
            {descriptionText ? (
              typeof descriptionText === "string" ? (
                <Text noSpace size="body2">
                  {descriptionText}
                </Text>
              ) : (
                descriptionText
              )
            ) : null}

            <Link
              href={privacyPolicyLink}
              type="external"
              isUnderlined={false}
              __css={styles.privacy}
            >
              Privacy Policy
            </Link>
          </VStack>
          <VStack __css={styles.action}>
            {isFormView && (
              <Form id="newsletter-form" onSubmit={onSubmit}>
                <FormField key="formfield-input">
                  <TextInput
                    id="email-input"
                    isDisabled={view === "submitting"}
                    isRequired
                    invalidText="Please enter a valid email address."
                    isInvalid={isInvalidEmail}
                    labelText="Email Address"
                    helperText={formHelperText}
                    name="email"
                    onChange={onChange}
                    placeholder="Enter your email address"
                    type="email"
                    value={valueEmail}
                  />
                </FormField>
                <FormField key="formfield-button">
                  <Button
                    id="submit"
                    isDisabled={view === "submitting"}
                    type="submit"
                  >
                    Submit
                  </Button>
                </FormField>
              </Form>
            )}
            {view === "confirmation" && (
              <Box
                className="feedback-body response"
                margin="auto"
                ref={focusRef}
                tabIndex={-1}
                width="100%"
              >
                <Box
                  display="flex"
                  marginBottom="xs"
                  alignItems={{ md: "center" }}
                >
                  <Icon
                    color={iconColor}
                    name="actionCheckCircleFilled"
                    size="large"
                  />
                  <Text
                    size="subtitle1"
                    marginStart="xs"
                    marginBottom="unset"
                    fontWeight="medium"
                  >
                    {confirmationHeading}
                  </Text>
                </Box>
                <Text noSpace size="body2">
                  {confirmationText}
                </Text>
              </Box>
            )}
            {view === "error" && (
              <Box
                className="feedback-body response"
                margin="auto"
                ref={focusRef}
                tabIndex={-1}
                width="100%"
              >
                <Box
                  display="flex"
                  marginBottom="xs"
                  alignItems={{ md: "center" }}
                >
                  <Icon color={errorColor} name="errorFilled" size="large" />
                  <Text
                    color={errorColor}
                    size="subtitle1"
                    marginStart="xs"
                    marginBottom="unset"
                    fontWeight="medium"
                  >
                    {errorHeading}
                  </Text>
                </Box>
                {errorText ? (
                  typeof errorText === "string" ? (
                    <Text noSpace size="body2">
                      {errorText}
                    </Text>
                  ) : (
                    errorText
                  )
                ) : null}
              </Box>
            )}
          </VStack>
        </Stack>
      );
    }
  )
);

export default NewsletterSignup;
