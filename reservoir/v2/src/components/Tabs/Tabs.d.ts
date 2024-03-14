import { Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";
export interface TabsDataProps {
    label: string;
    content: string | React.ReactNode;
}
export interface TabsProps {
    /** The index of the tab to display for controlled situations. */
    defaultIndex?: number;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** The callback function invoked on every tab change event. */
    onChange?: (index: number) => any;
    /** Array of data to display */
    tabsData?: TabsDataProps[];
    /** Render a hash in the url for each tab. Only available when data is
     * passed through the `data` props. */
    useHash?: boolean;
}
/**
 * Renders Chakra's `Tab` component with specific variants, props,
 * and controlled styling.
 */
export declare const Tabs: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<TabsProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export { TabList, Tab, TabPanels, TabPanel };
export default Tabs;
