export const socialMediaDataMap = [
  {
    type: "blog",
    iconName: "fileTypeGenericDoc",
    labelText: "NYPL Blog",
    url: "https://nypl.org/blog",
  },
  {
    type: "facebook",
    iconName: "socialFacebook",
    labelText: "Facebook",
    url: "https://facebook.com/nypl",
  },
  {
    type: "instagram",
    iconName: "socialInstagram",
    labelText: "Instagram",
    url: "https://instagram.com/nypl",
  },
  {
    type: "pinterest",
    iconName: "socialPinterest",
    labelText: "Pinterest",
    url: "https://pinterest.com/nypl",
  },
  {
    type: "soundcloud",
    iconName: "socialSoundCloud",
    labelText: "SoundCloud",
    url: "https://soundcloud.com/nypl",
  },
  {
    type: "tiktok",
    iconName: "socialTikTok",
    labelText: "TikTok",
    url: "https://tiktok.com/@nypl",
  },
  {
    type: "tumblr",
    iconName: "socialTumblr",
    labelText: "Tumblr",
    url: "https://nypl.tumblr.com",
  },
  {
    type: "twitter",
    iconName: "socialTwitter",
    labelText: "Twitter",
    url: "https://twitter.com/nypl",
  },
  {
    type: "youtube",
    iconName: "socialYoutube",
    labelText: "Youtube",
    url: "https://youtube.com/newyorkpubliclibrary",
  },
];

/* Helper function for .mdx <Table... /> component.
 *
 * @returns the SocialMediaDataMap values as an array of arrays
 */
export function GetTableData() {
  let tableData = [];
  socialMediaDataMap.forEach((smPlatform) => {
    let row = [
      smPlatform.type,
      smPlatform.labelText,
      smPlatform.url,
      smPlatform.iconName,
    ];
    tableData.push(row);
  });
  return tableData;
}