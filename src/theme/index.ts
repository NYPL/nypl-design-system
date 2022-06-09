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
import ButtonGroup from "./components/buttonGroup";
import Card from "./components/card";
import Checkbox from "./components/checkbox";
import ComponentWrapper from "./components/componentWrapper";
import CheckboxGroup from "./components/checkboxGroup";
import { CustomImage, CustomImageWrapper } from "./components/image";
import CustomSelect from "./components/select";
import DatePicker from "./components/datePicker";
import Fieldset from "./components/fieldset";
import Header from "./components/header";
import HeaderLowerNav from "./components/headerLowerNav";
import HeaderMobile from "./components/headerMobile";
import HeaderMobileNav from "./components/headerMobileNav";
import HeaderMobileNavButton from "./components/headerMobileNavButton";
import HeaderSearchForm from "./components/headerSearchForm";
import HeaderSearchButton from "./components/headerSearchButton";
import HeaderUpperNav from "./components/headerUpperNav";
import Heading from "./components/heading";
import HelperErrorText from "./components/helperErrorText";
import Hero from "./components/hero";
import HorizontalRule from "./components/horizontalRule";
import Icon from "./components/icon";
import Label from "./components/label";
import Link from "./components/link";
import List from "./components/list";
import Logo from "./components/logo";
import NotificationStyles from "./components/notification";
import Pagination from "./components/pagination";
import ProgressIndicator from "./components/progressIndicator";
import Radio from "./components/radio";
import RadioGroup from "./components/radioGroup";
import SearchBar from "./components/searchBar";
import SitewideAlerts from "./components/sitewideAlerts";
import { Skeleton, SkeletonLoader } from "./components/skeletonLoader";
import SkipNavigation from "./components/skipNavigation";
import CustomSlider from "./components/slider";
import StatusBadge from "./components/statusBadge";
import StructuredContent from "./components/structuredContent";
import Tabs from "./components/tabs";
import CustomTable from "./components/customTable";
import TemplateStyles from "./components/template";
import Text from "./components/text";
import TextInput from "./components/textInput";
import Toggle from "./components/toggle";
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
    Header,
    HeaderLowerNav,
    HeaderMobile,
    HeaderMobileNav,
    HeaderMobileNavButton,
    HeaderSearchForm,
    HeaderSearchButton,
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
    ...NotificationStyles,
    Pagination,
    ProgressIndicator,
    Radio,
    RadioGroup,
    SearchBar,
    SitewideAlerts,
    Skeleton,
    SkeletonLoader,
    SkipNavigation,
    CustomSlider,
    StatusBadge,
    StructuredContent,
    Tabs,
    CustomTable,
    ...TemplateStyles,
    Text,
    TextInput,
    ...Toggle,
    VideoPlayer,
  },
  // Use `cssVarPrefix` to set the prefix used on the CSS vars produced by
  // Chakra. By default, Chakra prefixes its own CSS variables with `--chakra`.
  config: {
    cssVarPrefix: "nypl",
  },
});

export default theme;
