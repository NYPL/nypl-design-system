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
    date: "2025-09-11",
    version: "4.0.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Fixes the spacing for the label."],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Removes use of `useNYPLBreakpoints` and replaces with equivalent CSS.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Moves the `rest` prop to the parent `Fieldset` component.",
      "Adds `data-testid` value of `ds-multiSelectGroup` to the parent element.",
    ],
  },
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["Uses CSS to decrease reliance on `useNYPLBreakpoints` hook."],
  },
  {
    date: "2024-07-03",
    version: "3.1.7",
    type: "Update",
    affects: ["Documentation"],
    notes: [
      "Added an example of a `MultiSelectGroup` with the `MultiSelect`'s `closeOnBlur` set to true",
    ],
  },
  {
    date: "2024-04-11",
    version: "3.1.0",
    type: "Update",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: [
      "V2 refactor of the `MultiSelectGroup` component including updating to Chakra 2.8.",
    ],
  },
];
