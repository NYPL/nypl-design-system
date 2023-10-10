/** This data is used to populate the ComponentChangelogTable component.
 *
 * date: string (when adding new entry during development, set value as "Prerelease")
 * version: string (when adding new entry during development, set value as "Prerelease")
 * type: "Bug Fix" | "New Feature" | "Update";
 * affects: "Accessibility" | "Documentation" | "Functionality" | "Styles";
 * notes: array (will render as a bulleted list, add one array element for each list element)
 */
export const changelogData = [
  {
    date: "Prerelease",
    version: "Prerelease",
    type: "Update",
    affects: "Accessibility",
    notes: [
      "Updates to pass a secondaryHelperTextId to its TextInput if needed so that the aria-describedby value can be associated with all relevant helperTexts.",
      "Updates so that focus remains on input after value is changed.",
    ],
  },
  {
    date: "2023-9-28",
    version: "2.0.0",
    type: "Update",
    affects: "Styles",
    notes: [
      "Applied Typo2023 styles, including font size, font color, and text link patterns.",
    ],
  },
];
