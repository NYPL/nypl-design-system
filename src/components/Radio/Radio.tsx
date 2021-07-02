import * as React from "react";
import bem from "../../utils/bem";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Label from "../Label/Label";
import generateUUID from "../../helpers/generateUUID";

export interface RadioProps {
  /** The radio button's label.  This will serve as the text content for a `<label>` element if `showlabel` is true, or an "aria-label" if `showLabel` is false. */
  labelText: string;
  /** Additional attributes to pass to the `<input>` tag */
  attributes?: { [key: string]: any };
  /** When using the Radio as a "controlled" form element, you can specify the Radio's checked state using this prop. Learn more about controlled and uncontrolled form fields: https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ */
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
  /** The name prop indicates into which group of radios this radio belongs.  If none is specified, 'default' will be used */
  name?: string;
  /** The action to perform on the `<input>`'s onChange function  */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Offers the ability to show the radio's label onscreen or hide it. Refer to the `labelText` property for more information. */
  showLabel: boolean;
  /** Populates the value of the input */
  value?: string;
}

export const onChangeDefault = () => {
  return;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref?) => {
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
  const radioID = id || generateUUID();
  const onChange = props.onChange || onChangeDefault;

  const footnote = errored ? errorText : helperText;

  if (!showLabel) {
    attributes["aria-label"] =
      labelText && footnote ? `${labelText} - ${footnote}` : labelText;
  } else {
    if (footnote) attributes["aria-describedby"] = `${radioID}-helperText`;
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
        className={bem("radio", modifiers, "", [className])}
        disabled={disabled}
        id={radioID}
        name={name || "default"}
        ref={ref}
        type="radio"
        value={value}
        onChange={onChange}
        {...attributes}
      />
      {labelText && showLabel && <Label htmlFor={radioID}>{labelText}</Label>}
      {footnote && showLabel && (
        <HelperErrorText isError={errored} id={id + `-helperText`}>
          {footnote}
        </HelperErrorText>
      )}
    </>
  );
});

Radio.displayName = "Radio";

export default Radio;
