interface HelperErrorTextBaseStyle {
  isInvalid: boolean;
}

const helperErrorText = {
  parts: ["innerChild"],
  baseStyle: ({ isInvalid }: HelperErrorTextBaseStyle) => ({
    fontSize: "desktop.helper.default",
    color: isInvalid ? "ui.error.primary" : null,
    _dark: {
      color: isInvalid ? "dark.ui.error.primary" : null,
    },
    innerChild: {
      marginTop: "xxs",
      marginBottom: "0",
    },
  }),
};

export default helperErrorText;
