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
    "imageProps.isLazy": {
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
  } as any,
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
    imageProps: undefined,
    "imageProps.alt": "Alt text",
    "imageProps.aspectRatio": "square",
    "imageProps.caption": undefined,
    "imageProps.component": undefined,
    "imageProps.credit": undefined,
    "imageProps.isAtEnd": false,
    "imageProps.isLazy": true,
    "imageProps.size": "default",
    "imageProps.src": "//placekitten.com/400/300",
    isAlignedRightActions: false,
    isBordered: false,
    isCentered: false,
    layout: "row",
    mainActionLink: undefined,
    styles: undefined,
  } as any,
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
        isLazy: args["imageProps.isLazy"],
        size: args["imageProps.size"],
        src: args["imageProps.src"],
      }}
      isAlignedRightActions={args.isAlignedRightActions}
      isBordered={args.isBordered}
      isCentered={args.isCentered}
      layout={args.layout}
      mainActionLink={args.mainActionLink}
    >
      <CardHeading
        level="h3"
        id="main-heading1"
        subtitle="Sollicitudin Lorem Tortor Purus Ornare"
      >
        Optional Header
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
          isLazy: true,
          src: "//placekitten.com/400/200",
        }}
      >
        <CardHeading level="h3" id="props-heading1" size="heading4">
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
          isLazy: true,
          src: "//placekitten.com/400/200",
        }}
      >
        <CardHeading level="h3" id="props-heading2" size="heading4">
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
          src: "//placekitten.com/400/200",
          isLazy: true,
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h3" id="row-heading1" size="heading6">
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
          isLazy: true,
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h3" id="row-heading2" size="heading6">
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
          isLazy: true,
          size: "xxsmall",
          src: "//placekitten.com/400/200",
        }}
        isCentered
      >
        <CardHeading
          level="h3"
          id="column1-heading"
          size="heading6"
          subtitle="Max-Width: 64px"
        >
          Extra Extra Small Image
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
          isLazy: true,
          size: "xsmall",
          src: "//placekitten.com/400/200",
        }}
        isCentered
      >
        <CardHeading
          level="h3"
          id="column2-heading"
          size="heading6"
          subtitle="Max-Width: 96px"
        >
          Extra Small Image
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
          isLazy: true,
          size: "small",
          src: "//placekitten.com/400/200",
        }}
        isCentered
      >
        <CardHeading
          level="h3"
          id="column3-heading"
          size="heading6"
          subtitle="Max-Width: 165px"
        >
          Small Image
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
          isLazy: true,
          size: "medium",
          src: "//placekitten.com/400/200",
        }}
        isCentered
      >
        <CardHeading
          level="h3"
          id="column4-heading"
          size="heading6"
          subtitle="Max-Width: 225px"
        >
          Medium Image
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
          isLazy: true,
          size: "large",
          src: "//placekitten.com/400/200",
        }}
        isCentered
      >
        <CardHeading
          level="h3"
          id="column5-heading"
          size="heading6"
          subtitle="Max-Width: 360px"
        >
          Large Image
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
          isLazy: true,
          src: "//placekitten.com/400/200",
        }}
        isCentered
      >
        <CardHeading
          level="h3"
          id="column6-heading"
          size="heading6"
          subtitle="Width: 100%"
        >
          Default Image
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
          isLazy: true,
          size: "xxsmall",
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="row1-heading"
          size="heading6"
          subtitle="Max-Width: 64px"
        >
          Extra Extra Small Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isLazy: true,
          size: "xsmall",
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="row2-heading"
          size="heading6"
          subtitle="Max-Width: 96px"
        >
          Extra Small Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isLazy: true,
          size: "small",
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="row3-heading"
          size="heading6"
          subtitle="Max-Width: 165px"
        >
          Small Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isLazy: true,
          size: "medium",
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="row4-heading"
          size="heading6"
          subtitle="Max-Width: 225px"
        >
          Medium Image
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
          isLazy: true,
          size: "large",
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="row5-heading"
          size="heading6"
          subtitle="Max-Width: 360px"
        >
          Large Image
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
          isLazy: true,
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="row6-heading"
          size="heading6"
          subtitle="Max-Width: 225px"
        >
          Default Image
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
        component: <Image src="//placekitten.com/400/400" alt="Alt text" />,
      }}
    >
      <CardHeading
        level="h3"
        id="img1-heading1"
        size="heading5"
        subtitle="Subtitle on the card"
      >
        Card Component with Custom Image Component
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
export const HeadingAsLink: Story = {
  render: () => (
    <Card
      imageProps={{
        alt: "Alt text",
        aspectRatio: "twoByOne",
        src: "//placekitten.com/400/200",
      }}
    >
      <CardHeading
        level="h3"
        id="link-heading1"
        size="heading5"
        subtitle={
          <>
            Go to NYPL <Link href="http://nypl.org">home page</Link>.
          </>
        }
        url="http://nypl.org"
      >
        Go to NYPL home page.
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

export const FullClick: Story = {
  render: () => (
    <SimpleGrid columns={2}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "//placekitten.com/400/200",
        }}
        mainActionLink="http://nypl.org"
      >
        <CardHeading
          level="h3"
          id="fullclick1-heading1"
          size="heading5"
          subtitle="Some other subtitle."
        >
          Go to NYPL home page.
        </CardHeading>
        <CardContent>
          This entire `Card` component is clickable, but the links below are
          still accessible by tabbing through the `Card` and pressing `enter` or
          clicking with a mouse.
        </CardContent>
        <CardActions>
          <Link href="#" type="buttonPrimary">
            Link Button
          </Link>
          <Link href="#" type="buttonSecondary">
            Other Link
          </Link>
        </CardActions>
      </Card>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isAtEnd: true,
          src: "//placekitten.com/410/210",
        }}
        mainActionLink="http://nypl.org"
      >
        <CardHeading level="h3" id="fullclick2-heading1" size="heading5">
          Go to NYPL home page.
        </CardHeading>
        <CardContent>
          This `Card` component does not have any extra links.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
  name: "Full-Click Functionality",
};

