// NYPL Design System Component Categories

const categories = {
  content: {
    title: "Content Display",
    components: [
      "AccessibilityDisplayHelper",
      "Accordion",
      "AddressDisplayHelper",
      "Card",
      "ContentSwitcher",
      "DateDisplayHelper",
      "DefinitionList",
      "Heading",
      "Hero",
      "HoursDisplayHelper",
      "List",
      "Modal",
      "OverflowMenu",
      "Promo",
    ],
  },
  deprecated: {
    title: "Deprecated",
    components: [],
  },
  feedback: {
    title: "Feedback",
    components: [
      "Alert",
      "InlineLoading",
      "Notification",
      "ProgressIndicator",
      "SkeletonLoader",
      "Tooltip",
    ],
  },
  forms: {
    title: "Form Elements",
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
    title: "Page Layout",
    components: ["BasicPageSection", "Footer", "Grid", "Header", "Template"],
  },
  media: {
    title: "Media",
    components: ["AudioPlayer", "Icon", "Image", "Logo", "Slideshow", "Video"],
  },
  navigation: {
    title: "Navigation",
    components: ["Breadcrumbs", "Link", "Menu", "Pagination", "Subnavigation"],
  },
  styleguide: {
    title: "Style Guide",
    components: [
      "Breakpoints",
      "Colors",
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
