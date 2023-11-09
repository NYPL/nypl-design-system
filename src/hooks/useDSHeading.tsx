import React from "react";

import Heading from "../components/Heading/Heading";

interface UseDSHeadingProps {
  title: string | JSX.Element;
  id?: string;
  customDefaultHeading?: string | JSX.Element;
  additionalStyles?: { [key: string]: any };
}

/**
 * DS internal helper hook to render a default `h2` heading element if the
 * passed title is a string. Otherwise, it will return the title as is if it
 * is a JSX element.
 */
function useDSHeading({
  title = "",
  id = "",
  customDefaultHeading,
  additionalStyles,
}: UseDSHeadingProps) {
  const headingID = id ? `${id}-heading` : undefined;
  let updatedTitle = null;

  if (title) {
    if (typeof title === "string") {
      // Use the DS default h2 heading element if the title is a string.
      updatedTitle = (
        <Heading id={headingID} __css={additionalStyles}>
          {title}
        </Heading>
      );
    } else if (typeof title === "object") {
      // Use the passed JSX element if it is passed. If additional styles are
      // passed, clone the element and add the styles to the cloned element.
      // This is to account for base default styles for a component that may
      // be ignored in a custom heading.
      updatedTitle = additionalStyles
        ? React.cloneElement(title, { __css: additionalStyles })
        : title;
    }
  } else if (customDefaultHeading) {
    // If no title is passed and the component has a custom default heading,
    // use that instead of the DS default h2 heading element.
    updatedTitle = customDefaultHeading;
  }

  return updatedTitle;
}

export default useDSHeading;
