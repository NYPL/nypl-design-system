// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../../../utils/bem";

export interface HeadingProps {
    level: number;
    id: string;
    baseClass?: string;
    modifiers?: string[];
    blockName?: string;

    url?: string;
    urlClass?: string;

    text?: string;
    attributes?: {};
}

export default function Heading(props: React.PropsWithChildren<HeadingProps>) {
    const {
        level,
        id,
        baseClass = "heading",
        text,
        modifiers,
        blockName,
        url,
        urlClass,
        attributes,
    } = props;

    let heading_base_class = baseClass;

    if (level < 1 || level > 6) {
        throw new Error("Heading only supports levels 1-6");
    }

    if (!props.children && !text) {
        throw new Error("Heading has no children, please pass prop: text");
    }

    if (React.Children.count(props.children) > 1) {
        const children = React.Children.map(
            props.children,
            (child) => (child as JSX.Element).type
        );
        // Catching the error because React's error isn't as helpful.
        throw new Error(
            `Please only pass one child into Heading, got ${children.join(
                ", "
            )}`
        );
    }

    let content: string | React.ReactNode;
    if (props.children) {
        content = url
            ? React.createElement(
                  "a",
                  { href: url, className: urlClass },
                  props.children
              )
            : props.children;
    } else {
        content = url
            ? React.createElement("a", { href: url, className: urlClass }, text)
            : text;
    }

    let headingProps = {
        className: bem(heading_base_class, modifiers, blockName),
        id: id,
        ...attributes,
    };

    return React.createElement("h" + level, headingProps, content);
}
