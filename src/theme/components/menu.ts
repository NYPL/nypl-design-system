import { getSectionColors } from "../../utils/getSectionColors";
import { SectionTypes } from "../../helpers/types";
interface MenuStyleProps {
  highlightColor: SectionTypes;
}

const Menu = {
  parts: ["menuItem", "menuDivider"],
  baseStyle: ({ highlightColor }: MenuStyleProps) => ({
    outline: "2px green solid",
    menuItem: {
      color: {
        md: getSectionColors({
          type: highlightColor,
        }),
        fontWeight: "500",
      },
    },
    menuDivider: {},
  }),
};

export default Menu;
