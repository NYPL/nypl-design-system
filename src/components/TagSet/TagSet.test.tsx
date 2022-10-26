import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import renderer from "react-test-renderer";

import TagSet from "./TagSet";
import { TagSetExploreDataProps } from "./TagSetExplore";
import { TagSetFilterDataProps } from "./TagSetFilter";

const exploreTagSetData = {
  simple: [
    { label: <a href="https://nypl.org">Red</a> },
    { label: <a href="https://nypl.org">Orange</a> },
    { label: <a href="https://nypl.org">Yellow</a> },
    { label: <a href="https://nypl.org">Green</a> },
    { label: <a href="https://nypl.org">Blue</a> },
    { label: <a href="https://nypl.org">Indigo</a> },
    { label: <a href="https://nypl.org">Violet</a> },
  ] as TagSetExploreDataProps[],
  withIcon: [
    {
      iconName: "alertWarningFilled",
      label: <a href="https://nypl.org">Red</a>,
    },
    { iconName: "check", label: <a href="https://nypl.org">Orange</a> },
    { iconName: "check", label: <a href="https://nypl.org">Yellow</a> },
    {
      iconName: "alertWarningFilled",
      label: <a href="https://nypl.org">Green</a>,
    },
    { iconName: "check", label: <a href="https://nypl.org">Blue</a> },
    { iconName: "check", label: <a href="https://nypl.org">Indigo</a> },
    { iconName: "check", label: <a href="https://nypl.org">Violet</a> },
  ] as TagSetExploreDataProps[],
};
const filterTagSetData = {
  simple: [
    { label: "Red" },
    { label: "Orange" },
    { label: "Yellow" },
    { label: "Green" },
    { label: "Blue" },
    { label: "Indigo" },
    { label: "Violet" },
  ] as TagSetFilterDataProps[],
  withIcon: [
    { iconName: "alertWarningFilled", label: "Red" },
    { iconName: "check", label: "Orange" },
    { iconName: "check", label: "Yellow" },
    { iconName: "alertWarningFilled", label: "Green" },
    { iconName: "check", label: "Blue" },
    { iconName: "check", label: "Indigo" },
    { iconName: "check", label: "Violet" },
  ] as TagSetFilterDataProps[],
};