export const CardFullClickTurbineExample: Story = {
  render: () => (
    <SimpleGrid columns={3}>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/lunar-new-year#above-header-notification"
      >
        <CardHeading level="h3" overline="Example" size="heading6">
          Lunar New Year Blog
        </CardHeading>
        <CardContent>
          A basic blog post, including text chracters outside a standard Western
          font-set.
        </CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/doc-chat-forty-two#above-header-notification"
      >
        <CardHeading level="h3" overline="Example" size="heading6">
          Doc Chat Forty-Two Blog
        </CardHeading>
        <CardContent>A blog post with an array of components.</CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/homepage#above-header-notification"
      >
        <CardHeading level="h3" overline="Example" size="heading6">
          Homepage
        </CardHeading>
        <CardContent>A layout to mimic a basic homepage structure.</CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/library-registry#above-header-notification"
      >
        <CardHeading level="h3" overline="Example" size="heading6">
          Library Registry Interface
        </CardHeading>
        <CardContent>A POC for the Library Registry admin tools.</CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/search-and-filter#above-header-notification"
      >
        <CardHeading level="h3" overline="Example" size="heading6">
          Search and Filter
        </CardHeading>
        <CardContent>
          A functional form to showcase search filtering and content cards.
        </CardContent>
      </Card>
      <Card
        isBordered
        mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/sign-up#above-header-notification"
      >
        <CardHeading level="h3" overline="Example" size="heading6">
          Sign-Up
        </CardHeading>
        <CardContent>
          A functional form to utilize multiple form input components.
        </CardContent>
      </Card>
    </SimpleGrid>
  ),
  name: "Full-Click Turbine Example",
};
export const CardWithRightSideCardActions: Story = {
  render: () => (
    <Card
      imageProps={{
        alt: "Alt text",
        aspectRatio: "square",
        size: "medium",
        src: "//placekitten.com/400/200",
      }}
      isAlignedRightActions
      isCentered
      layout="row"
    >
      <CardHeading
        level="h3"
        id="main-heading1"
        size="heading4"
        subtitle="Sollicitudin Lorem Tortor Purus Ornare"
      >
        Optional Header
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
  name: "Right Side CardActions",
};
export const GridExample: Story = {
  render: () => (
    <SimpleGrid columns={3}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isLazy: true,
          src: "//placekitten.com/400/200",
        }}
      >
        <CardHeading
          level="h3"
          id="grid1-heading1"
          noSpace
          overline="Cats"
          size="heading5"
        >
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
          isLazy: true,
          src: "//placekitten.com/410/210",
        }}
      >
        <CardHeading
          level="h3"
          id="grid2-heading1"
          noSpace
          overline="Cats"
          size="heading5"
        >
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
          isLazy: true,
          src: "//placekitten.com/420/220",
        }}
      >
        <CardHeading
          level="h3"
          id="grid3-heading1"
          noSpace
          overline="Cats"
          size="heading5"
        >
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
          isLazy: true,
          src: "//placekitten.com/430/230",
        }}
      >
        <CardHeading
          level="h3"
          id="grid4-heading1"
          noSpace
          overline="Cats"
          size="heading5"
        >
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
          isLazy: true,
          src: "//placekitten.com/440/200",
        }}
      >
        <CardHeading
          level="h3"
          id="grid5-heading1"
          noSpace
          overline="Cats"
          size="heading5"
        >
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
          isLazy: true,
          src: "//placekitten.com/450/200",
        }}
      >
        <CardHeading
          level="h3"
          id="grid6-heading1"
          noSpace
          overline="Cats"
          size="heading5"
        >
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

