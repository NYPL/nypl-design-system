import {
  Box,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export type HelperErrorTextType = string | JSX.Element;

export interface HelperErrorTextProps {
  /** Additional className to add. */
  className?: string;
  /** Unique ID for accessibility purposes. */
  id?: string;
  /** Toggles between helper and invalid styling. */
  isInvalid?: boolean;
  /** Offers the ability to render or not render the content passed in
   * the `text` prop; `true` by default. */
  isRenderedText?: boolean;
  /** The text to display. */
  text: HelperErrorTextType;
}

/**
 * Component that always renders a div even if the text content is not passed.
 * This pattern guarantees accessibility guidelines are met if the text content
 * is dynamically updated by the app or component that implements it.
 */

type ExtendedHelperErrorTextProps = HelperErrorTextProps &
  React.HTMLAttributes<HTMLDivElement>;

export const HelperErrorText: ChakraComponent<
  React.ForwardRefExoticComponent<
    ExtendedHelperErrorTextProps & React.RefAttributes<HTMLDivElement>
  >,
  HelperErrorTextProps
> = chakra(
  forwardRef<HTMLDivElement, ExtendedHelperErrorTextProps>(
    (
      {
        ["aria-atomic"]: ariaAtomic = true,
        ["aria-live"]: ariaLive = "polite",
        className = "",
        id,
        isInvalid = false,
        isRenderedText = true,
        text,
        ...rest
      },
      ref?
    ) => {
      const styles = useMultiStyleConfig("HelperErrorText", { isInvalid });

      const props = {
        "aria-atomic": ariaAtomic,
        "aria-live": ariaLive === "off" ? undefined : ariaLive,
        className,
        "data-isinvalid": isInvalid,
        id,
        ref,
        __css: styles,
        ...rest,
      };

      // Always render the wrapper div element with the proper aria attributes.
      return (
        <Box {...props}>
          {isRenderedText ? (
            typeof text === "string" ? (
              <Box
                dangerouslySetInnerHTML={{ __html: text }}
                __css={styles.innerChild}
              />
            ) : (
              <Box __css={styles.innerChild}>{text}</Box>
            )
          ) : null}
        </Box>
      );
    }
  )
);

export default HelperErrorText;
