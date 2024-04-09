import { getSectionColors } from "../../utils/getSectionColors";

describe("getSectionColors", () => {
  // Spot check color objects in `sectionColorsDataMap` in
  // `src/helpers/types.ts`.
  it("returns an object with primary and secondary colors for the passed type", () => {
    const brand = getSectionColors({
      type: "brand",
    });
    const education = getSectionColors({
      type: "education",
    });
    const researchLibrarySchomburg = getSectionColors({
      type: "researchLibrarySchomburg",
    });
    const whatsOn = getSectionColors({
      type: "whatsOn",
    });

    expect(brand).toEqual({
      primary: "brand.primary",
      secondary: "brand.secondary",
    });
    expect(education).toEqual({
      primary: "section.education.primary",
      secondary: "section.education.secondary",
    });
    expect(researchLibrarySchomburg).toEqual({
      primary: "section.research-library.schomburg",
      secondary: null,
    });
    expect(whatsOn).toEqual({
      primary: "section.whats-on.primary",
      secondary: "section.whats-on.secondary",
    });
  });

  it("returns a string with the appropriate color value", () => {
    const booksAndMore = getSectionColors({
      type: "booksAndMore",
      colorValue: "secondary",
    });
    const connect = getSectionColors({
      type: "connect",
      colorValue: "primary",
    });
    const research = getSectionColors({
      type: "research",
      colorValue: "primary",
    });
    const researchLibrarySchwarzman = getSectionColors({
      type: "researchLibrarySchwarzman",
      colorValue: "secondary",
    });

    expect(booksAndMore).toEqual("section.books-and-more.secondary");
    expect(connect).toEqual("section.connect.primary");
    expect(research).toEqual("section.research.primary");
    expect(researchLibrarySchwarzman).toEqual(null);
  });

  it("returns a string with the dark mode color variant", () => {
    const locations = getSectionColors({
      type: "locations",
      colorValue: "secondary",
      isDark: true,
    });
    const researchLibraryLpa = getSectionColors({
      type: "researchLibraryLpa",
      colorValue: "primary",
      isDark: true,
    });
    const researchLibrarySchwarzman = getSectionColors({
      type: "researchLibrarySchwarzman",
      colorValue: "primary",
      isDark: true,
    });
    const whatsOn = getSectionColors({
      type: "whatsOn",
      colorValue: "secondary",
      isDark: true,
    });

    expect(locations).toEqual("dark.section.locations.secondary");
    expect(researchLibraryLpa).toEqual("dark.section.research-library.lpa");
    expect(researchLibrarySchwarzman).toEqual(
      "dark.section.research-library.schwarzman"
    );
    expect(whatsOn).toEqual("dark.section.whats-on.secondary");
  });
});
