import {
  BoxProps,
  chakra,
  ChakraComponent,
  Stack,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import { LayoutTypes } from "../../helpers/types";
import { ButtonGroupContext } from "./ButtonGroupContext";

export const buttonGroupWidthsArray = ["default", "full"] as const;
export type ButtonGroupWidths = typeof buttonGroupWidthsArray[number];

export interface ButtonGroupProps extends BoxProps {
  /** Sets the width to "default" (for "fit-content") or "full". */
  buttonWidth?: ButtonGroupWidths;
  /** Set's the disabled state to all the internal `Button` components. */
  isDisabled?: boolean;
  /** Renders the layout of `Button` components in a row or column. */
  layout?: LayoutTypes;
}

/**
 * A simple wrapper to group `Button` components together. The layout can be set
 * to row or column and the width of internal `Button` components can be set to
 * the parent's full width or the `Button`'s content width
 */
export const ButtonGroup: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<ButtonGroupProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<ButtonGroupProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<ButtonGroupProps>>(
    (props, ref?) => {
      const {
        buttonWidth = "default",
        children,
        id,
        isDisabled = false,
        layout = "row",
        ...rest
      } = props;
      const styles = useStyleConfig("ButtonGroup", {
        buttonWidth,
      });

      return (
        <Stack
          data-testid="ds-buttonGroup"
          direction={{ base: "column", md: layout }}
          id={id}
          ref={ref}
          // Always set the spacing to "8px".
          spacing="xs"
          sx={styles}
          {...rest}
        >
          <ButtonGroupContext.Provider value={isDisabled}>
            {children}
          </ButtonGroupContext.Provider>
        </Stack>
      );
    }
  )
);

export default ButtonGroup;
