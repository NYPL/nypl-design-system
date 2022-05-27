import React, { useEffect } from "react";
import { action } from "@storybook/addon-actions";
import MultiSelect, { MultiSelectProps } from "./MultiSelect";
import { Story } from "@storybook/react/types-6-0";
import useMultiSelectState from "./useMultiSelectState";

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

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  useEffect(() => {
    if (Object.keys(selectedItems).length !== 0) {
      action("onChange")(selectedItems);
    }
  }, [selectedItems]);

  return (
    <MultiSelect
      {...args}
      items={items}
      selectedItems={selectedItems}
      onChange={(selectedItem) => onChange(selectedItem.id)}
      onClear={() => {
        onClear();
        action("onClear")({});
      }}
    />
  );
};

export const MultiSelectDialogStory: Story<MultiSelectProps> = (args) => {
  // Example with custom hook useMultiSelectState.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelectState(args.id, items);

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  useEffect(() => {
    if (Object.keys(selectedItems).length !== 0) {
      action("onChange")(selectedItems);
    }
  }, [selectedItems]);

  return (
    <MultiSelect
      {...args}
      variant="dialog"
      items={items}
      defaultIsOpen={false}
      selectedItems={selectedItems}
      onChange={(e) => {
        onChange(e.target.id);
      }}
      onMixedStateChange={(e) => onMixedStateChange(e.target.id)}
      onClear={() => {
        onClear();
        action("onClear")({});
      }}
      onApply={() => {
        action("onApply")(selectedItems);
      }}
    />
  );
};
