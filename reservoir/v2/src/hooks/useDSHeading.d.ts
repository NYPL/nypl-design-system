/// <reference types="react" />
interface UseDSHeadingProps {
    title: string | JSX.Element;
    id?: string;
    customDefaultHeading?: string | JSX.Element;
    additionalStyles?: {
        [key: string]: any;
    };
}
/**
 * DS internal helper hook to render a default `h2` heading element if the
 * passed title is a string. Otherwise, it will return the title as is if it
 * is a JSX element.
 */
declare function useDSHeading({ title, id, customDefaultHeading, additionalStyles, }: UseDSHeadingProps): string | JSX.Element;
export default useDSHeading;
