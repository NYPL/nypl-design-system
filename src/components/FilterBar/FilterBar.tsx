import {
  Box,
  chakra,
  Stack,
  // VStack,
  Modal,
  ModalBody,
  ModalContent,
  // ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { LayoutTypes } from "../../helpers/types";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Heading from "../Heading/Heading";
import { SelectedItems } from "../MultiSelect/MultiSelect";
import useNYPLBreapoints from "../../hooks/useNYPLBreakpoints";
import MultiSelect from "../MultiSelect/MultiSelect";
import MultiSelectGroup from "../MultiSelectGroup/MultiSelectGroup";
import TextInput from "../TextInput/TextInput";

export interface FilterBarProps {
  children: any;
  id?: string;
  isOpen: boolean;
  headingText: string;
  layout?: LayoutTypes;
  onClear: () => void;
  onSubmit: () => void;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItems: SelectedItems[];
}

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
      } = props;
      const { isLargerThanMedium } = useNYPLBreapoints();
      const finalLayout = isLargerThanMedium ? layout : "column";
      const styles = useMultiStyleConfig("FilterBar", { layout: finalLayout });
      const newChildren: JSX.Element[] = [];
      // Go through the MultiSelect children and update props as needed.
      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          if (React.isValidElement(child)) {
            if (child.type === TextInput) {
              newChildren.push(React.cloneElement(child));
            } else if (child.type === MultiSelectGroup) {
              const props = {
                layout: finalLayout,
                multiSelectWidth: "full",
              };
              newChildren.push(React.cloneElement(child, props));
            } else if (child.type === MultiSelect) {
              const props = {
                isBlockElement: finalLayout === "column",
                width: "full",
              };
              newChildren.push(React.cloneElement(child, props));
            } else {
              console.log(child);
              console.warn(
                "NYPL Reservoir FilterBar: Only MultiSelect or MultiSelectGroup components can be children of FilterBar."
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
          <Stack ref={ref} width="full" spacing="xs">
            {newChildren}
          </Stack>
        </Box>
      ) : (
        <>
          <Button
            id={`filter-bar-${id}-show-filters`}
            buttonType="secondary"
            onClick={() => onToggle(!isOpen)}
          >
            Show Filters
          </Button>
          <Modal isOpen={isOpen} onClose={() => onToggle(!isOpen)} size="full">
            <ModalContent>
              <ModalHeader sx={styles.modalHeader}>Filter Criteria</ModalHeader>
              <ModalCloseButton sx={styles.modalCloseButton} />
              <ModalBody>{newChildren}</ModalBody>
              <ModalFooter>
                <ButtonGroup layout="row" buttonWidth="full">
                  <Button
                    id={`filter-bar-${id}-clear`}
                    buttonType="link"
                    type="reset"
                    textAlign="center"
                    onClick={onClear}
                  >
                    Clear Filters
                  </Button>
                  <Button
                    id={`filter-bar-${id}-see-results`}
                    onClick={onSubmit}
                  >
                    {`Show Results`}
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
