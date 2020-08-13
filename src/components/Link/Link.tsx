import * as React from "react";
import bem from "../../utils/bem";
import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";

export interface LinkProps {
    /** Additional attributes, such as rel=nofollow, to pass to the <a> tag */
    attributes?: {};
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** className that appears in addition to "link" */
    className?: string;
    /** Href attribute */
    href?: string;
    /** ID */
    id?: string;
    /** Controls the link visuals—action, button, or default. */
    linkType?: LinkTypes;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Any child node passed to the component. */
    children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    const {
        attributes,
        blockName,
        className,
        href,
        id,
        linkType = LinkTypes.Default,
        modifiers,
        children,
    } = props;
    // Merge the necessary props alongside any extra props for the
    // anchor element.
    const linkProps = {
        id,
        href,
        ...attributes,
    };
    let link_base_class = "link";

    let childProps = {};

    if (typeof children === "string" && !href) {
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
    let linkClassName = bem(link_base_class, modifiers, blockName, [className]);

    if (!props.href) {
        // React Types error makes this fail:  https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32832
        // let children = React.Children.only(props.children);
        if (React.Children.count(props.children) > 1) {
            throw new Error("Please pass only one child into Link");
        }
        let children = props.children[0] ? props.children[0] : props.children;
        childProps = children.props;

        return React.cloneElement(
            children,
            {
                className: linkClassName,
                ...linkProps,
                ...childProps,
                ref,
            },
            [children.props.children]
        );
    } else {
        return React.createElement(
            "a",
            {
                ...linkProps,
                className: linkClassName,
                ref,
            },
            iconLeft,
            props.children,
            iconRight
        );
    }
});

export default Link;
