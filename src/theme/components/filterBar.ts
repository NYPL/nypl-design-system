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
    "modalBody",
    "modalHeader",
    "modalFooter",
    "modalCloseButton",
    "globalButtonGroup",
    "globalButtonGroupWrapper",
  ],
  baseStyle: ({ width }) => ({
    width: "full",
    modalBody: {
      _dark: {
        background: "dark.ui.bg.page",
      },
    },
    modalHeader: {
      bg: "ui.bg.default",
      _dark: {
        background: "dark.ui.bg.default",
        borderBottom: "1px solid",
        borderColor: "dark.ui.border.default",
      },
    },
    modalFooter: {
      bg: "ui.bg.default",
      _dark: {
        background: "dark.ui.bg.default",
        borderTop: "1px solid",
        borderColor: "dark.ui.border.default",
        color: "dark.ui.typography.heading",
      },
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
