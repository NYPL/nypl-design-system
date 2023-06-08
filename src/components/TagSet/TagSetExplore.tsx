import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React from "react";

import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/Icon";
import { TooltipWrapper } from "./TooltipWrapper";

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
export const TagSetExplore = chakra((props: TagSetExploreProps) => {
  const { id, tagSetData = [] } = props;
  const styles = useStyleConfig("TagSetExplore");

  return (
    <>
      {tagSetData.map((tagSet: TagSetExploreDataProps, key: number) => {
        if (typeof tagSet.label === "string") {
          console.warn(
            "NYPL Reservoir TagSet: Explore tags require all `label` props to be React components."
          );
        }

        return (
          <TooltipWrapper key={key} label={tagSet.label}>
            <Box
              data-testid="explore-tags"
              id={`ts-explore-${id}-${key}`}
              __css={styles}
            >
              {tagSet.iconName ? (
                <Icon
                  align="left"
                  data-testid="ts-icon"
                  name={tagSet.iconName}
                  size="small"
                />
              ) : null}
              <span>{tagSet.label}</span>
            </Box>
          </TooltipWrapper>
        );
      })}
    </>
  );
});

export default TagSetExplore;
