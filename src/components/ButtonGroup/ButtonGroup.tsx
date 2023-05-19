import { chakra, Stack, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Button from "../Button/Button";
import { LayoutTypes } from "../../helpers/types";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";

export const buttonGroupWidthsArray = ["default", "full"] as const;
export type ButtonGroupWidths = typeof buttonGroupWidthsArray[number];

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
  forwardRef<HTMLDivElement, React.PropsWithChildren<ButtonGroupProps>>(
    (props, ref?) => {
      const {
        buttonWidth = "default",
        children,
        className = "",
        id,
        isDisabled = false,
        layout = "row",
        ...rest
      } = props;
      const newChildren: JSX.Element[] = [];
      const { isLargerThanMobile } = useNYPLBreakpoints();
      const finalLayout = isLargerThanMobile ? layout : "column";
      const finalButtonWidth = isLargerThanMobile ? buttonWidth : "full";
      const styles = useStyleConfig("ButtonGroup", {
        buttonWidth: finalButtonWidth,
      });

      React.Children.map(
        children as JSX.Element,
        (child: React.ReactElement, key: number) => {
          if (React.isValidElement(child)) {
            if (child.type !== Button) {
              // Special case for Storybook MDX documentation.
              // @ts-ignore
              if (child.props.mdxType && child.props.mdxType === "Button") {
                noop();
              } else {
                console.warn(
                  "NYPL Reservoir ButtonGroup: Only Button components can be children of ButtonGroup."
                );
                return;
              }
            }
            const disabledProps = isDisabled ? { isDisabled } : {};
            newChildren.push(
              React.cloneElement(child, { key, ...disabledProps })
            );
          }
        }
      );

      return (
        <Stack
          className={className}
          direction={finalLayout}
          id={id}
          ref={ref}
          // Always set the spacing to "8px".
          spacing="xs"
          sx={styles}
          {...rest}
        >
          {newChildren}
        </Stack>
      );
    }
  )
);

export default ButtonGroup;
