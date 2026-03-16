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
      "Updates the styles for the label on the input field to improve text alignment.",
    ],
  },
  {
    date: "2025-08-11",
    version: "4.0.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes explicit `className` prop as interface can be extended to include Chakra prop or HTML attribute types.",
      "Replaces `highlightColorTypesArray` with shared highlight colors array plus default gray, now `newsletterHighlightColorsArray`. ",
      "Updates the internal use of ids to reduce `undefined` ids in the DOM.",
      "Removes the internal `newsletter-signup` classes and replaces them with data-testids.",
      "Adds `data-testid` value of `ds-newsletterSignup` to the parent element.",
    ],
  },
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Removes use of `useNYPLBreakpoints` and replaces with equivalent Chakra syntax.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates styles to match the VDL."],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes default text values.",
      "Replaces `sectionTypes` with `HighlightColorTypes` and renames the related component prop.",
      "Updates component prop requirement.",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles", "Functionality"],
    notes: [
      "Chakra 2.8 update.",
      "Updated the email field error message to following NYPL recommendations and use more direct language.",
    ],
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
  {
    date: "2023-11-09",
    version: "2.1.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates the dark mode color variants for the `newsletterSignupType` prop.",
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
    type: "New Feature",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: ["Adds the NewsletterSignup component to the DS library"],
  },
];
