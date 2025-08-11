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
    affects: ["Documentation", "Functionality", "Styles"],
    notes: [
      "Removes deprecated `button` value in `linkTypesArray`.",
      "Replaces positional function arguments with object for `checkListChildrenError.`",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Renames `type` to `variant`.",
      "Removes `Children.map` logic as warning is no longer going to be used.",
      "Removes default external spacing from `ol` and `ul` variants.",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-list` to the parent element.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      'Updates the "dl" variant to use 2rem for column spacing and to set the width of the "term" columnm to be a full 250px for tablet and desktop viewports.',
    ],
  },
  {
    date: "2024-05-23",
    version: "3.1.4",
    type: "New Feature",
    affects: ["Styles"],
    notes: [
      "Adds `showRowDividers` prop to show/hide dividers between rows only for the description list variant.",
    ],
  },
  {
    date: "2024-03-28",
    version: "3.0.1",
    type: "Update",
    affects: ["Styles", "Accessibility"],
    notes: ["List <ul> bullet color updated."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Accessibility", "Documentation"],
    notes: [
      "Updated the `title` prop to allow JSX to render custom heading elements for accessible heading hierarchy.",
    ],
  },
];
