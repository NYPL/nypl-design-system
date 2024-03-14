interface FeaturedContentBaseStyleProps {
    imagePosition: string;
    imageWidth: string;
    isFullWidth: boolean;
}
declare const FeaturedContent: {
    baseStyle: ({ imagePosition, imageWidth, isFullWidth, }: FeaturedContentBaseStyleProps) => {
        bgColor: string;
        left: string;
        marginLeft: string;
        marginRight: string;
        position: string;
        right: string;
        width: string;
        _dark: {
            bgColor: string;
        };
        wrapper: {
            alignItems: string;
            display: string;
            flexDirection: {
                sm: string;
                md: string;
            };
            maxWidth: string;
            minHeight: string;
            paddingLeft: {
                base: any;
                md: string;
            };
            paddingRight: {
                base: any;
                md: string;
            };
            marginY: string;
            marginX: string;
            padding: string;
            width: string;
        };
        text: {
            display: string;
            flex: number;
            flexDirection: string;
            justifyContent: string;
            padding: string;
            /** The `paddingLeft` attribute is used to adjust the spacing around the
             * text when the image is positioned at the end. For aesthetic reasons,
             * we opted to not adjust the spacing around the text when the image is
             * positioned at the start.
             * */
            paddingStart: {
                base: any;
                md: number;
            };
        };
        imgWrapper: {
            backgroundPosition: string;
            backgroundSize: string;
            height: {
                sm: string;
                md: string;
            };
            width: {
                sm: string;
                md: string;
            };
        };
        img: {
            clip: string;
            height: {
                base: string;
                md: string;
            };
            overflow: string;
            position: {
                base: string;
                md: string;
            };
            width: {
                base: string;
                md: string;
            };
            wordWrap: string;
        };
    };
};
export default FeaturedContent;
