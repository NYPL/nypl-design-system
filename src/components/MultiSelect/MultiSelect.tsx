import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Accordion from "./../Accordion/Accordion";
import Button from "./../Button/Button";
import Checkbox from "./../Checkbox/Checkbox";
import CheckboxGroup from "./../CheckboxGroup/CheckboxGroup";
import MultiSelectItemsCountButton from "./MultiSelectItemsCountButton";
import TextInput from "../TextInput/TextInput";
import { useSafeId } from "../../hooks/useSafeId";

export interface MultiSelectItem {
  id: string;
  name: string;
  isDisabled?: boolean;
  children?: MultiSelectItem[];
  itemCount?: number;
}
export const multiSelectWidthsArray = ["fitContent", "full"] as const;
export type MultiSelectWidths = typeof multiSelectWidthsArray[number];
export const multiSelectListOverflowArray = ["scroll", "expand"] as const;
export type MultiSelectListOverflowTypes =
  typeof multiSelectListOverflowArray[number];
export interface SelectedItems {
  [name: string]: { items: string[] };
}

export interface MultiSelectProps extends BoxProps {
  /** The button text rendered within the MultiSelect. */
  buttonText: string;
  /** Determines whether the component will toggle to the closed state
   * when it loses focus. The default value is false. */
  closeOnBlur?: boolean;
  /** The number of items that will be visible in the list when the component
   * first loads. */
  defaultItemsVisible?: number;
  /** Boolean value used to control how the MultiSelect component will render
   * within the page and interact with other DOM elements. The default value is false. */
  isBlockElement?: boolean;
  /** Set the default open or closed state of the Multiselect. */
  isDefaultOpen?: boolean;
  /** Boolean value used to enable the component's search functionality
   * The default value is false. */
  isSearchable?: boolean;
  /** The items to be rendered in the Multiselect as checkbox options. */
  items: MultiSelectItem[];
  /** listOverflow is a property indicating how the list should handle overflow,
   * with options limited to "scroll", "expand", or "lazy-load". */
  listOverflow?: MultiSelectListOverflowTypes;
  /** The action to perform for the clear/reset button of individual MultiSelects. */
  onClear?: () => void;
  /** The action to perform on the checkbox's onChange function. Note, if using
   * this prop, it must be of the type listed below. */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The action to perform for a mixed state checkbox (parent checkbox). */
  onMixedStateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Value used to set the width for the MultiSelect component. */
  width?: MultiSelectWidths;
}

/**
 * The MultiSelect component is a customizable form input that supports multiple
 * configurations, including search functionality, checkbox options, and
 * hierarchical structure, with a parent checkbox toggling all children and
 * dynamic styling through Chakra UI.
 */
