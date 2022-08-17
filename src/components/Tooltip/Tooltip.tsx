import React, { forwardRef } from "react";
import {
  chakra,
  Tooltip as ChakraTooltip,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export interface TooltipProps {
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Value used to populate the tooltip content. */
  content: string | React.ReactNode;
  /** A class name for the TextInput parent div. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Adds the `disabled` and `aria-disabled` prop to the input when true. */
  isDisabled?: boolean;
}

export const Tooltip = chakra(
  forwardRef<HTMLDivElement, TooltipProps>((props, ref?) => {
    const { children, className, content, id, isDisabled, ...rest } = props;

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
        {children}
      </ChakraTooltip>
    );
  })
);

export default Tooltip;
