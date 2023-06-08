import React from "react";
import { TextSizes } from "../Text/Text";
export interface StyledListProps {
    /** Any child node passed to the component. */
    children?: React.ReactNode;
    /** A class name for the StyledList parent div. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Data to render if `li` children elements are not passed. It must be an
     * array of strings or JSX elements. */
    listItems?: (string | JSX.Element)[];
    /** The style used to render the StyledList component. For its initial release,
     * there is only one variant style which is the default, "capped". */
    style?: "capped";
    /** The font size of the `li` elements. */
    textSize?: TextSizes;
}
/**
 * The `StyledList` component renders an HTML list with styles that do not
 * adhere to traditional numbered and bulleted list styles. Unlike
 * the `List` component, `StyledList` only renders an unordered list.
 */
export declare const StyledList: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<StyledListProps & React.RefAttributes<HTMLDivElement & HTMLUListElement>>, {}>;
export default StyledList;
