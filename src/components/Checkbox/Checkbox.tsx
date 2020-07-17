import * as React from "react";
import bem from "../../utils/bem";
import Label, { LabelOptions } from "../Label/Label";

export interface CheckboxProps {
    /** name of the checkbox */
    name?: string;

    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];

    /** Unique ID used by checkbox */
    checkboxId?: string;
    /* The Label that the checkbox is using. */
    labelOptions: LabelOptions;

    /* The current selected state of the checkbox */
    isSelected?: boolean;
    /** The action to perform on the <input>'s onChange function  */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A Form Checkbox component that can be selected and deselected.
 */
let Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (props, ref?) => {
        const {
            name,
            modifiers = [],
            blockName = "",
            checkboxId,
            labelOptions,
            isSelected = false,
            onChange,
        } = props;

        const baseClass = "checkbox";
        return (
            <div className={bem(baseClass, modifiers, blockName)}>
                <input
                    id={checkboxId}
                    name={name}
                    className={bem("input", [], baseClass)}
                    onChange={onChange}
                    type="checkbox"
                    aria-checked={isSelected}
                    defaultChecked={isSelected}
                    ref={ref}
                ></input>
                <Label htmlFor={checkboxId} id={labelOptions.id}>
                    {labelOptions.labelContent}
                </Label>
            </div>
        );
    }
);

export default Checkbox;
