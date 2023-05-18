import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Button from "../Button/Button";
import Card, { CardHeading, CardContent, CardActions } from "./Card";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Image from "../Image/Image";
import Link from "../Link/Link";
import SimpleGrid from "../Grid/SimpleGrid";
import { layoutTypesArray } from "../../helpers/types";

const meta: Meta<typeof Card> = {
  title: "Components/Basic Elements/Card",
  component: Card,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: { type: "color" } },
    className: { control: false },
    foregroundColor: { control: { type: "color" } },
    id: { control: false },
    imageProps: { disable: true },
    "imageProps.alt": {
      control: { type: "text" },
      table: { defaultValue: { summary: "" } },
    },
    "imageProps.aspectRatio": {
      table: { defaultValue: { summary: "square" } },
    },
    "imageProps.caption": { control: false },
    "imageProps.component": { control: false },
    "imageProps.credit": { control: false },
    "imageProps.isAtEnd": {
      table: { defaultValue: { summary: false } },
    },
    "imageProps.size": {
      table: { defaultValue: { summary: "default" } },
    },
    "imageProps.src": {
      table: { defaultValue: { summary: "" } },
    },
    isAlignedRightActions: {
      table: { defaultValue: { summary: false } },
    },
    isBordered: {
      table: { defaultValue: { summary: false } },
    },
    isCentered: {
      table: { defaultValue: { summary: false } },
    },
    layout: {
      control: { type: "select" },
      options: layoutTypesArray,
      table: { defaultValue: { summary: "column" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Main Story for the Card component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    backgroundColor: undefined,
    className: undefined,
    foregroundColor: undefined,
    id: "card-id",
    "imageProps.alt": "Alt text",
    "imageProps.aspectRatio": "square",
    "imageProps.component": undefined,
    "imageProps.isAtEnd": false,
    "imageProps.size": "default",
    "imageProps.src": "https://placeimg.com/400/300/animals",
    isAlignedRightActions: false,
    isBordered: false,
    isCentered: false,
    layout: "row",
    mainActionLink: undefined,
  },
  render: (args) => (
    <Card
      backgroundColor={args.backgroundColor}
      className={args.className}
      foregroundColor={args.foregroundColor}
      id={args.id}
      imageProps={{
        alt: args["imageProps.alt"],
        aspectRatio: args["imageProps.aspectRatio"],
        component: args["imageProps.component"],
        isAtEnd: args["imageProps.isAtEnd"],
        size: args["imageProps.size"],
        src: args["imageProps.src"],
      }}
      isAlignedRightActions={args.isAlignedRightActions}
      isBordered={args.isBordered}
      isCentered={args.isCentered}
      layout={args.layout}
      mainActionLink={args.mainActionLink}
    >
      <CardHeading level="two" id="main-heading1">
        Optional Header
      </CardHeading>
      <CardHeading level="three" id="main-heading2">
        Sollicitudin Lorem Tortor Purus Ornare
      </CardHeading>
      <CardContent>
        Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
        libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel
        eu leo. Nulla vitae elit libero, a pharetra augue.
      </CardContent>
      <CardActions topBorder bottomBorder>
        <Button id="main-button1" onClick={action("clicked")} type="submit">
          Primary
        </Button>
        <Button
          buttonType="secondary"
          id="main-button2"
          onClick={action("clicked")}
          type="submit"
        >
          Secondary
        </Button>
      </CardActions>
      <CardActions>
        <Link href="#">#hash1</Link>,<Link href="#">#hash2</Link>,
        <Link href="#">#hash3</Link>
      </CardActions>
    </Card>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25747",
    },
    jest: ["Card.test.tsx"],
  },
};

export const ImagePositionColumnCards: Story = {
  render: () => (
    <SimpleGrid columns={2}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/200/animals",
        }}
      >
        <CardHeading level="three" id="props-heading1">
          Image on Top (default)
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isAtEnd: true,
          src: "https://placeimg.com/400/200/animals",
        }}
      >
        <CardHeading level="three" id="props-heading2">
          Image on Bottom
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
};

