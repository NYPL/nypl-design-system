import React, { useState } from "react";
import MultiSelect from "./MultiSelect";

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
];

function MultiSelectStory(args: any) {
  const [selectedItems, setSelectedItems] = useState({});
  return (
    <MultiSelect
      {...args}
      //id="group1"
      //label="MultiSelect Example"
      items={items}
      selectedItems={selectedItems}
      handleOnSelectedItemChange={(selectedItem) => {
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
      //showCtaButtons={true}
    />
  );
}

export default MultiSelectStory;
