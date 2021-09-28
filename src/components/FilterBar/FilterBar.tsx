import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Heading from "./../Heading/Heading";
import Icon from "./../Icons/Icon";
import { IconRotationTypes } from "./../Icons/IconTypes";
import Modal from "./../Modal/Modal";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import { SelectedItems } from "./../MultiSelect/MultiSelectTypes";

export interface FilterBarProps {
  id: string;
  label: string;
  isModalOpen: boolean;
  onClickMobileFiltersButton: () => void;
  onClickGoBack: () => void;
  isMobile: boolean;
  selectedItems: SelectedItems;
  onClearSelectedItems: () => void;
  onSaveSelectedItems: () => void;
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
    // @ts-ignore
    for (let [key, value] of Object.entries(selectedItems)) {
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
            id="search-filters__mobile-filters-button"
            className={"filterBarButtonMobile"}
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
                  className={"ctaClearButtonMobile"}
                  id={"multiselect-button-goback"}
                  mouseDown={false}
                  type="button"
                  onClick={onClickGoBack}
                >
                  <Icon
                    decorative
                    iconRotation={IconRotationTypes.rotate90}
                    modifiers={["small"]}
                  />
                  Go Back
                </Button>
                <Button
                  buttonType={ButtonTypes.Primary}
                  id={`multiselect-button-save`}
                  mouseDown={false}
                  type="button"
                  onClick={onSaveSelectedItems}
                >
                  Show Results
                </Button>
              </Box>
              <div className={"multiSelectsContainerMobile"}>
                <Heading
                  id="search-filters__mobile-heading"
                  level={3}
                  text="Filters"
                />
                {children}
                {Object.keys(selectedItems).length > 0 && (
                  <Button
                    buttonType={ButtonTypes.Link}
                    id="mobile-clear-all-button"
                    className={"clearAllFiltersButton"}
                    mouseDown={false}
                    onClick={onClearSelectedItems}
                    type="submit"
                  >
                    Clear all filters
                  </Button>
                )}
              </div>
            </Modal>
          )}
        </Box>
      ) : (
        <Box __css={styles.inner}>
          <Heading
            id="search-filters--heading"
            className={"filterBarHeading"}
            level={2}
            text={label}
          />
          <Box __css={styles.multiSelectsContainerDesktop}>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

export default FilterBar;
