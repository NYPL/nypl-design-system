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
  bodyContent?: string | JSX.Element;
  closeButtonLabel?: string;
  headingText?: string | JSX.Element;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  isOpen?: boolean;
  onClose?: () => void;
  size?: string;
}

export interface ModalProps {
  buttonText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  modalProps: BaseModalProps;
}

const BaseModal = chakra(
  ({
    bodyContent,
    closeButtonLabel,
    headingText,
    id,
    isOpen,
    onClose,
    size,
    ...rest
  }: React.PropsWithChildren<BaseModalProps>) => {
    return (
      <ChakraModal isOpen={isOpen} onClose={onClose} id={id} {...rest}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headingText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{bodyContent}</ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button id="modal-close-btn" onClick={onClose}>
                {closeButtonLabel || "Close"}
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    );
  }
);

export const ModalTrigger = chakra(
  ({
    buttonText,
    id,
    modalProps,
    ...rest
  }: React.PropsWithChildren<ModalProps>) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalOnCloseHandler = () => {
      modalProps.onClose && modalProps.onClose();
      onClose();
    };
    return (
      <>
        <Button id="modal-open-btn" onClick={onOpen}>
          {buttonText}
        </Button>

        <BaseModal
          bodyContent={modalProps.bodyContent}
          closeButtonLabel={modalProps.closeButtonLabel}
          headingText={modalProps.headingText}
          id={id}
          isOpen={isOpen}
          onClose={finalOnCloseHandler}
          size={modalProps.size}
          {...rest}
        />
      </>
    );
  }
);

export function useModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Modal = chakra(
    ({
      bodyContent,
      closeButtonLabel,
      headingText,
      id,
      size,
      ...rest
    }: React.PropsWithChildren<BaseModalProps>) => {
      return (
        <BaseModal
          bodyContent={bodyContent}
          closeButtonLabel={closeButtonLabel}
          headingText={headingText}
          id={id}
          isOpen={isOpen}
          onClose={onClose}
          size={size}
          {...rest}
        />
      );
    }
  );

  return { onOpen, onClose, Modal };
}
