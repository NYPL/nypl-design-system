import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";

export interface SelectProps {
    /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;

    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];

    /** ID that other components can cross reference for accessibility purposes */
    id?: string;

    /** ID of associated label */
    labelId?: string;

    /** ID of associated HelperText */
    helperTextId?: string;

    /** Attribute indicating that an option with a non-empty string value must be selected */
    isRequired: boolean;

    /** When passed, will populate the aria-label on the select */
    ariaLabel?: string;

    /** When true, disables the select */
    disabled?: boolean;

    /** Populates the selects' options */
    options: string[];

    /** Sets whatever string you pass it as the default selected */
    selectedOption?: string;

    onSelectBlur: (event: React.FormEvent) => void;

    /** Passes selects' current value to the React state handler */
    onSelectChange: (event: React.FormEvent) => void;
}

export default class Select extends React.Component<
    SelectProps,
    { selectedOption: string }
> {
    constructor(props: SelectProps) {
        super(props);
        this.state = { selectedOption: props.selectedOption };
        this.onSelectChange.bind(this);
    }

    onSelectChange(event: React.FormEvent, additionalChange: Function) {
        let target = event.target as HTMLSelectElement;
        if (target) {
            this.setState({ selectedOption: target.value });
        }
        additionalChange(event);
    }

    render() {
        const {
            id,
            blockName,
            options,
            labelId,
            helperTextId,
            isRequired,
            ariaLabel,
            selectedOption,
            onSelectBlur,
            onSelectChange,
        } = this.props;

        const modifiers = this.props.modifiers ? this.props.modifiers : [];
        const disabled = this.props.disabled ? this.props.disabled : false;

        let selectProps = {
            id: id,
            className: bem("select", modifiers, blockName),
            "aria-required": isRequired,
            value: this.state.selectedOption,
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

        if (!options.length) return;
        return (
            <select
                {...selectProps}
                onChange={(e) => this.onSelectChange(e, onSelectChange)}
                onBlur={(e) => this.onSelectChange(e, onSelectBlur)}
            >
                {options.map((child, key) => {
                    return (
                        <option
                            key={key.toString()}
                            value={child}
                            aria-selected={child === this.state.selectedOption}
                        >
                            {child}
                        </option>
                    );
                })}
            </select>
        );
    }
}
