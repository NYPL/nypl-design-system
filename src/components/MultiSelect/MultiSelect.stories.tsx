import React, { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react/types-6-0";

import MultiSelect, { MultiSelectProps } from "./MultiSelect";
import useMultiSelect from "../../hooks/useMultiSelect";

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
    // Children array will only be renderd in a "dialog" type
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

export const MultiSelectListboxStory: Story<MultiSelectProps> = (args) => {
  // Example with custom hook useMultiSelect.
  const { onChange, onClear, selectedItems } = useMultiSelect();
  const multiSelectId = args.id;

  // Hack to get storybook's action tab to log state change when selectedItems state changes.
  const [actionName, setActionName] = useState("");

  useEffect(() => {
    if (Object.keys(selectedItems).length !== 0) {
      action(actionName)(selectedItems);
    }
  }, [actionName, selectedItems]);

  return (
    <MultiSelect
      {...args}
      isDefaultOpen
      items={items}
      selectedItems={selectedItems}
      onChange={(selectedItem) => {
        onChange(selectedItem.id, multiSelectId);
        setActionName("onChange");
      }}
      onClear={() => {
        onClear(multiSelectId);
        setActionName("onClear");
      }}
    />
  );
};

export const MultiSelectDialogStory: Story<MultiSelectProps> = (args) => {
  // Example with custom hook useMultiSelect.
  const { onChange, onMixedStateChange, onClear, selectedItems } =
    useMultiSelect();
  const multiSelectId = args.id;

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
    <MultiSelect
      {...args}
      items={items}
      isDefaultOpen={false}
      selectedItems={selectedItems}
      onChange={(e) => {
        onChange(e.target.id, multiSelectId);
        setActionName("onChange");
      }}
      onMixedStateChange={(e) => {
        onMixedStateChange(e.target.id, multiSelectId, items);
        setActionName("onMixedStateChange");
      }}
      onClear={() => {
        onClear(multiSelectId);
        setActionName("onClear");
      }}
      onApply={() => {
        setActionName("onApply");
      }}
    />
  );
};
