import * as React from "react";
import bem from "../../utils/bem";
import Label from "../Label/Label";

export interface InputProps {
  /** An optional text label for the radio button */
  labelText?: string;
  /** Additional attributes to pass to the <input> tag */
  attributes?: { [key: string]: any };
  /** className you can add in addition to 'input' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Adds the 'disabled' prop to the input when true */
  disabled?: boolean;
  /** Helper for modifiers array; adds 'errored' styling */
  errored?: boolean;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Populates the value of the input */
  value?: string | number;
  /** The name prop indicates into which group of radios this radio belongs.  If none is specified, 'default' will be used */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = React.forwardRef<HTMLInputElement, InputProps>((props, ref?) => {
  const {
    attributes,
    className,
    disabled,
    errored,
    id,
    labelText,
    name,
    value,
    onChange,
  } = props;

  const modifiers = props.modifiers ? props.modifiers : [];

  if (errored) {
    modifiers.push("error");
  }
  return (
    <>
      <input
        id={id}
        className={bem("radio", modifiers, "input", [className])}
        type="radio"
        value={value}
        disabled={disabled}
        name={name || "default"}
        onChange={onChange}
        ref={ref}
        {...attributes}
      />
      {labelText && <Label htmlFor={id}>{labelText}</Label>}
    </>
  );
});

Radio.displayName = "Radio";

export default Radio;
