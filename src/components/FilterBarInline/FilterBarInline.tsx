import { chakra, ChakraComponent, Stack } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { LayoutTypes } from "../../helpers/types";
import { MultiSelectWidths, SelectedItems } from "../MultiSelect/MultiSelect";
import useNYPLBreapoints from "../../hooks/useNYPLBreakpoints";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";

export type FilterBarItemsType =
  | (boolean | number | number[] | string | string[] | SelectedItems)[];

interface FilterBarInlineProps {
  /** The className of the FilterBarInline. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional string value used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  heading?: string | JSX.Element;
  /** Renders the layout of the FilterBarInline child components in a row or column. */
  layout?: LayoutTypes;
  /** Function for the global `Clear Filters` button. If passed the `Clear Filters` button will render. */
  onClear?: () => void;
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
}

/**
 * `FilterBarInline` is a wrapper component for filter components and individual form input components.
 * The DS considers the following components as filter components: `CheckboxGroup`, `MultiSelectGroup`,
 * `RadioGroup`, `Checkbox`, `DatePicker`, `MultiSelect`, `Radio`, `Select`, `Slider`, `TextInput`, and `Toggle`.
 *
 * The wrapped components/component groups can be displayed in a column or
 * in a row layout. `FilterBarInline` can render additional `Clear All` and a `Apply Filters` buttons. The two
 * _optional_ buttons are controlled by the `onClear` or `onSubmit` props respectively.
 */

export const FilterBarInline: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FilterBarInlineProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FilterBarInlineProps
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<FilterBarInlineProps>>(
    (props, ref?) => {
      const {
        children,
        className,
        id,
        heading,
        layout = "row",
        onClear,
        onSubmit,
        selectedItems,
        renderChildren,
        ...rest
      } = props;

      const { isLargerThanMobile } = useNYPLBreapoints();
      const finalWidth = isLargerThanMobile
        ? layout === "row"
          ? "fitContent"
          : "full"
        : "full";

      return (
        <ComponentWrapper
          className={className}
          id={`filter-bar-inline-${id}`}
          headingText={heading}
          ref={ref}
          {...rest}
        >
          <Stack
            alignItems={{
              base: null,
              md: layout === "row" ? "flex-end" : null,
            }}
            columnGap="l"
            direction={{ base: "column", md: layout }}
            rowGap="s"
            spacing="0"
            wrap={{
              base: null,
              md: layout === "row" ? "wrap" : null,
            }}
          >
            {renderChildren({
              isBlockElement: layout === "column",
              layout: layout,
              width: finalWidth,
            })}
            {(onSubmit || onClear) && (
              <ButtonGroup
                layout={layout}
                buttonWidth={layout === "row" ? "default" : "full"}
              >
                {onSubmit && (
                  <Button
                    buttonType="primary"
                    id={`${id}-submit-all-button`}
                    onClick={onSubmit}
                  >
                    Apply filters
                  </Button>
                )}
                {onClear && (
                  <Button
                    buttonType="text"
                    id={`${id}-clear-all-button`}
                    onClick={onClear}
                    textAlign="center"
                  >
                    Clear all filters
                  </Button>
                )}
              </ButtonGroup>
            )}
          </Stack>
        </ComponentWrapper>
      );
    }
  )
);

export default FilterBarInline;
