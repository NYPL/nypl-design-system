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
  //   Box,
} from "@chakra-ui/react";
import Text from "../Text/Text";
import Icon from "../Icons/Icon";
import Image from "../Image/Image";
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
  media?: React.ReactElement<typeof Icon | typeof Image> | null;
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
  forwardRef<HTMLDivElement, MenuProps>((props?) => {
    const {
      className,
      id,
      labelText,
      listAlignment,
      showBorder = true,
      showLabel = true,
      listItemsData,
      ...rest
    } = props;

    const getButton = (showBorder: boolean) => (
      <MenuButton
        padding="8px 16px"
        borderRadius="2px"
        border={showBorder ? "1px solid #BDBDBD" : "unset"}
      >
        {showLabel && (
          <>
            <Text>{labelText}</Text>
            <Icon name="arrow" size="xsmall" />
          </>
        )}
        {!showLabel && <Icon name="arrow" size="xsmall" />}
      </MenuButton>
    );

    const getMenuElements = (data: ListItemsData[] = []) =>
      data.map((item) =>
        item.type === "divider" ? (
          <MenuDivider key={item.id} />
        ) : (
          <MenuItem key={item.id}>
            {item.type === "group" ? (
              item.label
            ) : (
              <>
                {item.media}
                {item.label}
              </>
            )}
          </MenuItem>
        )
      );

    return (
      <ChakraMenu id={id} {...rest}>
        {() => (
          <>
            {getButton(showBorder)}
            <MenuList>{getMenuElements(listItemsData)}</MenuList>
          </>
        )}
      </ChakraMenu>
    );
  })
);

export default Menu;
