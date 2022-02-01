import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import SearchBar from "./SearchBar";

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
const selectProps = {
  name: "selectName",
  labelText: "Select a category",
  optionsData: optionsGroup,
};
const textInputProps = {
  labelText: "Item Search",
  name: "textInputName",
  placeholder: "Item Search",
};
const helperText = "Search for items in Animal Crossing New Horizons";
const invalidText = "Could not find the item :(";

describe("SearchBar Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <SearchBar
        helperText={helperText}
        id="id"
        invalidText={invalidText}
        labelText="Searchbar"
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

  it("renders the basic form", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText="searchbar"
        onSubmit={searchBarSubmit}
        textInputProps={textInputProps}
      />
    );
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(screen.getByRole("search")).toHaveAttribute(
      "aria-label",
      "searchbar"
    );
    expect(screen.getByPlaceholderText("Item Search")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders an optional Select component", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText="searchbar"
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
        labelText="searchbar"
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
        labelText="searchbar"
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(
      screen.queryByText("There is an error related to this field.")
    ).not.toBeInTheDocument();
  });

  it("calls the callback function on submit ", () => {
    render(
      <SearchBar
        helperText={helperText}
        id="id"
        labelText="searchBar"
        onSubmit={searchBarSubmit}
        selectProps={selectProps}
        textInputProps={textInputProps}
      />
    );
    expect(searchBarSubmit).toHaveBeenCalledTimes(0);
    expect(buttonCallback).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("button"));
    expect(searchBarSubmit).toHaveBeenCalledTimes(1);
    expect(buttonCallback).toHaveBeenCalledTimes(1);
  });

  it("Renders 'required' in the placeholder text", () => {
    const { rerender } = render(
      <SearchBar
        id="requiredState"
        isDisabled
        isRequired
        labelText="searchbar"
        onSubmit={jest.fn()}
        textInputProps={textInputProps}
      />
    );

    expect(
      screen.getByPlaceholderText("Item Search (Required)")
    ).not.toBeInTheDocument();

    rerender(
      <SearchBar
        id="requiredState"
        isDisabled
        isRequired
        labelText="searchbar"
        onSubmit={jest.fn()}
        textInputProps={textInputProps}
      />
    );
    expect(
      screen.getByPlaceholderText("Item Search (Required)")
    ).toBeInTheDocument();
  });

  it("Renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(
        <SearchBar
          helperText={helperText}
          id="basic"
          labelText="searchbar"
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
          labelText="searchbar"
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
          labelText="searchbar"
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
          labelText="searchbar"
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
          labelText="searchbar"
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
          labelText="searchbar"
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
          labelText="searchbar"
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
          labelText="searchbar"
          onSubmit={jest.fn()}
          headingText="A Heading"
        />
      )
      .toJSON();
    const withDescription = renderer
      .create(
        <SearchBar
          id="withDescription"
          labelText="searchbar"
          onSubmit={jest.fn()}
          descriptionText="A description"
        />
      )
      .toJSON();
    const withHeadingAndDescription = renderer
      .create(
        <SearchBar
          id="withHeadingAndDescription"
          labelText="searchbar"
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
