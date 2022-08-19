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
  /** Additional class for the component */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}
export type TagSetTypeProps = TagSetFilterProps | TagSetExploreProps;
export type TagSetProps = BaseTagSetProps & TagSetTypeProps;

export function isFilterType(type: TagSetProps["type"]): type is "filter" {
  return type === "filter";
}

/**
 * The `TagSet` component
 */
export const TagSet = chakra<As<TagSetProps>, TagSetProps>(
  forwardRef<HTMLDivElement, TagSetProps>((props: TagSetProps, ref?) => {
    const {
      isDismissible = false,
      onClick,
      tagSetData = [],
      type = "filter",
      ...rest
    } = props;
    const styles = useStyleConfig("TagSet", {});

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

// export const TestTag = () => {
//   return (
//     <TagSet
//       isDismissible
//       tagSetData={[
//         {
//           iconName: "search",
//           label: "Search",
//         },
//         {
//           iconName: "search",
//           label: "Search",
//         },
//       ]}
//       type="filter"
//       onClick={(tagLabel: string) => console.log(tagLabel)}
//     />
//   );
// };

export default TagSet;
