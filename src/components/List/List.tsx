import * as React from "react";
import bem from "../../utils/bem";
import { boolean } from "@storybook/addon-knobs";
import { ListTypes } from "./ListTypes";

interface ListProps {
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName you can add in addition to 'list' */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: any[];
    /** Ordered or Unordered */
    type: ListTypes;
}

export default function List(props: React.PropsWithChildren<ListProps>) {
    const { blockName, children, className, id, modifiers, type } = props;

    const baseClass = "list";

    let listTag;

    React.Children.map(children, function (child: React.ReactElement) {
        if (child.type !== "li") {
            throw new Error("Direct children of `List` should be `<li>`s");
        }
    });

    if (type === ListTypes.Unordered) {
        listTag = (
            <ul id={id} className={bem(baseClass, modifiers, blockName)}>
                {children}
            </ul>
        );
    } else if (type === ListTypes.Ordered) {
        listTag = (
            <ol id={id} className={bem(baseClass, modifiers, blockName)}>
                {children}
            </ol>
        );
    }

    return listTag;
}
