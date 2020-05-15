import * as React from "react";
import SVG from "react-inlinesvg";
import bem from "../../../../utils/bem";

import arrow_xsmall from "../../../../../icons/svg/arrow-xsmall.svg";
import arrow from "../../../../../icons/svg/arrow.svg";
import download from "../../../../../icons/svg/download.svg";
import minus from "../../../../../icons/svg/minus.svg";
import plus from "../../../../../icons/svg/plus.svg";
import search_small from "../../../../../icons/svg/search-small.svg";
import search from "../../../../../icons/svg/search.svg";

const allSvgs = {
  arrow_xsmall: arrow_xsmall,
  arrow: arrow,
  download: download,
  minus: minus,
  plus: plus,
  search_small:
  search_small,
  search: search
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
}

export default class Icon extends React.Component<IconProps, {}> {
  constructor(props: IconProps) {
    super(props);
    console.log("allSvgs", allSvgs);
  }

  render(): JSX.Element {
    let { modifiers, blockName, name, decorative, role, title, desc } = this.props;
    let icon_base_class = "icon";

    let iconProps = {
      "className": bem(icon_base_class, modifiers, blockName),
      "role": decorative ? "img" : role,
      "aria-hidden": decorative,
      "aria-labelledby": title ? "title-" + name : undefined,
      "aria-describedby": desc ? "desc-" + name : undefined,
      "title": title ? `title-${name}` : undefined,
      "description": desc ? `title-${name}` : undefined
    };

    return (
      <SVG {...iconProps} src={allSvgs[name]}></SVG>
    );
  }
}
