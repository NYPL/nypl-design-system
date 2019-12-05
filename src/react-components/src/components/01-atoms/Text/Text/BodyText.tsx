import * as React from "react";
import ReactDOMServer from "react-dom/server";
import bem from "../../../../utils/bem";
/* AT-43 Body Text */

export interface BodyTextProps {
  maxchar?: number; // The maximum character count. 0 means unlimited.
  bodyContent?: JSX.Element;
}
function checkHTML(html: string): Boolean {
  let doc = document.createElement("div");
  doc.innerHTML = html;
  return (doc.innerHTML === html);
}


export default function BodyText(props: BodyTextProps) {
  const { bodyContent, ...rest } = props;
  const baseClass = "body-text";
  let content: React.ReactNode;

  if (bodyContent) {
    content = bodyContent;
  } else {
    let children = this.props.children;
    let htmlContent = ReactDOMServer.renderToString(children);
    if (checkHTML(htmlContent)) {
      if (React.Children.map(children, (child: React.ReactElement) => {
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
  }
  let bodyProps = {
    className: bem(baseClass)
  };
  return React.createElement(
    "div",
    { ...bodyProps, ...rest },
    content
  );
}

