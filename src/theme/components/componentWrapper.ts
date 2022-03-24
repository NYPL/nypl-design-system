interface ComponentWrapperProps {
  hasChildren: boolean;
}

const ComponentWrapper = {
  baseStyle: ({ hasChildren }: ComponentWrapperProps) => ({
    helperText: {
      marginBottom: "0",
      marginTop: hasChildren ? "xs" : "0",
    },
  }),
};

export default ComponentWrapper;
