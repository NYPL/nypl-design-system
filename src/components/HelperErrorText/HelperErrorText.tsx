import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type AriaLiveValues = "assertive" | "off" | "polite";
export type HelperErrorTextType = string | JSX.Element;

interface HelperErrorTextProps {
  /** Aria attribute. When true, assistive technologies will
   * read the entire DOM element. When false, only changes (additionals or
   * removals) will be read. True by default. */
  ariaAtomic?: boolean;
  /** Aria attribute used in the invalid state to read error text by default.
   * This indicates the priority of the text and when it should be presented to
   * users using screen readers; "off" indicates that the content should not be
   * presented, "polite" that it will be announced at the next available time
   * slot, and "assertive" that it should be announced immediately. This is set
   * to "off" by default and to "polite" by when `isInvalid` is true. */
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
        ariaLive = "polite",
        className = "",
        id,
        isInvalid = false,
        text,
        ...rest
      },
      ref?
    ) => {
      // Only announce the text in the invalid state.
      const announceAriaLive = isInvalid;
      const styles = useStyleConfig("HelperErrorText", { isInvalid });
      const props = {
        "aria-atomic": ariaAtomic,
        "aria-live": announceAriaLive ? ariaLive : "off",
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
