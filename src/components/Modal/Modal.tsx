import {
  chakra,
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

interface BaseModalProps {
  bodyContent?: string;
  closeButtonLabel?: string;
  headingText?: string;
  onCloseHandler?: () => void;
}

export interface ModalProps {
  buttonText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  modalProps: BaseModalProps;
}

export const ModalTrigger = chakra(
  ({
    buttonText,
    id,
    modalProps,
    ...rest
  }: React.PropsWithChildren<ModalProps>) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalOnCloseHandler = () => {
      modalProps.onCloseHandler && modalProps.onCloseHandler();
      onClose();
    };
    return (
      <>
        <Button id="modal-open-btn" onClick={onOpen}>
          {buttonText}
        </Button>

        <ChakraModal isOpen={isOpen} onClose={onClose} id={id} {...rest}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalProps.headingText}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{modalProps.bodyContent}</ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <Button id="modal-close-btn" onClick={finalOnCloseHandler}>
                  {modalProps.closeButtonLabel || "Close"}
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </ChakraModal>
      </>
    );
  }
);

export function useModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Modal = chakra(
    ({ id, modalProps, ...rest }: React.PropsWithChildren<ModalProps>) => {
      const finalOnCloseHandler = () => {
        modalProps.onCloseHandler && modalProps.onCloseHandler();
        onClose();
      };
      return (
        <ChakraModal isOpen={isOpen} onClose={onClose} id={id} {...rest}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalProps.headingText}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{modalProps.bodyContent}</ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <Button id="modal-close-btn" onClick={finalOnCloseHandler}>
                  {modalProps.closeButtonLabel || "Close"}
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </ChakraModal>
      );
    }
  );

  return { onOpen, Modal };
}
