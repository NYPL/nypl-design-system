import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";

export interface SelectProps {
    /** When passed, will populate the aria-label on the select */
    ariaLabel?: string;
    /** Additional attributes passed to the <select> tag */
    attributes?: {};
    /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName you can add in addition to 'select' */
    className?: string;
    /** When true, disables the select */
    disabled?: boolean;
    /** ID of associated HelperText */
    helperTextId?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** ID of associated label */
    labelId?: string;
    /** Attribute indicating that an option with a non-empty string value must be selected */
    isRequired: boolean;
    onBlur: (event: React.FormEvent) => void;
    /** Passes selects' current value to the React state handler */
    onChange: (event: React.FormEvent) => void;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Sets whatever string you pass it as the default selected */
    selectedOption?: string;
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
            selectedOption,
        } = this.props;

        const modifiers = this.props.modifiers ? this.props.modifiers : [];
        const disabled = this.props.disabled ? this.props.disabled : false;

        let selectProps = {
            id: id,
            className: bem("select", modifiers, blockName, [className]),
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

        return (
            <select
                {...selectProps}
                onBlur={(e) => this.onSelectChange(e, onBlur)}
                onChange={(e) => this.onSelectChange(e, onChange)}
            >
                {React.Children.map(children, (child, key) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        "aria-selected":
                            children[key].props.children ===
                            this.state.selectedOption,
                    })
                )}
            </select>
        );
    }
}
