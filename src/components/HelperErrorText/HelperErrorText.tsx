import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { forwardRef } from "react";

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
 * The component will always render a div even if the text content is not
 * passed. This pattern guarantees aria-descibedby references do not point to an
 * element that does not exist.
 */

export const HelperErrorText: ChakraComponent<
  React.ForwardRefExoticComponent<
    HelperErrorTextProps & React.RefAttributes<HTMLDivElement>
  >,
  HelperErrorTextProps
> = chakra(
  forwardRef<HTMLDivElement, HelperErrorTextProps>(
    ({ id, isInvalid = false, isRenderedText = true, text, ...rest }, ref?) => {
      const styles = useMultiStyleConfig("HelperErrorText", { isInvalid });

      const props = {
        "data-isinvalid": isInvalid,
        "data-testid": "ds-helperErrorText",
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
              <Box dangerouslySetInnerHTML={{ __html: text }} />
            ) : (
              <Box>{text}</Box>
            )
          ) : null}
        </Box>
      );
    }
  )
);

export default HelperErrorText;
