// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../../utils/bem";
import IconLink from "../Links/IconLink";

export interface HeadingProps {
  /** The action to perform on the <button>'s onClick function */
  level: number;
  modifiers?: string[];
  blockName?: string;

  // TODO: Check length of text
  text?: string;
  attributes?: {};
}

export default class Heading extends React.Component<HeadingProps, {}> {
  constructor(props: HeadingProps) {
    super(props);
  }

  render(): JSX.Element {
    const { level, text, modifiers, blockName, attributes } = this.props;

    if (level < 1 || level > 6) {
      throw new Error("Heading only supports levels 1-6");
    }

    let content: string;
    if (text) {
      content = text;
    } else {
      React.Children.map(this.props.children, (child: React.ReactElement) => {
        if (typeof child === "string") {
            content = child;
        } else {
          throw new Error("Please only pass text into Headings");
        }
    });
  }

    let heading_base_class = "heading";

    let props = {
      className: bem(heading_base_class, modifiers, blockName),
      ...attributes
    };

    return React.createElement(
      "h" + level,
      props,
      content
    );
  }
}