export const ImagePositionRowCards: Story = {
  render: () => (
    <SimpleGrid columns={1}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="row-heading1">
          Image on Left (default)
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
          aspectRatio: "twoByOne",
          isAtEnd: true,
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="row-heading2">
          Image on Right
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

export const ImageSizeColumnCards: Story = {
  render: () => (
    <SimpleGrid columns={1}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "square",
          size: "xxsmall",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
      >
        <CardHeading level="three" id="column-heading1">
          Extra Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="column-heading2">
          Max-Width: 64px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "square",
          size: "xsmall",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
      >
        <CardHeading level="three" id="column-heading1">
          Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="column-heading2">
          Max-Width: 96px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "square",
          size: "small",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
      >
        <CardHeading level="three" id="column-heading1">
          Small Image
        </CardHeading>
        <CardHeading level="four" id="column-heading2">
          Max-Width: 165px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "square",
          size: "medium",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
      >
        <CardHeading level="three" id="column2-heading1">
          Medium Image
        </CardHeading>
        <CardHeading level="four" id="column2-heading2">
          Max-Width: 225px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "square",
          size: "large",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
      >
        <CardHeading level="three" id="column3-heading1">
          Large Image
        </CardHeading>
        <CardHeading level="four" id="column3-heading2">
          Max-Width: 360px
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "square",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
      >
        <CardHeading level="three" id="column-4heading1">
          Default Image
        </CardHeading>
        <CardHeading level="four" id="column-4heading2">
          Width: 100%
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
};
export const ImageSizeRowCards: Story = {
  render: () => (
    <SimpleGrid columns={1}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          size: "xxsmall",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="three" id="row2-heading1">
          Extra Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="row2-heading2">
          Max-Width: 64px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          size: "xsmall",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="three" id="row2-heading1">
          Extra Small Image
        </CardHeading>
        <CardHeading level="four" id="row2-heading2">
          Max-Width: 96px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          size: "small",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="three" id="row2-heading1">
          Small Image
        </CardHeading>
        <CardHeading level="four" id="row2-heading2">
          Max-Width: 165px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          size: "medium",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="three" id="row3-heading2">
          Medium Image
        </CardHeading>
        <CardHeading level="four" id="row3-heading2">
          Max-Width: 225px
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          size: "large",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="three" id="row4-heading1">
          Large Image
        </CardHeading>
        <CardHeading level="four" id="row4-heading2">
          Max-Width: 360px
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
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="three" id="row5-heading2">
          Default Image
        </CardHeading>
        <CardHeading level="four" id="row5-heading2">
          Max-Width: 225px
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

export const CustomImageComponent: Story = {
  render: () => (
    <Card
      imageProps={{
        alt: "Alt text",
        component: (
          <Image src="https://placeimg.com/400/400/animals" alt="Alt text" />
        ),
      }}
    >
      <CardHeading level="two" id="img1-heading1">
        Card Component with Custom Image Component
      </CardHeading>
      <CardHeading level="three" id="img2-heading2">
        Secondary Heading
      </CardHeading>
      <CardContent>
        Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean lacinia bibendum nulla sed
        consectetur. Vestibulum id ligula porta felis euismod semper. Cras justo
        odio, dapibus ac facilisis in, egestas eget quam. Sed posuere
        consectetur est at lobortis.
      </CardContent>
      <CardActions>
        <Link type="button" href="#">
          Reserve
        </Link>
        <Link href="#url" type="forwards">
          View Book Details
        </Link>
      </CardActions>
    </Card>
  ),
};
export const CardWithLinkHeading: Story = {
  render: () => (
    <Card
      imageProps={{
        alt: "Alt text",
        aspectRatio: "twoByOne",
        src: "https://placeimg.com/400/200/animals",
      }}
    >
      <CardHeading level="three" id="link-heading1" url="http://nypl.org">
        Go to NYPL home page.
      </CardHeading>
      <CardHeading level="four" id="link-heading2">
        <>
          Go to NYPL <Link href="http://nypl.org">home page</Link>.
        </>
      </CardHeading>
      <CardContent>
        This entire `Card` component is clickable, but the links below are still
        accessible by tabbing through the `Card` and pressing `enter` or
        clicking with a mouse.
      </CardContent>
      <CardActions>
        <Link href="#" type="button">
          Button
        </Link>
        <Link href="#" type="forwards">
          Other link
        </Link>
      </CardActions>
    </Card>
  ),
};

export const CardFullClick: Story = {
  render: () => (
    <SimpleGrid columns={2}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/200/animals",
        }}
        mainActionLink="http://nypl.org"
      >
        <CardHeading level="three" id="fullclick1-heading1">
          Go to NYPL home page.
        </CardHeading>
        <CardHeading level="four" id="fullclick1-heading2">
          Some other heading.
        </CardHeading>
        <CardContent>
          This entire `Card` component is clickable, but the links below are
          still accessible by tabbing through the `Card` and pressing `enter` or
          clicking with a mouse.
        </CardContent>
        <CardActions>
          <Link href="#" type="button">
            Button
          </Link>
          <Link href="#" type="forwards">
            Other link
          </Link>
        </CardActions>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isAtEnd: true,
          src: "https://placeimg.com/410/210/animals",
        }}
        mainActionLink="http://nypl.org"
      >
        <CardHeading level="three" id="fullclick2-heading1">
          Go to NYPL home page.
        </CardHeading>
        <CardContent>
          This `Card` component does not have any extra links.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
  name: "Card with Full-Click Functionality",
};

export const CardFullClickTurbineExample: Story = {
  render: () => (
    <SimpleGrid columns={3}>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/lunar-new-year#above-header-notification"
      >
        <CardHeading level="four">Lunar New Year Blog</CardHeading>
        <CardContent>
          A basic blog post, including text chracters outside a standard Western
          font-set.
        </CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/doc-chat-forty-two#above-header-notification"
      >
        <CardHeading level="four">Doc Chat Forty-Two Blog</CardHeading>
        <CardContent>A blog post with an array of components.</CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/homepage#above-header-notification"
      >
        <CardHeading level="four">Homepage</CardHeading>
        <CardContent>A layout to mimic a basic homepage structure.</CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/library-registry#above-header-notification"
      >
        <CardHeading level="four">Library Registry Interface</CardHeading>
        <CardContent>A POC for the Library Registry admin tools.</CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/search-and-filter#above-header-notification"
      >
        <CardHeading level="four">Search and Filter</CardHeading>
        <CardContent>
          A functional form to showcase search filtering and content cards.
        </CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/sign-up#above-header-notification"
      >
        <CardHeading level="four">Sign-Up</CardHeading>
        <CardContent>
          A functional form to utilize multiple form input components.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
  name: "Card with Full-Click Functionality Turbine Example",
};
export const CardWithRightSideCardActions: Story = {
  render: () => (
    <Card
      imageProps={{
        alt: "Alt text",
        aspectRatio: "twoByOne",
        size: "medium",
        src: "https://placeimg.com/400/200/animals",
      }}
      isAlignedRightActions
      isCentered
      layout="row"
    >
      <CardHeading level="two" id="main-heading1">
        Optional Header
      </CardHeading>
      <CardHeading level="three" id="main-heading2">
        Sollicitudin Lorem Tortor Purus Ornare
      </CardHeading>
      <CardContent>
        Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
        libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel
        eu leo. Nulla vitae elit libero, a pharetra augue.
      </CardContent>
      <CardActions topBorder bottomBorder>
        <Button onClick={action("clicked")} id="main-button1" type="submit">
          Primary
        </Button>
        <Button
          onClick={action("clicked")}
          id="main-button2"
          buttonType="secondary"
          type="submit"
        >
          Secondary
        </Button>
      </CardActions>
      <CardActions>
        <Link href="#">#hash1</Link>,<Link href="#">#hash2</Link>,
        <Link href="#">#hash3</Link>
      </CardActions>
    </Card>
  ),
  name: "Card with Right Side CardActions",
};
export const CardsInAGrid: Story = {
  render: () => (
    <SimpleGrid columns={3}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/200/animals",
        }}
      >
        <CardHeading level="three" id="grid1-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/410/210/animals",
        }}
      >
        <CardHeading level="three" id="grid2-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/420/220/animals",
        }}
      >
        <CardHeading level="three" id="grid3-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/430/230/animals",
        }}
      >
        <CardHeading level="three" id="grid4-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/440/200/animals",
        }}
      >
        <CardHeading level="three" id="grid5-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/450/200/animals",
        }}
      >
        <CardHeading level="three" id="grid6-heading1">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
};

export const CardsInAStack: Story = {
  render: () => (
    <SimpleGrid columns={1}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/400/200/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="stack1-heading1">
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
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/410/210/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="stack2-heading2">
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
          aspectRatio: "twoByOne",
          src: "https://placeimg.com/420/220/animals",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="four" id="stack3-heading3">
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

export const CardsWithoutImages: Story = {
  render: () => (
    <>
      <SimpleGrid columns={3}>
        <Card isBordered>
          <CardHeading level="three" id="no-img1-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading level="three" id="no-img2-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading level="three" id="no-img3-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
      </SimpleGrid>
      <br />
      <SimpleGrid columns={1}>
        <Card layout="row" isBordered>
          <CardHeading level="three" id="no-img4-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
        <Card layout="row" isBordered>
          <CardHeading level="three" id="no-img5-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
        <Card layout="row" isBordered>
          <CardHeading level="three" id="no-img6-heading1">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
      </SimpleGrid>
    </>
  ),
};
