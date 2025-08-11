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
    affects: ["Functionality"],
    notes: [
      "Replaces the error thrown with a console.warn.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes `alt` and `src` props (as HTML equivalents may be used) and updates docs.",
      "Updated the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes the explicit `className` prop in favor of `rest`.",
      "Adds `data-testid` value of `ds-image` to the parent element.",
    ],
  },
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Styles", "Functionality"],
    notes: [
      "Adds 'fourByOne' and 'twoByThree' aspect ratios.",
      "Replaces the error thrown with a console.warn.",
    ],
  },
  {
    date: "2025-01-16",
    version: "3.5.2",
    type: "Bug Fix",
    affects: ["Functionality"],
    notes: ["Fixes an infinite loop when no fallbackSrc value is provided."],
  },
  {
    date: "2024-09-05",
    version: "3.3.1",
    type: "Bug Fix",
    affects: ["Accessibility"],
    notes: [
      "Fixes an issue where the `id` prop was being duplicated in the aspect ratio's wrapper div.",
    ],
  },
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      "Defaults the `alt` attribute to an empty string if no value is passed.",
    ],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Adds `fallbackSrc` and `onError` props."],
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
    affects: ["Documentation", "Functionality", "Styles"],
    notes: ["Adds `sizeBasedOn` prop to the `Logo` component."],
  },
];
