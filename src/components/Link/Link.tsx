import * as React from "react";
import bem from "../../utils/bem";
import { uid } from "react-uid";
import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";

export interface LinkProps {
    /** Controls the link visuals—action, button, or default. */
    linkType?: LinkTypes;

    /** Href attribute */
    href?: string;

    /** BEM specifiers */
    modifiers?: string[];

    /** BEM specifiers */
    blockName?: string;

    /** Additional attributes, such as rel=nofollow, to pass to the <a> tag */
    attributes?: {};
}

export default function Link(linkProps: React.PropsWithChildren<LinkProps>) {
    const {
        href,
        modifiers,
        blockName,
        attributes,
        linkType = LinkTypes.Default,
    } = linkProps;

    let link_base_class = "link";

    let childProps = {};

    const elementChildren = React.Children.map(
        linkProps.children,
        (child: React.ReactElement) => {
            if (typeof child === "string" && !linkProps.href) {
                throw new Error("Link needs prop 'href'");
            } else if (child.type === "a") {
                childProps = child.props;
                return child.props.children;
            } else {
                return child;
            }
        }
    );

    if (
        linkType === LinkTypes.Action ||
        linkType === LinkTypes.Forwards ||
        linkType === LinkTypes.Backwards
    ) {
        link_base_class = "more-link";
    } else if (linkType === LinkTypes.Button) {
        link_base_class = "button";
    } else {
        link_base_class = "link";
    }

    let iconRotation, iconPosition, iconLeft, iconRight;
    // An icon needs a position in order for it to be created and
    // rendered in the link.
    if (linkType === LinkTypes.Backwards) {
        iconRotation = IconRotationTypes.rotate90;
        iconPosition = "left";
    } else if (linkType === LinkTypes.Forwards) {
        iconRotation = IconRotationTypes.rotate270;
        iconPosition = "right";
    }

    const navigationIconProps = {
        name: "arrow_xsmall",
        modifiers: [iconPosition, iconRotation, modifiers],
        blockName: "more-link",
        decorative: "true",
    };

    if (linkType === LinkTypes.Backwards) {
        iconLeft = <Icon {...navigationIconProps} />;
    } else if (linkType === LinkTypes.Forwards) {
        iconRight = <Icon {...navigationIconProps} />;
    }

    elementChildren.map(child => {
        return React.cloneElement(child, { key: uid(child) });
    });

    const className = bem(link_base_class, modifiers, blockName);

    return React.createElement(
        "a",
        { ...linkProps, className, ...childProps },
        iconLeft,
        elementChildren,
        iconRight
    );
}
