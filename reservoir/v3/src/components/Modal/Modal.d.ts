import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
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
  onCancel: () => void;
  onConfirm: () => void;
  /** The `Modal` variant to render. */
  type: "confirmation";
  /** The label for the close button. This prop is used for the
   * "cancel" button in the confirmation variant. */
  closeButtonLabel?: string;
  onClose?: never;
}
export interface DefaultModalProps {
  /** The label for the close button. */
  closeButtonLabel?: string;
  onClose?: () => void;
  /** The `Modal` variant to render. */
  type: "default";
  /** The label for the confirm button. This prop is not used
   * in the default variant. */
  confirmButtonLabel?: never;
  onCancel?: never;
  onConfirm?: never;
}
export type ModalTypeProps = ConfirmationModalProps | DefaultModalProps;
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
export declare function isDefaultType(
  type: BaseModalProps["type"]
): type is "default";
export declare const BaseModal: ChakraComponent<
  React.FunctionComponent<BaseModalProps>,
  BaseModalProps
>;
/**
 * The `ModalTrigger` component renders a button that you click to open the
 * internal `Modal` component. Note that props to update the internal `Modal`
 * component are passed through to the `modalProps` prop.
 */
export declare const ModalTrigger: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<ModalProps> & React.RefAttributes<HTMLButtonElement>
  >,
  React.PropsWithChildren<ModalProps>
>;
/**
 * This hook function can be used to render the `Modal` component with a custom
 * open button(s) and optional custom close button(s). You must render your own
 * button and pass the appropriate `onOpen` and `onClose` handler for the modal to open.
 */
export declare function useModal(): any;
