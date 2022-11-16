import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
// import renderer from "react-test-renderer";
// import userEvent from "@testing-library/user-event";
import * as React from "react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

import FilterBar from "./FilterBar";
import useFilterBar from "../../hooks/useFilterBar";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";

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

const FilterBarTestComponent = () => {
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
      id="filterbar-id"
      headingText="FilterBar"
      layout="row"
      isOpen={isModalOpen}
      onToggle={onToggle}
      onClear={onClearAll}
      onSubmit={() => null}
      selectedItems={selectedItems}
      showClearAll={true}
      showSubmitAll={true}
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
const MulitSelectTestGroup = (multiSelectItems) => (
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
  it("should have no axe violations for the 'listbox' variant", async () => {
    const { container } = render(<FilterBarTestComponent />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
describe("FilterBar", () => {
  it("should clear all selectedItems when 'Clear All' button is clicked", () => {
    render(<FilterBarTestComponent />);
    userEvent.click(screen.getByRole("button", { name: /show filter/i }));
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
  it("renders the UI snapshots correctly", () => {
    const defaultFilterBarNoButtons = renderer
      .create(
        <FilterBar
          id="filterbar-id"
          headingText="FilterBar"
          isOpen={false}
          onToggle={() => null}
          selectedItems={{}}
          onClear={() => null}
          onSubmit={() => null}
          showClearAll={false}
          showSubmitAll={false}
        >
          <MulitSelectTestGroup multiSelectItems={multiSelectItems} />
        </FilterBar>
      )
      .toJSON();
    const defaultFilterBarWithButtons = renderer
      .create(
        <FilterBar
          id="filterbar-id"
          headingText="FilterBar"
          isOpen={false}
          onToggle={() => null}
          onClear={() => null}
          onSubmit={() => null}
          selectedItems={{}}
          showClearAll={true}
          showSubmitAll={true}
        >
          <MulitSelectTestGroup multiSelectItems={multiSelectItems} />
        </FilterBar>
      )
      .toJSON();

    expect(defaultFilterBarNoButtons).toMatchSnapshot();
    expect(defaultFilterBarWithButtons).toMatchSnapshot();
  });
});
