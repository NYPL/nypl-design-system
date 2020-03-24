
// Form for date ranges
import React from "react";
import Button, { ButtonProps } from "../Button/Button";
import HelperErrorText, { HelperErrorTextOptions } from "./HelperErrorText";
import Input, { InputOptions } from "./Input";
import { LabelOptions } from "./Label";
import bem from "../../../utils/bem";
import { findFirst } from "src/react-components/src/helpers/util/Utils";

export interface DateCheckFormProps {
  blockName?: string;
  baseClass?: string;

  formLabel: JSX.Element;

  fromLabelOpts: LabelOptions;
  fromInputOpts: InputOptions;
  fromHelper: HelperErrorTextOptions;

  toLabelOpts: LabelOptions;
  toInputOpts: InputOptions;
  toHelper: HelperErrorTextOptions;

  showError: boolean;

  error: HelperErrorTextOptions;

  buttonProps?: ButtonProps;
}

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
        <Button id={buttonProps.id} callback={buttonProps.callback}>{buttonProps.content}</Button>
      }
    </fieldset>
  );
}
