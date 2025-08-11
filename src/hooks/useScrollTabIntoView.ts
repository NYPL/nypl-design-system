import React, { useEffect, useRef } from "react";

/**
 * DS internal helper hook for the Tabs component to scroll
 * the selected tab into view using useEffect and querySelector.
 *
 * Returns a ref for the TabList component.
 */
export const useScrollTabIntoView = (index: number) => {
  const tablistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tablistRef?.current;
    const selectedTab = container?.querySelector(
      "[role=tab][aria-selected=true]"
    );

    if (!selectedTab) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = selectedTab.getBoundingClientRect();

    const isTabPartiallyHiddenLeft = tabRect.left < containerRect.left;
    const isTabPartiallyHiddenRight = tabRect.right > containerRect.right;

    if (isTabPartiallyHiddenLeft) {
      container.scrollLeft -= containerRect.left - tabRect.left;
    } else if (isTabPartiallyHiddenRight) {
      container.scrollLeft += tabRect.right - containerRect.right;
    }
  }, [index]);

  return tablistRef;
};

export default useScrollTabIntoView;
