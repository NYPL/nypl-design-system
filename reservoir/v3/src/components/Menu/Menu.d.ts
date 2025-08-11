import { ChakraComponent } from "@chakra-ui/react";
import { IconNames } from "../Icons/Icon";
import React from "../../../node_modules/react";
import { SectionTypes } from "../../helpers/types";
export interface MenuProps {
  /** Optional CSS class name that will be added to the component's parent element. */
  className?: string;
  /** Optional ID string that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional string used to identify and highlight an item when the menu opens. The value should
   * match the id associated with one of the items. */
  selectedItem?: string;
  /** Optional boolean value, toggles whether the label of the menu will display the text of the selected item. labelText is required for the aria-label either way. */
  showSelectionAsLabel?: boolean;
  /** Used to set the highlight color for the current item.  The values correspond with the NYPL section colors */
  highlightColor?: SectionTypes;
  /** Required string used to set the label text for the button element. If showLabel is false,
   * this value is instead used to set an aria-label attribute on the button.  The labelText prop is
   * required for accessibility compliance. */
  labelText: string;
  /** Optional string used to set the placement of the list element. */
  listAlignment?: "left" | "right";
  /** Required array of data objects used to populate the items rendered in the list.
   * The order of the array elements will determine the order of the items in the list.*/
  listItemsData: ListItemsData[];
  /** Optional boolean value used to toggle the visibility of a border around the button element.*/
  showBorder?: boolean;
  /** Optional boolean value used to toggle the visibility of the label text for the button element.
   * If false, this value will be used to set an aria-label attribute on the button element.  */
  showLabel?: boolean;
}
/**Type for the icons/images displayed inline with menu items. */
interface Media {
  type: string;
  name?: IconNames;
  src?: string;
  alt?: string;
}
/** The three types of menu items: */
export interface ActionItem {
  type: "action";
  label: string;
  id: string;
  media?: Media | null;
  onClick: (id: string) => void;
}
export interface GroupItem {
  type: "group";
  id: string;
  label: string;
  children: ListItemsData[];
}
export interface DividerItem {
  type: "divider";
  id: string;
}
/** Menu items can be one of the three types: */
export type ListItemsData = ActionItem | GroupItem | DividerItem;
export declare const Menu: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<MenuProps> & React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<MenuProps>
>;
export default Menu;
