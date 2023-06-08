import React from "react";
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
/**
 * The `ModalTrigger` component renders a button that you click to open the
 * internal `Modal` component. Note that props to update the internal `Modal`
 * component are passed through to the `modalProps` prop.
 */
export declare const ModalTrigger: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<ModalProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>, {}>;
/**
 * This hook function can be used to render the `Modal` component with a custom
 * open button(s) and optional custom close button(s). You must render your own
 * button and pass the appropriate `onOpen` and ` handler for the modal to open.
 */
export declare function useModal(): {
    onClose: () => void;
    onOpen: () => void;
    Modal: import("@chakra-ui/react").ChakraComponent<({ bodyContent, closeButtonLabel, headingText, id, ...rest }: React.PropsWithChildren<BaseModalProps>) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
};
export {};
