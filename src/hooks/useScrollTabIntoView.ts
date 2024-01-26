import React, { useEffect, useRef } from "react";

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
