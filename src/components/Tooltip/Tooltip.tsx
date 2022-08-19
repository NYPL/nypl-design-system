import React, { forwardRef } from "react";
import {
  chakra,
  Tooltip as ChakraTooltip,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import Icon from "../Icons/Icon";
import Image from "../Image/Image";
import ComponentWrapper from "../ComponentWrapper/ComponentWrapper";

export interface TooltipProps {
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Value used to populate the tooltip content. */
  content: string | React.ReactNode;
  /** A class name for the Tooltip parent div. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Adds the `disabled` prop to the Tooltip when true. */
  isDisabled?: boolean;
  /** Wraps the children of the tooltip in `ComponentWrapper` with `tabIndex=0` when true. */
  shouldWrapChildren?: boolean;
}

export const Tooltip = chakra(
  forwardRef<HTMLDivElement, TooltipProps>((props, ref?) => {
    const {
      children,
      className,
      content,
      id,
      isDisabled,
      shouldWrapChildren,
      ...rest
    } = props;

    if (typeof content !== "string") {
      React.Children.map(
        content as React.ReactNode,
        (contentChild: React.ReactElement) => {
          if (contentChild.type !== Icon || contentChild.type !== Image) {
            console.warn(
              "NYPL Reservoir Tooltip: Pass in a string, DS Icon, or DS Image into the 'content' prop."
            );
          }
        }
      );
    }

    const newChildren = shouldWrapChildren ? (
      <ComponentWrapper>{children}</ComponentWrapper>
    ) : (
      children
    );

    const styles = useMultiStyleConfig("Tooltip", {});

    return (
      <ChakraTooltip
        hasArrow
        aria-label={typeof content !== "string" ? "Tooltip" : undefined}
        label={content}
        isDisabled={isDisabled}
        placement="top"
        openDelay={500}
        ref={ref}
        __css={styles}
        {...rest}
      >
        {newChildren}
      </ChakraTooltip>
    );
  })
);

export default Tooltip;
