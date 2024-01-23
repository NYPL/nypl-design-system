import React, { useState, forwardRef } from "react";
import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import Accordion from "./../Accordion/Accordion";
import CheckboxGroup from "./../CheckboxGroup/CheckboxGroup";
import Checkbox from "./../Checkbox/Checkbox";
import MultiSelectMenuButton from "./MultiSelectMenuButton";
import TextInput from "../TextInput/TextInput";

export interface MultiSelectItem {
  id: string;
  name: string;
  isDisabled?: boolean;
  children?: MultiSelectItem[];
}
export const multiSelectWidthsArray = ["fitContent", "full"] as const;
export type multiSelectWidths = typeof multiSelectWidthsArray[number];
export const multiSelectListOverflowArray = ["scroll", "expand"] as const;
export type multiSelectListOverflowTypes =
  typeof multiSelectListOverflowArray[number];
export interface SelectedItems {
  [name: string]: { items: string[] };
}
type MultiSelectOnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type MultiSelectProps = {
  /** The label text rendered within the MultiSelect. */
  buttonText: string;
  /** The selected items state (items that were checked by the user). */
  defaultItemsVisible?: number;
  /** The helperText sets the text for the internal HelperErrorText */
  helperText: string;
  /** The action to perform for clear/reset button of MultiSelect. */
  onClear?: () => void;
  /** The action to perform on the checkbox's onChange function. */
  onChange: MultiSelectOnChange;
  /** The action to perform for a mixed state checkbox (parent checkbox). */
  onMixedStateChange?: MultiSelectOnChange;
  /** The id of the MultiSelect. */
  id: string;
  /** Boolean value used to enable the component's search functionality
   * The default value is false. */
  isBlockElement?: boolean;
  /** Set the default open or closed state of the Multiselect. */
  isDefaultOpen?: boolean;
  /** Boolean value used to control how the MultiSelect component will render within the page and interact with other DOM elements.
   * The default value is false. */
  isSearchable?: boolean;
  /** The items to be rendered in the Multiselect as checkbox options. */
  items: MultiSelectItem[];
  listOverflow?: multiSelectListOverflowTypes;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Value used to set the width for the MultiSelect component. */
  width?: multiSelectWidths;
};

/**
  The MultiSelect component is a customizable form input that supports multiple configurations,
  including search functionality, checkbox options, and hierarchical structure,
  with a parent checkbox toggling all children and dynamic styling through Chakra UI.
*/

