import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  ListItem,
  Stack,
  UnorderedList,
  useMultiStyleConfig,
  useOutsideClick,
} from "@chakra-ui/react";
// @TODO Add "@chakra-ui/focus-lock" to package.json dependencies ?
import FocusLock from "@chakra-ui/focus-lock";

import Button from "./../Button/Button";
import Checkbox from "./../Checkbox/Checkbox";
import { MultiSelectItem, MultiSelectProps } from "./MultiSelect";
import MultiSelectMenuButton from "./MultiSelectMenuButton";
import useWindowSize from "./../../hooks/useWindowSize";

type MultiSelectDialogProps = Omit<MultiSelectProps, "onChange"> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function MultiSelectDialog({
  id,
  label,
  items,
  isDefaultOpen = false,
  onChange,
  onMixedStateChange,
  selectedItems,
  onApply,
  onClear,
  width = "default",
  isBlockElement = false,
}: MultiSelectDialogProps) {
  const styles = useMultiStyleConfig("MultiSelect", {
    width,
    isBlockElement,
  });

  // Track the window size width, to set isMobile.
  const [isMobile, setIsMobile] = useState<boolean>();
  const windowDimensions = useWindowSize();
  useEffect(() => {
    if (windowDimensions.width >= 320) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowDimensions.width]);

  // Control the open or closed state of the MultiSelect.
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  // Create a ref that we add to the element for which we want to detect outside clicks.
  const ref = useRef<HTMLDivElement>();
  // Closes the MultiSelect if user clicks outside.
  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  });

  const isChecked = (multiSelectId: string, itemId: string): boolean => {
    if (selectedItems[multiSelectId]) {
      return !!selectedItems[multiSelectId].items.find(
        (selectedItemId: string) => selectedItemId === itemId
      );
    }
    return false;
  };

  // isAllChecked defines the isChecked status of parent checkboxes. If all child items are selected, it will turn true, otherwise it returns false. This prop is only passed to parent options.
  const isAllChecked = (
    multiSelectId: string,
    item: MultiSelectItem
  ): boolean => {
    let childIds: string[] = item.children.map((childItem) => childItem.id);
    if (selectedItems[multiSelectId] !== undefined) {
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
      childIds.some((childItem) =>
        selectedItems[multiSelectId].items.includes(childItem)
      )
    ) {
      return !isAllChecked(multiSelectId, item);
    }
    return false;
  };

  return (
    <Box
      id={id}
      ref={ref}
      __css={styles}
      {...(isOpen && { "aria-modal": true })}
    >
      <FocusLock isDisabled={!isOpen}>
        <MultiSelectMenuButton
          multiSelectId={id}
          label={label}
          isOpen={isOpen}
          selectedItems={selectedItems}
          onMenuToggle={() => {
            setIsOpen(!isOpen);
          }}
          onClear={onClear}
        />
        <Box
          role="dialog"
          __css={styles.menuContainer}
          {...(!isOpen && { display: "none" })}
        >
          <UnorderedList
            styleType="none"
            marginInlineStart="0"
            __css={styles.menu}
          >
            {isOpen &&
              items.map((item: MultiSelectItem) => (
                <ListItem key={item.id} py="xxs">
                  {item.children ? (
                    <>
                      <Checkbox
                        id={item.id}
                        labelText={item.name}
                        name={item.name}
                        // If onMixedStateChange is not passed as a prop, handle
                        // the parent checkbox as a regular checkbox using onChange
                        {...(onMixedStateChange !== undefined
                          ? {
                              isChecked: isAllChecked(id, item),
                              isIndeterminate: isIndeterminate(id, item),
                              onChange: onMixedStateChange,
                            }
                          : {
                              isChecked: isChecked(id, item.id),
                              onChange,
                            })}
                      />
                      <UnorderedList
                        styleType="none"
                        marginInlineStart="0"
                        __css={styles.menuChildren}
                      >
                        {item.children.map((childItem) => {
                          return (
                            <ListItem key={childItem.id} py="xxs">
                              <Checkbox
                                id={childItem.id}
                                labelText={childItem.name}
                                name={childItem.name}
                                isChecked={isChecked(id, childItem.id)}
                                onChange={onChange}
                              />
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
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
                </ListItem>
              ))}
          </UnorderedList>
          {isOpen && !isMobile && (
            <Stack direction="row" spacing="s" justify="flex-end">
              <Button
                id={`multiselect-${id}-clear`}
                buttonType="link"
                type="button"
                onClick={onClear}
              >
                Clear
              </Button>
              <Button
                id={`multiselect-${id}-apply`}
                buttonType="primary"
                type="button"
                onClick={() => {
                  // Close the multiselect on apply.
                  setIsOpen(false);
                  // Run the onApply prop function.
                  onApply();
                }}
              >
                Apply Filters
              </Button>
            </Stack>
          )}
        </Box>
      </FocusLock>
    </Box>
  );
}

export default MultiSelectDialog;
