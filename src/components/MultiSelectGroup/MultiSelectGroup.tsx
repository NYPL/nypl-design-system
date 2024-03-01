import {
  chakra,
  ChakraComponent,
  Stack,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Fieldset from "../Fieldset/Fieldset";
import { LayoutTypes } from "../../helpers/types";
import MultiSelect, { MultiSelectWidths } from "../MultiSelect/MultiSelect";
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
  /** Is set to `true` by default and determines if the `labelText` is visible on the site. */
  showLabel?: boolean;
}

/**
 * `MultiSelectGroup` is a helper wrapper component specific for `MultiSelect`
 * components. The wrapped `MutliSelect` components can be displayed in a
 * column or in a row. The `MultiSelectGroup` component renders all the necessary
 * wrapping and associated text elements, but the child elements
 * _need_ to be `MultiSelect` components from the NYPL Design System.
 */
export const MultiSelectGroup: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<MultiSelectGroupProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<MultiSelectGroupProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<MultiSelectGroupProps>>(
    (props, ref?) => {
      const {
        children,
        className = "",
        id,
        labelText,
        layout = "row",
        multiSelectWidth = "full",
        showLabel = true,
        ...rest
      } = props;
      const { isLargerThanMobile } = useNYPLBreakpoints();
      const finalLayout = isLargerThanMobile ? layout : "column";
      const finallWidth = isLargerThanMobile ? multiSelectWidth : "full";
      const isBlockElement = layout === "column" ? true : false;
      const styles = useMultiStyleConfig("MultiSelectGroup", {
        width: finallWidth,
      });
      let newChildren: JSX.Element[] = [];

      // Go through the MultiSelect children and update props as needed.
      newChildren = React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement) => {
          if (React.isValidElement(child)) {
            if (child.type === MultiSelect) {
              const props = { isBlockElement, width: multiSelectWidth };
              return React.cloneElement(child, props);
            } else {
              return React.cloneElement(child);
            }
          }
        }
      );

      return (
        <Fieldset
          id={`multiselect-group-${id}`}
          legendText={labelText}
          isLegendHidden={!showLabel}
          __css={styles}
          {...rest}
        >
          <Stack
            className={className}
            columnGap="xs"
            data-testid={`multiselect-group-${id}`}
            direction={finalLayout}
            id={id}
            ref={ref}
            rowGap={finalLayout === "row" ? "xs" : "0"}
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
            {newChildren}
          </Stack>
        </Fieldset>
      );
    }
  )
);

export default MultiSelectGroup;
