import React from "../../node_modules/react";
/**
 * The `useScrollFadeStyles` hook manages the visibility of a right-side fade effect
 * based on horizontal scrolling. It tracks scroll events and shows the fade effect
 * when scrolling to the left and more content is available to the right, hiding it
 * when scrolling right or when at the right edge of the scrollable container.
 */
export default function useScrollFadeStyles(): {
  scrollableRef: React.MutableRefObject<any>;
  showRightFade: boolean;
};
