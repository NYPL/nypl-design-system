/** This data is used to populate the ComponentChangelogTable component.
 *
 * date: string (when adding new entry during development, set value as "Prerelease")
 * version: string (when adding new entry during development, set value as "Prerelease")
 * type: "Bug Fix" | "New Feature" | "Update";
 * affects: array["Accessibility" | "Documentation" | "Functionality" | "Styles"];
 * notes: array (will render as a bulleted list, add one array element for each list element)
 */
import { ChangelogData } from "../../utils/ComponentChangelogTable";

export const changelogData: ChangelogData[] = [
  {
    date: "Prerelease",
    version: "Prerelease",
    type: "Update",
    affects: ["Documentation", "Functionality", "Styles"],
    notes: ["Adds the `isDisabled` prop to `AccordionDataProps`"],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: [
      "Removes `ariaLabel` prop and instructs developers to use the native HTML attribute instead.",
      "Removes `isDarkMode` in favor of Chakra's `_dark` conditional key.",
      "Replaces positional function arguments with objects for `getIcon` and `getElementsFromData`.",
      "Extends prop definition to include Chakra's `BoxProps`",
      "Renames `accordionType` to `variant`.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes the internal `accordion-icon` class in the Icon component.",
      "Adds `data-testid` value of `ds-accordion` to the parent element.",
    ],
  },
  {
    date: "2025-02-21",
    version: "3.5.4",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Fixes styles including padding, active hover state, and double-border issue.",
    ],
  },
  {
    date: "2024-07-03",
    version: "3.1.7",
    type: "Update",
    affects: ["Accessibility", "Functionality"],
    notes: [
      "Adds logic to close accordion when element within panel is focused and 'esc' key is pressed",
    ],
  },
  {
    date: "2024-05-23",
    version: "3.1.4",
    type: "Update",
    affects: ["Accessibility", "Functionality"],
    notes: [
      "Adds logic to close accordion when accordion button is focused and 'esc' key is pressed",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Accessibility", "Functionality"],
    notes: [
      "Chakra 2.8 update.",
      "Added the ariaLabel and buttonInteractionRef prop.",
    ],
  },
];
