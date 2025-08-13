import { StyleFunctionProps } from "@chakra-ui/system";
interface SkeletonLoaderBaseStyle extends StyleFunctionProps {
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
    baseStyle?: ({ imageAspectRatio, isBordered }: SkeletonLoaderBaseStyle) => {
        base: {
            margin: string;
            width: string;
        };
        button: {
            borderRadius: string;
            height: string;
            maxWidth: string;
            overflow: string;
            width: string;
        };
        container: {
            marginTop: string;
            width: string;
        };
        content: {
            height: string;
            borderRadius: string;
            boxSizing: string;
            marginBottom: string;
        };
        heading: {
            height: string;
            borderRadius: string;
            boxSizing: string;
            marginBottom: string;
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
        loader: {
            borderRadius: string;
            bg: string;
            animation: string;
            _dark: {
                bg: string;
            };
        };
        section: {
            marginBottom: string;
            _last: {
                marginBottom: string;
            };
        };
    };
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("base" | "button" | "section" | "image" | "content" | "container" | "heading" | "loader")[];
        }>;
    };
    variants?: {
        row: ({ imageAspectRatio, showImage }: SkeletonLoaderBaseStyle) => {
            base: {
                alignItems: string;
                display: {
                    md: "flex";
                };
            };
            button: {
                margin: {
                    md: "0";
                };
            };
            container: {
                marginStart: {
                    md: "m";
                };
                marginTop: {
                    md: "0";
                };
            };
            image: {
                overflow: {
                    md: "visible";
                };
                paddingBottom: {
                    md: "0";
                };
                position: {
                    md: "relative";
                };
                width: {
                    md: "220px";
                };
                height: {
                    md: string;
                };
            };
        };
    };
    defaultProps?: {
        size?: string | number;
        variant?: "row";
        colorScheme?: string;
    };
    parts: ("base" | "button" | "section" | "image" | "content" | "container" | "heading" | "loader")[];
};
export default SkeletonLoader;
