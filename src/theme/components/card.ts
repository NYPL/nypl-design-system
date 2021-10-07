const imageSizes = {
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
      bodyPadding = "0 var(--space-s) var(--space-s)";
    }
  }
  if (isRow && border) {
    bodyPadding = "var(--space-s)";
  }
  if (isRow && border && hasImage) {
    bodyPadding = {
      base: "0 var(--space-s) var(--space-s)",
      md: "var(--space-s) var(--space-s) var(--space-s) 0",
    };
    if (imageAtEnd) {
      bodyPadding = {
        base: "var(--space-s) var(--space-s) 0",
        md: "var(--space-s) 0 var(--space-s) var(--space-s)",
      };
    }
  }
  return bodyPadding;
};
const Card = {
  parts: ["content"],
  baseStyle: (props) => {
    const { border, center, hasImage, imageAtEnd, layout } = props;
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
      marginBottom: "s",
      columnGap: "var(--space-xs)",
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
    marginBottom: "s",
    _last: {
      marginBottom: "0",
    },
  },
};

const CardImage = {
  baseStyle: ({ center, imageSize, imageAtEnd, layout }) => {
    // These sizes are only for the "row" layout.
    const size = imageSizes[imageSize] || {};
    const layoutStyles =
      layout === "row"
        ? {
            display: "flex",
            flexFlow: {
              base: "column nowrap",
              md: "row",
            },
            flex: { md: "0 0 225px" },
            maxWidth: { base: "100%", md: "50%" },
            textAlign: "left",
            alignItems: center ? "center" : null,
            margin: {
              base: imageAtEnd ? "var(--space-m) 0 0" : null,
              md: imageAtEnd ? "0 0 0 var(--space-m)" : "0 var(--space-m) 0 0",
            },
            ...size,
          }
        : {};
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
