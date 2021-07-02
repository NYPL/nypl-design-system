import * as React from "react";
import bem from "../../utils/bem";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Label from "../Label/Label";
import generateUUID from "../../helpers/generateUUID";

export interface CheckboxProps {
  /** The checkbox's label.  This will serve as the text content for a `<label>` element if `showlabel` is true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Additional attributes to pass to the `<input>` tag */
  attributes?: { [key: string]: any };
  /** When using the Checkbox as a "controlled" form element, you can specify the Checkbox's checked state using this prop. Learn more about controlled and uncontrolled form fields: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
  checked?: boolean;
  /** className you can add in addition to 'input' */
  className?: string;
  /** Adds the 'disabled' prop to the input when true */
  disabled?: boolean;
  /** Helper for modifiers array; adds 'errored' styling */
  errored?: boolean;
  /** Optional string to populate the HelperErrorText for error state */
  errorText?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** The name prop indicates into which group of checkboxes this checkbox belongs.  If none is specified, 'default' will be used */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Offers the ability to show the checkbox's label onscreen or hide it. Refer to the `labelText` property for more information. */
  showLabel: boolean;
  /** Populates the value of the input */
  value?: string;
}

export const onChangeDefault = () => {
  return;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref?) => {
    const {
      checked,
      className,
      disabled,
      errored,
      errorText,
      helperText,
      id,
      labelText,
      name,
      showLabel,
      value,
    } = props;

    const attributes = props.attributes || {};
    const modifiers = props.modifiers ? props.modifiers : [];
    const checkboxID = id || generateUUID();
    const onChange = props.onChange || onChangeDefault;

    const footnote = errored ? errorText : helperText;

    if (!showLabel) {
      attributes["aria-label"] =
        labelText && footnote ? `${labelText} - ${footnote}` : labelText;
    } else {
      if (footnote) attributes["aria-describedby"] = `${checkboxID}-helperText`;
    }

    if (errored) {
      modifiers.push("error");
    }

    return (
      <>
        <input
          {...(checked !== undefined
            ? {
                checked: checked,
                onChange: onChange,
              }
            : {
                defaultChecked: false,
              })}
          className={bem("checkbox", modifiers, "input", [className])}
          disabled={disabled}
          id={checkboxID}
          name={name || "default"}
          ref={ref}
          type="checkbox"
          value={value}
          {...attributes}
        />
        {labelText && showLabel && (
          <Label htmlFor={checkboxID}>{labelText}</Label>
        )}
        {footnote && showLabel && (
          <HelperErrorText isError={errored} id={id + `-helperText`}>
            {footnote}
          </HelperErrorText>
        )}
      </>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
