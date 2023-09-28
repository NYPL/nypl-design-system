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
  /** Optional: Additional class name to add. */
  className?: string;
  /** Optional: Used to override the default confirmation message in the confirmation view. Accepts a string or
   *  an element. */
  confirmationText?: string | JSX.Element;
  /** Optional: Appears below the title to provide details about the newsletter. Accepts a string or an element. */
  descriptionText?: string | JSX.Element;
  /** Optional: Appears below the input field's example text to provide any additional instructions. Accepts a string or
   *  an element. */
  formHelperText?: string | JSX.Element;
  /** Optional: ID that other components can cross-reference for accessibility purposes */
  id?: string;
  /** Optional: Toggles the invalid state for the email field. */
  isInvalidEmail?: boolean;
  /** Optional: Value to determine the section color highlight */
  newsletterSignupType?: SectionTypes;
  /** Required: a handler function that will be called when the form is submitted. */
  onSubmit: (event: React.FormEvent<any>) => void;
  /** Required: a handler function that will be called when the text input changes. */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional: Used to populate the `<h3>` header title. */
  title?: string;
  /** Required: the value of the email text input field. */
  valueEmail: string;
  /** Optional: Used to specify what is displayed in the component form/feedback area. */
  view?: "form" | "submitting" | "confirmation" | "error";
}

const defaultConfirmationText =
  "Thank you! You have successfully subscribed to our email updates! You can update your email subscription preferences at any time using the links at the bottom of the email.";
const defaultDescriptionText =
  "Stay connected with the latest research news from NYPL, including information about our events, programs, exhibitions, and collections.";

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
        confirmationText = defaultConfirmationText,
        descriptionText = defaultDescriptionText,
        formHelperText,
        id,
        isInvalidEmail = false,
        newsletterSignupType = "whatsOn",
        onChange,
        valueEmail = "",
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
                // @TODO I would make this a prop -- WL.
                href="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"
                type="external" // @todo The external link icon is slightly smaller in the Figma than the default served up by the Link component. I am unsure if/how to manipulate it.
                id={"privacy"}
              >
                Privacy Policy
              </Link>
            </VStack>
          </Stack>
          <VStack id={"action"}>
            {isFormView && (
              <Form id="newsletter-form" onSubmit={onSubmit}>
                <FormField key={"formfield-input"}>
                  <TextInput
                    id={"email-input"}
                    isRequired
                    invalidText="Please enter a valid email address." // This text is boilerplate and not meant to be customized.
                    isInvalid={isInvalidEmail}
                    labelText="Email Address"
                    helperText={formHelperText}
                    name={"email"}
                    onChange={onChange}
                    placeholder="Enter your email address here"
                    type="email"
                    value={valueEmail}
                  />
                </FormField>
                <FormField key={"formfield-button"}>
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
