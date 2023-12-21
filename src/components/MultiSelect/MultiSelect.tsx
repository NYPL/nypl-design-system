import React, { useRef, useState, forwardRef } from "react";
import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Accordion from "./../Accordion/Accordion";
import CheckboxGroup from "./../CheckboxGroup/CheckboxGroup";
import Checkbox from "./../Checkbox/Checkbox";
import useCloseDropDown from "../../hooks/useCloseDropDown";
import MultiSelectMenuButton from "./MultiSelectMenuButton";
import TextInput from "../TextInput/TextInput";

export interface MultiSelectItem {
  id: string;
  name: string;
  children?: MultiSelectItem[];
}
export const multiSelectWidthsArray = ["fitContent", "full"] as const;
export type MultiSelectWidths = typeof multiSelectWidthsArray[number];
export const multiSelectListOverflowArray = ["scroll", "expand"] as const;
export type MultiSelectListOverflowTypes =
  typeof multiSelectListOverflowArray[number];
export interface SelectedItems {
  [name: string]: { items: string[] };
}

/**
 * The `MultiSelect` component is a form input element that presents a list
 * of `Checkbox` components from which a user can make one or multiple
 * selections. Two variants of the MultiSelect component are offered, each with
 * slightly different functionality and requirements.  Because of these
 * differences, the two variants are broken out in separate stories below.
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
        closeOnBlur,
        onApply,
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
      const [isDropDownOpen, setIsDropDownOpen] = useState(isDefaultOpen);
      const [viewAllLabel, setViewAllLabel] = useState("View all");
      const [listHeight, setListHeight] = useState("275px");
      const [listItemsCount, setListItemsCount] = useState(defaultItemsVisible);
      //const [prevIsOpen, setPrevIsOpen] = React.useState(isDropDownOpen);

      // Separate effect for handling listOverflow "scroll"
      React.useEffect(() => {
        if (listOverflow === "scroll") {
          setListHeight("275px");
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
      let getSelectedItemsCount;
      if (selectedItems[id]?.items.length > 0) {
        getSelectedItemsCount = !!(selectedItems[id]?.items.length || 0);
      }

      const styles = useMultiStyleConfig("MultiSelect", {
        width,
        isBlockElement,
        isOpen,
        hasSelectedItems: getSelectedItemsCount,
        isDropDownOpen,
      });

      // Create a ref that we add to the element for which we want to detect outside clicks.
      const internalRef: React.RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>();

      // Custom Hook, Closes the MultiSelect if user clicks outside.
      function useOnClickOutside(ref, handler) {
        React.useEffect(() => {
          const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
              return;
            }
            handler(event);
          };
          document.addEventListener("mousedown", listener);
          document.addEventListener("touchstart", listener);
          return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
          };
        }, [ref, handler]);
      }

      useOnClickOutside(internalRef, () => setIsDropDownOpen(false));
      // Hook to close Dialog on ESC key storke
      useCloseDropDown(() => setIsDropDownOpen(true), internalRef);
      // Merge internal ref with the ref passed through the chakra function.
      // const mergedRefs = useMergeRefs(internalRef, ref);

      // Manage focus upon closing the MultiSelect
      React.useEffect(() => {
        if (isDropDownOpen) {
          //internalRef.current?.click();
        }
      }, [isDropDownOpen]);

      const isChecked = (multiSelectId: string, itemId: string): boolean => {
        if (selectedItems[multiSelectId]) {
          return !!selectedItems[multiSelectId].items.find(
            (selectedItemId: string) => selectedItemId === itemId
          );
        }
        return false;
      };

      // isAllChecked defines the isChecked status of parent checkboxes.If all child items are selected, it will turn true, otherwise it returns false.
      // This prop is only passed to parent options.
      const isAllChecked = (
        multiSelectId: string,
        targetItem: MultiSelectItem
      ): boolean => {
        const childIds: string[] = targetItem.children.map(
          (childItem) => childItem.id
        );
        if (childIds.length > 0 && selectedItems[multiSelectId] !== undefined) {
          return childIds.every((childItem) =>
            selectedItems[multiSelectId].items.includes(childItem)
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
          childIds.some((childItem) => {
            selectedItems[multiSelectId].items.includes(childItem);
          })
        ) {
          return !isAllChecked(multiSelectId, item);
        }
        return false;
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
            // if (!showChilds && !showIndeterminateChilds) {
            //   currentItem.children = currentItem.children.slice(0, defaultItemsVisible - count);
            // }

            // if (currentItem.children.length === 0 && (!showChilds && !showIndeterminateChilds)) {
            //   delete currentItem.children; // Delete the children property to hide it
            // }
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
                              }
                            : {
                                isChecked: isChecked(id, item.id),
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
        setListHeight(listHeight === "260px" ? "" : "260px");
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
            isAlwaysRendered
            id="multi-select-accordion-id"
            buttonRef={internalRef}
          />
        </Box>
      );
    }
  ),
  // Pass all custom props to Chakra and override, for width prop.
  { shouldForwardProp: () => true }
);

export default MultiSelect;
