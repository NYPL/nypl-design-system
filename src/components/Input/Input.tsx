import * as React from "react";
import bem from "../../utils/bem";
import { InputTypes } from "./InputTypes";

export interface InputProps {
  /** Additional attributes to pass to the <input> tag */
  attributes?: { [key: string]: any };
  /** Populates the aria-label on the input */
  ariaLabel?: string;
  /** Populates the aria-labelledby on the input */
  ariaLabelledBy?: string;
  /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
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
  /** Populates the placeholder of the input */
  placeholder?: string;
  /** Will add 'aria-required: true' to input */
  required?: boolean;
  /** HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input */
  type?: InputTypes;
  /** Populates the value of the input */
  value?: string | number;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref?) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    attributes,
    blockName,
    className,
    disabled,
    errored,
    id,
    placeholder,
    required,
    type = "text",
    value,
    onChange,
  } = props;

  const modifiers = props.modifiers ? props.modifiers : [];

  if (errored) {
    modifiers.push("error");
  }
  const transformedInput = (
    <input
      id={id}
      className={bem("input", modifiers, blockName, [className])}
      type={type}
      value={value}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-required={required}
      aria-hidden={type === InputTypes.hidden}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
      {...attributes}
    />
  );

  return transformedInput;
});

Input.displayName = "Input";

export default Input;
