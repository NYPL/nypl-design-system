import {
  Box,
  chakra,
  Stack,
  useColorModeValue,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react";
import React, { forwardRef, useEffect, useRef, useState } from "react";

import Button from "../Button/Button";
import Form, { FormField } from "../Form/Form";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import Text from "../Text/Text";
import TextInput from "../TextInput/TextInput";
import Heading from "../Heading/Heading";
import useStateWithDependencies from "../../hooks/useStateWithDependencies";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";
import useNewsletterSignupReducer from "./useNewsletterSignupReducer";
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
   * the initial/form view. */
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
  /** Callback function that will be invoked when the form is submitted.
   * The returned data object contains key/value pairs including the
   * values from the `hiddenFields` prop.
   */
  onSubmit: (values: { [key: string]: string }) => any;
  /* Used to populate the <h3> header title. */
  title: string;
  /** Used to specify what screen should be displayed. */
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
      const [viewType, setViewType] = useStateWithDependencies(view);
      const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
      // Helps keep track of form field state values.
      const { state, setEmail, clearValues } = useNewsletterSignupReducer();
      // Hook into NYPL breakpoint
      const { isLargerThanMobile } = useNYPLBreakpoints();

      const focusRef = useRef<HTMLDivElement>();
      const styles = useStyleConfig("NewsletterSignup", {});
      const isFormView = viewType === "form";
      const isConfirmationView = viewType === "confirmation";
      const isErrorView = viewType === "error";
      const confirmationTimeout = 3000;
      const iconColor = useColorModeValue(null, "dark.ui.typography.body");

      let buttonClicked = false;

      // Unused since cancel button removed. Maybe useful later?
      // const closeAndResetForm = () => {
      //   setViewType("form");
      //   clearValues();
      // };
      const internalOnSubmit = (e) => {
        e.preventDefault();
        let submittedValues = { ...state };
        if (hiddenFields) {
          submittedValues = { ...submittedValues, ...hiddenFields };
        }
        onSubmit && onSubmit(submittedValues);
        buttonClicked = true;
      };

      const privacyPolicy = (
        <Link
          href="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"
          type="external" // @todo The external link icon is slightly smaller in the Figma than the default served up by the Link component. I am unsure if/how to manipulate it.
          id={"privacy"}
        >
          Privacy Policy
        </Link>
      );

      // When the submit button is clicked, set a timeout before displaying
      // the confirmation or error screen. This automatically goes to the
      // confirmation view after three (3) seconds, but the consuming app
      // can set the error view if there are any issues.
      useEffect(() => {
        console.log(buttonClicked);
        // START Move this chunk directly into onSubmit function and forget this whole useEffect thing.
        let timer;
        if (buttonClicked) {
          // If the consuming app does not provide any updates based
          // on its API response, go to confirmation screen.
          timer = setTimeout(() => {
            setIsSubmitted(false);
            if (isErrorView) {
              setViewType("error");
            } else {
              setViewType("confirmation");
            }
            clearValues();
          }, confirmationTimeout);

          // If the consuming app does pass the API response to the
          // component, then cancel the timeout above and display the
          // appropriate screen.
          if (view !== viewType) {
            setIsSubmitted(false);
            setViewType(view);
            clearTimeout(timer);
          }
        }

        return () => clearTimeout(timer); // END
      }, [
        clearValues,
        isErrorView,
        isSubmitted,
        setViewType,
        view,
        viewType,
        buttonClicked,
      ]);

      // Do we need to focus on the [whatever]?

      // Delay focusing on the confirmation or error message
      // because it's an element that dynamically gets rendered,
      // so it is not always available in the DOM.
      useEffect(() => {
        let timer;
        if (viewType === "error" || viewType === "confirmation") {
          timer = setTimeout(() => {
            focusRef?.current?.focus();
          }, 250);
        }
        return () => clearTimeout(timer);
      }, [focusRef, viewType]);

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
            {isFormView && (
              <>
                <Form id="newsletter-form" onSubmit={internalOnSubmit}>
                  <FormField id={"formfield-input"}>
                    <TextInput
                      id={`${id}-email`}
                      invalidText="Please enter a valid email address."
                      isInvalid={isInvalidEmail}
                      labelText="Email Address"
                      name={`${id}-email`}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address here"
                      type="email"
                      value={state.email}
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
            {isConfirmationView && (
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
                  <Text fontWeight="medium">
                    Thank you for submitting your feedback.
                  </Text>
                  {confirmationText ? (
                    <Text>{confirmationText}</Text>
                  ) : undefined}
                </Box>
              </>
            )}
            {/* Error Screen */}
            {isErrorView && (
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
        // <Box className={className} id={id} ref={ref} sx={styles} {...rest}>
        //   <Form
        //     gap="grid.s"
        //     id="feedback-form"
        //     onSubmit={internalOnSubmit}
        //     sx={{
        //       ".feedback-body": {
        //         alignItems: "flex-start",
        //         minHeight: finalDrawerMinHeight,
        //         gridTemplateRows: initTemplateRows,
        //       },
        //       ".feedback-body.response": {
        //         alignItems: "center",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "center",
        //       },
        //     }}
        //   >
        //     {/* Initial form Screen */}
        //     {isFormView && (
        //       <>
        //         <VStack className="feedback-body" spacing="s">
        //           <Heading level={"h3"} text={title} />
        //           {descriptionElement && <>{descriptionElement}</>}
        //           {privacyPolicyField}
        //           {/*Email Field*/}
        //           <FormField width="100%">
        //             <TextInput
        //               id={`${id}-email`}
        //               invalidText="Please enter a valid email address."
        //               isDisabled={isSubmitted}
        //               isInvalid={isInvalidEmail}
        //               labelText="Email Address"
        //               name={`${id}-email`}
        //               onChange={(e) => setEmail(e.target.value)}
        //               placeholder="Enter your email address here"
        //               type="email"
        //               value={state.email}
        //             />
        //           </FormField>
        //           <FormField>
        //             <Button
        //               id="submit"
        //               isDisabled={isSubmitted}
        //               key="submit"
        //               type="submit"
        //             >
        //               Submit
        //             </Button>
        //           </FormField>
        //         </VStack>
        //       </>
        //     )}
        //
        //     {/* Confirmation Screen */}
        //     {isConfirmationView && (
        //       <>
        //         <Box
        //           className="feedback-body response"
        //           key="confirmationWrapper"
        //           margin="auto"
        //           tabIndex={0}
        //           textAlign="center"
        //           ref={focusRef}
        //         >
        //           <Icon
        //             color={iconColor}
        //             name="actionCheckCircleFilled"
        //             size="large"
        //           />
        //           <Text fontWeight="medium">
        //             Thank you for submitting your feedback.
        //           </Text>
        //           {confirmationText ? (
        //             <Text>{confirmationText}</Text>
        //           ) : undefined}
        //         </Box>
        //         {privacyPolicyField}
        //       </>
        //     )}
        //
        //     {/* Error Screen */}
        //     {isErrorView && (
        //       <>
        //         <Box
        //           className="feedback-body response"
        //           color="ui.error.primary"
        //           key="errorWrapper"
        //           margin="auto"
        //           tabIndex={0}
        //           textAlign="center"
        //           ref={focusRef}
        //         >
        //           <Icon
        //             color="ui.error.primary"
        //             name="errorFilled"
        //             size="large"
        //           />
        //           <Text fontWeight="medium">
        //             Oops! Something went wrong. An error occurred while
        //             processing your feedback.
        //           </Text>
        //         </Box>
        //         {privacyPolicyField}
        //         <FormField>
        //           <Button
        //             id="try-again"
        //             key="try-again"
        //             onClick={() => setViewType("form")}
        //           >
        //             Try Again
        //           </Button>
        //         </FormField>
        //       </>
        //     )}
        //   </Form>
        // </Box>
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
