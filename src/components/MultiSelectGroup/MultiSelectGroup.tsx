import { chakra, ChakraComponent, Stack } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Fieldset from "../Fieldset/Fieldset";
import { LayoutTypes } from "../../helpers/types";
import { MultiSelectWidths } from "../MultiSelect/MultiSelect";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";

export interface MultiSelectGroupProps {
  /** Additional className to use. */
  className?: string;
  /** The id of the MultiSelectGroup. */
  id: string;
  /** The label text rendered within the MultiSelectGroup. */
  labelText: string;
  /** Renders the layout of `MultiSelect` components in a row or column. */
  layout?: LayoutTypes;
  /** Width will be passed on each `MultiSelect` component. */
  multiSelectWidth?: MultiSelectWidths;
  /** Render prop function used to render MultiSelect with updated props. */
  renderMultiSelect: ({
    isBlockElement,
    multiSelectWidth,
  }: {
    isBlockElement?: boolean;
    multiSelectWidth?: MultiSelectWidths;
  }) => React.ReactNode;
  /** Is set to `true` by default and determines if the `labelText` is visible on the site. */
  showLabel?: boolean;
}

/**
 * `MultiSelectGroup` is a wrapper for Reservoir `MultiSelect` components.
 * It specifies display styles (e.g. whether `MultiSelect`s are rendered in a
 * column or row) and any associated text (e.g. the group's label). Note,
 * the `MultiSelectGroup` will not work with non-Reservoir `MultiSelect`s
 * components or other HTML elements.
 */
export const MultiSelectGroup: ChakraComponent<
  React.ForwardRefExoticComponent<
    MultiSelectGroupProps & React.RefAttributes<HTMLDivElement>
  >,
  MultiSelectGroupProps
> = chakra(
  forwardRef<HTMLDivElement, MultiSelectGroupProps>((props, ref?) => {
    const {
      className = "",
      id,
      labelText,
      layout = "row",
      multiSelectWidth = "full",
      showLabel = true,
      renderMultiSelect,
      ...rest
    } = props;
    const { isLargerThanMobile } = useNYPLBreakpoints();
    const finalLayout = isLargerThanMobile ? layout : "column";
    const finalWidth = isLargerThanMobile ? multiSelectWidth : "full";
    const isBlockElement = finalLayout === "column";

    return (
      <Fieldset
        id={`multiselect-group-${id}`}
        legendText={labelText}
        isLegendHidden={!showLabel}
        {...rest}
      >
        <Stack
          className={className}
          columnGap="xs"
          data-testid={`multiselect-group-${id}`}
          direction={finalLayout}
          id={id}
          ref={ref}
          rowGap="xs"
          spacing="xs"
          wrap={layout === "row" ? "wrap" : null}
          sx={{
            "> div": {
              _notFirst: {
                mx: "0",
              },
            },
          }}
        >
          {renderMultiSelect({ isBlockElement, multiSelectWidth: finalWidth })}
        </Stack>
      </Fieldset>
    );
  })
);

export default MultiSelectGroup;
