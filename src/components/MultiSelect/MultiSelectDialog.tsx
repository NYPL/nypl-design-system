import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Checkbox from "./../Checkbox/Checkbox";
import { MultiSelectItem, SelectedItems } from "./MultiSelectTypes";
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
  /** The open status of the multiselect menu */
  isOpen?: boolean;
  /** The action to perform for the multiselect menu toggle button. */
  onMenuToggle?: React.MouseEventHandler<HTMLButtonElement>;
  /** The items to be rendered in the multiselect. */
  items: MultiSelectItem[];
  /** The action to perform on the checkbox's onChange function  */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** The action to perform for save/apply button of multiselect. */
  onApply?: () => void;
  /** The action to perform for clear/reset button of multiselect.. */
  onClear?: () => void;
}

function MultiSelectDialog({
  id,
  label,
  items,
  isOpen,
  onChange,
  selectedItems,
  onMenuToggle,
  onApply,
  onClear,
}: MultiSelectProps) {
  const styles = useMultiStyleConfig("MultiSelect", {});

  function setFilterCheckedProp(multiSelectId: string, itemId: string) {
    let checked = false;
    if (selectedItems[multiSelectId] !== undefined) {
      // @ts-ignore
      checked = selectedItems[multiSelectId].items.find(
        // @ts-ignore
        (filter: string) => filter === itemId
      );
    }
    return checked;
  }

  return (
    <Box id={id} __css={styles.container}>
      <MultiSelectMenuButton
        id={id}
        label={label}
        isOpen={isOpen}
        selectedItems={selectedItems}
        onMenuToggle={onMenuToggle}
      />
      <FocusLock disabled={!isOpen}>
        <Box
          role="dialog"
          __css={styles.menuWrapper}
          {...(!isOpen && { display: "none" })}
        >
          <UnorderedList
            styleType="none"
            marginInlineStart="0"
            __css={styles.menu}
          >
            {isOpen &&
              items.map((item: MultiSelectItem) => (
                <ListItem py={1}>
                  {item.children ? (
                    <>
                      <Checkbox
                        id={item.id}
                        labelText={item.name}
                        showLabel={true}
                        name={item.name}
                        isChecked={setFilterCheckedProp(id, item.id) || false}
                        onChange={onChange}
                      />
                      <UnorderedList
                        styleType="none"
                        marginInlineStart="0"
                        __css={styles.childrenContainer}
                      >
                        {item.children.map((childItem) => {
                          return (
                            <ListItem key={childItem.id} py={1}>
                              <Checkbox
                                id={childItem.id}
                                labelText={childItem.name}
                                showLabel={true}
                                name={childItem.name}
                                isChecked={
                                  setFilterCheckedProp(id, childItem.id) ||
                                  false
                                }
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
                      isChecked={setFilterCheckedProp(id, item.id) || false}
                      onChange={onChange}
                    />
                  )}
                </ListItem>
              ))}
          </UnorderedList>
          {isOpen && (
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
