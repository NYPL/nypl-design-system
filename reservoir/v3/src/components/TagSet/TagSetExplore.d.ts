import React from '../../../node_modules/react';
import { IconNames } from "../Icons/Icon";
export interface TagSetExploreDataProps {
    /** The name of the SVG `Icon` to render before the tag label. */
    iconName?: IconNames;
    /** The ID of the tag. */
    id?: string;
    /** The content to display; should be a link-type component. */
    label: JSX.Element;
}
export interface TagSetExploreProps {
    /** Whether the tags should be removable. This prop is not used in the
     * "explore" variant. */
    isDismissible?: never;
    /** The function to perform when the Clear All button is clicked. This prop
     * is not used in the "explore" variant. */
    onClear?: never;
    /** The function to perform when a tag is clicked when `isDismissible` is
     * true.  This prop is not used in the "explore" variant. */
    onClick?: never;
    /** The array of data to display as tags. */
    tagSetData: TagSetExploreDataProps[];
    /** The `TagSet` variant to render; "filter" by default. */
    type: "explore";
}
/**
 * The "explore" `TagSet` variant will always display the tags passed as data.
 * The `label` property in the `tagSetData` prop should be set to a link-type
 * JSX component for linking to specific content.
 */
export declare const TagSetExplore: React.FC<TagSetExploreProps>;
export default TagSetExplore;
