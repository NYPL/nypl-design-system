import * as React from "react";
import { Box, useMultiStyleConfig, VStack } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import { TextInputTypes } from "../TextInput/TextInputTypes";
import Icon from "../Icons/Icon";
import { IconColors, IconNames, IconSizes } from "../Icons/IconTypes";
import {
  FileFormats,
  AllFileFormats,
  AllFileFormatsType,
  mapFormatToSVG,
} from "./FileUploaderFormats";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import {
  ProgressIndicatorSizes,
  ProgressIndicatorTypes,
} from "../ProgressIndicator/ProgressIndicatorTypes";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";

export interface FileUploaderProps {
  /** Additional class name for the FileUploader component. */
  className?: string;
  accept?: FileFormats[] | AllFileFormatsType;
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
  isUploading?: boolean;
}

/**
 * FileUploader component
 */
export default function FileUploader(
  props: React.PropsWithChildren<FileUploaderProps>
) {
  const {
    className,
    accept = AllFileFormats,
    helperText,
    id = generateUUID(),
    invalidText,
    isDisabled = false,
    isInvalid = false,
    isRequired = false,
    labelText,
    maxFileSize = 1,
    multiple,
    name,
    onChange,
    optReqFlag = true,
    showHelperInvalidText = true,
    showLabel = true,
    isUploading = false,
  } = props;
  const [files, setFiles] = React.useState<File[]>([]);
  // Default 1MB
  const maxAllowedSize = maxFileSize * 1024 * 1024;
  const finalAccept = accept.join(",");
  const optReqText = isRequired ? "Required" : "Optional";
  const footnote = isInvalid ? invalidText : helperText;
  const styles = useMultiStyleConfig("FileUploader", {});

  function validFileType(file) {
    return finalAccept.includes(file.type);
  }
  const fileChangedHandler = (event) => {
    const currentFiles = [];
    const unvalidatedFiles = [...event.target.files];
    if (unvalidatedFiles.length > 0) {
      unvalidatedFiles.forEach((file) => {
        // also check for file size
        if (!validFileType(file)) {
          file["isInvalid"] = true;
          file["invalidFileType"] = true;
        }
        if (file.size > maxAllowedSize) {
          file["isInvalid"] = true;
          file["invalidFileSize"] = true;
        }
        currentFiles.push(file);
      });
      setFiles(currentFiles);
    }
  };

  const getProperIcon = (file: File) => {
    if (isUploading) {
      return (
        <ProgressIndicator
          labelText="uploading"
          showLabel={false}
          indicatorType={ProgressIndicatorTypes.Circular}
          size={ProgressIndicatorSizes.Small}
          isIndeterminate
        />
      );
    }
    if ((file as any).isInvalid) {
      return (
        <Icon name={IconNames.ErrorOutline} color={IconColors.BrandPrimary} />
      );
    }
    return (
      <Button
        buttonType={ButtonTypes.Link}
        onClick={() => {
          console.log("click!");
        }}
        additionalStyles={{
          bg: "var(--nypl-colors-ui-gray-light-cool)",
          svg: {
            marginTop: "0",
          },
          _hover: { bg: "var(--nypl-colors-ui-gray-light-cool)" },
        }}
      >
        <Icon
          id={`${file.name}-close-button`}
          decorative={false}
          name={IconNames.Close}
          size={IconSizes.Large}
        />
      </Button>
    );
  };

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
      <VStack gap="s" align="left" __css={{ width: "330px" }}>
        {files.length > 0 &&
          files.map((file) => {
            const fileFormat = mapFormatToSVG(file.type);
            return (
              <Box key={file.name}>
                <Box
                  __css={{
                    marginTop: "15px",
                    padding: "5px",
                    paddingBottom: "0px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    bg: "var(--nypl-colors-ui-gray-light-cool)",
                  }}
                >
                  <Icon
                    id={`${id}-${file.name}`}
                    name={fileFormat}
                    size={IconSizes.Large}
                  />
                  <Box
                    __css={{
                      marginLeft: "10px",
                      width: "200px",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {file.name}
                  </Box>
                  {getProperIcon(file)}
                </Box>
                {(file as any).isInvalid && (
                  <HelperErrorText
                    id={`${id}-helperText`}
                    isInvalid={(file as any).isInvalid}
                  >
                    {(file as any).invalidFileType && "File not supported"}
                    {(file as any).invalidFileSize &&
                      `File is too large. Over ${maxFileSize}MB.`}
                  </HelperErrorText>
                )}
              </Box>
            );
          })}
      </VStack>
    </Box>
  );
}
