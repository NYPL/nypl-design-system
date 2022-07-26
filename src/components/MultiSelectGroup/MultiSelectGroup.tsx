import * as React from "react";
import { chakra, Stack } from "@chakra-ui/react";
// Components
import Fieldset from "../Fieldset/Fieldset";
import MultiSelect from "../MultiSelect/MultiSelect";
// Types
import { LayoutTypes } from "../../helpers/types";
// Hooks
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";

export interface MultiSelectGroupProps {
  id: string;
  /** Width will be passed on each `MultiSelect` component. */
  multiSelectWidth: "default" | "fitContent" | "full";
  /** Additional className to use. */
  className?: string;
  /** Renders the layout of `MultiSelect` components in a row or column. */
  layout?: LayoutTypes;
  labelText: string;
  showLabel: boolean;
  children: React.ReactNode;
}

/**
 * Wrapper component to wrap `MultiSelect` components. Can be displayed in a
 * column or in a row. The `MultiSelectGroup` component renders all the necessary
 * wrapping and associated text elements, but the child elements
 * _need_ to be `MultiSelect` components from the NYPL Design System.
 */
export const MultiSelectGroup = chakra(
  (props: React.PropsWithChildren<MultiSelectGroupProps>) => {
    const {
      id,
      className = "",
      layout = "row",
      labelText,
      showLabel,
      multiSelectWidth,
      children,
    } = props;
    const newChildren: JSX.Element[] = [];

    const [finalLayout, setFinalLayout] = React.useState<LayoutTypes>(layout);
    const { isLargerThanMobile } = useNYPLBreakpoints();

    React.useEffect(() => {
      // When on a mobile device or narrow window, always set the layout to column.
      if (!isLargerThanMobile) {
        setFinalLayout("column");
      } else {
        // Otherwise, set the layout to the value passed in via the `layout` prop.
        setFinalLayout(layout);
      }
    }, [layout, isLargerThanMobile]);

    // Go through the MultiSelect children and update props as needed.
    React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
      if (child.type !== MultiSelect) {
        console.warn(
          "NYPL Reservoir MultiSelectGroup: Only MultiSelect components can be children of MultiSelectGroup."
        );
        return;
      }
      if (child !== undefined && child !== null) {
        newChildren.push(
          React.cloneElement(child, {
            width: `${
              // When on a mobile device or narrow window, always set the width to full.
              isLargerThanMobile ? `${multiSelectWidth}` : "full"
            }`,
          })
        );
      }
    });
    return (
      <Fieldset
        id={`${id}-multiselect-group`}
        legendText={labelText}
        isLegendHidden={!showLabel}
      >
        <Stack
          id={id}
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
);

export default MultiSelectGroup;
