import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import List from "./List";
import { ListTypes } from "./ListTypes";

const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
const fishDefinitions = [
  {
    term: "Mahi-mahi",
    definition: <p>The mahi-mahi is an ocean fish known...</p>,
  },
  {
    term: "Golden trout",
    definition: "The golden trout is a beautifully colored fish...",
  },
];

describe("List Accessibility", () => {
  it("passes axe accessibility test for unordered list", async () => {
    const { container, rerender } = render(
      <List type={ListTypes.Unordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(await axe(container)).toHaveNoViolations();

    rerender(<List type={ListTypes.Unordered} listItems={fishArray} />);
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test for ordered list", async () => {
    const { container, rerender } = render(
      <List type={ListTypes.Ordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(await axe(container)).toHaveNoViolations();

    rerender(<List type={ListTypes.Ordered} listItems={fishArray} />);
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test for definition list", async () => {
    const { container } = render(
      <List
        type={ListTypes.Definition}
        title="Animal Crossing Fish"
        listItems={fishDefinitions}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("List", () => {
  it("renders unordered list", () => {
    render(
      <List type={ListTypes.Unordered}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
  });

  it("renders unordered list with the `listItems` prop", () => {
    render(<List type={ListTypes.Unordered} listItems={fishArray} />);

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

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
  });

  it("renders ordered list with the `listItems` prop", () => {
    render(<List type={ListTypes.Ordered} listItems={fishArray} />);

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

  it("consoles a warning when children and the `listItems` prop are both passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <List type={ListTypes.Ordered} listItems={fishArray}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
        <li>Rainbowfish</li>
        <li>Suckerfish</li>
      </List>
    );
    expect(warn).toHaveBeenCalledWith(
      "Pass in either `<li>`, `<dt>`, or `<dd>` children or use the `listItems` data prop, but don't use both."
    );
  });

  it("consoles a warning when no children are passed or the `listItems` prop is not passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(<List type={ListTypes.Ordered}></List>);
    expect(warn).toHaveBeenCalledWith(
      "Either `<li>` children or the `listItems` prop must be used."
    );
  });

  it("consoles a warning when you pass an ordered or unordered list children that aren't <li>s", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <List type={ListTypes.Ordered}>
        <span>Mahi-mahi</span>
        <span>Golden trout</span>
        <span>Rainbowfish</span>
      </List>
    );
    expect(warn).toHaveBeenCalledWith(
      "Direct children of `List` (ol) should be `<li>`s."
    );
  });

  it("consoles a warning when you pass a definition list children that aren't `<dt>`s or `<dd>`s", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <List type={ListTypes.Definition}>
        <span>Mahi-mahi</span>
        <span>Golden trout</span>
        <span>Rainbowfish</span>
      </List>
    );
    expect(warn).toHaveBeenCalledWith(
      "Direct children of `List` (definition) should be `<dt>`s and `<dd>`s."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const unordered = renderer
      .create(
        <List id="unordered" type={ListTypes.Unordered} listItems={fishArray} />
      )
      .toJSON();
    const unorderedNoStyling = renderer
      .create(
        <List
          id="ordered"
          type={ListTypes.Unordered}
          listItems={fishArray}
          noStyling
        />
      )
      .toJSON();
    const ordered = renderer
      .create(
        <List
          id="unordered-no-styling"
          type={ListTypes.Ordered}
          listItems={fishArray}
        />
      )
      .toJSON();
    const orderedNoStyling = renderer
      .create(
        <List
          id="ordered-no-styling"
          type={ListTypes.Ordered}
          listItems={fishArray}
          noStyling
        />
      )
      .toJSON();
    const definition = renderer
      .create(
        <List
          id="definition"
          type={ListTypes.Definition}
          title="Animal Crossing Fish"
          listItems={fishDefinitions}
        />
      )
      .toJSON();

    expect(unordered).toMatchSnapshot();
    expect(unorderedNoStyling).toMatchSnapshot();
    expect(ordered).toMatchSnapshot();
    expect(orderedNoStyling).toMatchSnapshot();
    expect(definition).toMatchSnapshot();
  });
});
