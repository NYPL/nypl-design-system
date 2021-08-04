import React, { useState, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";

import { DatePickerTypes } from "./DatePickerTypes";
import TextInput, { TextInputRefType } from "../TextInput/TextInput";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";
import bem from "../../utils/bem";

interface DatePickerWrapperProps {
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  dateRange?: boolean;
  labelText: string;
  showLabel?: boolean;
  className?: string;
}

interface CustomTextInputProps {
  showLabel?: boolean;
  labelText: string;
  value?: string;
  onClick?: (data: any) => any;
  onChange?: (data: any) => any;
  attributes: any;
  dsRequired?: boolean;
  disabled?: boolean;
}

export interface DatePickerProps extends DatePickerWrapperProps {
  dateType?: DatePickerTypes;
  dateFormat?: string;
  helperText?: string;
  helperTextTo?: string;
  errorText?: string;
  errored?: boolean;
  required?: boolean;
  disabled?: boolean;
  modifiers?: string[];
  blockName?: string;
  name?: string;
  value?: string;
}

/**
 * A Design System `TextInput` component that is used as the custom input
 * element for the `DatePicker` plugin. This uses `forwardRef` because,
 * internally, the `DatePicker` plugin needs to keep track of the input data.
 * @note This is only used internally for this file.
 * @note we don't declare an `onClick` prop but the `DatePicker` plugin takes
 * care of that. That is used and needed to open/close the popup calendar.
 * @note we can't use the prop name "required" for the `required` prop we need.
 * Instead, we are calling it `dsRequired`. This is because the `DatePicker`
 * plugin internally makes use of the "required" name so we need a new name.
 */
const CustomTextInput = forwardRef<TextInputRefType, CustomTextInputProps>(
  (
    {
      showLabel,
      labelText,
      value,
      onClick,
      onChange,
      disabled,
      dsRequired,
      attributes,
    },
    ref: React.Ref<TextInputRefType>
  ) => (
    <TextInput
      showLabel={showLabel}
      onChange={onChange}
      value={value}
      labelText={labelText}
      disabled={disabled}
      required={dsRequired}
      ref={ref}
      attributes={{ ...attributes, onClick }}
    />
  )
);

/**
 * This is the wrapper component that is rendered as the parent for the input
 * element(s). For a single date input field, we need to render a "div", while
 * for a date range we render a "fieldset".
 * @note This is only used internally for this file.
 */
const DatePickerWrapper: React.FC<DatePickerWrapperProps> = ({
  id,
  dateRange,
  showLabel,
  labelText,
  className = "",
  children,
}) =>
  dateRange ? (
    <fieldset id={`dateRange-${id}`} className={className}>
      {showLabel && <legend>{labelText}</legend>}
      {children}
    </fieldset>
  ) : (
    <div id={`dateRange-${id}`} className={className}>
      {children}
    </div>
  );

/**
 * Returns a single date input field or two date input fields for a date range.
 */
function DatePicker(props: React.PropsWithChildren<DatePickerProps>) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const {
    dateType = DatePickerTypes.Full,
    dateFormat = "yyyy-MM-dd",
    dateRange = false,
    labelText = "From",
    showLabel = true,
    helperText,
    helperTextTo,
    errorText,
    errored,
    required,
    disabled,
    value,
    name,
    id = generateUUID(),
    blockName,
    modifiers,
    className,
  } = props;
  let baseDatePickerAttrs = {
    dateFormat,
    disabled,
  };
  let startDatePickerAttrs = {};
  let endDatePickerAttrs = {};
  let endDatePickerElement = null;
  let startLabelText = labelText;
  let startText = errored ? errorText : helperText;
  let endText = errored ? errorText : helperTextTo;

  if (dateType === DatePickerTypes.Month) {
    baseDatePickerAttrs["showMonthYearPicker"] = true;
    baseDatePickerAttrs["showFullMonthYearPicker"] = true;
    baseDatePickerAttrs.dateFormat = "MM-yy";
  } else if (dateType === DatePickerTypes.Year) {
    baseDatePickerAttrs["showYearPicker"] = true;
    baseDatePickerAttrs["yearItemNumber"] = 8;
    baseDatePickerAttrs.dateFormat = "yyyy";
  }

  startDatePickerAttrs = { ...baseDatePickerAttrs };

  if (dateRange) {
    startDatePickerAttrs = {
      ...startDatePickerAttrs,
      selectsStart: true,
      startDate,
      endDate,
    };
    endDatePickerAttrs = {
      ...baseDatePickerAttrs,
      selectsEnd: true,
      startDate: endDate,
      minDate: startDate,
    };
    startLabelText = "From";
    endDatePickerElement = (
      <>
        <ReactDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          customInput={
            <CustomTextInput
              labelText="To"
              showLabel={showLabel}
              value={value}
              disabled={disabled}
              dsRequired={required}
              attributes={{ name: `${name}-to` }}
            />
          }
          {...endDatePickerAttrs}
        />
        {endText && (
          <HelperErrorText isError={errored}>{endText}</HelperErrorText>
        )}
      </>
    );
  }

  const startDatePickerElement = (
    <>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={
          <CustomTextInput
            labelText={startLabelText}
            showLabel={showLabel}
            value={value}
            disabled={disabled}
            dsRequired={disabled}
            attributes={{ name: `${name}-from` }}
          />
        }
        {...startDatePickerAttrs}
      />
      {startText && (
        <HelperErrorText isError={errored}>{startText}</HelperErrorText>
      )}
    </>
  );

  return (
    <DatePickerWrapper
      id={id}
      dateRange={dateRange}
      showLabel={showLabel}
      labelText={labelText}
      className={bem("datePicker", modifiers, blockName, [className])}
    >
      {startDatePickerElement}
      {endDatePickerElement}
    </DatePickerWrapper>
  );
}

export default DatePicker;
