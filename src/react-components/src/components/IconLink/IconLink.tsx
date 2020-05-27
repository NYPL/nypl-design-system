// MT-18 Text Link With Optional Icon
import * as React from "react";
import bem from "../../utils/bem";
import Icon from "../Icons/Icon";
import BasicLink from "../BasicLink/BasicLink";
import { iconRotationTypes } from "../Icons/IconTypes";

export interface IconLinkProps {
    url?: string;
    attributes?: {};
    modifiers?: string[];
    blockName?: string;
    iconName?: string;
<<<<<<< HEAD
    iconRotation?: iconRotationTypes;
=======
    iconRotation?: iconRotationOptions;
>>>>>>> be8eb23135e68a5b49e1188b6112a3e0777ff773
    iconPosition?: string;
    iconModifiers?: string[];
}
export default class IconLink extends React.Component<IconLinkProps, {}> {
    constructor(props: IconLinkProps) {
        super(props);
    }
    render(): JSX.Element {
        let iconLink__base_class = "more-link";
        const {
            url,
            attributes,
            modifiers,
            blockName,
            iconName = "arrow_xsmall",
            iconPosition,
            iconModifiers,
            iconRotation,
        } = this.props;

        let moreLinkModifiers = modifiers ? modifiers : [];
        let children = this.props.children;

        let icon: { element: JSX.Element } = { element: undefined };

        if (iconPosition) {
            if (iconPosition === "left") {
                moreLinkModifiers.push("icon-left");
            } else if (iconPosition === "right") {
                moreLinkModifiers.push("icon-right");
            } else {
                throw new Error(
                    "iconPosition can only have values 'left' or 'right'"
                );
            }

            let moreIconModifiers = iconModifiers ? iconModifiers : [];

            if (iconRotation) {
                moreIconModifiers.push(iconRotation);
            }

            icon.element = (
                <Icon
                    name={iconName}
                    blockName={iconLink__base_class}
                    modifiers={moreIconModifiers}
                    decorative={true}
                />
            );
        }

        let className = bem(iconLink__base_class, moreLinkModifiers, blockName);

        return (
            <BasicLink
                url={url}
                className={className}
                attributes={attributes}
                icon={icon}
            >
                {children}
            </BasicLink>
        );
    }
}
