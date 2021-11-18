import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import { VisualLabelType } from "./LabelTypes";

type optReqFlagType = "Required" | "Optional" | "" | undefined;

interface LabelProps {
  /** Additional CSS class name to render in the `label` element. */
  className?: string;
  /** The id of the html element that this `Label` is describing. */
  htmlFor: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Displays "Required" or "Optional" string alongside the label */
  optReqFlag?: optReqFlagType;
  /** The visual type of label. */
  visualType?: VisualLabelType;
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
    optReqFlag,
    visualType = VisualLabelType.Default,
  } = props;
  const styles = useMultiStyleConfig("Label", { variant: visualType });

  return (
    <Box
      as="label"
      id={id}
      className={className}
      htmlFor={htmlFor}
      __css={styles}
    >
      {children}
      {optReqFlag && <Box __css={styles.helper}>{optReqFlag}</Box>}
    </Box>
  );
}

export default Label;
