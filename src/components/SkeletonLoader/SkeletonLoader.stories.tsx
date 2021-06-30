import * as React from "react";

import SkeletonLoader from "./SkeletonLoader";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Skeleton Loader",
  component: SkeletonLoader,
  decorators: [withDesign],
};

export const skeletonLoader = () => <SkeletonLoader />;

skeletonLoader.storyName = "Skeleton Loader";
skeletonLoader.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17219%3A7",
  },
};
