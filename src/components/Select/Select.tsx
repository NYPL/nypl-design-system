// AF-121 Form Dropdown
import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";

export interface SelectProps {
    dropdownId?: string;
    blockName?: string;
    modifiers?: string[];
    labelId?: string;
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
            blockName = "form-item",
            options,
            labelId,
            isRequired,
            ariaLabel,
            disabled = false,
            selectedOption,
            onSelectBlur,
            onSelectChange,
        } = this.props;
        const modifiers = this.props.modifiers ? this.props.modifiers : [];
        if (!labelId && !ariaLabel) {
            throw new Error("Must either have labelId or aria-label");
        }

        let formItemBlockName = blockName;

        let selectProps = {
            id: dropdownId,
            className: bem("select", modifiers, formItemBlockName),
            "aria-required": isRequired,
            value: this.state.selectedOption
                ? this.state.selectedOption
                : undefined,
            disabled: disabled,
        };

        if (labelId) {
            selectProps["aria-labelledby"] = labelId;
        } else {
            selectProps["aria-label"] = ariaLabel;
        }

        if (!options.length) return;
        return (
            <div className={bem("dropdown", modifiers, formItemBlockName)}>
                <select
                    {...selectProps}
                    onChange={(e) => this.onSelectChange(e, onSelectChange)}
                    onBlur={(e) => this.onSelectChange(e, onSelectBlur)}
                >
                    {options.map((child, key) => {
                        return (
                            <option
                                key={key.toString()}
                                aria-selected={
                                    child === this.state.selectedOption
                                }
                                value={child}
                            >
                                {child}
                            </option>
                        );
                    })}
                </select>

                <Icon decorative={true} name={"arrow"} modifiers={["medium"]} />
            </div>
        );
    }
}
