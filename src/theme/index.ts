import { extendTheme } from "@chakra-ui/react";
/** Global theme styles */
import global from "./foundations/global";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";
import shadows from "./foundations/shadows";
import { spacing } from "./foundations/spacing";
import typography from "./foundations/typography";
/** Component styles */
import Accordion from "./components/accordion";
import Breadcrumb from "./components/breadcrumb";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Radio from "./components/radio";
import CustomRadioGroup from "./components/customRadioGroup";
import CustomCheckboxGroup from "./components/customCheckboxGroup";
import Tabs from "./components/tabs";
import Hero from "./components/hero";
import TextInput from "./components/textInput";
import CustomSelect from "./components/select";
import Heading from "./components/heading";
import TemplateStyles from "./components/template";
import Link from "./components/link";
import Label from "./components/label";
import StatusBadge from "./components/statusBadge";
import { CustomImage, CustomImageWrapper } from "./components/image";
import Icon from "./components/icon";
import SearchBar from "./components/searchBar";
import Card from "./components/card";

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
  shadows,
  space: spacing,
  ...typography,
  /**
   * Chakra documentation on component styles:
   * https://chakra-ui.com/docs/theming/component-style
   */
  components: {
    Accordion,
    Breadcrumb,
    Button,
    ...Card,
    Checkbox,
    CustomCheckboxGroup,
    CustomImage,
    CustomImageWrapper,
    CustomRadioGroup,
    CustomSelect,
    Heading,
    Hero,
    Icon,
    Label,
    Link,
    Radio,
    SearchBar,
    StatusBadge,
    Tabs,
    ...TemplateStyles,
    TextInput,
  },
  // Chakra prefixes its own CSS variables with `--chakra` by default but this
  // can be updated to be anything we want. This can be "nypl" to have the
  // `--nypl` prefix or even "" to have no prefix.
  // config: {
  //   cssVarPrefix: "nypl",
  // },
});

export default theme;
