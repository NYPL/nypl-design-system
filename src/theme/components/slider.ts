// Margins around the static display values.
const staticValues = {
  marginTop: "xs",
  marginBottom: "xs",
  marginRight: "s",
  marginLeft: "s",
};
const CustomSlider = {
  parts: [
    "container",
    "helper",
    "leftValue",
    "rightValue",
    "textInput",
    "filledTrack",
    "track",
    "thumb",
  ],
  baseStyle: ({ isDisabled, isInvalid, isRangeSlider, showBoxes }) => {
    let baseColor = "ui.link.primary";
    if (isInvalid) {
      baseColor = "ui.error.primary";
    } else if (isDisabled) {
      baseColor = "ui.gray.light-cool";
    }

    return {
      container: {
        display: "flex",
        alignItems: "center",
      },
      helper: {
        marginTop: "xs",
      },
      leftValue: {
        ...staticValues,
        // If the text input boxes are shown, then there already is a
        // margin, so we can set this static value to "0". But for the
        // single Slider, we *do* need the margin set.
        marginLeft: showBoxes && isRangeSlider ? "0" : "s",
      },
      rightValue: {
        ...staticValues,
        // If the text input boxes are shown, then there already is
        // a margin, so we can set this static value to "0".
        marginRight: showBoxes ? "0" : "s",
      },
      textInput: {
        // Allows for three or more digits present in the
        // min or max value text input.
        minWidth: "65px",
        color: isInvalid ? "ui.error.primary" : "ui.black",
      },
      // Filled track doesn't have a _disabled or _invalid state...
      // so we manually do it through the props.
      filledTrack: {
        bgColor: baseColor,
      },
      track: {
        bgColor: "ui.gray.light-cool",
        _disabled: {
          bgColor: "ui.gray.light-cool",
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
      },
    };
  },
};

export default CustomSlider;
