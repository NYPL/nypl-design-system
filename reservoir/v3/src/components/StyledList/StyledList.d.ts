import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
export declare const textSizesArray: readonly ["default", "body1", "body2", "caption", "tag", "mini"];
export type StyledListTextSizes = typeof textSizesArray[number];
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
    textSize?: StyledListTextSizes;
}
/**
 * The `StyledList` component renders an HTML list with styles that do not
 * adhere to traditional numbered and bulleted list styles. Unlike
 * the `List` component, `StyledList` only renders an unordered list.
 */
export declare const StyledList: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<StyledListProps> & React.RefAttributes<HTMLDivElement & HTMLUListElement>>, React.PropsWithChildren<StyledListProps>>;
export default StyledList;
