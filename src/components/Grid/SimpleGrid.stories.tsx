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
          src: "http://placekitten.com/400/220",
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
          src: "http://placekitten.com/400/220",
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
          src: "http://placekitten.com/400/240",
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
          src: "http://placekitten.com/400/260",
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
          src: "http://placekitten.com/400/320",
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
          src: "http://placekitten.com/400/300",
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
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
      <Image src="http://placekitten.com/300/300" alt="" />
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
          src: "http://placekitten.com/400/200",
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
          src: "http://placekitten.com/410/210",
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
          src: "http://placekitten.com/320/320",
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
