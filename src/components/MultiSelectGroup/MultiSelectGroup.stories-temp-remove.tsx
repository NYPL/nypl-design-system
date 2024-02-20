import { VStack } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { withDesign } from "storybook-addon-designs";

import MultiSelect, {
  MultiSelectItem,
  multiSelectWidthsArray,
} from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "./MultiSelectGroup";
import useMultiSelect from "../../hooks/useMultiSelect";
import { layoutTypesArray } from "../../helpers/types";

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

const MultiSelectGroupStory = (args) => {
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  const [actionName, setActionName] = useState("");

  useEffect(() => {
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
            labelText={multiSelect.name}
            type="dialog"
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

const MultiSelectGroupLayoutStory = () => {
  const [selectedItems, setSelectedItems] = useState({});

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

  function handleMixedStateChange(
    parentId: string,
    multiSelectId: string,
    items: MultiSelectItem[]
  ) {
    const childItems = items
      .filter((item) => item.id === parentId)[0]
      .children.map((child) => child.id);

    let newItems;
    // Some selected items for multiSelect already exist in state.
    if (selectedItems[multiSelectId] !== undefined) {
      if (
        childItems.every((childItem) =>
          selectedItems[multiSelectId].items.includes(childItem)
        )
      ) {
        newItems = selectedItems[multiSelectId].items.filter(
          (stateItem) => !childItems.includes(stateItem)
        );
      } else {
        // Merge all child items.
        newItems = [...childItems, ...selectedItems[multiSelectId].items];
      }
    } else {
      newItems = childItems;
    }

    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: newItems,
      },
    });
  }

  function handleClear(multiSelectId: string) {
    let newSelectedItems = {};
    for (let key of Object.keys(selectedItems)) {
      if (key !== multiSelectId) {
        newSelectedItems[key] = selectedItems[key];
      }
    }
    setSelectedItems(newSelectedItems);
  }

  return (
    <VStack align="stretch" spacing="s">
      <MultiSelectGroup showLabel={true} id="row" labelText="Row (default)">
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
                handleChange(e.target.id, multiSelect.id);
              }}
              onMixedStateChange={(e) => {
                return handleMixedStateChange(
                  e.target.id,
                  multiSelect.id,
                  multiSelect.items
                );
              }}
              onClear={() => {
                handleClear(multiSelect.id);
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
          multiSelectItems.map((multiSelect) => (
            <MultiSelect
              key={`${multiSelect.id}-1`}
              id={`${multiSelect.id}-1`}
              labelText={multiSelect.name}
              type="dialog"
              items={multiSelect.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                handleChange(e.target.id, `${multiSelect.id}-1`);
              }}
              onMixedStateChange={(e) => {
                return handleMixedStateChange(
                  e.target.id,
                  `${multiSelect.id}-1`,
                  multiSelect.items
                );
              }}
              onClear={() => {
                handleClear(`${multiSelect.id}-1`);
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
          multiSelectItems.map((multiSelect) => (
            <MultiSelect
              key={`${multiSelect.id}-2`}
              id={`${multiSelect.id}-2`}
              labelText={multiSelect.name}
              type="dialog"
              items={multiSelect.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                handleChange(e.target.id, `${multiSelect.id}-2`);
              }}
              onMixedStateChange={(e) => {
                return handleMixedStateChange(
                  e.target.id,
                  `${multiSelect.id}-2`,
                  multiSelect.items
                );
              }}
              onClear={() => {
                handleClear(`${multiSelect.id}-2`);
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
          multiSelectItems.map((multiSelect) => (
            <MultiSelect
              key={`${multiSelect.id}-3`}
              id={`${multiSelect.id}-3`}
              labelText={multiSelect.name}
              type="dialog"
              items={multiSelect.items}
              selectedItems={selectedItems}
              onChange={(e) => {
                handleChange(e.target.id, `${multiSelect.id}-3`);
              }}
              onMixedStateChange={(e) => {
                return handleMixedStateChange(
                  e.target.id,
                  `${multiSelect.id}-3`,
                  multiSelect.items
                );
              }}
              onClear={() => {
                handleClear(`${multiSelect.id}-3`);
              }}
              onApply={() => {}}
            />
          ))}
      </MultiSelectGroup>
    </VStack>
  );
};

const meta: Meta<typeof MultiSelectGroup> = {
  // The documentation for the MultiSelectGroup component will be removed until
  // the refactor of the v2 version of the MultiSelectGroup component has been
  // completed. To add the link for the MultiSelectGroup component back to the
  // side bar, uncomment the `title` attribute below.
  // title: "Components/Form Elements/MultiSelectGroup",
  component: MultiSelectGroup,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    layout: {
      control: { type: "radio" },
      options: layoutTypesArray,
      table: { defaultValue: { summary: "row" } },
    },
    multiSelectWidth: {
      control: { type: "radio" },
      options: multiSelectWidthsArray,
      table: { defaultValue: { summary: "default" } },
    },
    showLabel: {
      table: { defaultValue: { summary: true } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelectGroup>;

/**
 * Main Stories for the MultiSelectGroup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const Controls: Story = {
  args: {
    className: undefined,
    id: "multiselect-group",
    labelText: "Label Text",
    layout: "row",
    multiSelectWidth: "default",
    showLabel: true,
  },
  render: (args: any) => <MultiSelectGroupStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
    },
    jest: ["MultiSelectGroup.test.tsx"],
  },
};

// The following are additional MultiSelectGroup example Stories.
export const LayoutPatterns: Story = {
  render: (args: any) => <MultiSelectGroupLayoutStory {...args} />,
};
