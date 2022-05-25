interface ComponentWrapperProps {
  hasChildren: boolean;
}

const ComponentWrapper = {
  parts: ["helperErrorText"],
  baseStyle: ({ hasChildren }: ComponentWrapperProps) => ({
    helperErrorText: {
      marginTop: hasChildren ? null : "0",
    },
  }),
};

export default ComponentWrapper;
