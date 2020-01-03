// MT-173 Text Link
import * as React from "react";
import bem from "../../../utils/bem";
import Link from "./Link";

export interface UnderlineLinkProps {
  url?: string;
  attributes?: {};
  modifiers?: string[];
  blockName?: string;
}

export default class UnderlineLink extends React.Component<UnderlineLinkProps, {}> {
  constructor(props: UnderlineLinkProps) {
    super(props);
  }

  render(): JSX.Element {
    let link__base_class = "link";
    const { url, attributes, modifiers, blockName } = this.props;
    let className = bem(link__base_class, modifiers, blockName);
    let children = this.props.children;

    return <Link url={url} className={className} attributes={attributes} children={children} />;
  }
}
