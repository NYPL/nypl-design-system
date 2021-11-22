import { IconNames } from "../Icons/IconTypes";
import { FileFormats } from "../FileUploader/FileUploaderFormats";

export const fileFormatSVG = (fileFormat) => {
  const map = {
    [FileFormats.WordProcessor]: IconNames.FileTypeDoc,
    [FileFormats.EBook]: IconNames.FileTypeGenericDoc,
    [FileFormats.Spreadsheet]: IconNames.FileTypeSpreadsheet,
    [FileFormats.PlainText]: IconNames.FileTypeGenericDoc,
    [FileFormats.PDF]: IconNames.FileTypePdf,
    [FileFormats.Images]: IconNames.FileTypeImage,
    [FileFormats.Audio]: IconNames.FileTypeAudio,
    [FileFormats.Video]: IconNames.FileTypeVideo,
  };

  for (const format in FileFormats) {
    if (FileFormats[format].includes(fileFormat)) {
      return map[FileFormats[format]];
    }
  }

  return IconNames.FileTypeGenericDoc;
};
