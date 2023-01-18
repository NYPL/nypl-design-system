import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import StyledList from "./StyledList";

const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
const fishJSXArray = [
  <b key="mahi">Mahi-mahi</b>,
  <b key="trout">Golden trout</b>,
  <i key="rainbow">Rainbowfish</i>,
  <span key="suckerfish">Suckerfish</span>,
];

describe("StyledList Accessibility", () => {
  it("passes axe accessibility test for li children", async () => {
    const { container } = render(
      <StyledList>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </StyledList>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test for listItems data array", async () => {
    const { container } = render(<StyledList listItems={fishArray} />);
    expect(await axe(container)).toHaveNoViolations();
  });
  it("passes axe accessibility test for listItems JSX data array", async () => {
    const { container } = render(<StyledList listItems={fishJSXArray} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("StyledList", () => {
  it("renders unordered list", () => {
    render(
      <StyledList>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
      </StyledList>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
  });

  it("renders unordered list with the `listItems` prop", () => {
    render(<StyledList listItems={fishArray} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Mahi-mahi")).toBeInTheDocument();
    expect(screen.getByText("Golden trout")).toBeInTheDocument();
    expect(screen.getByText("Rainbowfish")).toBeInTheDocument();
    expect(screen.getByText("Suckerfish")).toBeInTheDocument();
  });

  it("consoles a warning when children and the `listItems` prop are both passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <StyledList listItems={fishArray}>
        <li>Mahi-mahi</li>
        <li>Golden trout</li>
        <li>Rainbowfish</li>
        <li>Suckerfish</li>
      </StyledList>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir StyledList: Pass in either `<li>` children or use the " +
        "`listItems` data prop. Do not use both."
    );
  });

  it("consoles a warning when you pass children that aren't <li>s", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <StyledList>
        <span>Mahi-mahi</span>
        <span>Golden trout</span>
        <span>Rainbowfish</span>
      </StyledList>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir StyledList: Direct children of `StyledList` (ul) must be `<li>`s."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const unorderedChildren = renderer
      .create(
        <StyledList>
          <li>Mahi-mahi</li>
          <li>Golden trout</li>
          <li>Rainbowfish</li>
          <li>Suckerfish</li>
        </StyledList>
      )
      .toJSON();
    const unorderedArray = renderer
      .create(<StyledList listItems={fishArray} />)
      .toJSON();
    const unorderedJSXArray = renderer
      .create(<StyledList listItems={fishJSXArray} />)
      .toJSON();
    const captionTextSize = renderer
      .create(<StyledList listItems={fishArray} textSize="caption" />)
      .toJSON();
    const defaultTextSize = renderer
      .create(<StyledList listItems={fishArray} textSize="caption" />)
      .toJSON();
    const miniTextSize = renderer
      .create(<StyledList listItems={fishArray} textSize="mini" />)
      .toJSON();
    const tagTextSize = renderer
      .create(<StyledList listItems={fishArray} textSize="tag" />)
      .toJSON();
    const withChakraProps = renderer
      .create(
        <StyledList
          id="chakra"
          listItems={fishArray}
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <StyledList id="other" listItems={fishArray} data-testid="other" />
      )
      .toJSON();

    expect(unorderedChildren).toMatchSnapshot();
    expect(unorderedArray).toMatchSnapshot();
    expect(unorderedJSXArray).toMatchSnapshot();
    expect(captionTextSize).toMatchSnapshot();
    expect(defaultTextSize).toMatchSnapshot();
    expect(miniTextSize).toMatchSnapshot();
    expect(tagTextSize).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
