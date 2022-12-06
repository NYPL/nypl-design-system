import { axe } from "jest-axe";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import MatchMedia from "../../__tests__/mediaMatchMock";
import userEvent from "@testing-library/user-event";

import FilterBar from "./FilterBar";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";
import useFilterBar from "../../hooks/useFilterBar";

let matchMedia: MatchMedia;

const multiSelectItems = [
  {
    id: "colors",
    name: "Colors",
    items: [
      { id: "red", name: "Red" },
      { id: "blue", name: "Blue" },
      { id: "yellow", name: "Yellow" },
    ],
  },
  {
    id: "pets",
    name: "Pets",
    items: [
      { id: "cat", name: "Cat" },
      {
        id: "dog",
        name: "Dog",
        children: [
          { id: "corgy", name: "Corgy" },
          { id: "german-sheperd", name: "German Sheperd" },
          { id: "afghan-hound", name: "Afghan Hound" },
        ],
      },
      { id: "rat", name: "Rat" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    items: [
      { id: "hammer", name: "Hammer" },
      {
        id: "skrewdriver",
        name: "Skrewdriver",
        children: [
          { id: "slottet", name: "Slotted Skrewdriver" },
          { id: "phillips", name: "Phillips Skrewdriver" },
          { id: "allen", name: "Allen Skrewdriver" },
        ],
      },
      { id: "whisk", name: "Whisk" },
    ],
  },
];

interface FilterBarTestComponentProps {
  id?: string;
  showClearAll?: boolean;
  showSubmitAll?: boolean;
  onSubmitAll?: () => void;
}
const FilterBarTestComponent = ({
  id = "filterbar-id",
  showClearAll,
  showSubmitAll,
  onSubmitAll,
}: FilterBarTestComponentProps) => {
  const {
    onChange,
    onMixedStateChange,
    selectedItems,
    onClear,
    onClearAll,
    isModalOpen,
    onToggle,
  } = useFilterBar();
  return (
    <FilterBar
      id={id}
      headingText="FilterBar"
      layout="row"
      isOpen={isModalOpen}
      onToggle={onToggle}
      onClear={onClearAll}
      {...(showSubmitAll && { onSubmit: onSubmitAll })}
      selectedItems={selectedItems}
      showClearAll={showClearAll}
      showSubmitAll={showSubmitAll}
    >
      <MultiSelectGroup
        id="multiselect-group"
        key="multiselect-group-key"
        labelText="MultiSelect Group"
      >
        {multiSelectItems &&
          multiSelectItems.map((multiSelect) => (
            <MultiSelect
              key={multiSelect.id}
              id={multiSelect.id}
              label={multiSelect.name}
              variant="dialog"
              items={multiSelect.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                onChange(e.target.id, multiSelect.id);
              }}
              onMixedStateChange={(e) => {
                onMixedStateChange(
                  e.target.id,
                  multiSelect.id,
                  multiSelect.items
                );
              }}
              onClear={() => {
                onClear(multiSelect.id);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
    </FilterBar>
  );
};
const MultiSelectTestGroup = (multiSelectItems) => (
  <MultiSelectGroup
    id="MultiSelectGroup"
    labelText="MultiSelectGroup example"
    showLabel={true}
    multiSelectWidth="default"
  >
    {multiSelectItems.map((multiSelectItem) => (
      <MultiSelect
        key={multiSelectItem.id}
        id={multiSelectItem.id}
        variant="listbox"
        label={multiSelectItem.name}
        items={multiSelectItem.items}
        selectedItems={{}}
        onChange={() => null}
        onMixedStateChange={() => null}
        onApply={() => {}}
        onClear={() => "clear"}
      />
    ))}
  </MultiSelectGroup>
);
describe("FilterBar Accessibility", () => {
  beforeAll(() => {
    matchMedia = new MatchMedia();
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
  });
  afterEach(() => {
    matchMedia.clear();
  });
  it("should have no axe violations on desktop", async () => {
    window.resizeTo(1024, 600);
    const { container } = render(<FilterBarTestComponent />);
    // Make sure it renders desktop components
    expect(screen.getByRole("button", { name: /colors/i })).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
  it("should have no axe violations on mobile", async () => {
    window.resizeTo(300, 300);
    const { container } = render(<FilterBarTestComponent />);
    // Make sure it renders mobile components
    expect(
      screen.getByRole("button", { name: /show filter/i })
    ).toBeInTheDocument();

    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("FilterBar", () => {
  beforeAll(() => {
    matchMedia = new MatchMedia();
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
  });
  afterEach(() => {
    matchMedia.clear();
  });
  it("should render a 'Clear Filters' button when showClearAll prop is passed", () => {
    window.resizeTo(1024, 600);
    render(<FilterBarTestComponent showClearAll id="filter-bar-test-1" />);
    expect(
      screen.getByRole("button", { name: /clear filters/i })
    ).toBeInTheDocument();
  });
  it("should clear the selectedItems when 'Clear Filters' button is clicked", () => {
    const { rerender } = render(
      <FilterBarTestComponent showClearAll id="filter-bar-test-2" />
    );
    rerender(<FilterBarTestComponent showClearAll id="filter-bar-test-2" />);
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /colors/i }));
    // Check item
    userEvent.click(screen.getByRole("checkbox", { name: /blue/i }));
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /pets/i }));
    // Check item
    userEvent.click(screen.getByText("Dog"));
    // Open menu
    userEvent.click(screen.getByRole("button", { name: /tools/i }));
    // Check item
    userEvent.click(screen.getByRole("checkbox", { name: /hammer/i }));
    expect(screen.getAllByRole("button", { name: /selected/i }).length).toBe(3);
    // click Clear All button
    userEvent.click(screen.getByRole("button", { name: /clear filters/i }));
    expect(
      Object.keys(screen.findAllByRole("button", { name: /selected/i })).length
    ).toBe(0);
  });
  it("should render a 'Apply Filters' button when showSubmitAll prop is passed", () => {
    const { rerender } = render(
      <FilterBarTestComponent showSubmitAll id="filter-bar-test-3" />
    );
    rerender(<FilterBarTestComponent showSubmitAll id="filter-bar-test-3" />);
    expect(
      screen.getByRole("button", { name: /apply filters/i })
    ).toBeInTheDocument();
  });
  it("should call onSubmit function when 'Apply Filters' button is clicked", () => {
    const mockonSubmit = jest.fn();
    const { rerender } = render(
      <FilterBarTestComponent
        showSubmitAll
        onSubmitAll={mockonSubmit}
        id="filter-bar-test-4"
      />
    );
    rerender(
      <FilterBarTestComponent
        showSubmitAll
        onSubmitAll={mockonSubmit}
        id="filter-bar-test-4"
      />
    );
    // click Submit All button
    userEvent.click(screen.getByRole("button", { name: /apply filters/i }));
    expect(mockonSubmit).toBeCalledTimes(1);
  });
  it("should render the `Show Filter` button when window size is mobile", () => {
    window.resizeTo(300, 300);
    const { rerender } = render(
      <FilterBarTestComponent id="filter-bar-test-5" />
    );
    rerender(<FilterBarTestComponent id="filter-bar-test-5" />);
    expect(
      screen.getByRole("button", { name: /show filter/i })
    ).toBeInTheDocument();
  });
  it("should open the filter modal whene `Show Filter` button is clicked", async () => {
    window.resizeTo(300, 300);
    const { rerender } = render(
      <FilterBarTestComponent id="filter-bar-test-5" />
    );
    rerender(<FilterBarTestComponent id="filter-bar-test-5" />);
    expect(
      screen.getByRole("button", { name: /show filter/i })
    ).toBeInTheDocument();
    // Open the modal
    userEvent.click(screen.getByRole("button", { name: /show filter/i }));
    // Check that all the multiselects are present
    expect(screen.getByRole("button", { name: /pets/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /colors/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /tools/i })).toBeInTheDocument();
    // Check for the Close button to be present
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
    // Check for the footer buttons
    expect(
      screen.getByRole("button", { name: /show results/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /clear filters/i })
    ).toBeInTheDocument();
    // Close the modal
    userEvent.click(screen.getByRole("button", { name: /close/i }));
    // Wait for the modal to close before making the check
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /show filter/i })
      ).toBeInTheDocument();
    });
  });
  // @TODO Fix window.matchMedia isssue causing first and third snapshot to render the mobile view of the component
  it("renders the UI snapshots correctly", () => {
    window.resizeTo(1024, 600);
    const defaultFilterBarNoButtons = renderer
      .create(
        <FilterBar
          id="defaultFilterBarNoButtons"
          headingText="FilterBar"
          isOpen={false}
          onToggle={() => null}
          selectedItems={{}}
          onClear={() => null}
        >
          <MultiSelectTestGroup multiSelectItems={multiSelectItems} />
        </FilterBar>
      )
      .toJSON();
    const filterBarWithClearAllButton = renderer
      .create(
        <FilterBar
          id="filterBarWithClearAllButton"
          headingText="FilterBar"
          isOpen={false}
          onToggle={() => null}
          onClear={() => null}
          selectedItems={{}}
          showClearAll
        >
          <MultiSelectTestGroup multiSelectItems={multiSelectItems} />
        </FilterBar>
      )
      .toJSON();
    const filterBarWithSubmitAllButton = renderer
      .create(
        <FilterBar
          id="filterBarWithSubmitAllButton"
          headingText="FilterBar"
          isOpen={false}
          onToggle={() => null}
          onClear={() => null}
          onSubmit={() => null}
          selectedItems={{}}
          showSubmitAll
        >
          <MultiSelectTestGroup multiSelectItems={multiSelectItems} />
        </FilterBar>
      )
      .toJSON();
    const filterBarWithButtons = renderer
      .create(
        <FilterBar
          id="filterBarWithButtons"
          headingText="FilterBar"
          isOpen={false}
          onToggle={() => null}
          onClear={() => null}
          onSubmit={() => null}
          selectedItems={{}}
          showClearAll
          showSubmitAll
        >
          <MultiSelectTestGroup multiSelectItems={multiSelectItems} />
        </FilterBar>
      )
      .toJSON();

    expect(defaultFilterBarNoButtons).toMatchSnapshot();
    expect(filterBarWithClearAllButton).toMatchSnapshot();
    expect(filterBarWithSubmitAllButton).toMatchSnapshot();
    expect(filterBarWithButtons).toMatchSnapshot();
  });
});
