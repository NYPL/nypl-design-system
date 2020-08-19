import * as React from "react";
import bem from "../../utils/bem";
import { withDesign } from "storybook-addon-designs";

export default {
    title: "Status Badge",
    decorators: [withDesign],
};

export const StatusBadge = () => <div className="status-badge">beep</div>;

StatusBadge.story = {
    name: "Status Badge",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16770%3A53427",
        },
    },
};
