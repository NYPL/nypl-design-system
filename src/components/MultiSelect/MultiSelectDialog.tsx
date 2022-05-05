import React, { useEffect, useRef, useState } from "react";
import Button from "./../Button/Button";
import Checkbox from "./../Checkbox/Checkbox";
import { MultiSelectItem } from "./MultiSelectTypes";
import { MultiSelectProps } from "./MultiSelect";
import MultiSelectMenuButton from "./MultiSelectMenuButton";
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
import useWindowSize from "./../../hooks/useWindowSize";

type MultiSelectDialogProps = Omit<MultiSelectProps, "onChange"> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function MultiSelectDialog({
  id,
  label,
  items,
  defaultIsOpen = false,
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

  // Control the open or closed state of the multiselect.
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  // Create a ref that we add to the element for which we want to detect outside clicks.
  const ref = useRef();
  // Closes the multiselect if user clicks outside.
  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  });

  const isChecked = (multiSelectId: string, itemId: string): boolean => {
    if (
      selectedItems[multiSelectId]?.items.find(
        (selectedItemId: string) => selectedItemId === itemId
      )
    ) {
      return true;
    }
    return false;
  };

  const isAllChecked = (
    multiSelectId: string,
    item: MultiSelectItem
  ): boolean => {
    let childIds = [];
    item.children.map((childItem) => {
      childIds.push(childItem.id);
    });
    if (
      selectedItems[multiSelectId] !== undefined &&
      childIds.every((childItem) =>
        selectedItems[multiSelectId].items.includes(childItem)
      )
    ) {
      return true;
    }
    return false;
  };

  const isIndeterminate = (
    multiSelectId: string,
    item: MultiSelectItem
  ): boolean => {
    let childIds = [];
    item.children.map((childItem) => {
      childIds.push(childItem.id);
    });
    if (
      selectedItems[multiSelectId] !== undefined &&
      childIds.some((childItem) =>
        selectedItems[multiSelectId].items.includes(childItem)
      ) &&
      !isAllChecked(multiSelectId, item)
    ) {
      return true;
    }
    return false;
  };

  return (
    <Box id={id} ref={ref} __css={styles}>
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
                <ListItem key={item.id} py={1}>
                  {item.children ? (
                    <>
                      <Checkbox
                        id={item.id}
                        labelText={item.name}
                        showLabel={true}
                        name={item.name}
                        // If onMixedStateChange is not passed as a prop, handle
                        // the parent checkbox as a regular checkbox using onChange
                        {...(onMixedStateChange !== undefined
                          ? {
                              isChecked: isAllChecked(id, item) || false,
                              isIndeterminate:
                                isIndeterminate(id, item) || false,
                              onChange: onMixedStateChange,
                            }
                          : {
                              isChecked: isChecked(id, item.id) || false,
                              onChange: onChange,
                            })}
                      />
                      <UnorderedList
                        styleType="none"
                        marginInlineStart="0"
                        __css={styles.menuChildren}
                      >
                        {item.children.map((childItem) => {
                          return (
                            <ListItem key={childItem.id} py={1}>
                              <Checkbox
                                id={childItem.id}
                                labelText={childItem.name}
                                showLabel={true}
                                name={childItem.name}
                                isChecked={isChecked(id, childItem.id) || false}
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
                      showLabel={true}
                      name={item.name}
                      isChecked={isChecked(id, item.id) || false}
                      onChange={onChange}
                    />
                  )}
                </ListItem>
              ))}
          </UnorderedList>
          {isOpen && !isMobile && (
            <Stack direction="row" spacing={4} justify="flex-end">
              <Button
                id="multiselect-dialog-clear"
                buttonType="link"
                mouseDown={false}
                type="button"
                onClick={onClear}
              >
                Clear
              </Button>
              <Button
                id="multiselect-dialog-apply"
                buttonType="primary"
                mouseDown={false}
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
