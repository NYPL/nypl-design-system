import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import SearchBar, { SelectProps, TextInputProps } from "./SearchBar";

const optionsGroup = [
  "Art",
  "Bushes",
  "Clothing",
  "Flowers",
  "Fossils",
  "Fruits",
  "Furniture",
  "Songs",
  "Tools",
  "Villagers",
];
const selectProps: SelectProps = {
  name: "selectName",
  labelText: "Select a category",
  optionsData: optionsGroup,
};
const textInputProps: TextInputProps = {
  labelText: "Item Search",
  name: "textInputName",
  placeholder: "Item Search",
};
const labelText = "SearchBar label";
const helperText = "Search for items in Animal Crossing New Horizons";
const invalidText = "Could not find the item :(";

describe("SearchBar Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <SearchBar
        helperText={helperText}
        id="id"
        invalidText={invalidText}
        labelText={labelText}
        onSubmit={jest.fn()}
        textInputProps={textInputProps}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with a Select component", async () => {
    const { container } = render(
      <SearchBar
        helperText={helperText}
        id="id"
        invalidText={invalidText}
        labelText={labelText}
        onSubmit={jest.fn()}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("SearchBar", () => {
  const searchBarSubmit = jest.fn();
  const buttonCallback = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the basic form", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText={labelText}
        onSubmit={searchBarSubmit}
        textInputProps={textInputProps}
      />
    );
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(screen.getByRole("search")).toHaveAttribute(
      "aria-label",
      `${labelText} - ${helperText}`
    );
    expect(screen.getByPlaceholderText("Item Search")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders an optional Select component", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText={labelText}
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByLabelText("Select a category")).toBeInTheDocument();
  });

  it("renders the invalid text in the invalid state", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        invalidText={invalidText}
        isInvalid
        labelText={labelText}
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(screen.getByText(invalidText)).toBeInTheDocument();
    expect(screen.queryByText(helperText)).not.toBeInTheDocument();
  });

  it("does not render the default invalid text from the Select or TextInput components", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        invalidText={invalidText}
        isInvalid
        labelText={labelText}
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(
      screen.queryByText("There is an error related to this field.")
    ).not.toBeInTheDocument();
  });

  it("calls the TextInput onChange callback function", () => {
    textInputProps.onChange = jest.fn();

    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText={labelText}
        onSubmit={searchBarSubmit}
        textInputProps={textInputProps}
      />
    );
    const input = screen.getByLabelText(textInputProps.labelText);
    expect(textInputProps.onChange).toHaveBeenCalledTimes(0);

    userEvent.type(input, "search!");

    // Seven times for every letter in the search string
    expect(textInputProps.onChange).toHaveBeenCalledTimes(7);
  });

  it("calls the Select onChange callback function", () => {
    selectProps.onChange = jest.fn();

    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText={labelText}
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    const select = screen.getByLabelText(selectProps.labelText);
    expect(selectProps.onChange).toHaveBeenCalledTimes(0);

    userEvent.selectOptions(select, "Flowers");
    expect(selectProps.onChange).toHaveBeenCalledTimes(1);

    userEvent.selectOptions(select, "Furniture");
    expect(selectProps.onChange).toHaveBeenCalledTimes(2);
  });

  it("calls the callback function for the Button component ", () => {
    render(
      <SearchBar
        buttonOnClick={buttonCallback}
        helperText={helperText}
        id="id"
        labelText={labelText}
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(buttonCallback).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("button"));
    expect(buttonCallback).toHaveBeenCalledTimes(1);
  });

  it("calls the callback function on submit ", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText={labelText}
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(searchBarSubmit).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("button"));
    expect(searchBarSubmit).toHaveBeenCalledTimes(1);
  });

  it("renders a default placeholder", () => {
    const textInputProps: TextInputProps = {
      labelText: "Item Search",
      name: "textInputName",
    };

    render(
      <SearchBar
        id="requiredState"
        isDisabled
        labelText={labelText}
        onSubmit={jest.fn()}
        textInputProps={textInputProps}
      />
    );

    expect(screen.getByPlaceholderText("Search terms")).toBeInTheDocument();
  });

  it("renders 'required' in the placeholder text", () => {
    const { rerender } = render(
      <SearchBar
        id="requiredState"
        isDisabled
        labelText={labelText}
        onSubmit={jest.fn()}
        textInputProps={textInputProps}
      />
    );

    expect(
      screen.queryByPlaceholderText("Item Search (Required)")
    ).not.toBeInTheDocument();

    rerender(
      <SearchBar
        id="requiredState"
        isDisabled
        isRequired
        labelText={labelText}
        onSubmit={jest.fn()}
        textInputProps={textInputProps}
      />
    );
    expect(
      screen.getByPlaceholderText("Item Search (Required)")
    ).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(
        <SearchBar
          helperText={helperText}
          id="basic"
          labelText={labelText}
          onSubmit={jest.fn()}
          textInputProps={textInputProps}
        />
      )
      .toJSON();
    const withSelect = renderer
      .create(
        <SearchBar
          helperText={helperText}
          id="withSelect"
          labelText={labelText}
          onSubmit={jest.fn()}
          selectProps={selectProps}
          textInputProps={textInputProps}
        />
      )
      .toJSON();
    const withoutHelperText = renderer
      .create(
        <SearchBar
          id="withoutHelperText"
          labelText={labelText}
          onSubmit={jest.fn()}
          textInputProps={textInputProps}
        />
      )
      .toJSON();
    const invalidState = renderer
      .create(
        <SearchBar
          id="invalidState"
          isInvalid
          labelText={labelText}
          onSubmit={jest.fn()}
          textInputProps={textInputProps}
        />
      )
      .toJSON();
    const disabledState = renderer
      .create(
        <SearchBar
          id="disabledState"
          isDisabled
          labelText={labelText}
          onSubmit={jest.fn()}
          textInputProps={textInputProps}
        />
      )
      .toJSON();
    const requiredState = renderer
      .create(
        <SearchBar
          id="requiredState"
          isDisabled
          isRequired
          labelText={labelText}
          onSubmit={jest.fn()}
          textInputProps={textInputProps}
        />
      )
      .toJSON();
    const noBrandButtonType = renderer
      .create(
        <SearchBar
          id="noBrandButtonType"
          isDisabled
          isRequired
          labelText={labelText}
          noBrandButtonType={true}
          onSubmit={jest.fn()}
          textInputProps={textInputProps}
        />
      )
      .toJSON();
    const withHeading = renderer
      .create(
        <SearchBar
          id="withHeading"
          labelText={labelText}
          onSubmit={jest.fn()}
          headingText="A Heading"
        />
      )
      .toJSON();
    const withDescription = renderer
      .create(
        <SearchBar
          id="withDescription"
          labelText={labelText}
          onSubmit={jest.fn()}
          descriptionText="A description"
        />
      )
      .toJSON();
    const withHeadingAndDescription = renderer
      .create(
        <SearchBar
          id="withHeadingAndDescription"
          labelText={labelText}
          onSubmit={jest.fn()}
          headingText="A Heading"
          descriptionText="A description"
        />
      )
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(withSelect).toMatchSnapshot();
    expect(withoutHelperText).toMatchSnapshot();
    expect(invalidState).toMatchSnapshot();
    expect(disabledState).toMatchSnapshot();
    expect(requiredState).toMatchSnapshot();
    expect(noBrandButtonType).toMatchSnapshot();
    expect(withHeading).toMatchSnapshot();
    expect(withDescription).toMatchSnapshot();
    expect(withHeadingAndDescription).toMatchSnapshot();
  });
});
