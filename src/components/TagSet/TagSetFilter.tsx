import { chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { useEffect } from "react";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/Icon";

export interface TagSetFilterDataProps {
  iconName?: IconNames;
  label: string;
}
export interface TagSetFilterProps {
  /** Whether the tags should be removable. */
  isDismissible?: boolean;
  onClick?: (tagLabel: string) => void;
  tagSetData: TagSetFilterDataProps[];
  type: "filter";
}

export const TagSetFilter = chakra((props: TagSetFilterProps) => {
  const { isDismissible = false, onClick, tagSetData = [] } = props;
  const [filters, setFilters] =
    React.useState<TagSetFilterDataProps[]>(tagSetData);
  const styles = useMultiStyleConfig("TagSetFilter", { isDismissible });

  const finalOnClick = (tagLabel: string) => {
    onClick && onClick(tagLabel);
  };

  useEffect(() => {
    setFilters(tagSetData);
  }, [tagSetData, setFilters]);

  return (
    <>
      {filters.map((tagSet: TagSetFilterDataProps, key: number) => (
        <Button
          id={`tagset-${key}`}
          key={key}
          onClick={isDismissible ? () => finalOnClick(tagSet.label) : undefined}
          sx={styles}
        >
          {!isDismissible && tagSet.iconName ? (
            <Icon align="left" name={tagSet.iconName} size="small" />
          ) : null}
          <span>{tagSet.label}</span>
          {isDismissible ? (
            <Icon align="right" name="close" size="small" />
          ) : null}
        </Button>
      ))}

      {filters.length > 0 && isDismissible ? (
        <Button
          buttonType="link"
          id="tagset-clear-all"
          onClick={() => finalOnClick("clearFilters")}
          __css={styles.clearAll}
        >
          Clear Filters
        </Button>
      ) : null}
    </>
  );
});

export default TagSetFilter;
