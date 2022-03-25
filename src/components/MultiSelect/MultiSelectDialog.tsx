import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Checkbox from "./../Checkbox/Checkbox";
import {
  MultiSelectItem,
  SelectedItems,
  MultiSelectWidths,
} from "./MultiSelectTypes";
import MultiSelectMenuButton from "./MultiSelectMenuButton";
import {
  Box,
  ListItem,
  Stack,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";

export interface MultiSelectProps {
  /** The id of the multiSelect. */
  id: string;
  /** The label of the multiSelect. */
  label: string;
  /** The open status of the multiselect menu. */
  isOpen?: boolean;
  /** Whether the multiselect is in mobile mode or not. */
  isMobile?: boolean;
  /** The action to perform for the multiselect menu toggle button. */
  onMenuToggle?: () => void;
  /** The items to be rendered in the multiselect as options. */
  items: MultiSelectItem[];
  /** The action to perform on the checkbox's onChange function.  */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The action to perform for a mixed state checkbox (parent checkbox). */
  // @TODO this is wrong, fix.
  //onMixedStateChange?: (childItems: string[]) => void;
  onMixedStateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** The action to perform for save/apply button of multiselect. */
  onApply?: () => void;
  /** The action to perform for clear/reset button of multiselect.. */
  onClear?: () => void;
  /** Enum value used to set the width for the MultiSelect component. */
  width?: MultiSelectWidths;
}

function MultiSelectDialog({
  id,
  label,
  items,
  isOpen,
  isMobile,
  onChange,
  onMixedStateChange,
  selectedItems,
  onMenuToggle,
  onApply,
  onClear,
  width = MultiSelectWidths.Default,
}: MultiSelectProps) {
  const styles = useMultiStyleConfig("MultiSelect", { width });

  function isChecked(multiSelectId: string, itemId: string) {
    if (
      selectedItems[multiSelectId]?.items.find(
        // @ts-ignore
        (selectedItemId: string) => selectedItemId === itemId
      )
    ) {
      return true;
    }
    return false;
  }

  function isAllChecked(multiSelectId: string, item: MultiSelectItem): boolean {
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
  }

  function isIndeterminate(
    multiSelectId: string,
    item: MultiSelectItem
  ): boolean {
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
  }

  function focusLockDisabled(): boolean {
    if (isMobile) {
      return true;
    }
    if (!isOpen) {
      return false;
    }
    return false;
  }

  return (
    <Box id={id} __css={styles}>
      <MultiSelectMenuButton
        multiSelectId={id}
        label={label}
        isOpen={isOpen}
        selectedItems={selectedItems}
        onMenuToggle={onMenuToggle}
        onClear={onClear}
      />
      <FocusLock disabled={focusLockDisabled()}>
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
                buttonType={ButtonTypes.Link}
                mouseDown={false}
                type="button"
                onClick={onClear}
              >
                Clear
              </Button>
              <Button
                buttonType={ButtonTypes.Primary}
                mouseDown={false}
                type="button"
                onClick={onApply}
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