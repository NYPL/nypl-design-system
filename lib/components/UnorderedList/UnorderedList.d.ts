import * as React from "react";
export interface UnorderedListOptions {
    content?: JSX.Element[];
    id: string;
    modifiers?: any[];
    blockName?: string;
}
interface UnorderedListProps {
    /** The unique ID of UnorderedList */
    id: string;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: any[];
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
}
/** Wrapper component for an unordered list of objects */
export default function UnorderedList(
    props: React.PropsWithChildren<UnorderedListProps>
): JSX.Element;
export {};
