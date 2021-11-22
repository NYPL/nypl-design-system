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

export const AllFileFormats = [Object.values(FileFormats).join(",")];
export type AllFileFormatsType = typeof AllFileFormats;
