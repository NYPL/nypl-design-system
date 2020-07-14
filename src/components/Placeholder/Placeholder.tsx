import * as React from "react";
import bem from "../../utils/bem";

export interface PlaceholderProps {
    /** Additional attributes, such as rel=nofollow, to pass to the <a> tag */
    attributes?: {};
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
}

/** Creates a gray box with an editable string for dropping in spaces
 * within components or on templates where a component will be but
 * that hasn't been created yet
 */
export default function Placeholder(
    props: React.PropsWithChildren<PlaceholderProps>
) {
    const { modifiers, blockName, attributes } = props;
    return (
        <div
            className={bem("placeholder", modifiers, blockName)}
            {...attributes}
        >
            {props.children}
        </div>
    );
}
