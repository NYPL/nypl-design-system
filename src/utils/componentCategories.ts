// NYPL Reservoir Design System Component Categories

const categories = {
  accessibility: {
    title: "Accessibility Guide",
    components: ["Skip Navigation"],
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
    components: ["Autosuggest"],
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
      "Checkbox",
      "CheckboxGroup",
      "DatePicker",
      "DateRangePicker",
      "Dropdown",
      "Fieldset",
      "FileUploader",
      "Form",
      "Label",
      "NumberInput",
      "Radio",
      "RadioGroup",
      "SearchBar",
      "Select",
      "Slider",
      "Textarea",
      "TextInput",
      "Toggle",
    ],
  },
  hooks: {
    title: "Hooks",
    components: ["useCarouselStyles", "useNYPLTheme", "useWindowSize"],
  },
  layout: {
    title: "Components/Page Layout",
    components: [
      "StructuredContent",
      "ContentSwitcher",
      "Footer",
      "Grid",
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
    components: ["Breadcrumbs", "Link", "Menu", "Pagination", "Subnavigation"],
  },
  styleguide: {
    title: "Style Guide",
    components: [
      "Bidirectionality",
      "Breakpoints",
      "Buttons",
      "Colors",
      "Design Tokens",
      "Forms",
      "Iconography",
      "Spacing",
      "Template Bidirectionality",
      "Typography",
    ],
  },
  typography: {
    title: "Components/Typography & Styles",
    components: ["Heading", "List", "Text"],
  },
};

export const getCategory = (component) => {
  let catPath = component;
  Object.keys(categories).forEach((key) => {
    const t = categories[key].title;
    const c = categories[key].components;
    if (c.includes(component)) {
      catPath = `${t}/${component}`;
    }
  });
  return catPath;
};
