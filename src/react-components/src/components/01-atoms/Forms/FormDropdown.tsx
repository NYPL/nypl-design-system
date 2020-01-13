// AF-121 Form Dropdown
import * as React from "react";
import bem from "../../../utils/bem";
import Icon from "../Images/Icons/Icon";

export interface FormDropdownProps {
  dropdownId: string;
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

export default class FormDropdown extends React.Component<FormDropdownProps, { selectedOption: string }> {
  constructor(props: FormDropdownProps) {
    super(props);
    this.state = { selectedOption: "" };
    this.onSelectChange.bind(this);
  }

  componentDidMount() {
    console.log("mounted props", this.props);
    this.setState({ selectedOption: this.props.selectedOption });
  }
  componentDidUpdate() {
    console.log("newProps", this.props);
    if (this.state.selectedOption !== this.props.selectedOption) {
      this.setState({ selectedOption: this.props.selectedOption});
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
    const { dropdownId, blockName, options, labelId, isRequired, ariaLabel, disabled, selectedOption, onSelectBlur, onSelectChange } = this.props;
    const modifiers = this.props.modifiers ? this.props.modifiers : [];
    if (!labelId && !ariaLabel) {
      throw new Error("Must either have labelId or aria-label");
    }

    let formItemBlockName = blockName ? blockName : "form-item";

    if (selectedOption && this.state.selectedOption ) {
      console.log("Got both passed value and also internal value", selectedOption, this.state.selectedOption);
    }
    let selectProps = {
      id: dropdownId,
      className: bem("select", modifiers, formItemBlockName),
      defaultValue: selectedOption ? selectedOption : undefined,
      "aria-required": isRequired,
      value: this.state.selectedOption ? this.state.selectedOption : undefined,
      disabled: disabled ? disabled : false
    };

    if (labelId) {
      selectProps["aria-labelledby"] = labelId;
    } else {
      selectProps["aria-label"] = ariaLabel;
    }

    if (labelId) {
      selectProps["aria-labelledby"] = labelId;
    } else {
      selectProps["aria-label"] = ariaLabel;
    }

    return (
      <div className={bem("dropdown", modifiers, formItemBlockName)}>
        <select {...selectProps}
          onChange={(e) => this.onSelectChange(e, onSelectChange)}
          onBlur={(e) => this.onSelectChange(e, onSelectBlur)}>
          {options.map((child, key) => {

            return <option key={key.toString()}
              aria-selected={child === this.state.selectedOption}
              value={child}>{child}</option>;
          })}
        </select>

        <Icon decorative={true} name={"arrow"} modifiers={["small"]} />
      </div>
    );
  }
}
