/// <reference types="react" />
import { IconNames } from "../Icons/Icon";
export interface TagSetExploreDataProps {
    /** The name of the SVG `Icon` to render before the tag label. */
    iconName?: IconNames;
    /** The content to display; should be a link-type component. */
    label: JSX.Element;
}
export interface TagSetExploreProps {
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Whether the tags should be removable. This prop is not used in the "explore" variant. */
    isDismissible?: never;
    /** The function to perform when a tag is clicked when `isDismissible` is
     * true.  This prop is not used in the "explore" variant.*/
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
export declare const TagSetExplore: import("@chakra-ui/react").ChakraComponent<(props: TagSetExploreProps) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
export default TagSetExplore;
