import React, { useState } from "react";
import bem from "../../utils/bem";

export interface SelectProps {
    /** When passed, will populate the aria-label on the select */
    ariaLabel?: string;
    /** Additional attributes passed to the <select> tag */
    attributes?: {};
    /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName you can add in addition to 'select' */
    className?: string;
    children?: React.ReactNode;
    /** When true, disables the select */
    disabled?: boolean;
    /** ID of associated HelperText */
    helperTextId?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Attribute indicating that an option with a non-empty string value must be selected */
    isRequired: boolean;
    /** ID of associated label */
    labelId?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /**  */
    name: string;
    onBlur?: (event: React.FormEvent) => void;
    /** Passes selects' current value to the React state handler */
    onChange?: (event: React.FormEvent) => void;
    /** Sets whatever string you pass it as the default selected */
    selectedOption?: string;
}

/**
 * Select
 * A component that renders a `select` DOM element along with its `option`
 * children.
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (props, ref?) => {
        const [selectedOption, setSelectedOption] = useState(
            props.selectedOption
        );
        /**
         * onSelectChange
         * Update the state value for the option that was selected and fire off
         * any additional callbacks.
         */
        const onSelectChange = (
            event: React.FormEvent,
            additionalChange: Function
        ) => {
            let target = event.target as HTMLSelectElement;
            if (target) {
                setSelectedOption(target.value);
            }
            additionalChange && additionalChange(event);
        };
        const {
            ariaLabel,
            blockName,
            children,
            className,
            helperTextId,
            id,
            isRequired,
            labelId,
            onBlur,
            onChange,
            name,
            attributes,
            disabled = false,
        } = props;

        const modifiers = props.modifiers ? props.modifiers : [];

        let selectProps = {
            id: id,
            className: bem("select", modifiers, blockName, [className]),
            "aria-required": isRequired,
            value: selectedOption,
            disabled: disabled,
            "aria-label": ariaLabel,
        };

        if (labelId && !helperTextId) {
            selectProps["aria-labelledby"] = labelId;
        } else if (helperTextId && !labelId) {
            selectProps["aria-labelledby"] = helperTextId;
        } else if (labelId && helperTextId) {
            selectProps["aria-labelledby"] = labelId + " " + helperTextId;
        }

        return (
            <select
                name={name}
                {...selectProps}
                {...attributes}
                ref={ref}
                onBlur={(e) => onSelectChange(e, onBlur)}
                onChange={(e) => onSelectChange(e, onChange)}
            >
                {React.Children.map(children, (child, key) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        "aria-selected":
                            children[key].props.children === selectedOption,
                    })
                )}
            </select>
        );
    }
);

export default Select;
