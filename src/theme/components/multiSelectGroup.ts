import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

const divider = {
  borderColor: "v5.multiselect.border",
  borderStyle: "solid",
};

const MultiSelectGroup = defineStyleConfig({
  variants: {
    column: defineStyle(({ showDividers }) => ({
      flexDirection: "column",
      rowGap: showDividers ? "0" : "v5.multiselectGroup.column.gap",
      ...(showDividers && {
        ...divider,
        borderTopWidth: "1px",
        "> div": { ...divider, borderBottomWidth: "1px" },
      }),
    })),
    row: defineStyle(({ showDividers }) => ({
      flexDirection: "row",
      columnGap: "v5.multiselectGroup.row.gap",
      rowGap: "v5.multiselectGroup.row.gap",
      ...(showDividers && {
        ...divider,
        borderTopWidth: "1px",
        borderBottomWidth: "1px",
      }),
    })),
  },
  defaultProps: {
    variant: "row",
  },
});

export default MultiSelectGroup;
