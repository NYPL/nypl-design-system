// NYPL Design System Component Categories

const categories = {
  basicContent: {
    title: "Components/Basic Elements",
    components: ["Card", "Hero", "Promo", "Sponsor"],
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
  chakra: {
    title: "Chakra/Chakra COmponent/Layout",
    components: [
      "Box",
      "Flex",
      "Grid",
      "Center, Circle, Square",
      "Stack, HStack, VStack",
    ],
  },
  typography: {
    title: "Components/Typography & Styles",
    components: ["Heading", "List", "Text"],
  },
  devguide: {
    title: "Documentation/Development Guide",
    components: ["Autosuggest"],
  },
  styleguide: {
    title: "Documentation/Style Guide",
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
};

export const getCategory = (component: string) => {
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
