export const layoutTypesArray = ["column", "row"] as const;
export type LayoutTypes = typeof layoutTypesArray[number];

/* The "Source of Truth" for NYPL's sections.
 *
 * For functionality purposes this list includes section types that are not,
 * technically, sections, but are treated as such, e.g. "brand," and the
 * research libraries.
 *
 * When the dark mode variant for each section is needed, prepend the value with
 * "dark". For example: `dark.${sectionColorsDataMap.blogs.primary}`.
 */
export const sectionColorsDataMap = {
  blogs: {
    primary: "section.blogs.primary",
    secondary: "section.blogs.secondary",
  },
  booksAndMore: {
    primary: "section.books-and-more.primary",
    secondary: "section.books-and-more.secondary",
  },
  brand: {
    primary: "brand.primary",
    secondary: "brand.secondary",
  },
  connect: {
    primary: "section.connect.primary",
    secondary: "section.connect.secondary",
  },
  education: {
    primary: "section.education.primary",
    secondary: "section.education.secondary",
  },
  locations: {
    primary: "section.locations.primary",
    secondary: "section.locations.secondary",
  },
  research: {
    primary: "section.research.primary",
    secondary: "section.research.secondary",
  },
  researchLibraryLpa: {
    primary: "section.research-library.lpa",
    secondary: null,
  },
  researchLibrarySchomburg: {
    primary: "section.research-library.schomburg",
    secondary: null,
  },
  researchLibrarySchwarzman: {
    primary: "section.research-library.schwartzman",
    secondary: null,
  },
  whatsOn: {
    primary: "section.whats-on.primary",
    secondary: "section.whats-on.secondary",
  },
};

export const sectionTypeArray = Object.keys(sectionColorsDataMap);
export type SectionTypes = typeof sectionTypeArray[number];

export const dimensionTypeArray = ["height", "width"] as const;
export type DimensionTypes = typeof dimensionTypeArray[number];
