export const filterBarWidth = {
  default: {
    width: {
      base: "100%",
      md: "265px",
    },
  },
  full: {
    width: "100%",
  },
};

const FilterBar = {
  parts: [
    "modalHeader",
    "modalFooter",
    "modalCloseButton",
    "globalButtonGroup",
    "globalButtonGroupWrapper",
  ],
  baseStyle: ({ layout, width }) => ({
    width: "full",
    pt: layout === "row" ? "l" : "s",
    modalHeader: {
      bg: "ui.gray.x-light-cool",
    },
    modalFooter: {
      bg: "ui.gray.x-light-cool",
    },
    modalCloseButton: {
      mt: "8px",
    },
    globalButtonGroup: {
      margin: { base: "s", md: "xs" },
    },
    globalButtonGroupWrapper: {
      ...filterBarWidth[width],
    },
  }),
};

export default FilterBar;
