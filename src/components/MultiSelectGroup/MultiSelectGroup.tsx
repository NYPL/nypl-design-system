import { chakra, Stack, useMultiStyleConfig } from "@chakra-ui/react";
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
      const finallWidth = isLargerThanMobile ? multiSelectWidth : "full";
      const isBlockElement = layout === "column" ? true : false;
      const styles = useMultiStyleConfig("MultiSelectGroup", {
        width: finallWidth,
      });

      // Go through the MultiSelect children and update props as needed.
      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          if (React.isValidElement(child)) {
            // @TODO: DXP needs to pass custom MultiSelects that wrap DS Mutliselects - type check deos not allow DXP to use MultiSelectGroup
            // if (child.type !== MultiSelect) {
            //   console.warn(
            //     "NYPL Reservoir MultiSelectGroup: Only MultiSelect components can be children of MultiSelectGroup."
            //   );
            //   return;
            // }
            if (child.type === MultiSelect) {
              const props = { isBlockElement, width: multiSelectWidth };
              newChildren.push(React.cloneElement(child, props));
            } else {
              newChildren.push(React.cloneElement(child));
            }
          }
        }
      );

      return (
        <Fieldset
          id={`${id}-multiselect-group`}
          legendText={labelText}
          isLegendHidden={!showLabel}
          __css={styles}
          {...rest}
        >
          <Stack
            className={className}
            columnGap="xs"
            data-testid="multi-select-group"
            direction={finalLayout}
            id={id}
            ref={ref}
            rowGap={finalLayout === "row" ? "xs" : "0"}
            spacing={isLargerThanMobile ? "xs" : "0"}
            wrap={layout === "row" ? "wrap" : null}
            sx={{
              "> div": {
                _notFirst: {
                  mx: "0",
                },
              },
            }}
          >
            {newChildren}
          </Stack>
        </Fieldset>
      );
    }
  )
);

export default MultiSelectGroup;
