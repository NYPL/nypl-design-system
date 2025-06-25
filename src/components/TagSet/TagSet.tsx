import {
  BoxProps,
  chakra,
  ChakraComponent,
  Flex,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import TagSetExplore, {
  TagSetExploreProps,
  TagSetExploreDataProps,
} from "./TagSetExplore";
import TagSetFilter, {
  TagSetFilterDataProps,
  TagSetFilterProps,
} from "./TagSetFilter";

export interface BaseTagSetProps extends BoxProps {}

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
 * exploratory linkable elements, whereas the "filter" tags are used to display
 * the filter values that were selected through another UI. Only "filter" tags
 * can be dismissible.
 *
 * The width of a single tag will never be greater than 200px. If necessary, a
 * tag’s label text will be truncated to keep a tag’s width at or below 200px.
 * The full label text will be automatically revealed when the tag is hovered
 * with a DS `Tooltip` component.
 */
export const TagSet: ChakraComponent<
  React.ForwardRefExoticComponent<
    TagSetProps & React.RefAttributes<HTMLDivElement>
  >,
  TagSetProps
> = chakra(
  forwardRef<HTMLDivElement, TagSetProps>((props: TagSetProps, ref?) => {
    const {
      id,
      isDismissible = false,
      onClick,
      tagSetData = [],
      type = "filter",
      ...rest
    } = props;
    const styles = useStyleConfig("TagSet", {});

    if (!isFilterType(type)) {
      if (isDismissible) {
        console.warn(
          "NYPL Reservoir TagSet: The `isDismissible` prop will be ignored when the `type` prop is set to 'explore'."
        );
      }
      if (onClick) {
        console.warn(
          "NYPL Reservoir TagSet: The `onClick` prop will be ignored when the `type` prop is set to 'explore'."
        );
      }
    }

    return (
      <Flex data-testid="ds-tagSet" id={id} ref={ref} __css={styles} {...rest}>
        {!isFilterType(type) && (
          <TagSetExplore tagSetData={tagSetData as TagSetExploreDataProps[]} />
        )}
        {isFilterType(type) && (
          <TagSetFilter
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
