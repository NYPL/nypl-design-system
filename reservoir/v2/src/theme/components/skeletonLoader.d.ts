interface SkeletonLoaderBaseStyle {
    imageAspectRatio: keyof typeof imagePaddingBottomStyles;
    isBordered: boolean;
    showImage?: boolean;
}
declare const imagePaddingBottomStyles: {
    landscape: string;
    portrait: string;
    square: string;
};
declare const SkeletonLoader: {
    parts: string[];
    baseStyle: ({ imageAspectRatio, isBordered }: SkeletonLoaderBaseStyle) => {
        section: {
            marginBottom: string;
            _last: {
                marginBottom: string;
            };
        };
        image: {
            boxSizing: string;
            flexShrink: string;
            height: string;
            overflow: string;
            paddingBottom: string;
            position: string;
            width: string;
            borderRadius: string;
            marginBottom: string;
        };
        container: {
            marginTop: string;
            width: string;
        };
        heading: {
            height: string;
            borderRadius: string;
            boxSizing: string;
            marginBottom: string;
        };
        content: {
            height: string;
            borderRadius: string;
            boxSizing: string;
            marginBottom: string;
        };
        button: {
            height: string;
            margin: string;
            maxWidth: string;
            width: string;
        };
        margin: string;
        width: string;
    };
    variants: {
        row: ({ imageAspectRatio, showImage }: SkeletonLoaderBaseStyle) => {
            alignItems: string;
            display: {
                md: string;
            };
            image: {
                overflow: {
                    md: string;
                };
                paddingBottom: {
                    md: string;
                };
                position: {
                    md: string;
                };
                width: {
                    md: string;
                };
                height: {
                    md: string;
                };
            };
            container: {
                marginStart: {
                    md: string;
                };
                marginTop: {
                    md: string;
                };
            };
            button: {
                margin: {
                    md: string;
                };
            };
        };
    };
};
declare const Skeleton: {
    baseStyle: {
        borderRadius: string;
        bg: string;
        animation: string;
        _dark: {
            bg: string;
        };
    };
};
export { Skeleton, SkeletonLoader };
