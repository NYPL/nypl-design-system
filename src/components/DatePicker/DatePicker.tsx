import React, { useState, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { Box, useStyleConfig } from "@chakra-ui/react";

import { FormRow, FormField } from "../Form/Form";
import { DatePickerTypes } from "./DatePickerTypes";
import TextInput, {
  InputProps,
  TextInputRefType,
} from "../TextInput/TextInput";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import generateUUID from "../../helpers/generateUUID";

// The object shape for the DatePicker's start and end date state values.
// Internal use only.
interface FullDateType {
  /** Date object that gets returned for the onChange
   * function only for date ranges. */
  endDate?: Date;
  /** Date object that gets returned for the onChange function. */
  startDate: Date;
}

// Used for the input fields' parent wrapper. Internal use only.
interface DateRangeRowProps {
  /** Whether to render a single date input or two for a range of two dates. */
  isDateRange?: boolean;
}

// Interface used by the `div` or `fieldset` parent wrapper element.
// Internal use only.
interface DatePickerWrapperProps extends DateRangeRowProps {
  /** Additional className. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Passed to the `TextInput` component to render a label associated with an input field. */
  labelText: string;
  /** Offers the ability to show the label onscreen or hide it. */
  showLabel?: boolean;
}

// Interface used by the internal DS `TextInput` component as a custom
// component for the ReactDatePicker plugin component. Internal use only.
interface CustomTextInputProps extends InputProps {
  /** The ReactDatePicker plugin has its own `id` prop so we use this to pass the
   * value from the parent `DatePicker` component. */
  dsId?: string;
  /** The ReactDatePicker plugin manipulates the ref value so we declare our
   * own for some cases. */
  dsRef?: React.Ref<TextInputRefType>;
  /** The ReactDatePicker plugin has its own `required` prop so we use this to
   * pass the value from the parent `DatePicker` component. */
  isRequired?: boolean;
  /** Event handler used by the ReactDatePicker plugin to open the popup calendar. */
  onClick?: (data: any) => any;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  showOptReqLabel?: boolean;
  /** Data value used by the ReactDatePicker plugin and the custom TextInput component. */
  value?: string;
}

// Main interface for the exported DS DatePicker component.
export interface DatePickerProps extends DatePickerWrapperProps {
  /** The date format to display. Defaults to "yyyy-MM-dd". */
  dateFormat?: string;
  /** DatePicker date types that can be rendered. */
  dateType?: DatePickerTypes;
  /** Populates the `HelperErrorText` component in this component. */
  helperText?: string;
  /** Populates the `HelperErrorText` component in the "From" `TextInput` component. */
  helperTextFrom?: string;
  /** Populates the `HelperErrorText` component in the "To" `TextInput` component. */
  helperTextTo?: string;
  /** The initial date value. This must be in the mm/dd/yyyy format. */
  initialDate?: string;
  /** The initialTo date value used for date ranges.
   * This must be in the mm/dd/yyyy format. */
  initialDateTo?: string;
  /** Populates the `HelperErrorText` error state for both "From"
   * and "To" input components. */
  invalidText?: string;
  /** Adds the 'disabled' property to the input element(s). */
  isDisabled?: boolean;
  /** Adds 'isInvalid' styling. */
  isInvalid?: boolean;
  /** Adds the 'required' property to the input element(s). */
  isRequired?: boolean;
  /** The maximum date value that applies to both input fields.
   * This must be in the mm/dd/yyyy format. */
  maxDate?: string;
  /** The minimum date value that applies to both input fields.
   * This must be in the mm/dd/yyyy format. */
  minDate?: string;
  /** Value name for the single input field or the "From" input field in a date range. */
  nameFrom?: string;
  /** Value name for the "To" input field */
  nameTo?: string;
  /** The action to perform on the `input`'s onChange function for both fields.
   * This will return the data in an object with `startDate` and `endDate` keys.
   */
  onChange?: (data: FullDateType) => void;
  /** An additional explicit React ref passed for a date range's "To"
   * input field. Note that the "From" input takes the initial "ref" value. */
  refTo?: React.Ref<TextInputRefType>;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  showOptReqLabel?: boolean;
}

/**
 * A Design System `TextInput` component that is used as the custom input
 * element for the `react-datepicker` plugin. This uses `forwardRef` because,
 * internally, the `react-datepicker` plugin needs to keep track of the input data.
 * @note This is only used internally for this file.
 * @note we don't declare an `onClick` prop but the `react-datepicker` plugin
 * takes care of that. That is used and needed to open/close the popup calendar.
 */
const CustomTextInput = forwardRef<TextInputRefType, CustomTextInputProps>(
  (
    {
      attributes,
      dsId,
      dsRef,
      helperText,
      invalidText,
      isDisabled,
      isInvalid,
      isRequired,
      labelText,
      onChange,
      onClick,
      showLabel,
      showOptReqLabel,
      value,
    },
    ref: React.Ref<TextInputRefType>
  ) => (
    <TextInput
      id={dsId}
      showLabel={showLabel}
      onChange={onChange}
      value={value}
      labelText={labelText}
      isDisabled={isDisabled}
      isRequired={isRequired}
      showOptReqLabel={showOptReqLabel}
      isInvalid={isInvalid}
      helperText={helperText}
      invalidText={invalidText}
      // Use either the specific prop-based or the `forwardRef` value.
      // `react-datepicker` manipulates the `ref` value so when we
      // want a specific ref, use the `dsRef` prop.
      ref={dsRef || ref}
      attributes={{ ...attributes, onClick }}
    />
  )
);

const Fieldset: React.FC<any> = ({ hideLegend, labelText, children }) => {
  const styles = useStyleConfig("Fieldset", { hideLegend });
  return (
    <Box as="fieldset" __css={styles}>
      <legend>{labelText}</legend>
      {children}
    </Box>
  );
};

/**
 * This is the wrapper component that is rendered as the parent for the input
 * element(s). For a single date input field, we need to render a "div", while
 * for a date range we render a "fieldset".
 * @note This is only used internally for this file.
 */
const DatePickerWrapper: React.FC<DatePickerWrapperProps> = ({
  children,
  isDateRange,
  labelText,
  showLabel,
}) => (
  <FormField>
    {isDateRange ? (
      <Fieldset hideLegend={!showLabel} labelText={labelText}>
        {children}
      </Fieldset>
    ) : (
      children
    )}
  </FormField>
);

/**
 * This is the wrapper component that conditionally renders the input fields
 * in a `FormRow` only for date range options. This is used for a better visual
 * layout for the two side-by-side date input fields.
 * @note This is only used internally for this file.
 */
const DateRangeRow: React.FC<DateRangeRowProps> = ({ isDateRange, children }) =>
  isDateRange ? <FormRow>{children}</FormRow> : <>{children}</>;

/**
 * Returns a single date input field or two date input fields for a date range.
 */
const DatePicker = React.forwardRef<TextInputRefType, DatePickerProps>(
  (props, ref?) => {
    const {
      className,
      dateFormat = "yyyy-MM-dd",
      dateType = DatePickerTypes.Full,
      helperText,
      helperTextFrom,
      helperTextTo,
      id = generateUUID(),
      initialDate,
      initialDateTo,
      invalidText,
      isDateRange = false,
      isDisabled,
      isInvalid,
      isRequired,
      labelText = "From",
      maxDate,
      minDate,
      nameFrom,
      nameTo,
      onChange,
      refTo,
      showHelperInvalidText = true,
      showLabel = true,
      showOptReqLabel = true,
    } = props;
    const initStartDate = initialDate ? new Date(initialDate) : new Date();
    const initEndDate = initialDateTo ? new Date(initialDateTo) : new Date();
    let initFullDate: FullDateType = { startDate: initStartDate };
    // Only include the `endDate` key for date ranges.
    if (isDateRange) {
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
      isDisabled,
    };
    // Both TextInput components share some props.
    let baseCustomTextInputAttrs = {
      isRequired,
      showOptReqLabel,
      // Always display the labels or the input fields when
      // the DatePicker component is a `dateRange` type.
      showLabel: isDateRange ? true : showLabel,
      isDisabled,
      isInvalid,
      helperText: isDateRange ? helperTextFrom : helperText,
      invalidText,
    };
    let startDatePickerAttrs = {};
    let endDatePickerAttrs = {};
    let endDatePickerElement = null;
    // This changes to "From" when `isDateRange` is true.
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

    // A date range is selected. We must now update the props for the
    // start/"from" input component and render an end/"To" input component.
    if (isDateRange) {
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
        isDateRange={isDateRange}
        showLabel={showLabel}
        labelText={labelText}
        className={className}
      >
        <DateRangeRow isDateRange={isDateRange}>
          <FormField>{startDatePickerElement}</FormField>

          {endDatePickerElement && (
            <FormField>{endDatePickerElement}</FormField>
          )}
        </DateRangeRow>
        {helperText && isDateRange && showHelperInvalidText && (
          <HelperErrorText isInvalid={false}>{helperText}</HelperErrorText>
        )}
      </DatePickerWrapper>
    );
  }
);

export default DatePicker;
