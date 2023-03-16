interface HorizontalRuleBaseStyle {
  align: string;
}

const HorizontalRule = {
  baseStyle: ({ align }: HorizontalRuleBaseStyle) => ({
    bg: "ui.bg.hover",
    border: "0",
    height: "2px",
    marginBottom: "s",
    marginTop: "s",
    marginStart: align === "left" ? 0 : "auto",
    marginEnd: align === "right" ? 0 : "auto",
    _dark: {
      bg: "dark.ui.bg.active",
    },
  }),
};

export default HorizontalRule;
