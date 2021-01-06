import * as React from "react";

import Image from "./Image";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Image",
  component: Image,
};

let showCaption, showCredit;

const imageRatios = {
  "1x1": "https://placeimg.com/100/100/animals",
  "2x1": "https://placeimg.com/200/100/animals",
  "3x4": "https://placeimg.com/150/200/animals",
  "4x1": "https://placeimg.com/400/100/animals",
  "4x3": "https://placeimg.com/200/150/animals",
  "16x9": "https://placeimg.com/400/225/animals",
};

export const ImageWithOptionalCaptionandCredit = () => (
  <>
    {boolean("Show Caption", true)
      ? (showCaption = true)
      : (showCaption = false)}
    {boolean("Show Credit", true) ? (showCredit = true) : (showCredit = false)}
    <Image
      src={select("Initial Selected Option", imageRatios, imageRatios["2x1"])}
      imageCaption={
        showCaption
          ? text("Image Caption", "Deserted Islander Relocator")
          : null
      }
      imageCredit={
        showCredit ? text("Image Credit", "Taken by Tom Nook") : null
      }
      modifiers={boolean("Apply Circle Mask", false) ? ["circle"] : null}
      alt={text("Image alt", "alt")}
    />
  </>
);

ImageWithOptionalCaptionandCredit.storyName =
  "Image with Optional Caption and Credit";
ImageWithOptionalCaptionandCredit.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379",
  },
};
