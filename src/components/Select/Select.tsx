// AF-121 Form Dropdown
import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";

export interface SelectProps {
    dropdownId?: string;
    blockName?: string;
    modifiers?: string[];
    labelId?: string;
    helperTextId?: string;
    isRequired: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    options: string[];
    selectedOption?: string;
    onSelectBlur: (event: React.FormEvent) => void;
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

    componentDidUpdate() {
        if (this.state.selectedOption !== this.props.selectedOption) {
            this.setState({ selectedOption: this.props.selectedOption });
        }
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
            dropdownId,
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
            id: dropdownId,
            className: bem("select", modifiers, blockName),
            "aria-required": isRequired,
            value: this.state.selectedOption
                ? this.state.selectedOption
                : undefined,
            disabled: disabled,
        };

        if (labelId && !helperTextId) {
            selectProps["aria-labelledby"] = labelId;
        } else if (helperTextId && !labelId) {
            selectProps["aria-labelledby"] = helperTextId;
        } else if (labelId && helperTextId) {
            selectProps["aria-labelledby"] = labelId + " " + helperTextId;
        } else {
            selectProps["aria-label"] = ariaLabel;
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
                            aria-selected={child === this.state.selectedOption}
                            value={child}
                        >
                            {child}
                        </option>
                    );
                })}
            </select>
        );
    }
}
