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
import useDSHeading from "../../hooks/useDSHeading";

export interface BaseProps {
  /** The content to display in the modal body. */
  bodyContent?: string | JSX.Element;
  /** The text to display in the modal heading, can be a string or JSX Element. */
  headingText?: string | JSX.Element;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Boolean to determine if the modal is open or closed. */
  isOpen?: boolean;
}

export interface ConfirmationModalProps {
  /** The label for the confirm button. */
  confirmButtonLabel?: string;
  /* Function to call when the modal action is canceled. */
  onCancel: () => void;
  /* Function to call when the modal action is confirmed. */
  onConfirm: () => void;
  /** The `Modal` variant to render. */
  type: "confirmation";
  /** The label for the close button. This prop is used for the
   * "cancel" button in the confirmation variant. */
  closeButtonLabel?: string;
  /* Function to call when the modal is closed. This prop is not 
  used in the confirmation variant. */
  onClose?: never;
}

export interface DefaultModalProps {
  /** The label for the close button. */
  closeButtonLabel?: string;
  /* Function to call when the modal is closed. */
  onClose?: () => void;
  /** The `Modal` variant to render. */
  type?: "default";
  /** The label for the confirm button. This prop is not used
   * in the default variant. */
  confirmButtonLabel?: never;
  /* Function to call when the modal action is canceled. This prop 
  is not used in the default variant. */
  onCancel?: never;
  /* Function to call when the modal action is confirmed. This prop is not 
    used in the default variant. */
  onConfirm?: never;
}

// We want either the default one button or the two button props.
export type ModalTypeProps = ConfirmationModalProps | DefaultModalProps;
// And here combine the special types with the base props.
export type BaseModalProps = BaseProps & ModalTypeProps;

export interface ModalProps {
  /** The text to display on the button that opens the modal. */
  buttonText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Props to update the internal `Modal` component. This contains the
   * `bodyContent`, `headingText`, `isOpen`, and the modal type props. */
  modalProps: BaseModalProps;
}

// Type guard for the `Modal` variant.
export function isDefaultType(type: BaseModalProps["type"]): type is "default" {
  return type === "default";
}

export const BaseModal: ChakraComponent<
  React.ForwardRefExoticComponent<
    BaseModalProps & React.RefAttributes<HTMLButtonElement>
  >,
  BaseModalProps
> = chakra(
  forwardRef<HTMLButtonElement, BaseModalProps>((props: BaseModalProps) => {
    const {
      bodyContent,
      closeButtonLabel = "Close",
      headingText,
      confirmButtonLabel = "Confirm",
      onCancel,
      onConfirm,
      type = "default",
      id,
      isOpen,
      onClose,
      ...rest
    } = props;
    const xlarge = "xl";
    const fullSize = "full";
    const { isLargerThanMobile } = useNYPLBreakpoints();
    // For larger screens, set the size to xl, otherwise set it to full.
    const size = isLargerThanMobile ? xlarge : fullSize;
    const finalTitle = useDSHeading({
      title: headingText,
      id,
      headingSize: "heading4",
    });

    if (
      (!isDefaultType(type) && onClose) ||
      (isDefaultType(type) && (onCancel || onConfirm))
    ) {
      console.warn(
        "NYPL Reservoir Modal: The `onClose`, `onConfirm`, and `onCancel` props have all been set, but they can not all be used together. Only `onClose` will be used, while `onConfirm` and `onCancel` will be ignored."
      );
    }

    return (
      <>
        {isDefaultType(type) && (
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
              <ModalHeader>{finalTitle}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{bodyContent}</ModalBody>
              <ModalFooter>
                <ButtonGroup>
                  <Button id="modal-close-btn" onClick={onClose}>
                    {closeButtonLabel}
                  </Button>
                </ButtonGroup>
              </ModalFooter>
            </ModalContent>
          </ChakraModal>
        )}
        {!isDefaultType(type) && (
          <ChakraModal
            id={id}
            isOpen={isOpen}
            onClose={onCancel}
            scrollBehavior="inside"
            size={size}
            {...rest}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{finalTitle}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>{bodyContent}</ModalBody>
              <ModalFooter>
                <ButtonGroup>
                  <Button
                    buttonType="secondary"
                    id="modal-cancel-btn"
                    onClick={onCancel}
                  >
                    {closeButtonLabel}
                  </Button>
                  <Button id="modal-confirm-btn" onClick={onConfirm}>
                    {confirmButtonLabel}
                  </Button>
                </ButtonGroup>
              </ModalFooter>
            </ModalContent>
          </ChakraModal>
        )}
      </>
    );
  })
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
      const onCloseHandler = () => {
        modalProps.onClose && modalProps.onClose();
        onClose();
      };
      const onCancelHandler = () => {
        modalProps.onCancel && modalProps.onCancel();
        onClose();
      };
      const onConfirmHandler = () => {
        modalProps.onConfirm && modalProps.onConfirm();
        onClose();
      };
      return (
        <>
          <Button id="modal-open-btn" onClick={onOpen} ref={ref}>
            {buttonText}
          </Button>
          {isDefaultType(modalProps.type) ? (
            <BaseModal
              bodyContent={modalProps.bodyContent}
              headingText={modalProps.headingText}
              id={modalProps.id}
              type={modalProps.type}
              isOpen={isOpen}
              onClose={onCloseHandler}
              closeButtonLabel={modalProps.closeButtonLabel}
              {...rest}
            />
          ) : (
            <BaseModal
              bodyContent={modalProps.bodyContent}
              headingText={modalProps.headingText}
              closeButtonLabel={modalProps.closeButtonLabel}
              confirmButtonLabel={modalProps.confirmButtonLabel}
              onConfirm={onConfirmHandler}
              onCancel={onCancelHandler}
              id={modalProps.id}
              type={modalProps.type}
              isOpen={isOpen}
              {...rest}
            />
          )}
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
      confirmButtonLabel,
      onCancel,
      onConfirm,
      onClose,
      type,
      id,
      ...rest
    }: React.PropsWithChildren<BaseModalProps>) => {
      return (
        <>
          {isDefaultType(type) ? (
            <BaseModal
              bodyContent={bodyContent}
              headingText={headingText}
              id={id}
              type={type}
              isOpen={isOpen}
              onClose={onClose}
              closeButtonLabel={closeButtonLabel}
              {...rest}
            />
          ) : (
            <BaseModal
              bodyContent={bodyContent}
              headingText={headingText}
              closeButtonLabel={closeButtonLabel}
              confirmButtonLabel={confirmButtonLabel}
              onConfirm={onConfirm}
              onCancel={onCancel}
              id={id}
              type={type}
              isOpen={isOpen}
              {...rest}
            />
          )}
        </>
      );
    }
  );

  return { onClose, onOpen, Modal };
}
