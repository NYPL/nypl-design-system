import React, { useState, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";

import Form, { FormRow, FormField } from "../Form/Form";
import { FormSpacing } from "../Form/FormTypes";
import { DatePickerTypes } from "./DatePickerTypes";
import TextInput, {
  InputProps,
  TextInputRefType,
} from "../TextInput/TextInput";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";
import bem from "../../utils/bem";

// The object shape for the DatePicker's start and end date state values.
// Internal use only.
interface FullDateType {
  startDate: Date;
  endDate?: Date;
}

// Used for the input fields' parent wrapper. Internal use only.
interface DateRangeRowProps {
  /** Whether to render a single date input or two for a range of two dates. */
  dateRange?: boolean;
}

// Interface used by the `div` or `fieldset` parent wrapper element.
// Internal use only.
interface DatePickerWrapperProps extends DateRangeRowProps {
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Passed to the `TextInput` component to render a label associated with an input field. */
  labelText: string;
  /** Offers the ability to show the label onscreen or hide it. */
  showLabel?: boolean;
  /** Additional className for use with BEM. See how to work with blockNames and
   * BEM here: http://getbem.com/introduction/ */
  className?: string;
}

// Interface used by the internal DS `TextInput` component as a custom
// component for the ReactDatePicker plugin component. Internal use only.
interface CustomTextInputProps extends InputProps {
  /** Data value used by the ReactDatePicker plugin and the custom TextInput component. */
  value?: string;
  /** Event handler used by the ReactDatePicker plugin to open the popup calendar. */
  onClick?: (data: any) => any;
  /** The ReactDatePicker plugin has its own `required` prop so we use this to
   * pass the value from the parent `DatePicker` component. */
  dsRequired?: boolean;
  /** The ReactDatePicker plugin has its own `id` prop so we use this to pass the
   * value from the parent `DatePicker` component. */
  dsId?: string;
  /** The ReactDatePicker plugin manipulates the ref value so we declare our
   * own for some cases. */
  dsRef?: React.Ref<TextInputRefType>;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  showOptReqLabel?: boolean;
}

// Main interface for the exported DS DatePicker component.
export interface DatePickerProps extends DatePickerWrapperProps {
  /** DatePicker date types that can be rendered. */
  dateType?: DatePickerTypes;
  /** The date format to display. Defaults to "yyyy-MM-dd". */
  dateFormat?: string;
  /** Populates the `HelperErrorText` component in this component. */
  helperText?: string;
  /** Populates the `HelperErrorText` component in the "From" `TextInput` component. */
  helperTextFrom?: string;
  /** Populates the `HelperErrorText` component in the "To" `TextInput` component. */
  helperTextTo?: string;
  /** The initial date value. This must be in the mm/dd/yyyy format. */
  initialDate?: string;
  /** The initialTo date value used for date ranges.
   * This must be in the mm/dd/yyyy format.
   */
  initialDateTo?: string;
  /** The minimum date value that applies to both input fields.
   * This must be in the mm/dd/yyyy format.
   */
  minDate?: string;
  /** The maximum date value that applies to both input fields.
   * This must be in the mm/dd/yyyy format.
   */
  maxDate?: string;
  /** Populates the `HelperErrorText` error state for both "From" and "To" input components. */
  errorText?: string;
  /** Helper for modifiers array; adds 'errored' styling. */
  errored?: boolean;
  /** Adds the 'required' property to the input element(s). */
  required?: boolean;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  showOptReqLabel?: boolean;
  /** Adds the 'disabled' property to the input element(s). */
  disabled?: boolean;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM
   * here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** BlockName for use with BEM. See how to work with blockNames and BEM
   * here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Value name for the single input field or the "From" input field in a date range. */
  nameFrom?: string;
  /** Value name for the "To" input field */
  nameTo?: string;
  /** An additional explicit React ref passed for a date range's "From" input field. */
  refTo?: React.Ref<TextInputRefType>;
  /** The action to perform on the `input`'s onChange function for both fields.
   * This will return the data in an object with `startDate` and `endDate` keys.
   */
  onChange?: (data: FullDateType) => void;
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
      showOptReqLabel,
      errored,
      helperText,
      errorText,
      onClick,
      dsId,
      dsRef,
      attributes,
    },
    ref: React.Ref<TextInputRefType>
  ) => (
    <TextInput
      id={dsId}
      showLabel={showLabel}
      onChange={onChange}
      value={value}
      labelText={labelText}
      disabled={disabled}
      required={dsRequired}
      showOptReqLabel={showOptReqLabel}
      errored={errored}
      helperText={helperText}
      errorText={errorText}
      // Use either the specific prop-based or the forwardRef value.
      // react-datepicker manipulates the `ref` value so sometimes we want a
      // specific ref through the `dsRef` prop.
      ref={dsRef || ref}
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
    <fieldset id={`date-range-${id}`} className={className}>
      <legend className={showLabel ? "" : "sr-only"}>{labelText}</legend>
      {children}
    </fieldset>
  ) : (
    <div id={`date-range-${id}`} className={className}>
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
  dateRange ? (
    <Form spacing={FormSpacing.ExtraSmall}>
      <FormRow>{children}</FormRow>
    </Form>
  ) : (
    <>{children}</>
  );

/**
 * Returns a single date input field or two date input fields for a date range.
 */
const DatePicker = React.forwardRef<TextInputRefType, DatePickerProps>(
  (props, ref?) => {
    const {
      id = generateUUID(),
      dateType = DatePickerTypes.Full,
      dateFormat = "yyyy-MM-dd",
      dateRange = false,
      labelText = "From",
      showLabel = true,
      helperText,
      helperTextFrom,
      helperTextTo,
      errorText,
      errored,
      required,
      showOptReqLabel = true,
      disabled,
      nameFrom,
      nameTo,
      blockName,
      modifiers = [],
      className,
      refTo,
      onChange,
      initialDate,
      initialDateTo,
      minDate,
      maxDate,
    } = props;
    const initStartDate = initialDate ? new Date(initialDate) : new Date();
    const initEndDate = initialDateTo ? new Date(initialDateTo) : new Date();
    let initFullDate: FullDateType = { startDate: initStartDate };
    // Only include the `endDate` key for date ranges.
    if (dateRange) {
      initFullDate = { ...initFullDate, endDate: initEndDate };
    }
    const [fullDate, setFullDate] = useState<FullDateType>(initFullDate);
    // This updates the internal state for the start and end date values,
    // and also calls the `onChange` prop if it was passed to return the
    // date value to the parent.
    const onChangeDefault = (date, value) => {
      setFullDate({ ...fullDate, [value]: date });
      onChange && onChange({ ...fullDate, [value]: date });
    };
    // How many years to display in the DatePickerTypes.Year option.
    const yearsToDisplay = 12;
    // Both ReactDatePicker components share some props.
    let baseDatePickerAttrs = {
      popperClassName: "date-picker-calendar",
      popperPlacement: "bottom-start",
      popperModifiers: [
        {
          name: "offset",
          options: {
            offset: [0, -8],
          },
        },
      ],
      minDate: minDate ? new Date(minDate) : null,
      maxDate: maxDate ? new Date(maxDate) : null,
      dateFormat,
      disabled,
    };
    // Both TextInput components share some props.
    let baseCustomTextInputAttrs = {
      dsRequired: required,
      showOptReqLabel,
      // Always display the labels or the input fields when
      // the DatePicker component is a `dateRange` type.
      showLabel: dateRange ? true : showLabel,
      disabled,
      errored,
      helperText: dateRange ? helperTextFrom : helperText,
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

    if ((ref && !nameFrom) || (refTo && !nameTo)) {
      console.warn(
        "A `ref` or `refTo` prop was passed but not the equivalent `nameFrom` or `nameTo` prop."
      );
    }
    if (onChange && (ref || refTo || nameFrom || nameTo)) {
      console.warn(
        "React `ref` props were passed and an `onChange` prop as well. Use whichever is best for your app but not both."
      );
    }

    // Set the "From" DatePicker values here based off the base props. If a date
    // range is selected additional props get added automatically.
    startDatePickerAttrs = { ...baseDatePickerAttrs };

    // A date range is selected. We must now update the props for the start/"from"
    // input component and render an end/"To" input component.
    if (dateRange) {
      modifiers.push("date-range");
      const endCustomTextInputAttrs = {
        ...baseCustomTextInputAttrs,
        helperText: helperTextTo,
      };
      // These props are used to follow the pattern recommended by the
      // react-datepicker plugin.
      startDatePickerAttrs = {
        ...startDatePickerAttrs,
        selectsStart: true,
        startDate: fullDate.startDate,
        endDate: fullDate.endDate,
      };
      endDatePickerAttrs = {
        ...baseDatePickerAttrs,
        selectsEnd: true,
        minDate: fullDate.startDate,
        startDate: fullDate.startDate,
        endDate: fullDate.endDate,
      };
      startLabelText = "From";
      endDatePickerElement = (
        <ReactDatePicker
          selected={fullDate.endDate}
          onChange={(date) => onChangeDefault(date, "endDate")}
          customInput={
            <CustomTextInput
              labelText="To"
              dsRef={refTo}
              attributes={{ name: nameTo }}
              {...endCustomTextInputAttrs}
            />
          }
          {...endDatePickerAttrs}
        />
      );
    }

    const startDatePickerElement = (
      <ReactDatePicker
        selected={fullDate.startDate}
        onChange={(date) => onChangeDefault(date, "startDate")}
        customInput={
          <CustomTextInput
            labelText={startLabelText}
            dsRef={ref}
            attributes={{ name: nameFrom }}
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
        className={bem("date-picker", modifiers, blockName, [className])}
      >
        <DateRangeRow dateRange={dateRange}>
          <FormField>{startDatePickerElement}</FormField>

          {endDatePickerElement && (
            <FormField>{endDatePickerElement}</FormField>
          )}
        </DateRangeRow>
        {helperText && dateRange && (
          <HelperErrorText isError={false}>{helperText}</HelperErrorText>
        )}
      </DatePickerWrapper>
    );
  }
);

export default DatePicker;
