interface ComponentWrapperProps {
  hasHelperText: boolean;
}

const ComponentWrapper = {
  parts: ["helperErrorText"],
  baseStyle: ({ hasHelperText }: ComponentWrapperProps) => ({
    helperErrorText: {
      marginTop: hasHelperText ? "helper.default" : "0",
    },
  }),
};

export default ComponentWrapper;
