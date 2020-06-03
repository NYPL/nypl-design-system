import * as React from "react";
import bem from "../../utils/bem";
import { uid } from "react-uid";
import { LinkTypes } from "./LinkTypes";
import { element } from "prop-types";
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

export default function Link(props: React.PropsWithChildren<LinkProps>) {
    const {
        href,
        modifiers,
        blockName,
        attributes,
        linkType = LinkTypes.Default,
    } = props;

    const passedProps = { href, attributes };
    passedProps.href = props.href;
    passedProps.attributes = props.attributes;

    let link_base_class = "link";

    let childProps = {};

    let icon;

    let elementChildren = React.Children.map(
        props.children,
        (child: React.ReactElement) => {
            if (typeof child === "string" && !props.href) {
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
        props.linkType === LinkTypes.Action ||
        props.linkType === LinkTypes.Forwards ||
        props.linkType === LinkTypes.Backwards
    ) {
        link_base_class = "more-link";
    } else if (props.linkType === LinkTypes.Button) {
        link_base_class = "button";
    } else {
        link_base_class = "link";
    }

    let navigationIconProps, iconRotation, iconPosition, iconLeft, iconRight;
    // An icon needs a position in order for it to be created and
    // rendered in the link.
    if (props.linkType === LinkTypes.Backwards) {
        iconRotation = IconRotationTypes.rotate90;
        iconPosition = "left";
    } else if (props.linkType === LinkTypes.Forwards) {
        iconRotation = IconRotationTypes.rotate270;
        iconPosition = "right";
    }

    navigationIconProps = {
        name: "arrow_xsmall",
        modifiers: [iconPosition, iconRotation, modifiers],
        blockName: "more-link",
        decorative: "true",
    };

    if (props.linkType === LinkTypes.Backwards) {
        iconLeft = <Icon {...navigationIconProps} />;
    } else if (props.linkType === LinkTypes.Forwards) {
        iconRight = <Icon {...navigationIconProps} />;
    }

    elementChildren.map((child) => {
        return React.cloneElement(child, { key: uid(child) });
    });

    let className = bem(link_base_class, modifiers, blockName);

    return React.createElement(
        "a",
        { ...passedProps, className, ...childProps },
        iconLeft,
        elementChildren,
        iconRight
    );
}
