import React, { useState } from "react";
import FilterBar from "./FilterBar";
import MultiSelect from "./../MultiSelect/MultiSelect";

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

function FilterBarStory(args: any) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>();
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
  }

  /*function onClearMultiSelect(multiSelectId: string) {

  }
  */

  //console.log(selectedItems);

  return (
    <FilterBar
      {...args}
      id={args.id}
      //label={label}
      isModalOpen={args.isModalOpen}
      onClickMobileFiltersButton={() => setIsModalOpen(true)}
      onClickGoBack={() => setIsModalOpen(false)}
      isMobile={args.isMobile /*? isMobile : false*/}
      selectedItems={selectedItems}
      onClearSelectedItems={null}
      onSaveSelectedItems={null}
    >
      {multiSelects.map((multiSelect: any) => {
        return (
          <MultiSelect
            key={multiSelect.id}
            //{...args}
            id={multiSelect.id}
            label={multiSelect.label}
            items={multiSelect.items}
            handleOnSelectedItemChange={(selectedItem) =>
              onSelectedItemChange(selectedItem.id, multiSelect.id)
            }
            selectedItems={selectedItems}
            //onClearMultiSelect={() => onClearMultiSelect(group.id)}
            //onSaveMultiSelect={onSaveMultiSelect}
            //onMenuClick={() => onMenuClick(group.id)}
            //selectedmultiSelectIds={selectedmultiSelectIds}
            showCtaButtons={isMobile ? false : true}
          />
        );
      })}
    </FilterBar>
  );
}

export default FilterBarStory;
