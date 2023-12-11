import React from "react";

import Heading from "../components/Heading/Heading";

interface UseDSHeadingProps {
  title: string | JSX.Element;
  id?: string;
  customDefaultHeading?: string | JSX.Element;
  additionalStyles?: { [key: string]: any };
}

const headingList = ["h1", "h2", "h3", "h4", "h5", "h6"];

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
  let updatedTitle: null | JSX.Element | string = null;

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
      if (title.type === Heading) {
        updatedTitle = additionalStyles
          ? React.cloneElement(title, { __css: additionalStyles })
          : title;
      } else if (headingList.includes(title.type)) {
        // If the user passed in an HTML heading element, just use that.
        // They will not get any DS styling.
        updatedTitle = title;
        console.warn(
          "NYPL Reservoir useDSHeading: An HTML heading element was passed " +
            "for the `title` or `headingText` prop in a Reservoir component. " +
            "The heading will render without DS-specific styling."
        );
      } else {
        console.warn(
          "NYPL Reservoir useDSHeading: An unsupported heading element was " +
            "passed to the `title` or `headingText` prop in a Reservoir " +
            "component, so that component's title will not be rendered. " +
            "Instead, a DS `Heading` component or an HTML heading element " +
            "should be passed."
        );
      }
    }
  } else if (customDefaultHeading) {
    // If no title is passed and the component has a custom default heading,
    // use that instead of the DS default h2 heading element.
    updatedTitle = customDefaultHeading;
  }

  return updatedTitle;
}

export default useDSHeading;
