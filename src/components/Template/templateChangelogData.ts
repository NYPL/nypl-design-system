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
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Major update to component and styles based on the Template TAD. Updates include simplified code and exported components, responsive sidebar and spacing, and accomodations for content needing a narrower container.",
      "Extends prop interface to include Chakra props or HTML attributes.",
      "Updates the className `reservoir-template-content` and `reservoir-template-sidebar` to `ds-template-content` and `ds-template-sidebar` to align with the new naming convention.",
      "Adds `data-testid` value of `ds-template` to the parent element.",
    ],
  },
  {
    date: "2024-12-05",
    version: "3.5.0",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: [
      "Adjusts padding to fix an issue where focus indicators were being cut off in the primary content section.",
    ],
  },
  {
    date: "2024-10-02",
    version: "3.4.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates the styles to better accommodate the horizontal scrolling in the `Table` component.",
    ],
  },
  {
    date: "2024-05-09",
    version: "3.1.2",
    type: "Update",
    affects: ["Functionality", "Accessibility"],
    notes: ["Adds `id` prop."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
