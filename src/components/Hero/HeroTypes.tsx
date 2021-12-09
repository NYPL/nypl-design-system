export enum HeroTypes {
  Primary = "primary",
  Secondary = "secondary",
  SecondaryBooksAndMore = "secondaryBooksAndMore",
  SecondaryLocations = "secondaryLocations",
  SecondaryResearch = "secondaryResearch",
  SecondaryWhatsOn = "secondaryWhatsOn",
  Tertiary = "tertiary",
  Campaign = "campaign",
  FiftyFifty = "fiftyfifty",
}

// Only used for internal purposes.
export const HeroSecondaryTypes = [
  HeroTypes.Secondary,
  HeroTypes.SecondaryBooksAndMore,
  HeroTypes.SecondaryLocations,
  HeroTypes.SecondaryResearch,
  HeroTypes.SecondaryWhatsOn,
];
