export const layoutTypesArray = ["column", "row"] as const;
export type LayoutTypes = typeof layoutTypesArray[number];

/* The "Source of Truth" for NYPL's sections.
 *
 * For functionality purposes this list includes section types that are not,
 * technically, sections, but are treated as such, e.g. "brand," and the
 *  research libraries.
 */
export const sectionDataMap = [
  {
    type: "blogs",
    title: "Blogs",
    colorVals: {
      primary: "section.blogs.primary",
      secondary: "section.blogs.secondary",
    },
  },
  {
    type: "booksAndMore",
    title: "Books and More",
    colorVals: {
      primary: "section.books-and-more.primary",
      secondary: "section.books-and-more.secondary",
    },
  },
  {
    type: "brand",
    title: "New York Public Library",
    colorVals: {
      primary: "brand.primary",
      secondary: "brand.secondary",
    },
  },
  {
    type: "connect",
    title: "Connect",
    colorVals: {
      primary: "section.connect.primary",
      secondary: "section.connect.secondary",
    },
  },
  {
    type: "education",
    title: "Education",
    colorVals: {
      primary: "section.education.primary",
      secondary: "section.education.secondary",
    },
  },
  {
    type: "locations",
    title: "Locations",
    colorVals: {
      primary: "section.locations.primary",
      secondary: "section.locations.secondary",
    },
  },
  {
    type: "research",
    title: "Research",
    colorVals: {
      primary: "section.research.primary",
      secondary: "section.research.secondary",
    },
  },
  {
    type: "researchLibraryLpa",
    title: "The New York Public Library for the Performing Arts",
    colorVals: {
      primary: "section.research-library.lpa",
      secondary: null,
    },
  },
  {
    type: "researchLibrarySchomburg",
    title: "Schomburg Center for Research in Black Culture",
    colorVals: {
      primary: "section.research-library.schomburg",
      secondary: null,
    },
  },
  {
    type: "researchLibrarySchwarzman",
    title: "Stephen A. Schwarzman Building",
    colorVals: {
      primary: "section.research-library.schwartzman",
      secondary: null,
    },
  },
  {
    type: "whatsOn",
    title: "What's On",
    colorVals: {
      primary: "section.whats-on.primary",
      secondary: "section.whats-on.secondary",
    },
  },
] as const;

export const sectionTypeArray = sectionDataMap.map(({ type }) => type);
export type SectionTypes = typeof sectionTypeArray[number];
