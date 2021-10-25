import { extendTheme } from "@chakra-ui/react";
/** Global theme styles */
import global from "./foundations/global";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";
import radii from "./foundations/radii";
import shadows from "./foundations/shadows";
import { spacing } from "./foundations/spacing";
import typography from "./foundations/typography";
/** Component styles */
import Accordion from "./components/accordion";
import Breadcrumb from "./components/breadcrumb";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import CustomCheckboxGroup from "./components/customCheckboxGroup";
import CustomRadioGroup from "./components/customRadioGroup";
import CustomSelect from "./components/select";
import DatePicker from "./components/datePicker";
import Fieldset from "./components/fieldset";
import Heading from "./components/heading";
import HelperErrorText from "./components/helperErrorText";
import Hero from "./components/hero";
import Icon from "./components/icon";
import Label from "./components/label";
import Link from "./components/link";
import NotificationStyles from "./components/notification";
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
  radii,
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
    Checkbox,
    CustomCheckboxGroup,
    CustomRadioGroup,
    CustomSelect,
    DatePicker,
    Fieldset,
    Heading,
    HelperErrorText,
    Hero,
    Icon,
    Label,
    Link,
    ...NotificationStyles,
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