describe("TagSet Accessibility", () => {
  it("passes axe accessibility test for the 'explore' variant", async () => {
    const { container, rerender } = render(
      <TagSet tagSetData={exploreTagSetData.simple} type="explore" />
    );
    expect(await axe(container)).toHaveNoViolations();

    rerender(<TagSet tagSetData={exploreTagSetData.withIcon} type="explore" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for the 'filter' variant", async () => {
    const onClick = jest.fn();
    const { container, rerender } = render(
      <TagSet
        onClick={onClick}
        tagSetData={filterTagSetData.simple}
        type="filter"
      />
    );
    expect(await axe(container)).toHaveNoViolations();

    rerender(
      <TagSet
        onClick={onClick}
        tagSetData={filterTagSetData.withIcon}
        type="filter"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("TagSet Explore", () => {
  it("renders tags", () => {
    // Seven color tags were passed as tags to display.
    render(<TagSet tagSetData={exploreTagSetData.simple} type="explore" />);

    expect(screen.getAllByRole("link")).toHaveLength(7);
  });

  it("renders icons within the tags", () => {
    // Seven icon names were passed to display.
    render(<TagSet tagSetData={exploreTagSetData.withIcon} type="explore" />);

    expect(screen.getAllByTestId("ts-icon")).toHaveLength(7);
  });

  it("logs a warning when the `isDismissible` prop is passed", () => {
    const warn = jest.spyOn(console, "warn");
    // We cannot pass the `isDismissible` prop when the `type` is "explore",
    // but because this is a test, we want to verify the logged message.
    render(
      // @ts-ignore
      <TagSet
        isDismissible
        tagSetData={exploreTagSetData.simple}
        type="explore"
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TagSet: The `isDismissible` prop will be ignored when the `type` prop is set to 'explore'."
    );
  });

  it("logs a warning when the `onClick` prop is passed", () => {
    const warn = jest.spyOn(console, "warn");
    // We cannot pass the `onClick` prop when the `type` is "explore",
    // but because this is a test, we want to verify the logged message.
    render(
      // @ts-ignore
      <TagSet
        onClick={() => {}}
        tagSetData={exploreTagSetData.simple}
        type="explore"
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TagSet: The `onClick` prop will be ignored when the `type` prop is set to 'explore'."
    );
  });

  it("logs a warning when the labels are strings", () => {
    const warn = jest.spyOn(console, "warn");
    // We cannot pass labels as strings when the `type` is "explore", but because
    // this is a test, we want to verify the logged message.
    // @ts-ignore
    render(<TagSet tagSetData={filterTagSetData.simple} type="explore" />);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TagSet: Explore tags require all `label` props to be React components."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const simple = renderer
      .create(<TagSet tagSetData={exploreTagSetData.simple} type="explore" />)
      .toJSON();
    const withIcons = renderer
      .create(<TagSet tagSetData={exploreTagSetData.withIcon} type="explore" />)
      .toJSON();
    const withChakraProps = renderer
      .create(
        <TagSet
          p="s"
          color="ui.error.primary"
          tagSetData={exploreTagSetData.simple}
          type="explore"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <TagSet
          data-testid="testid"
          tagSetData={exploreTagSetData.simple}
          type="explore"
        />
      )
      .toJSON();

    expect(simple).toMatchSnapshot();
    expect(withIcons).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});

describe("TagSet Filter", () => {
  let onClick: jest.MockedFunction<() => void>;

  it("renders tags", () => {
    onClick = jest.fn();
    // Seven color tags were passed as tags to display.
    render(
      <TagSet
        onClick={onClick}
        tagSetData={filterTagSetData.simple}
        type="filter"
      />
    );

    expect(screen.getAllByRole("button")).toHaveLength(7);
  });

  it("renders icons within the tags", () => {
    onClick = jest.fn();
    // Seven icon names were passed to display.
    render(
      <TagSet
        onClick={onClick}
        tagSetData={filterTagSetData.withIcon}
        type="filter"
      />
    );

    expect(screen.getAllByTestId("ts-icon")).toHaveLength(7);
  });

  it("renders close icons when `isDismissible` is true", () => {
    onClick = jest.fn();
    render(
      <TagSet
        isDismissible
        onClick={onClick}
        tagSetData={filterTagSetData.withIcon}
        type="filter"
      />
    );

    expect(screen.getAllByTestId("filter-close-icon")).toHaveLength(7);
  });

  it("renders the correct aria-label when `isDismissible` is true", () => {
    onClick = jest.fn();
    render(
      <TagSet
        isDismissible
        onClick={onClick}
        tagSetData={filterTagSetData.simple}
        type="filter"
      />
    );

    const tagSets = screen.getAllByRole("button");

    expect(tagSets[0]).toHaveAttribute(
      "aria-label",
      "Red, click to remove filter"
    );
    expect(tagSets[1]).toHaveAttribute(
      "aria-label",
      "Orange, click to remove filter"
    );
    expect(tagSets[2]).toHaveAttribute(
      "aria-label",
      "Yellow, click to remove filter"
    );
    expect(tagSets[3]).toHaveAttribute(
      "aria-label",
      "Green, click to remove filter"
    );
    expect(tagSets[4]).toHaveAttribute(
      "aria-label",
      "Blue, click to remove filter"
    );
    expect(tagSets[5]).toHaveAttribute(
      "aria-label",
      "Indigo, click to remove filter"
    );
    expect(tagSets[6]).toHaveAttribute(
      "aria-label",
      "Violet, click to remove filter"
    );
  });

  it("returns the clicked tag's label to the `onClick` function", () => {
    let currentLabel = "";
    const onClick = (selectedLabel: string) => (currentLabel = selectedLabel);
    render(
      <TagSet
        isDismissible
        onClick={onClick}
        tagSetData={filterTagSetData.simple}
        type="filter"
      />
    );

    screen.getByText("Blue").click();
    expect(currentLabel).toEqual("Blue");
    screen.getByText("Red").click();
    expect(currentLabel).toEqual("Red");
    screen.getByText("Violet").click();
    expect(currentLabel).toEqual("Violet");
  });

  it("renders the 'Clear Filters' button when there are more than two tags", () => {
    const onClick = jest.fn();
    const tagSetData = [{ label: "Red" }];
    const { rerender } = render(
      <TagSet
        isDismissible
        onClick={onClick}
        tagSetData={tagSetData}
        type="filter"
      />
    );
    expect(screen.queryByText("Clear Filters")).not.toBeInTheDocument();

    tagSetData.push({ label: "Orange" });
    rerender(
      <TagSet
        isDismissible
        onClick={onClick}
        tagSetData={tagSetData}
        type="filter"
      />
    );
    expect(screen.getByText("Clear Filters")).toBeInTheDocument();
  });

  it("returns 'clearFilters' when the 'Clear Filters' button is clicked", () => {
    let currentLabel = "";
    const onClick = (selectedLabel: string) => (currentLabel = selectedLabel);
    render(
      <TagSet
        isDismissible
        onClick={onClick}
        tagSetData={filterTagSetData.simple}
        type="filter"
      />
    );

    screen.getByText("Clear Filters").click();
    expect(currentLabel).toEqual("clearFilters");
  });

  it("logs a warning when the labels are JSX elements", () => {
    const warn = jest.spyOn(console, "warn");
    // We cannot pass labels as JSX elements when the `type` is "filter", but
    // because this is a test, we want to verify the logged message.
    // @ts-ignore
    render(<TagSet tagSetData={exploreTagSetData.simple} type="filter" />);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TagSet: Filter tags require all `label` props to be strings."
    );
  });

  it("logs a warning when the labels are JSX elements", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <TagSet
        isDismissible
        tagSetData={filterTagSetData.withIcon}
        type="filter"
      />
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir TagSet: Filter tags will not render icons when `isDismissible` is set to true."
    );
  });

  it("renders the UI snapshot correctly", () => {
    onClick = jest.fn();
    const simple = renderer
      .create(
        <TagSet
          onClick={onClick}
          tagSetData={filterTagSetData.simple}
          type="filter"
        />
      )
      .toJSON();
    const withIcons = renderer
      .create(
        <TagSet
          onClick={onClick}
          tagSetData={filterTagSetData.withIcon}
          type="filter"
        />
      )
      .toJSON();
    const isDismissible = renderer
      .create(
        <TagSet
          isDismissible
          onClick={onClick}
          tagSetData={filterTagSetData.withIcon}
          type="filter"
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <TagSet
          p="s"
          color="ui.error.primary"
          onClick={onClick}
          tagSetData={filterTagSetData.simple}
          type="filter"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <TagSet
          data-testid="testid"
          onClick={onClick}
          tagSetData={filterTagSetData.simple}
          type="filter"
        />
      )
      .toJSON();

    expect(simple).toMatchSnapshot();
    expect(withIcons).toMatchSnapshot();
    expect(isDismissible).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
