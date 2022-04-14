interface CustomSliderBaseStyle {
  isDisabled: boolean;
  isInvalid: boolean;
  showBoxes: boolean;
  showValues: boolean;
}

// Margins around the static display values.
const staticValues = {
  marginTop: "xs",
  marginBottom: "xs",
  marginRight: "s",
  marginLeft: "0",
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
    isDisabled,
    isInvalid,
    showBoxes,
    showValues,
  }: CustomSliderBaseStyle) => {
    let baseColor = "ui.link.primary";
    if (isInvalid) {
      baseColor = "ui.error.primary";
    } else if (isDisabled) {
      baseColor = "ui.disabled.primary";
    }

    return {
      container: {
        display: "flex",
        alignItems: "center",
      },
      leftValue: { ...staticValues, color: isDisabled ? "ui.gray.dark" : null },
      rightValue: {
        ...staticValues,
        marginLeft: "s",
        // If the text input boxes are shown, then there already is
        // a margin, so we can set this static value to "0".
        marginRight: showBoxes ? "0" : "s",
        color: isDisabled ? "ui.gray.dark" : null,
      },
      textInput: {
        // Allows for three or more digits present in the
        // min or max value text input.
        minWidth: "65px",
        color: isInvalid ? "ui.error.primary" : "ui.black",
      },
      // This is added to the container so that the slider thumbs don't
      // overflow past the container when the value boxes or min/max values
      // are not shown.
      sliderContainer: {
        marginLeft: !showValues ? "xs" : null,
        marginRight: !showBoxes && !showValues ? "xs" : null,
      },
      // Filled track doesn't have a _disabled or _invalid state...
      // so we manually do it through the props.
      filledTrack: {
        bgColor: baseColor,
      },
      track: {
        bgColor: "ui.gray.light-cool",
        _disabled: {
          bgColor: "ui.disabled.primary",
        },
      },
      thumb: {
        border: "1px solid",
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
      },
    };
  },
};

export default CustomSlider;
