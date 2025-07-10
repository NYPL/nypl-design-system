import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef, useRef } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Heading, { HeadingSizes } from "../Heading/Heading";
import { LayoutTypes } from "../../helpers/types";
import { MultiSelectWidths } from "../MultiSelect/MultiSelect";
import { FilterBarItemsType } from "../FilterBarInline/FilterBarInline";
import { useSafeId } from "../../hooks/useSafeId";

export interface FilterBarPopupProps extends BoxProps {
  /** Optional string value used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  heading?: string | JSX.Element;
  /** Only used for internal purposes. */
  isOpen?: boolean;
  /** Function for the global `Clear Filters` button. If passed the `Clear Filters` button will render. */
  onClear?: () => void;
  /** Only used for internal purposes. */
  onClose?: any;
  /** Only used for internal purposes. */
  onOpen?: any;
  /** Function for the global `Apply Filters` button. If passed the `Apply Filters` button will render. */
  onSubmit?: () => void;
  /** Render prop function used to render child components with updated props. */
  renderChildren: ({
    isBlockElement,
    layout,
    width,
  }: {
    isBlockElement?: boolean;
    layout?: LayoutTypes;
    width?: MultiSelectWidths;
  }) => React.ReactNode;
  /** The selected items state (items that were checked by user). */
  selectedItems?: FilterBarItemsType;
  /** A number that represents the total number of results in the associated search results list. */
  totalResults?: number;
}

export const FilterBarPopup: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FilterBarPopupProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FilterBarPopupProps
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<FilterBarPopupProps>>(
    (props, ref?) => {
      const {
        children,
        id,
        isOpen,
        heading = "Filters",
        onClear,
        onSubmit,
        onOpen,
        onClose,
        renderChildren,
        selectedItems,
        totalResults,
        ...rest
      } = props;
      const mainId = useSafeId(id);
      const styles = useMultiStyleConfig("FilterBarPopup", {
        width: "full",
      });

      const generalHeadingProps = {
        size: "heading5" as HeadingSizes,
      };
      // If `heading is a string, then we want the default heading,
      // otherwise, use whatever the user passed in.
      const finalHeading = heading ? (
        typeof heading === "string" ? (
          <Heading level="h2" text={heading} {...generalHeadingProps} />
        ) : (
          React.cloneElement(heading, generalHeadingProps)
        )
      ) : null;

      // Chakra's hook to control Modal's actions.
      const disclosure = useDisclosure();
      const finalIsOpen = isOpen ? isOpen : disclosure.isOpen;
      const finalOnOpen = onOpen ? onOpen : disclosure.onOpen;
      const finalOnClose = onClose ? onClose : disclosure.onClose;

      const onSubmitAndClose = () => {
        onSubmit();
        finalOnClose();
      };

      const showResultsButtonRef: React.RefObject<HTMLButtonElement> =
        useRef<HTMLButtonElement>();

      const onClearAndFocus = () => {
        onClear();

        setTimeout(() => {
          showResultsButtonRef.current?.focus();
        }, 1);
      };

      return (
        <Box id={mainId} data-testid="ds-filterBarPopup" ref={ref} {...rest}>
          <Button
            id={`${mainId}-show-filters`}
            onClick={finalOnOpen}
            variant="secondary"
            width={{ base: "100%", md: "fit-content" }}
          >
            {`Show filters`}
          </Button>
          <Modal
            isOpen={finalIsOpen}
            onClose={finalOnClose}
            size={{ base: "full", md: "md" }}
            scrollBehavior="inside"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader sx={finalHeading ? styles.modalHeader : undefined}>
                {finalHeading}
              </ModalHeader>
              <ModalCloseButton sx={styles.modalCloseButton} />
              <ModalBody sx={styles.modalBody}>
                <Stack direction="column" rowGap="s" spacing="0">
                  {renderChildren({
                    isBlockElement: true,
                    layout: "column",
                    width: "full",
                  })}
                </Stack>
              </ModalBody>
              <ModalFooter sx={styles.modalFooter}>
                <ButtonGroup layout="column" buttonWidth="full">
                  <Button
                    id={`${mainId}-see-results`}
                    type="submit"
                    onClick={onSubmit ? onSubmitAndClose : finalOnClose}
                    ref={showResultsButtonRef}
                    variant="primary"
                  >
                    {`Show ${totalResults ?? ""} results`}
                  </Button>
                  {onClear && (
                    <Button
                      id={`${mainId}-clear`}
                      type="reset"
                      onClick={onClearAndFocus}
                      textAlign="center"
                      variant="text"
                    >
                      Clear all filters
                    </Button>
                  )}
                </ButtonGroup>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      );
    }
  )
);

export function useFilterBarPopup(): any {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const InternalFilterBarPopup = chakra((props) => {
    return (
      <FilterBarPopup
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        {...props}
      />
    );
  });

  return { isOpen, onClose, onOpen, FilterBarPopup: InternalFilterBarPopup };
}

export default FilterBarPopup;
