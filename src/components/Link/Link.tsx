import * as React from "react";
import bem from "../../utils/bem";
import { uid } from "react-uid";
import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";
import { element } from "prop-types";

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

    if (typeof linkProps.children === "string" && !linkProps.href) {
        throw new Error("Link needs prop 'href'");
    }

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

    let navigationIconProps, iconRotation, iconPosition, iconLeft, iconRight;
    // An icon needs a position in order for it to be created and
    // rendered in the link.
    if (linkType === LinkTypes.Backwards) {
        iconRotation = IconRotationTypes.rotate90;
        iconPosition = "left";
    } else if (linkType === LinkTypes.Forwards) {
        iconRotation = IconRotationTypes.rotate270;
        iconPosition = "right";
    }

    navigationIconProps = {
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

    let className = bem(link_base_class, modifiers, blockName);

    if (!linkProps.href) {
        // React Types error makes this fail:  https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32832
        // let children = React.Children.only(linkProps.children);
        if (React.Children.count(linkProps.children) > 1) {
            throw new Error("Please pass only one child into Link");
        }
        let children = linkProps.children[0]
            ? linkProps.children[0]
            : linkProps.children;
        return React.cloneElement(
            children,
            { ...linkProps, className, ...childProps }[children.children]
        );
    } else {
        return React.createElement(
            "a",
            { ...linkProps, className, ...childProps },
            iconLeft,
            linkProps.children,
            iconRight
        );
    }
}
