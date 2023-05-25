// NYPL Reservoir Design System Component Categories

const categories = {
  accessibility: {
    title: "Accessibility Guide",
    components: [
      "Audio and Video",
      "Dynamic Content",
      "Links",
      "Repetitive Actions",
      "Skip Navigation",
    ],
  },
  basicContent: {
    title: "Components/Basic Elements",
    components: ["Card", "Hero", "Promo", "Sponsor"],
  },
  chakra: {
    title: "Components/Chakra Exports/Layout",
    components: [
      "Box",
      "Flex",
      "Grid",
      "Center, Circle, Square",
      "Stack, HStack, VStack",
    ],
  },
  contentDisplay: {
    title: "Components/Content Display",
    components: [
      "AccessibilityDisplayHelper",
      "AddressDisplayHelper",
      "DateDisplayHelper",
      "HelperErrorText",
      "HoursDisplayHelper",
      "OverflowMenu",
      "StatusBadge",
    ],
  },
  deprecated: {
    title: "Components/Deprecated",
    components: ["CardEdition", "Input"],
  },
  devguide: {
    title: "Development Guide",
    components: ["Autosuggest", "Design Tokens", "Supporting Dark Mode"],
  },
  feedback: {
    title: "Components/Feedback",
    components: [
      "Alert",
      "InlineLoading",
      "Notification",
      "ProgressIndicator",
      "SkeletonLoader",
    ],
  },
  forms: {
    title: "Components/Form Elements",
    components: [
      "Button",
      "ButtonGroup",
      "Checkbox",
      "CheckboxGroup",
      "DatePicker",
      "DateRangePicker",
      "Dropdown",
      "FeedbackBox",
      "Fieldset",
      "FileUploader",
      "FilterBar",
      "Form",
      "Label",
      "MultiSelect",
      "MultiSelectGroup",
      "NumberInput",
      "Radio",
      "RadioGroup",
      "SearchBar",
      "Select",
      "Slider",
      "TagSet",
      "Textarea",
      "TextInput",
      "Toggle",
    ],
  },
  hooks: {
    title: "Hooks",
    components: [
      "useCarouselStyles",
      "useCloseDropDown",
      "useFilterBar",
      "useMultiSelect",
      "useNYPLBreakpoints",
      "useNYPLTheme",
      "useWindowSize",
    ],
  },
  layout: {
    title: "Components/PageLayout",
    components: [
      "StructuredContent",
      "ContentSwitcher",
      "Footer",
      "Header",
      "HorizontalRule",
      "Section",
      "SimpleGrid",
      "Table",
      "Template",
    ],
  },
  overlayContentSwitcher: {
    title: "Components/Overlays & Switchers",
    components: ["Accordion", "Modal", "Tabs", "Tooltip"],
  },
  media: {
    title: "Components/Media & Icons",
    components: [
      "AudioPlayer",
      "Icon",
      "Image",
      "Logo",
      "Slideshow",
      "VideoPlayer",
    ],
  },
  navigation: {
    title: "Components/Navigation",
    components: [
      "AlphabetFilter",
      "Breadcrumbs",
      "Link",
      "Menu",
      "Pagination",
      "SkipNavigation",
      "Subnavigation",
    ],
  },
  styleguide: {
    title: "Style Guide",
    components: [
      "Bidirectionality",
      "Breakpoints",
      "Buttons",
      "Colors",
      "Forms",
      "Iconography",
      "Spacing",
      "Template Bidirectionality",
      "Typography",
    ],
  },
  typography: {
    title: "Components/Typography & Styles",
    components: ["Heading", "List", "StyledList", "Text"],
  },
};

export const getCategory = (component: string) => {
  let catPath = component;
  Object.keys(categories).forEach((key: string) => {
    const t = categories[key as keyof typeof categories].title;
    const c = categories[key as keyof typeof categories].components;
    if (c.includes(component)) {
      catPath = `${t}/${component}`;
    }
  });
  return catPath;
};
