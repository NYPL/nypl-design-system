import * as React from "react";
import bem from "../../utils/bem";
import { boolean } from "@storybook/addon-knobs";

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
) {
    const { id, modifiers = [], blockName = "" } = props;

    const baseClass = "unordered-list";

    if (!Array.isArray(props.children)) {
        throw new Error(
            "Please pass only an Array as a child of UnorderedList"
        );
    }

    const content = props.children.map((content, i) => {
        return (
            <li
                className={bem(baseClass, [], "list-item")}
                key={id + "-li-" + i}
            >
                {content}
            </li>
        );
    });

    return (
        <div className={bem(baseClass, modifiers, "list-container")}>
            <ul
                id={id}
                className={
                    baseClass + " " + bem(baseClass, modifiers, blockName)
                }
            >
                {content}
            </ul>
        </div>
    );
}
