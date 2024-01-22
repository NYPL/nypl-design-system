// import { chakra, Menu as ChakraMenu } from "@chakra-ui/react";
// import Icon from "../Icons/Icon";
// import React, { forwardRef } from "react";

// export interface MenuProps {
//   /** Optional CSS class name that will be added to the component's parent element. */
//   className?: string;
//   /** Optional ID string that other components can cross reference for accessibility purposes. */
//   id?: string;
//   /** Required string used to set the label text for the button element. If showLabel is false,
//    * this value is instead used to set an aria-label attribute on the button.  The labelText prop is
//    * required for accessibility compliance. */
//   labelText: string;
//   /** Optional string used to set the placement of the list element. */
//   listAlignment?: "left" | "right";
//   /** Required array of data objects used to populate the items rendered in the list.
//    * The order of the array elements will determine the order of the items in the list.*/
//   listItemsData: ListItemsData[];
//   /** Optional boolean value used to toggle the visibility of a border around the button element.  */
//   showBorder?: boolean;
//   /** Optional boolean value used to toggle the visibility of the label text for the button element.
//    * If false, this value will be used to set an aria-label attribute on the button element.  */
//   showLabel?: boolean;
// }

// interface ActionItem {
//   type: "action";
//   label: string;
//   //media?: Icon | Image | null;
//   onClick: () => void;
// }

// interface GroupItem {
//   type: "group";
//   label: string;
//   children: ListItemsData[];
// }

// interface DividerItem {
//   type: "divider";
// }

// type ListItemsData = ActionItem | GroupItem | DividerItem;

// export const Menu = chakra(
//   forwardRef<HTMLDivElement, MenuProps>((props, ref?) => {
//     const {
//       className,
//       id,
//       labelText,
//       listAlignment,
//       //showBorder = true,
//       //showLabel = true,
//       listItemsData,
//       ...rest
//     } = props;
//     return (
//       <ChakraMenu id={id}>
//         {/* {getMenuElements(listItemsData, id, showBorder, showLabel)} */}
//       </ChakraMenu>
//     );
//   })
// );
