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
    date: "2026-03-31",
    version: "4.1.6",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updated to always render the helper text div for accessible aria-live announcements.",
    ],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes `name` and `onChange` props (as HTML equivalents may be used) and updates docs.",
      "Adds a hook to consume `CheckboxGroup` context.",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Adds `data-testid` value of `ds-checkbox` to the parent element.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Syncs the focus color styles with the VDL."],
  },
  {
    date: "2025-02-13",
    version: "3.5.4",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates the check icon to use DS icon.",
      "Sets the correct background color for all states.",
    ],
  },
  {
    date: "2024-05-23",
    version: "3.1.4",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Sets position relative so that is it visible when focused in a scrollable container.",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles", "Functionality"],
    notes: [
      "Removes the warning message that is logged when a non-Checkbox component is passed a child.",
      "Chakra 2.8 update.",
    ],
  },
];
