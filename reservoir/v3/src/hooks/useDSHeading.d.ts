/// <reference types="react" />
import { HeadingProps } from "../components/Heading/Heading";
interface UseDSHeadingProps {
  title: string | JSX.Element;
  id?: string;
  customDefaultHeading?: string | JSX.Element;
  additionalStyles?: {
    [key: string]: any;
  };
  headingSize?: HeadingProps["size"];
}
/**
 * DS internal helper hook to render a default `h2` heading element if the
 * passed title is a string. Otherwise, it will return the title as is if it
 * is a JSX element.
 */
declare function useDSHeading({
  title,
  id,
  customDefaultHeading,
  additionalStyles,
  headingSize,
}: UseDSHeadingProps): string | JSX.Element;
export default useDSHeading;
