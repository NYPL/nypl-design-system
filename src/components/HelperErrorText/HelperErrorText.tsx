import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type AriaLiveValues = "assertive" | "off" | "polite" | undefined;
export type HelperErrorTextType = string | JSX.Element;

interface HelperErrorTextProps {
  /** Aria attribute. When true, assistive technologies will read the entire
   * DOM element. When false, only changes (additionals or removals) will be
   * read. True by default. */
  ariaAtomic?: boolean;
  /** DEPRECATED: The `ariaLive` prop was found to be unnecessary. The prop
   * has been deprecated and it will eventually be removed. */
  ariaLive?: AriaLiveValues;
  /** Additional className to add. */
  className?: string;
  /** Unique ID for accessibility purposes. */
  id?: string;
  /** Toggles between helper and invalid styling. */
  isInvalid?: boolean;
  /** The text to display. */
  text: HelperErrorTextType;
}

/**
 * Helper or error text for forms components.
 */
export const HelperErrorText = chakra(
  forwardRef<HTMLDivElement, HelperErrorTextProps>(
    (
      {
        ariaAtomic = true,
        ariaLive = undefined,
        className = "",
        id,
        isInvalid = false,
        text,
        ...rest
      },
      ref?
    ) => {
      // Only announce the text in the invalid state.
      const styles = useStyleConfig("HelperErrorText", { isInvalid });
      const props = {
        "aria-atomic": ariaAtomic,
        "aria-live": ariaLive,
        className,
        "data-isinvalid": isInvalid,
        id,
        __css: styles,
        ...rest,
      };
      return typeof text === "string" ? (
        <Box {...props} dangerouslySetInnerHTML={{ __html: text }} ref={ref} />
      ) : (
        <Box {...props} ref={ref}>
          {text}
        </Box>
      );
    }
  )
);

export default HelperErrorText;
