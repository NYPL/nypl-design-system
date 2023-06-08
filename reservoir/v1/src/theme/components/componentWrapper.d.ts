interface ComponentWrapperProps {
    hasChildren: boolean;
}
declare const ComponentWrapper: {
    parts: string[];
    baseStyle: ({ hasChildren }: ComponentWrapperProps) => {
        helperErrorText: {
            marginTop: string;
        };
    };
};
export default ComponentWrapper;
