import React from "react";
import MultiSelect, { MultiSelectProps } from "./MultiSelect";
//import { MultiSelectItem } from "./MultiSelectTypes";
import { Story } from "@storybook/react/types-6-0";
import useMultiSelectState from "./useMultiSelectState";

// @TODO export this, so FilterBar story can use it.
const items = [
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
        name: "User Experience",
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
];

export const MultiSelectStory: Story<MultiSelectProps> = (args) => {
  // Example with custom hook useMultiSelectState.
  const { onChange, onClear, selectedItems } = useMultiSelectState(
    args.id,
    items
  );

  return (
    <>
      <MultiSelect
        {...args}
        items={items}
        selectedItems={selectedItems}
        onChange={(selectedItem) => onChange(selectedItem.id)}
        onClear={() => {
          onClear();
          console.log("onClear from consuming!");
        }}
      />
    </>
  );
};

export const MultiSelectDialogStory: Story<MultiSelectProps> = (args) => {
  // Example with custom hook useMultiSelectState.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelectState(args.id, items);

  return (
    <>
      <MultiSelect
        {...args}
        variant="dialog"
        items={items}
        defaultIsOpen={false}
        selectedItems={selectedItems}
        onChange={(e) => onChange(e.target.id)}
        onMixedStateChange={(e) => onMixedStateChange(e.target.id)}
        onClear={() => {
          onClear();
          console.log("onClear from consuming!");
        }}
        onApply={() => {
          console.log("onApply from consuming!");
          console.log(selectedItems);
        }}
      />
    </>
  );
};
