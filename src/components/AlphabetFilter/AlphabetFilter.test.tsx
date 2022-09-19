import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import AlphabetFilter from "./AlphabetFilter";
import userEvent from "@testing-library/user-event";

describe("AlphabetFilter accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <AlphabetFilter onClick={undefined} id="alphabet-filter-id" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test with heading and description", async () => {
    const { container } = render(
      <AlphabetFilter
        onClick={undefined}
        id="alphabet-filter-id"
        headingText="Heading"
        descriptionText="This is a description."
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("AlphabetFilter", () => {
  it("should render a nav with 28 buttons", async () => {
    render(<AlphabetFilter onClick={undefined} id="alphabet-filter-id" />);
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(28);
  });

  it("should set all `Button` children as disabled if isDisabled is true", () => {
    render(
      <AlphabetFilter onClick={undefined} id="alphabet-filter-id" isDisabled />
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeDisabled();
    expect(buttons[20]).toBeDisabled();
  });

  it("should render heading and description if headingText and descriptionText is passed", () => {
    render(
      <AlphabetFilter
        onClick={undefined}
        id="alphabet-filter-id"
        headingText="Heading"
        descriptionText="This is a description."
      />
    );
    const heading = screen.getByRole("heading");
    const description = screen.getByText("This is a description.");
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should have corresponding aria-labels for each button", () => {
    render(<AlphabetFilter onClick={undefined} id="alphabet-filter-id" />);
    const buttons = screen.getAllByRole("button");
    const filterB = buttons[2].getAttribute("aria-label");
    const filterC = buttons[3].getAttribute("aria-label");
    const filterShowAll =
      buttons[buttons.length - 1].getAttribute("aria-label");

    expect(filterB).toEqual("Page B");
    expect(filterC).toEqual("Page C");
    expect(filterShowAll).toEqual("Show All");
  });

  it("should add aria-current to the active letter", () => {
    render(
      <AlphabetFilter
        currentLetter="c"
        onClick={undefined}
        id="alphabet-filter-id"
      />
    );
    const buttons = screen.getAllByRole("button");
    const filterB = buttons[2].getAttribute("aria-current");
    const filterC = buttons[3].getAttribute("aria-current");
    const filterD = buttons[4].getAttribute("aria-current");

    expect(filterB).toEqual(null);
    // Only the current letter has `aria-current="page"` for accessibility.
    expect(filterC).toEqual("page");
    expect(filterD).toEqual(null);
  });

  it("should pass a ref to the nav wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <AlphabetFilter ref={ref} id="alphabet-filter-id" onClick={undefined} />
    );

    expect(container.querySelector("nav")).toBe(ref.current);
  });

  it("should update active letter when letter or show all button is clicked", () => {
    const onClick = (letter: string) => (currentLetter = letter);
    let currentLetter = "c";

    render(
      <AlphabetFilter
        id="alphabet-filter-id"
        currentLetter={currentLetter}
        onClick={onClick}
      />
    );

    const buttons = screen.getAllByRole("button");

    // D button
    userEvent.click(buttons[5]);
    expect(currentLetter).toEqual("e");

    // Show All button
    userEvent.click(buttons[buttons.length - 1]);
    expect(currentLetter).toEqual("showAll");
  });
});
