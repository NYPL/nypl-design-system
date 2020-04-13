import React from "react";
import Button, { ButtonProps } from "../Button/Button";
import HelperErrorText, { HelperErrorTextOptions } from "./HelperErrorText";
import Input, { InputOptions } from "./Input";
import { LabelOptions } from "./Label";
import bem from "../../../utils/bem";

export interface DateCheckFormProps {
  /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Optional baseClass for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  baseClass?: string;

  /** The Label to describe the form */
  formLabel: JSX.Element;

  /** The Label to describe the from input */
  fromLabelOpts: LabelOptions;
  /** The from input */
  fromInputOpts: InputOptions;
  /** Helper text for the from input */
  fromHelper?: HelperErrorTextOptions;

  /** The Label to describe the to input */
  toLabelOpts: LabelOptions;
  /** The to input */
  toInputOpts: InputOptions;
  /** Helper text for the to input */
  toHelper?: HelperErrorTextOptions;

  /** Whether the form is currently in an error state */
  showError: boolean;
  /** The error text to render */
  error?: HelperErrorTextOptions;

  /** The submit button */
  buttonProps?: ButtonProps;
}

/* Input fields for date ranges. */

export default function DateRangeForm(props: DateCheckFormProps) {
  const {
    blockName = "date-range",
    baseClass,
    formLabel,
    fromLabelOpts,
    fromInputOpts,
    fromHelper,
    toLabelOpts,
    toInputOpts,
    toHelper,
    showError,
    error,
    buttonProps } = props;
    if (showError && !error) {
      throw new Error("Error should be shown, but no Error Content exists");
    }

  return (
    <fieldset className={bem(blockName, [], baseClass)}>
      <legend>{formLabel}</legend>
      <div className="input-row">
        <Input
          baseClass="input-row"
          labelId={fromLabelOpts.id}
          labelContent={fromLabelOpts.labelContent}
          inputId={fromInputOpts.inputId}
          inputType="number"
          inputValue={fromInputOpts.inputValue}
          onInputChange={fromInputOpts.onInputChange}
          helperContentOpts={fromHelper} />
        <Input
          baseClass="input-row"
          labelId={toLabelOpts.id}
          labelContent={toLabelOpts.labelContent}
          inputId={toInputOpts.inputId}
          inputType="number"
          inputValue={toInputOpts.inputValue}
          onInputChange={toInputOpts.onInputChange}
          helperContentOpts={toHelper}
        />
      </div>
      {showError &&
        <HelperErrorText isError={true} id={error.id}>{error.content}</HelperErrorText>
      }
      {buttonProps &&
        <Button id={buttonProps.id} {...buttonProps}>{buttonProps.content}</Button>
      }
    </fieldset>
  );
}
