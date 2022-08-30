import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import { VisualLabelType } from "./LabelTypes";

interface LabelProps {
  /** Additional CSS class name to render in the `label` element. */
  className?: string;
  /** The id of the html element that this `Label` is describing. */
  htmlFor: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Controls whether the label should be inline with the input it goes with.
   * This prop should only be used internally. */
  isInlined?: boolean;
  /** Controls whether the "(Required)" text should be displayed alongside the
   * label's text. False by default. */
  isRequired?: boolean;
  /** The visual type of label. */
  visualType?: VisualLabelType;
}

/**
 * A label for form inputs. It should never be used alone.
 */
export const Label = chakra(
  forwardRef<
    HTMLDivElement & HTMLLabelElement,
    React.PropsWithChildren<LabelProps>
  >((props, ref?) => {
    const {
      children,
      className,
      htmlFor,
      id,
      isInlined = false,
      isRequired = false,
      visualType = VisualLabelType.Default,
      ...rest
    } = props;
    const styles = useStyleConfig("Label", { isInlined, variant: visualType });

    if (!id) {
      console.warn(
        "NYPL Reservoir Label: This component's required `id` prop was not passed."
      );
    }

    return (
      <Box
        as="label"
        id={id}
        className={className}
        htmlFor={htmlFor}
        ref={ref}
        __css={styles}
        {...rest}
      >
        {children}
        {isRequired && <span> (Required)</span>}
      </Box>
    );
  })
);

export default Label;
