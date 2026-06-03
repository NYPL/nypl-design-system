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
    date: "2025-09-30",
    version: "4.0.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Adds padding so clearable X button doesn't overlap with text input.",
    ],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes `defaultValue`, `max`, `maxLength`, `min`, `name`, `onChange`, `onClick`, `onFocus`, `pattern`, `placeholder`, `step`, and `value` props (as HTML equivalents may be used) and updates docs.",
      "Renames `textInputType` to `textInputVariant`.",
      "Updates the `id` prop to be optional and generates a random id if not provided.",
      "Removes the parent `rest` prop since it's used for the internal Chakra `Input` component.",
      "Adds `data-testid` value of `ds-textInput` to the parent element.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Does not render the clearable button if `isDisabled` is true.",
      "Updates placeholder text color for dark mode.",
    ],
  },
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Updates the `labelText` prop type to `string | JSX.Element`"],
  },
  {
    date: "2024-12-19",
    version: "3.5.1",
    type: "Bug Fix",
    affects: ["Functionality", "Accessibility"],
    notes: [
      "Fixes conflicting internal and external ref props and values for the clearable button focus management.",
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
    date: "2024-05-23",
    version: "3.1.4",
    type: "Update",
    affects: ["Accessibility"],
    notes: ["Updates how aria-describedby is set."],
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
  {
    date: "2023-11-09",
    version: "2.1.2",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      'Added the `autoComplete` prop for setting the "autocomplete" attribute manually.',
    ],
  },
  {
    date: "2023-10-18",
    version: "2.1.0",
    type: "Bug Fix",
    affects: ["Accessibility"],
    notes: [
      "Updated so the `aria-describedby` value is not overwritten as 'undefined' when `TextInput` is part of the `DatePicker` component.",
    ],
  },
  {
    date: "2023-9-28",
    version: "2.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Applied Typo2023 styles, including font size and font color."],
  },
];
