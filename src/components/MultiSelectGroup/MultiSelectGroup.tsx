import { chakra, Stack } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Fieldset from "../Fieldset/Fieldset";
import { LayoutTypes } from "../../helpers/types";
import MultiSelect, { MultiSelectWidths } from "../MultiSelect/MultiSelect";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";

export interface MultiSelectGroupProps {
  children: React.ReactNode;
  /** Additional className to use. */
  className?: string;
  id: string;
  labelText: string;
  /** Renders the layout of `MultiSelect` components in a row or column. */
  layout?: LayoutTypes;
  /** Width will be passed on each `MultiSelect` component. */
  multiSelectWidth?: MultiSelectWidths;
  /** Is set to `true` by default and determines if the `labelText` is visible on the site. */
  showLabel?: boolean;
}

/**
 * `MultiSelectGroup` is a wrapper component specific for `MultiSelect` components. The wrapped `MutliSelect` components can be displayed in a
 * column or in a row. The `MultiSelectGroup` component renders all the necessary
 * wrapping and associated text elements, but the child elements
 * _need_ to be `MultiSelect` components from the NYPL Design System.
 */
export const MultiSelectGroup = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<MultiSelectGroupProps>>(
    (props, ref?) => {
      const {
        children,
        className = "",
        id,
        labelText,
        layout = "row",
        multiSelectWidth = "default",
        showLabel = true,
        ...rest
      } = props;
      const newChildren: JSX.Element[] = [];

      const { isLargerThanMobile } = useNYPLBreakpoints();
      const finalLayout = isLargerThanMobile ? layout : "column";
      const isBlockElement = layout === "column" ? true : false;

      // Go through the MultiSelect children and update props as needed.
      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          if (child.type !== MultiSelect) {
            console.warn(
              "NYPL Reservoir MultiSelectGroup: Only MultiSelect components can be children of MultiSelectGroup."
            );
            return;
          }
          if (child !== undefined && child !== null) {
            newChildren.push(
              React.cloneElement(child, {
                isBlockElement,
                width: multiSelectWidth,
              })
            );
          }
        }
      );

      return (
        <Fieldset
          id={`${id}-multiselect-group`}
          legendText={labelText}
          isLegendHidden={!showLabel}
          width={multiSelectWidth}
          {...rest}
        >
          <Stack
            id={id}
            ref={ref}
            data-testid="multi-select-group"
            aria-label={!showLabel ? labelText : undefined}
            className={className}
            direction={finalLayout}
            spacing="xs"
          >
            {newChildren}
          </Stack>
        </Fieldset>
      );
    }
  )
);

export default MultiSelectGroup;
