import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import { TextInputTypes } from "../TextInput/TextInputTypes";

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

  const fileChangedHandler = (event) => {
    console.log("files", event.target.files);
    console.log("files", event.target.value);
    // let file_size = event.target.files[0].size;
  };

  // input.addEventListener('change', (event) => {
  //   const target = event.target
  //     if (target.files && target.files[0]) {

  //       /*Maximum allowed size in bytes
  //         5MB Example
  //         Change first operand(multiplier) for your needs*/
  //       const maxAllowedSize = 5 * 1024 * 1024;
  //       if (target.files[0].size > maxAllowedSize) {
  //         // Here you can ask your users to load correct file
  //          target.value = ''
  //       }
  //   }
  // })

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

      <TextInput
        id={`${id}-something`}
        onChange={fileChangedHandler}
        // value={value}
        labelText="Add Files"
        isDisabled={isDisabled}
        isRequired={isRequired}
        isInvalid={isInvalid}
        helperText={helperText}
        invalidText={invalidText}
        type={TextInputTypes.File}
        showHelperInvalidText={false}
        showOptReqLabel={false}
        fileProps={{
          accept: formatsAllowed,
          multiple,
        }}
        // ref={dsRef || ref}
        // attributes={{ ...attributes, onClick }}
        // additionalStyles={styles.textInput}
      />

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
