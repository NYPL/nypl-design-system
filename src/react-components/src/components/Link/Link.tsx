import * as React from "react";
import bem from "../../utils/bem";
import { uid } from "react-uid";
import { LinkTypes, LinkIconPositions } from "./LinkTypes";
import { element } from "prop-types";
import Icon from "../Icons/Icon";
import { iconRotationTypes } from "../Icons/IconTypes";

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
    let { href, modifiers, blockName, attributes } = props;

    let link_base_class = "link";

    let childProps = {};

    let icon;

    let elementChildren = React.Children.map(
        props.children,
        (child: React.ReactElement) => {
            if (typeof child === "string" && !props.href) {
                throw new Error("Link needs prop 'href'");
            } else if (child.type === "a") {
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
    }

    let navigationIconProps, iconRotation, iconPosition, iconLeft, iconRight;
    // An icon needs a position in order for it to be created and
    // rendered in the link.
    if (props.linkType === LinkTypes.Backwards) {
        iconRotation = iconRotationTypes.rotate90;
        iconPosition = LinkIconPositions.Left;
    } else if (props.linkType === LinkTypes.Forwards) {
        iconRotation = iconRotationTypes.rotate270;
        iconPosition = LinkIconPositions.Right;
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

    let className = bem(link_base_class, props.modifiers, props.blockName);

    return React.createElement(
        "a",
        { ...props, className, ...childProps },
        iconLeft,
        elementChildren,
        iconRight
    );
}
