import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import FilterBar, { FilterBarProps } from "./FilterBar";
import MultiSelect, { MultiSelectProps } from "../MultiSelect/MultiSelect";
import MultiSelectDialog from "../MultiSelect/MultiSelectDialog";
import { MultiSelectItem } from "../MultiSelect/MultiSelectTypes";

const multiSelects = [
  {
    id: "subject",
    label: "Subjects",
    items: [
      {
        id: "art",
        name: "Art",
      },
      {
        id: "architecture",
        name: "Architecture",
      },
      {
        id: "art_history",
        name: "Art History",
      },
      {
        id: "design",
        name: "Design",
      },
      {
        id: "fashion",
        name: "Fashion",
      },
      {
        id: "business",
        name: "Business",
      },
      {
        id: "advertising",
        name: "Advertising",
      },
      {
        id: "government_and_law",
        name: "Government and Law",
      },
      {
        id: "civil_rights",
        name: "Civil Rights",
      },
      {
        id: "history",
        name: "History",
      },
      {
        id: "atlases",
        name: "Atlases",
      },
      {
        id: "cartography",
        name: "Cartography",
      },
      {
        id: "geology",
        name: "Geology",
      },
    ],
  },
  {
    id: "coding",
    label: "Coding Languages",
    items: [
      {
        id: "php",
        name: "PHP",
      },
      {
        id: "ruby",
        name: "Ruby",
      },
      {
        id: "javascript",
        name: "Javascript",
      },
    ],
  },
];

const multiSelectsWithChildren = [
  {
    id: "subject",
    label: "Subjects",
    items: [
      {
        id: "art",
        name: "Art",
      },
      {
        id: "architecture",
        name: "Architecture",
      },
      {
        id: "art_history",
        name: "Art History",
      },
      {
        id: "design",
        name: "Design",
        children: [
          {
            id: "fashion",
            name: "Fashion",
          },
          {
            id: "ux",
            name: "UX",
          },
        ],
      },
      {
        id: "business",
        name: "Business",
      },
      {
        id: "advertising",
        name: "Advertising",
      },
      {
        id: "government_and_law",
        name: "Government and Law",
      },
      {
        id: "civil_rights",
        name: "Civil Rights",
      },
      {
        id: "history",
        name: "History",
      },
      {
        id: "atlases",
        name: "Atlases",
      },
      {
        id: "cartography",
        name: "Cartography",
      },
      {
        id: "geology",
        name: "Geology",
      },
    ],
  },
  {
    id: "coding",
    label: "Coding Languages",
    items: [
      {
        id: "php",
        name: "PHP",
      },
      {
        id: "ruby",
        name: "Ruby",
      },
      {
        id: "javascript",
        name: "Javascript",
      },
    ],
  },
];

export const FilterBarWithMultiSelects: Story<FilterBarProps> = (args) => {
  const [selectedItems, setSelectedItems] = useState({});

  function onSelectedItemChange(itemId: string, multiSelectId: string) {
    let itemIds;
    // Check if the tid already exists in the state
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

  return (
    <FilterBar
      {...args}
      id={args.id}
      isModalOpen={args.isModalOpen}
      isMobile={args.isMobile}
      selectedItems={selectedItems}
      onClear={null}
      onApply={null}
    >
      {multiSelects.map((multiSelect: MultiSelectProps) => {
        return (
          <MultiSelect
            variant="listbox"
            key={multiSelect.id}
            id={multiSelect.id}
            label={multiSelect.label}
            items={multiSelect.items}
            onChange={(selectedItem) =>
              onSelectedItemChange(selectedItem.id, multiSelect.id)
            }
            selectedItems={selectedItems}
          />
        );
      })}
    </FilterBar>
  );
};

export const FilterBarWithMultiDialogs: Story<FilterBarProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState({});

  function handleChange(multiSelectId: string, itemId: string) {
    let itemIds;
    // Check if the tid already exists in the state
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

  function handleMixedStateChange(multiSelectId: string, parentId: string) {
    // Build an array of child items.
    let childItems = [];
    const currentMultiSelect = multiSelectsWithChildren.filter(
      (multiSelect) => multiSelect.id === multiSelectId
    );
    const currentMultiSelectItems = currentMultiSelect[0].items.filter(
      (item) => item.id === parentId
    );
    currentMultiSelectItems[0].children.map((childItem: MultiSelectItem) => {
      childItems.push(childItem.id);
    });

    /*multiSelectsWithChildren.map((multiSelect) => {
      if (multiSelect.id === multiSelectId) {
        multiSelect.items.map((item) => {
          if (item.id === parentId) {
            item.children.map((childItem: MultiSelectItem) => {
              childItems.push(childItem.id);
            });
          }
        });
      }
    });
    */

    let newItems;
    // Some selected items for group already exist in state.
    if (selectedItems[multiSelectId] !== undefined) {
      //
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

  return (
    <FilterBar
      {...args}
      id={args.id}
      isModalOpen={isModalOpen}
      onModalToggle={() => setIsModalOpen(true)}
      isMobile={args.isMobile}
      selectedItems={selectedItems}
      onGoBack={() => setIsModalOpen(false)}
      onClear={() => setSelectedItems({})}
      onApply={() => setIsModalOpen(false)}
    >
      {multiSelectsWithChildren.map((multiSelect: any) => {
        return (
          <MultiSelectDialog
            variant="dialog"
            key={multiSelect.id}
            id={multiSelect.id}
            label={multiSelect.label}
            items={multiSelect.items}
            selectedItems={selectedItems}
            onChange={(e) => handleChange(multiSelect.id, e.target.id)}
            onMixedStateChange={(e) => {
              handleMixedStateChange(multiSelect.id, e.target.id);
            }}
            onApply={() => {
              console.log("on apply");
            }}
            onClear={() => {
              setSelectedItems({});
              console.log("on clear");
            }}
          />
        );
      })}
    </FilterBar>
  );
};
