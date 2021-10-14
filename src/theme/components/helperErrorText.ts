const helperErrorText = {
  baseStyle: ({ isInvalid }) => ({
    marginBottom: "xs",
    fontSize: "-1",
    color: isInvalid ? "ui.error.primary" : "ui.black",
  }),
};

export default helperErrorText;
