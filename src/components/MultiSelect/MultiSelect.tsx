import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Checkbox from "./../Checkbox/Checkbox";
import Icon from "./../Icons/Icon";
import { IconNames /*, IconRotationTypes */ } from "./../Icons/IconTypes";
//import List from "./../List/List";
//import { ListTypes } from "./../List/ListTypes";

import {
  Box,
  ListItem,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";

interface MultiSelectProps {
  id: string;
  label: string;
  items: any;
  /** Handler for onChange of checkbox, for controlled MultiSelect. */
  handleOnSelectedItemChange?: any;
  selectedItems: any;
  onSaveMultiSelect: () => void;
  onClearMultiSelect: () => void;
  onMenuClick: () => void;
  selectedGroupIds: string[];
  showCtaButtons: boolean;
}

interface MsItem {
  id: string;
  name: string;
  children: [
    {
      id: string;
      name: string;
    }
  ];
}

function MultiSelect({
  id,
  label,
  items,
  handleOnSelectedItemChange,
  selectedItems,
  onSaveMultiSelect,
  onClearMultiSelect,
  onMenuClick,
  //selectedGroupIds,
  showCtaButtons,
}: MultiSelectProps) {
  const styles = useMultiStyleConfig("MultiSelect", {});

  //const isOpen = selectedGroupIds.includes(id);
  const isOpen = true;
  // @ts-ignore
  const iconType = isOpen ? "minus" : "plus";

  function getButtonLabel(id: string) {
    let buttonLabel = label;
    if (selectedItems[id] !== undefined && selectedItems[id].items.length > 0) {
      buttonLabel = `${label} (${selectedItems[id].items.length})`;
    }
    return buttonLabel;
  }

  function setFilterCheckedProp(groupdId: string, itemId: string) {
    let checked = false;
    if (selectedItems[groupdId] !== undefined) {
      checked = selectedItems[groupdId].items.find(
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
    <div>
      <Box __css={styles.container}>
        <Button onClick={onMenuClick} buttonType={ButtonTypes.Secondary}>
          <span>{getButtonLabel(id)}</span>
          <Icon
            name={IconNames[iconType]}
            decorative={true}
            modifiers={["small", IconNames[iconType]]}
          />
        </Button>
        <Box __css={styles.menu}>
          <UnorderedList styleType="none" marginInlineStart="0">
            {isOpen &&
              items.map((item: MsItem) => (
                <ListItem key={item.id} py={1}>
                  <Checkbox
                    id={item.id}
                    labelText={item.name}
                    showLabel={true}
                    name={item.name}
                    {...(handleOnSelectedItemChange !== undefined
                      ? {
                          isChecked: setFilterCheckedProp(id, item.id) || false,
                          onChange: handleOnSelectedItemChange,
                        }
                      : {
                          defaultIsChecked: false,
                        })}
                  />
                </ListItem>
              ))}
          </UnorderedList>
          {isOpen && showCtaButtons && (
            <Box __css={styles.ctaButtonsContainer}>
              <Button
                buttonType={ButtonTypes.Link}
                id={`multiselect-button-clear-${id}`}
                className={"ctaButtonsDesktopClear"}
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
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default MultiSelect;
