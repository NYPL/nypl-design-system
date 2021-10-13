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
import Card from "./components/card";
import Checkbox from "./components/checkbox";
import CustomCheckboxGroup from "./components/customCheckboxGroup";
import { CustomImage, CustomImageWrapper } from "./components/image";
import CustomRadioGroup from "./components/customRadioGroup";
import CustomSelect from "./components/select";
import Heading from "./components/heading";
import Hero from "./components/hero";
import Icon from "./components/icon";
import Label from "./components/label";
import Link from "./components/link";
import Radio from "./components/radio";
import SearchBar from "./components/searchBar";
import StatusBadge from "./components/statusBadge";
import Tabs from "./components/tabs";
import TemplateStyles from "./components/template";
import Text from "./components/text";
import TextInput from "./components/textInput";

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
    Text,
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
