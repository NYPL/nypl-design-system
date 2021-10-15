const helperErrorText = {
  baseStyle: ({ isInvalid }) => ({
    marginBottom: "0",
    fontSize: "-1",
    color: isInvalid ? "ui.error.primary" : "ui.black",
  }),
};

export default helperErrorText;
