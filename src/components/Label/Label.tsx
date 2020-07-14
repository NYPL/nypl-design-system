import * as React from "react";
import bem from "../../utils/bem";

export interface LabelOptions {
    labelContent?: JSX.Element;

    id?: string;
    htmlFor?: string;
}

interface LabelProps {
    /** Additional attributes to pass to the <label> tag */
    attributes?: {};
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** The id of the html element that this Label is describing */
    htmlFor?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Optional modifiers for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Displays "Required" or "Optional" string alongside label */
    optReqFlag?: string;
}

/** A Label for form inputs.
 * It should never be used alone.
 */
export default function Label(props: React.PropsWithChildren<LabelProps>) {
    const { id, htmlFor, optReqFlag, modifiers, blockName, attributes } = props;

    let helperString;

    const baseClass = "label";

    if (optReqFlag === "Optional") {
        helperString = (
            <div className={bem("required-helper", [], baseClass)}>
                Optional
            </div>
        );
    } else if (optReqFlag === "Required") {
        helperString = (
            <div className={bem("required-helper", [], baseClass)}>
                Required
            </div>
        );
    }

    let labelAttributes = {
        id: id,
        htmlFor: htmlFor,
        className: bem(baseClass, modifiers, blockName),
    };
    return React.createElement(
        "label",
        labelAttributes,
        attributes,
        props.children,
        helperString
    );
}
