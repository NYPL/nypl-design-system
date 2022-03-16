import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { useState, forwardRef } from "react";
import ReactDatePicker from "react-datepicker";

import { DatePickerTypes } from "./DatePickerTypes";
import Fieldset from "../Fieldset/Fieldset";
import { FormRow, FormField } from "../Form/Form";
import { FormGaps } from "../Form/FormTypes";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import { helperTextMargin } from "../../theme/components/global";
import TextInput, {
  InputProps,
  TextInputRefType,
} from "../TextInput/TextInput";
import generateUUID from "../../helpers/generateUUID";

// The object shape for the DatePicker's start and end date state values.
export interface FullDateType {
  /** Date object that gets returned for the onChange
   * function only for date ranges. */
  endDate?: Date;
  /** Date object that gets returned for the onChange function. */
  startDate: Date;
}

// Used for the input fields' parent wrapper. Internal use only.
interface DateRangeRowProps {
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Whether to render a single date input or two for a range of two dates. */
  isDateRange?: boolean;
}

// Interface used by the `div` or `fieldset` parent wrapper element.
// Internal use only.
interface DatePickerWrapperProps extends DateRangeRowProps {
  /** Additional className. */
  className?: string;
  /** Adds the 'required' property to the input element(s). */
  isRequired?: boolean;
  /** Passed to the `TextInput` component to render a label associated with an input field. */
  labelText: string;
  /** Offers the ability to show the label onscreen or hide it. */
  showLabel?: boolean;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  showOptReqLabel?: boolean;
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
  /** The date format to display. Defaults to "yyyy-MM-dd".
   * Must be in ISO-8601 format. */
  dateFormat?: string;
  /** DatePicker date types that can be rendered. */
  dateType?: DatePickerTypes;
  /** Populates the `HelperErrorText` component in this component. */
  helperText?: HelperErrorTextType;
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
  invalidText?: HelperErrorTextType;
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
      additionalStyles = {},
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
      showHelperInvalidText,
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
      showHelperInvalidText={showHelperInvalidText}
      showOptReqLabel={showOptReqLabel}
      isInvalid={isInvalid}
      helperText={helperText}
      invalidText={invalidText}
      // Use either the specific prop-based or the `forwardRef` value.
      // `react-datepicker` manipulates the `ref` value so when we
      // want a specific ref, use the `dsRef` prop.
      ref={dsRef || ref}
      attributes={{ ...attributes, onClick }}
      additionalStyles={additionalStyles}
    />
  )
);

/**
 * This is the wrapper component that is rendered as the parent for the input
 * element(s). For a single date input field, we need to render a "div", while
 * for a date range we render a "fieldset".
 * @note This is only used internally for this file.
 */
const DatePickerWrapper: React.FC<DatePickerWrapperProps> = chakra(
  ({
    children,
    className,
    id,
    isDateRange,
    isRequired,
    labelText,
    showLabel,
    showOptReqLabel,
    ...rest
  }) => (
    <FormField id={`${id}-form-field`} {...rest}>
      {isDateRange ? (
        <Fieldset
          id={id}
          className={className}
          isLegendHidden={!showLabel}
          legendText={labelText}
          optReqFlag={showOptReqLabel}
          isRequired={isRequired}
        >
          {children}
        </Fieldset>
      ) : (
        children
      )}
    </FormField>
  ),
  { shouldForwardProp: () => true }
);

/**
 * This is the wrapper component that conditionally renders the input fields
 * in a `FormRow` only for date range options. This is used for a better visual
 * layout for the two side-by-side date input fields.
 * @note This is only used internally for this file.
 */
const DateRangeRow: React.FC<DateRangeRowProps> = ({
  id,
  isDateRange,
  children,
}) =>
  isDateRange ? (
    <FormRow id={`${id}-form-row`} gap={FormGaps.ExtraSmall}>
      {children}
    </FormRow>
  ) : (
    <>{children}</>
  );

/**
 * Returns a single date input field or two date input fields for a date range.
 */
export const DatePicker = chakra(
  React.forwardRef<TextInputRefType, DatePickerProps>((props, ref?) => {
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
      ...rest
    } = props;
    const styles = useMultiStyleConfig("DatePicker", {});
    const finalStyles = isDateRange ? styles : {};
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
    // Both `ReactDatePicker` components share some props.
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
    };
    // Both custom `TextInput` components share some props.
    let baseCustomTextInputAttrs = {
      dsId: `${id}-start`,
      isRequired,
      // In the date range type, don't display the "required"/"optional" text
      // in individual input labels. It'll display in the legend element.
      showOptReqLabel: isDateRange ? false : showOptReqLabel,
      // Always display the labels for the input fields when
      // the DatePicker component is a date range type.
      showLabel: isDateRange ? true : showLabel,
      isDisabled,
      isInvalid,
      helperText: isDateRange ? helperTextFrom : helperText,
      showHelperInvalidText,
      invalidText,
      additionalStyles: finalStyles.subLabels,
    };
    // These are attribute objects for the `react-datepicker` package component.
    let startDatePickerAttrs = {};
    let endDatePickerAttrs = {};
    // This sets set only for date ranges for the "To" input field.
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

    // Set the "From" DatePicker values here based on the base props. If a date
    // range is selected, additional props get added automatically.
    startDatePickerAttrs = { ...baseDatePickerAttrs };

    // A date range is selected. We must now update the props for the
    // "start"/"from" input component and render an "end"/"To" input component.
    if (isDateRange) {
      const endCustomTextInputAttrs = {
        ...baseCustomTextInputAttrs,
        dsId: `${id}-end`,
        helperText: helperTextTo,
      };
      // These props are used to follow the pattern recommended by
      // the react-datepicker plugin.
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
        isRequired={isRequired}
        showOptReqLabel={showOptReqLabel}
        {...rest}
      >
        <DateRangeRow id={id} isDateRange={isDateRange}>
          <FormField id={`${id}-start-form`}>
            {startDatePickerElement}
          </FormField>

          {endDatePickerElement && (
            <FormField id={`${id}-end-form`}>{endDatePickerElement}</FormField>
          )}
        </DateRangeRow>
        {helperText && isDateRange && showHelperInvalidText && (
          <Box __css={helperTextMargin}>
            <HelperErrorText
              id={`${id}-helper-text`}
              isInvalid={false}
              text={helperText}
            />
          </Box>
        )}
      </DatePickerWrapper>
    );
  }),
  { shouldForwardProp: () => true }
);

export default DatePicker;
