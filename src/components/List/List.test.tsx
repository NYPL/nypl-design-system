import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import List from "./List";
import { ListTypes } from "./ListTypes";

describe("Link Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <List type={ListTypes.Unordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("List", () => {
  const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
  const fishDefinitions = [
    {
      term: "Mahi-mahi",
      definition: "The mahi-mahi is an ocean fish known...",
    },
    {
      term: "Golden trout",
      definition: "The golden trout is a beautifully colored fish...",
    },
  ];

  it("renders unordered list", () => {
    render(
      <List type={ListTypes.Unordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
  });

  it("renders unordered list with the `listItems` prop", () => {
    render(<List type={ListTypes.Unordered} listItems={fishArray} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
    expect(screen.getByText("Rainbowfish")).toBeInTheDocument();
    expect(screen.getByText("Suckerfish")).toBeInTheDocument();
  });

  it("renders ordered list", () => {
    render(
      <List type={ListTypes.Ordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
  });

  it("renders ordered list with the `listItems` prop", () => {
    render(<List type={ListTypes.Ordered} listItems={fishArray} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
    expect(screen.getByText("Rainbowfish")).toBeInTheDocument();
    expect(screen.getByText("Suckerfish")).toBeInTheDocument();
  });

  it("returns definition list", () => {
    render(
      <List type={ListTypes.Definition}>
        <dt>Mahi-mahi</dt>
        <dd>The mahi-mahi is an ocean fish known...</dd>
      </List>
    );
    expect(screen.getByRole("definition")).toBeInTheDocument();
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(
      screen.getByText("The mahi-mahi is an ocean fish known...")
    ).toBeInTheDocument();
  });

  it("returns definition list with the `listItems` prop", () => {
    render(
      <List
        type={ListTypes.Definition}
        title="Animal Crossing Fish"
        listItems={fishDefinitions}
      />
    );
    expect(screen.getAllByRole("definition")).toHaveLength(2);
  });

  it("throws an error when you pass an ordered or unordered list children that aren't <li>s", () => {
    expect(() =>
      render(
        <List type={ListTypes.Ordered}>
          <span>Mahi-mahi</span>
          <span>Golden trout</span>
          <span>Rainbowfish</span>
        </List>
      )
    ).toThrowError("Direct children of `List` (ordered) should be `<li>`s");
  });

  it("throws an error when you pass a definition list children that aren't `<dt>`s or `<dd>`s", () => {
    expect(() =>
      render(
        <List type={ListTypes.Definition}>
          <span>Mahi-mahi</span>
          <span>Golden trout</span>
          <span>Rainbowfish</span>
        </List>
      )
    ).toThrowError(
      "Direct children of `List` (definition) should be `<dt>`s or `<dd>`s"
    );
  });

  it("throws an error when no children are passed or the `listItems` prop is not passed", () => {
    expect(() => render(<List type={ListTypes.Ordered}></List>)).toThrowError(
      "Either `<li>` children or the `listItems` prop must be used."
    );
  });

  it("throws an error when children and the `listItems` prop are both passed", () => {
    expect(() =>
      render(
        <List type={ListTypes.Ordered} listItems={fishArray}>
          <li>Mahi-mahi</li>
          <li>Golden trout</li>
          <li>Rainbowfish</li>
          <li>Suckerfish</li>
        </List>
      )
    ).toThrowError(
      "Pass in either `<li>` children or use the `listItems` data prop, don't use both."
    );
  });
});
