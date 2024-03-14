import React from "react";
export interface AlphabetFilterProps {
    /** Array of letters to specify which `Button` components should be set in an `enabled`
     * state. By default, all buttons are `enabled`. */
    activeLetters?: string[];
    /** A class name for the AlphabetFilter parent div. */
    className?: string;
    /** The currentLetter can be used to programatically set the selected letter without the
     * user explicitly requesting it. */
    currentLetter?: string;
    /** Value used to set the text for a `Text` component that will be displayed above the letter buttons. */
    descriptionText?: string | JSX.Element;
    /** Optional string value used to set the text for a `Heading` component, or
     * a DS Heading component that can be passed in.
     */
    headingText?: string | JSX.Element;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Adds the `disabled` prop to the AlphabetFilter when true. */
    isDisabled?: boolean;
    /** The callback function called when a letter button or the Show All button is clicked. */
    onClick: (filterValue: string) => void;
}
export declare const AlphabetFilter: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<AlphabetFilterProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default AlphabetFilter;
