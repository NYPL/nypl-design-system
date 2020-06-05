// Base Link Helper Class
import * as React from "react";
import withOneChild from "../../helpers/hoc/WithOneChild";

export interface BasicLinkProps {
    className?: string;
    icon?: { element: JSX.Element };
    url?: string;
    attributes?: {};
}

export class BasicLinkBase extends React.Component<BasicLinkProps, {}> {
    constructor(props: BasicLinkProps) {
        super(props);
    }

    render(): JSX.Element {
        const { url, className, attributes, icon } = this.props;

        let props = {
            className: className,
            ...attributes,
        };

        let linkElement: React.ReactElement;
        // If the value is a string, then it's only one element but wrap it in a fragment.
        if (typeof this.props.children === "string") {
            if (!url) {
                throw new Error(
                    `if children ${this.props.children} has no anchor tag, please pass prop: url`
                );
            }
            props["href"] = url;
            let linkChildren = [<>{this.props.children}</>];
            if (icon) {
                linkChildren.push(icon.element);
            }
            linkElement = React.createElement("a", props, linkChildren);
        } else {
            let passedInChild = this.props.children as React.ReactElement;

            let linkChildren = [passedInChild.props.children];
            if (icon) {
                linkChildren.push(icon.element);
            }

            // TODO Check that there is a href attribute and that this is indeed a link.
            linkElement = React.cloneElement(
                passedInChild,
                props,
                linkChildren
            );
        }

        return linkElement;
    }
}

const BasicLink = withOneChild<BasicLinkProps>(BasicLinkBase);
export default BasicLink;
