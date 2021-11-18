import { labelLegendText } from "./global";

const Label = {
  parts: ["helper"],
  baseStyle: {
    ...labelLegendText,
  },
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
