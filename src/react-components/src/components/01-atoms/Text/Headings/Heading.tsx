// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../../../utils/bem";

export interface HeadingProps {
  level: number;
  id?: string;
  modifiers?: string[];
  blockName?: string;

  text?: string;
  attributes?: {};
}

export default class Heading extends React.Component<HeadingProps, {}> {
  constructor(props: HeadingProps) {
    super(props);
  }

  render(): JSX.Element {
    const { level, id, text, modifiers, blockName, attributes } = this.props;

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
      id: id ? id : "h" + level + "-" + content.replace(/\s/g, "").substr(0, 8),
      ...attributes
    };

    return React.createElement(
      "h" + level,
      props,
      content
    );
  }
}
