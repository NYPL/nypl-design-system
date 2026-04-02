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
    date: "2026-03-05",
    version: "4.1.5",
    type: "Update",
    affects: ["Styles"],
    notes: ["Fixes the RTL styles for the dropdown arrow."],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Changes theme name from `CustomSelect` to `ReservoirSelect` for consistency.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes `name`, `onChange`, and `value` props (as HTML equivalents may be used) and updates docs.",
      "Rename `selectType` to `variant`.",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Adds `data-testid` value of `ds-select` to the parent element.",
      "Fixes helper error text alignment when label is not shown and it is inlined.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Functionality", "Accessibility"],
    notes: [
      "Adds the `autoComplete` prop to the select element.",
      "Adds `requiredLabelText` prop to allow customization of the '(required)' text.",
      "Fixes the vertical alignment of the label for the `inline` variant.",
    ],
  },
  {
    date: "2024-09-19",
    version: "3.3.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["Changes 'r' in '(required)' label from upper- to lowercase"],
  },
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Updates component to accept a `defaultValue` prop to set initial value of uncontrolled components.",
    ],
  },
  {
    date: "2024-06-20",
    version: "3.1.6",
    type: "Update",
    affects: ["Styles"],
    notes: ["Adds interaction tests for the Controls story."],
  },
  {
    date: "2024-04-11",
    version: "3.1.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Reduced the spacing between the field label and the field itself.",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
