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
import { getSectionColors } from "../../helpers/getSectionColors";
import { SectionTypes } from "../../helpers/types";

interface NewsletterSignupProps {
  /** Additional class name to add. */
  className?: string;
  /** Used to add additional information to the default confirmation message in
   * the confirmation view. */
  confirmationText?: string | JSX.Element;
  /** Used to add description text above the form input fields in
   * the initial/form view. Accepts a string or a JSX */
  descriptionText?: string | JSX.Element;
  /** Optional: Used to populate the Text component rendered below the input field. */
  formHelperText?: string | JSX.Element;
  /** A data object containing key/value pairs that will be added to the form
   * field submitted data. */
  hiddenFields?: any;
  /** ID that other components can cross-reference for accessibility purposes */
  id?: string;
  /** Toggles the invalid state for the email field. */
  isInvalidEmail?: boolean;
  /* Optional value to determine the section color highlight */
  newsletterSignupType?: SectionTypes;
  /** A submit handler function that will be called when the form is submitted. */
  onSubmit: (event: React.FormEvent<any>) => void;
  /** A on change handler function for the text input. */
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The value of the email text input field. */
  valueEmail: string;
  /** Used to populate the `<h3>` header title. */
  title: string;
  /** Used to specify what is displayed in the component content area. */
  view?: "form" | "submitting" | "confirmation" | "error";
}

/**
 * The NewsletterSignup component provides a way for patrons to register for an
 * email-based newsletter distribution list.
 *
 * The component can show four different views, depending on the state of the
 * email submission: form, loading, confirmation, and error.
 */
export const NewsletterSignup = chakra(
  forwardRef<any, NewsletterSignupProps>(
    (
      {
        className,
        confirmationText = "Thank you! You have successfully subscribed to our email updates! You can update your email subscription preferences at any time using the links at the bottom of the email.",
        descriptionText = "Stay connected with the latest research news from NYPL, including information about our events, programs, exhibitions, and collections.",
        formHelperText,
        hiddenFields,
        id,
        isInvalidEmail = false,
        newsletterSignupType = "whatsOn",
        onChangeEmail,
        valueEmail,
        onSubmit,
        title = "Sign Up for Our Newsletter!",
        view = "form",
        ...rest
      },
      ref?
    ) => {
      const { isLargerThanMobile } = useNYPLBreakpoints();
      const styles = useStyleConfig("NewsletterSignup", {});
      const iconColor = useColorModeValue(null, "dark.ui.typography.body");

      const displayForm = view === "form" || view === "submitting";

      // Manage focus to ensure accessibility when cofirmation or error message is rendered.
      const focusRef = React.useRef<HTMLDivElement>(null);
      // When view changes, set focus to the confirmation or error content.
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
          <Stack direction={isLargerThanMobile ? "row" : "column"} id={"info"}>
            <Box
              bg={getSectionColors(newsletterSignupType, "primary")}
              id={"color-box"}
              width={isLargerThanMobile ? ".75rem" : null} // @todo Not sure how to adapt this into the theme.ts and have it work the same.
              height={isLargerThanMobile ? null : ".75rem"} // @todo ibid.
            >
              &nbsp;
            </Box>
            <VStack id={"pitch"}>
              <Heading level={"h3"} text={title} />
              <Text>{descriptionText}</Text>
              <Link
                // @TODO I would make this a prop.
                href="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"
                type="external" // @todo The external link icon is slightly smaller in the Figma than the default served up by the Link component. I am unsure if/how to manipulate it.
                id={"privacy"}
              >
                Privacy Policy
              </Link>
            </VStack>
          </Stack>
          <VStack id={"action"}>
            {displayForm && (
              <Form id="newsletter-form" onSubmit={onSubmit}>
                <FormField key={"formfield-input"}>
                  <TextInput
                    id={"email-input"}
                    isRequired
                    invalidText="Please enter a valid email address." // @todo This could be set to helperText value when `if (isInvalid === true)`, allowing devs to set text displayed when bad email.
                    isInvalid={isInvalidEmail}
                    labelText="Email Address"
                    helperText={formHelperText}
                    name={"email"}
                    onChange={onChangeEmail}
                    placeholder="Enter your email address here"
                    type="email"
                    value={valueEmail}
                  />
                </FormField>
                <FormField key={"formfield-button"}>
                  <Button
                    id="submit"
                    isDisabled={view === "submitting"}
                    key="submit"
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
                key="confirmationWrapper"
                margin="auto"
                textAlign="center"
                ref={focusRef}
                tabIndex={-1}
              >
                <Icon
                  color={iconColor}
                  name="actionCheckCircleFilled"
                  size="large"
                />
                <Text fontWeight="medium">{confirmationText}</Text>
              </Box>
            )}
            {view === "error" && (
              <Box
                color="ui.error.primary"
                key="errorWrapper"
                margin="auto"
                textAlign="center"
                ref={focusRef}
                tabIndex={-1}
              >
                <Icon
                  color="ui.error.primary"
                  name="errorFilled"
                  size="large"
                />
                <Text fontWeight="medium">Oops! Something went wrong.</Text>
              </Box>
            )}
          </VStack>
        </Stack>
      );
    }
  )
);

export default NewsletterSignup;
