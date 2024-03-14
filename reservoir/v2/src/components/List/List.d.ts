import React from "react";
export declare const listTypesArray: readonly ["ol", "ul", "dl"];
export type ListTypes = typeof listTypesArray[number];
export interface DescriptionProps {
    term: string;
    description: string | JSX.Element;
}
export interface ListProps {
    /** ClassName you can add in addition to 'list' */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Display the list in a row. */
    inline?: boolean;
    /** Data to render if children are not passed. For `listTypes` ordered `"ol"`
     * and unordered `"ul"` `List` types, the data structure is an array of strings
     * to renders as `li` items. For description `"dl"` `List` types, the data
     * structure is an array of objects with `term` and `description` properties
     * to render `dt` and `dd` elements, respectively.
     */
    listItems?: (string | JSX.Element | DescriptionProps)[];
    /** Remove list styling. */
    noStyling?: boolean;
    /** Optional string value used to set the text for a `Heading` component, or
     * a DS Heading component that can be passed in. This title only applies to
     * to Description Lists and will render above the list. */
    title?: string | JSX.Element;
    /** The type of list: "ol", "ul", or "dl". "ul" by default. */
    type: ListTypes;
}
/**
 * A component that renders list item `li` elements or description item `dt`
 * and `dd` elements based on the `type` prop. Note that the `title` prop will
 * only display for the `Description` list type.
 */
export declare const List: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<ListProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement & HTMLUListElement & HTMLOListElement>>, {}>;
/**
 * Checks for `li` elements and consoles a warning if the
 * children are different HTML elements.
 */
export declare const checkListChildrenError: (children: React.ReactNode, listType?: string, componentName?: string) => void;
export default List;
