import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { forwardRef } from "react";

import { generateComponentId } from "../../utils/utils";

export type HelperErrorTextType = string | JSX.Element;

export interface HelperErrorTextProps extends BoxProps {
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

export const HelperErrorText: ChakraComponent<
  React.ForwardRefExoticComponent<
    HelperErrorTextProps & React.RefAttributes<HTMLDivElement>
  >,
  HelperErrorTextProps
> = chakra(
  forwardRef<HTMLDivElement, HelperErrorTextProps>(
    (
      {
        "aria-atomic": ariaAtomic = true,
        "aria-live": ariaLive = "polite",
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
      const mainId = generateComponentId("helperErrorText", id);
      const props = {
        "aria-atomic": ariaAtomic,
        "aria-live": ariaLive === "off" ? undefined : ariaLive,
        className,
        "data-isinvalid": isInvalid,
        id: mainId,
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
