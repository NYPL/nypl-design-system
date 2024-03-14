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
    date: "2014-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Styles"],
    notes: [
      'Updated the "campaign" variant to improve the spacing around the component.',
      "Added the `isDarkBackgroundImage` prop.",
    ],
  },
  {
    date: "2023-11-09",
    version: "2.1.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      'Updated the layout for the "campaign" variant to have consistent padding on its left and right sides.',
    ],
  },
  {
    date: "2023-10-26",
    version: "2.1.1",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: [
      'Deprecated the "secondary" and "fiftyFifty" variants.',
      'Fixed a bug where custom background colors were not rendering properly in dark mode for the "campaign" and "tertiary" variants.',
    ],
  },
  {
    date: "2023-10-18",
    version: "2.1.0",
    type: "Bug Fix",
    affects: ["Functionality"],
    notes: [
      "Fixed an issue with `backgroundColor` and `foregroundColor` props not prioritizing the passed design token values for the `Hero` component.",
    ],
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
