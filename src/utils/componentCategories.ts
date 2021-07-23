// NYPL Design System Component Categories

const categories = {
  basicContent: {
    title: "Components/Basic Elements",
    components: ["Card", "Hero", "Promo", "Sponsor", "Table"],
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
    ],
  },
  deprecated: {
    title: "Components/Deprecated",
    components: [],
  },
  feedback: {
    title: "Components/Feedback",
    components: [
      "Alert",
      "InlineLoading",
      "Notification",
      "ProgressIndicator",
      "SkeletonLoader",
      "StatusBadge",
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
      "FileUploader",
      "Form",
      "Input",
      "Label",
      "NumberInput",
      "Radio",
      "RadioGroup",
      "SearchBar",
      "Select",
      "Slider",
      "Textarea",
      "TextInput",
    ],
  },
  layout: {
    title: "Components/Page Layout",
    components: [
      "Accordion",
      "BasicPageSection",
      "ContentSwitcher",
      "Footer",
      "Grid",
      "Header",
      "HorizontalRule",
      "Tabs",
      "Template",
    ],
  },
  overlayContentSwitcher: {
    title: "Components/Overlay",
    components: ["Modal", "Tooltip"],
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
  typography: {
    title: "Components/Typography & Styles",
    components: ["Heading", "List"],
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
      "Iconography",
      "Spacing",
      "Template Bidirectionality",
      "Typography",
    ],
  },
};

export const getCategory = component => {
  let catPath = component;
  Object.keys(categories).forEach(key => {
    const t = categories[key].title;
    const c = categories[key].components;
    if (c.includes(component)) {
      catPath = `${t}/${component}`;
    }
  });
  return catPath;
};