export const MultiSelect: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<MultiSelectProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<MultiSelectProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<MultiSelectProps>>(
    (props, _ref?) => {
      const {
        id,
        isBlockElement = false,
        isDefaultOpen = false,
        isSearchable = false,
        defaultItemsVisible = 5,
        items,
        listOverflow = "scroll",
        buttonText,
        closeOnBlur = false,
        onChange,
        onClear,
        onMixedStateChange,
        selectedItems,
        width = "full",
        ...rest
      } = props;
      const mainId = useSafeId(id);
      const [userClickedOutside, setUserClickedOutside] =
        useState<boolean>(false);

      // Create a ref to hold a reference to the accordian button, enabling us
      // to programmatically focus it.
      const accordionButtonRef: React.RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>();
      const containerRef: React.RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>();
      const expandToggleButtonRef: React.RefObject<HTMLButtonElement> =
        useRef<HTMLButtonElement>();

      // Used for Intersection Observer for lazy loading
      const itemsListRef: React.RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>();
      // Observation target for Intersection Observer
      const lazyLoadTargetRef: React.RefObject<HTMLDivElement> =
        useRef<HTMLDivElement>();

      // Tells `Accordion` to close if open when user clicks outside of the container
      const handleClickOutside = (e) => {
        if (e.type === "mousedown") {
          const multiSelect = containerRef.current;
          if (multiSelect && !multiSelect.contains(e.target)) {
            setUserClickedOutside(true);
          } else {
            setUserClickedOutside(false);
          }
        }
      };

      // Tells `Accordion` to close if open when user tabs outside of the container
      const handleTabOutside = (e) => {
        if (e.key === "Tab") {
          const multiSelect = containerRef.current;

          // setTimeout delays the check until after the focus change has occurred
          setTimeout(() => {
            if (multiSelect && !multiSelect.contains(document.activeElement)) {
              setUserClickedOutside(true);
            } else {
              setUserClickedOutside(false);
            }
          }, 0);
        }
      };

      useEffect(() => {
        if (closeOnBlur) {
          document.addEventListener("mousedown", handleClickOutside);
          document.addEventListener("keydown", handleTabOutside);

          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleTabOutside);
          };
        }
      }, [closeOnBlur]);

      const MINIMUM_ITEMS_LIST_HEIGHT = "215px";
      const MAXIMUM_ITEMS_LIST_HEIGHT = "270px";
      const listHeight =
        listOverflow === "expand"
          ? "unset"
          : isSearchable
          ? MAXIMUM_ITEMS_LIST_HEIGHT
          : MINIMUM_ITEMS_LIST_HEIGHT;

      const isOverflowExpand =
        items.length > defaultItemsVisible && listOverflow === "expand";
      const lazyLoadIncrementNum = 20;
      const isOverflowLazy =
        items.length > defaultItemsVisible + lazyLoadIncrementNum &&
        listOverflow === "scroll";
      const defaultItemsList = React.useMemo(
        () => (isOverflowExpand ? items.slice(0, defaultItemsVisible) : items),
        [isOverflowExpand, items, defaultItemsVisible]
      );
      const [itemsList, setItemsList] = useState(defaultItemsList);
      const [isExpandable, setIsExpandable] = useState(true);
      const [lazyItemsVisible, setLazyItemsVisible] = useState(
        defaultItemsVisible + lazyLoadIncrementNum
      );

      const visibleItemsList = isOverflowLazy
        ? itemsList.slice(0, lazyItemsVisible)
        : itemsList;

      const selectedItemsCount: number =
        selectedItems[mainId]?.items.length || 0;

      const selectedItemsString = `item${selectedItemsCount === 1 ? "" : "s"}`;
      const ariaLabelValue = `${buttonText}, ${selectedItemsCount} ${selectedItemsString} currently selected`;

      // Get the styles for the component
      const styles = useMultiStyleConfig("MultiSelect", {
        isBlockElement,
        width,
      });

      const isChecked = (multiSelectId: string, itemId: string): boolean => {
        if (selectedItems[multiSelectId]) {
          return !!selectedItems[multiSelectId].items.find(
            (selectedItemId: string) => selectedItemId === itemId
          );
        }
        return false;
      };

      // isAllChecked defines the isChecked status of parent checkboxes. If
      // all child items are selected, it will turn true, otherwise it returns
      // false. This prop is only passed to parent options.
      const isAllChecked = (
        multiSelectId: string,
        item: MultiSelectItem
      ): boolean => {
        let childIds: string[] = item.children.map((childItem) => childItem.id);
        if (selectedItems[multiSelectId] !== undefined) {
          return childIds.every(
            (childItem) =>
              selectedItems[multiSelectId].items.includes(childItem) &&
              !item.children.find((c) => c.id === childItem)?.isDisabled
          );
        }
        return false;
      };

      // isInteterminate will return true if some child items of the parent
      // item are selected. This prop is only passed to parent options.
      const isIndeterminate = (
        multiSelectId: string,
        item: MultiSelectItem
      ): boolean => {
        let childIds: string[] = item.children.map((childItem) => childItem.id);
        if (
          selectedItems[multiSelectId] !== undefined &&
          childIds.length > 0 &&
          childIds.some(
            (childItem) =>
              selectedItems[multiSelectId].items.includes(childItem) &&
              !item.children.find((c) => c.id === childItem)?.isDisabled
          )
        ) {
          return !isAllChecked(multiSelectId, item);
        }
        return false;
      };

      const isAllDisabled = (item: MultiSelectItem): boolean => {
        // Check if all child items are disabled, and update the parent accordingly
        if (item.children.every((childItem) => childItem.isDisabled)) {
          item.isDisabled = true;
        } else {
          item.isDisabled = false;
        }
        // Return the updated isDisabled state for the parent item
        return item.isDisabled;
      };

      // Additional components for isSearchable
      const NoSearchResults = (): JSX.Element => {
        return <Box>No options found</Box>;
      };

      const loadMoreLazyItems = useCallback(() => {
        if (!isOverflowLazy) {
          return;
        }

        setLazyItemsVisible((previousVisibleItems) =>
          Math.min(
            previousVisibleItems + lazyLoadIncrementNum,
            itemsList.length
          )
        );
      }, [isOverflowLazy, itemsList]);

      const onChangeSearch = (event) => {
        const value = event.target.value.trim().toLowerCase();
        if (!value) {
          isExpandable ? setItemsList(defaultItemsList) : setItemsList(items);
          return;
        }

        const filteredItems = items.filter((item) => {
          if (item.children) {
            if (item.name.toLowerCase().includes(value)) {
              return true;
            }

            return item.children.some((childItem) =>
              childItem.name.toLowerCase().includes(value)
            );
          }

          return item.name.toLowerCase().includes(value);
        });

        setItemsList(filteredItems);
      };
      /** If the TextInput is cleard using the "x" button,
       * display the default options list depending on the isExpandable boolean
       * (isExpandable is taking an account the listOverflow type and the state
       * of the ExpandToggleButton if applicable)
       */
      const clearSearchKeyword = () => {
        isExpandable ? setItemsList(defaultItemsList) : setItemsList(items);
      };

      /** Toggle for listOverflow = "expand" */
      const toggleItemsList = () => {
        setIsExpandable((prevProp) => !prevProp);
        setTimeout(() => {
          if (expandToggleButtonRef.current) {
            expandToggleButtonRef.current.focus(); // Set focus after expansion
          }
        }, 1); // Ensure focus logic runs after state update
      };

      React.useEffect(() => {
        setItemsList(isExpandable ? defaultItemsList : items);
      }, [isExpandable, defaultItemsList, items]);

      React.useEffect(() => {
        if (
          !isOverflowLazy ||
          !itemsListRef.current ||
          !lazyLoadTargetRef.current
        ) {
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              loadMoreLazyItems();
            }
          },
          {
            root: itemsListRef.current,
            threshold: 0,
            rootMargin: "0px 0px 300px 0px",
          }
        );

        observer.observe(lazyLoadTargetRef.current);

        return () => observer.disconnect();
      }, [isOverflowLazy, loadMoreLazyItems, lazyItemsVisible]);

      const ExpandToggleButton = (): JSX.Element => {
        return (
          <Button
            variant="text"
            fontSize="desktop.button.default"
            id={`${mainId}-view-all-text-btn`}
            ref={expandToggleButtonRef}
            onClick={toggleItemsList}
            __css={styles.viewAllButton}
          >
            {isExpandable ? "View all" : "View less"}
          </Button>
        );
      };

      const getItemLabelText = (
        item: MultiSelectItem
      ): string | JSX.Element => {
        const displayItemCount = !!(item.itemCount >= 0);
        return (
          <Box>
            {item.name}
            {displayItemCount && ` (${item.itemCount})`}
          </Box>
        );
      };

      /** Generate Checkbox components based on the provided MultiSelectItem. */
      const getMultiSelectCheckboxItem = (
        item: MultiSelectItem
      ): JSX.Element[] => {
        if (item.children) {
          return [
            <Checkbox
              id={item.id}
              key={item.id}
              labelText={getItemLabelText(item)}
              name={item.name}
              {...(onMixedStateChange !== undefined
                ? {
                    isChecked: isAllChecked(mainId, item),
                    isIndeterminate: isIndeterminate(mainId, item),
                    onChange: onMixedStateChange,
                    isDisabled: isAllDisabled(item),
                  }
                : {
                    isChecked: isChecked(mainId, item.id),
                    isDisabled: isAllDisabled(item),
                    onChange: onChange,
                  })}
            />,
            ...item.children.map((childItem) => {
              return (
                <Checkbox
                  key={childItem.id}
                  marginInlineStart="0"
                  id={childItem.id}
                  labelText={getItemLabelText(childItem)}
                  name={childItem.name}
                  isDisabled={childItem.isDisabled}
                  isChecked={isChecked(mainId, childItem.id)}
                  onChange={onChange}
                  __css={styles.menuChildren}
                />
              );
            }),
          ];
        } else {
          return [
            <Checkbox
              id={item.id}
              labelText={getItemLabelText(item)}
              name={item.name}
              isDisabled={item.isDisabled}
              isChecked={isChecked(mainId, item.id)}
              onChange={onChange}
              key={item.id}
            />,
          ];
        }
      };

      /** Components for accordionData */
      const accordionLabel = (
        <Box
          as="span"
          title={buttonText}
          __css={selectedItemsCount > 0 ? styles.buttonTextLabel : null}
        >
          {buttonText}
        </Box>
      );

      const searchInput = (
        <TextInput
          id={`${mainId}-textInput`}
          labelText={`Search ${buttonText}`}
          isClearable
          isClearableCallback={clearSearchKeyword}
          placeholder="Search"
          onChange={onChangeSearch}
          showLabel={false}
          showRequiredLabel={false}
          type="text"
          __css={styles.menuSearchInputBox}
          marginBottom={isOverflowExpand ? "12px" : 0}
        />
      );

      const accordionPanel = (
        <Box position="relative">
          {isSearchable && !isOverflowExpand ? (
            <Box position="sticky" top="0" marginBottom="12px" zIndex="1">
              {searchInput}
            </Box>
          ) : isSearchable && isOverflowExpand ? (
            searchInput
          ) : null}

          <Box
            data-testid={isOverflowLazy ? `${mainId}-items-list` : undefined}
            ref={itemsListRef}
            maxHeight={listHeight}
            overflowY="auto"
            paddingTop="xxs"
            paddingLeft="xs"
            paddingBottom="xxs"
          >
            {visibleItemsList.length === 0 ? (
              <NoSearchResults />
            ) : (
              <>
                <CheckboxGroup
                  id={`${mainId}-checkboxGroup`}
                  layout="column"
                  isFullWidth
                  isRequired={false}
                  labelText={buttonText}
                  showLabel={false}
                  name="multi-select-checkbox-group"
                >
                  {visibleItemsList.map((item: MultiSelectItem) => (
                    <React.Fragment key={item.id}>
                      {getMultiSelectCheckboxItem(item)}
                    </React.Fragment>
                  ))}
                </CheckboxGroup>
                {isOverflowExpand && <ExpandToggleButton />}
                {/* Target element for IntersectionObserver; intersections
                    triggers lazy loading callback */}
                {isOverflowLazy &&
                  visibleItemsList.length < itemsList.length && (
                    <Box ref={lazyLoadTargetRef} height="1px" />
                  )}
              </>
            )}
          </Box>
        </Box>
      );

      return (
        <Box
          data-testid="ds-multiSelect"
          id={mainId}
          ref={containerRef}
          onClick={() => setUserClickedOutside(false)}
          __css={styles.base}
          {...rest}
        >
          <Accordion
            accordionData={[
              {
                variant: "default",
                // Pass the ref for interaction with the accordion button.
                buttonInteractionRef: accordionButtonRef,
                label: accordionLabel,
                panel: accordionPanel,
              },
            ]}
            aria-label={ariaLabelValue}
            id={`${mainId}-accordion`}
            isDefaultOpen={isDefaultOpen}
            isAlwaysRendered
            userClickedOutside={userClickedOutside}
            panelMaxHeight={listHeight}
            sx={{
              ...styles.accordionStyles,
            }}
          />
          {selectedItemsCount > 0 && (
            <MultiSelectItemsCountButton
              id={mainId}
              multiSelectLabelText={buttonText}
              isOpen={isDefaultOpen}
              selectedItemsString={selectedItemsString}
              selectedItemsCount={selectedItemsCount}
              onClear={onClear}
              accordionButtonRef={accordionButtonRef}
            />
          )}
        </Box>
      );
    }
  ),
  // Pass all custom props to Chakra and override, for width prop.
  { shouldForwardProp: () => true }
);

export default MultiSelect;
