import {
  Box,
  chakra,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Spacer,
  useDisclosure,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useEffect, useState } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Form, { FormField } from "../Form/Form";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import Notification from "../Notification/Notification";
import Radio from "../Radio/Radio";
import RadioGroup from "../RadioGroup/RadioGroup";
import Text from "../Text/Text";
import TextInput from "../TextInput/TextInput";

type ViewType = "form" | "confirmation" | "error";

interface FeedbackBoxProps {
  /** Additional class name to add. */
  className?: string;
  confirmationText?: string | JSX.Element;
  descriptionText?: string | JSX.Element;
  hiddenFields?: any;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  isInvalidComment?: boolean;
  isInvalidEmail?: boolean;
  notificationText?: string | JSX.Element;
  onSubmit: any;
  showCategoryField?: boolean;
  showEmailField?: boolean;
  title: string;
  view?: ViewType;
}

const defaultConfirmationText = (
  <>
    <Text isBold>Thank you for submitting your feedback!</Text>
    <Text>
      If you provided an email address and require a response, our service staff
      will reach out to you via email.
    </Text>
  </>
);
const defaultErrorText = (
  <Text isBold>
    Oops! Something went wrong. An error occured while processing your feedback.
  </Text>
);

function useStateWithDep(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return [value, setValue];
}

/**
 */
