import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Heading from "./../Heading/Heading";
import Icon from "./../Icons/Icon";
import { IconRotationTypes, IconSizes } from "./../Icons/IconTypes";
import Modal from "./../Modal/Modal";
import { Box, Stack, useMultiStyleConfig } from "@chakra-ui/react";
import { SelectedItems } from "./../MultiSelect/MultiSelectTypes";

export interface FilterBarProps {
  /** The id of the FilterBar. */
  id: string;
  /** The label of the FilterBar. */
  label: string;
  /**  */
  isModalOpen: boolean;
  /**  */
  isMobile: boolean;
  /** The selected items (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Handler for the mobile filters button. */
  onClickMobileFiltersButton: () => void;
  /** Handler for the mobile go back button. */
  onClickGoBack: () => void;
  /** Handler for the mobile clear selected items button. */
  onClearSelectedItems: () => void;
  /** Handler for the mobile clear save button. */
  onSaveSelectedItems: () => void;
  /** Children compenents */
  children: React.ReactNode;
}

function FilterBar({
  id,
  label,
  isModalOpen,
  onClickMobileFiltersButton,
  onClickGoBack,
  isMobile,
  selectedItems,
  onClearSelectedItems,
  onSaveSelectedItems,
  children,
}: FilterBarProps) {
  const styles = useMultiStyleConfig("FilterBar", {});

  // Sets the label of the filters button.
  function setFilterButtonLabel(selectedItems: SelectedItems) {
    let allItems = [];
    for (let [_, value] of Object.entries(selectedItems)) {
      value.items.map((item) => {
        allItems.push(item);
      });
    }
    return `Filters ${allItems.length ? `(${allItems.length})` : ``}`;
  }

  return (
    <Box id={id} __css={styles.container}>
      {isMobile ? (
        <Box __css={styles.inner}>
          <Button
            onClick={onClickMobileFiltersButton}
            buttonType={ButtonTypes.Secondary}
            type="button"
          >
            {setFilterButtonLabel(selectedItems)}
          </Button>
          {isModalOpen && (
            <Modal>
              <Box __css={styles.ctaContainer}>
                <Button
                  buttonType={ButtonTypes.Link}
                  mouseDown={false}
                  type="button"
                  onClick={onClickGoBack}
                >
                  <Icon
                    decorative
                    iconRotation={IconRotationTypes.Rotate90}
                    size={IconSizes.Small}
                  />
                  Go Back
                </Button>
                <Button
                  buttonType={ButtonTypes.Primary}
                  mouseDown={false}
                  type="button"
                  onClick={onSaveSelectedItems}
                >
                  Show Results
                </Button>
              </Box>
              <Box>
                <Heading level={3} text="Filters" />
                {children}
                {Object.keys(selectedItems).length > 0 && (
                  <Button
                    attributes={{
                      ...styles.clearFilters,
                    }}
                    type="submit"
                    buttonType={ButtonTypes.Link}
                    mouseDown={false}
                    onClick={onClearSelectedItems}
                  >
                    Clear all filters
                  </Button>
                )}
              </Box>
            </Modal>
          )}
        </Box>
      ) : (
        <Box __css={styles.inner}>
          <Heading level={2} text={label} />
          <Stack direction="row" spacing={2}>
            {children}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default FilterBar;
