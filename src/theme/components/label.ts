import { labelLegendText } from "./global";

interface LabelBaseStyle {
  isInlined: boolean;
}

const Label = {
  baseStyle: ({ isInlined }: LabelBaseStyle) => ({
    ...labelLegendText,
    flex: isInlined ? "1" : null,
    whiteSpace: isInlined ? "nowrap" : null,
  }),
  variants: {
    button: {
      borderRadius: "sm",
      lineHeight: "1.5",
      display: "unset",
      cursor: "pointer",
      color: "ui.white",
      justifyContent: "center",
      py: "xs",
      px: "s",
      textDecoration: "none",
      wordWrap: "normal",
      fontWeight: "regular",
      bg: "ui.link.primary",
      minWidth: "none",
      height: "none",
      fontSize: "-1",
      _hover: {
        bg: "ui.link.secondary",
      },
    },
  },
};

export default Label;
