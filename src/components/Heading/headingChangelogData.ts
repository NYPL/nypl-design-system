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
    affects: ["Functionality", "Styles"],
    notes: [
      "Replaces the error thrown with a console.warn.",
      "Removes deprecated values for size and levels.",
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Removes children count warning.",
      'Removes the `noSpace` prop and sets all margins to "0" by default.',
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Adds `data-testid` value of `ds-heading` to the parent element.",
    ],
  },
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Increase the font weight for the `size` styles."],
  },
  {
    date: "2025-01-30",
    version: "3.5.3",
    type: "Update",
    affects: ["Styles"],
    notes: ["Adds `line-height` styles for mobile."],
  },
  {
    date: "2024-11-07",
    version: "3.4.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["Adds the `heading7` and `heading8` options for the `size` prop."],
  },
  {
    date: "2024-06-20",
    version: "3.1.6",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates the styles for links within the heading."],
  },
  {
    date: "2024-05-09",
    version: "3.1.2",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Extends prop type to allow heading HTML attributes."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Chakra 2.8 update.",
      "Updates the component's theme file to use native Chakra responsive styles of the font sizes and removed the conditional logic that handled that previously.",
    ],
  },
  {
    date: "2024-02-22",
    version: "2.1.6",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: ['Fixed the desktop font size for the "heading5" variant.'],
  },
  {
    date: "2024-02-05",
    version: "2.1.5",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updated to use a custom `@media query` method to handle the responsive `font-size` styles.",
    ],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Styles"],
    notes: [
      'Updates the `font-weight` to "regular" for the `subtitle1` and `subtitle2` text styles.',
    ],
  },
  {
    date: "2023-10-26",
    version: "2.1.1",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      'Updated the `aria-roledescription` value to "subtitle" (a more familiar and recognizable term) for the `overline` element.',
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
