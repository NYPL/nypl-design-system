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
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import Heading from "../Heading/Heading";
import { LayoutTypes } from "../../helpers/types";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";
import RadioGroup from "../RadioGroup/RadioGroup";
import { SelectedItems } from "../MultiSelect/MultiSelect";
import TextInput from "../TextInput/TextInput";
import useNYPLBreapoints from "../../hooks/useNYPLBreakpoints";

interface FilterBarCommonProps {
  children: React.ReactNode;
  id?: string;
  isOpen: boolean;
  headingText: string;
  layout?: LayoutTypes;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItems: SelectedItems;
}

type ClearAllProps =
  | {
      showClearAll: false;
      onClear: never;
    }
  | { showClearAll: true; onClear: () => void };

type SubmitAllProps =
  | {
      showSubmitAll: false;
      onSubmit: never;
    }
  | { showSubmitAll: true; onSubmit: () => void };

export type FilterBarProps = FilterBarCommonProps &
  ClearAllProps &
  SubmitAllProps;

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
        selectedItems,
        showClearAll = false,
        showSubmitAll = false,
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
            }
            if (child.type === MultiSelect) {
              const props = {
                isBlockElement: finalLayout === "column",
                width: "default",
              };
              newChildren.push(React.cloneElement(child, props));
            }
            if (child.type === TextInput) {
              newChildren.push(React.cloneElement(child));
            }
            if (
              child.type === ButtonGroup ||
              child.type === CheckboxGroup ||
              child.type === RadioGroup
            ) {
              const props = {
                layout: finalLayout,
              };
              newChildren.push(React.cloneElement(child, props));
            } else {
              console.warn(
                "NYPL Reservoir FilterBar: Invalid child component was passed"
              );
              return;
            }
          }
        }
      );
      return isLargerThanMedium ? (
        <Box id={`filter-bar-${id}`} __css={styles}>
          {headingText && (
            <Heading text={headingText} level="two" size="tertiary" />
          )}
          <Wrap
            ref={ref}
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
                    onClick={onClear}
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
        </Box>
      ) : (
        <>
          <Button
            id={`filter-bar-${id}-show-filters`}
            buttonType="secondary"
            onClick={() => onToggle(!isOpen)}
          >
            {`Show Filter ${getSelectedItemsCount()}`}
          </Button>
          <Modal isOpen={isOpen} onClose={() => onToggle(!isOpen)} size="full">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader sx={styles.modalHeader}>Filter Criteria</ModalHeader>
              <ModalCloseButton sx={styles.modalCloseButton} />
              <ModalBody>{newChildren}</ModalBody>
              <ModalFooter sx={styles.modalFooter}>
                <ButtonGroup layout="row" buttonWidth="full">
                  <Button
                    id={`filter-bar-${id}-see-results`}
                    type="submit"
                    onClick={() => {
                      onSubmit();
                      onToggle(!isOpen);
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
      );
    }
  )
);

export default FilterBar;
