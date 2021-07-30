import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import SearchBar from "./SearchBar";

describe("SearchBar Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <SearchBar id="id" ariaLabel="searchbar" onSubmit={jest.fn()} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("SearchBar", () => {
  const searchBarSubmit = jest.fn();
  const buttonCallback = jest.fn();

  it("Renders SearchBar", () => {
    render(
      <SearchBar id="id" ariaLabel="searchbar" onSubmit={searchBarSubmit} />
    );
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(screen.getByRole("search")).toHaveAttribute(
      "aria-label",
      "searchbar"
    );
  });

  it("Search Bar calls call back on Submit ", () => {
    render(
      <SearchBar ariaLabel="searchBar" id="id" onSubmit={searchBarSubmit}>
        <Button
          buttonType={ButtonTypes.Primary}
          id="button"
          onClick={buttonCallback}
          type="submit"
        >
          Search
        </Button>
      </SearchBar>
    );
    expect(searchBarSubmit).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByRole("button"));
    expect(searchBarSubmit).toHaveBeenCalledTimes(1);
  });
});
