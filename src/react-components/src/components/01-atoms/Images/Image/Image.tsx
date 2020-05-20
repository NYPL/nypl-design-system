// Images
import * as React from "react";
import bem from "../../../../utils/bem";

export interface ImageProps {
    src: string;
    isDecorative: boolean;
    altText?: string;
    imageModifiers?: string[];
    imageBlockname?: string;
}

export default function Image(props: ImageProps) {
    const image_base_class = "image";
    const {
        src,
        isDecorative,
        altText,
        imageModifiers,
        imageBlockname,
    } = props;

    if (!isDecorative && !altText) {
        throw new Error("If image is decorative, alt text is required");
    }

    if (altText && altText.length > 300) {
        throw new Error("Alt Text must be less than 300 characters");
    }

    let imageProps = {
        className: bem(image_base_class, imageModifiers, imageBlockname),
        src: src,
        alt: isDecorative ? "" : altText,
    };

    return <img {...imageProps} />;
}
