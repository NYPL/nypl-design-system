const Figma = require("figma-api");
const figmakeys = require("./figmaKeys.js");
const fs = require("fs");

// Make sure to create a new `figmaKeys.js` file based on
// `figmaKeys.example.js` and add your real credentials.
const figmaAPIKey = figmakeys.figmaAPIKey;
const figmaFileId = figmakeys.figmaFileId;

// Run this with `node figmaApi.js` on your terminal.
function getFigmaStyles() {
  const api = new Figma.Api({
    personalAccessToken: figmaAPIKey,
  });

  return api
    .getFile(figmaFileId)
    .then((file) => {
      // This will be an array with all the "pages" in the document, such as:
      // "Getting Started", "Contributing to the Figma Library", "CHANGELOG", etc
      const figmaPages = file.document.children;
      let hexValue = "";
      let name = "";

      // This is the main "page" object for "Styles & Typography" with
      // all the data we want.
      const stylesPage = figmaPages.filter(
        (child) => child.name === "Styles & Typography"
      )[0];
      // This will be an array with all the "cards" on the "Styles & Typography",
      // page such as: "Pullquote", "Lists", "Shapes: Borders", etc
      const stylesPageCards = stylesPage.children;
      // The style card we want: "Colors: UI Fills"
      // Note: For other colors we can filter for "Colors: Brand Fills".
      const colorsUIFills = stylesPageCards.filter(
        (child) => child.name === "Colors: UI Fills"
      )[0];
      // Array of all the elements on the card.
      const colorsUIFillsElements = colorsUIFills.children;
      // In the NYPL Figma file, many of the elements have the same key name.
      // For example, there are multiple elements with the name of
      // "ui/disabled/secondary" as well as "ui/error". For this reason, we
      // have to loop through all the elements and extract the color
      // name and hex code that are *displayed* on the screen.
      // console.log("colorsUIFillsElements", colorsUIFillsElements);
      const nyplColors = colorsUIFillsElements.map((element) => {
        // We check every element on the card and try to extract the
        // color name and the color hex value.

        // First, check if the element has a "color group" child node. This
        // node contains the text of the color name.
        const elementColorGroup =
          element.children &&
          element.children.length > 1 &&
          element.children.filter((child) => child.name === "color group");
        // If the element has a "color group" child node, we extract the
        // the color name. This "UX" name contains forward slashes.
        name =
          elementColorGroup &&
          elementColorGroup.length &&
          elementColorGroup[0].characters;
        // If there is a color name, let's get the hex value.
        if (name) {
          // This is the "hex group" child node.
          const elementHexGroup = element.children.filter(
            (child) => child.name === "hex group"
          )[0];
          // The "hex group" child node further contains two nodes. We only
          // need the "hex code" child node which has the hex value as the
          // text on the node rather than through a hex or rgba value.
          const hexCodeNode =
            elementHexGroup &&
            elementHexGroup.children &&
            elementHexGroup.children.filter(
              (child) => child.name === "hex code"
            )[0];
          // Get the actual hex value.
          hexValue = hexCodeNode.characters;
        }
        // Replace the forward slashes with dots and remove empty spaces. This
        // is the pattern used in the NYPL Chakra-based theme.
        name = name && name.replace(/\//g, "-").replace(/\s/g, "");

        return {
          hexValue,
          name,
        };
      });

      /**
       * Returns an array such as:
       * [
       *  {
       *    hexValue: "#424242",
       *    name: "ui-gray-x-dark",
       *  },
       *  {
       *    hexValue: "#616161",
       *    name: "ui-gray-dark",
       *  },
       *  {
       *    hexValue: "#BDBDBD",
       *    name: "ui-gray-medium",
       *  },
       *  // etc..
       * ]
       */
      // console.log("nyplColors", nyplColors);
      return nyplColors;
    })
    .catch(function (err) {
      console.log("Error", err);
    });
}

// Do the actual work.
getFigmaStyles().then((colors) => {
  const colorsToExport = {};
  colors.map((color) => {
    if (color.name) {
      colorsToExport[color.name] = color.hexValue;
    }
  });
  const data = JSON.stringify(colorsToExport, null, 2);
  fs.writeFileSync("colorsFromFigma.json", data);
  console.log("Done importing from Figma and writing to JSON file!");
});
