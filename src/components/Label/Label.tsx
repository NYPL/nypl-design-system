import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";

interface LabelProps {
  /** Additional CSS class name to render in the `label` element. */
  className?: string;
  /** The id of the html element that this `Label` is describing. */
  htmlFor: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Controls whether the "(Required)" text should be displayed alongside the
   * label's text. False by default. */
  isRequired?: boolean;
}

/**
 * A label for form inputs. It should never be used alone.
 */
function Label(props: React.PropsWithChildren<LabelProps>) {
  const {
    children,
    className,
    htmlFor,
    id = generateUUID(),
    isRequired = false,
  } = props;
  const styles = useStyleConfig("Label");

  return (
    <Box
      as="label"
      id={id}
      className={className}
      htmlFor={htmlFor}
      __css={styles}
    >
      {children}
      {isRequired && <span> (Required)</span>}
    </Box>
  );
}

export default Label;
