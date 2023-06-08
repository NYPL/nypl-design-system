import React from "react";
import { MultiSelectProps } from "./MultiSelect";
export declare const MultiSelectDialog: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<Omit<MultiSelectProps, "onChange"> & {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default MultiSelectDialog;
