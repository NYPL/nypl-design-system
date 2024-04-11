import {
  chakra,
  useColorModeValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/Icon";
import { TooltipWrapper } from "./TooltipWrapper";

export interface TagSetFilterDataProps {
  /** The name of the SVG `Icon` to render before the tag label. */
  iconName?: IconNames;
  /** The ID of the tag. */
  id: string;
  /** The string label to display. */
  label: string;
  /** Any other properties the consuming app may need for app logic filtering. */
  [key: string]: string;
}

export interface TagSetFilterProps {
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Whether the tags should be removable. */
  isDismissible?: boolean;
  /** The function to perform when a tag is clicked when `isDismissible` is true. */
  onClick?: (tagSet: TagSetFilterDataProps) => void;
  /** The array of data to display as tags. */
  tagSetData: TagSetFilterDataProps[];
  /** The `TagSet` variant to render; "filter" by default. */
  type: "filter";
}

/**
 * The "filter" `TagSet` variant will display tags that can be removed when
 * `isDismissible` is true and they are clicked.
 */
export const TagSetFilter: React.FC<TagSetFilterProps> = chakra(
  (props: TagSetFilterProps) => {
    const { id, isDismissible = false, onClick, tagSetData = [] } = props;
    const styles = useMultiStyleConfig("TagSetFilter", { isDismissible });
    const finalOnClick = (tagSet: TagSetFilterDataProps) => {
      // Return the entire tagSet object to the consuming app.
      onClick && onClick(tagSet);
    };

    // Set element colors based on color mode
    const dismissButtonColor = useColorModeValue(
      "ui.gray.x-dark",
      "dark.ui.typography.body"
    );
    const iconColor = useColorModeValue("ui.black", "dark.ui.typography.body");

    return (
      <>
        {tagSetData.map((tagSet: TagSetFilterDataProps, key: number) => {
          if (typeof tagSet.label !== "string") {
            console.warn(
              "NYPL Reservoir TagSet: Filter tags require all `label` props to be strings."
            );
          }

          if (isDismissible && tagSet.iconName) {
            console.warn(
              "NYPL Reservoir TagSet: Filter tags will not render icons when `isDismissible` is set to true."
            );
          }

          return (
            <TooltipWrapper key={key} label={tagSet.label}>
              <Button
                aria-label={
                  isDismissible
                    ? `${tagSet.label}, click to remove filter`
                    : undefined
                }
                data-testid="filter-tags"
                id={`ts-filter-${tagSet.id}-${key}`}
                onClick={isDismissible ? () => finalOnClick(tagSet) : undefined}
                sx={styles.base}
              >
                {!isDismissible && tagSet.iconName ? (
                  <Icon
                    align="left"
                    color={iconColor}
                    data-testid="ts-icon"
                    name={tagSet.iconName}
                    size="small"
                  />
                ) : null}
                <span>{tagSet.label}</span>
                {isDismissible ? (
                  <Icon
                    data-testid="filter-close-icon"
                    align="right"
                    name="close"
                    size="small"
                    color={dismissButtonColor}
                    width="12px"
                  />
                ) : null}
              </Button>
            </TooltipWrapper>
          );
        })}

        {tagSetData.length > 1 && isDismissible ? (
          <Button
            buttonType="text"
            data-testid="filter-clear-all"
            id={`ts-filter-clear-all-${id}`}
            onClick={() =>
              finalOnClick({ id: "clear-filters", label: "Clear filters" })
            }
            size="small"
          >
            Clear filters
          </Button>
        ) : null}
      </>
    );
  }
);

export default TagSetFilter;
