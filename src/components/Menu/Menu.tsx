import {
  chakra,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  //   MenuItemOption,
  MenuGroup,
  //   MenuOptionGroup,
  MenuDivider,
  useMultiStyleConfig,
  Flex,
  Box,
} from "@chakra-ui/react";
import Icon, { IconNames } from "../Icons/Icon";
import Image from "../Image/Image";
import React, { forwardRef } from "react";
import { SectionTypes } from "../../helpers/types";

export interface MenuProps {
  /** Optional CSS class name that will be added to the component's parent element. */
  className?: string;
  /** Optional string used to identify and highlight an item. The value should match the id associated with one of the items.*/
  currentItem?: string;
  /**   Used to set the highlight color for the current item.  The values correspond with the NYPL section colors */
  highlightColor?: SectionTypes;
  /** Optional ID string that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Required string used to set the label text for the button element. If showLabel is false,
   * this value is instead used to set an aria-label attribute on the button.  The labelText prop is
   * required for accessibility compliance. */
  labelText: string;
  /** Optional string used to set the placement of the list element. */
  listAlignment?: "left" | "right";
  /** Required array of data objects used to populate the items rendered in the list.
   * The order of the array elements will determine the order of the items in the list.*/
  listItemsData: ListItemsData[];
  /** Optional boolean value used to toggle the visibility of a border around the button element.  */
  showBorder?: boolean;
  /** Optional boolean value used to toggle the visibility of the label text for the button element.
   * If false, this value will be used to set an aria-label attribute on the button element.  */
  showLabel?: boolean;
}

interface Media {
  type: string;
  name?: IconNames;
  src?: string;
  alt?: string;
}
interface ActionItem {
  type: "action";
  label: string;
  id: string;
  media?: Media | null;
  onClick: () => void;
  selected: boolean;
}

interface GroupItem {
  type: "group";
  id: string;
  label: string;
  children: ListItemsData[];
}

interface DividerItem {
  type: "divider";
  id: string;
}

type ListItemsData = ActionItem | GroupItem | DividerItem;

const Menu = chakra(
  forwardRef<HTMLDivElement, MenuProps>(
    ({
      className,
      id,
      labelText,
      listAlignment,
      currentItem,
      highlightColor = "blogs",
      showBorder = true,
      showLabel = true,
      listItemsData,
      ...rest
    }) => {
      const styles = useMultiStyleConfig("Menu", {
        highlightColor,
        showBorder,
      });

      const renderMedia = (media: Media | null) => {
        if (media) {
          if (media.type === "icon") {
            return <Icon name={media.name} size="small" />;
          } else {
            return (
              <Image
                src={media.src}
                alt={media.alt}
                size="xxxsmall"
                sx={{ borderRadius: "24px" }}
              />
            );
          }
        }
        return null;
      };

      const getButton = (isOpen) => (
        <MenuButton
          sx={styles.menuButton}
          backgroundColor={isOpen ? "ui.link.primary-05 !important" : "unset"}
        >
          {showLabel && (
            <>
              <span style={{ paddingRight: "8px" }}>{labelText}</span>
              <Icon
                name="arrow"
                iconRotation={isOpen ? "rotate180" : "rotate0"}
                size="xsmall"
              />
            </>
          )}
          {!showLabel && <Icon name="arrow" size="xsmall" />}
        </MenuButton>
      );

      const getMenuElements = (data: ListItemsData[] = [], current) =>
        data.reduce((lst, item) => {
          if (item.type === "divider") {
            return [
              ...lst,
              <MenuDivider sx={styles.dividerItem} key={item.id} />,
            ];
          }
          if (item.type === "group") {
            return [
              ...lst,
              <MenuGroup
                key={item.id}
                sx={{ ...styles.groupItem }}
                title={item.label}
              />,
              ...getMenuElements(item.children, current),
            ];
          }
          //const isActive = current === item.id;
          const menuItem = (
            <MenuItem
              key={item.id}
              isFocusable={true}
              onClick={item.onClick}
              sx={{
                ...styles.actionItem,
                ...{
                  // ...(isActive && {
                  //   selected: true,
                  //   bg: "green",
                  // }),
                },
              }}
            >
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {renderMedia(item.media)}
                  <span>{item.label}</span>
                </div>
              </>
            </MenuItem>
          );

          return [...lst, menuItem];
        }, []);

      return (
        <Box sx={styles}>
          <ChakraMenu id={id} autoSelect={false} {...rest}>
            {({ isOpen }) => (
              <Flex
                flexDirection={
                  listAlignment === "right" ? "row-reverse" : "row"
                }
              >
                {getButton(isOpen)}
                <MenuList sx={styles.menuList}>
                  {getMenuElements(listItemsData, currentItem)}
                </MenuList>
              </Flex>
            )}
          </ChakraMenu>
        </Box>
      );
    }
  )
);
export default Menu;
