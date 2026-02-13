import {
  Box,
  BoxProps,
  chakra,
  useColorModeValue,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import { IconNames } from "../Icons/Icon";
import { TooltipWrapper } from "./TooltipWrapper";
import { messageVariantsArray } from "../../theme/sharedTypes";

export type TagSemanticVariants = typeof messageVariantsArray[number];

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

export interface TagSetFilterProps extends Omit<BoxProps, "onClick"> {
  /** Whether the tags should be removable. */
  isDismissible?: boolean;
  /** The function to perform when a tag is clicked when `isDismissible` is true. */
  onClick?: (tagSet: TagSetFilterDataProps) => void;
  /** Semantic type of the tags. */
  semanticVariant?: TagSemanticVariants | "default";
  /** The array of data to display as tags. */
  tagSetData: TagSetFilterDataProps[];
  /** The `TagSet` variant to render; "filter" by default. */
  variant?: "filter";
}

/**
 * The "filter" `TagSet` variant will display tags that can be removed when
 * `isDismissible` is true and they are clicked.
 */
export const TagSetFilter: React.FC<TagSetFilterProps> = chakra(
  (props: TagSetFilterProps) => {
    const {
      id,
      isDismissible = false,
      onClick,
      semanticVariant = "default",
      tagSetData = [],
    } = props;
    const styles = useMultiStyleConfig("TagSetFilter", {
      isDismissible,
      semanticVariant,
    });
    const finalOnClick = (tagSet: TagSetFilterDataProps) => {
      // Return the entire tagSet object to the consuming app.
      onClick && onClick(tagSet);
    };

    // Set element colors based on color mode
    const dismissButtonColor = useColorModeValue(
      "ui.gray.x-dark",
      "dark.ui.typography.body"
    );
    const iconColor = useColorModeValue(
      "ui.typography.body",
      "dark.ui.typography.body"
    );

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
              {isDismissible || onClick ? (
                <Button
                  aria-label={`${tagSet.label}, click to remove filter`}
                  data-testid="ds-tagSetFilter-tags"
                  id={`${tagSet.id}-tagSetFilter-${key}`}
                  onClick={() => finalOnClick(tagSet)}
                  sx={styles.base}
                >
                  {!isDismissible && tagSet.iconName ? (
                    <Icon
                      align="left"
                      color={iconColor}
                      data-testid="ds-tagSetFilter-icon"
                      name={tagSet.iconName}
                      size="small"
                    />
                  ) : null}
                  <span>{tagSet.label}</span>
                  <Icon
                    data-testid="ds-tagSetFilter-close-icon"
                    align="right"
                    name="close"
                    size="small"
                    color={dismissButtonColor}
                    width="12px"
                  />
                </Button>
              ) : (
                <Box
                  data-testid="ds-tagSetFilter-tags"
                  id={`${tagSet.id}-tagSetFilter-${key}`}
                  sx={{
                    ...styles.base,
                    fontWeight: "regular",
                  }}
                >
                  {tagSet.iconName ? (
                    <Icon
                      align="left"
                      color={iconColor}
                      data-testid="ds-tagSetFilter-icon"
                      name={tagSet.iconName}
                      size="small"
                    />
                  ) : null}

                  <span>{tagSet.label}</span>
                </Box>
              )}
            </TooltipWrapper>
          );
        })}

        {tagSetData.length > 1 && isDismissible ? (
          <Button
            data-testid="ds-tagSetFilter-clear-all"
            id={`${id ? `${id}-` : ""}tagSetFilter-clear-all`}
            onClick={() =>
              finalOnClick({ id: "clear-filters", label: "Clear filters" })
            }
            size="small"
            variant="text"
          >
            Clear filters
          </Button>
        ) : null}
      </>
    );
  }
);

export default TagSetFilter;