export const StackExample: Story = {
  render: () => (
    <SimpleGrid columns={1}>
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          isLazy: true,
          src: "//placekitten.com/400/200",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="stack1-heading1"
          noSpace
          overline="Cats"
          size="heading5"
        >
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
          isLazy: true,
          src: "//placekitten.com/410/210",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="stack2-heading2"
          noSpace
          overline="Cats"
          size="heading5"
        >
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
          isLazy: true,
          src: "//placekitten.com/420/220",
        }}
        isCentered
        layout="row"
      >
        <CardHeading
          level="h3"
          id="stack3-heading3"
          noSpace
          overline="Cats"
          size="heading5"
        >
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

export const WithoutImages: Story = {
  render: () => (
    <>
      <SimpleGrid columns={3}>
        <Card isBordered>
          <CardHeading
            level="h3"
            id="no-img1-heading1"
            overline="Cards"
            size="heading4"
            subtitle="Donec id elit non mi porta gravida at eget metus."
          >
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading
            level="h3"
            id="no-img2-heading1"
            overline="Cards"
            size="heading4"
            subtitle="Donec id elit non mi porta gravida at eget metus."
          >
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading
            level="h3"
            id="no-img3-heading1"
            overline="Cards"
            size="heading4"
            subtitle="Donec id elit non mi porta gravida at eget metus."
          >
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
          <CardHeading
            level="h3"
            id="no-img4-heading1"
            overline="Cards"
            size="heading4"
            subtitle="Donec id elit non mi porta gravida at eget metus."
          >
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
          <CardHeading
            level="h3"
            id="no-img5-heading1"
            overline="Cards"
            size="heading4"
            subtitle="Donec id elit non mi porta gravida at eget metus."
          >
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
          <CardHeading
            level="h3"
            id="no-img6-heading1"
            overline="Cards"
            size="heading4"
            subtitle="Donec id elit non mi porta gravida at eget metus."
          >
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
