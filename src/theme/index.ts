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
import AlphabetFilter from "./components/alphabetFilter";
import Breadcrumb from "./components/breadcrumb";
import Button from "./components/button";
import ButtonGroup from "./components/buttonGroup";
import Card from "./components/card";
import Checkbox from "./components/checkbox";
import ComponentWrapper from "./components/componentWrapper";
import CheckboxGroup from "./components/checkboxGroup";
import { CustomImage, CustomImageWrapper } from "./components/image";
import CustomSelect from "./components/select";
import DatePicker from "./components/datePicker";
import Fieldset from "./components/fieldset";
import Footer from "./components/footer";
import Header from "./components/header/header";
import HeaderLogin from "./components/header/headerLogin";
import HeaderLoginButton from "./components/header/headerLoginButton";
import HeaderLowerNav from "./components/header/headerLowerNav";
import HeaderMobileIconNav from "./components/header/headerMobileIconNav";
import HeaderMobileNav from "./components/header/headerMobileNav";
import HeaderMobileNavButton from "./components/header/headerMobileNavButton";
import HeaderSearchForm from "./components/header/headerSearchForm";
import HeaderSearchButton from "./components/header/headerSearchButton";
import HeaderSitewideAlerts from "./components/header/headerSitewideAlerts";
import HeaderUpperNav from "./components/header/headerUpperNav";
import Heading from "./components/heading";
import HelperErrorText from "./components/helperErrorText";
import Hero from "./components/hero";
import HorizontalRule from "./components/horizontalRule";
import Icon from "./components/icon";
import Label from "./components/label";
import Link from "./components/link";
import List from "./components/list";
import Logo from "./components/logo";
import MultiSelect from "./components/multiSelect";
import MultiSelectMenuButton from "./components/multiSelectMenuButton";
import NotificationStyles from "./components/notification";
import Pagination from "./components/pagination";
import ProgressIndicator from "./components/progressIndicator";
import Radio from "./components/radio";
import RadioGroup from "./components/radioGroup";
import SearchBar from "./components/searchBar";
import { Skeleton, SkeletonLoader } from "./components/skeletonLoader";
import SkipNavigation from "./components/skipNavigation";
import CustomSlider from "./components/slider";
import StatusBadge from "./components/statusBadge";
import StructuredContent from "./components/structuredContent";
import Tabs from "./components/tabs";
import CustomTable from "./components/customTable";
import TagSetStyles from "./components/tagSet";
import TemplateStyles from "./components/template";
import Text from "./components/text";
import TextInput from "./components/textInput";
import Toggle from "./components/toggle";
import Tooltip from "./components/tooltip";
import VideoPlayer from "./components/videoPlayer";

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
    AlphabetFilter,
    Breadcrumb,
    Button,
    ButtonGroup,
    ...Card,
    Checkbox,
    CheckboxGroup,
    ComponentWrapper,
    CustomImage,
    CustomImageWrapper,
    CustomSelect,
    DatePicker,
    Fieldset,
    Footer,
    Header,
    HeaderLogin,
    HeaderLoginButton,
    HeaderLowerNav,
    HeaderMobileIconNav,
    HeaderMobileNav,
    HeaderMobileNavButton,
    HeaderSearchForm,
    HeaderSearchButton,
    HeaderSitewideAlerts,
    HeaderUpperNav,
    Heading,
    HelperErrorText,
    Hero,
    HorizontalRule,
    Icon,
    Label,
    Link,
    List,
    Logo,
    MultiSelect,
    MultiSelectMenuButton,
    ...NotificationStyles,
    Pagination,
    ProgressIndicator,
    Radio,
    RadioGroup,
    SearchBar,
    Skeleton,
    SkeletonLoader,
    SkipNavigation,
    CustomSlider,
    StatusBadge,
    StructuredContent,
    Tabs,
    CustomTable,
    ...TagSetStyles,
    ...TemplateStyles,
    Text,
    TextInput,
    ...Toggle,
    Tooltip,
    VideoPlayer,
  },
  config: {
    // Use `cssVarPrefix` to set the prefix used on the CSS vars produced by
    // Chakra. By default, Chakra prefixes its own CSS variables with `--chakra`.
    cssVarPrefix: "nypl",
    // Start off in the "light" mode.
    initialColorMode: "light",
    // Don't use the user's system preference. Once the Reservoir
    // has better dark mode variants for its components, this
    // value can be set to true.
    useSystemColorMode: false,
  },
});

export default theme;
