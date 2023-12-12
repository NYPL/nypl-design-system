import React, { useRef, useState, forwardRef } from "react";
import {
  Box,
  chakra,
  useMultiStyleConfig,
  useMergeRefs,
} from "@chakra-ui/react";

import Text from "./../Text/Text";
import Accordion from "./../Accordion/Accordion";
import CheckboxGroup from "./../CheckboxGroup/CheckboxGroup";
import Checkbox from "./../Checkbox/Checkbox";
import { MultiSelectItem, MultiSelectProps } from "./MultiSelect";
import useCloseDropDown from "../../hooks/useCloseDropDown";
import MultiSelectMenuButton from "./MultiSelectMenuButton";
import TextInput from "../TextInput/TextInput";
import { truncateText } from "../../utils/utils";

type MultiSelectDialogProps = Omit<MultiSelectProps, "onChange"> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MultiSelectDialog = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<MultiSelectDialogProps>>(
    (props, ref) => {
      const {
        helperText,
        id,
        isBlockElement,
        isDefaultOpen,
        isSearchable,
        defaultItemsVisible,
        items,
        listOverflow,
        buttonText,
        closeOnBlur,
        onApply,
        onChange,
        onClear,
        onMixedStateChange,
        selectedItems,
        showLabel,
        showAll,
        width,
        ...rest
      } = props;

      // Control the open or closed state of the MultiSelect.
      const [isOpen] = useState(isDefaultOpen);
      const [itemsList, setItemsList] = useState(items);
      const [isDropDownOpen, setIsDropDownOpen] = useState(false);
      const [viewAllLabel, setViewAllLabel] = useState("");
      const [listHeight, setListHeight] = useState("");
      const [listItemsCount, setListItemsCount] = useState(defaultItemsVisible);
      const [defaultCheckboxes, setDefaultCheckboxes] = useState("none");
      const [defaultChildCheckboxes, setDefaultChildCheckboxes] =
        useState("none");
      //const [prevIsOpen, setPrevIsOpen] = React.useState(isDropDownOpen);

      React.useEffect(() => {
        const calculateListHeight = () => {
          if (listOverflow === "scroll") {
            setViewAllLabel("View all");
            setListHeight("260px");
            setListItemsCount(defaultItemsVisible);
          } else {
            setViewAllLabel("View less");
            setListHeight("");
            setListItemsCount(items.length);
          }
        };

        calculateListHeight();

        if (listItemsCount === defaultItemsVisible) {
          displayDefaultItems();
        } else {
          setItemsList(items);
        }
      }, []);

      // Sets the selected items count on the menu button.
      let getSelectedItemsCount;
      if (selectedItems[id]?.items.length > 0) {
        getSelectedItemsCount = `${selectedItems[id].items.length}`;
      }

      const styles = useMultiStyleConfig("MultiSelect", {
        width,
        isBlockElement,
        isOpen,
        hasSelectedItems: getSelectedItemsCount === undefined ? false : true,
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
      const mergedRefs = useMergeRefs(internalRef, ref);

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

      const handleSearchKeyword = (event) => {
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
        listItemsCount === defaultItemsVisible
          ? displayDefaultItems()
          : setItemsList(items);
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
            setDefaultCheckboxes("block");

            if (!showChilds && !showIndeterminateChilds) {
              currentItem.children.forEach((childItem) => {
                if (count < defaultItemsVisible) {
                  count++;
                  // Display the first defaultItemsVisible children
                  setDefaultChildCheckboxes((prev) => {
                    // Assuming 'prev' is an array, and we want to update it by adding 'childItem'
                    return [...prev, { ...childItem, display: "block" }];
                  });
                } else {
                  // Hide the remaining children
                  setDefaultChildCheckboxes((prev) => {
                    // Assuming 'prev' is an array, and we want to update it by adding 'childItem'
                    return [...prev, { ...childItem, display: "none" }];
                  });
                }
              });
            }
            //count += (!showChilds || !showIndeterminateChilds) ? currentItem.children?.length : items[i].children.length;
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
          return <TextInput
            id="multi-select-text-input-id"
            invalidText="This is error text :("
            isClearable={true}
            isClearableCallback={clearSearchKeyword}
            isRequired
            placeholder="Search for options"
            onChange={handleSearchKeyword}
            showHelperInvalidText={true}
            showLabel
            showRequiredLabel
            step={1}
            textInputType="default"
            type="text"
            __css={styles.menuInputText}
            marginBottom="s"
          />
        }
      }

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
                          display={defaultCheckboxes}
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
                            display={defaultChildCheckboxes}
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
        if (itemsList.length > 0) {
          return (
            <Text
              onClick={() => viewAllItems()}
              __css={styles.viewAllButton}
              id="text-btn"
              marginTop="s"
            >
              {viewAllLabel}
            </Text>
          );
        }
      };

      const itemsNotFound = () => {
        if (itemsList.length === 0) {
          return (
            <Text id="text-btn" marginTop="xs" isItalic="true">
              No options found
            </Text>
          );
        }
      };

      // We need this for our "fake" button inside the main menu button.
      function onKeyPress(e) {
        const enterOrSpace =
          e.key === "Enter" ||
          e.key === " " ||
          e.key === "Spacebar" ||
          e.which === 13 ||
          e.which === 32;

        if (enterOrSpace) {
          e.preventDefault();
          onClear();
          internalRef?.current.focus();
        }
      }
      // Manage focus upon closing the MultiSelect
      // React.useEffect(() => {
      //   setPrevIsOpen(isDropDownOpen);
      //   if (isDropDownOpen) {
      //   // internalRef.current?.click();
      //   }
      // }, [isDropDownOpen]);

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
          <Text __css={styles.accordianLabel} title={buttonText}>
            {truncateText(buttonText as string, 20)}
          </Text>
        );
      };

      return (
        <Box
          id={id}
          ref={mergedRefs}
          __css={styles}
          {...rest}
          onKeyPress={onKeyPress}
        >
          <MultiSelectMenuButton
            id={`ms-${id}-menu-button`}
            multiSelectId={id}
            multiSelectLabelText={buttonText}
            isOpen={isOpen}
            selectedItems={selectedItems}
            onClear={onClear}
          />
          <Accordion
            sx={{
              _first: {
                "> div": {
                  button: styles.menuButton,
                  "> div": {
                    button: {minWidth: "0px"},
                  }
                }
              },
              "> div": {
                _first: {
                  "> div": {
                    _first: {
                      minWidth: "200px",
                      maxWidth: "300px",
                      borderTopWidth: "0.5px",
                    },
                  },
                },
              },
            }}
            accordionData={[
              {
                accordionType: "default",
                label: buttonTextLabel(),
                panel: displayAccordionData(),
                panelMaxHeight: "10px", //{listHeight}
              },
            ]}
            isAlwaysRendered
            id="accordion-id"
            buttonRef={internalRef}
          />
        </Box>
      );
    }
  ),
  // Pass all custom props to Chakra and override, for width prop.
  { shouldForwardProp: () => true }
);

export default MultiSelectDialog;
