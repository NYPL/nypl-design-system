const FilterBar = {
  parts: ["modalHeader", "modalCloseButton"],
  baseStyle: ({ layout }) => ({
    width: layout === "row" ? "row" : "fit-content",
    modalHeader: {
      bg: "ui.gray.x-light-cool",
      boxShadow: "md",
    },
    modalCloseButton: {
      mt: "8px",
    },
  }),
};

export default FilterBar;
