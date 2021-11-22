import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import { TextInputTypes } from "../TextInput/TextInputTypes";
import {
  FileFormats,
  AllFileFormats,
  AllFileFormatsType,
} from "./FileUploaderFormats";
import FileDisplay from "../FileDisplay/FileDisplay";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";

// We want extra attributes for the File type.
export interface DSFile extends File {
  isInvalid?: boolean;
  invalidText?: string;
}

export interface FileUploaderProps {
  /** Additional class name for the FileUploader component. */
  className?: string;
  accept?: FileFormats[] | AllFileFormatsType;
  /** Optional string to populate the HelperErrorText for standard state */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  isUploading?: boolean;
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
  onChange?: (files: DSFile[]) => void;
  onDelete?: (file: DSFile) => void;
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
    accept = AllFileFormats,
    className,
    helperText,
    id = generateUUID(),
    invalidText,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    labelText,
    maxFileSize = 1,
    multiple = false,
    name,
    onChange,
    onDelete,
    optReqFlag = true,
    showHelperInvalidText = true,
    showLabel = true,
    isUploading = false,
  } = props;
  const [files, setFiles] = React.useState<DSFile[]>([]);
  // Default 1MB
  const maxAllowedSize = maxFileSize * 1024 * 1024;
  const finalAccept = accept.join(",");
  const optReqText = isRequired ? "Required" : "Optional";
  const footnote = isInvalid ? invalidText : helperText;
  const styles = useMultiStyleConfig("FileUploader", {});

  function validFileType(file: DSFile) {
    return finalAccept.includes(file.type);
  }
  const fileChangedHandler = (event) => {
    // Are there already files and we are uploading new ones?
    const reUpload = files.length > 0;
    const currentFiles = files.splice(0);
    const unvalidatedFiles = [...event.target.files];

    if (unvalidatedFiles.length > 0) {
      unvalidatedFiles.forEach((file) => {
        // If the file is already uploaded, don't add it again.
        if (currentFiles.find((f) => f.name === file.name)) {
          console.warn(
            `File ${file.name} is already added for upload process.`
          );
          return;
        }
        // also check for file size
        if (!validFileType(file)) {
          file.isInvalid = true;
          file.invalidText = "File not supported";
        }
        if (file.size > maxAllowedSize) {
          file.isInvalid = true;
          file.invalidText = `File is too large. Over ${maxFileSize}MB.`;
        }
        currentFiles.push(file);
      });
      // By default, the browser alphabetizes the initial list of files uploaded
      // but not when new files are added. If there were already files and we
      // are adding new ones, let's alphabetize the files to display.
      if (reUpload) {
        // Files initially
        currentFiles.sort((file1, file2) => {
          if (file1.name < file2.name) {
            return -1;
          }
          if (file1.name > file2.name) {
            return 1;
          }
          return 0;
        });
      }
      setFiles(currentFiles);
      onChange && onChange(currentFiles);
    }
  };

  const deleteFile = (deleteFile) => {
    // Find file in files array and remove it
    const newFiles = files.filter((file) => file.name !== deleteFile.name);
    setFiles(newFiles);
    // Return the file to the parent component if `onDelete` is defined.
    onDelete && onDelete(deleteFile);
  };

  const filesToDisplay = () =>
    files.length > 0 &&
    files.map((file) => (
      <FileDisplay
        key={file.name}
        file={file}
        isUploading={isUploading}
        onDelete={deleteFile}
      />
    ));

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
        labelText="Add Files"
        isDisabled={isDisabled}
        isRequired={isRequired}
        isInvalid={isInvalid}
        helperText={helperText}
        invalidText={invalidText}
        name={name}
        type={TextInputTypes.File}
        showHelperInvalidText={false}
        showOptReqLabel={false}
        fileProps={{
          accept: finalAccept,
          multiple,
        }}
      />

      {footnote && showHelperInvalidText && (
        <Box __css={styles.helper}>
          <HelperErrorText id={`${id}-helperText`} isInvalid={isInvalid}>
            {footnote}
          </HelperErrorText>
        </Box>
      )}

      {files.length > 0 && (
        <List
          additionalStyles={styles.list}
          type={ListTypes.Unordered}
          listItems={filesToDisplay()}
          noStyling
        />
      )}
    </Box>
  );
}
