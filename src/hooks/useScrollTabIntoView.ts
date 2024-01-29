import React, { useEffect, useRef } from "react";

/**
 * DS internal helper hook for the Tabs component to scroll
 * the selected tab into view using useEffect and querySelector.
 *
 * Returns a ref for the TabList component.
 */
export const useScrollTabIntoView = (index: number) => {
  const tablistRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const selectedTab = tablistRef?.current?.querySelector(
      "[role=tab][aria-selected=true]"
    );
    // scroll only horizontally
    selectedTab?.scrollIntoView({ block: "nearest" });
  }, [index]);

  return tablistRef;
};

export default useScrollTabIntoView;
