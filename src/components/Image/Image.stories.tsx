import * as React from "react";

import Image from "./Image";
import { action } from "@storybook/addon-actions";

export default {
    title: "Image",
    component: Image,
};

export const ImageWithCaption = () => [
    <Image
        src="https://placeimg.com/400/200/arch"
        isDecorative={true}
        imageCaption={"Image Caption"}
    />,
];

export const ImageWithCredit = () => [
    <Image
        src="https://placeimg.com/400/200/arch"
        isDecorative={true}
        imageCaption={"Image Credit"}
    />,
];

export const ImageWithCreditAndCaption = () => [
    <Image
        src="https://placeimg.com/400/200/arch"
        isDecorative={true}
        imageCaption={"Image Caption"}
        imageCredit={"Image Credit"}
    />,
];

export const twoByOne = () => [
    <Image src="https://placeimg.com/200/100/arch" isDecorative={true} />,
    <Image src="https://placeimg.com/400/200/arch" isDecorative={true} />,
    <Image src="https://placeimg.com/1600/800/arch" isDecorative={true} />,
    <Image src="https://placeimg.com/2000/1000/arch" isDecorative={true} />,
];

export const threeByFour = () => [
    <Image src="https://placeimg.com/150/200/arch" isDecorative={true} />,
    <Image src="https://placeimg.com/300/400/arch" isDecorative={true} />,
];
