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
    type: "New Feature",
    affects: ["Documentation", "Functionality"],
    notes: ["Adds the `lazy-load` option to the `listOverflow` prop"],
  },
  {
    date: "2025-09-30",
    version: "4.0.2",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: ["Updates how an option's item count is displayed."],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Extends prop definition to include Chakra's `BoxProps`",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Adds `data-testid` value of `ds-multiSelect` to the parent element.",
    ],
  },
  {
    date: "2025-07-17",
    version: "3.6.4",
    type: "Bug Fix",
    affects: ["Functionality"],
    notes: ["Fixes the array of checkbox items to return with unique keys."],
  },
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Bug Fix",
    affects: ["Functionality"],
    notes: [
      "Fixes the `itemCount` prop so that the value displays even when `0` is passed.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Fixes the search input field to the top of the panel so it remains visible on scroll.",
      "Fixes the vertical alignment of the label for the `inline` variant.",
    ],
  },
  {
    date: "2024-12-05",
    version: "3.5.0",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: [
      "Updates the `items` prop to include `itemCount` as a data property to render the item count for an option.",
    ],
  },
  {
    date: "2024-10-02",
    version: "3.4.0",
    type: "Update",
    affects: ["Documentation"],
    notes: ["Adds interaction tests for the Controls story."],
  },
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "New Feature",
    affects: ["Accessibility"],
    notes: [
      "Renders the `buttonText` prop as the `CheckboxGroup`'s legend for more meaningful context.",
    ],
  },
  {
    date: "2024-07-03",
    version: "3.1.7",
    type: "New Feature",
    affects: ["Functionality"],
    notes: [
      "Adds `closeOnBlur` prop which, when set to true, closes the component if it loses focus.",
    ],
  },
  {
    date: "2024-05-23",
    version: "3.1.4",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: ["Fixes the z-index value in the small selected items button."],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Updated the placeholder value for the search field."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: ["Chakra 2.8 update.", "Refactors the `MultiSelect` component."],
  },
];
