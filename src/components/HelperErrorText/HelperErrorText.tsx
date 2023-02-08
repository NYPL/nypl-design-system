import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type AriaLiveValues = "assertive" | "off" | "polite" | undefined;
export type HelperErrorTextType = string | JSX.Element;

interface HelperErrorTextProps {
  /** Aria attribute. When true, assistive technologies will read the entire
   * DOM element. When false, only changes (additionals or removals) will be
   * read. True by default. */
  ariaAtomic?: boolean;
  /** Aria attribute used to handle live updates for the helper and error text.
   * This indicates the priority of the text and when it should be presented to
   * users using screen readers; "off" indicates that the content should not be
   * presented, "polite" that it will be announced at the next available time
   * slot, and "assertive" that it should be announced immediately. This is set
   * to "polite" by default. */
  ariaLive?: AriaLiveValues;
  /** Additional className to add. */
  className?: string;
  /** Unique ID for accessibility purposes. */
  id?: string;
  /** Toggles between helper and invalid styling. */
  isInvalid?: boolean;
  /** Offers the ability to render or not render the content passed in
   * the `text` prop; `true` by default. */
  renderText?: boolean;
  /** The text to display. */
  text: HelperErrorTextType;
}

/**
 * Component that always renders a div even if the text content is not passed.
 * This pattern guarantees accessibility guidelines are met if the text content
 * is dynamically updated by the app or component that implements it.
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
        renderText = true,
        text,
        ...rest
      },
      ref?
    ) => {
      const styles = useStyleConfig("HelperErrorText", { isInvalid });
      const props = {
        "aria-atomic": ariaAtomic,
        "aria-live": ariaLive === "off" ? undefined : ariaLive,
        className,
        "data-isinvalid": isInvalid,
        "data-testid": "helperErrorText",
        id,
        ref,
        __css: styles,
        ...rest,
      };

      // Always render the wrapper div element with the proper aria attributes.
      return (
        <Box {...props}>
          {renderText ? (
            typeof text === "string" ? (
              <span dangerouslySetInnerHTML={{ __html: text }} />
            ) : (
              text
            )
          ) : null}
        </Box>
      );
    }
  )
);

export default HelperErrorText;
