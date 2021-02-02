import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/IconTypes";

export interface DropdownProps {
  /** Additional attributes passed to the checkbox */
  attributes?: { [key: string]: any };

  /** Inner label on the button that opens the dropdown */
  dropdownLabel?: React.ReactNode;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className you can add in addition to 'input' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /* For a controlled component only. If checked is not defined, the state of the uncontrolled native `input` component will be used. */
  checked?: boolean;
  /* For uncontrolled component only. The initial value of an uncontrolled checkbox component. */
  defaultChecked?: boolean;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Dropdown component that shows content on toggle */
export default function Dropdown(
  props: React.PropsWithChildren<DropdownProps>
) {
  const {
    modifiers = [],
    blockName,
    id,
    attributes,
    className,
    dropdownLabel,
    children,
    checked,
    defaultChecked,
    onChange,
  } = props;

  return (
    <div id={id} className={bem("dropdown", modifiers, blockName, [className])}>
      <input
        id={`dropdown-${id}`}
        className={bem("input", modifiers, "dropdown")}
        type="checkbox"
        {...(checked !== undefined
          ? {
              checked: checked,
              "aria-checked": checked,
              onChange: onChange,
            }
          : { defaultChecked: defaultChecked })}
        {...attributes}
      />
      <label
        htmlFor={`dropdown-${id}`}
        className={bem("label-group", modifiers, "dropdown")}
      >
        <span className={bem("label", modifiers, "dropdown")}>
          {dropdownLabel}
        </span>
        <Icon
          decorative={true}
          name={IconNames.minus}
          modifiers={["small", `${IconNames.minus}`]}
        />
        <Icon
          decorative={true}
          name={IconNames.plus}
          modifiers={["small", `${IconNames.plus}`]}
        />
      </label>
      <div className={bem("content", modifiers, "dropdown")}>{children}</div>
    </div>
  );
}
