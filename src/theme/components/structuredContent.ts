import { baseTDStyles, baseTHStyles } from "./customTable";
import { textMargin } from "./global";
import { headings } from "./heading";
import { baseLinkStyles } from "./link";
import {
  baseDescriptionStyles,
  baseListStyles,
  baseSectionDescriptionStyles,
  baseUnorderedStyles,
} from "./list";

interface StructuredContentBaseStyle {
  hasFigureImage: boolean;
  imageAspectRatio: string;
  imagePosition: string;
}

const StructuredContent = {
  parts: ["image", "imageFigure", "imageWrapper"],
  baseStyle: ({
    hasFigureImage,
    imageAspectRatio,
    imagePosition,
  }: StructuredContentBaseStyle) => {
    const styles: { maxWidth?: string } = {};
    const wrapperStyles = {
      float: [
        "none",
        "none",
        imagePosition !== "center" ? imagePosition : undefined,
      ],
      marginStart: [
        "auto",
        "auto",
        imagePosition === "center"
          ? null
          : imagePosition === "left"
          ? "0"
          : "l",
      ],
      marginEnd: [
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
        marginStart: [
          "auto",
          "auto",
          imagePosition === "right" && imageAspectRatio === "original"
            ? "m"
            : undefined,
        ],
        marginEnd: [
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
        marginTop: "var(--nypl-space-l)",
        marginInlineEnd: "var(--nypl-space-0)",
        marginBottom: "var(--nypl-space-0)",
        marginInlineStart: "var(--nypl-space-0)",
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
      section: baseSectionDescriptionStyles,
      dl: baseDescriptionStyles.dl,
      dt: baseDescriptionStyles.dt,
      dd: baseDescriptionStyles.dd,
      table: {
        width: "100%",
        th: {
          // These styles, except for `baseTHStyles`, are set from
          // Chakra so they are copied explicitly.
          textAlign: "start",
          paddingInlineStart: "var(--nypl-space-6)",
          paddingInlineEnd: "var(--nypl-space-6)",
          paddingTop: "var(--nypl-space-3)",
          paddingBottom: "var(--nypl-space-3)",
          lineHeight: "var(--nypl-lineHeights-4)",
          ...baseTHStyles(),
        },
        td: {
          // These styles, except for `baseTDStyles`, are set from
          // Chakra so they are copied explicitly.
          textAlign: "start",
          paddingInlineStart: "var(--nypl-space-6)",
          paddingInlineEnd: "var(--nypl-space-6)",
          paddingTop: "var(--nypl-space-4)",
          paddingBottom: "var(--nypl-space-4)",
          lineHeight: "var(--nypl-lineHeights-5)",
          ...baseTDStyles(),
        },
      },
      // h1, h2, h3, h4, h5, h6
      ...headings,
    };
  },
};

export default StructuredContent;
