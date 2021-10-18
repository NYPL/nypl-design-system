import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import DatePicker from "./DatePicker";
import { DatePickerTypes } from "./DatePickerTypes";
import { TextInputRefType } from "../TextInput/TextInput";

/** This adds a "0" padding for date values under "10". */
const str_pad = (n) => String("0" + n).slice(-2);
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

describe("DatePicker Accessibility", () => {
  it("passes axe accessibility for a single date input", async () => {
    const { container } = render(
      <DatePicker labelText="Select the date you want to visit NYPL" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility for a date range", async () => {
    const { container } = render(
      <DatePicker
        labelText="Select the date range you want to visit NYPL"
        dateRange={true}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("DatePicker", () => {
  const todaysDate = new Date();
  /** Returns today's year, month, and day values. */
  const getTodaysValues = () => {
    const year = todaysDate.getFullYear();
    const month = str_pad(todaysDate.getMonth() + 1);
    const day = str_pad(todaysDate.getDate());
    return [year, month, day];
  };
  /** Returns today's date in string format based on the DatePicker type. */
  const getTodaysDateDisplay = (type?) => {
    const [year, month, day] = getTodaysValues();
    if (DatePickerTypes.Year === type) {
      return `${year}`;
    } else if (DatePickerTypes.Month === type) {
      return `${month}-${year}`;
    }
    return `${year}-${month}-${day}`;
  };

  describe("Single input", () => {
    it("should render the basic date input field including a date", () => {
      render(
        <DatePicker labelText="Select the full date you want to visit NYPL" />
      );
      const [year, month, day] = getTodaysValues();
      const date = getTodaysDateDisplay();
      const input = screen.getByLabelText(
        /Select the full date you want to visit NYPL/i
      );

      expect(input).toBeInTheDocument();
      expect(input).not.toHaveAttribute("aria-label");
      // Date format based on component specification yyyy-mm-dd.
      expect(date).toEqual(`${year}-${month}-${day}`);
      expect(screen.getByDisplayValue(date)).toBeInTheDocument();
    });

    it("should render with an initial date", () => {
      render(
        <DatePicker
          labelText="Select the full date you want to visit NYPL"
          initialDate="1/2/1988"
        />
      );
      const date = screen.getByDisplayValue("1988-01-02");

      expect(date).toBeInTheDocument();
    });

    it("should render the 'month' DatePicker type", () => {
      render(
        <DatePicker
          dateType={DatePickerTypes.Month}
          labelText="Select the month you want to visit NYPL"
        />
      );
      const [year, month] = getTodaysValues();
      const date = getTodaysDateDisplay(DatePickerTypes.Month);

      expect(
        screen.getByLabelText(/Select the month you want to visit NYPL/i)
      ).toBeInTheDocument();
      // Date format based on component specification mm-yyyy.
      expect(date).toEqual(`${month}-${year}`);
      expect(screen.getByDisplayValue(date)).toBeInTheDocument();
    });

    it("should render the 'year' DatePicker type", () => {
      render(
        <DatePicker
          dateType={DatePickerTypes.Year}
          labelText="Select the month you want to visit NYPL"
        />
      );
      const [year] = getTodaysValues();
      const date = getTodaysDateDisplay(DatePickerTypes.Year);

      expect(
        screen.getByLabelText(/Select the month you want to visit NYPL/i)
      ).toBeInTheDocument();
      // Date format based on component specification yyyy.
      expect(date).toEqual(`${year}`);
      expect(screen.getByDisplayValue(date)).toBeInTheDocument();
    });

    it("should render a custom date format", () => {
      const customDateFormat1 = "yyyy/dd/MM";
      const customDateFormat2 = "MM/dd/yyyy";
      const { rerender } = render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          dateFormat={customDateFormat1}
        />
      );
      const [year, month, day] = getTodaysValues();
      const dateFormat1 = `${year}/${day}/${month}`;

      expect(screen.getByDisplayValue(dateFormat1)).toBeInTheDocument();

      const dateFormat2 = `${month}/${day}/${year}`;
      rerender(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          dateFormat={customDateFormat2}
        />
      );
      expect(screen.getByDisplayValue(dateFormat2)).toBeInTheDocument();
    });

    it("should hide the input label but add an aria-label", () => {
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          showLabel={false}
        />
      );
      const input = screen.getByLabelText(
        /Select the date you want to visit NYPL/i
      );

      expect(
        screen.queryByDisplayValue(/Select the date you want to visit NYPL/i)
      ).not.toBeInTheDocument();
      expect(input).toHaveAttribute("aria-label");
    });

    it("should render with helper text and error text", () => {
      const { rerender } = render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          invalidText="Please select a valid date."
        />
      );

      // When not errored, we expect only the helper text to appear.
      expect(
        screen.getByLabelText(/Select the date you want to visit NYPL/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText("Note that the Library may be closed on Sundays.")
      ).toBeInTheDocument();
      expect(
        screen.queryByText("Please select a valid date.")
      ).not.toBeInTheDocument();

      rerender(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          invalidText="Please select a valid date."
          isInvalid
        />
      );
      // When errored, we expect only the error text to appear.
      expect(
        screen.queryByText("Note that the Library may be closed on Sundays.")
      ).not.toBeInTheDocument();
      expect(
        screen.getByText("Please select a valid date.")
      ).toBeInTheDocument();
    });

    // TODO: this should also be for the invalid text.
    it("should not render the helper text when 'showHelperInvalidText' is false", () => {
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          invalidText="Please select a valid date."
          showHelperInvalidText={false}
          isInvalid
        />
      );

      expect(
        screen.queryByText("Note that the Library may be closed on Sundays.")
      ).not.toBeInTheDocument();
    });

    it("should render a disabled input field", () => {
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          isDisabled={true}
        />
      );

      expect(
        screen.getByLabelText(/Select the date you want to visit NYPL/i)
      ).toHaveAttribute("disabled");
    });

    it("should render a required label", () => {
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          required={true}
        />
      );

      expect(screen.getByText(/required/i)).toBeInTheDocument();
    });

    it("should pass the value to the `onChange` function", () => {
      let dateObject: any = {};
      const onChange = (data) => {
        dateObject = data;
      };
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          required={true}
          onChange={onChange}
        />
      );

      const input = screen.getByLabelText(
        /Select the date you want to visit NYPL/i
      );
      const date = getTodaysDateDisplay();
      const midMonthDay = "15";

      // Let's select a new day.
      userEvent.click(input);
      // The popup displays.
      userEvent.click(screen.getByText(midMonthDay));

      const newDayValue = date.slice(0, -2) + midMonthDay;
      expect(screen.getByDisplayValue(newDayValue)).toBeInTheDocument();

      const { startDate } = dateObject;
      const valueFromOnChange = `${startDate.getFullYear()}-${str_pad(
        startDate.getMonth() + 1
      )}-${str_pad(startDate.getDate())}`;
      expect(newDayValue).toEqual(valueFromOnChange);
    });

    it("should throw a warning when refs are used but not `name` props", () => {
      const warn = jest.spyOn(console, "warn");
      const ref = React.createRef<TextInputRefType>();
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          ref={ref}
        />
      );
      expect(warn).toHaveBeenCalledWith(
        "A `ref` or `refTo` prop was passed but not the equivalent `nameFrom` or `nameTo` prop."
      );
    });

    it("should throw a warning when `onChange` is passed as well as a `ref` prop.", () => {
      const warn = jest.spyOn(console, "warn");
      const ref = React.createRef<TextInputRefType>();
      const onChange = (_data) => {};
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          ref={ref}
          nameFrom="start-date"
          onChange={onChange}
        />
      );
      expect(warn).toHaveBeenCalledWith(
        "React `ref` props were passed and an `onChange` prop as well. Use whichever is best for your app but not both."
      );
    });

    it("should not render a required label if the 'showOptReqLabel' flag is false", () => {
      render(
        <DatePicker
          labelText="Select the date you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          required={true}
          showOptReqLabel={false}
        />
      );

      expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
    });
  });

  describe("Date Range", () => {
    it("should render the date range with two input fields", () => {
      render(
        <DatePicker
          dateRange={true}
          labelText="Select the date range you want to visit NYPL"
        />
      );
      const [year, month, day] = getTodaysValues();
      const date = getTodaysDateDisplay();

      expect(
        screen.getByText(/Select the date range you want to visit NYPL/i)
      ).toBeInTheDocument();
      // Date format based on component specification yyyy-mm-dd.
      expect(date).toEqual(`${year}-${month}-${day}`);
      // There are two input fields with the date displaying.
      expect(screen.getAllByDisplayValue(date)).toHaveLength(2);
    });

    it("should render the initial dates", () => {
      render(
        <DatePicker
          labelText="Select the full date you want to visit NYPL"
          dateRange={true}
          initialDate="1/2/1988"
          initialDateTo="3/4/1990"
        />
      );
      const dateFrom = screen.getByDisplayValue("1988-01-02");
      const dateTo = screen.getByDisplayValue("1990-03-04");

      expect(dateFrom).toBeInTheDocument();
      expect(dateTo).toBeInTheDocument();
    });

    it("should render two input labels and three separate helper text", () => {
      render(
        <DatePicker
          dateRange={true}
          labelText="Select the date range you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          helperTextFrom="Note for the 'from' field."
          helperTextTo="Note for the 'to' field."
          invalidText="Please select a valid date range."
        />
      );
      // There are two labels for each input.
      expect(screen.getByText("From")).toBeInTheDocument();
      expect(screen.getByText("To")).toBeInTheDocument();
      // Helper text for the component
      expect(
        screen.getByText(/Note that the Library may be closed on Sundays./i)
      ).toBeInTheDocument();
      // Helper text for the "From" input
      expect(
        screen.getByText(/Note for the 'from' field./i)
      ).toBeInTheDocument();
      // Helper text for the "To" input
      expect(screen.getByText(/Note for the 'to' field./i)).toBeInTheDocument();
    });

    it("should render based on other props", () => {
      const { rerender } = render(
        <DatePicker
          dateRange
          labelText="Select the date range you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          helperTextTo="Note for the 'to' field."
          invalidText="Please select a valid date range."
          isInvalid
        />
      );

      expect(
        screen.getAllByText("Please select a valid date range.")
      ).toHaveLength(2);

      rerender(
        <DatePicker
          dateRange
          labelText="Select the date range you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          helperTextTo="Note for the 'to' field."
          invalidText="Please select a valid date range."
          isDisabled
        />
      );

      expect(screen.getByLabelText(/From/i)).toHaveAttribute("disabled");
      expect(screen.getByLabelText(/To/i)).toHaveAttribute("disabled");

      rerender(
        <DatePicker
          dateRange
          labelText="Select the date range you want to visit NYPL"
          helperText="Note that the Library may be closed on Sundays."
          helperTextTo="Note for the 'to' field."
          invalidText="Please select a valid date range."
          required
        />
      );

      expect(screen.getAllByText(/required/i)).toHaveLength(2);
    });

    /* // REVISIT THIS TEST
    it("should select two new dates", () => {
      render(
        <DatePicker
          dateRange={true}
          labelText="Select the date range you want to visit NYPL"
        />
      );
      const fromInput = screen.getByLabelText(/From/i);
      const toInput = screen.getByLabelText(/To/i);
      const date = getTodaysDateDisplay();

      expect(screen.getAllByDisplayValue(date)).toHaveLength(2);

      // Let's select a new day.
      userEvent.click(fromInput);
      // The popup displays. Select a new day.
      const newDateFrom =
        todaysDate.getDate() > 28 ? 1 : todaysDate.getDate() + 1;
      const newDateTo =
        todaysDate.getDate() > 28 ? 18 : todaysDate.getDate() + 5;
      const newDateToSelect = str_pad(newDateFrom);
      userEvent.click(screen.getAllByText(newDateFrom)[0]);

      // We selected a new day but kept everything else the same. So we just
      // need to remove the older day with the new "2" selected date.
      // Example: 2021-08-01 -> 2 is selected -> 2021-08-02
      const newFromValue = `${date.slice(0, -2)}${newDateToSelect}`;
      expect(screen.getByDisplayValue(newFromValue)).toBeInTheDocument();
      // The "To" input should only have the older value now.
      expect(screen.getAllByDisplayValue(date)).toHaveLength(1);

      // Now select the "To" date.
      userEvent.click(toInput);
      // The popup displays.
      userEvent.click(screen.getByText(newDateTo));

      const newToValue = `${date.slice(0, -2)}${newDateTo}`;
      expect(screen.getByDisplayValue(newToValue)).toBeInTheDocument();
      // The original date value is no longer in display.
      expect(screen.queryAllByDisplayValue(date)).toHaveLength(0);
      // The "From" date value wasn't affected by this!
      expect(screen.getByDisplayValue(newFromValue)).toBeInTheDocument();
    });
    */
  });

  describe("Popup Calendar", () => {
    it("should render a popup calendar for the full date", () => {
      render(<DatePicker labelText="Select the date you want to visit NYPL" />);
      const input = screen.getByLabelText(
        /Select the date you want to visit NYPL/i
      );
      const [year] = getTodaysValues();
      const monthFullName = monthArray[todaysDate.getMonth()];

      expect(
        screen.queryByText(`${monthFullName} ${year}`)
      ).not.toBeInTheDocument();
      expect(screen.queryByText("Su")).not.toBeInTheDocument();

      userEvent.click(input);

      // In the display, the calendar displays "Month Year" such as
      // "August 2021" for example.
      expect(screen.getByText(`${monthFullName} ${year}`)).toBeInTheDocument();
      // This calendar displays columns with the days of the week.
      expect(screen.getByText("Su")).toBeInTheDocument();
      expect(screen.getByText("Mo")).toBeInTheDocument();
      expect(screen.getByText("Tu")).toBeInTheDocument();
      expect(screen.getByText("We")).toBeInTheDocument();
      expect(screen.getByText("Th")).toBeInTheDocument();
      expect(screen.getByText("Fr")).toBeInTheDocument();
      expect(screen.getByText("Sa")).toBeInTheDocument();
    });

    it("should select a new date from the calendar", () => {
      render(<DatePicker labelText="Select the date you want to visit NYPL" />);
      const input = screen.getByLabelText(
        /Select the date you want to visit NYPL/i
      );
      const date = getTodaysDateDisplay();
      const midMonthDay = "15";

      expect(screen.getByDisplayValue(date)).toBeInTheDocument();

      // Let's select a new day.
      userEvent.click(input);
      // The popup displays.
      userEvent.click(screen.getByText(midMonthDay));

      // We selected a new day but kept everything else the same. So we just
      // need to remove the older day with the new "15" selected date.
      // Example: 2021-08-01 -> 15 is selected -> 2021-08-15
      const newDayValue = date.slice(0, -2) + midMonthDay;
      expect(screen.getByDisplayValue(newDayValue)).toBeInTheDocument();

      // Let's select a new month
      userEvent.click(input);
      // The popup displays.
      expect(
        screen.getByText(monthArray[todaysDate.getMonth()], { exact: false })
      ).toBeInTheDocument();
      userEvent.click(screen.getByLabelText("Next Month"));
      userEvent.click(screen.getByLabelText("Next Month"));

      // We are two months ahead but still selecting the midmonth day.
      userEvent.click(screen.getByText(midMonthDay));
      // So only the month should change accordingly. The month value from JS'
      // Date object is 0-index so we have to add 3.
      const newMonthValue = `${newDayValue.substr(0, 5)}${str_pad(
        todaysDate.getMonth() + 3
      )}${newDayValue.substr(7)}`;
      expect(screen.getByDisplayValue(newMonthValue)).toBeInTheDocument();
    });

    it("should render a popup calendar for the month date", () => {
      render(
        <DatePicker
          dateType={DatePickerTypes.Month}
          labelText="Select the month you want to visit NYPL"
        />
      );
      const input = screen.getByLabelText(
        /Select the month you want to visit NYPL/i
      );
      const [year] = getTodaysValues();

      expect(screen.queryByText(year)).not.toBeInTheDocument();
      expect(screen.queryByText("Jan")).not.toBeInTheDocument();

      userEvent.click(input);

      // In the display, the calendar displays "Year" such as "2021".
      expect(screen.getByText(year)).toBeInTheDocument();
      // This calendar displays all 12 months but only the first three
      // characters such as "Jan", "Feb", and so on.
      monthArray.forEach((month) => {
        expect(screen.getByText(month.slice(0, 3))).toBeInTheDocument();
      });
    });

    it("should select a new month from the calendar", () => {
      render(
        <DatePicker
          dateType={DatePickerTypes.Month}
          labelText="Select the month you want to visit NYPL"
        />
      );
      const input = screen.getByLabelText(
        /Select the month you want to visit NYPL/i
      );
      const date = getTodaysDateDisplay(DatePickerTypes.Month);
      let currentMonthSelected = monthArray[todaysDate.getMonth() + 1];
      let currentMonthSelectedDisplay = currentMonthSelected.slice(0, 3);

      expect(screen.getByDisplayValue(date)).toBeInTheDocument();
      expect(
        screen.queryByText(currentMonthSelectedDisplay)
      ).not.toBeInTheDocument();

      // Let's select a new day.
      userEvent.click(input);
      // The popup displays.

      expect(screen.getByText(currentMonthSelectedDisplay)).toBeInTheDocument();

      userEvent.click(screen.getByText("Jan"));

      // We selected a new month but kept the year the same.
      // Example: 08-2021 -> "Jan" -> 01-2021
      expect(
        screen.getByDisplayValue(`01-${date.substr(3)}`)
      ).toBeInTheDocument();
    });

    it("should render a popup calendar for the year date", () => {
      render(
        <DatePicker
          dateType={DatePickerTypes.Year}
          labelText="Select the year you want to visit NYPL"
        />
      );
      const input = screen.getByLabelText(
        /Select the year you want to visit NYPL/i
      );
      const [year] = getTodaysValues();

      expect(
        screen.queryByText(`${(year as any) - 4} - ${(year as any) + 7}`)
      ).not.toBeInTheDocument();

      userEvent.click(input);

      // In the display, the calendar displays a date range from four years
      // before the current year to seven years after the current year. For year
      // 2021, it will display 2017 - 2028.
      expect(
        screen.getByText(`${(year as any) - 4} - ${(year as any) + 7}`)
      ).toBeInTheDocument();
      // This calendar displays 12 years to select from.
      // It should display the four previous years from the current year.
      for (let i = 4; i > 0; i--) {
        expect(screen.getByText((year as any) - i)).toBeInTheDocument();
      }
      // It should display the eight next years from the current year.
      for (let i = 0; i < 8; i++) {
        expect(screen.getByText((year as any) + i)).toBeInTheDocument();
      }
    });

    it("should select a new year from the calendar", () => {
      render(
        <DatePicker
          dateType={DatePickerTypes.Year}
          labelText="Select the year you want to visit NYPL"
        />
      );
      const input = screen.getByLabelText(
        /Select the year you want to visit NYPL/i
      );
      const [year] = getTodaysValues();

      expect(screen.getByDisplayValue(year)).toBeInTheDocument();

      // Let's select a new day.
      userEvent.click(input);
      // The popup displays.

      // Select a new year
      userEvent.click(screen.getByText("2024"));

      expect(screen.getByDisplayValue("2024")).toBeInTheDocument();
    });
  });
});
