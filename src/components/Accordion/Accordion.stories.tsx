import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { argsBooleanType } from "../../helpers/storybookUtils";

import { Accordion, AccordionDataProps } from "./Accordion";
import Card, { CardHeading, CardContent } from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import Heading from "../Heading/Heading";

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
        <CardHeading level="h4" id="heading1">
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

const accordionLongTextData: AccordionDataProps[] = [
  {
    accordionType: "default",
    label: "Tom Nook",
    panel: (
      <Card>
        <CardHeading level="h4" id="heading1">
          Tom Nook
        </CardHeading>
        <CardContent>
          <p>
            Tom Nook (たぬきち Tanukichi?, a Tanuki) is a character who plays
            the most important role in all of the games. He is termed a raccoon
            in the western versions of the game but a tanuki in the Japanese
            version.
          </p>
          <p>
            In all games leading to New Leaf, he is the manager of the town
            shop. After the final expansion, Nookington's, he will employ his
            'nephews' Timmy and Tommy, who work on the second floor in every
            Animal Crossing series game except New Leaf and New Horizons.
          </p>
          <p>
            In New Leaf, Nook has taken his interest in real estate to a whole
            new level, opening Nook's Homes, whilst Timmy and Tommy run the town
            shop. In New Horizons, Nook acts as the head of Nook Incorporated.
            He acts as the leader on the island, acting as task giver and island
            upgrader. In Wild World, he will give out his picture if the player
            gives him the safe from the Golden Axe Trading Event.
          </p>
        </CardContent>
      </Card>
    ),
  },
];

const faqContentData: AccordionDataProps[] = [
  ...accordionData,
  {
    accordionType: "warning",
    label: "Isabelle",
    panel: (
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h4" id="heading1-isabelle">
          Isabelle
        </CardHeading>
        <CardContent>
          Isabelle, known as Shizue in Japan, is a fictional character from the
          Animal Crossing series of video games. She is a kindly Shih Tzu that
          debuted in the 2012 release Animal Crossing: New Leaf, where she
          serves as the secretary to the player character.
        </CardContent>
      </Card>
    ),
  },
  {
    accordionType: "error",
    label: "K.K. Slider",
    panel: (
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h4" id="heading1-kkslider">
          K.K. Slider
        </CardHeading>
        <CardContent>
          <p>
            Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a
            fictional character within the Animal Crossing franchise. One of the
            franchise's most popular characters, he debuted in the title Animal
            Crossing, and has appeared in every installment since.
          </p>
        </CardContent>
      </Card>
    ),
  },
];

const meta: Meta<typeof Accordion> = {
  title: "Components/Overlays & Switchers/Accordion",
  component: Accordion,
  decorators: [withDesign],
  argTypes: {
    accordionData: {
      options: ["defaultData", "longTextData", "faqData"],
      mapping: {
        defaultData: accordionData,
        longTextData: accordionLongTextData,
        faqData: faqContentData,
      },
    },
    id: { control: false },
    isDefaultOpen: argsBooleanType(),
    isAlwaysRendered: argsBooleanType(),
    panelMaxHeight: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/**
 * Main Story for the Accordion component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    accordionData,
    id: "accordion-id",
    isDefaultOpen: false,
    isAlwaysRendered: false,
    panelMaxHeight: undefined,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
    },
    jest: "Accordion.test.tsx",
  },
};

// The following are additional Accordion example Stories.
export const FaqContent: Story = {
  render: () => <Accordion accordionData={faqContentData} />,
  name: "FAQ Content",
};
export const PanelMaxHeightExample: Story = {
  render: () => (
    <Accordion accordionData={accordionData} panelMaxHeight="100px" />
  ),
  name: "panelMaxHeight Example",
};
export const PanelMaxHeightExample2: Story = {
  render: () => (
    <Accordion accordionData={accordionLongTextData} panelMaxHeight="100px" />
  ),
  name: "panelMaxHeight Example with Long Text",
};

const onChange = (data) => {
  console.log(data);
};
const getAccordionData = (key): AccordionDataProps[] => [
  {
    accordionType: "default",
    label: "Subjects",
    panel: (
      <CheckboxGroup
        id="accordion-checkbox-example"
        labelText="Subjects"
        name={`accordionExample${key}`}
        showLabel={false}
        defaultValue={["music"]}
        onChange={onChange}
      >
        <Checkbox id="1" value="art" labelText="Art" />
        <Checkbox id="2" value="chemistry" labelText="Chemistry" />
        <Checkbox id="3" value="history" labelText="History" />
        <Checkbox id="4" value="music" labelText="Music" />
        <Checkbox id="5" value="science" labelText="Science" />
      </CheckboxGroup>
    ),
  },
];

export const IsAlwaysRendered: Story = {
  render: () => (
    <VStack align="stretch" spacing="s">
      <Heading level="h3" size="heading5">
        Accordion panel is removed when closed
      </Heading>
      <Accordion accordionData={getAccordionData(0)} />
      <Heading level="h3" size="heading5">
        Accordion panel is always rendered
      </Heading>
      <Accordion accordionData={getAccordionData(1)} isAlwaysRendered />
    </VStack>
  ),
  name: "isAlwaysRendered",
};
