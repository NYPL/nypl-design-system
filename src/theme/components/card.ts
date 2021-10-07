const Card = {
  parts: ["content"],
  baseStyle: (props) => {
    const { center, imageAtEnd, layout, border, hasImage } = props;
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
    const imageRowStyles = isRow
      ? {
          flex: { md: "0 0 225px" },
          margin: {
            base: imageAtEnd ? "var(--space-m) 0 0" : null,
            md: imageAtEnd ? "0 0 0 var(--space-m)" : "0 var(--space-m) 0 0",
          },
          maxWidth: { md: "50%" },
          "&.small": { flex: { md: "0 0 165px" } },
          "&.medium": { flex: { md: "0 0 255px" } },
          "&.large": { flex: { md: "0 0 360px" } },
        }
      : {};
    let bodyBorderHasImage = null;
    if (border) {
      bodyBorderHasImage = "s";
      if (hasImage) {
        bodyBorderHasImage = "0 var(--space-s) var(--space-s)";
      }
    }
    if (isRow && border) {
      bodyBorderHasImage = "var(--space-s)";
    }
    if (isRow && border && hasImage) {
      bodyBorderHasImage = {
        base: "0 var(--space-s) var(--space-s)",
        md: "var(--space-s) var(--space-s) var(--space-s) 0",
      };
      if (imageAtEnd) {
        bodyBorderHasImage = {
          base: "var(--space-s) var(--space-s) 0",
          md: "var(--space-s) 0 var(--space-s) var(--space-s)",
        };
      }
    }
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
        padding: bodyBorderHasImage,
      },
      border: border ? "1px solid" : null,
      borderColor: border ? "ui.gray.medium" : null,
      ".card__image": imageAtEnd
        ? {
            marginBottom: "0",
            marginTop: "s",
            order: "2",
            ...imageRowStyles,
          }
        : { ...imageRowStyles },
      ...layoutStyles,
    };
  },
};

const CardActions = {
  baseStyle: (props) => {
    const { topBorder, bottomBorder, center, layout } = props;
    let justifyContent = null;
    if (center) {
      justifyContent = "center";
    } else if (layout === "row") {
      justifyContent = "left";
    }
    return {
      marginBottom: "s",
      columnGap: "var(--space-xs)",
      display: "flex",
      _last: {
        marginBottom: "0",
      },
      borderTop: topBorder ? "1px solid" : null,
      paddingTop: topBorder ? "xs" : null,
      borderBottom: bottomBorder ? "1px solid" : null,
      paddingBottom: bottomBorder ? "xs" : null,
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

export { Card, CardActions, CardContent };
