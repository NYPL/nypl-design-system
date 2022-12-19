import { multiSelectWidths } from "./multiSelect";

const MultiSelectGroup = {
  baseStyle: ({ width = "default" }) => ({
    ...multiSelectWidths[width],
    padding: { base: "s", md: "xs" },
  }),
};

export default MultiSelectGroup;
