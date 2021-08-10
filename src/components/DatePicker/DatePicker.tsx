import React, { useState, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";

import { FormRow, FormField } from "../Form/Form";
import { DatePickerTypes } from "./DatePickerTypes";
import TextInput, {
  InputProps,
  TextInputRefType,
} from "../TextInput/TextInput";
import generateUUID from "../../helpers/generateUUID";
import bem from "../../utils/bem";

interface DateRangeRowProps {
  /** Whether to render a single date input or two for a range of two dates. */
  dateRange?: boolean;
}

// Interface used by the `div` or `fieldset` parent wrapper element.
interface DatePickerWrapperProps extends DateRangeRowProps {
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Passed to the `TextInput` component to render a label associated with an input field. */
  labelText: string;
  /** Offers the ability to show the label onscreen or hide it. */
  showLabel?: boolean;
  /** Additional className for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  className?: string;
}

// Interface used by the DS `TextInput` component as a custom component for the
// ReactDatePicker plugin component.
interface CustomTextInputProps extends InputProps {
  /** Data value used by the ReactDatePicker plugin and the custom TextInput component. */
  value?: string;
  /** Event handler used by the ReactDatePicker plugin to open the popup calendar. */
  onClick?: (data: any) => any;
  /** The ReactDatePicker plugin has its own `required` prop so we use this to pass the value from the parent `DatePicker` component. */
  dsRequired?: boolean;
}

// Main interface for the exported DS DatePicker component.
export interface DatePickerProps extends DatePickerWrapperProps {
  /** DatePicker date types that can be rendered. */
  dateType?: DatePickerTypes;
  /** The date format to display. Defaults to "yyyy-MM-dd". */
  dateFormat?: string;
  /** Populates the `HelperErrorText` component in the "From" `TextInput` component. */
  helperText?: string;
  /** Populates the `HelperErrorText` component in the "To" `TextInput` component. */
  helperTextTo?: string;
  /** Populates the `HelperErrorText` error state for both "From" and "To" input components. */
  errorText?: string;
  /** Helper for modifiers array; adds 'errored' styling. */
  errored?: boolean;
  /** Adds the 'required' property to the input element(s). */
  required?: boolean;
  /** Adds the 'disabled' property to the input element(s). */
  disabled?: boolean;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Value name for the input fields. The respective "From" and "To" fields appends "-from" and "-to". */
  name?: string;
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
      onChange,
      value,
      labelText,
      disabled,
      dsRequired,
      errored,
      helperText,
      errorText,
      onClick,
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
      errored={errored}
      helperText={helperText}
      errorText={errorText}
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
      <legend className={showLabel ? "sr-only" : ""}>{labelText}</legend>
      {children}
    </fieldset>
  ) : (
    <div id={`dateRange-${id}`} className={className}>
      {children}
    </div>
  );

/**
 * This is the wrapper component that conditionally renders the input fields
 * in a `FormRow` only for date range options. This is used for a better visual
 * layout for the two side-by-side date input fields.
 * @note This is only used internally for this file.
 */
const DateRangeRow: React.FC<DateRangeRowProps> = ({ dateRange, children }) =>
  dateRange ? <FormRow>{children}</FormRow> : <>{children}</>;

/**
 * Returns a single date input field or two date input fields for a date range.
 */
function DatePicker(props: React.PropsWithChildren<DatePickerProps>) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const {
    id = generateUUID(),
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
    name,
    blockName,
    modifiers,
    className,
  } = props;
  // How many years to display in the DatePickerTypes.Year option.
  const yearsToDisplay = 12;
  // Both ReactDatePicker components share some props.
  let baseDatePickerAttrs = {
    popperClassName: "datepicker-calendar",
    popperPlacement: "bottom",
    dateFormat,
    disabled,
  };
  // Both TextInput components share some props.
  let baseCustomTextInputAttrs = {
    dsRequired: required,
    // Always display the labels when it's a `dateRange` type.
    showLabel: dateRange ? true : showLabel,
    disabled,
    errored,
    helperText,
    errorText,
  };
  let startDatePickerAttrs = {};
  let endDatePickerAttrs = {};
  let endDatePickerElement = null;
  // This changes to "From" when `dateRange` is true.
  let startLabelText = labelText;

  // Update the appropriate props for the selected date type to render.
  if (dateType === DatePickerTypes.Month) {
    baseDatePickerAttrs["showMonthYearPicker"] = true;
    baseDatePickerAttrs.dateFormat = "MM-yyyy";
  } else if (dateType === DatePickerTypes.Year) {
    baseDatePickerAttrs["showYearPicker"] = true;
    baseDatePickerAttrs["yearItemNumber"] = yearsToDisplay;
    baseDatePickerAttrs.dateFormat = "yyyy";
  }

  // Set the "From" DatePicker values here based off the base props. If a date
  // range is selected additional props get added automatically.
  startDatePickerAttrs = { ...baseDatePickerAttrs };

  // A date range is selected. We must now update the props for the start/"from"
  // input component and render an end/"To" input component.
  if (dateRange) {
    const endCustomTextInputAttrs = {
      ...baseCustomTextInputAttrs,
      helperText: helperTextTo,
    };
    // These props are used to follow the pattern recommended by the
    // react-datepicker plugin.
    startDatePickerAttrs = {
      ...startDatePickerAttrs,
      selectsStart: true,
      startDate,
      endDate,
    };
    endDatePickerAttrs = {
      ...baseDatePickerAttrs,
      selectsEnd: true,
      minDate: startDate,
      startDate,
      endDate,
    };
    startLabelText = "From";
    endDatePickerElement = (
      <ReactDatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        customInput={
          <CustomTextInput
            labelText="To"
            attributes={{ name: `${name}-to` }}
            {...endCustomTextInputAttrs}
          />
        }
        {...endDatePickerAttrs}
      />
    );
  }

  const startDatePickerElement = (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={
        <CustomTextInput
          labelText={startLabelText}
          attributes={{ name: `${name}-from` }}
          {...baseCustomTextInputAttrs}
        />
      }
      {...startDatePickerAttrs}
    />
  );

  return (
    <DatePickerWrapper
      id={id}
      dateRange={dateRange}
      showLabel={showLabel}
      labelText={labelText}
      className={bem("datePicker", modifiers, blockName, [className])}
    >
      <DateRangeRow dateRange={dateRange}>
        <FormField>{startDatePickerElement}</FormField>

        {endDatePickerElement && <FormField>{endDatePickerElement}</FormField>}
      </DateRangeRow>
    </DatePickerWrapper>
  );
}

export default DatePicker;
