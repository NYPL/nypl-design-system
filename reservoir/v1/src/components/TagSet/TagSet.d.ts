import React from "react";
import { TagSetExploreProps } from "./TagSetExplore";
import { TagSetFilterProps } from "./TagSetFilter";
export interface BaseTagSetProps {
    /** Additional class for the component. */
    className?: string;
}
export type TagSetTypeProps = TagSetFilterProps | TagSetExploreProps;
export type TagSetProps = BaseTagSetProps & TagSetTypeProps;
export declare function isFilterType(type: TagSetProps["type"]): type is "filter";
/**
 * The `TagSet` component renders a group of individual tags which have two
 * variants: "explore" and "filter". The "explore" tags are meant to be used for
 * exploratory linkable elements, whereas the "filter" tags are used to display
 * the filter values that were selected through another UI. Only "filter" tags
 * can be dismissible.
 *
 * The width of a single tag will never be greater than 200px. If necessary, a
 * tag’s label text will be truncated to keep a tag’s width at or below 200px.
 * The full label text will be automatically revealed when the tag is hovered
 * with a DS `Tooltip` component.
 */
export declare const TagSet: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<TagSetProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default TagSet;
