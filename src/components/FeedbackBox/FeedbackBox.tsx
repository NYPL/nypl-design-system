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
  <Box textAlign="center">
    <Text isBold>Thank you for submitting your feedback!</Text>
    <Text>
      If you provided an email address and require a response, our service staff
      will reach out to you via email.
    </Text>
  </Box>
);
const defaultErrorText = (
  <Text isBold color="ui.error.primary" textAlign="center">
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
 * A wrapper component that renders a `FeedbackBox` element along with a `legend`
 * element as its first child. Commonly used to wrap form components.
 */
export const FeedbackBox = chakra(
  forwardRef<any, FeedbackBoxProps>(
    (
      {
        className,
        confirmationText = defaultConfirmationText,
        descriptionText,
        // hiddenFields,
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
      const [tryAgain, setTryAgain] = useState<boolean>(false);
      const [viewType, setViewType] = useStateWithDep(view);
      const [categoryValue, setCategoryValue] = useState<string>("comment");
      const [commentValue, setCommentValue] = useState<string>("");
      const [emailValue, setEmailValue] = useState<string>("");
      const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
      const { isOpen, onOpen, onClose } = useDisclosure();
      const styles = useMultiStyleConfig("FeedbackBox", {});
      const commentOnChange = (e) => {
        setCommentValue(e.target.value);
      };
      const maxCommentChars = 500;

      useEffect(() => {
        if (tryAgain) {
          setViewType("form");
          setTryAgain(false);
        }
      }, [tryAgain, setViewType]);
      useEffect(() => {
        let timer;
        if (isSubmitted) {
          timer = setTimeout(() => {
            setIsSubmitted(false);
            setViewType("confirmation");
            setCategoryValue("comment");
            setCommentValue("");
            setEmailValue("");
          }, 3000);
        }
        return () => clearTimeout(timer);
      }, [isSubmitted, setViewType]);

      const closeAndResetForm = () => {
        onClose();
        setViewType("form");
        setCategoryValue("comment");
        setCommentValue("");
        setEmailValue("");
      };

      return (
        <Box className={className} id={id} ref={ref} sx={styles}>
          <Button id="open" onClick={onOpen} sx={styles.openBtn}>
            {title}
          </Button>
          <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
            <DrawerOverlay />
            <DrawerContent sx={styles.content}>
              <DrawerHeader sx={styles.header}>
                <Text>{title}</Text>
                <Spacer />
                <Button
                  buttonType="text"
                  id="close-btn"
                  onClick={onClose}
                  sx={styles.closeBtn}
                >
                  <Icon color="ui.black" name="minus" size="medium" />
                  <span>Close {title}</span>
                </Button>
              </DrawerHeader>

              <DrawerBody sx={styles.body}>
                {notificationText && viewType === "form" && (
                  <Notification
                    isCentered
                    noMargin
                    notificationContent={notificationText}
                    showIcon={false}
                    mt="s"
                    mb="s"
                  />
                )}
                {viewType === "form" && (
                  <Text size="caption">{descriptionText}</Text>
                )}
                <Form
                  gap="grid.s"
                  id="feedback-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                    console.log(categoryValue);
                    console.log(commentValue);
                    console.log(emailValue);
                    // {
                    //   category: categoryValue,
                    //   comment: commentValue,
                    //   email: emailValue
                    // }
                    // add hiddenfields

                    onSubmit && onSubmit();
                  }}
                >
                  {viewType === "form" && (
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
                            maxCommentChars - commentValue.length
                          } characters remaining`}
                          id={`${id}-comment`}
                          invalidText="Please fill out this field."
                          isDisabled={isSubmitted}
                          isInvalid={isInvalidComment}
                          isRequired
                          labelText="Comment"
                          maxLength={maxCommentChars}
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
                    </>
                  )}
                  {viewType === "confirmation" && (
                    <Box textAlign="center">
                      <Icon name="actionCheckCircleFilled" size="large" />
                      {confirmationText}
                    </Box>
                  )}
                  {viewType === "error" && (
                    <Box textAlign="center">
                      <Icon
                        color="ui.error.primary"
                        name="errorFilled"
                        size="large"
                      />
                      {defaultErrorText}
                    </Box>
                  )}
                  <FormField>
                    <Link
                      href="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"
                      type="external"
                      fontSize="text.caption"
                    >
                      Privacy Policy
                    </Link>
                  </FormField>
                  <FormField>
                    {viewType === "form" && (
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
                    )}
                    {viewType === "confirmation" && (
                      <ButtonGroup buttonWidth="full" id="submit-cancel">
                        <Button
                          id="return-browsing"
                          buttonType="secondary"
                          onClick={closeAndResetForm}
                        >
                          Return to Browsing
                        </Button>
                      </ButtonGroup>
                    )}
                    {viewType === "error" && (
                      <ButtonGroup buttonWidth="full" id="submit-cancel">
                        <Button
                          id="try-again"
                          key="try-again"
                          onClick={() => setTryAgain(true)}
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
                    )}
                  </FormField>
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
