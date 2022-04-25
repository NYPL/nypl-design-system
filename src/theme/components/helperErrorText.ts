const helperErrorText = {
  baseStyle: ({ isInvalid, isInlined, labelWidth }) => ({
    marginTop: "xxs",
    marginBottom: "0",
    marginLeft: isInlined ? { md: `${labelWidth}px` } : null,
    fontSize: "helper.default",
    color: isInvalid ? "ui.error.primary" : "ui.black",
  }),
};

export default helperErrorText;
