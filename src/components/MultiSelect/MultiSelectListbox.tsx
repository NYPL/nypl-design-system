import React, { forwardRef } from "react";
import { chakra } from "@chakra-ui/react";

import { MultiSelectItem, MultiSelectProps } from "./MultiSelect";

type MultiSelectListboxProps = Omit<MultiSelectProps, "onChange"> & {
  onChange: (selectedItem: MultiSelectItem, id: string) => void;
};

/** MultiSelectListbox renders a non-hierarchical list of checkbox options for the `type="listbox". It leverager downshift-js for accessiblity. */
export const MultiSelectListbox = chakra(
  forwardRef<HTMLElement, React.PropsWithChildren<MultiSelectListboxProps>>(
    () => {}
  ),
  // Pass all custom props to Chakra and override, for width prop.
  { shouldForwardProp: () => true }
);

export default MultiSelectListbox;
