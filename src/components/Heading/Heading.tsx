// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../utils/bem";

export interface HeadingProps {
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName that appears in addition to "heading" */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Number 1-6, creating the <h*> tag */
    level: number;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Inner text of the <h*> element */
    text?: string;
    /** URL that header points to */
    url?: string;
    /** className for the URL when the url prop is passed */
    urlClass?: string;
}

export default function Heading(props: React.PropsWithChildren<HeadingProps>) {
    const {
        blockName,
        className,
        id,
        level,
        modifiers,
        text,
        url,
        urlClass,
    } = props;

    let heading_base_class = "heading";

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
        className: bem(heading_base_class, modifiers, blockName, [className]),
        id: id,
    };

    return React.createElement("h" + level, headingProps, content);
}
