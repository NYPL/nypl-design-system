import * as React from "react";
import bem from "../../utils/bem";
import Label, { LabelOptions } from "../Label/Label";

export interface CheckboxProps {
    /** Additional attributes passed to the checkbox */
    attributes?: {};
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Unique ID used by checkbox */
    checkboxId?: string;
    /** ClassName that appears in addition to "checkbox" */
    className?: string;
    /* For a controlled component only. If checked is not defined, the state of the uncontrolled native `input` component will be used. */
    checked?: boolean;
    /* For uncontrolled component only. The initial value of an uncontrolled checkbox component. */
    defaultChecked?: boolean;
    /* The Label that the checkbox is using. */
    labelOptions: LabelOptions;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** name of the checkbox */
    name?: string;
    /** The action to perform on the `<input>`'s onChange function  */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

let Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (props, ref?) => {
        const {
            name,
            attributes,
            modifiers = [],
            className,
            blockName = "",
            checkboxId,
            labelOptions,
            checked,
            defaultChecked,
            onChange,
        } = props;

        const baseClass = "checkbox";

        return (
            <div className={bem(baseClass, modifiers, blockName, [className])}>
                <input
                    id={checkboxId}
                    name={name}
                    className={bem("input", [], baseClass)}
                    type="checkbox"
                    {...(props.checked !== undefined
                        ? {
                              checked: props.checked,
                              "aria-checked": props.checked,
                              onChange: onChange,
                          }
                        : { defaultChecked: props.defaultChecked })}
                    ref={ref}
                    {...attributes}
                ></input>
                <Label htmlFor={checkboxId} id={labelOptions.id}>
                    {labelOptions.labelContent}
                </Label>
            </div>
        );
    }
);

export default Checkbox;
