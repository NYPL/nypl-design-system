import { chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { useEffect } from "react";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";
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
export const TagSetFilter = chakra((props: TagSetFilterProps) => {
  const { id, isDismissible = false, onClick, tagSetData = [] } = props;
  const [filters, setFilters] =
    React.useState<TagSetFilterDataProps[]>(tagSetData);
  const styles = useMultiStyleConfig("TagSetFilter", { isDismissible });
  const finalOnClick = (tagLabel: string) => {
    onClick && onClick(tagLabel);
  };

  // This expects that the consuming app passes in a new set of data
  // whenever the current list of tags needs to be updated.
  useEffect(() => {
    setFilters(tagSetData);
  }, [tagSetData, setFilters]);

  return (
    <>
      {filters.map((tagSet: TagSetFilterDataProps, key: number) => {
        if (typeof filters[0].label !== "string") {
          console.warn(
            "NYPL Reservoir TagSet: Filter tags require all `label` props to be strings."
          );
          return;
        }
        return (
          <Button
            data-testid="filter-tags"
            id={`ts-filter-${id}-${key}`}
            key={key}
            onClick={
              isDismissible ? () => finalOnClick(tagSet.label) : undefined
            }
            sx={styles}
          >
            {!isDismissible && tagSet.iconName ? (
              <Icon
                align="left"
                data-testid="ts-icon"
                name={tagSet.iconName}
                size="medium"
              />
            ) : null}
            <span>{tagSet.label}</span>
            {isDismissible ? (
              <Icon
                data-testid="filter-close-icon"
                align="right"
                name="close"
                size="small"
              />
            ) : null}
          </Button>
        );
      })}

      {filters.length > 0 && isDismissible ? (
        <Button
          buttonType="link"
          data-testid="filter-clear-all"
          id={`ts-filter-clear-all-${id}`}
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
