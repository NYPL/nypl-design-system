export interface ImageProps {
    src: string;
    isDecorative: boolean;
    altText?: string;
    imageModifiers?: string[];
    imageBlockname?: string;
}
export default function Image(props: ImageProps): JSX.Element;
