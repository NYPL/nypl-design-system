import * as React from "react";

import Link from "./Link";
import {
    BrowserRouter as Router,
    Link as ReactRouterLink,
} from "react-router-dom";
import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

export default {
    title: "Link",
    component: Link,
};

export const passedInAnchorElement = () => (
    <Link type={LinkTypes.Default}>
        <a href="#passed-in-link">I'm an anchor element link!</a>
    </Link>
);

export const generatedLink = () => (
    <Link href="#passed-in-link" type={LinkTypes.Default}>
        I'm just a string
    </Link>
);

export const buttonLink = () => (
    <Link type={LinkTypes.Button} href="#passed-in-link">
        I look like a button but I'm actually a link
    </Link>
);

export const forwardsLink = () => (
    <>
        <p>
            This link's icon is predefined and set with the `Forwards`
            `linkType` prop.
        </p>
        <Link href="#passedinlink" type={LinkTypes.Forwards}>
            content
        </Link>
    </>
);

export const backwardsLink = () => (
    <>
        <p>
            This link's icon is predefined and set with the `Backwards`
            `linkType` prop.
        </p>
        <Link href="#passed-in-link" type={LinkTypes.Backwards}>
            content
        </Link>
    </>
);

export const actionLinkWithDownloadIcon = () => (
    <>
        <p>A custom icon is added to the anchor child element.</p>
        {/* To Pass in an icon and its link, make sure that the link tag wraps the icon. */}
        <Link type={LinkTypes.Action} id="beepbeep">
            <a href="#passed-link">
                <Icon
                    name={IconNames.download}
                    blockName="more-link"
                    modifiers={["left"]}
                    decorative={true}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Download
            </a>
        </Link>
    </>
);

export const LinkWithReactRouter = () => (
    <>
        <p>
            The Design System's `Link` component should wrap around
            react-router's own `Link` component.
        </p>
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
    </>
);

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

export const LinkWithNextJSRouter = () => (
    <>
        <p>
            NextJS's `Link` component should wrap the Design System's `Link`
            component with `href` and `passHref` props.
        </p>
        <NextJsLink href="#" passHref>
            <Link type={LinkTypes.Action}>Next Page</Link>
        </NextJsLink>
    </>
);
