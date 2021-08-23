import React from "react";
import bem from "../../utils/bem";
import Label from "../Label/Label";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";

export interface SelectProps {
  /** DEPRECATED - When passed, will populate the aria-label on the select */
  ariaLabel?: string;
  /** Additional attributes passed to the <select> tag */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** ClassName you can add in addition to 'select' */
  className?: string;
  children?: React.ReactNode;
  /** When true, disables the select */
  disabled?: boolean;
  /** Helper for modifiers array; adds 'errored' styling */
  errored?: boolean;
  /** Populates the HelperErrorText for error state */
  errorText?: string;
  /** DEPRECATED - ID of associated HelperText */
  helperTextId?: string;
  /** Populates the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** DEPRECATED - Attribute indicating that an option with a non-empty string value must be selected */
  isRequired?: boolean;
  /** DEPRECATED - ID of associated label */
  labelId?: string;
  /** Provides text for a `Label` component if `showLabel` is set to `true`; populates a `aria-label` attribute on the select input if `showLabel` is set to `false`. */
  labelText: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** The name of the select element to use in form submission */
  name: string;
  /** Passes select's current value to the React state handler */
  onBlur?: (event: React.FormEvent) => void;
  /** Passes selects' current value to the React state handler */
  onChange?: (event: React.FormEvent) => void;
  /** Will add `aria-required: true` and native HTML `required` attribute to the select input */
  required?: boolean;
  /** The value of the selected option */
  selectedOption?: string;
  /** Offers the ability to show the label onscreen or hide it. Refer to the `labelText` property for more information. */
  showLabel?: boolean;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  showOptReqLabel?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref?) => {
    const {
      ariaLabel = null,
      blockName,
      children,
      className,
      errored,
      errorText,
      helperText,
      helperTextId,
      isRequired,
      labelId,
      labelText,
      onBlur,
      onChange,
      name,
      required,
      attributes = {},
      disabled = false,
      selectedOption,
      showLabel,
      showOptReqLabel = true,
    } = props;

    const modifiers = props.modifiers ? props.modifiers : [];
    const id = props.id || generateUUID();
    let ariaLabelledBy = null;

    if (!showLabel) attributes["aria-label"] = labelText;

    if (helperText && showLabel)
      attributes["aria-describedby"] = `${id}-helperText`;

    if (errored) modifiers.push("error");

    const req = isRequired || required;
    const optReqFlag = req ? "Required" : "Optional";

    const errorOutput = errorText
      ? errorText
      : "There is an error related to this field.";

    const footnote = errored ? errorOutput : helperText;

    // Support for deprecated prop
    if (ariaLabel) attributes["aria-label"] = ariaLabel;

    // Support for deprecated props
    if (labelId && !helperTextId) {
      ariaLabelledBy = labelId;
    } else if (helperTextId && !labelId) {
      ariaLabelledBy = helperTextId;
    } else if (labelId && helperTextId) {
      ariaLabelledBy = labelId + " " + helperTextId;
    }

    if (React.Children.count(children) > 10) {
      console.warn(
        "NYPL DS recommends that <select> fields have no more than 10 options; an auto-complete text input is a good alternative for 11 or more options."
      );
    }

    if (React.Children.count(children) < 4) {
      console.warn(
        "NYPL DS recommends that <select> fields have at least 4 options; a radio button group is a good alternative for 3 or fewer options."
      );
    }

    if (ariaLabel) {
      console.warn(
        "The ariaLabel prop has been deprecated in the Select component and will be removed in a future release. Check the documentation for updated props."
      );
    }

    if (helperTextId) {
      console.warn(
        "The helperTextId prop has been deprecated in the Select component and will be removed in a future release. Check the documentation for updated props."
      );
    }

    if (isRequired === true || isRequired === false) {
      console.warn(
        "The isRequired prop has been deprecated in the Select component and will be removed in a future release. Check the documentation for updated props."
      );
    }

    if (labelId) {
      console.warn(
        "The labelId prop has been deprecated in the Select component and will be removed in a future release. Check the documentation for updated props."
      );
    }

    return (
      <div className="select">
        {labelText && showLabel && (
          <Label
            htmlFor={id}
            optReqFlag={showOptReqLabel && optReqFlag}
            id={id + `-label`}
          >
            {labelText}
          </Label>
        )}
        <select
          name={name}
          id={id}
          className={bem("selectfield", modifiers, blockName, [className])}
          aria-required={req}
          required={req}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          value={selectedOption}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          {...attributes}
        >
          {React.Children.map(children, (child, key) => {
            return React.cloneElement(child as React.ReactElement<any>, {
              "aria-selected": children[key]
                ? children[key].props.children === selectedOption
                : false,
            });
          })}
        </select>
        {(helperText || errored) && (
          <HelperErrorText isError={errored} id={id + `-helperText`}>
            {footnote}
          </HelperErrorText>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
