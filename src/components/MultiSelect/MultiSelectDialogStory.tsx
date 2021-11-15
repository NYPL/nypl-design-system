import React, { useState } from "react";
import MultiSelectDialog from "./MultiSelectDialog";

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

function MultiSelectDialogStory(args: any) {
  const [selectedItems, setSelectedItems] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MultiSelectDialog
      {...args}
      items={items}
      isOpen={isOpen}
      onMenuToggle={() => {
        setIsOpen(!isOpen);
      }}
      selectedItems={selectedItems}
      onChange={(e) => {
        const selectedItem = e.target;
        const multiSelectId = args.id;
        const itemId = selectedItem.id;
        let itemIds;
        // Check if the id already exists in the state
        if (selectedItems[multiSelectId] !== undefined) {
          let itemIdExists =
            selectedItems[multiSelectId].items.indexOf(itemId) > -1;
          // Make a copy of the existing array.
          itemIds = selectedItems[multiSelectId].items.slice();
          // If termId exists, remove it from the array.
          if (itemIdExists) {
            itemIds = itemIds.filter((id) => id != itemId);
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
      }}
      onApply={() => {
        setIsOpen(false);
      }}
      onClear={() => {
        setSelectedItems({});
        setIsOpen(false);
      }}
    />
  );
}

export default MultiSelectDialogStory;