export const MultiSelect = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<MultiSelectProps>>(
    (props, _ref?) => {
      const {
        helperText,
        id,
        isBlockElement = false,
        isDefaultOpen = false,
        isSearchable = false,
        defaultItemsVisible = 5,
        items,
        listOverflow = "scroll",
        buttonText,
        onChange,
        onClear,
        onMixedStateChange,
        selectedItems,
        width = "full",
        ...rest
      } = props;

      // Control the open or closed state of the MultiSelect.
      const DEFAULT_ITEMS_LIST_HEIGHT = "0px";
      const MINIMUM_ITEMS_LIST_HEIGHT = "215px";
      const MAXIMUM_ITEMS_LIST_HEIGHT = "275px";
      const [itemsList, setItemsList] = useState(items);
      const [viewAllLabel, setViewAllLabel] = useState("View all");
      const [listHeight, setListHeight] = useState(MINIMUM_ITEMS_LIST_HEIGHT);
      const [listItemsCount, setListItemsCount] = useState(defaultItemsVisible);

      // Separate effect for handling listOverflow "scroll"
      React.useEffect(() => {
        if (listOverflow === "scroll") {
          setListHeight(MINIMUM_ITEMS_LIST_HEIGHT);
          if (isSearchable || items.some((item) => !!item.children)) {
            setListHeight(MAXIMUM_ITEMS_LIST_HEIGHT);
          }
          setItemsList(items);
        }
      }, [listOverflow, items, isSearchable]);

      // Sets the selected items count on the menu button.
      let getSelectedItemsCount: any;
      getSelectedItemsCount = !!(selectedItems[id]?.items.length || 0);

      const styles = useMultiStyleConfig("MultiSelect", {
        width,
        isBlockElement,
        isDefaultOpen,
        hasSelectedItems: getSelectedItemsCount,
      });

      const isChecked = (multiSelectId: string, itemId: string): boolean => {
        if (selectedItems[multiSelectId]) {
          return !!selectedItems[multiSelectId].items.find(
            (selectedItemId: string) => selectedItemId === itemId
          );
        }
        return false;
      };

      // isAllChecked defines the isChecked status of parent checkboxes. If all child items are selected, it will turn true, otherwise it returns false.
      // This prop is only passed to parent options.
      const isAllChecked = (
        multiSelectId: string,
        item: MultiSelectItem
      ): boolean => {
        let childIds: string[] = item.children.map((childItem) => childItem.id);
        if (selectedItems[multiSelectId] !== undefined) {
          return childIds.every(
            (childItem) =>
              selectedItems[multiSelectId].items.includes(childItem) &&
              !item.children.find((c) => c.id === childItem)?.isDisabled
          );
        }
        return false;
      };

      // isInteterminate will return true if some child items of the parent item are selected. This prop is only passed to parent options.
      const isIndeterminate = (
        multiSelectId: string,
        item: MultiSelectItem
      ): boolean => {
        let childIds: string[] = item.children.map((childItem) => childItem.id);
        if (
          selectedItems[multiSelectId] !== undefined &&
          childIds.length > 0 &&
          childIds.some(
            (childItem) =>
              selectedItems[multiSelectId].items.includes(childItem) &&
              !item.children.find((c) => c.id === childItem)?.isDisabled
          )
        ) {
          return !isAllChecked(multiSelectId, item);
        }
        return false;
      };

      const updateDisabledState = (item: MultiSelectItem): boolean => {
        // Check if all child items are disabled, and update the parent accordingly
        if (item.children.every((childItem) => childItem.isDisabled)) {
          item.isDisabled = true;
        } else {
          item.isDisabled = false;
        }
        // Return the updated isDisabled state for the parent item
        return item.isDisabled;
      };

      const onChangeSearch = (event) => {
        const value = event.target.value.trim().toLowerCase();

        if (value === "") {
          return listItemsCount === defaultItemsVisible
            ? displayDefaultItems()
            : setItemsList(items);
        }

        const filteredItems = items.filter((item) => {
          if (item.children) {
            if (item.name.toLowerCase().includes(value)) {
              return true;
            }

            return item.children.some((childItem) =>
              childItem.name.toLowerCase().includes(value)
            );
          }

          return item.name.toLowerCase().includes(value);
        });

        setItemsList(filteredItems);
      };

      // The clearSearchKeyword method resets the search keyword in the MultiSelect component.
      // If the listOverflow is set to "scroll," it sets the list of items to the full list (items).
      // If listOverflow is set to a value other than "scroll,"
      // it checks if the current count of displayed items (listItemsCount) is equal to the default number of visible items (defaultItemsVisible).
      // If true, it displays the default items; otherwise, it sets the list of items to the full list.
      // This method is responsible for clearing the search and displaying the appropriate items based on the listOverflow and item count conditions.
      const clearSearchKeyword = () => {
        if (listOverflow === "scroll") {
          setItemsList(items);
        } else {
          listItemsCount === defaultItemsVisible
            ? displayDefaultItems()
            : setItemsList(items);
        }
      };

      const displayDefaultItems = () => {
        const list = [];
        let count = 0;

        for (let i = 0; i < items.length && count < defaultItemsVisible; i++) {
          const currentItem = items[i];
          count++;
          if (currentItem.children) {
            const showChilds = isAllChecked(id, currentItem);
            const showIndeterminateChilds = isIndeterminate(id, currentItem);
            count +=
              !showChilds || !showIndeterminateChilds
                ? currentItem.children?.length
                : items[i].children.length;
          }

          list.push(currentItem);
          if (count >= defaultItemsVisible) {
            break;
          }
        }
        setItemsList(list);
      };

      // Separate effect for handling listOverflow "expand"
      React.useEffect(() => {
        if (listOverflow === "expand") {
          setListHeight("");
          if (listItemsCount === defaultItemsVisible) {
            displayDefaultItems();
          } else {
            setItemsList(items);
            setViewAllLabel("View less");
          }
        }
      }, [listOverflow, listItemsCount, items, defaultItemsVisible]);

      const showSearchInputBox = () => (
        <>
          {isSearchable && (
            <TextInput
              id="multi-select-text-input-id"
              labelText={`Search ${buttonText}`}
              isClearable={true}
              isClearableCallback={clearSearchKeyword}
              placeholder={`Search ${buttonText}`}
              onChange={onChangeSearch}
              showLabel={false}
              showRequiredLabel={false}
              type="text"
              __css={styles.menuSearchInputBox}
              marginBottom="s"
            />
          )}
          {!isSearchable && null}
        </>
      );

      const generateCheckboxArray = (item: MultiSelectItem) => {
        if (item.children) {
          return [
            <Checkbox
              id={item.id}
              labelText={item.name}
              name={item.name}
              key={item.id}
              {...(onMixedStateChange !== undefined
                ? {
                    isChecked: isAllChecked(id, item),
                    isIndeterminate: isIndeterminate(id, item),
                    onChange: onMixedStateChange,
                    isDisabled: updateDisabledState(item),
                  }
                : {
                    isChecked: isChecked(id, item.id),
                    isDisabled: updateDisabledState(item),
                    onChange: onChange,
                  })}
            />,
            ...item.children.map((childItem) => (
              <Checkbox
                key={childItem.id}
                marginInlineStart="0"
                __css={styles.menuChildren}
                id={childItem.id}
                labelText={childItem.name}
                name={childItem.name}
                isDisabled={childItem.isDisabled}
                isChecked={isChecked(id, childItem.id)}
                onChange={onChange}
              />
            )),
          ];
        } else {
          return [
            <Checkbox
              id={item.id}
              labelText={item.name}
              name={item.name}
              isDisabled={item.isDisabled}
              isChecked={isChecked(id, item.id)}
              onChange={onChange}
              key={item.id}
            />,
          ];
        }
      };

      const displayAccordionData = () => {
        return (
          <Box>
            {showSearchInputBox()}
            {itemsNotFound()}
            <CheckboxGroup
              id="multi-select-checkbox-group"
              layout="column"
              isFullWidth
              isRequired={false}
              labelText="Multi select checkbox group label"
              showLabel={false}
              name="multi-select-checkbox-group"
            >
              {itemsList.map((item: MultiSelectItem) => (
                <>{generateCheckboxArray(item)}</>
              ))}
            </CheckboxGroup>
            {showViewLabel()}
          </Box>
        );
      };

      const showViewLabel = () => {
        if (listOverflow === "expand" && items.length >= defaultItemsVisible) {
          return (
            <Box
              onClick={() => viewAllItems()}
              __css={styles.viewAllButton}
              id="view-all-text-btn"
              marginTop="s"
            >
              {viewAllLabel}
            </Box>
          );
        }
      };

      const itemsNotFound = () => {
        if (itemsList.length === 0) {
          return (
            <Box
              key="items-not-found-text-id"
              id="items-not-found-text-id"
              marginTop="xs"
            >
              No options found
            </Box>
          );
        }
        return null; // Return null when itemsList.length !== 0
      };

      const viewAllItems = () => {
        setViewAllLabel((prevProp) =>
          prevProp === "View all" ? "View less" : "View all"
        );
        setListHeight((prevProp) =>
          prevProp === MAXIMUM_ITEMS_LIST_HEIGHT
            ? DEFAULT_ITEMS_LIST_HEIGHT
            : MAXIMUM_ITEMS_LIST_HEIGHT
        );
        setListItemsCount((prevProp) =>
          prevProp === defaultItemsVisible ? items.length : defaultItemsVisible
        );

        if (listItemsCount === defaultItemsVisible) {
          setItemsList(items);
        } else {
          displayDefaultItems();
        }
      };

      const buttonTextLabel = () => {
        return (
          <Box
            __css={
              getSelectedItemsCount > 0
                ? styles.buttonTextLabel
                : null /* or pass an empty object {} if you don't want any styles */
            }
            title={buttonText}
          >
            {buttonText}
          </Box>
        );
      };

      return (
        <Box id={id} __css={styles} {...rest}>
          <MultiSelectMenuButton
            id={`ms-${id}-menu-button`}
            multiSelectId={id}
            multiSelectLabelText={buttonText}
            isOpen={isDefaultOpen}
            selectedItems={selectedItems}
            onClear={onClear}
          />
          <Accordion
            sx={styles.accordionStyles}
            accordionData={[
              {
                accordionType: "default",
                label: buttonTextLabel(),
                panel: displayAccordionData(),
              },
            ]}
            panelMaxHeight={listHeight}
            isDefaultOpen={isDefaultOpen}
            isAlwaysRendered
            id="multi-select-accordion-id"
          />
        </Box>
      );
    }
  ),
  // Pass all custom props to Chakra and override, for width prop.
  { shouldForwardProp: () => true }
);

export default MultiSelect;
