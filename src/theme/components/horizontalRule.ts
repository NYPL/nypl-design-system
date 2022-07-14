interface HorizontalRuleBaseStyle {
  align: string;
}

const HorizontalRule = {
  baseStyle: ({ align }: HorizontalRuleBaseStyle) => ({
    bg: "ui.gray.light-cool",
    border: "0",
    height: "2px",
    marginBottom: "s",
    marginTop: "s",
    marginStart: align === "left" ? 0 : "auto",
    marginEnd: align === "right" ? 0 : "auto",
  }),
};

export default HorizontalRule;
