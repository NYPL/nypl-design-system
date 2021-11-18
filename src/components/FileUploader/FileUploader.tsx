import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Label from "../Label/Label";

interface FileFormats {
  [key: string]: string;
}

export interface FileUploaderProps {
  /** Additional class name for the FileUploader component. */
  className?: string;
  formatsAllowed?: FileFormats[];
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: string;
  /** Adds the 'disabled' state to  */
  isDisabled?: boolean;
  /** Adds the 'invalid' state to  */
  isInvalid?: boolean;
  isRequired?: boolean;
  labelText: string;
  maxFileSize?: number;
  multiple?: boolean;
  /** The name prop indicates into which form this component belongs to. */
  name?: string;
  onChange?: () => void;
  /** Whether or not to display the "Required"/"Optional" text in the label text. */
  optReqFlag?: boolean;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
  /** Offers the ability to show the label onscreen or hide it. Refer
   * to the `labelText` property for more information. */
  showLabel?: boolean;
}

/**
 * FileUploader component
 */
export default function FileUploader(
  props: React.PropsWithChildren<FileUploaderProps>
) {
  const {
    className,
    formatsAllowed,
    helperText,
    id = generateUUID(),
    invalidText,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    labelText,
    maxFileSize,
    multiple,
    name,
    onChange,
    optReqFlag = true,
    showHelperInvalidText = true,
    showLabel = true,
  } = props;
  const optReqText = isRequired ? "Required" : "Optional";
  const footnote = isInvalid ? invalidText : helperText;
  const styles = useMultiStyleConfig("FileUploader", {});

  return (
    <Box className={className} __css={styles}>
      {showLabel && (
        <Label
          id={`${id}-label`}
          htmlFor={`${id}-something`}
          optReqFlag={optReqFlag && optReqText}
        >
          {labelText}
        </Label>
      )}

      {footnote && showHelperInvalidText && (
        <Box __css={styles.helper}>
          <HelperErrorText id={`${id}-helperText`} isInvalid={isInvalid}>
            {footnote}
          </HelperErrorText>
        </Box>
      )}
    </Box>
  );
}
