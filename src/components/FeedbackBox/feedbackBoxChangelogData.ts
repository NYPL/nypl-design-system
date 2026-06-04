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
    affects: ["Styles"],
    notes: [
      "Updates to suppress native browser validation.",
      "Utilizies onChange events to clear error state in comment and email input elements.",
      "Updates component and documentation example to use sentence case.",
      "Updates the email-specific confirmation message.",
    ],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-feedbackBox` to the parent element.",
    ],
  },
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Removes use of `useNYPLBreakpoints` and replaces with equivalent CSS.",
    ],
  },
  {
    date: "2025-02-13",
    version: "3.5.4",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Sets the font weight for the popup header to `medium`.",
      'Changes the font weight for the `(required)` label on the `Textarea` element to `"medium"`.',
    ],
  },
  {
    date: "2024-10-02",
    version: "3.4.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Increases the z-index of the `Drawer` component so it displays above all other elements on a page.",
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
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `FeedbackBoxProps` interface."],
  },
  {
    date: "2024-07-03",
    version: "3.1.7",
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
  {
    date: "2024-02-05",
    version: "2.1.5",
    type: "Update",
    affects: ["Accessibility", "Functionality"],
    notes: [
      "Updates the focus ring style for the open button.",
      "Updates the required comment field so it cannot be submitted when empty.",
      "Forcibly focuses on the open button when the form is closed.",
    ],
  },
  {
    date: "2023-10-26",
    version: "2.1.1",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      "Updates `tabindex` value from 0 to -1. See Accessibility section for details.",
    ],
  },
  {
    date: "2023-10-18",
    version: "2.1.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Remove the underline on the component's `Privacy Policy` link."],
  },
  {
    date: "2023-9-28",
    version: "2.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Applied Typo2023 styles, including font size, font color, and text link patterns.",
    ],
  },
];
