import * as React from "react";
import { uid } from "react-uid";
import { LinkTypes, LinkIconPositions } from "./LinkTypes";

export interface LinkProps {
    /** Controls the link visuals—action, button, or default. */
    linkType?: LinkTypes;

    /** Why is this optional? */
    url?: string;

    /** Icon that can be included idk */
    icon?: { element: JSX.Element };

    /** Determines if icon appears on the right or left */
    iconPosition?: LinkIconPositions;

    /** An option to pass an entire className over blockName */
    className?: string;

    /** BEM specifiers */
    modifiers?: string[];

    /** BEM specifiers */
    blockName?: string;

    /** Additional attributes, such as rel=nofollow, to pass to the <a> tag */
    attributes?: {};
}

export default class Link extends React.Component<LinkProps, {}> {
    constructor(props: LinkProps) {
        super(props);
    }

    render(): JSX.Element {
        const { url, className, attributes, icon } = this.props;

        let props = {
            className: className,
            href: url,
            ...attributes,
        };

        let childProps = {};

        let elementChildren = React.Children.map(
            this.props.children,
            (child: React.ReactElement) => {
                if (child.type === "a") {
                    return child.props.children;
                } else {
                    if (!props.href) {
                        throw new Error("IconLink needs prop 'url'");
                    } else {
                        return child.props ? child.props.children : child;
                    }
                }
            }
        );

        elementChildren.map((child) => {
            return React.cloneElement(child, { key: uid(child) });
        });

        if (this.props.icon) {
            console.log("icon exists");
            elementChildren.push(
                React.cloneElement(icon.element, { key: uid(icon) })
            );
        }

        return React.createElement(
            "a",
            { ...props, ...childProps },
            elementChildren
        );
    }
}
