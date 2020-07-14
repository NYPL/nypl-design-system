/* MC-25 Search Results Item */
import * as React from "react";
import bem from "../../utils/bem";
import Heading from "../Heading/Heading";
import withOneChild from "../../helpers/hoc/WithOneChild";
import Card from "../Card/Card";

export interface SearchResultItemProps {
    /** Additional attributes passed to the form */
    attributes?: {};
    authorLinkElement: JSX.Element;
    blockName?: string;
    card: JSX.Element;
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
        id,
        resultIndex,
        modifiers,
        blockName,
        headingContent,
        subtitleContent,
        authorLinkElement,
        card,
        editionsLinkElement,
    } = props;
    const baseClass = "search-result-item";
    const HeadingContent = headingContent && withOneChild(headingContent);
    // TODO: Decide whether this needs to be in DS, and write/find utilities for us to count text within child components
    // if (headingContent.innerText > 80) {
    //   throw new Error("Section Title (h2) Text must be fewer than 80 characters");
    // } else if (headingContent.textContent > 60) {
    //   console.warn("Section Title (h2) Text should be fewer than 60 characters");
    // }

    return (
        <div className={bem(baseClass, modifiers, blockName)}>
            <Heading
                id={id}
                level={2}
                blockName={blockName ? blockName : baseClass}
            >
                <HeadingContent />
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
