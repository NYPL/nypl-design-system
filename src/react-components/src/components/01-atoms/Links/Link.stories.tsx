import * as React from "react";

import Link from "./Link";
import { action } from "@storybook/addon-actions";

export default {
  title: "Link",
  component: Link,
};


export const passedInLink = () => <Link><a href="#passed-in-link">hello there</a></Link>;
export const generatedLink = () => <Link url="#generated-link-link">hello</Link>;
export const passedInContent = () => <Link url="#span-here"><div>I guess this is a link</div></Link>;
