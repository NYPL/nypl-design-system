import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React from "react";

import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/Icon";

export interface TagSetExploreDataProps {
  iconName?: IconNames;
  label: JSX.Element;
}
export interface TagSetExploreProps {
  /** Whether the tags should be removable. */
  isDismissible?: never;
  onClick?: never;
  tagSetData: TagSetExploreDataProps[];
  /** the type of tagset */
  type: "explore";
}

export const TagSetExplore = chakra((props: TagSetExploreProps) => {
  const { tagSetData = [] } = props;
  const styles = useStyleConfig("TagSetExplore");

  return (
    <>
      {tagSetData.map((tagSet: TagSetExploreDataProps, key: number) => (
        <Box id={`ts-explore-${key}`} key={key} __css={styles}>
          {tagSet.iconName ? (
            <Icon align="left" name={tagSet.iconName} size="small" />
          ) : null}
          <span>{tagSet.label}</span>
        </Box>
      ))}
    </>
  );
});

export default TagSetExplore;
