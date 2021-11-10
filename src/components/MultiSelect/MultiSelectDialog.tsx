import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Checkbox from "./../Checkbox/Checkbox";
import Icon from "./../Icons/Icon";
import { IconNames, IconSizes } from "./../Icons/IconTypes";
import { MultiSelectItem, SelectedItems } from "./MultiSelectTypes";

import {
  Box,
  ListItem,
  Modal,
  ModalContent,
  Stack,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export interface MultiSelectProps {
  /** The id of the multiSelect. */
  id: string;
  /** The label of the multiSelect. */
  label: string;
  /** The items to be rendered in the multiselect. */
  items: MultiSelectItem[];
  /** Handler for onChange of checkbox, for controlled MultiSelect. */
  handleOnSelectedItemChange: any;
  /** The selected items (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Handler for save button of multiselect. */
  onSaveMultiSelect?: () => void;
  /** Handler for clear/reset button of multiselect. */
  onClearMultiSelect?: () => void;
  /** Not used? */
  onMenuClick?: () => void;
  /** Controls the display of the save and clear buttons on multiselect. */
  showCtaButtons?: boolean;
}

function MultiSelectDialog({
  id,
  label,
  items,
  handleOnSelectedItemChange,
  selectedItems,
  onSaveMultiSelect,
  onClearMultiSelect,
}: MultiSelectProps) {
  const isOpen = true;

  const styles = useMultiStyleConfig("MultiSelect", {});
  // @ts-ignore
  const iconType = isOpen ? "Minus" : "Plus";

  // Sets the ListBoxMenuButton label, including a count of selected items.
  function getButtonLabel(id: string) {
    let buttonLabel = label;
    if (
      selectedItems !== undefined &&
      selectedItems[id] !== undefined &&
      selectedItems[id].items.length > 0
    ) {
      buttonLabel = `${label} (${selectedItems[id].items.length})`;
    }
    return buttonLabel;
  }

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

  /*function hasSelectedItems() {
    if (
      (selectedItems[id] !== undefined && selectedItems[id].items.length) ||
      isOpen
    ) {
      return true;
    }
    return false;
  }
  */

  return (
    <Box id={id} __css={styles.container}>
      <Button
        buttonType={ButtonTypes.Secondary}
        attributes={{
          ...styles.menuButton,
        }}
      >
        <span>{getButtonLabel(id)}</span>
        <Icon
          name={IconNames[iconType]}
          decorative={true}
          size={IconSizes.Small}
        />
      </Button>
      <Modal isOpen={isOpen} /*__css={styles.menu}*/ size="md">
        <ModalContent __css={styles.menu}>
          <UnorderedList
            styleType="none"
            marginInlineStart="0"
            __css={styles.menuInner}
          >
            {isOpen &&
              items.map((item: MultiSelectItem, index: number) => (
                <ListItem py={1}>
                  <Checkbox
                    id={item.id}
                    labelText={item.name}
                    showLabel={true}
                    name={item.name}
                    isChecked={setFilterCheckedProp(id, item.id) || false}
                    onChange={() => handleOnSelectedItemChange}
                  />
                </ListItem>
              ))}
          </UnorderedList>
          {isOpen && (
            <Stack direction="row" spacing={4} justify="flex-end">
              <Button
                buttonType={ButtonTypes.Link}
                id={`multiselect-button-clear-${id}`}
                mouseDown={false}
                type="button"
                onClick={onClearMultiSelect}
              >
                Clear
              </Button>
              <Button
                buttonType={ButtonTypes.Primary}
                id={`multiselect-button-save-${id}`}
                mouseDown={false}
                type="button"
                onClick={onSaveMultiSelect}
              >
                Apply Filters
              </Button>
            </Stack>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default MultiSelectDialog;
