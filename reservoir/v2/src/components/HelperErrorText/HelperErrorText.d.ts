/// <reference types="react" />
export type AriaLiveValues = "assertive" | "off" | "polite" | undefined;
export type HelperErrorTextType = string | JSX.Element;
interface HelperErrorTextProps {
    /** Aria attribute. When true, assistive technologies will read the entire
     * DOM element. When false, only changes (additionals or removals) will be
     * read. True by default. */
    ariaAtomic?: boolean;
    /** Aria attribute used to handle live updates for the helper and error text.
     * This indicates the priority of the text and when it should be presented to
     * users using screen readers; "off" indicates that the content should not be
     * presented, "polite" that it will be announced at the next available time
     * slot, and "assertive" that it should be announced immediately. This is set
     * to "polite" by default. */
    ariaLive?: AriaLiveValues;
    /** Additional className to add. */
    className?: string;
    /** Unique ID for accessibility purposes. */
    id?: string;
    /** Toggles between helper and invalid styling. */
    isInvalid?: boolean;
    /** Offers the ability to render or not render the content passed in
     * the `text` prop; `true` by default. */
    isRenderedText?: boolean;
    /** The text to display. */
    text: HelperErrorTextType;
}
/**
 * Component that always renders a div even if the text content is not passed.
 * This pattern guarantees accessibility guidelines are met if the text content
 * is dynamically updated by the app or component that implements it.
 */
export declare const HelperErrorText: import("@chakra-ui/react").ChakraComponent<import("react").ForwardRefExoticComponent<HelperErrorTextProps & import("react").RefAttributes<HTMLDivElement>>, {}>;
export default HelperErrorText;
