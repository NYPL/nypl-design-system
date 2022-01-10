import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";
import * as React from "react";

import Button from "../Button/Button";

export interface ModalProps {
  bodyContent?: string;
  buttonText?: string;
  closeButtonLabel?: string;
  headingText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  onCloseHandler?: () => void;
}

const testBodyContent = `Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Tempus quam pellentesque nec nam. Sit amet purus gravida quis blandit
  turpis cursus. Est ante in nibh mauris. Ut faucibus pulvinar
  elementum integer. Mattis ullamcorper velit sed ullamcorper morbi
  tincidunt ornare massa. Consectetur purus ut faucibus pulvinar
  elementum integer enim. Accumsan sit amet nulla facilisi morbi.`;

export function ModalTrigger({
  bodyContent = testBodyContent,
  buttonText,
  closeButtonLabel = "Close",
  headingText,
  id,
  onCloseHandler,
}: React.PropsWithChildren<ModalProps>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalOnCloseHandler = () => {
    onCloseHandler && onCloseHandler;
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen}>{buttonText}</Button>

      <ChakraModal isOpen={isOpen} onClose={onClose} id={id}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headingText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{bodyContent}</ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button onClick={finalOnCloseHandler}>{closeButtonLabel}</Button>
              <Button onClick={() => alert("another action")}>
                Secondary Action
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
}

export function DSModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function Modal({
    bodyContent = testBodyContent,
    closeButtonLabel = "Close",
    headingText,
    id,
    onCloseHandler,
  }: React.PropsWithChildren<ModalProps>) {
    const finalOnCloseHandler = () => {
      onCloseHandler && onCloseHandler;
      onClose();
    };
    return (
      <ChakraModal isOpen={isOpen} onClose={onClose} id={id}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headingText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{bodyContent}</ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button onClick={finalOnCloseHandler}>{closeButtonLabel}</Button>
              <Button onClick={() => alert("another action")}>
                Secondary Action
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    );
  }

  return { onOpen, Modal };
}
