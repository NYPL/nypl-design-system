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
  ChakraComponent,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";

interface BaseModalProps {
  bodyContent?: string | JSX.Element;
  closeButtonLabel?: string;
  headingText?: string | JSX.Element;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export interface ModalProps {
  buttonText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  modalProps: BaseModalProps;
}

export const BaseModal: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<BaseModalProps> &
      React.RefAttributes<HTMLButtonElement>
  >,
  React.PropsWithChildren<BaseModalProps>
> = chakra(
  ({
    bodyContent,
    closeButtonLabel = "Close",
    headingText,
    id,
    isOpen,
    onClose,
    ...rest
  }: React.PropsWithChildren<BaseModalProps>) => {
    const xlarge = "xl";
    const fullSize = "full";
    const { isLargerThanMobile } = useNYPLBreakpoints();
    // For larger screens, set the size to xl, otherwise set it to full.
    const size = isLargerThanMobile ? xlarge : fullSize;

    return (
      <ChakraModal
        id={id}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size={size}
        {...rest}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{headingText}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{bodyContent}</ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button id="modal-close-btn" height="40px" onClick={onClose}>
                {closeButtonLabel}
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    );
  }
);

/**
 * The `ModalTrigger` component renders a button that you click to open the
 * internal `Modal` component. Note that props to update the internal `Modal`
 * component are passed through to the `modalProps` prop.
 */
export const ModalTrigger: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<ModalProps> & React.RefAttributes<HTMLButtonElement>
  >,
  React.PropsWithChildren<ModalProps>
> = chakra(
  forwardRef<HTMLButtonElement, React.PropsWithChildren<ModalProps>>(
    ({ buttonText, id, modalProps, ...rest }, ref?) => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const finalOnCloseHandler = () => {
        modalProps.onClose && modalProps.onClose();
        onClose();
      };
      return (
        <>
          <Button id="modal-open-btn" height="40px" onClick={onOpen} ref={ref}>
            {buttonText}
          </Button>

          <BaseModal
            bodyContent={modalProps.bodyContent}
            closeButtonLabel={modalProps.closeButtonLabel}
            headingText={modalProps.headingText}
            id={id}
            isOpen={isOpen}
            onClose={finalOnCloseHandler}
            {...rest}
          />
        </>
      );
    }
  )
);

/**
 * This hook function can be used to render the `Modal` component with a custom
 * open button(s) and optional custom close button(s). You must render your own
 * button and pass the appropriate `onOpen` and ` handler for the modal to open.
 */
export function useModal(): any {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const Modal = chakra(
    ({
      bodyContent,
      closeButtonLabel,
      headingText,
      id,
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
          {...rest}
        />
      );
    }
  );

  return { onClose, onOpen, Modal };
}
