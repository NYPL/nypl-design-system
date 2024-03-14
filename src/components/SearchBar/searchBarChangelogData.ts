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
    date: "2014-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
  {
    date: "Prerelease",
    version: "Prerelease",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: [],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Accessibility", "Documentation", "Styles"],
    notes: [
      "Updated the `headingText` prop to allow JSX to render custom heading elements for accessible heading hierarchy.",
      "Added a z-index on hover to the select icon so it no longer disappears.",
    ],
  },
];
