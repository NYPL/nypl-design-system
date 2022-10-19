import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { VStack } from "@chakra-ui/react";

import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup, { MultiSelectGroupProps } from "./MultiSelectGroup";
import useMultiSelect from "../../hooks/useMultiSelect";
import { action } from "@storybook/addon-actions";

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

export const MultiSelectGroupStory: Story<MultiSelectGroupProps> = (args) => {
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  const [actionName, setActionName] = React.useState("");

  React.useEffect(() => {
    if (Object.keys(selectedItems).length !== 0) {
      action(actionName)(selectedItems);
    }
    if (actionName === "onClear") {
      action(actionName)(selectedItems);
    }
  }, [actionName, selectedItems]);

  return (
    <MultiSelectGroup {...args}>
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
              setActionName("onChange");
            }}
            onMixedStateChange={(e) => {
              onMixedStateChange(
                e.target.id,
                multiSelect.id,
                multiSelect.items
              );
              setActionName("onMixedStateChange");
            }}
            onClear={() => {
              onClear(multiSelect.id);
              setActionName("onClear");
            }}
            onApply={() => {
              setActionName("onApply");
            }}
          />
        ))}
    </MultiSelectGroup>
  );
};

export const MultiSelectGroupLayoutStory: Story<MultiSelectGroupProps> = () => {
  const [selectedItems, setSelectedItems] = React.useState({});

  function handleChange(itemId: string, multiSelectId: string) {
    let itemIds;
    // Check if the id already exists in the state
    if (selectedItems[multiSelectId] !== undefined) {
      let itemIdExists =
        selectedItems[multiSelectId].items.indexOf(itemId) > -1;
      // Make a copy of the existing array.
      itemIds = selectedItems[multiSelectId].items.slice();
      // If termId exists, remove it from the array.
      if (itemIdExists) {
        itemIds = itemIds.filter((id) => id !== itemId);
      } else {
        // Add it to the array, but modify the copy, not the original.
        itemIds.push(itemId);
      }
    } else {
      itemIds = [];
      itemIds.push(itemId);
    }
    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: itemIds,
      },
    });
  }

  function handleMixedStateChange(groupId: string, childItems: string[]) {
    let newItems;
    // Some selected items for group already exist in state.
    if (selectedItems[groupId] !== undefined) {
      if (
        childItems.every((childItem) =>
          selectedItems[groupId].items.includes(childItem)
        )
      ) {
        newItems = selectedItems[groupId].items.filter(
          (stateItem) => !childItems.includes(stateItem)
        );
      } else {
        // Merge all child items.
        newItems = [...childItems, ...selectedItems[groupId].items];
      }
    } else {
      newItems = childItems;
    }

    setSelectedItems({
      ...selectedItems,
      [groupId]: {
        items: newItems,
      },
    });
  }

  function handleClear(groupId: string) {
    let newSelectedItems = {};
    for (let key of Object.keys(selectedItems)) {
      if (key !== groupId) {
        newSelectedItems[key] = selectedItems[key];
      }
    }
    setSelectedItems(newSelectedItems);
  }
  return (
    <VStack align="stretch" spacing="s">
      <MultiSelectGroup showLabel={true} id="row" labelText="Row (default)">
        {multiSelectItems &&
          multiSelectItems.map((group) => (
            <MultiSelect
              key={group.id}
              id={group.id}
              label={group.name}
              variant="dialog"
              items={group.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                handleChange(e.target.id, group.id);
              }}
              onMixedStateChange={(e) => {
                const childItems = group.items
                  .filter((items) => items.id === e.target.id)[0]
                  .children.map((child) => child.id);
                return handleMixedStateChange(group.id, childItems);
              }}
              onClear={() => {
                handleClear(group.id);
                action("onClear")({});
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
      <MultiSelectGroup
        showLabel={true}
        id="column"
        layout="column"
        labelText="Column"
      >
        {multiSelectItems &&
          multiSelectItems.map((group) => (
            <MultiSelect
              key={`${group.id}-3`}
              id={`${group.id}-3`}
              label={group.name}
              variant="dialog"
              items={group.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                handleChange(e.target.id, `${group.id}-3`);
              }}
              onMixedStateChange={(e) => {
                const childItems = group.items
                  .filter((items) => items.id === e.target.id)[0]
                  .children.map((child) => child.id);
                return handleMixedStateChange(`${group.id}-3`, childItems);
              }}
              onClear={() => {
                handleClear(`${group.id}-3`);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
      <MultiSelectGroup
        showLabel={true}
        id="row-full"
        layout="row"
        labelText="Row (multiSelectWidth 'full')"
        multiSelectWidth="full"
      >
        {multiSelectItems &&
          multiSelectItems.map((group) => (
            <MultiSelect
              key={`${group.id}-2`}
              id={`${group.id}-2`}
              label={group.name}
              variant="dialog"
              items={group.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                handleChange(e.target.id, `${group.id}-2`);
              }}
              onMixedStateChange={(e) => {
                const childItems = group.items
                  .filter((items) => items.id === e.target.id)[0]
                  .children.map((child) => child.id);
                return handleMixedStateChange(`${group.id}-2`, childItems);
              }}
              onClear={() => {
                handleClear(`${group.id}-2`);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
      <MultiSelectGroup
        showLabel={true}
        id="column-full"
        layout="column"
        labelText="Column (multiSelectWidth 'full')"
        multiSelectWidth="full"
      >
        {multiSelectItems &&
          multiSelectItems.map((group) => (
            <MultiSelect
              key={`${group.id}-4`}
              id={`${group.id}-4`}
              label={group.name}
              variant="dialog"
              items={group.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                handleChange(e.target.id, `${group.id}-4`);
              }}
              onMixedStateChange={(e) => {
                const childItems = group.items
                  .filter((items) => items.id === e.target.id)[0]
                  .children.map((child) => child.id);
                return handleMixedStateChange(`${group.id}-4`, childItems);
              }}
              onClear={() => {
                handleClear(`${group.id}-4`);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
    </VStack>
  );
};
