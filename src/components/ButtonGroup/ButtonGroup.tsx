import { chakra, Stack, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import Button from "../Button/Button";
import { LayoutTypes } from "../../helpers/types";

export type ButtonGroupWidths = "default" | "full";

interface ButtonGroupProps {
  /** Sets the width to "default" (for "fit-content") or "full". */
  buttonWidth?: ButtonGroupWidths;
  /** Additional className to use. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Set's the disabled state to all the internal `Button` components. */
  isDisabled?: boolean;
  /** Renders the layout of `Button` components in a row or column. */
  layout?: LayoutTypes;
}

const noop = () => {};

/**
 * A simple wrapper to group `Button` components together. The layout can be set
 * to row or column and the width of internal `Button` components can be set to
 * the parent's full width or the `Button`'s content width
 */
export const ButtonGroup = chakra(
  (props: React.PropsWithChildren<ButtonGroupProps>) => {
    const {
      buttonWidth = "default",
      children,
      className = "",
      id,
      isDisabled = false,
      layout = "row",
      ...rest
    } = props;
    const styles = useStyleConfig("ButtonGroup", { buttonWidth });
    const newChildren: JSX.Element[] = [];

    React.Children.map(
      children as JSX.Element,
      (child: React.ReactElement, key: number) => {
        if (child.type !== Button) {
          // Special case for Storybook MDX documentation.
          if (child.props.mdxType && child.props.mdxType === "Button") {
            noop();
          } else {
            console.warn(
              "NYPL Reservoir ButtonGroup: Only Button components can be children of ButtonGroup."
            );
            return;
          }
        }
        newChildren.push(React.cloneElement(child, { key, isDisabled }));
      }
    );

    return (
      <Stack
        id={id}
        className={className}
        direction={layout}
        // Always set the spacing to "8px".
        spacing="xs"
        sx={styles}
        {...rest}
      >
        {newChildren}
      </Stack>
    );
  }
);

export default ButtonGroup;
