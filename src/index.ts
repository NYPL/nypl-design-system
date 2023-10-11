import "./styles.scss";

// Note that the NYPL Design System directly re-exports the following
// components for usage in consuming applications.
export {
  Box,
  Center,
  Circle,
  ColorModeScript,
  cookieStorageManager,
  Flex,
  Grid,
  GridItem,
  HStack,
  localStorageManager,
  Spacer,
  Square,
  Stack,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
export { default as Accordion } from "./components/Accordion/Accordion";
export type { AccordionTypes } from "./components/Accordion/Accordion";
export { default as AlphabetFilter } from "./components/AlphabetFilter/AlphabetFilter";
export { default as AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
export type { AudioType } from "./components/AudioPlayer/AudioPlayer";
export { default as Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
export type { BreadcrumbsTypes } from "./components/Breadcrumbs/Breadcrumbs";
export { default as Button } from "./components/Button/Button";
export type { ButtonTypes } from "./components/Button/Button";
export { default as ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
export {
  default as Card,
  CardActions,
  CardContent,
  CardHeading,
} from "./components/Card/Card";
export { default as Checkbox } from "./components/Checkbox/Checkbox";
export { default as CheckboxGroup } from "./components/CheckboxGroup/CheckboxGroup";
export { default as ColorCard } from "./components/StyleGuide/ColorCard";
export { default as DatePicker } from "./components/DatePicker/DatePicker";
export type {
  DatePickerTypes,
  FullDateType,
} from "./components/DatePicker/DatePicker";
export { default as DSProvider } from "./theme/provider";
export {
  default as FeedbackBox,
  useFeedbackBox,
} from "./components/FeedbackBox/FeedbackBox";
export type { FeedbackBoxViewType } from "./components/FeedbackBox/FeedbackBox";
export { default as Fieldset } from "./components/Fieldset/Fieldset";
// The code associated with the FilterBar component will not be exported until
// the refactor of the v2 version of the FilterBar component has been completed.
// export { default as FilterBar } from "./components/FilterBar/FilterBar";
export { default as Form, FormField, FormRow } from "./components/Form/Form";
export { default as Heading } from "./components/Heading/Heading";
export type { HeadingSizes, HeadingLevels } from "./components/Heading/Heading";
export { default as HelperErrorText } from "./components/HelperErrorText/HelperErrorText";
export { default as Hero } from "./components/Hero/Hero";
export type { HeroTypes } from "./components/Hero/Hero";
export { default as HorizontalRule } from "./components/HorizontalRule/HorizontalRule";
export { default as Icon } from "./components/Icons/Icon";
export type {
  IconAlign,
  IconColors,
  IconNames,
  IconRotationTypes,
  IconRotations,
  IconSizes,
  IconTypes,
} from "./components/Icons/Icon";
export { default as Image } from "./components/Image/Image";
export type {
  ImageRatios,
  ImageSizes,
  ImageTypes,
} from "./components/Image/Image";
export { default as Label } from "./components/Label/Label";
export type { LayoutTypes } from "./helpers/types";
export { default as Link } from "./components/Link/Link";
export type { LinkTypes } from "./components/Link/Link";
export { default as List } from "./components/List/List";
export type { DescriptionProps, ListTypes } from "./components/List/List";
export { default as Logo } from "./components/Logo/Logo";
export type { LogoNames, LogoSizes } from "./components/Logo/Logo";
export { ModalTrigger, useModal } from "./components/Modal/Modal";
// The code associated with the MultiSelect component will not be exported until
// the refactor of the v2 version of the MultiSelect component has been
// completed.
// export { default as MultiSelect } from "./components/MultiSelect/MultiSelect";
// export type {
//   MultiSelectProps,
//   MultiSelectItem,
//   SelectedItems,
// } from "./components/MultiSelect/MultiSelect";
// export { default as MultiSelectGroup } from "./components/MultiSelectGroup/MultiSelectGroup";
// export type { MultiSelectGroupProps } from "./components/MultiSelectGroup/MultiSelectGroup";
export { default as NewsletterSignup } from "./components/NewsletterSignup/NewsletterSignup";
export type { NewsletterSignupViewType } from "./components/NewsletterSignup/NewsletterSignup";
export { default as Notification } from "./components/Notification/Notification";
export type { NotificationTypes } from "./components/Notification/Notification";
export { default as Pagination } from "./components/Pagination/Pagination";
export { default as ProgressIndicator } from "./components/ProgressIndicator/ProgressIndicator";
export type {
  ProgressIndicatorSizes,
  ProgressIndicatorTypes,
} from "./components/ProgressIndicator/ProgressIndicator";
export { default as Radio } from "./components/Radio/Radio";
export { default as RadioGroup } from "./components/RadioGroup/RadioGroup";
export { default as SearchBar } from "./components/SearchBar/SearchBar";
export { default as Select } from "./components/Select/Select";
export type { LabelPositions } from "./components/Select/Select";
export { default as SimpleGrid } from "./components/Grid/SimpleGrid";
export type { GridGaps } from "./components/Grid/SimpleGrid";
export { default as SkeletonLoader } from "./components/SkeletonLoader/SkeletonLoader";
export type { SkeletonLoaderImageRatios } from "./components/SkeletonLoader/SkeletonLoader";
export { default as SkipNavigation } from "./components/SkipNavigation/SkipNavigation";
export { default as Slider } from "./components/Slider/Slider";
export { default as SocialMediaLinks } from "./components/SocialMediaLinks/SocialMediaLinks";
export { default as StatusBadge } from "./components/StatusBadge/StatusBadge";
export type { StatusBadgeTypes } from "./components/StatusBadge/StatusBadge";
export { default as StructuredContent } from "./components/StructuredContent/StructuredContent";
export type { StructuredContentImagePosition } from "./components/StructuredContent/StructuredContent";
export { default as StyledList } from "./components/StyledList/StyledList";
export {
  default as Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "./components/Tabs/Tabs";
export { default as TagSet } from "./components/TagSet/TagSet";
export type { TagSetExploreDataProps } from "./components/TagSet/TagSetExplore";
export type { TagSetFilterDataProps } from "./components/TagSet/TagSetFilter";
export {
  TemplateAppContainer,
  Template,
  TemplateAboveHeader,
  TemplateHeader,
  TemplateBreakout,
  TemplateContent,
  TemplateContentTop,
  TemplateContentPrimary,
  TemplateContentSidebar,
  TemplateFooter,
} from "./components/Template/Template";
export { default as Text } from "./components/Text/Text";
export type { TextSizes } from "./components/Text/Text";
export { default as TextInput } from "./components/TextInput/TextInput";
export type {
  TextInputRefType,
  TextInputTypes,
} from "./components/TextInput/TextInput";
export { default as Toggle } from "./components/Toggle/Toggle";
export type { ToggleSizes } from "./components/Toggle/Toggle";
export { default as useCarouselStyles } from "./hooks/useCarouselStyles";
export { default as useCloseDropDown } from "./hooks/useCloseDropDown";
// The useFilterBar and useMultiSelect hooks will not be exported until the
// refactor of the v2 versions of the MultiSelect and FilterBar components has
// been completed.
// export { default as useFilterBar } from "./hooks/useFilterBar";
// export { default as useMultiSelect } from "./hooks/useMultiSelect";
export { default as useNYPLBreakpoints } from "./hooks/useNYPLBreakpoints";
export { default as useNYPLTheme } from "./hooks/useNYPLTheme";
export { default as useWindowSize } from "./hooks/useWindowSize";
export { default as VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
export type {
  VideoPlayerAspectRatios,
  VideoPlayerTypes,
} from "./components/VideoPlayer/VideoPlayer";
export { default as Table } from "./components/Table/Table";
export { default as Tooltip } from "./components/Tooltip/Tooltip";
