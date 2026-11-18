interface ComponentWrapperProps {
  hasHelperText: boolean;
}

const ComponentWrapper = {
  parts: ["helperErrorText"],
  baseStyle: ({ hasHelperText }: ComponentWrapperProps) => ({
    helperErrorText: {
      marginTop: hasHelperText ? "v5.inputShared.helperText.marginTop" : "0",
    },
  }),
};

export default ComponentWrapper;
