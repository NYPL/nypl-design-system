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
      "Replaces `Children.map` logic with `RadioGroupContext`.",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Renames `className` `radioGroupStack` to `ds-radioGroup-stack` to align with the new naming convention.",
      "Adds `data-testid` value of `ds-radioGroup` to the parent element.",
    ],
  },
  {
    date: "2025-01-16",
    version: "3.5.2",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      "Removes the fieldset wrapper and replaces it with a div and simple span for the title. The main wrapper around the `Radio` componnents are already in an accessible 'radiogroup' role element.",
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
    date: "2024-06-20",
    version: "3.1.6",
    type: "Update",
    affects: ["Styles"],
    notes: ["Adds interaction tests for the Controls story."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
