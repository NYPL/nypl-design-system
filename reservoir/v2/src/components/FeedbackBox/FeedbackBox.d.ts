/// <reference types="react" />
export declare const feedbackBoxViewTypeArray: readonly ["form", "confirmation", "error"];
export type FeedbackBoxViewType = typeof feedbackBoxViewTypeArray[number];
interface FeedbackBoxProps {
    /** Additional class name to add. */
    className?: string;
    /** Used to add additional information to the default confirmation message in
     * the confirmation view. */
    confirmationText?: string | JSX.Element;
    /** Used to add description text above the form input fields in
     * the initial/form view. */
    descriptionText?: string | JSX.Element;
    /** A data object containing key/value pairs that will be added to the form
     * field submitted data. */
    hiddenFields?: any;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Toggles the invalid state for the comment field. */
    isInvalidComment?: boolean;
    /** Toggles the invalid state for the email field. */
    isInvalidEmail?: boolean;
    /** Only used for internal purposes. */
    isOpen?: boolean;
    /** Used to add a notification above the description in the
     * initial/form view.*/
    notificationText?: string | JSX.Element;
    /** Only used for internal purposes. */
    onClose?: any;
    /** Only used for internal purposes. */
    onOpen?: any;
    /** Callback function that will be invoked when the form is submitted.
     * The returned data object contains key/value pairs including the
     * values from the `hiddenFields` prop.
     */
    onSubmit: (values: {
        [key: string]: string;
    }) => any;
    /** Toggles the category radio group field. */
    showCategoryField?: boolean;
    /** Toggles the email input field. When set to `true`, an additional
     * confirmation message will be rendered. */
    showEmailField?: boolean;
    /** Used to populate the label on the open button and the `Drawer`'s
     * header title. */
    title: string;
    /** Used to specify what screen should be displayed. */
    view?: FeedbackBoxViewType;
}
/**
 * The `FeedbackBox` component renders a fixed-positioned button on the bottom
 * right corner of a page that opens a Chakra `Drawer` popup component. Inside
 * of the popup, a form is rendered with fields that allows users to provide
 * feedback. The `FeedbackBox` component does *not* call any API with the
 * submitted data; that feature is the responsibility of the consuming
 * application.
 */
export declare const FeedbackBox: import("@chakra-ui/react").ChakraComponent<import("react").ForwardRefExoticComponent<FeedbackBoxProps & import("react").RefAttributes<any>>, {}>;
export declare function useFeedbackBox(): {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    FeedbackBox: import("@chakra-ui/react").ChakraComponent<(props: any) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
};
export default FeedbackBox;
