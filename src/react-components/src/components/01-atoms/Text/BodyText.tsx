import * as React from "react";
import ReactDOMServer from "react-dom/server";
/* AT-43 Body Text */

export interface BodyTextProps {
  maxChar?: number; // The maximum character count. 0 means unlimited.
  className?: string;
}

export default class BodyText extends React.Component<BodyTextProps, {}> {
  static defaultProps = {
    maxChar: 0
  };

  constructor(props: BodyTextProps) {
    super(props);
  }

  checkHTML(html: string): Boolean {
    let doc = document.createElement("div");
    doc.innerHTML = html;
    return (doc.innerHTML === html);
  }

  render(): JSX.Element {
    const { className, ...rest } = this.props;
    let children = this.props.children;
    let content: React.ReactNode;
    let htmlContent = ReactDOMServer.renderToString(children);
    if (this.checkHTML(htmlContent)) {
      if (React.Children.map(children, (child: React.ReactElement) => {
        console.log("child type", child.type);
        if (!child.type) {
          return child;
        }
      }).length > 0) {
        // if HTML is valid, and any child is a string, wrap everything in a <p> tag
        content = React.createElement("p", {}, children);
      } else {
        // if HTML is valid, and no children are strings, then return as is.
        content = children;
      }
    } else {
      // if HTML is invalid, throw an error.
      // This checker is excessively strict because it should only be set by internal engineers.
      // Please do not pass user inputs into <BodyText> before first formatting it.
      throw new Error("Invalid HTML.  Please validate HTML and make sure all tags are closed before passing it into BodyText");
    }

    let props = {
      className: className
    };
    return React.createElement(
      "div",
      { ...props, ...rest },
      content
    );
  }
}
