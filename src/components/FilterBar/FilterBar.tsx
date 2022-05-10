import React from "react";
import Button from "./../Button/Button";
import Heading from "./../Heading/Heading";
import Icon from "./../Icons/Icon";
//import Modal from "./../Modal/Modal";
import { Box, Stack, useMultiStyleConfig } from "@chakra-ui/react";
import { SelectedItems } from "./../MultiSelect/MultiSelectTypes";

export interface FilterBarProps {
  /** The id of the FilterBar. */
  id: string;
  /** The label of the FilterBar. */
  label: string;
  /** Whether the FilterBar modal is open or closed. */
  isModalOpen: boolean;
  /** The action to perform on the "filters" button onClick function. */
  onModalToggle: () => void;
  /** Whether the FilterBar is in mobile mode or not. */
  isMobile: boolean;
  /** The selected items (items that were checked by user). */
  selectedItems?: SelectedItems;
  /** The onClick callback function for the go back button. */
  onGoBack: () => void;
  /** The onClick callback function for the clear filters button. */
  onClear: () => void;
  /** The onClick callback function for the apply filters button. */
  onApply: () => void;
  /** Children compenents passed into the FilterBar. */
  children: React.ReactNode;
}

// @TODO Fix this
function Modal({ children }: any) {
  return <div>{children}</div>;
}

function FilterBar({
  id,
  label,
  isModalOpen,
  onModalToggle,
  isMobile,
  selectedItems,
  onGoBack,
  onClear,
  onApply,
  children,
}: FilterBarProps) {
  const styles = useMultiStyleConfig("FilterBar", {});

  // Sets the label of the filters button.
  function getFilterButtonLabel(selectedItems: SelectedItems) {
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
            id="filter-bar-toggle-button"
            onClick={onModalToggle}
            buttonType="secondary"
            type="button"
          >
            {getFilterButtonLabel(selectedItems)}
          </Button>
          {isModalOpen && (
            <Modal>
              <Box __css={styles.ctaContainer}>
                <Button
                  id="filter-bar-go-back-button"
                  buttonType="link"
                  mouseDown={false}
                  type="button"
                  onClick={onGoBack}
                >
                  <Icon decorative iconRotation="rotate90" size="small" />
                  Go Back
                </Button>
                <Button
                  id="filter-bar-apply-button"
                  buttonType="primary"
                  mouseDown={false}
                  type="button"
                  onClick={onApply}
                >
                  Show Results
                </Button>
              </Box>
              <Box>
                <Heading level="three" text="Filters" />
                {children}
                {Object.keys(selectedItems).length > 0 && (
                  <Button
                    id="filter-bar-clear-all-button"
                    __css={styles.clearFilters}
                    type="submit"
                    buttonType="link"
                    mouseDown={false}
                    onClick={onClear}
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
          <Heading level="two" text={label} />
          <Stack direction="row" spacing={2}>
            {children}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default FilterBar;
