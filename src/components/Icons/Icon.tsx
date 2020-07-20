import * as React from "react";
import bem from "../../utils/bem";

import { IconRotationTypes, IconNames } from "./IconTypes";

import arrow_xsmall from "../../../icons/svg/arrow-xsmall.svg";
import arrow from "../../../icons/svg/arrow.svg";
import download from "../../../icons/svg/download.svg";
import headset from "../../../icons/svg/headset.svg";
import minus from "../../../icons/svg/minus.svg";
import plus from "../../../icons/svg/plus.svg";
import search_small from "../../../icons/svg/search-small.svg";
import search from "../../../icons/svg/search.svg";

const allSvgs = {
    arrow_xsmall,
    arrow,
    download,
    headset,
    minus,
    plus,
    search_small,
    search,
};

export interface IconProps {
    /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** className that appears in addition to "icon" */
    className?: string;
    /** Decorative icons are skipped by screenreaders */
    decorative: boolean;
    /** Desc prop added to the <svg> element */
    desc?: boolean;
    /** Rotates icons in quarters */
    iconRotation?: IconRotationTypes;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
    /** Name of the icon */
    name: IconNames;
    /** Icon role */
    role?: string;
    /** Icon title */
    title?: boolean;
}

export default class Icon extends React.Component<IconProps, {}> {
    constructor(props: IconProps) {
        super(props);
    }

    render(): JSX.Element {
        let {
            blockName,
            decorative,
            className,
            desc,
            iconRotation,
            modifiers,
            name,
            role,
            title,
        } = this.props;

        let icon_base_class = "icon";

        if (this.props.iconRotation) {
            modifiers.push(this.props.iconRotation);
        }

        let iconProps = {
            className: bem(icon_base_class, modifiers, blockName, [className]),
            role: decorative ? "img" : role,
            "aria-hidden": decorative,
            "aria-labelledby": title ? "title-" + name : undefined,
            "aria-describedby": desc ? "desc-" + name : undefined,
            title: title ? `title-${name}` : undefined,
            description: desc ? `title-${name}` : undefined,
        };

        let svg = allSvgs[name];

        return (
            <span {...iconProps} dangerouslySetInnerHTML={{ __html: svg }} />
        );
    }
}
