
// MT-18 Text Link With Optional Icon
import * as React from "react";
import bem from "../../../utils/bem";
import Icon from "../Images/Icons/Icon";
import Link from "./Link";

export interface IconLinkProps {
  url?: string;
  attributes?: {};
  modifiers?: string[];
  blockName?: string;
  iconPosition?: string;
}
export default class IconLink extends React.Component<IconLinkProps, {}> {
  constructor(props: IconLinkProps) {
    super(props);
  }
  render(): JSX.Element {
    let iconLink__base_class = "more-link";
    const { url, attributes, modifiers, blockName, iconPosition } = this.props;

    let moreLinkModifiers = modifiers ? modifiers : [];
    let children = this.props.children;

    let icon: {element: JSX.Element, position: string} = {element: undefined, position: ""};

    if (iconPosition) {
      if (iconPosition === "left") {
        moreLinkModifiers.push('icon-left');
        icon.element = <Icon
        name="arrow-xsmall"
        blockName={iconLink__base_class}
        modifiers={["left"]} decorative={true} />;
        icon.position = "icon-left";
      } else if (iconPosition === "right") {
        moreLinkModifiers.push('icon-right');
        icon.element = <Icon
        name="arrow-xsmall"
        blockName={iconLink__base_class}
        modifiers={["right"]} decorative={true} />;
        icon.position = "right";
      } else {
        throw new Error("iconPosition can only have values \"left\" or \"right\"");
      }
    }

    let className = bem(iconLink__base_class, moreLinkModifiers, blockName);

    return <Link url={url} className={className} attributes={attributes} children={children} icon={icon} />;
  }
}
