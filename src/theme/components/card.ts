const imageSizes = {
  xxsmall: { flex: { base: "0 0 100%", md: "0 0 64px" }, width: "100%" },
  xsmall: { flex: { md: "0 0 96px" } },
  small: { flex: { md: "0 0 165px" } },
  medium: { flex: { md: "0 0 225px" } },
  large: { flex: { md: "0 0 360px" } },
};
// This is complicated and can be refactored later...
const getBodyPaddingStyles = ({ border, hasImage, imageAtEnd, isRow }) => {
  let bodyPadding = null;
  if (border) {
    bodyPadding = "s";
    if (hasImage) {
      bodyPadding = "0 var(--nypl-space-s) var(--nypl-space-s)";
    }
  }
  if (isRow && border) {
    bodyPadding = "var(--nypl-space-s)";
  }
  if (isRow && border && hasImage) {
    bodyPadding = {
      base: "0 var(--nypl-space-s) var(--nypl-space-s)",
      md: "var(--nypl-space-s) var(--nypl-space-s) var(--nypl-space-s) 0",
    };
    if (imageAtEnd) {
      bodyPadding = {
        base: "var(--nypl-space-s) var(--nypl-space-s) 0",
        md: "var(--nypl-space-s) 0 var(--nypl-space-s) var(--nypl-space-s)",
      };
    }
  }
  return bodyPadding;
};
const Card = {
  parts: ["body", "heading"],
  baseStyle: (props) => {
    const { border, center, hasImage, imageAtEnd, layout, mainActionLink } =
      props;
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
          alignItems: center ? "center" : null,
        }
      : {};
    const baseBorderStyles = border
      ? {
          border: "1px solid",
          borderColor: "ui.gray.medium",
        }
      : {};
    const bodyPadding = getBodyPaddingStyles({
      border,
      hasImage,
      imageAtEnd,
      isRow,
    });
    let bodyMargin = null;
    if (center) {
      bodyMargin = "auto";
      if (isRow) {
        bodyMargin = "0";
      }
    }
    return {
      alignItems: "flex-start",
      display: "flex",
      flexFlow: "column wrap",
      textAlign: center ? "center" : null,
      heading: {
        marginBottom: "xs",
        a: mainActionLink ? { color: "ui.black" } : null,
      },
      body: {
        display: { md: "block" },
        flexFlow: { md: "row nowrap" },
        margin: bodyMargin,
        padding: bodyPadding,
      },
      ...baseBorderStyles,
      ...layoutStyles,
    };
  },
};

const CardActions = {
  baseStyle: (props) => {
    const { bottomBorder, center, layout, topBorder } = props;
    let justifyContent = null;
    if (center) {
      justifyContent = "center";
    } else if (layout === "row") {
      justifyContent = "left";
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
    width: "100%",
    flex: 1,
    _last: {
      marginBottom: "0",
    },
  },
};

const CardImage = {
  baseStyle: ({ center, imageAtEnd, imageSize, layout }) => {
    // These sizes are only for the "row" layout.
    const size = imageSizes[imageSize] || {};
    const layoutStyles =
      layout === "row"
        ? {
            flex: { md: "0 0 225px" },
            maxWidth: { base: "100%", md: "50%" },
            textAlign: "left",
            alignItems: center ? "center" : null,
            margin: {
              base: imageAtEnd ? "var(--nypl-space-m) 0 0" : null,
              md: imageAtEnd
                ? "0 0 0 var(--nypl-space-m)"
                : "0 var(--nypl-space-m) 0 0",
            },
            width: { base: "100%", md: null },
            ...size,
          }
        : {
            marginBottom: "xs",
            width: "100%",
          };
    const imageAtEndStyles = imageAtEnd
      ? {
          marginBottom: "0",
          marginTop: "s",
          order: "2",
        }
      : {};

    return {
      ...imageAtEndStyles,
      ...layoutStyles,
    };
  },
};

export default { Card, CardActions, CardContent, CardImage };
