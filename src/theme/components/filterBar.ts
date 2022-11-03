const FilterBar = {
  parts: ["modalHeader", "modalFooter", "modalCloseButton"],
  baseStyle: ({ layout }) => ({
    width: layout === "row" ? "full" : "fit-content",
    modalHeader: {
      bg: "ui.gray.x-light-cool",
    },
    modalFooter: {
      bg: "ui.gray.x-light-cool",
    },
    modalCloseButton: {
      mt: "8px",
    },
  }),
};

export default FilterBar;
