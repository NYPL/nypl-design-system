interface ComponentWrapperProps {
  hasChildren: boolean;
}

const ComponentWrapper = {
  parts: ["helperErrorText"],
  baseStyle: ({ hasChildren }: ComponentWrapperProps) => ({
    width: "fit-content",
    helperErrorText: {
      marginTop: hasChildren ? null : "0",
    },
  }),
};

export default ComponentWrapper;
