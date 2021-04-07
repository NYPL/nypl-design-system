// HTML Input types as defined by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
export enum TextInputTypes {
  // eslint-disable-next-line id-blacklist
  number = "number",
  password = "password",
  text = "text",
  tel = "tel",
  url = "url",
  email = "email",
  textarea = "textarea",
  hidden = "hidden",
}

export enum TextInputFormats {
  // eslint-disable-next-line id-blacklist
  number = "",
  password = "",
  text = "",
  tel = "(123) 123-1234",
  url = "https://website.com",
  email = "jdoe@domain.com",
  textarea = "",
  hidden = "",
}

export enum TextInputPatterns {
  // eslint-disable-next-line id-blacklist
  number = "",
  password = "",
  text = "",
  tel = "([0-9]{3}) [0-9]{3}-[0-9]{4}",
  url = "https?://.+",
  // eslint-disable-next-line prettier/prettier
  email = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
  textarea = "textarea",
  hidden = "hidden",
}
