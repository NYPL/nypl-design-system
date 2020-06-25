import * as React from "react";
import bem from "../../utils/bem";
import { InputTypes } from "./InputTypes";
export interface InputOptions {
    baseClass?: string;
    blockName?: string;

    labelId?: string;
    labelContent?: JSX.Element;

    inputId?: string;
    inputType?: string;
    inputValue?: string | number;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    required?: boolean;

    showError?: boolean;
}
export interface InputProps {
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;

    /** Populates the aria-label on the select */
    ariaLabel?: string;

    /** Populates the aria-labelledby on the select */
    ariaLabelledBy?: string;

    /** Will add 'aria-required: true' to input */
    required?: boolean;
    blockName?: string;
    modifiers?: string[];

    /** Populates the value of the select */
    value?: string | number;

    /** Populates the placeholder of the select */
    placeholder?: string;

    /**  */
    type?: InputTypes;

    /**  */
    helperTextId?: string;
    onChange?: (event: React.FormEvent) => void;
}

export default function Input(props: InputProps) {
    const {
        id,
        ariaLabel,
        ariaLabelledBy,
        required,
        blockName,
        modifiers,
        value,
        placeholder,
        type = "text",
        onChange,
    } = props;

    let inputProps = {
        className: bem("input", modifiers, blockName),
        type: type,
        value: value,
        onChange: onChange,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
    };

    if (required) {
        inputProps["aria-required"] = true;
    }

    // if (labelId && !helperTextId) {
    //     selectProps["aria-labelledby"] = labelId;
    // } else if (helperTextId && !labelId) {
    //     selectProps["aria-labelledby"] = helperTextId;
    // } else if (labelId && helperTextId) {
    //     selectProps["aria-labelledby"] = labelId + " " + helperTextId;
    // }

    let transformedInput = (
        <input id={`input-${id}`} {...inputProps} placeholder={placeholder} />
    );

    return transformedInput;
}
