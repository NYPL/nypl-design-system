import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import SimpleGrid, { gridGapsArray } from "./SimpleGrid";
import Card, { CardHeading, CardContent } from "../Card/Card";
import Icon from "../Icons/Icon";
import { iconNamesArray } from "../Icons/iconVariables";
import Image from "../Image/Image";

const meta: Meta<typeof SimpleGrid> = {
  title: "Components/Page Layout/SimpleGrid",
  component: SimpleGrid,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    columns: {
      control: { min: 2, type: "number" },
    },
    gap: {
      control: { type: "select" },
      table: { defaultValue: { summary: "grid.l" } },
      options: gridGapsArray,
    },
    id: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleGrid>;

/**
 * Main Story for the SimpleGrid component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    columns: undefined,
    gap: "grid.l",
    id: "simpleGrid-id",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26613",
    },
    jest: ["SimpleGrid.test.tsx"],
  },
  render: (args) => (
    <SimpleGrid {...args}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/220/animals",
        }}
      >
        <CardHeading level="three">Card Heading</CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/220/animals",
        }}
      >
        <CardHeading level="three">Card Heading</CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/240/animals",
        }}
      >
        <CardHeading level="three">Card Heading</CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/260/animals",
        }}
      >
        <CardHeading level="three">Card Heading</CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/320/animals",
        }}
      >
        <CardHeading level="three">Card Heading</CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/300/animals",
        }}
      >
        <CardHeading level="three">Card Heading</CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
};

// The following are additional SimpleGrid example Stories.
const icons = [];
for (const name in iconNamesArray) {
  const iconRender = (
    <Icon key={name} name={iconNamesArray[name]} size="xxxlarge" />
  );
  icons.push(iconRender);
}

export const IconExample: Story = {
  render: () => <SimpleGrid columns={5}>{icons}</SimpleGrid>,
};

export const ImageExample: Story = {
  render: () => (
    <SimpleGrid columns={6}>
      <Image src="https://placeimg.com/300/300/animals?x=1" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=2" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=3" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=4" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=5" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=6" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=7" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=8" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=9" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=10" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=11" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=12" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=13" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=14" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=15" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=16" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=17" alt="" />
      <Image src="https://placeimg.com/300/300/animals?x=18" alt="" />
    </SimpleGrid>
  ),
};

export const CardExample: Story = {
  render: () => (
    <SimpleGrid columns={1}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "fourByThree",
          src: "https://placeimg.com/400/200/animals",
        }}
        isBordered
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "fourByThree",
          src: "https://placeimg.com/410/210/animals",
        }}
        isBordered
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="heading2">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "fourByThree",
          src: "https://placeimg.com/320/320/animals",
        }}
        isBordered
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="heading3">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
};
