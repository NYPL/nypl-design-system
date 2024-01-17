import { Meta, Source } from "@storybook/blocks";

{
// The documentation for the useMultiSelect hook will be removed until the
// refactor of the v2 version of the MultiSelect and FilterBar components has
// been completed. To add the link for the useMultiSelect hook back to the
// side bar, update the <Meta> element below.
// <Meta title="Hooks/useMultiSelect" />
}

<Meta />

# useMultiSelect

| Hook Version | DS Version |
| ------------ | ---------- |
| Added        | `1.4.0`    |
| Latest       | `1.4.0`    |

This custom hook, inspired by [downshift.js](https://www.downshift-js.com/),
exposes functions used for MultiSelect components. `useMultiSelect` provides all functions needed to handle the selectedItems. This hook can be used for
cases where managing the state of the component in the consuming app is less of a concern and general ease of use is prefered.

The two main functions are `onChange` and `onMixedStateChange` used for handling the selectedItems object. The functions `onClear` and `onClearAll`
can be used to clear the selectedItems of a specific `MultiSelect` component or all `MultiSelect`s/ a `MultiSelectGroup` connected to the hook.
The hook also provides the `selectedItems` object containing the currently checked/selected items and a `setSelectedItems`
function to set or manipulate the state of `selectedItems`. If using `setSelectedItems`, check that the correct data structure is passed into `setSelectedItems`.

## Usage

For a full implementation example with a single `MultiSelect` component, view the [MultiSelectListbox component](https://github.com/NYPL/nypl-design-system/blob/development/src/components/MultiSelect/MultiSelectListbox.tsx) or [MultiSelectDialog component](https://github.com/NYPL/nypl-design-system/blob/development/src/components/MultiSelect/MultiSelectDialog.tsx).
For an implementation with a `MultiSelectGroup`, view [MultiSelectGroup component](https://github.com/NYPL/nypl-design-system/blob/development/src/components/MultiSelectGroup/MultiSelectGroup.tsx).

<Source
  code={`
const {
  onChange,
  onMixedStateChange,
  onClear,
  onClearAll,
  selectedItems,
  setSelectedItems,
} = useMultiSelect();
`}
  language="jsx"
/>

## useMultiSelect Hook implementation in a listbox MultiSelect

The `listbox` variant can only display non hierarchical items.
When the `useMultiSelect` hook is used within a `listbox` MultiSelect, you will only need the `onChange` and `onClear` functions and the selectedItems state.

<Source
  code={`
import React from "react";
import {
  MultiSelect,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectWithHookExample() {
  const multiSelectId = "multi-select-1";
  // Without this hook, you'd have to add handlers for onChange and onClear,
  // and also manage the selectedItems state yourself.
  const { onChange, onClear, selectedItems } = useMultiSelect();
  return (
    <MultiSelect
      id={multiSelectId}
      items={items}
      selectedItems={selectedItems}
      onChange={(selectedItem) => onChange(selectedItem.id, multiSelectId)}
      onClear={() => {
        onClear(multiSelectId);
      }}
    />
  );
}
`}
  language="jsx"
/>

## useMultiSelect Hook implementation in a dialog MultiSelect

The `dialog`variant can display nested items.
When the `useMultiSelect` hook is used within a `dialog` MultiSelect, additional to the selectedItems and the `onChange` and `onClear` functions, you will need
a `onMixedStateChange` function. It is also provided by the hook and handles the state change of parent items.

<Source
  code={`
import React from "react";
import {
  MultiSelect,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectWithHookExample() {
  const multiSelectId = "multi-select-1";
  // Without this hook, you'd have to add handlers for onChange, onMixedStateChange and onClear,
  // and also manage the selectedItems state yourself.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();
  return (
    <MultiSelect
      id={multiSelectId}
      items={items}
      selectedItems={selectedItems}
      onChange={(e) => onChange(e.target.id, multiSelectId)}
      onMixedStateChange={(e) =>
        onMixedStateChange(e.target.id, multiSelectId, items)
      }
      onClear={() => {
        onClear(multiSelectId);
      }}
    />
  );
}
`}
  language="jsx"
/>

## useMultiSelect Hook implementation in a MultiSelectGroup

The data structure used to render two `MultiSelect` components in the following `MultiSelectGroup` example:

<Source
  code={`
const multiSelectItems = [
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
        id: "screwdriver",
        name: "Screwdriver",
        children: [
          { id: "slottet", name: "Slotted Screwdriver" },
          { id: "phillips", name: "Phillips Screwdriver" },
          { id: "allen", name: "Allen Screwdriver" },
        ],
      },
      { id: "whisk", name: "Whisk" },
    ],
  },
];
`}
  language="jsx"
/>

The implemntation of the `useMultiSelect` hook together with the `MultiSelectGroup` component.

<Source
  code={`
import React from "react";
import {
  MultiSelect,
  MultiSelectGroup,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectGroupWithHookExample() {
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();
  return (
    <MultiSelectGroup id="multiselect-group" labelText="MultiSelect Group">
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
            onMixedStateChange={(e) =>
              onMixedStateChange(e.target.id, multiSelect.id, multiSelect.items)
            }
            onClear={() => {
              onClear(multiSelect.id);
            }}
            onApply={() => {}}
          />
        ))}
    </MultiSelectGroup>
  );
}
`}
  language="jsx"
/>

## setSelectedItems

The data structure to pass the setSelectedItems function in order to set a inital state:

<Source
  code={`
// The selectedItems structur for one MultiSelect
const initialSelectedItems = {
  colors: {
    items: ["red"],
  },
};
`}
  language="jsx"
/>

<Source
  code={`
// The selectedItems structur for setting state of multiple MultiSelects
const initialSelectedItems = {
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

<Source
  code={`
import React from "react";
import {
  MultiSelect,
  MultiSelectGroup,
  useMultiSelect,
} from "@nypl/design-system-react-components";
// ...
export default function MultiSelectGroupWithHookExample() {
  const { onChange, onMixedStateChange, onClear, selectedItems, setSelectedItems } =
    useMultiSelect();
  React.useEffect(() => {
    setSelectedItems(initialSelectedItems)
  }, [])
  // ...
  return (
    <MultiSelectGroup id="multiselect-group" labelText="MultiSelect Group">
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
            onMixedStateChange={(e) =>
              onMixedStateChange(e.target.id, multiSelect.id, multiSelect.items)
            }
            onClear={() => {
              onClear(multiSelect.id);
            }}
            onApply={() => {}}
          />
        ))}
    </MultiSelectGroup>
  );
}
`}
  language="jsx"
/>
