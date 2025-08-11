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
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes internal 'row' or 'column' className.",
      "Adds `data-testid` value of `ds-skeletonLoader` to the parent element.",
    ],
  },
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates the styles to make the button placeholder look more like a button.",
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
