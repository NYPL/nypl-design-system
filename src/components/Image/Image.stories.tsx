import * as React from "react";

import Image from "./Image";

export default {
    title: "Image",
    component: Image,
};

export const twoByOne = () => [
    <Image
        src="https://placeimg.com/200/100/arch"
        isDecorative={true}
        key="1"
    />,
    <Image
        src="https://placeimg.com/400/200/arch"
        isDecorative={true}
        key="2"
    />,
    <Image
        src="https://placeimg.com/1600/800/arch"
        isDecorative={true}
        key="3"
    />,
    <Image
        src="https://placeimg.com/2000/1000/arch"
        isDecorative={true}
        key="4"
    />,
];

export const threeByFour = () => [
    <Image
        src="https://placeimg.com/150/200/arch"
        isDecorative={true}
        key="1"
    />,
    <Image
        src="https://placeimg.com/300/400/arch"
        isDecorative={true}
        key="2"
    />,
];
