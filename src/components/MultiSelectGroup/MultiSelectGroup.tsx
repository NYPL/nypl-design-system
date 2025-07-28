import { BoxProps, chakra, ChakraComponent, Stack } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Fieldset from "../Fieldset/Fieldset";
import { LayoutTypes } from "../../helpers/types";
import { MultiSelectWidths } from "../MultiSelect/MultiSelect";
import { useSafeId } from "../../hooks/useSafeId";

export interface MultiSelectGroupProps extends BoxProps {
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
      id,
      labelText,
      layout = "row",
      multiSelectWidth = "full",
      showLabel = true,
      renderMultiSelect,
      ...rest
    } = props;
    const mainId = useSafeId(id);

    return (
      <Fieldset
        data-testid="ds-multiSelectGroup"
        id={`${mainId}-fieldset`}
        legendText={labelText}
        isLegendHidden={!showLabel}
        {...rest}
      >
        <Stack
          columnGap="xs"
          data-testid={`${mainId}-multiselectGroup-stack`}
          direction={{ base: "column", md: layout }}
          id={mainId}
          ref={ref}
          rowGap="xs"
          spacing="xs"
          wrap={
            layout === "row" && multiSelectWidth === "fitContent"
              ? "wrap"
              : null
          }
          sx={{
            flexDirection: { base: "column", md: layout },
            "> div": {
              _notFirst: {
                mx: "0",
              },
            },
          }}
        >
          {renderMultiSelect({
            isBlockElement: layout === "column",
            multiSelectWidth,
          })}
        </Stack>
      </Fieldset>
    );
  })
);

export default MultiSelectGroup;
