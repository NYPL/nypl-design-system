import * as React from "react";
import bem from "../../utils/bem";
import { InputTypes } from "./InputTypes";

export interface InputProps {
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;

    /** Populates the aria-label on the select */
    ariaLabel?: string;

    /** Populates the aria-labelledby on the select */
    ariaLabelledBy?: string;

    /** Will add 'aria-required: true' to input */
    required?: boolean;

    /** className you can add in addition to 'input' */
    className?: string;

    /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;

    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];

    /** Helper for modifiers array; adds 'errored' styling */
    errored?: boolean;

    /** Adds the 'disabled' prop to the input when true */
    disabled?: boolean;

    /** Populates the value of the select */
    value?: string | number;

    /** Populates the placeholder of the select */
    placeholder?: string;

    /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
    type?: InputTypes;

    /** Additional attributes to pass to the <input> tag */
    attributes?: {};
}

export default function Input(props: InputProps) {
    const {
        ariaLabel,
        ariaLabelledBy,
        attributes,
        blockName,
        className,
        disabled,
        errored,
        id,
        placeholder,
        required,
        type = "text",
        value,
    } = props;

    let modifiers = props.modifiers ? props.modifiers : [];

    if (errored) {
        modifiers.push("error");
    }

    let inputProps = {
        className: bem("input", modifiers, blockName, [className]),
        type: type,
        value: value,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        disabled: disabled,
    };

    if (required) {
        inputProps["aria-required"] = true;
    }

    let transformedInput = (
        <input id={id} {...inputProps} placeholder={placeholder} />
    );

    return transformedInput;
}
