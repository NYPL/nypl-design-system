interface CustomSliderBaseStyle {
  isDarkMode: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  showBoxes: boolean;
  showValues: boolean;
}

// Margins around the static display values.
const staticValues = {
  marginTop: "xs",
  marginBottom: "xs",
  marginEnd: "s",
  marginStart: "0",
};
const CustomSlider = {
  parts: [
    "container",
    "leftValue",
    "rightValue",
    "textInput",
    "sliderContainer",
    "filledTrack",
    "track",
    "thumb",
  ],
  baseStyle: ({
    isDarkMode,
    isDisabled,
    isInvalid,
    showBoxes,
    showValues,
  }: CustomSliderBaseStyle) => {
    const prefix = isDarkMode ? "dark." : "";
    let baseColor = `${prefix}ui.link.primary`;
    if (isInvalid) {
      baseColor = `${prefix}ui.error.primary`;
    } else if (isDisabled) {
      baseColor = `${prefix}ui.disabled.primary`;
    }

    return {
      container: {
        display: "flex",
        alignItems: "center",
      },
      leftValue: {
        ...staticValues,
        color: isDisabled ? "ui.disabled.primary" : null,
        _dark: { color: isDisabled ? "dark.ui.disabled.primary" : null },
      },
      rightValue: {
        ...staticValues,
        marginStart: "s",
        // If the text input boxes are shown, then there already is
        // a margin, so we can set this static value to "0".
        marginEnd: showBoxes ? "0" : "s",
        color: isDisabled ? "ui.disabled.primary" : null,
        _dark: { color: isDisabled ? "dark.ui.disabled.primary" : null },
      },
      textInput: {
        // Allows for three or more digits present in the
        // min or max value text input.
        minWidth: "65px",
      },
      // This is added to the container so that the slider thumbs don't
      // overflow past the container when the value boxes or min/max values
      // are not shown.
      sliderContainer: {
        marginStart: !showValues ? "xs" : null,
        marginEnd: !showBoxes && !showValues ? "xs" : null,
      },
      // Filled track doesn't have a _disabled or _invalid state...
      // so we manually do it through the props.
      filledTrack: {
        bgColor: baseColor,
      },
      track: {
        bgColor: "ui.bg.hover",
        _disabled: {
          bgColor: "ui.disabled.primary",
        },
        _dark: {
          bgColor: "dark.ui.bg.active",
          _disabled: {
            bgColor: "dark.ui.disabled.primary",
          },
        },
      },
      thumb: {
        border: "2px solid",
        // Thumb doesn't have an _invalid state...
        // so we manually do it through the props.
        borderColor: baseColor,
        boxShadow: "none",
        _active: {
          transform: "translateY(-50%) scale(1.0)",
        },
        _disabled: {
          bgColor: "ui.disabled.secondary",
          borderColor: "ui.disabled.primary",
        },
        _dark: {
          bgColor: "dark.ui.bg.default",
          _disabled: {
            bgColor: "dark.ui.disabled.secondary",
            borderColor: "dark.ui.disabled.primary",
          },
        },
      },
    };
  },
};

export default CustomSlider;
