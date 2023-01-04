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
  baseStyle: ({ width }) => ({
    width: "full",
    modalHeader: {
      bg: "ui.gray.x-light-cool",
    },
    modalFooter: {
      bg: "ui.gray.x-light-cool",
    },
    modalCloseButton: {
      mt: "8px",
    },
    globalButtonGroupWrapper: {
      ...filterBarWidth[width],
    },
  }),
};

export default FilterBar;
