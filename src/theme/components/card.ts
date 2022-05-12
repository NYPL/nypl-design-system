interface CardBaseStyleProps {
  hasImage: boolean;
  imageIsAtEnd: boolean;
  isBordered: boolean;
  isCentered: boolean;
  layout: string;
  mainActionLink: boolean;
}
interface BodyPaddingProps {
  hasImage: boolean;
  imageIsAtEnd: boolean;
  isBordered: boolean;
  isRow: boolean;
}
interface CardImageBaseStyleProps {
  imageIsAtEnd: boolean;
  isCentered: boolean;
  size: keyof typeof imageSizes;
  layout: string;
}
interface CardActionsBaseStyleProps {
  bottomBorder: boolean;
  isCentered: boolean;
  layout: string;
  topBorder: boolean;
}

const imageSizes = {
  xxsmall: { flex: { base: "0 0 100%", md: "0 0 64px" }, width: "100%" },
  xsmall: { flex: { md: "0 0 96px" } },
  small: { flex: { md: "0 0 165px" } },
  medium: { flex: { md: "0 0 225px" } },
  large: { flex: { md: "0 0 360px" } },
};
// This is complicated and can be refactored later...
const getBodyPaddingStyles = ({
  hasImage,
  imageIsAtEnd,
  isBordered,
  isRow,
}: BodyPaddingProps) => {
  let bodyPadding = null;
  if (isBordered) {
    bodyPadding = "inset.default";
    if (hasImage) {
      bodyPadding =
        "0 var(--nypl-space-inset-default) var(--nypl-space-inset-default)";
    }
  }
  if (isRow && isBordered) {
    bodyPadding = "inset.default";
  }
  if (isRow && isBordered && hasImage) {
    bodyPadding = {
      base: "0 var(--nypl-space-inset-default) var(--nypl-space-inset-default)",
      md: "var(--nypl-space-inset-default) var(--nypl-space-inset-default) var(--nypl-space-inset-default) 0",
    };
    if (imageIsAtEnd) {
      bodyPadding = {
        base: "var(--nypl-space-inset-default) var(--nypl-space-inset-default) 0",
        md: "var(--nypl-space-inset-default) 0 var(--nypl-space-inset-default) var(--nypl-space-inset-default)",
      };
    }
  }
  return bodyPadding;
};
const Card = {
  parts: ["actions", "body", "heading"],
  baseStyle: ({
    hasImage,
    imageIsAtEnd,
    isBordered,
    isCentered,
    layout,
    mainActionLink,
  }: CardBaseStyleProps) => {
    const isRow = layout === "row";
    const layoutStyles = isRow
      ? {
          display: "flex",
          flexFlow: {
            base: "column nowrap",
            md: "row",
          },
          maxWidth: "100%",
          textAlign: "left",
          alignItems: isCentered ? "center" : null,
        }
      : {};
    const baseBorderStyles = isBordered
      ? {
          border: "1px solid",
          borderColor: "ui.gray.medium",
        }
      : {};
    const bodyPadding = getBodyPaddingStyles({
      isBordered,
      hasImage,
      imageIsAtEnd,
      isRow,
    });
    let bodyMargin = null;
    if (isCentered) {
      bodyMargin = "auto";
      if (isRow) {
        bodyMargin = "0";
      }
    }
    return {
      alignItems: "flex-start",
      display: "flex",
      flexFlow: "column wrap",
      textAlign: isCentered ? "center" : null,
      actions: {
        width: ["100%", "100%", "180px"],
        marginLeft: ["0", "0", "m"],
        marginTop: ["xs", "xs", "0"],
      },
      body: {
        display: { md: "block" },
        flexFlow: { md: "row nowrap" },
        margin: bodyMargin,
        padding: bodyPadding,
        width: "100%",
      },
      heading: {
        marginBottom: "xs",
        a: mainActionLink ? { color: "ui.black" } : null,
      },
      ...baseBorderStyles,
      ...layoutStyles,
    };
  },
};

const CardActions = {
  baseStyle: ({
    bottomBorder,
    isCentered,
    layout,
    topBorder,
  }: CardActionsBaseStyleProps) => {
    let justifyContent = null;
    // Only center in the column layout.
    if (layout === "row") {
      justifyContent = "left";
    } else if (isCentered) {
      justifyContent = "center";
    }

    const topBorderStyles = topBorder
      ? {
          borderTop: "1px solid",
          paddingTop: "xs",
        }
      : {};
    const bottomBorderStyles = bottomBorder
      ? {
          borderBottom: "1px solid",
          paddingBottom: "xs",
        }
      : {};
    return {
      marginBottom: "xs",
      columnGap: "var(--nypl-space-xs)",
      display: "flex",
      _last: {
        marginBottom: "0",
      },
      ...topBorderStyles,
      ...bottomBorderStyles,
      justifyContent,
      borderColor: "ui.gray.medium",
    };
  },
};

const CardContent = {
  baseStyle: {
    marginBottom: "xs",
    _last: {
      marginBottom: "0",
    },
  },
};

const CardImage = {
  baseStyle: ({
    imageIsAtEnd,
    isCentered,
    layout,
    size,
  }: CardImageBaseStyleProps) => {
    // These sizes are only for the "row" layout.
    const imageSize = size ? imageSizes[size] : {};
    const layoutStyles =
      layout === "row"
        ? {
            flex: { md: "0 0 225px" },
            maxWidth: { base: "100%", md: "50%" },
            textAlign: "left",
            alignItems: isCentered ? "center" : null,
            margin: {
              base: imageIsAtEnd ? "var(--nypl-space-m) 0 0" : null,
              md: imageIsAtEnd
                ? "0 0 0 var(--nypl-space-m)"
                : "0 var(--nypl-space-m) 0 0",
            },
            width: { base: "100%", md: null },
            marginBottom: ["xs", "xs"],
            ...imageSize,
          }
        : {
            marginBottom: "xs",
            width: "100%",
          };
    const imageIsAtEndStyles = imageIsAtEnd
      ? {
          marginBottom: "0",
          marginTop: "s",
          order: "2",
        }
      : {};

    return {
      ...imageIsAtEndStyles,
      ...layoutStyles,
    };
  },
};

export default { Card, CardActions, CardContent, CardImage };
