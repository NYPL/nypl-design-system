import * as React from "react";
import bem from "../../utils/bem";
import { InputTypes } from "./InputTypes";

export interface InputProps {
    /** Additional attributes to pass to the <input> tag */
    attributes?: { [key: string]: any };

    /** Populates the aria-label on the select */
    ariaLabel?: string;
    /** Populates the aria-labelledby on the select */
    ariaLabelledBy?: string;
    /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** className you can add in addition to 'input' */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Adds the 'disabled' prop to the input when true */
    disabled?: boolean;
    /** Helper for modifiers array; adds 'errored' styling */
    errored?: boolean;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Populates the placeholder of the select */
    placeholder?: string;
    /** Will add 'aria-required: true' to input */
    required?: boolean;
    /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
    type?: InputTypes;
    /** Populates the value of the select */
    value?: string | number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref?) => {
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

    const modifiers = props.modifiers ? props.modifiers : [];

    if (errored) {
        modifiers.push("error");
    }

    const inputProps = {
        id: id ? `input-${id}` : null,
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

    if (type === InputTypes.hidden) {
        inputProps["aria-hidden"] = true;
    }

    const transformedInput = (
        <input
            {...inputProps}
            placeholder={placeholder}
            ref={ref}
            {...attributes}
        />
    );

    return transformedInput;
});

Input.displayName = "Input";

export default Input;
