import React from '../../node_modules/react';
/**
 * DS internal helper hook for the Tabs component to scroll
 * the selected tab into view using useEffect and querySelector.
 *
 * Returns a ref for the TabList component.
 */
export declare const useScrollTabIntoView: (index: number) => React.MutableRefObject<HTMLDivElement>;
export default useScrollTabIntoView;
