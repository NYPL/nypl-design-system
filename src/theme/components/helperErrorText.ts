interface HelperErrorTextBaseStyle {
  isInvalid: boolean;
}

const helperErrorText = {
  baseStyle: ({ isInvalid }: HelperErrorTextBaseStyle) => ({
    marginTop: "xxs",
    marginBottom: "0",
    fontSize: "helper.default",
    color: isInvalid ? "ui.error.primary" : "ui.black",
  }),
};

export default helperErrorText;
