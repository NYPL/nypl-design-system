import Heading from "../components/Heading/Heading";

/**
 * DS internal helper hook to render a default `h2` heading element if the
 * passed title is a string. Otherwise, it will return the title as is if it
 * is a JSX element.
 */
function useDSHeading({
  title = "",
  id = "",
  customDefaultHeading,
}: {
  title: string | JSX.Element;
  id: string;
  customDefaultHeading?: string | JSX.Element;
}) {
  const headingID = id ? `${id}-heading` : "";
  let updatedTitle = null;

  if (title) {
    if (typeof title === "string") {
      // Use the DS default h2 heading element if the title is a string.
      updatedTitle = <Heading id={headingID}>{title}</Heading>;
    } else if (typeof title === "object") {
      // Use the passed JSX element if it is passed.
      updatedTitle = title;
    }
  } else if (customDefaultHeading) {
    // If no title is passed and the component has a custom default heading,
    // use that instead of the DS default h2 heading element.
    updatedTitle = customDefaultHeading;
  }

  return updatedTitle;
}

export default useDSHeading;
