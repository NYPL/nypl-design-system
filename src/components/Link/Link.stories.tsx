import * as React from "react";

import Link from "./Link";
import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
} from "react-router-dom";
import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";
import Heading from "../Heading/Heading";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";
import { withDesign } from "storybook-addon-designs";
import { boolean, text, select } from "@storybook/addon-knobs";

export default {
  title: "Link",
  component: Link,
  decorators: [withDesign],
};

let showIcon;

export const link = () => (
  <>
    <p>
      Use {'"'}Link Type = Action{'"'} to apply appropriate styling to links
      with icons.
    </p>
    <p>
      To Pass in an icon and its link, make sure that the link tag wraps the
      icon.
    </p>
    {boolean("Show Icon", true) ? (showIcon = true) : (showIcon = false)}
    <p>
      <Link
        type={select("Link Type", LinkTypes, LinkTypes.Default)}
        href="#passed-in-link"
      >
        {showIcon && (
          <Icon
            name={select("Icon", IconNames, IconNames.headset)}
            blockName="more-link"
            modifiers={["left"]}
            decorative={true}
            iconRotation={IconRotationTypes.rotate0}
          ></Icon>
        )}
        {text("Link Text", "Link")}
      </Link>
    </p>
    <p>
      <code>Link</code> can wrap an existing <code>a</code> tag or use the{" "}
      <code>href</code> prop to generate an <code>a</code> tag:
    </p>
    <p>
      <Link type={LinkTypes.Default}>
        <a href="#passed-in-link">{"I'm an anchor element inside Link!"}</a>
      </Link>
    </p>
    <p>
      <Link href="#passed-in-link" type={LinkTypes.Default}>
        {"I'm a link with string-only children"}
      </Link>
    </p>
  </>
);

link.storyName = "Link";
link.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16115%3A407",
  },
};

/**
 * Dummy component as a NextJS `Link` example component. In real life, NextJS's
 * `Link` component will do something similar but with pass down props and ref
 * and make it workable. This is just an example wrapper.
 */
const NextJsLink = (props: any) => (
  <div>
    {React.cloneElement(
      props.children,
      { ...props },
      props.children.props.children
    )}
  </div>
);

export const linkWithOtherRouters = () => (
  <>
    <Heading level={2}>React Router</Heading>
    <p>
      {
        "The Design System's `Link` component should wrap around react-router's own `Link` component."
      }
    </p>
    <p>
      <Router>
        <Link type={LinkTypes.Action}>
          <ReactRouterLink to="#">
            <Icon
              name={IconNames.download}
              blockName="more-link"
              modifiers={["left"]}
              decorative={true}
              iconRotation={IconRotationTypes.rotate0}
            ></Icon>
            Download
          </ReactRouterLink>
        </Link>
      </Router>
    </p>

    <Heading level={2}>NextJS Link</Heading>
    <p>
      {`NextJS's ${(
        <code>Link</code>
      )} component should wrap the Design System's
            ${"`Link`"} component with ${"`href`"} and ${"`passHref`"} props.`}
    </p>
    <NextJsLink href="#" passHref>
      <Link type={LinkTypes.Action}>Next Page</Link>
    </NextJsLink>
  </>
);

linkWithOtherRouters.storyName = "Link With Other Routers";
linkWithOtherRouters.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16115%3A407",
  },
};