export const FeedbackBox = chakra(
  forwardRef<any, FeedbackBoxProps>(
    (
      {
        className,
        confirmationText = defaultConfirmationText,
        descriptionText,
        hiddenFields,
        id = "feedbackbox",
        isInvalidComment = false,
        isInvalidEmail = false,
        notificationText,
        onSubmit,
        showCategoryField = false,
        showEmailField = false,
        title,
        view = "form",
      },
      ref?
    ) => {
      const [viewType, setViewType] = useStateWithDep(view);
      const [categoryValue, setCategoryValue] = useState<string>("comment");
      const [commentValue, setCommentValue] = useState<string>("");
      const [emailValue, setEmailValue] = useState<string>("");
      const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
      const { isOpen, onOpen, onClose } = useDisclosure();
      const isViewForm = viewType === "form";
      const isViewConfirmation = viewType === "confirmation";
      const isViewError = viewType === "error";
      const styles = useMultiStyleConfig("FeedbackBox", {});
      const commentOnChange = (e) => {
        setCommentValue(e.target.value);
      };
      const maxCommentCharacters = 500;
      const closeAndResetForm = () => {
        onClose();
        setViewType("form");
        setCategoryValue("comment");
        setCommentValue("");
        setEmailValue("");
      };
      const internalOnSubmit = (e) => {
        e.preventDefault();
        const submittedValues = {
          category: categoryValue,
          comment: commentValue,
          email: emailValue,
        };
        if (hiddenFields) {
          submittedValues["hiddenFields"] = hiddenFields;
        }

        onSubmit && onSubmit(submittedValues);
        setIsSubmitted(true);
      };
      const notificationElement =
        isViewForm && notificationText ? (
          <Notification
            isCentered
            noMargin
            notificationContent={notificationText}
            showIcon={false}
            marginTop="s"
            marginBottom="s"
          />
        ) : undefined;
      const descriptionElement =
        isViewForm && descriptionText ? (
          <Text size="caption">{descriptionText}</Text>
        ) : undefined;
      const privacyPolicyField = (
        <FormField>
          <Link
            href="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"
            type="external"
            fontSize="text.caption"
          >
            Privacy Policy
          </Link>
        </FormField>
      );

      // When the submit button is clicked, set a timeout before
      // viewing the confirmation or error screen. This automatically
      // goes to the confirmation view, but the consuming app
      // can set the error view if there are any issues.
      useEffect(() => {
        let timer;
        if (isSubmitted) {
          timer = setTimeout(() => {
            setIsSubmitted(false);
            if (isViewError) {
              setViewType("error");
            } else {
              setViewType("confirmation");
            }
            setCategoryValue("comment");
            setCommentValue("");
            setEmailValue("");
          }, 3000);
        }

        return () => clearTimeout(timer);
      }, [isSubmitted, setViewType, isViewError]);

      return (
        <Box className={className} id={id} ref={ref} sx={styles}>
          <Button id="open" onClick={onOpen} sx={styles.openButton}>
            {title}
          </Button>

          <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
            {/* Adds the opaque background. */}
            <DrawerOverlay />

            <DrawerContent sx={styles.drawerContent}>
              <DrawerHeader sx={styles.drawerHeader}>
                <Text>{title}</Text>
                <Spacer />
                <Button
                  buttonType="text"
                  id="close-btn"
                  onClick={onClose}
                  sx={styles.closeButton}
                >
                  <Icon color="ui.black" name="minus" size="medium" />
                  <span>Close {title}</span>
                </Button>
              </DrawerHeader>

              <DrawerBody sx={styles.drawerBody}>
                {notificationElement}
                {descriptionElement}

                <Form
                  gap="grid.s"
                  id="feedback-form"
                  onSubmit={internalOnSubmit}
                >
                  {/* Initial form Screen */}
                  {isViewForm && (
                    <>
                      {showCategoryField && (
                        <FormField>
                          <RadioGroup
                            defaultValue={categoryValue}
                            id={`${id}-category`}
                            isDisabled={isSubmitted}
                            labelText="What is your feedback about?"
                            layout="row"
                            name={`${id}-category`}
                            onChange={(selected) => setCategoryValue(selected)}
                          >
                            <Radio
                              id="comment"
                              labelText="Comment"
                              value="comment"
                            />
                            <Radio
                              id="correction"
                              labelText="Correction"
                              value="correction"
                            />
                            <Radio id="bug" labelText="Bug" value="bug" />
                          </RadioGroup>
                        </FormField>
                      )}
                      <FormField>
                        <TextInput
                          helperText={`${
                            maxCommentCharacters - commentValue.length
                          } characters remaining`}
                          id={`${id}-comment`}
                          invalidText="Please fill out this field."
                          isDisabled={isSubmitted}
                          isInvalid={isInvalidComment}
                          isRequired
                          labelText="Comment"
                          maxLength={maxCommentCharacters}
                          name={`${id}-comment`}
                          onChange={commentOnChange}
                          placeholder="Enter your question or feedback here"
                          type="textarea"
                          defaultValue={commentValue}
                        />
                      </FormField>
                      {showEmailField && (
                        <FormField>
                          <TextInput
                            id={`${id}-email`}
                            invalidText="Please enter a valid email address."
                            isDisabled={isSubmitted}
                            isInvalid={isInvalidEmail}
                            labelText="Email"
                            name={`${id}-email`}
                            onChange={(e) => setEmailValue(e.target.value)}
                            placeholder="Enter your email address here"
                            type="email"
                            value={emailValue}
                          />
                        </FormField>
                      )}
                      {privacyPolicyField}
                      <FormField>
                        <ButtonGroup buttonWidth="full" id="submit-cancel">
                          <Button
                            id="submit"
                            isDisabled={isSubmitted}
                            key="submit"
                            type="submit"
                          >
                            Submit
                          </Button>
                          <Button
                            buttonType="secondary"
                            id="cancel"
                            isDisabled={isSubmitted}
                            key="cancel"
                            onClick={closeAndResetForm}
                          >
                            Cancel
                          </Button>
                        </ButtonGroup>
                      </FormField>
                    </>
                  )}

                  {/* Confirmation Screen */}
                  {isViewConfirmation && (
                    <>
                      <Box textAlign="center">
                        <Icon name="actionCheckCircleFilled" size="large" />
                        {confirmationText}
                      </Box>
                      {privacyPolicyField}
                      <FormField>
                        <ButtonGroup buttonWidth="full" id="submit-cancel">
                          <Button
                            id="return-browsing"
                            buttonType="secondary"
                            onClick={closeAndResetForm}
                          >
                            Return to Browsing
                          </Button>
                        </ButtonGroup>
                      </FormField>
                    </>
                  )}

                  {/* Error Screen */}
                  {isViewError && (
                    <>
                      <Box textAlign="center" color="ui.error.primary">
                        <Icon
                          color="ui.error.primary"
                          name="errorFilled"
                          size="large"
                        />
                        {defaultErrorText}
                      </Box>
                      {privacyPolicyField}
                      <FormField>
                        <ButtonGroup buttonWidth="full" id="submit-cancel">
                          <Button
                            id="try-again"
                            key="try-again"
                            onClick={() => setViewType("form")}
                          >
                            Try Again
                          </Button>
                          <Button
                            id="return-browsing2"
                            key="return-browsing2"
                            buttonType="secondary"
                            onClick={closeAndResetForm}
                          >
                            Return to Browsing
                          </Button>
                        </ButtonGroup>
                      </FormField>
                    </>
                  )}
                </Form>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      );
    }
  )
);

export default FeedbackBox;
