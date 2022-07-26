import { chakra, Stack, useStyleConfig } from "@chakra-ui/react";
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
  multiSelectWidth: MultiSelectWidths;
  showLabel: boolean;
}

/**
 * Wrapper component to wrap `MultiSelect` components. Can be displayed in a
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
        showLabel,
        multiSelectWidth,
        ...rest
      } = props;
      const newChildren: JSX.Element[] = [];

      console.log("children --->", children);

      const { isLargerThanMobile } = useNYPLBreakpoints();
      const finalLayout = isLargerThanMobile ? layout : "column";
      const finalMultiSelectWidth = isLargerThanMobile
        ? multiSelectWidth
        : "full";
      const styles = useStyleConfig("MultiSelectGroup", {
        multiSelectWidth: finalMultiSelectWidth,
      });
      console.log("multiSelectWidth", multiSelectWidth);

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
              React.cloneElement(child, { width: finalMultiSelectWidth })
            );
          }
        }
      );

      console.log("newChildren", newChildren);

      return (
        <Fieldset
          id={`${id}-multiselect-group`}
          legendText={labelText}
          isLegendHidden={!showLabel}
          __css={styles}
          {...rest}
        >
          <Stack
            id={id}
            ref={ref}
            data-testId="multi-select-group"
            {...(!showLabel && { "aria-label": labelText })}
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
