import * as React from "react";

import IconLinkList from "./IconLinkList";
import { action } from "@storybook/addon-actions";

export default {
  title: "IconLinkList",
  component: IconLinkList,
};

export const listOfLinks = () => <IconLinkList titleText="Test Header"
textLinks={[{ text: "link1", url: "#url1" }, { text: "link2", url: "#url2" }, { text: "link3", url: "#url3" }]} />;
