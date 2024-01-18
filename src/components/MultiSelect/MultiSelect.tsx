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
export type MultiSelectWidths = typeof multiSelectWidthsArray[number];
export const multiSelectListOverflowArray = ["scroll", "expand"] as const;
export type multiSelectListOverflowTypes =
  typeof multiSelectListOverflowArray[number];
export interface SelectedItems {
  [name: string]: { items: string[] };
}
type MultiSelectOnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type MultiSelectProps = {
  /** The helperText sets the text for the internal HelperErrorText */
  helperText: string;
  /** The id of the MultiSelect. */
  id: string;
  /** Set the default open or closed state of the Multiselect. */
  isDefaultOpen: boolean;
  /** Boolean value used to enable the component's search functionality
   * The default value is false. */
  isSearchable: boolean;
  /** Boolean value used to control how the MultiSelect component will render within the page and interact with other DOM elements.
   * The default value is false. */
  isBlockElement: boolean;
  /** The items to be rendered in the Multiselect as checkbox options. */
  items: MultiSelectItem[];

  listOverflow?: multiSelectListOverflowTypes;
  /** The label text rendered within the MultiSelect. */
  buttonText: string;
  /** Numeric value to set the maximum number of checkbox items
   * The default value is 5. */
  defaultItemsVisible: number;
  /** The action to perform for clear/reset button of MultiSelect. */
  onClear?: () => void;
  /** The action to perform on the checkbox's onChange function.  */
  onChange?: MultiSelectOnChange;
  /** The action to perform for a mixed state checkbox (parent checkbox). */
  onMixedStateChange?: MultiSelectOnChange;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Value used to set the width for the MultiSelect component. */
  width?: MultiSelectWidths;
};

/**
 * The `MultiSelect` component is a form input element that presents a list
 * of `Checkbox` components from which a user can make one or multiple
 * selections. The MultiSelect allows for an optional set of child checkboxes to be passed,
 * which makes the “parent” checkbox function as a check/uncheck all toggle.
 * If all of the children checkboxes are checked, the parent isChecked prop will be true.
 * If only some of the child checkboxes are checked, the parent checkbox will have a isIndeterminate state,
 * that can be checked or unchecked.
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
      const [isOpen] = useState(isDefaultOpen);
      const [itemsList, setItemsList] = useState(items);
      const [viewAllLabel, setViewAllLabel] = useState("View all");
      const [listHeight, setListHeight] = useState("215px");
      const [listItemsCount, setListItemsCount] = useState(defaultItemsVisible);

      // Separate effect for handling listOverflow "scroll"
      React.useEffect(() => {
        if (listOverflow === "scroll") {
          setListHeight("215px");
          if (isSearchable || items.some((item) => !!item.children)) {
            setListHeight("275px");
          }
          setItemsList(items);
        }
      }, [listOverflow, items]);

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

      // Sets the selected items count on the menu button.
      let getSelectedItemsCount: any;
      if (selectedItems[id]?.items.length > 0) {
        getSelectedItemsCount = !!(selectedItems[id]?.items.length || 0);
      }

      const styles = useMultiStyleConfig("MultiSelect", {
        width,
        isBlockElement,
        isOpen,
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

      const updateDisabledState = (
        multiSelectId: string,
        item: MultiSelectItem
      ): boolean => {
        // Update isDisabled for the parent item
        item.isDisabled = isAllChecked(multiSelectId, item);

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
          const currentItem = { ...items[i] };
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

      const showSearchInputBox = () => {
        if (isSearchable) {
          return (
            <TextInput
              id="multi-select-text-input-id"
              labelText={`Search ${buttonText}`}
              isClearable={true}
              isClearableCallback={clearSearchKeyword}
              isRequired
              placeholder={`Search ${buttonText}`}
              onChange={onChangeSearch}
              showLabel={false}
              showRequiredLabel={false}
              step={1}
              textInputType="default"
              type="text"
              __css={styles.menuSearchInputBox}
              marginBottom="s"
            />
          );
        }
      };

      const displayAccordionData = () => {
        return (
          <>
            <Box>
              {showSearchInputBox()}
              {itemsNotFound()}
              <CheckboxGroup
                id="multi-select-checkbox-group"
                layout="column"
                isFullWidth
                isRequired={false}
                labelText=""
                name="multi-select-checkbox-group"
              >
                {itemsList.map((item: MultiSelectItem) => (
                  <React.Fragment key={item.id}>
                    {item.children ? (
                      <>
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
                                isDisabled: updateDisabledState(id, item),
                              }
                            : {
                                isChecked: isChecked(id, item.id),
                                isDisabled: updateDisabledState(id, item),
                                onChange: onChange,
                              })}
                        />
                        {item.children.map((childItem) => (
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
                        ))}
                      </>
                    ) : (
                      <Checkbox
                        id={item.id}
                        labelText={item.name}
                        name={item.name}
                        isDisabled={item.isDisabled}
                        isChecked={isChecked(id, item.id)}
                        onChange={onChange}
                        key={item.id}
                      />
                    )}
                  </React.Fragment>
                ))}
              </CheckboxGroup>
              {showViewLabel()}
            </Box>
          </>
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
            <Box id="items-not-found-text-id" marginTop="xs">
              No options found
            </Box>
          );
        }
      };

      const viewAllItems = () => {
        setViewAllLabel(viewAllLabel === "View all" ? "View less" : "View all");
        setListHeight(listHeight === "275px" ? "" : "275px");
        setListItemsCount(
          listItemsCount === defaultItemsVisible
            ? items.length
            : defaultItemsVisible
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
            isOpen={isOpen}
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
            isDefaultOpen={isOpen}
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
