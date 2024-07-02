import type { Meta, StoryObj } from "@storybook/react";

import Accordion, { AccordionDataProps } from "../Accordion/Accordion";
import Banner from "../Banner/Banner";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Button from "../Button/Button";
import Card, { CardHeading, CardContent, CardActions } from "../Card/Card";
import Form, { FormRow, FormField } from "../Form/Form";
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Link from "../Link/Link";
import Notification from "../Notification/Notification";
import Placeholder from "../Placeholder/Placeholder";
import SkipNavigation from "../SkipNavigation/SkipNavigation";
import {
  Template,
  TemplateAboveHeader,
  TemplateAppContainer,
  TemplateBreakout,
  TemplateContent,
  TemplateContentBottom,
  TemplateContentPrimary,
  TemplateContentSidebar,
  TemplateContentTop,
  TemplateFooter,
  TemplateHeader,
} from "./Template";
import TextInput from "../TextInput/TextInput";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";
import { argsBooleanType } from "../../helpers/storybookUtils";
import { getPlaceholderImage } from "../../utils/utils";

const meta: Meta<typeof TemplateAppContainer> = {
  title: "Components/Page Layout/Template",
  component: TemplateAppContainer,
};

export default meta;
type Story = StoryObj<typeof TemplateAppContainer>;

const otherSubHeaderText =
  "With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";
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

// Used to set dynamic labels for content columns.
const ResponsiveColumnLabels = (useLegacyGrid) => {
  const {
    isLargerThanMobile,
    isLargerThanSmallMobile,
    isLargerThanLargeMobile,
    isLargerThanSmallTablet,
    isLargerThanLargeTablet,
  } = useNYPLBreakpoints();
  let sidebarLabel;
  let contentLabel;
  if (useLegacyGrid) {
    sidebarLabel = "Legacy grid (full width)";
    contentLabel = "Legacy grid (full width)";
    if (isLargerThanMobile) {
      sidebarLabel = "Legacy grid (255px fixed)";
      contentLabel = "Legacy grid (fills remaing space)";
    }
  } else {
    sidebarLabel = "Small mobile (full width)";
    contentLabel = "Small mobile (full width)";
    if (isLargerThanSmallMobile) {
      sidebarLabel = "Large mobile (1/2)";
      contentLabel = "Large mobile (1/2)";
    }
    if (isLargerThanLargeMobile) {
      sidebarLabel = "Small tablet (1/3)";
      contentLabel = "Small tablet (2/3)";
    }
    if (isLargerThanSmallTablet) {
      sidebarLabel = "Large tablet (1/4)";
      contentLabel = "Large tablet (3/4)";
    }
    if (isLargerThanLargeTablet) {
      sidebarLabel = "Desktop (1/4)";
      contentLabel = "Desktop (3/4)";
    }
  }
  return {
    sidebarLabel,
    contentLabel,
  };
};

