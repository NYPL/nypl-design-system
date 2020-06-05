import * as React from "react";
import { EditionDetails } from "../EditionCard/EditionCard";
export interface SearchResultItemProps {
    id: string;
    resultIndex: number;
    modifiers?: [];
    blockName?: string;
    headingContent: JSX.Element;
    subtitleContent: JSX.Element;
    authorLinkElement: JSX.Element;
    editionInfo: EditionDetails;
    editionsLinkElement: JSX.Element;
}
/**
 *  SearchResultItem component that displays information for a work on a search results page.
 */
export default function SearchResultItem(
    props: React.PropsWithChildren<SearchResultItemProps>
): JSX.Element;
