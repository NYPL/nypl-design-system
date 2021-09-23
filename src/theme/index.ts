import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import global from "./foundations/global";
import typography from "./foundations/typography";
import { spacing } from "./foundations/spacing";
import breakpoints from "./foundations/breakpoints";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Radio from "./components/radio";
import CustomRadioGroup from "./components/customRadioGroup";
import Tabs from "./components/tabs";
import TemplateStyles from "./components/template";
import Heading from "./components/heading";

/**
 * See Chakra default theme for shape of theme object:
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme
 *
 * The following are using the default configuration from Chakra:
 *   - z-indices
 *   - radii
 *   - blur
 *   - shadows
 *   - borders
 *   - transitions
 *
 * Theme extensions exist for:
 *   - breakpoints
 *   - colors
 *   - typography (font, font size, font weight)
 *   - spacing
 */
const theme = extendTheme({
  styles: { global },
  breakpoints,
  colors,
  ...typography,
  space: spacing,
  /**
   * Chakra documentation on component styles:
   * https://chakra-ui.com/docs/theming/component-style
   */
  components: {
    Button,
    Checkbox,
    Heading,
    Radio,
    CustomRadioGroup,
    Tabs,
    ...TemplateStyles,
  },
  // Chakra prefixes its own CSS variables with `--chakra` by default but this
  // can be updated to be anything we want. This can be "nypl" to have the
  // `--nypl` prefix or even "" to have no prefix.
  // config: {
  //   cssVarPrefix: "nypl",
  // },
});

export default theme;
