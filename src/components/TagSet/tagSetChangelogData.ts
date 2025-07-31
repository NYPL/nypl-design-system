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
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Renames `type` to `variant`.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-tagSet` to the parent element.",
      "Consolidates prop types to `TagSetProps`.",
      "Removes `BaseTagSetProps` and `TagSetTypeProps` as separate types.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Fixes an overflow bug in the `filter` variant when `isDismissible` is false.",
      "Syncs the border colors styles with the VDL.",
    ],
  },
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Documentation", "Accessibility"],
    notes: [
      "Updated the `'filter'` variant to remove button wrapper on each tag when `isDismissible` is false and no `onClick` is passed.",
    ],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Documentation", "Styles"],
    notes: [
      "Updated the styles for the UI colors, text treatment, and `Clear all` button.",
      'Updated the component category to "Content Display."',
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Allows for more properties in the tag data object and returns the entire data object in the onClick callback.",
      "Chakra 2.8 update.",
    ],
  },
];
