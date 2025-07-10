import { useId } from "react";

import { sanitizeString } from "../utils/utils";

/**
 * This function is used to generate a unique ID for the component.
 * It uses the `useId` hook from React to generate a unique ID and
 * sanitizes it using the `sanitizeString` function.
 */
export function useSafeId(userId?: string) {
  const generatedId = useId();
  return userId ?? sanitizeString(generatedId);
}
