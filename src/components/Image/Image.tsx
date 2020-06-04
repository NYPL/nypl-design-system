// Images
import * as React from "react";
import bem from "../../utils/bem";

export interface ImageProps {
    src: string;
    isDecorative: boolean;
    altText?: string;
    imageModifiers?: string[];
    imageBlockname?: string;
    imageCaption?: string;
    imageCredit?: string;
}

export default function Image(props: ImageProps) {
    const image_base_class = "image";
    const {
        src,
        isDecorative,
        altText,
        imageModifiers,
        imageBlockname,
        imageCaption,
        imageCredit,
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

    return (
        <>
            {imageCaption || imageCredit ? (
                <figure className={bem(image_base_class, [], "figure")}>
                    <img {...imageProps} />
                    <figcaption
                        className={bem(image_base_class, [], "figure__caption")}
                    >
                        {imageCaption && (
                            <div
                                className={bem(image_base_class, [], "caption")}
                            >
                                {imageCaption}
                            </div>
                        )}
                        {imageCredit && (
                            <div
                                className={bem(image_base_class, [], "credit")}
                            >
                                {imageCredit}
                            </div>
                        )}
                    </figcaption>
                </figure>
            ) : (
                <img {...imageProps} />
            )}
        </>
    );
}
