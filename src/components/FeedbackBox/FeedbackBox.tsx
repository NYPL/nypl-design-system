import {
  chakra,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Form, { FormField } from "../Form/Form";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import Radio from "../Radio/Radio";
import RadioGroup from "../RadioGroup/RadioGroup";
import Text from "../Text/Text";
import TextInput from "../TextInput/TextInput";

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
  showCommentField?: boolean;
  showEmailField?: boolean;
  title: string;
  view?: "form" | "confirmation" | "error";
}

/**
 * A wrapper component that renders a `FeedbackBox` element along with a `legend`
 * element as its first child. Commonly used to wrap form components.
 */
export const FeedbackBox = chakra(
  forwardRef<any, FeedbackBoxProps>(
    ({
      // className,
      // confirmationText,
      descriptionText,
      // hiddenFields,
      // id,
      // isInvalidComment,
      // isInvalidEmail,
      // notificationText,
      // onSubmit,
      // showCategoryField,
      // showCommentField,
      // showEmailField,
      title,
      // view,
    }) => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      return (
        <>
          <Button
            id="open"
            onClick={onOpen}
            sx={{
              position: "fixed",
              borderRadius: 0,
              bottom: 0,
              right: 0,
              zIndex: 5,
            }}
          >
            {title}
          </Button>
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement="bottom"
            size="xs"
          >
            <DrawerOverlay />
            <DrawerContent
              marginLeft="auto"
              width={{ base: "100%", md: "500px" }}
            >
              <DrawerHeader
                background="ui.gray.light-cool"
                borderBottomWidth="1px"
                // pl="l"
                // pr="s"
                display="flex"
                alignItems="baseline"
                justifyContent="space-between"
              >
                <Text>{title}</Text>
                <Spacer />
                <Button
                  id="close-btn"
                  onClick={onClose}
                  buttonType="text"
                  width="20px"
                >
                  <Icon color="ui.black" name="minus" />
                  {/* <span>Close</span> */}
                </Button>
              </DrawerHeader>

              <DrawerBody>
                <Text size="caption">{descriptionText}</Text>
                <Form
                  id="feedback-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("submitted");
                  }}
                >
                  <FormField>
                    <RadioGroup
                      defaultValue="comment"
                      id="feedback-type"
                      labelText="What is your feedback about?"
                      layout="row"
                      name="feedback_Type"
                    >
                      <Radio id="comment" labelText="Comment" value="comment" />
                      <Radio
                        id="correction"
                        labelText="Correction"
                        value="correction"
                      />
                      <Radio id="bug" labelText="Bug" value="bug" />
                    </RadioGroup>
                  </FormField>
                  <FormField>
                    <TextInput
                      id="comment"
                      isRequired
                      labelText="Comment"
                      type="textarea"
                      placeholder="Enter your feedback here"
                      helperText="500 chracters remaining"
                    />
                  </FormField>
                  <FormField>
                    <TextInput
                      id="email"
                      labelText="Email"
                      placeholder="Enter your email address here"
                      type="email"
                    />
                  </FormField>
                  <FormField>
                    <Link
                      href="https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy"
                      type="external"
                    >
                      Privacy Policy
                    </Link>
                  </FormField>
                  <FormField>
                    <ButtonGroup buttonWidth="full" id="submit-cancel">
                      <Button id="submit" type="submit">
                        Submit
                      </Button>
                      <Button
                        buttonType="secondary"
                        id="submit"
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                    </ButtonGroup>
                  </FormField>
                </Form>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      );
    }
  )
);

export default FeedbackBox;
