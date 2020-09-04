/* MC-25 Search Results Item */
import * as React from "react";
import bem from "../../utils/bem";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";

export interface SearchResultItemProps {
    authorLinkElement: JSX.Element;
    blockName?: string;
    card: JSX.Element;
    /** className that appears in addition to "search-result-item" */
    className?: string;
    editionsLinkElement: JSX.Element;
    headingContent: JSX.Element;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    modifiers?: [];
    resultIndex: number;
    subtitleContent: JSX.Element;
}
/**
 *  SearchResultItem component that displays information for a work on a search results page.
 */
export default function SearchResultItem(
    props: React.PropsWithChildren<SearchResultItemProps>
) {
    const {
        authorLinkElement,
        blockName,
        card,
        className,
        editionsLinkElement,
        headingContent,
        id,
        modifiers,
        resultIndex,
        subtitleContent,
    } = props;
    const baseClass = "search-result-item";
    const HeadingContent = headingContent;

    return (
        <div className={bem(baseClass, modifiers, blockName, [className])}>
            <Heading
                id={id}
                level={2}
                blockName={blockName ? blockName : baseClass}
            >
                {HeadingContent}
            </Heading>
            <div className={bem("subtitle", [], baseClass)}>
                {subtitleContent}
            </div>
            <div className={bem("author", [], baseClass)}>
                {authorLinkElement}
            </div>
            {card}
            <div className={bem("all-editions", [], baseClass)}>
                {editionsLinkElement}
            </div>
        </div>
    );
}
