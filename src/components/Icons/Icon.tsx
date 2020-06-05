import * as React from "react";
import bem from "../../utils/bem";

import { IconRotationTypes } from "./IconTypes";

import arrow_xsmall from "../../icons/svg/arrow-xsmall.svg";
import arrow from "../../icons/svg/arrow.svg";
import download from "../../icons/svg/download.svg";
import minus from "../../icons/svg/minus.svg";
import plus from "../../icons/svg/plus.svg";
import search_small from "../../icons/svg/search-small.svg";
import search from "../../icons/svg/search.svg";

const allSvgs = {
    arrow_xsmall,
    arrow,
    download,
    minus,
    plus,
    search_small,
    search,
};

// Wrapper Class for Icon
export interface IconProps {
    name: string;
    blockName?: string;
    modifiers?: string[];
    decorative: boolean;
    role?: string;
    title?: boolean;
    desc?: boolean;
    iconRotation?: IconRotationTypes;
}

export default class Icon extends React.Component<IconProps, {}> {
    constructor(props: IconProps) {
        super(props);
    }

    render(): JSX.Element {
        let {
            modifiers = [],
            blockName,
            name,
            decorative,
            role,
            title,
            desc,
            iconRotation,
        } = this.props;

        let icon_base_class = "icon";

        if (this.props.iconRotation) {
            modifiers.push(this.props.iconRotation);
        }

        let iconProps = {
            className: bem(icon_base_class, modifiers, blockName),
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
