import * as React from "react";
import bem from "../../utils/bem";

export interface StatusBadgeProps {
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName that appears in addition to "status-badge" */
    className?: string;
    /** Inner text of the element */
    text?: string;
    /** Type of badge **/
    type?: string;
}

export default function Heading(props: React.PropsWithChildren<StatusBadgeProps>) {
    const {
        blockName,
        className,
        text,
        type,
    } = props;

    let status_badge_base_class = "heading";

    if (!props.children && !text) {
        throw new Error("Status Badge has no children, please pass prop: text");
    }

    let statusBadgeModifiers = ["warning"];

    if (type && type === "notice") {
        statusBadgeModifiers = [type];
    } else {
        statusBadgeModifiers = ["warning"];
    }

    let content;

    if (props.children) {
        content = props.children;
    } else {
        content = text;
    }

    return(
        <div
            className={bem(status_badge_base_class, statusBadgeModifiers, blockName, [className])}
        >
            {content}
        </div>
    );
}
