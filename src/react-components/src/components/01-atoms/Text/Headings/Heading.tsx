// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../../../utils/bem";

export interface HeadingProps {
  level: number;
  id: string;
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

    let content;
    if (text) {
      content = text;
    } else {
      let isValid: boolean = true;
      React.Children.forEach(this.props.children, (child: React.ReactElement) => {
        if (typeof child !== "string" && child.type !== "b") {
          isValid = false;
        }
      });
      if (!isValid) {
        throw new Error("Headings can only be plain text or bold");
      } else {
        content = this.props.children;
      }
    }

    let heading_base_class = "heading";

    let props = {
      className: bem(heading_base_class, modifiers, blockName),
      id: id,
      ...attributes
    };

    return React.createElement(
      "h" + level,
      props,
      content
    );
  }
}
