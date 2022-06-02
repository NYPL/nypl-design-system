import * as React from "react";
import { chakra, Stack } from "@chakra-ui/react";
// Components
import MultiSelect from "../MultiSelect/MultiSelect";
import Fieldset from "../Fieldset/Fieldset";
// Types
import { LayoutTypes } from "../../helpers/types";
// Hooks
import useWindowSize from "../../hooks/useWindowSize";

export interface MultiSelectGroupProps {
  id: string;
  /** Width will be passed on each `MultiSelect` component. */
  multiSelectWidth?: "default" | "fitContent" | "full";
  /** Additional className to use. */
  className?: string;
  /** Renders the layout of `MultiSelect` components in a row or column. */
  layout?: LayoutTypes;
  labelText: string;
  showLabelText: boolean;
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
      showLabelText,
      multiSelectWidth = "default",
      children,
    } = props;
    const newChildren: JSX.Element[] = [];
    // Based on --nypl-breakpoint-medium
    const breakpointMedium = 600;
    const [finalLayout, setFinalLayout] = React.useState<LayoutTypes>(layout);
    const windowDimensions = useWindowSize();
    React.useEffect(() => {
      // When on a mobile device or narrow window, always set the layout to column.
      if (windowDimensions.width <= breakpointMedium) {
        setFinalLayout("column");
      } else {
        // Otherwise, set the layout to the value passed in via the `layout` prop.
        setFinalLayout(layout);
      }
    }, [layout, windowDimensions.width]);

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
          React.cloneElement(child, { width: multiSelectWidth })
        );
      }
    });
    return (
      <Fieldset
        id={`${id}-multiselect-group`}
        legendText={labelText}
        isLegendHidden={!showLabelText}
      >
        <Stack
          id={id}
          data-testId="multi-select-group"
          {...(!showLabelText && { "aria-label": labelText })}
          className={className}
          direction={finalLayout}
          // @TODO check if this should not be passed through as a prop instead
          spacing="xs"
        >
          {newChildren}
        </Stack>
      </Fieldset>
    );
  }
);

export default MultiSelectGroup;
