import * as React from "react";
import bem from "../../utils/bem";

export interface HelperErrorTextOptions {
    content?: JSX.Element;

    id?: string;
    isError?: boolean;
    modifiers?: string[];
    blockName?: string;
    baseClass?: string;
}

interface HelperErrorTextProps {
    /** unique ID for helper */
    id?: string;
    /** Toggles between helper and error styling */
    isError: boolean;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Optional baseClass for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    baseClass?: string;
    /** Added prop when HelperText is errored */
    ariaLive?: boolean;
    /** Added prop when HelperText is errored */
    ariaAtomic?: boolean;
}

/**
 * Helper or Error text for forms
 */
export default function HelperErrorText(
    props: React.PropsWithChildren<HelperErrorTextProps>
) {
    const { id, blockName, baseClass = "helper-text", isError } = props;

    let modifiers = [];
    let ariaLive, ariaAtomic;

    if (isError) {
        modifiers.push("error");
        ariaLive = true;
    }

    if (props.modifiers) {
        modifiers.push(...props.modifiers);
    }

    return (
        <div
            id={id}
            className={bem(baseClass, modifiers, blockName)}
            aria-live={ariaLive ? "polite" : "off"}
            aria-atomic={ariaLive}
        >
            {props.children}
        </div>
    );
}
