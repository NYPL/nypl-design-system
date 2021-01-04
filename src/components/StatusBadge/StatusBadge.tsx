import * as React from "react";
import bem from "../../utils/bem";

export interface StatusBadgeProps {
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName that appears in addition to "status-badge" */
    className?: string;
    /** Inner text of the element */
    statusBadgeText?: string;
    /** Level of badge **/
    level?: "low" | "medium" | "high";
}

export default function StatusBadge(
    props: React.PropsWithChildren<StatusBadgeProps>
) {
    const { blockName, className, statusBadgeText, level } = props;

    const baseClass = "status-badge";

    if (!props.children) {
        console.warn("Status Badge has no children");
    }

    let statusBadgeModifiers = ["low"];

    if (level) {
        statusBadgeModifiers = [level];
    }

    return (
        <div
            className={bem(baseClass, statusBadgeModifiers, blockName, [
                className,
            ])}
        >
            {statusBadgeText}
        </div>
    );
}
