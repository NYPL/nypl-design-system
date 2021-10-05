const captionBase = {
  fontSize: "-1",
};
const tagBase = {
  fontSize: "-2",
  fontWeight: "regular",
};
const miniBase = {
  fontSize: "-3",
  fontWeight: "regular",
};
const bold = {
  fontWeight: "bold",
};
const italic = {
  fontStyle: "italic",
};
const noSpace = {
  margin: "0 0 0",
};

const variants = {
  default: {
    "&.no-space": {
      ...noSpace,
    },
  },
  defaultBold: {
    ...bold,
    "&.no-space": {
      ...noSpace,
    },
  },
  defaultItalic: {
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
  defaultBoldItalic: {
    ...bold,
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
  caption: {
    ...captionBase,
    "&.no-space": {
      ...noSpace,
    },
  },
  captionBold: {
    ...captionBase,
    ...bold,
    "&.no-space": {
      ...noSpace,
    },
  },
  captionItalic: {
    ...captionBase,
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
  captionBoldItalic: {
    ...captionBase,
    ...bold,
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
  tag: {
    ...tagBase,
    "&.no-space": {
      ...noSpace,
    },
  },
  tagBold: {
    ...tagBase,
    ...bold,
    "&.no-space": {
      ...noSpace,
    },
  },
  tagItalic: {
    ...tagBase,
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
  tagBoldItalic: {
    ...tagBase,
    ...bold,
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
  mini: {
    ...miniBase,
    "&.no-space": {
      ...noSpace,
    },
  },
  miniBold: {
    ...miniBase,
    ...bold,
    "&.no-space": {
      ...noSpace,
    },
  },
  miniItalic: {
    ...miniBase,
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
  miniBoldItalic: {
    ...miniBase,
    ...bold,
    ...italic,
    "&.no-space": {
      ...noSpace,
    },
  },
};
const Text = {
  baseStyle: {},
  variants,
};

export default Text;
