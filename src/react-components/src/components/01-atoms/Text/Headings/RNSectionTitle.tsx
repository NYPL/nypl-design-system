/* AT-79 Page Title - Level 1
  This is the ResearchNow Variant, which isn't a semantic heading.*/

// This story serves as documentation and example code for ResearchNow's Section Title.
// Because ResearchNow uses React-Router's Link, the component itself must be passed in for routing to work properly.

import * as React from "react";

export default function RNSectionTitle(props: React.PropsWithChildren<{}>) {
  return <>{props.children}</>;
}
