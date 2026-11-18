import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";

const divider = {
  borderColor: "v5.border.subtle.neutral.border",
  borderStyle: "solid",
};

const MultiSelectGroup = defineStyleConfig({
  baseStyle: defineStyle({
    "> div": {
      _notFirst: {
        mx: "0",
      },
    },
  }),
  variants: {
    column: defineStyle(({ showDividers }) => ({
      columnGap: "v5.multiselectGroup.column.gap",
      rowGap: showDividers ? "0" : "v5.multiselectGroup.column.gap",
      ...(showDividers && {
        ...divider,
        borderTopWidth: "1px",
        "> div": { ...divider, borderBottomWidth: "1px" },
      }),
    })),
    row: defineStyle(({ showDividers }) => ({
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
