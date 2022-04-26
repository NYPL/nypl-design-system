const helperErrorText = {
  baseStyle: ({ isInvalid }) => ({
    marginTop: "xxs",
    marginBottom: "0",
    fontSize: "helper.default",
    color: isInvalid ? "ui.error.primary" : "ui.black",
  }),
};

export default helperErrorText;
