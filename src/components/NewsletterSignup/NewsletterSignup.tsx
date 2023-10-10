import {
  Box,
  chakra,
  Stack,
  useColorModeValue,
  useStyleConfig,
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
  /** Appears below the input field's example text to provide any additional instructions. Accepts a string or
   *  an element. */
  formHelperText?: string | JSX.Element;
  /** ID that other components can cross-reference for accessibility purposes */
  id?: string;
  /** Toggles the invalid state for the email field. */
  isInvalidEmail?: boolean;
  /** Value to determine the section color highlight */
  newsletterSignupType?: SectionTypes;
  /** A handler function that will be called when the form is submitted. */
  onSubmit: (event: React.FormEvent<any>) => void;
  /** A handler function that will be called when the text input changes. */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Link to the relevant privacy policy page. */
  privacyPolicyLink?: string;
  /** Used to populate the `<h3>` header title. */
  title?: string;
  /** The value of the email text input field. */
  valueEmail?: string;
  /** Used to specify what is displayed in the component form/feedback area. */
  view?: "form" | "submitting" | "confirmation" | "error";
}

const defaultDescriptionText =
  "Stay connected with the latest research news from NYPL, including information about our events, programs, " +
  "exhibitions, and collections.";

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
        formHelperText,
        id,
        isInvalidEmail = false,
        newsletterSignupType = "whatsOn",
        onChange,
        onSubmit,
        privacyPolicyLink = "https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy",
        valueEmail,
        title = "Sign Up for Our Newsletter!",
        view = "form",
        ...rest
      },
      ref?
    ) => {
      const { isLargerThanMobile } = useNYPLBreakpoints();
      const styles = useStyleConfig("NewsletterSignup", {
        newsletterSignupType,
      });
      const iconColor = useColorModeValue(null, "dark.ui.typography.body");

      const isFormView = view === "form" || view === "submitting";

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
          <VStack id="pitch">
            {title && <Heading level="h3" text={title} />}
            {descriptionText ? (
              typeof descriptionText === "string" ? (
                <Text>{descriptionText}</Text>
              ) : (
                descriptionText
              )
            ) : null}

            <Link href={privacyPolicyLink} type="external" id="privacy">
              Privacy Policy
            </Link>
          </VStack>
          <VStack id="action">
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
                tabIndex={0}
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
                    fontSize="xl"
                    marginStart="xs"
                    marginBottom="unset"
                    fontWeight="medium"
                  >
                    {confirmationHeading}
                  </Text>
                </Box>
                <Text>{confirmationText}</Text>
              </Box>
            )}
            {view === "error" && (
              <Box
                display="flex"
                color="ui.error.primary"
                ref={focusRef}
                tabIndex={0}
                alignItems={{ md: "center" }}
                width="full"
              >
                <Icon
                  color="ui.error.primary"
                  name="errorFilled"
                  size="large"
                />
                {/* This text is boilerplate and not meant to be customized. */}
                <Text
                  fontSize="xl"
                  marginStart="xs"
                  marginBottom="unset"
                  fontWeight="medium"
                >
                  Oops! Something went wrong.
                </Text>
              </Box>
            )}
          </VStack>
        </Stack>
      );
    }
  )
);

export default NewsletterSignup;
