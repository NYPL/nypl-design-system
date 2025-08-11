import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Heading from "../Heading/Heading";
import List from "./List";

const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
const fishDescriptions = [
  {
    term: "Mahi-mahi",
    description: <p>The mahi-mahi is an ocean fish known...</p>,
  },
  {
    term: "Golden trout",
    description: "The golden trout is a beautifully colored fish...",
  },
];

describe("List Accessibility", () => {
  it("passes axe accessibility test for unordered list", async () => {
    const { container, rerender } = render(
      <List variant="ul">
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(await axe(container)).toHaveNoViolations();

    rerender(<List variant="ul" listItems={fishArray} />);
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test for ordered list", async () => {
    const { container, rerender } = render(
      <List variant="ol">
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(await axe(container)).toHaveNoViolations();

    rerender(<List variant="ol" listItems={fishArray} />);
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test for description list", async () => {
    const { container } = render(
      <List
        variant="dl"
        title="Animal Crossing Fish"
        listItems={fishDescriptions}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("List", () => {
  it("should not render an id if none is passed", () => {
    render(
      <List variant="ul">
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );
    expect(screen.getByTestId("ds-list")).not.toHaveAttribute("id");
  });

  it("renders unordered list", () => {
    render(
      <List variant="ul">
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
  });

  it("renders unordered list with the `listItems` prop", () => {
    render(<List variant="ul" listItems={fishArray} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
    expect(screen.getByText("Rainbowfish")).toBeInTheDocument();
    expect(screen.getByText("Suckerfish")).toBeInTheDocument();
  });

  it("renders ordered list", () => {
    render(
      <List variant="ol">
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
  });

  it("renders ordered list with the `listItems` prop", () => {
    render(<List variant="ol" listItems={fishArray} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
    expect(screen.getByText("Rainbowfish")).toBeInTheDocument();
    expect(screen.getByText("Suckerfish")).toBeInTheDocument();
  });

  it("returns description list", () => {
    render(
      <List variant="dl">
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

  it("returns description list with the `listItems` prop", () => {
    render(
      <List
        variant="dl"
        title="Animal Crossing Fish"
        listItems={fishDescriptions}
      />
    );
    expect(screen.getAllByRole("definition")).toHaveLength(2);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Animal Crossing Fish"
    );
  });

  it("returns description list with custom heading", () => {
    render(
      <List
        variant="dl"
        title={<Heading level="h4">Animal Crossing Fish</Heading>}
        listItems={fishDescriptions}
      />
    );
    expect(screen.getAllByRole("definition")).toHaveLength(2);
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      "Animal Crossing Fish"
    );
  });

  it("consoles a warning when children and the `listItems` prop are both passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <List variant="ol" listItems={fishArray}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
        <li>Rainbowfish</li>
        <li>Suckerfish</li>
      </List>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir List: Pass in either `<li>`, `<dt>`, or `<dd>` children " +
        "or use the `listItems` data prop. Do not use both."
    );
  });

  it("consoles a warning when no children are passed or the `listItems` prop is not passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(<List variant="ol"></List>);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir List: Pass in either `<li>` children or pass data in " +
        "the `listItems` prop, not both."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const unordered = renderer
      .create(<List id="unordered" variant="ul" listItems={fishArray} />)
      .toJSON();
    const unorderedNoStyling = renderer
      .create(
        <List id="ordered" variant="ul" listItems={fishArray} noStyling />
      )
      .toJSON();
    const ordered = renderer
      .create(
        <List id="unordered-no-styling" variant="ol" listItems={fishArray} />
      )
      .toJSON();
    const orderedNoStyling = renderer
      .create(
        <List
          id="ordered-no-styling"
          variant="ol"
          listItems={fishArray}
          noStyling
        />
      )
      .toJSON();
    const description = renderer
      .create(
        <List
          id="description"
          variant="dl"
          title="Animal Crossing Fish"
          listItems={fishDescriptions}
        />
      )
      .toJSON();
    const descriptionWithoutDividers = renderer
      .create(
        <List
          id="description"
          variant="dl"
          title="Animal Crossing Fish"
          showRowDividers={false}
          listItems={fishDescriptions}
        />
      )
      .toJSON();
    const withChakraPropsUnordered = renderer
      .create(
        <List
          id="chakra"
          variant="ul"
          listItems={fishArray}
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherPropsUnordered = renderer
      .create(
        <List
          id="other"
          variant="ul"
          listItems={fishArray}
          data-testid="other"
        />
      )
      .toJSON();
    const withChakraPropsDescription = renderer
      .create(
        <List
          id="chakra"
          variant="dl"
          title="Animal Crossing Fish"
          listItems={fishDescriptions}
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherPropsDescription = renderer
      .create(
        <List
          id="other"
          variant="dl"
          title="Animal Crossing Fish"
          listItems={fishDescriptions}
          data-testid="other"
        />
      )
      .toJSON();

    expect(unordered).toMatchSnapshot();
    expect(unorderedNoStyling).toMatchSnapshot();
    expect(ordered).toMatchSnapshot();
    expect(orderedNoStyling).toMatchSnapshot();
    expect(description).toMatchSnapshot();
    expect(descriptionWithoutDividers).toMatchSnapshot();
    expect(withChakraPropsUnordered).toMatchSnapshot();
    expect(withOtherPropsUnordered).toMatchSnapshot();
    expect(withChakraPropsDescription).toMatchSnapshot();
    expect(withOtherPropsDescription).toMatchSnapshot();
  });

  it("passes a ref to the section or list element", () => {
    const ref1 = React.createRef<
      HTMLDivElement & HTMLUListElement & HTMLOListElement
    >();
    const ref2 = React.createRef<
      HTMLDivElement & HTMLUListElement & HTMLOListElement
    >();
    const { container, rerender } = render(
      <List ref={ref1} variant="ul">
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </List>
    );

    expect(container.querySelector("ul")).toBe(ref1.current);

    rerender(
      <List
        id="description"
        listItems={fishDescriptions}
        ref={ref2}
        title="Animal Crossing Fish"
        variant="dl"
      />
    );

    // This is the same as section accordion to React.
    expect(container.querySelector("div")).toBe(ref1.current);
  });
});
