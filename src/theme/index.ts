import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import global from "./foundations/global";
import Button from "./components/button";
import Checkbox from "./components/checkbox";

/**
 * See Chakra default theme for shape of theme object:
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme
 */
const theme = extendTheme({
  styles: { global },
  colors,
  /**
   * Chakra documentation on component styles:
   * https://chakra-ui.com/docs/theming/component-style
   */
  components: {
    Button,
    Checkbox,
  },
});

export default theme;
