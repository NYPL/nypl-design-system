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
  /** The id of the MultiSelect. */
  id?: string;
  /** Determines on Mobile if filter modal overlay is open or closed */
  isOpen: boolean;
  /** Heading text of FilterBar */
  headingText: string;
  /** Renders the layout of the FilterBar child components in a row or column. */
  layout?: LayoutTypes;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** User for the global `Clear Filters` button. This button is always shown on mobile, optional on desktop */
  onClear: () => void;
  /** If passed, the global `Clear Filters` button will render on desktop and tablet */
  showClearAll?: boolean;
  /** Set width of `FilterBar` child components */
  filterWidth?: string;
}

/** Types related to an optional global submit button `Apply Filters` */
type SubmitAllProps =
  | {
      /** If passed the `Apply Filters` button will render on desktop and tablet */
      showSubmitAll?: false;
      /** Function for `Apply Filters` button, needs to be provided by the consuming app */
      onSubmit?: never;
    }
  /** onSubmit is required only if showSubmitAll is passed */
  | { showSubmitAll: true; onSubmit: () => void };

/** Types related to the Modal handling */
type HandleModalProps =
  | {
      /** If onToggle is passed as prop, it will open and close the filter modal on mobile */
      onToggle: () => void;
      /** onOpen and onClose will not be used in this scenario */
      onOpen?: never;
      onClose?: never;
    }
  | {
      /** If onToggle is omitted, onOpen and onClose should be provided instead */
      onToggle?: undefined;
      /** onOpen will open the filter modal on mobile */
      onOpen: () => void;
      /** onClose will close the filter modal on mobile */
      onClose: () => void;
    };

export type FilterBarProps = FilterBarCommonProps &
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
        filterWidth,
        ...rest
      } = props;

      const { isLargerThanMedium } = useNYPLBreapoints();
      const finalLayout = isLargerThanMedium ? layout : "column";
      const finalWidth = isLargerThanMedium
        ? filterWidth
          ? filterWidth
          : finalLayout === "column"
          ? "full"
          : "default"
        : "full";
      const styles = useMultiStyleConfig("FilterBar", {
        layout: finalLayout,
        width: finalWidth,
      });

      const getSelectedItemsCount = () =>
        Object.entries(selectedItems).length
          ? `(${Object.entries(selectedItems).length})`
          : "";
      // Warning when onSubmit is passed but the showSubmitAll is missing
      if (onSubmit && showSubmitAll === false) {
        console.warn(
          "NYPL Reservoir FilterBar: The `onSubmit` handler was set, but the `Apply Filters` button is not visible."
        );
      }
      // Warning when showSubmitAll is passed but onSubmit is missing
      if (onSubmit === undefined && showSubmitAll === true) {
        console.warn(
          "NYPL Reservoir FilterBar: The `Apply Filters` button is rendering but no onSubmit function was passed."
        );
      }

      const newChildren: JSX.Element[] = [];
      // Go through the FilterBar children and update props as needed.
      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          if (React.isValidElement(child)) {
            if (child.type === MultiSelectGroup) {
              const props = {
                layout: finalLayout,
                multiSelectWidth: finalWidth,
              };
              newChildren.push(React.cloneElement(child, props));
            } else if (child.type === MultiSelect) {
              const props = {
                isBlockElement: finalLayout === "column",
                width: finalWidth,
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
              <Wrap spacing={layout === "row" ? "l" : "s"} direction={layout}>
                {newChildren &&
                  newChildren.map((newChild, i) => (
                    <WrapItem key={`filter-bar-child-${i}`}>
                      {newChild}
                    </WrapItem>
                  ))}
                <WrapItem
                  alignItems={layout === "row" ? "end" : ""}
                  sx={styles.globalButtonGroupWrapper}
                >
                  <ButtonGroup
                    layout={finalLayout}
                    __css={styles.globalButtonGroup}
                    buttonWidth="full"
                  >
                    {showSubmitAll && (
                      <Button
                        buttonType="primary"
                        id={`${id}-submit-all-button`}
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
                scrollBehavior="inside"
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
