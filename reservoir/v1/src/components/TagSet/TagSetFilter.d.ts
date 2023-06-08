import { IconNames } from "../Icons/Icon";
export interface TagSetFilterDataProps {
    /** The name of the SVG `Icon` to render before the tag label. */
    iconName?: IconNames;
    /** The string label to display. */
    label: string;
}
export interface TagSetFilterProps {
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Whether the tags should be removable. */
    isDismissible?: boolean;
    /** The function to perform when a tag is clicked when `isDismissible` is true. */
    onClick?: (tagLabel: string) => void;
    /** The array of data to display as tags. */
    tagSetData: TagSetFilterDataProps[];
    /** The `TagSet` variant to render; "filter" by default. */
    type: "filter";
}
/**
 * The "filter" `TagSet` variant will display tags that can be removed when
 * `isDismissible` is true and they are clicked.
 */
export declare const TagSetFilter: import("@chakra-ui/react").ChakraComponent<(props: TagSetFilterProps) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
export default TagSetFilter;
