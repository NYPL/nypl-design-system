import * as React from "react";
import bem from "../../utils/bem";

export interface LabelOptions {
    labelContent?: JSX.Element;

    id?: string;
    htmlFor?: string;
}

interface LabelProps {
    id?: string;

    /** The id of the html element that this Label is describing */
    htmlFor?: string;

    /** Displays "Required" or "Optional" string alongside label */
    optReqFlag?: "Optional" | "Required" | "" | null;

    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;

    /** Optional modifiers for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
}

/** A Label for form inputs.
 * It should never be used alone.
 */
export default function Label(props: React.PropsWithChildren<LabelProps>) {
    const { id, htmlFor, optReqFlag, modifiers, blockName } = props;
    const baseClass = "label";
    let helperString;

    if (optReqFlag) {
        helperString = (
            <div className={bem("required-helper", [], baseClass)}>
                {optReqFlag}
            </div>
        );
    }

    let attributes = {
        id: id,
        htmlFor: htmlFor,
        className: bem(baseClass, modifiers, blockName),
    };
    return React.createElement(
        "label",
        attributes,
        props.children,
        helperString
    );
}
