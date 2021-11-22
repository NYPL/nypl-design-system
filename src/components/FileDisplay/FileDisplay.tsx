import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Icon from "../Icons/Icon";
import { IconColors, IconNames, IconSizes } from "../Icons/IconTypes";
import { fileFormatSVG } from "./FileDisplaySVG";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import {
  ProgressIndicatorSizes,
  ProgressIndicatorTypes,
} from "../ProgressIndicator/ProgressIndicatorTypes";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import { DSFile } from "../FileUploader/FileUploader";

export interface FileDisplayProps {
  file: DSFile;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  isUploading?: boolean;
  onDelete?: (file: DSFile) => void;
}

/**
 * FileDisplay component
 */
export default function FileDisplay(
  props: React.PropsWithChildren<FileDisplayProps>
) {
  const {
    file = {} as DSFile,
    id = generateUUID(),
    isUploading = false,
    onDelete,
  } = props;
  if (!file) {
    return;
  }
  const styles = useMultiStyleConfig("FileDisplay", {});
  const fileFormat = fileFormatSVG(file.type);
  const getProperIcon = (file: DSFile) => {
    if (isUploading || file.isInvalid) {
      return (
        <Box __css={styles.leftIcon}>
          {isUploading ? (
            <ProgressIndicator
              labelText="uploading"
              showLabel={false}
              indicatorType={ProgressIndicatorTypes.Circular}
              size={ProgressIndicatorSizes.Small}
              isIndeterminate
            />
          ) : file.isInvalid ? (
            <Icon
              name={IconNames.ErrorOutline}
              color={IconColors.BrandPrimary}
            />
          ) : null}
        </Box>
      );
    }

    return (
      <Button
        buttonType={ButtonTypes.Link}
        onClick={() => onDelete(file)}
        additionalStyles={styles.deleteButton}
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
    <Box key={file.name}>
      <Box __css={styles.container}>
        <Box __css={styles.textContainer}>
          <Icon
            id={`${id}-${file.name}`}
            name={fileFormat}
            size={IconSizes.Large}
            additionalStyles={styles.formatIcon}
          />
          <Box as="span" __css={styles.formatFileName}>
            {file.name}
          </Box>
        </Box>
        {getProperIcon(file)}
      </Box>

      {file.isInvalid && file.invalidText && (
        <HelperErrorText
          id={`${id}-helperText`}
          isInvalid={file.isInvalid}
          additionalStyles={styles.helper}
        >
          {file.invalidText}
        </HelperErrorText>
      )}
    </Box>
  );
}
