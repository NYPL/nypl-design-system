import { Tab, TabList, TabPanels, TabPanel, ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
export interface TabsDataProps {
    label: string;
    content: string | React.ReactNode;
}
export interface TabsProps {
    /** The index of the tab to display on the initial render. */
    defaultIndex?: number;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** The callback function invoked after every tab change event. The argument passed to the callback is the index of the tab just selected. */
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
export declare const Tabs: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<TabsProps> & React.RefAttributes<HTMLDivElement>>, React.PropsWithChildren<TabsProps>>;
export { TabList, Tab, TabPanels, TabPanel };
export default Tabs;
