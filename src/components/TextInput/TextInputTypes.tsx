// HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
export enum TextInputTypes {
  email = "email",
  hidden = "hidden",
  // eslint-disable-next-line id-blacklist
  number = "number",
  password = "password",
  text = "text",
  // textarea = "textarea",
  tel = "tel",
  url = "url",
}

export enum TextInputFormats {
  email = "jdoe@domain.com",
  hidden = "",
  // eslint-disable-next-line id-blacklist
  number = "",
  password = "",
  text = "",
  tel = "(123) 123-1234",
  textarea = "",
  url = "https://domain.com",
}
/*
export enum TextInputPatterns {
  // eslint-disable-next-line prettier/prettier
  email = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
  hidden = "",
  // eslint-disable-next-line id-blacklist
  number = "",
  password = "",
  text = "",
  // eslint-disable-next-line prettier/prettier
  tel = "([0-9]{3}) [0-9]{3}-[0-9]{4}",
  textarea = "textarea",
  url = "https?://.+",
}
*/
