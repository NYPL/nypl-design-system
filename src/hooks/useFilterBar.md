import { Meta, Source } from "@storybook/blocks";

{
// The documentation for the useFilterBar hook will be removed until the
// refactor of the v2 version of the MultiSelect and FilterBar components has
// been completed. To add the link for the useFilterBar hook back to the
// side bar, update the <Meta> element below.
// <Meta title="Hooks/useFilterBar" />
}

<Meta />

# useFilterBar

| Hook Version | DS Version |
| ------------ | ---------- |
| Added        | `1.4.0`    |
| Latest       | `1.4.0`    |

## Usage

Usage of useFilterBar

<Source
  code={`
const {
  onChange,
  onMixedStateChange,
  onClear,
  onClearAll,
  setSelectedItems,
  selectedItems,
  onOpen,
  onClose,
  onToggle,
  isModalOpen,
} = useFilterBar();
`}
  language="jsx"
/>

## useFilterBar Hook implementation

The data structure used to render two `MultiSelect` components in all following examples:

<Source
  code={`
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
];
`}
  language="jsx"
/>

### Implementation with no global buttons or modal

<Source
  code={`
import React from "react";
import {
  FilterBar,
  MultiSelectGroup,
  MultiSelect,
  useFilterBar,
} from "@nypl/design-system-react-components";
// ...
export default function FilterBarWithHookExample() {
  // Without this hook, you'd have to add handlers for onChange, onMixedStateChange and onClear,
  // and also manage the selectedItems state yourself.
  const { onChange, onMixedStateChange, onClear, onClearAll, selectedItems } =
    useFilterBar();
  return (
    <FilterBar
      id="filterbar"
      headingText="FilterBar"
      layout="row"
      selectedItems={selectedItems}
      onClear={onClearAll}
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
              labelText={multiSelect.name}
              type="dialog"
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
}
`}
  language="jsx"
/>

### Implementation with Clear Filters and Apply Filters buttons

<Source
  code={`
import React from "react";
import {
  FilterBar,
  MultiSelectGroup,
  MultiSelect,
  useFilterBar,
} from "@nypl/design-system-react-components";
// ...
export default function FilterBarWithHookExample() {
  // Without this hook, the consuming app will have to provide handlers for onChange, onMixedStateChange, onClear and onClearAll,
  // and also manage the selectedItems state.
  const { onChange, onMixedStateChange, onClear, onClearAll, selectedItems } =
    useFilterBar();
  return (
    <FilterBar
      id="filterbar"
      headingText="FilterBar"
      layout="row"
      selectedItems={selectedItems}
      showClearAll
      onClear={onClearAll}
      showSubmitAll
      // onSubmit has to be provided by the consuming app
      onSubmit={() => {}}
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
              labelText={multiSelect.name}
              type="dialog"
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
}
`}
  language="jsx"
/>

### Implementation using setSelectedItems for a initial selection of filters

The required data structure to set the `selectedItems` object:

<Source
  code={`
// The selectedItems structure for one MultiSelect
const initialFilter = {
  colors: {
    items: ["red"],
  },
};
`}
  language="jsx"
/>

<Source
  code={`
// The selectedItems structure for setting state on multiple filters
const initialFilters = {
  colors: {
    items: ["red"],
  },
  pets: {
    items: ["corgy", "german-sheperd"],
  },
};
`}
  language="jsx"
/>

Implementation:

<Source
  code={`
import React from "react";
import {
  FilterBar,
  MultiSelectGroup,
  MultiSelect,
  useFilterBar,
} from "@nypl/design-system-react-components";
// ...
export default function FilterBarWithHookExample() {
  const { onChange, onClear, onClearAll, setSelectedItems, selectedItems } =
    useFilterBar();
  const initialFilters = {
    colors: {
      items: ["red"],
    },
    pets: {
      items: ["corgy", "german-sheperd"],
    },
  };
  //Set the initial state of selectedItems
  React.useEffect(() => {
    setSelectedItems(initialSelectedItems);
  }, []);
  // ...
  return (
    <FilterBar
      id="filterbar"
      headingText="FilterBar"
      layout="row"
      selectedItems={selectedItems}
      showClearAll
      onClear={onClearAll}
      showSubmitAll
      onSubmit={() => {}}
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
              labelText={multiSelect.name}
              type="dialog"
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
}
`}
  language="jsx"
/>
