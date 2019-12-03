import * as React from "react";

import IconLinkList from "./IconLinkList";
import { action } from "@storybook/addon-actions";

export default {
  title: "IconLinkList",
  component: IconLinkList,
};

export const buttonFilled = () => <IconLinkList titleText="Stuff" linkContent={["one", "two", "three"]}/>;
