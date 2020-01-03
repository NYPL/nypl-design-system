import * as React from "react";

import Image from "./Image";
import { action } from "@storybook/addon-actions";

export default {
  title: "Image",
  component: Image,
};

export const twoByOne = () => [<Image src="https://placeimg.com/200/100/arch" isDecorative={true}/>,
<Image src="https://placeimg.com/400/200/arch" isDecorative={true}/>,
<Image src="https://placeimg.com/1600/800/arch" isDecorative={true}/>,
<Image src="https://placeimg.com/2000/1000/arch" isDecorative={true}/> ];
