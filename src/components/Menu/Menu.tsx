import {
  chakra,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  //   MenuItemOption,
  //   MenuGroup,
  //   MenuOptionGroup,
  MenuDivider,
  useMultiStyleConfig,
  //   Box,
} from "@chakra-ui/react";
import Icon, { IconNames } from "../Icons/Icon";
import Image from "../Image/Image";
import Text from "../Text/Text";
import React, { forwardRef } from "react";
import { SectionTypes } from "../../helpers/types";

export interface MenuProps {
  /** Optional CSS class name that will be added to the component's parent element. */
  className?: string;
  /** Optional string used to identify and highlight an item.  The value should match the id associated with one of the items.*/
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

interface ActionItem {
  type: "action";
  label: string;
  id: string;
  media?: IconNames | typeof Image | null;
  onClick: () => void;
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
      });

      // const renderMedia = (media) => {
      //   if (typeof media === ) {
      //     return <Icon name={media} size="xsmall" />;
      //   } else if (media.type === "image") {
      //     return (
      //       <Image
      //         src={media.src}
      //         sx={{ width: "24px", height: "24px", borderRadius: "50%" }}
      //       />
      //     );
      //   }
      //   return null;
      // };

      const getButton = (showBorder, isOpen) => (
        <MenuButton
          _hover={{ bg: "ui.link.primary-05" }}
          color={showBorder ? "unset" : "ui.link.secondary"}
          padding="8px 16px"
          borderRadius="2px"
          backgroundColor={isOpen ? "ui.link.primary-05" : "unset"}
          border={showBorder ? "1px solid #BDBDBD" : "unset"}
        >
          {showLabel && (
            <>
              <span style={{ paddingRight: "8px" }}>{labelText}</span>
              <Icon
                name="arrow"
                color={showBorder ? "unset" : "ui.link.primary"}
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
            //if Divider item
            return [...lst, <MenuDivider key={item.id} />];
          }
          //const isActive = current === item.id;
          const menuItem = (
            <MenuItem
              key={item.id}
              // _hover={{
              //   fontWeight: "500",
              // }}
              __css={styles.menuItem}
              // sx={{
              //   padding: "8px 12px",
              //   ...(item.type === "group" && {
              //     ":hover": { background: "none" },
              //   }),
              //   ...(isActive && {
              //     ":focus": {},
              //   }),
              // }}
            >
              {item.type === "action" ? ( //if Action item
                <>
                  {/* {renderMedia(item.media)} */}
                  <span style={{ paddingLeft: "8px" }}>{item.label}</span>
                </>
              ) : (
                // If Group item
                <>
                  <Text
                    sx={{
                      paddingLeft: "8px",
                      fontWeight: "500",
                      margin: "0px",
                    }}
                  >
                    {item.label}
                  </Text>
                </>
              )}
            </MenuItem>
          );

          return item.type === "group"
            ? [...lst, menuItem, ...getMenuElements(item.children, current)]
            : [...lst, menuItem];
        }, []);

      return (
        <ChakraMenu id={id} {...rest}>
          {({ isOpen }) => (
            <>
              {getButton(showBorder, isOpen)}
              <MenuList __css={styles} sx={{ borderRadius: "2px" }}>
                {getMenuElements(listItemsData, currentItem)}
              </MenuList>
            </>
          )}
        </ChakraMenu>
      );
    }
  )
);
export default Menu;
