import * as React from "react";
import ReactDOMServer from "react-dom/server";
import bem from "../../../../utils/bem";
import * as he from "he";

/* AT-43 Body Text */

export interface BodyTextProps {
  warnchar?: number;
  maxchar?: number;
  bodyContent?: JSX.Element;
  modifiers?: string[];
  blockName?: string;
}

// TODO: This does not work in SFR
// if HTML is invalid, throw an error.
// This checker is excessively strict because it should only be set by internal engineers.
// Please do not pass user inputs into <BodyText> before first formatting it.
function checkHTML(node: React.ReactNode): void {
  let html = ReactDOMServer.renderToString(node);

  let doc = document.createElement("div");
  doc.innerHTML = html;
  if (doc.innerHTML !== he.decode(html)) {
    throw new Error("Invalid HTML.  Please validate HTML and make sure all tags are closed before passing it into BodyText");
  }
}

function validateCharCount(node: React.ReactNode, warnChar?: number, maxChar?: number): void {
  if (!maxChar) return;

  let html = he.decode(ReactDOMServer.renderToString(node));
  let doc = document.createElement("div");
  doc.innerHTML = html;

  if (warnChar && doc.textContent.length >= warnChar) {
    console.warn("Body Text should be fewer than " + warnChar + " characters");
  }
  if (doc.textContent.length >= maxChar) {
    throw new Error("Body text must be fewer than " + maxChar + " characters");
  }
}

// Check if any element is a string by itself, rather than wrapped in tags
function hasString(node: React.ReactNode) {
  return React.Children.map(node, (child: React.ReactElement) => {
    if (!child.type) {
      return child;
    }
  }).length > 0;
}

export default function BodyText(props: React.PropsWithChildren<BodyTextProps>) {
  const { bodyContent, warnchar, maxchar, modifiers, blockName, ...rest } = props;
  const baseClass = "body-text";
  let passedInContent: React.ReactNode = bodyContent ? bodyContent : props.children;

  // validateCharCount(passedInContent, warnchar, maxchar);
  // checkHTML(passedInContent);
  let content: React.ReactNode = hasString(passedInContent) ? React.createElement("p", {}, passedInContent) : passedInContent;

  let bodyProps = {
    className: bem(baseClass, modifiers, blockName)
  };

  return React.createElement(
    "div",
    { ...bodyProps, ...rest },
    content
  );
}

