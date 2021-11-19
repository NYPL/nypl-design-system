import { IconNames } from "../Icons/IconTypes";

export enum FileFormats {
  WordProcessor = ".doc,.docx,.rtf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  EBook = ".epub,application/epub+zip",
  Spreadsheet = ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  PlainText = ".txt,text/plain",
  PDF = ".pdf,application/pdf",
  Images = ".jpg,.jpeg,.png,.gif,image/jpeg,image/png,image/gif",
  Audio = ".aac,.aif,.flac,.m4a,.mp3,.wav,.wma,audio/mpeg,audio/x-wav,audio/x-aac,audio/x-flac",
  Video = ".3gp,.avi,.mov,.mp4,.mpeg,.mpg,.webm,.wmv",
}

export const mapFormatToSVG = (inputFormat) => {
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
    if (FileFormats[format].includes(inputFormat)) {
      return map[FileFormats[format]];
    }
  }
  return IconNames.FileTypeGenericDoc;
};

export const AllFileFormats = [Object.values(FileFormats).join(",")];
export type AllFileFormatsType = typeof AllFileFormats;
