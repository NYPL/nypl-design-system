import * as React from "react";
import bem from "../../utils/bem";
import Label, { LabelOptions } from "../Label/Label";

interface CheckboxProps {
    /** Additional attributes passed to the checkbox */
    attributes?: {};
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Unique ID used by checkbox */
    checkboxId?: string;
    /* The current selected state of the checkbox */
    isSelected?: boolean;
    /* The Label that the checkbox is using. */
    labelOptions: LabelOptions;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** name of the checkbox */
    name?: string;
    /** The action to perform on the <input>'s onChange function  */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A Form Checkbox component that can be selected and deselected.
 */

export default function Checkbox(props: CheckboxProps) {
    const {
        attributes,
        blockName = "",
        checkboxId,
        isSelected,
        labelOptions,
        modifiers = [],
        name,
        onChange,
    } = props;

    const baseClass = "checkbox";
    return (
        <div className={bem(baseClass, modifiers, blockName)} {...attributes}>
            <input
                id={checkboxId}
                name={name}
                className={bem("input", [], baseClass)}
                onChange={onChange}
                type="checkbox"
                aria-checked={isSelected}
                checked={isSelected}
            ></input>
            <Label htmlFor={checkboxId} id={labelOptions.id}>
                {labelOptions.labelContent}
            </Label>
        </div>
    );
}
