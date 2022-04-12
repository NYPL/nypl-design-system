import { baseTDStyles, baseTHStyles } from "./customTable";
import { textMargin } from "./global";
import { headings } from "./heading";
import { baseLinkStyles } from "./link";
import {
  baseDefinitionStyles,
  baseListStyles,
  baseSectionDefinitionStyles,
  baseUnorderedStyles,
} from "./list";

const StructuredContent = {
  parts: ["image", "imageFigure", "imageWrapper"],
  baseStyle: ({ hasFigureImage, imageAspectRatio, imagePosition }) => {
    const styles: { maxWidth?: string } = {};
    const wrapperStyles = {
      float: [
        "none",
        "none",
        imagePosition !== "center" ? imagePosition : undefined,
      ],
      marginLeft: [
        "auto",
        "auto",
        imagePosition === "center"
          ? null
          : imagePosition === "left"
          ? "0"
          : "m",
      ],
      marginRight: [
        "auto",
        "auto",
        imagePosition === "center"
          ? null
          : imagePosition === "left"
          ? "m"
          : "0",
      ],
      width: imagePosition !== "center" ? "100%" : undefined,
      ...styles,
    };
    if (imagePosition === "center") {
      styles.maxWidth = "100%";
    }
    return {
      imageFigure: {
        ...wrapperStyles,
        marginBottom: "m",
      },
      imageWrapper: {
        ...wrapperStyles,
        marginBottom: !hasFigureImage ? "m" : null,
      },
      image: {
        // To handle the case when the image does not have a container,
        // e.g. when there is no image caption or credit.
        float: [
          "none",
          "none",
          imagePosition !== "center" ? imagePosition : undefined,
        ],
        marginLeft: [
          "auto",
          "auto",
          imagePosition === "right" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        ],
        marginRight: [
          "auto",
          "auto",
          imagePosition === "left" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        ],
        marginBottom:
          !hasFigureImage || imageAspectRatio === "original" ? "m" : null,
        ...styles,
      },
      /** The following styles are meant to target HTML elements that are
       * not rendered from the Reservoir DS. Typically, these HTML elements
       * are added from an API response.
       */
      // This gives Chakra `Box` styles to divs inside the
      // main `StructuredContent` content area.
      ".structuredcontent-body > div": {
        "margin-top": "var(--nypl-space-l)",
        "margin-inline-end": "var(--nypl-space-0)",
        "margin-bottom": "var(--nypl-space-0)",
        "margin-inline-start": "var(--nypl-space-0)",
      },
      a: baseLinkStyles,
      ul: {
        ...baseListStyles(),
        listStyle: "none",
        ...baseUnorderedStyles(),
      },
      ol: {
        ...baseListStyles(),
        ...textMargin,
      },
      // For section, h2 in the definition list.
      section: baseSectionDefinitionStyles,
      dl: baseDefinitionStyles.dl,
      dt: baseDefinitionStyles.dt,
      dd: baseDefinitionStyles.dd,
      table: {
        width: "100%",
        th: {
          // These styles, except for `baseTHStyles`, are set from
          // Chakra so they are copied explicitly.
          textAlign: "start",
          "padding-inline-start": "var(--nypl-space-6)",
          "padding-inline-end": "var(--nypl-space-6)",
          "padding-top": "var(--nypl-space-3)",
          "padding-bottom": "var(--nypl-space-3)",
          "line-height": "var(--nypl-lineHeights-4)",
          ...baseTHStyles(),
        },
        td: {
          // These styles, except for `baseTDStyles`, are set from
          // Chakra so they are copied explicitly.
          textAlign: "start",
          "padding-inline-start": "var(--nypl-space-6)",
          "padding-inline-end": "var(--nypl-space-6)",
          "padding-top": "var(--nypl-space-4)",
          "padding-bottom": "var(--nypl-space-4)",
          "line-height": "var(--nypl-lineHeights-5)",
          ...baseTDStyles(),
        },
      },
      // h1, h2, h3, h4, h5, h6
      ...headings,
    };
  },
};

export default StructuredContent;
