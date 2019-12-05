import * as React from "react";

import HeaderImgRight from "./HeaderImgRight";
import { action } from "@storybook/addon-actions";

export default {
  title: "Header Image Right",
  component: HeaderImgRight,
};

export const headerImgRight = () => <HeaderImgRight id="bigheaderthing" pageTitleText="Title Of Page" imgUrl="https://placeimg.com/200/100/arch"></HeaderImgRight>;

