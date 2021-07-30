import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import bem from "../../utils/bem";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Label from "../Label/Label";
import generateUUID from "../../helpers/generateUUID";

export interface DatePickerProps {
  dateType: string;
  dateFormat: string;
  dateRange: boolean;
  labelText: string;
  /** Optional string to populate the HelperErrorText for error state */
  errorText?: string;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** Offers the ability to show the checkbox's label onscreen or hide it. Refer to the `labelText` property for more information. */
  showLabel: boolean;
  /** Adds the 'disabled' prop to the input when true */
  disabled?: boolean;
  /** Helper for modifiers array; adds 'errored' styling */
  errored?: boolean;
  /** className you can add in addition to 'input' */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** BlockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** The name prop indicates into which group of checkboxes this checkbox belongs.  If none is specified, 'default' will be used */
  // name?: string;
  // /** The action to perform on the `<input>`'s onChange function  */
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // /** Populates the value of the input */
  // value?: string;
}

// const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
//   (props, ref?) => {
const DSDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
  // return <div>ok</div>;
};

export default DSDatePicker;
