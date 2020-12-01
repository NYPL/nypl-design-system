import * as React from "react";
import bem from "../../utils/bem";

export interface StatusBadgeProps {
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** ClassName that appears in addition to "status-badge" */
    className?: string;
    /** Inner text of the element */
    text?: string;
    /** Level of badge **/
    level?: "low" | "medium" | "high";
}

export default class StatusBadge extends React.Component<StatusBadgeProps, {}> {

    constructor(props: StatusBadgeProps) {
        super(props);
    }

    render() {
        const {
            blockName,
            className,
            text,
            level,
        } = this.props;

        let status_badge_base_class = "status-badge";

        if (!this.props.children && !text) {
            throw new Error("Status Badge has no children");
        }

        let statusBadgeModifiers = ["low"];

        if (level) {
            statusBadgeModifiers = [level];
        }

        let content;

        if (this.props.children) {
            content = this.props.children;
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
}