/**
 * Main Story for the Template component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    aboveHeader: (
      <Placeholder variant="short">
        <Heading size="heading4" noSpace text="Above Header" />
      </Placeholder>
    ),
    breakout: (
      <>
        <Placeholder variant="short">
          <Heading size="heading4" noSpace text="Breadcrumbs" />
        </Placeholder>
        <Placeholder>
          <Heading size="heading4" noSpace text="Hero" />
        </Placeholder>
      </>
    ),
    contentBottom: (
      <Placeholder variant="short">
        <Heading size="heading4" noSpace text="Content Bottom" />
      </Placeholder>
    ),
    contentId: "mainContent",
    contentPrimary: (
      <>
        <Placeholder>Main Content</Placeholder>
        <Placeholder variant="short">More Content</Placeholder>
      </>
    ),
    contentSidebar: (
      <Placeholder>
        <Heading size="heading4" noSpace text="Sidebar" />
      </Placeholder>
    ),
    contentTop: (
      <Placeholder variant="short">
        <Heading size="heading4" noSpace text="Content Top" />
      </Placeholder>
    ),
    footer: (
      <Placeholder>
        <Heading size="heading4" noSpace text="Footer" />
      </Placeholder>
    ),
    header: (
      <Placeholder variant="short">
        <Heading size="heading4" noSpace text="Header" />
      </Placeholder>
    ),
    renderFooterElement: true,
    renderHeaderElement: true,
    renderSkipNavigation: false,
    sidebar: "left",
  },
  argTypes: {
    aboveHeader: { control: false },
    breakout: { control: false },
    contentBottom: { control: false },
    contentPrimary: { control: false },
    contentSidebar: { control: false },
    contentTop: { control: false },
    footer: { control: false },
    header: { control: false },
    renderSkipNavigation: argsBooleanType(),
    sidebar: {
      table: { defaultValue: { summary: "none" } },
    },
    useLegacyGrid: {
      table: { defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    <TemplateAppContainer
      {...args}
      contentPrimary={
        <Placeholder>
          <Heading
            size="heading4"
            noSpace
            subtitle={ResponsiveColumnLabels(args.useLegacyGrid).contentLabel}
            text="Main Content"
          />
        </Placeholder>
      }
      contentSidebar={
        <Placeholder>
          <Heading
            size="heading4"
            noSpace
            subtitle={ResponsiveColumnLabels(args.useLegacyGrid).sidebarLabel}
            text="Sidebar"
          />
        </Placeholder>
      }
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26688",
    },
  },
};
// The following are additional Template example Stories.
export const ChildrenComponentProps: Story = {
  args: {
    sidebar: "left",
  },
  argTypes: {
    aboveHeader: { table: { disable: true } },
    breakout: { table: { disable: true } },
    contentBottom: { table: { disable: true } },
    contentId: { table: { disable: true } },
    contentPrimary: { table: { disable: true } },
    contentSidebar: { table: { disable: true } },
    contentTop: { table: { disable: true } },
    footer: { table: { disable: true } },
    header: { table: { disable: true } },
    sidebar: { description: "Only used in Storybook." },
  },
  render: (args) => (
    <>
      <SkipNavigation />
      <Template>
        <TemplateBreakout>
          <TemplateAboveHeader>
            <Placeholder variant="short">Above Header</Placeholder>
          </TemplateAboveHeader>
          <TemplateHeader>
            <Placeholder variant="short">Header</Placeholder>
            <Placeholder variant="short">Breadcrumbs</Placeholder>
            <Placeholder>Hero</Placeholder>
          </TemplateHeader>
        </TemplateBreakout>
        <TemplateContent sidebar={args.sidebar} useLegacyGrid={false}>
          <TemplateContentTop useLegacyGrid={false}>
            <Placeholder variant="short">Content Top</Placeholder>
          </TemplateContentTop>
          {args.sidebar === "left" && (
            <TemplateContentSidebar useLegacyGrid={false}>
              <Placeholder>
                <Heading
                  size="heading4"
                  noSpace
                  subtitle={ResponsiveColumnLabels(false).sidebarLabel}
                  text="Sidebar"
                />
              </Placeholder>
            </TemplateContentSidebar>
          )}
          <TemplateContentPrimary useLegacyGrid={false}>
            <Placeholder>
              <Heading
                size="heading4"
                noSpace
                subtitle={ResponsiveColumnLabels(false).contentLabel}
                text="Main Content"
              />
            </Placeholder>
          </TemplateContentPrimary>
          {args.sidebar === "right" && (
            <TemplateContentSidebar useLegacyGrid={false}>
              <Placeholder>
                <Heading
                  size="heading4"
                  noSpace
                  subtitle={ResponsiveColumnLabels(false).sidebarLabel}
                  text="Sidebar"
                />
              </Placeholder>
            </TemplateContentSidebar>
          )}
          <TemplateContentBottom useLegacyGrid={false}>
            <Placeholder variant="short">Content Bottom</Placeholder>
          </TemplateContentBottom>
        </TemplateContent>
        <TemplateFooter>
          <Placeholder>Footer</Placeholder>
        </TemplateFooter>
      </Template>
    </>
  ),
};

export const FullExampleWithTemplateChildrenComponents: Story = {
  render: () => (
    <>
      <SkipNavigation />
      <Template>
        <TemplateBreakout>
          <TemplateAboveHeader>
            <Notification
              noMargin
              notificationHeading="Standard Notification"
              notificationContent={
                <>
                  This is an "announcement" Notification with a heading. Cras
                  mattis consectetur purus sit amet fermentum. Maecenas faucibus
                  mollis interdum. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
                </>
              }
              showIcon={false}
            />
          </TemplateAboveHeader>
          <TemplateHeader>
            <Breadcrumbs
              breadcrumbsData={[
                { url: "#", text: "Home" },
                { url: "#", text: "Research" },
                {
                  url: "#",
                  text: "Catalog",
                },
              ]}
            />
            <Hero
              backgroundImageSrc={getPlaceholderImage()}
              heroType="campaign"
              heading={<Heading level="h1" id="1" text="Hero Campaign" />}
              imageProps={{
                alt: "Image example",
                src: getPlaceholderImage("smaller"),
              }}
              isDarkBackgroundImage
              subHeaderText={otherSubHeaderText}
            />
          </TemplateHeader>
        </TemplateBreakout>
        <TemplateContent sidebar="right" useLegacyGrid={false}>
          <TemplateContentTop useLegacyGrid={false}>
            <Banner
              content={<>This is an the top content area!</>}
              heading="Top Content"
              type="informative"
            />
          </TemplateContentTop>
          <TemplateContentPrimary useLegacyGrid={false}>
            <p>This is the main content!</p>
            <Accordion accordionData={faqContentData} />
            <HorizontalRule />
            <p>Fill out the form!</p>
            <Form action="/end/point" id="form1">
              <FormField>
                <TextInput
                  helperText="Make sure to complete this field."
                  id="username"
                  labelText="Username"
                  isRequired
                />
              </FormField>
              <FormField>
                <TextInput
                  helperText="Make sure to complete this field."
                  id="password"
                  labelText="Password"
                  isRequired
                />
              </FormField>
              <FormRow>
                <FormField>
                  <TextInput
                    id="phone-field"
                    labelText="Phone Field"
                    type="tel"
                  />
                </FormField>
                <FormField>
                  <TextInput id="url-field" labelText="URL Field" type="url" />
                </FormField>
                <FormField>
                  <TextInput id="age-field" labelText="Age" type="number" />
                </FormField>
              </FormRow>
              <FormField>
                <Button id="submit">Submit</Button>
              </FormField>
            </Form>
          </TemplateContentPrimary>
          <TemplateContentSidebar useLegacyGrid={false}>
            <p>Sidebar information in a `Card` component.</p>
            <Card
              imageProps={{
                alt: "Alt text",
                aspectRatio: "square",
                size: "default",
                src: getPlaceholderImage("smaller"),
              }}
              isCentered
            >
              <CardHeading size="heading4" subtitle="Animal info" id="heading1">
                Library Image
              </CardHeading>
              <CardContent>
                Vestibulum id ligula porta felis euismod semper. Nulla vitae
                elit libero, a pharetra augue.
              </CardContent>
            </Card>
          </TemplateContentSidebar>
          <TemplateContentBottom useLegacyGrid={false}>
            <Banner
              content={<>This is an the bottom content area!</>}
              heading="Bottom Content"
              type="informative"
            />
          </TemplateContentBottom>
        </TemplateContent>
        <TemplateFooter>
          <Card
            id="custom-card"
            imageProps={{
              alt: "Alt text",
              aspectRatio: "sixteenByNine",
              src: "https://cdn-d8.nypl.org/s3fs-public/2020-05/NYPL_MainFacadeRev2Cam2.png",
            }}
            layout="row"
            backgroundColor="#616161"
            foregroundColor="#FFF"
          >
            <CardHeading id="heading1-footer">Footer</CardHeading>
            <CardContent>
              <p>This is an example footer using the `Card` component.</p>
              <p>
                © The New York Public Library, 2021 The New York Public Library
                is a 501(c)(3) | EIN 13-1887440
              </p>
            </CardContent>
            <CardActions>
              <Link color="#FFF" href="#" textDecoration="underline">
                Facebook
              </Link>
              ,
              <Link color="#FFF" href="#" textDecoration="underline">
                Instagram
              </Link>
              ,
              <Link color="#FFF" href="#" textDecoration="underline">
                Twitter
              </Link>
            </CardActions>
          </Card>
        </TemplateFooter>
      </Template>
    </>
  ),
};
