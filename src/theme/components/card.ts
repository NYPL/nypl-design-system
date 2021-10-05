const Card = {
  parts: ["content"],
  baseStyle: {
    content: {
      display: { md: "block" },
      flexFlow: { md: "row nowrap" },
    },
  },
};

const CardActions = {
  baseStyle: (props) => {
    const { topBorder, bottomBorder } = props;
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
