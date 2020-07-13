import * as React from "react";
import bem from "../../utils/bem";
import { boolean } from "@storybook/addon-knobs";
import { ListTypes } from "./ListTypes";

interface ListProps {
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;

    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: any[];

    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;

    /** ClassName you can add in addition to 'list' */
    className?: string;

    /** Ordered or Unordered */
    type: ListTypes;

    /** Additional attributes passed to the list */
    attributes?: {};
}

export default function List(props: React.PropsWithChildren<ListProps>) {
    const {
        attributes,
        blockName,
        children,
        className,
        id,
        modifiers,
        type,
    } = props;

    const baseClass = "list";

    let listTag;

    if (type === ListTypes.Unordered) {
        listTag = (
            <ul
                id={id}
                className={bem(baseClass, modifiers, blockName)}
                {...attributes}
            >
                {children}
            </ul>
        );
    } else if (type === ListTypes.Ordered) {
        listTag = (
            <ol
                id={id}
                className={bem(baseClass, modifiers, blockName)}
                {...attributes}
            >
                {children}
            </ol>
        );
    }

    return listTag;
}
