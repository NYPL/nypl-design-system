import {
  Box,
  chakra,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMultiStyleConfig,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Heading from "../Heading/Heading";
import { LayoutTypes } from "../../helpers/types";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";
import { SelectedItems } from "../MultiSelect/MultiSelect";
import useNYPLBreapoints from "../../hooks/useNYPLBreakpoints";

interface FilterBarCommonProps {
  children: React.ReactNode;
  id?: string;
  isOpen: boolean;
  headingText: string;
  layout?: LayoutTypes;
  selectedItems: SelectedItems;
}

type ClearAllProps =
  | {
      showClearAll?: false;
      onClear?: never;
    }
  | { showClearAll: true; onClear: () => void };

type SubmitAllProps =
  | {
      showSubmitAll?: false;
      onSubmit?: never;
    }
  | { showSubmitAll: true; onSubmit: () => void };

type HandleModalProps =
  | {
      onToggle: () => void;
      onOpen?: never;
      onClose?: never;
    }
  | {
      onToggle?: undefined;
      onOpen: () => void;
      onClose: () => void;
    };

export type FilterBarProps = FilterBarCommonProps &
  ClearAllProps &
  SubmitAllProps &
  HandleModalProps;

/**
 * `FilterBar` is a wrapper component for filter components.
 * The DS considers the following components as filter components:
 * - `MultiSelectGroup`
 *
 * The wrapped components/ component groups can be displayed in a column or
 * in a row layout. `FilterBar` can render additional `Clear All` and a `Apply Filters` buttons. The two
 * _optional_ buttons are controlled by the `showClearAll`/ `onClear` or `showSubmitAll`/`onSubmit` props repectively.
 */

export const FilterBar = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<FilterBarProps>>(
    (props, ref?) => {
      const {
        children,
        id,
        isOpen,
        headingText,
        layout = "row",
        onClear,
        onSubmit,
        onToggle,
        onOpen,
        onClose,
        selectedItems,
        showClearAll = false,
        showSubmitAll = false,
        ...rest
      } = props;

      const { isLargerThanMedium } = useNYPLBreapoints();
      const finalLayout = isLargerThanMedium ? layout : "column";
      const styles = useMultiStyleConfig("FilterBar", { layout: finalLayout });
      const getSelectedItemsCount = () =>
        Object.entries(selectedItems).length
          ? `(${Object.entries(selectedItems).length})`
          : "";
      //@TODO: resolved using Typescript descriminated unions
      // // Warning if a function was passed but the button not rendered.
      // if (onClear && showClearAll === false) {
      //   console.warn(
      //     "NYPL Reservoir FilterBar: The `onClearFilters` handler was set, but the `Clear Filters` button is not visible."
      //   );
      // }

      // // Warning if schowClearAll is set to true but no corresponding fucntion was passed.
      // if (onClear === null && showClearAll === true) {
      //   console.warn(
      //     "NYPL Reservoir FilterBar: The `onClearFilters` handler was not set."
      //   );
      // }
      const newChildren: JSX.Element[] = [];
      // Go through the FilterBar children and update props as needed.
      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          if (React.isValidElement(child)) {
            if (child.type === MultiSelectGroup) {
              const props = {
                layout: finalLayout,
                multiSelectWidth: "default",
              };
              newChildren.push(React.cloneElement(child, props));
            } else if (child.type === MultiSelect) {
              const props = {
                isBlockElement: finalLayout === "column",
                width: "default",
              };
              newChildren.push(React.cloneElement(child, props));
            } else {
              console.warn(
                "NYPL Reservoir FilterBar: Invalid child component was passed",
                child
              );
              return;
            }
          }
        }
      );
      return (
        <Box id={`filter-bar-${id}`} __css={styles} ref={ref} {...rest}>
          {isLargerThanMedium ? (
            <>
              {headingText && (
                <Heading text={headingText} level="two" size="tertiary" />
              )}
              <Wrap
                spacing={layout === "row" ? "l" : "s"}
                direction={layout}
                width="full"
              >
                <WrapItem>{newChildren}</WrapItem>
                <WrapItem alignItems={layout === "row" ? "end" : ""}>
                  <ButtonGroup>
                    {showSubmitAll && (
                      <Button
                        buttonType="primary"
                        id={`${id}-clear-all-button`}
                        onClick={onSubmit}
                      >
                        Apply Filters
                      </Button>
                    )}
                    {showClearAll && (
                      <Button
                        buttonType="text"
                        id={`${id}-clear-all-button`}
                        onClick={onClear}
                        textAlign="center"
                      >
                        Clear Filters
                      </Button>
                    )}
                  </ButtonGroup>
                </WrapItem>
              </Wrap>
            </>
          ) : (
            <>
              <Button
                id={`filter-bar-${id}-show-filters`}
                buttonType="secondary"
                onClick={() => {
                  onToggle === undefined ? onOpen() : onToggle();
                }}
              >
                {`Show Filter ${getSelectedItemsCount()}`}
              </Button>
              <Modal
                isOpen={isOpen}
                onClose={() => {
                  onToggle === undefined ? onClose() : onToggle();
                }}
                size="full"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader sx={styles.modalHeader}>
                    Filter Criteria
                  </ModalHeader>
                  <ModalCloseButton sx={styles.modalCloseButton} />
                  <ModalBody>{newChildren}</ModalBody>
                  <ModalFooter sx={styles.modalFooter}>
                    <ButtonGroup layout="row" buttonWidth="full">
                      <Button
                        id={`filter-bar-${id}-see-results`}
                        type="submit"
                        onClick={() => {
                          onSubmit();
                          onToggle === undefined ? onClose() : onToggle();
                        }}
                      >
                        Show Results
                      </Button>
                      <Button
                        id={`filter-bar-${id}-clear`}
                        buttonType="text"
                        type="reset"
                        textAlign="center"
                        onClick={onClear}
                      >
                        Clear Filters
                      </Button>
                    </ButtonGroup>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          )}
        </Box>
      );
    }
  )
);

export default FilterBar;
