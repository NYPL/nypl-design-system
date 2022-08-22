import { As, chakra, Flex, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import TagSetExplore, {
  TagSetExploreProps,
  TagSetExploreDataProps,
} from "./TagSetExplore";
import TagSetFilter, {
  TagSetFilterDataProps,
  TagSetFilterProps,
} from "./TagSetFilter";

export interface BaseTagSetProps {
  /** Additional class for the componen.t */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
}
// We want either the "explore" or "filter" type props.
export type TagSetTypeProps = TagSetFilterProps | TagSetExploreProps;
// And here combine the special types with the base props.
export type TagSetProps = BaseTagSetProps & TagSetTypeProps;

// Type guard so we can make sure we have a "filter" `TagSet` variant.
export function isFilterType(type: TagSetProps["type"]): type is "filter" {
  return type === "filter";
}

/**
 * The `TagSet` component renders a group of individual tags which have two
 * variants: "explore" and "filter". The "explore" tags are meant to be used for
 * exploratory linkable elements. Whereas the "filter" tags are used to display
 * the filter values that were selected through another UI. Only "filter" tags
 * can be dismissible.
 */
export const TagSet = chakra<As<TagSetProps>, TagSetProps>(
  forwardRef<HTMLDivElement, TagSetProps>((props: TagSetProps, ref?) => {
    const {
      className,
      id,
      isDismissible = false,
      onClick,
      tagSetData = [],
      type = "filter",
      ...rest
    } = props;
    const styles = useStyleConfig("TagSet", {});

    // if isDissible and type="explore":
    // NYPL Reservoir TagSet: The `isDismissible` prop will be ignored
    // when the `type` prop is set to "explore."

    // if onclick and filter:
    // NYPL Reservoir TagSet: The `onClick` prop will be ignored when the
    // `type` prop is set to "explore."

    // if explore and labels are strings:
    // NYPL Reservoir TagSet: Explore tags require all `label` props to be strings.
    // if filter and labels are jsx:
    // NYPL Reservoir TagSet: Explore tags require all `label` props to be strings.

    return (
      <Flex ref={ref} __css={styles} {...rest}>
        {!isFilterType(type) && (
          <TagSetExplore
            type={type}
            tagSetData={tagSetData as TagSetExploreDataProps[]}
          />
        )}
        {isFilterType(type) && (
          <TagSetFilter
            type={type}
            isDismissible={isDismissible}
            onClick={onClick}
            tagSetData={tagSetData as TagSetFilterDataProps[]}
          />
        )}
      </Flex>
    );
  })
);

export default TagSet;
