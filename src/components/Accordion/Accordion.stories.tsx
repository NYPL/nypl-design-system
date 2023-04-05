import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Accordion, AccordionDataProps } from "./Accordion";
import Card, { CardHeading, CardContent } from "../Card/Card";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  // tags: ["autodocs"],
  argTypes: {
    accordionData: { control: false },
    id: { control: false },
    isDefaultOpen: { table: { defaultValue: { summary: false } } },
    isAlwaysRendered: { table: { defaultValue: { summary: false } } },
    panelMaxHeight: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordionData: AccordionDataProps[] = [
  {
    accordionType: "default",
    label: "Tom Nook",
    panel: (
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="heading1">
          Tom Nook
        </CardHeading>
        <CardContent>
          Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional character
          in the Animal Crossing series who operates the village store.
        </CardContent>
      </Card>
    ),
  },
];

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  // render: () => <Accordion accordionData={accordionData} />,
  args: {
    accordionData,
  },
};
