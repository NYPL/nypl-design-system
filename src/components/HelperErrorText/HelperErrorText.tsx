import * as React from "react";
import bem from "../../utils/bem";

export interface HelperErrorTextOptions {
    baseClass?: string;
    blockName?: string;
    content?: JSX.Element;
    id?: string;
    isError?: boolean;
    modifiers?: string[];
}

interface HelperErrorTextProps {
    /** Added prop when HelperText is errored */
    ariaAtomic?: boolean;
    /** Added prop when HelperText is errored */
    ariaLive?: boolean;
    /** Additional className to add to the helperErrorText */
    className?: string;
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** unique ID for helper */
    id?: string;
    /** Toggles between helper and error styling */
    isError: boolean;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
}

/**
 * Helper or Error text for forms
 */
export default function HelperErrorText(
    props: React.PropsWithChildren<HelperErrorTextProps>
) {
    const { id, blockName, isError, className } = props;

    let modifiers = [];
    let ariaLive, ariaAtomic;
    let baseClass = "helper-text";

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
            className={bem(baseClass, modifiers, blockName, [className])}
            aria-live={ariaLive ? "polite" : "off"}
            aria-atomic={ariaLive}
        >
            {props.children}
        </div>
    );
}
