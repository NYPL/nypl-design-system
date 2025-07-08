import React, { forwardRef } from "react";
import {
  BoxProps,
  chakra,
  Tooltip as ChakraTooltip,
  useStyleConfig,
  ChakraComponent,
} from "@chakra-ui/react";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";

export interface TooltipProps extends Omit<BoxProps, "content"> {
  /** Value used to populate the tooltip content. */
  content: string | number | React.ReactNode;
  /** Adds the `disabled` prop to the Tooltip when true. */
  isDisabled?: boolean;
  /** Wraps the children of the tooltip in `ComponentWrapper` with `tabIndex=0` when true. */
  shouldWrapChildren?: boolean;
  /** The placement of the tooltip relative to its children. */
  placement?: "top" | "left" | "bottom" | "right" | "auto";
  /** The main and cross-axis offset to displace the tooltip from its reference element. */
  offset?: [number, number];
}

export const Tooltip: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<TooltipProps> & React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<TooltipProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<TooltipProps>>(
    (props, ref?) => {
      const {
        children,
        content,
        id,
        placement = "top",
        offset = [0, 8],
        isDisabled,
        shouldWrapChildren,
        ...rest
      } = props;

      const newChildren = shouldWrapChildren ? (
        <ComponentWrapper width="fit-content">{children}</ComponentWrapper>
      ) : (
        children
      );

      const styles = useStyleConfig("Tooltip", {});

      return (
        <ChakraTooltip
          aria-label={typeof content !== "string" ? "Tooltip" : undefined}
          closeDelay={750}
          closeOnClick
          closeOnEsc
          closeOnMouseDown
          hasArrow
          id={id}
          isDisabled={isDisabled}
          label={content}
          openDelay={500}
          offset={offset}
          placement={placement}
          ref={ref}
          sx={styles}
          {...rest}
        >
          {newChildren}
        </ChakraTooltip>
      );
    }
  )
);

export default Tooltip;
