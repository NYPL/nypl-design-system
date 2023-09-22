import {
  Box,
  chakra,
  Stack,
  useColorModeValue,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react";
import React, { forwardRef, useRef, useState } from "react";

import Button from "../Button/Button";
import Form, { FormField } from "../Form/Form";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import Text from "../Text/Text";
import TextInput from "../TextInput/TextInput";
import Heading from "../Heading/Heading";
//import useStateWithDependencies from "../../hooks/useStateWithDependencies";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";
import { getSectionColors } from "../../helpers/getSectionColors";
import { SectionTypes } from "../../helpers/types";

export const newsletterSignupViewTypeArray = [
  "form",
  "confirmation",
  "error",
] as const;
export type NewsletterSignupViewType =
  typeof newsletterSignupViewTypeArray[number];

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
  formHelper?: string;
  /** A data object containing key/value pairs that will be added to the form
   * field submitted data. */
  hiddenFields?: any;
  /** ID that other components can cross-reference for accessibility purposes */
  id?: string;
  /** Toggles the invalid state for the email field. */
  isInvalidEmail?: boolean;
  /* Optional value to determine the section color highlight */
  newsletterSignupType?: SectionTypes;
  /** A callback handler function that will be called when the form is submitted.
   * The function provided must expect an object of key:value pairs. This object will
   * include {email}, being the user's input, plus any objects passed via the hiddenValues prop.
   */
  onSubmit: (values: { [key: string]: string }) => any;
  /** Used to populate the <h3> header title. */
  title: string;
  /** Used to specify what is displayed in the component content area. */
  view?: NewsletterSignupViewType;
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
        hiddenFields,
        id,
        isInvalidEmail = false,
        newsletterSignupType = "whatsOn",
        onSubmit,
        title = "Sign Up for Our Newsletter!",
        view = "form",
        ...rest
      },
      ref?
    ) => {
      // We want to keep internal state for the view but also
      // update if the consuming app updates it, based on API
      // success and failure responses.
      // const [viewType, setViewType] = useStateWithDependencies(view);
      // const [badEmail, setBadEmail] = useStateWithDependencies(isInvalidEmail);
      const [buttonClicked, setButtonClicked] = useState(false);
      const [email, setEmail] = useState("");

      // Hook into NYPL breakpoint
      const { isLargerThanMobile } = useNYPLBreakpoints();
      console.log("view: ", view);
      console.log("signup type: ", newsletterSignupType);
      const focusRef = useRef<HTMLDivElement>(); // @todo Is this needed? It is a holdover from FeedbackBox
      const styles = useStyleConfig("NewsletterSignup", {});
      // This makes it slightly simpler to test for which
      const formView = view === "form";
      const confirmationView = view === "confirmation";
      const errorView = view === "error";

      const iconColor = useColorModeValue(null, "dark.ui.typography.body");

      // let buttonClicked = false;

      // Unused since cancel button removed. Maybe useful later?
      // const closeAndResetForm = () => {
      //   setViewType("form");
      //   clearValues();
      // };

      // Where is this "e" coming from? Is it just magically passed?
      const internalOnSubmit = (e) => {
        e.preventDefault();
        setButtonClicked(true);
        const submittedValues = { email, ...hiddenFields };
        onSubmit(submittedValues); // onSubmit comes from the consuming app

        // If the consuming app does send either a new view or an isInvalidEmail, wait three seconds for either of
        // those values, then just give the confirmation screen.
        // @todo This currently does not work.
        if (view === "form" && !isInvalidEmail) {
          // Wait three seconds. If no return from the onSubmit function, assume the best and show the confirmation screen.
          let timer = setTimeout(() => {
            view = "confirmation";
          }, 3000);
          // console.log(
          //   "viewType:",
          //   viewType,
          //   "view",
          //   view,
          //   "badEmail:",
          //   badEmail,
          //   "isInvalidEmail:",
          //   isInvalidEmail
          // );
          // If the consuming app provides an update sooner than three seconds, cancel the timer.

          // @todo Maybe this is the key?
          // if (view !== viewType || isInvalidEmail !== badEmail) {
          //   setViewType(view); // Note: in the case of isInvalidEmail, this will still be a form
          //   setBadEmail(isInvalidEmail);
          //   setButtonClicked(false); // Only relevant if email address is bad.
          //   console.log("Kill timer", Date.now(), timer);
          //   clearTimeout(timer);
          // }
          console.log("Dead timer", Date.now(), timer);
          return "";
        }
      }; // Close internalOnSubmit

      const privacyPolicy = (
        <Link
          href="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"
          type="external" // @todo The external link icon is slightly smaller in the Figma than the default served up by the Link component. I am unsure if/how to manipulate it.
          id={"privacy"}
        >
          Privacy Policy
        </Link>
      );

      return (
        <Stack
          direction={isLargerThanMobile ? "row" : "column"}
          ref={ref}
          __css={styles}
          {...rest}
        >
          {/* Open info div */}
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
              {privacyPolicy}
            </VStack>
          </Stack>
          {/* Close info div */}
          {/* Begin action div */}
          <VStack id={"action"}>
            {/* Initial form Screen */}
            {console.log("formView?", formView)}
            {formView && (
              <>
                <Form id="newsletter-form" onSubmit={internalOnSubmit}>
                  {/**/}
                  <FormField id={"formfield-input"}>
                    <TextInput
                      id={`${id}-email`}
                      invalidText="Please enter a valid email address."
                      isInvalid={isInvalidEmail}
                      labelText="Email Address"
                      name={`${id}-email`}
                      onChange={(e) => setEmail(e.target.value)} // e.target.value is what the user has input. So when they hit "submit" it will be stored in whatever variable we wish in the setEmail function.
                      placeholder="Enter your email address here"
                      type="email"
                      value={email}
                    />
                  </FormField>
                  <FormField>
                    <Button
                      id="submit"
                      isDisabled={buttonClicked}
                      key="submit"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </FormField>
                </Form>
              </>
            )}

            {/* Confirmation Screen */}
            {confirmationView && (
              <>
                <Box
                  className="feedback-body response"
                  key="confirmationWrapper"
                  margin="auto"
                  tabIndex={0}
                  textAlign="center"
                  ref={focusRef}
                >
                  <Icon
                    color={iconColor}
                    name="actionCheckCircleFilled"
                    size="large"
                  />
                  <Text fontWeight="medium">{confirmationText}</Text>
                </Box>
              </>
            )}
            {/* Error Screen */}
            {errorView && (
              <>
                <Box
                  color="ui.error.primary"
                  key="errorWrapper"
                  margin="auto"
                  tabIndex={0}
                  textAlign="center"
                  ref={focusRef}
                >
                  <Icon
                    color="ui.error.primary"
                    name="errorFilled"
                    size="large"
                  />
                  <Text fontWeight="medium">Oops! Something went wrong.</Text>
                </Box>
              </>
            )}
          </VStack>
          {/* End action div */}
        </Stack>
      );
    }
  )
);

export function useNewsletterSignup() {
  const InternalNewsletterSignup = chakra((props) => {
    return <NewsletterSignup {...props} />;
  });

  return {
    NewsletterSignup: InternalNewsletterSignup,
  };
}

export default NewsletterSignup;
