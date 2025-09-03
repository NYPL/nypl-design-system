import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Accordion, { AccordionDataProps } from "../Accordion/Accordion";
import Banner from "../Banner/Banner";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Button from "../Button/Button";
import Card, { CardHeading, CardContent } from "../Card/Card";
import FeaturedContent from "../FeaturedContent/FeaturedContent";
import Form, { FormField, FormRow } from "../Form/Form";
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Image from "../Image/Image";
import Link from "../Link/Link";
import Placeholder from "../Placeholder/Placeholder";
import SkipNavigation from "../SkipNavigation/SkipNavigation";
import SubNav, { SubNavButton, SubNavLink } from "../SubNav/SubNav";
import Table from "../Table/Table";
import Text from "../Text/Text";
import TextInput from "../TextInput/TextInput";
import {
  Template,
  TemplateBreakout,
  TemplateContent,
  TemplateFooter,
  TemplateFull,
  TemplateHeader,
  TemplateMain,
  TemplateSidebar,
  templateVariantArray,
} from "./Template";
import { getPlaceholderImage, sidebarLabel } from "../../utils/utils";
import { responsiveSpacing } from "../../theme/components/global";

const meta: Meta<typeof Template> = {
  title: "Components/Page Layout/Template",
  component: Template,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: templateVariantArray,
      table: { defaultValue: { summary: "full" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Template>;

const accordionData: AccordionDataProps[] = [
  {
    variant: "default",
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
    variant: "warning",
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
    variant: "error",
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

const columnHeadersAlt = [
  "Name",
  "Nick Name",
  "Species",
  "Description",
  "Bio",
  "Salary (USD)",
];
const tableDataAlt = [
  [
    "Tom Nook",
    "Tanukichi",
    "Raccoon",
    "A businessman who manages the town shop and the player's home loan.",
    "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.",
    "$225,000",
  ],
  [
    "Isabelle",
    "Shizue",
    "Dog",
    "A secretary and assistant to the player. Twin sister to Digby.",
    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    "$228,500",
  ],
  [
    "K.K. Slider",
    "Totakeke",
    "Dog",
    "A traveling musician and DJ. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    "Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.",
    "$157,000",
  ],
  [
    "Sonny Resetti",
    "Risetto san",
    "Mole",
    "Lectures the player if they reset their game. Brother to Don Resetti.",
    "Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    "$89,000",
  ],
];
const columnStylesComplex = [
  { minWidth: "200px", width: "15%" },
  { minWidth: "200px", width: "15%" },
  { minWidth: "200px", width: "15%" },
  { minWidth: "500px", width: "auto" },
  { minWidth: "500px", width: "auto" },
  { minWidth: "160px", width: "15%", textAlign: "right" },
];

const otherSubHeaderText =
  "With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";

/**
 * Main Story for the Template component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    variant: "sidebarLeft",
  },
  render: (args) => {
    const { variant } = args;
    return (
      <Template id="template-with-controls" {...args}>
        <TemplateHeader>
          <TemplateBreakout>
            <Placeholder variant="short">Breakout</Placeholder>
          </TemplateBreakout>
        </TemplateHeader>
        <TemplateMain border="4px dashed" borderColor="ui.border.hover" p="s">
          <TemplateFull>
            <Placeholder variant="short">Full (top)</Placeholder>
          </TemplateFull>
          {variant === "sidebarLeft" && (
            <TemplateSidebar>
              <Placeholder>{sidebarLabel(variant)}</Placeholder>
            </TemplateSidebar>
          )}
          <TemplateContent>
            <Placeholder>Content</Placeholder>
          </TemplateContent>
          {variant === "sidebarRight" && (
            <TemplateSidebar>
              <Placeholder>{sidebarLabel(variant)}</Placeholder>
            </TemplateSidebar>
          )}
          <TemplateFull>
            <Placeholder variant="short">Full (bottom)</Placeholder>
          </TemplateFull>
        </TemplateMain>
      </Template>
    );
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26688",
    },
  },
};

export const FullExample: Story = {
  args: {
    sidebar: "left",
  },
  render: (args) => {
    const { variant } = args;
    return (
      <Template variant={variant}>
        <TemplateBreakout>
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
            variant="primary"
            heading={<Heading level="h1" id="1" text="Hero Primary" />}
            imageProps={{
              alt: "Image example",
              src: getPlaceholderImage(),
            }}
            isDarkBackgroundImage
            subHeaderText={otherSubHeaderText}
          />
        </TemplateBreakout>
        <TemplateMain>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
          {variant === "sidebarLeft" && (
            <TemplateSidebar>
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
                <CardHeading
                  size="heading4"
                  subtitle="Animal info"
                  id="heading1"
                >
                  Library Image
                </CardHeading>
                <CardContent>
                  Vestibulum id ligula porta felis euismod semper. Nulla vitae
                  elit libero, a pharetra augue.
                </CardContent>
              </Card>
            </TemplateSidebar>
          )}
          <TemplateContent>
            <p>This is the content area!</p>
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
            <Table
              columnHeaders={columnHeadersAlt}
              columnStyles={columnStylesComplex}
              id="table-horizontal-scrolling-wo-row-headers"
              isScrollable
              showRowDividers
              showTitleText={false}
              tableData={tableDataAlt}
              titleText="Table with horizontal scrolling and no row headers"
              useRowHeaders
            />
          </TemplateContent>
          {variant === "sidebarRight" && (
            <TemplateSidebar>
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
                <CardHeading
                  size="heading4"
                  subtitle="Animal info"
                  id="heading1"
                >
                  Library Image
                </CardHeading>
                <CardContent>
                  Vestibulum id ligula porta felis euismod semper. Nulla vitae
                  elit libero, a pharetra augue.
                </CardContent>
              </Card>
            </TemplateSidebar>
          )}
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
        </TemplateMain>
      </Template>
    );
  },
};

export const NarrowExample = {
  render: () => (
    <>
      <Template variant="narrow">
        <TemplateBreakout>
          <Breadcrumbs
            breadcrumbsData={[
              { url: "#", text: "Home" },
              { url: "#", text: "Research" },
              {
                url: "#",
                text: "Catalog",
              },
            ]}
            variant="research"
          />
          <Hero
            backgroundColor="section.research.primary"
            foregroundColor="ui.white"
            variant="tertiary"
            heading={<Heading level="h1" id="1" text="Narrow content" />}
          />
        </TemplateBreakout>
        <TemplateMain>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
          <TemplateContent>
            <Heading
              level="h2"
              size="heading3"
              id="main-heading"
              text="Content narrow"
            />
            <p>
              Discover millions of items from The New York Public Library's
              Stephen A. Schwarzman Building, Schomburg Center for Research in
              Black Culture, and The New York Public Library for the Performing
              Arts. Plus, access materials from library collections at Columbia
              University, Harvard University, and Princeton University. Learn
              more. Please note that the Research Catalog does not include
              circulating materials. For books and more that you can check out
              to take home please visit our circulating branch catalog. The
              legacy research catalog is still available, but does not include
              all of our Scan & Deliver options or the Columbia University,
              Harvard University, and Princeton University material from the
              Shared Collection.
            </p>
            <Accordion accordionData={faqContentData} />
          </TemplateContent>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
        </TemplateMain>
      </Template>
    </>
  ),
};

export const FeaturedContentExample = {
  name: "FeaturedContent Example",
  render: () => (
    <>
      <Template>
        <TemplateBreakout>
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
            variant="campaign"
            heading={<Heading level="h1" id="1" text="Hero Campaign" />}
            imageProps={{
              alt: "Image example",
              src: getPlaceholderImage("smaller"),
            }}
            isDarkBackgroundImage
            subHeaderText={otherSubHeaderText}
          />
        </TemplateBreakout>
        <TemplateMain>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
          <TemplateContent>
            <p>This is the content area!</p>
            <Accordion accordionData={faqContentData} />
            <HorizontalRule />
            <FeaturedContent
              imageProps={{
                alt: "",
                src: getPlaceholderImage("smaller"),
                position: "end",
                width: "",
              }}
              isFullWidth
              my="l"
              textContent={
                <>
                  <Heading size="heading5">Sit Dapibus Elit</Heading>
                  Donec id elit non mi porta gravida at eget metus. Nulla vitae
                  elit libero, a pharetra augue. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Cras
                  mattis consectetur purus sit amet fermentum.
                </>
              }
            />
          </TemplateContent>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
        </TemplateMain>
      </Template>
    </>
  ),
};

export const ComplexExample = () => {
  return (
    <>
      <SkipNavigation target="#skip-to" />
      <Template variant="sidebarRight">
        <TemplateHeader>
          <TemplateBreakout>
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
              heading={
                <Heading level="h1" id="1" text="Complex template example" />
              }
              variant="tertiary"
            />
          </TemplateBreakout>
          <TemplateBreakout>
            <Box
              display="flex"
              height="180px"
              overflow="hidden"
              position="relative"
              width="100%"
              background={`url(${getPlaceholderImage()})`}
              backgroundSize="cover"
              justifyContent="center"
              alignItems="center"
            >
              <Heading
                bgColor="rgba(255, 255, 255, 0.1)"
                color="ui.white"
                id="hero-overlay"
                level="h2"
                maxWidth="800px"
                mx="xl"
                p="2rem"
                size="display1"
                text="Overlay heading"
                textAlign="center"
                textShadow="0px 0px 8px #000"
                width="100%"
              />
            </Box>
            <SubNav
              id="complex-example-subnav"
              primaryActions={
                <>
                  <SubNavLink href="#" id="link-1" isSelected>
                    One
                  </SubNavLink>
                  <SubNavLink href="#" id="link-2">
                    Two
                  </SubNavLink>
                  <SubNavLink href="#" id="link-3">
                    Three
                  </SubNavLink>
                </>
              }
              secondaryActions={
                <>
                  <SubNavButton id="subnav-button-1" onClick={() => {}}>
                    Four
                  </SubNavButton>
                  <SubNavButton
                    id="subnav-button-2"
                    onClick={() => {}}
                    isOutlined
                  >
                    Five
                  </SubNavButton>
                </>
              }
            />
          </TemplateBreakout>
        </TemplateHeader>
        <TemplateMain>
          <TemplateFull>
            <Box
              height="360px"
              overflow="hidden"
              position="relative"
              width="100%"
            >
              <Image
                alt="Alt text"
                aspectRatio="twoByOne"
                src={getPlaceholderImage()}
                position="absolute"
              />
              <Heading
                bgColor="rgba(255, 255, 255, 0.1)"
                bottom="0"
                color="ui.white"
                id="image-overlay"
                left="0"
                level="h2"
                p="s"
                position="absolute"
                right="0"
                size="heading6"
                text="Overlay heading"
                textAlign="right"
              />
            </Box>
          </TemplateFull>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
          <TemplateContent id="skip-to">
            <Heading
              mb="s"
              overline="Example"
              subtitle="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
              text="Content with sidebar"
            />
            <Text mb="s">
              Maecenas faucibus mollis interdum. Integer posuere erat a ante
              venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
              ultricies vehicula ut id elit. Cras mattis consectetur purus sit
              amet fermentum.
            </Text>
            <Link href="https://nypl.org" mb="s" variant="standalone">
              Link to show focus
            </Link>
            <Heading level="h3" mb="s" size="heading4" text="Subsection" />
            <Text mb="s">
              Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non
              metus auctor fringilla. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Maecenas faucibus mollis
              interdum.
            </Text>
            <Text mb="s">
              Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Integer posuere erat a
              ante venenatis dapibus posuere velit aliquet. Maecenas faucibus
              mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor.
            </Text>
            <Link href="https://nypl.org" variant="standalone">
              Link to show focus
            </Link>
          </TemplateContent>
          <TemplateSidebar>
            <Box display="grid" gap="s">
              <Image
                alt="Alt text"
                aspectRatio="oneByTwo"
                src={getPlaceholderImage()}
              />
            </Box>
          </TemplateSidebar>
          <TemplateBreakout>
            <Box bgColor="ui.bg.default" py={{ base: "s", md: "m", xl: "l" }}>
              <Box
                margin="auto"
                maxWidth="1280px"
                px={responsiveSpacing.padding}
              >
                <Heading
                  size="heading6"
                  mb="s"
                  subtitle="Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                  text="Example photos"
                />
                <Box
                  display="grid"
                  gap={responsiveSpacing.gridGap}
                  gridTemplateColumns="repeat(2, 1fr)"
                  mb={{ base: "s", md: "m", xl: "l" }}
                >
                  <Image
                    alt="Alt text"
                    aspectRatio="twoByOne"
                    src={getPlaceholderImage()}
                  />
                  <Image
                    alt="Alt text"
                    aspectRatio="twoByOne"
                    src={getPlaceholderImage()}
                  />
                </Box>
                <Box
                  display="grid"
                  gap={responsiveSpacing.gridGap}
                  gridTemplateColumns="repeat(4, 1fr)"
                >
                  <Image
                    alt="Alt text"
                    aspectRatio="square"
                    src={getPlaceholderImage()}
                  />
                  <Image
                    alt="Alt text"
                    aspectRatio="square"
                    src={getPlaceholderImage()}
                  />
                  <Image
                    alt="Alt text"
                    aspectRatio="square"
                    src={getPlaceholderImage()}
                  />
                  <Image
                    alt="Alt text"
                    aspectRatio="square"
                    src={getPlaceholderImage()}
                  />
                </Box>
              </Box>
            </Box>
          </TemplateBreakout>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
          <TemplateContent id="mainContentTwo">
            <Heading
              level="h3"
              mb="s"
              size="heading4"
              text="Heading after a breakout"
            />
            <Text mb="s">
              Maecenas faucibus mollis interdum. Integer posuere erat a ante
              venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
              ultricies vehicula ut id elit. Cras mattis consectetur purus sit
              amet fermentum.
            </Text>
            <Heading level="h4" mb="s" size="heading6" text="Subsection" />
            <Text mb="s">
              Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non
              metus auctor fringilla. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Maecenas faucibus mollis
              interdum.
            </Text>
            <Text mb="s">
              Vestibulum id ligula porta felis euismod semper. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Integer posuere erat a
              ante venenatis dapibus posuere velit aliquet. Maecenas faucibus
              mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor.
            </Text>
          </TemplateContent>
          <TemplateSidebar>
            <Box display="grid" gap="s">
              <Image
                alt="Alt text"
                aspectRatio="twoByOne"
                src={getPlaceholderImage()}
              />
              <Image
                alt="Alt text"
                aspectRatio="twoByOne"
                src={getPlaceholderImage()}
              />
              <Image
                alt="Alt text"
                aspectRatio="twoByOne"
                src={getPlaceholderImage()}
              />
              <Image
                alt="Alt text"
                aspectRatio="twoByOne"
                src={getPlaceholderImage()}
              />
            </Box>
          </TemplateSidebar>
          <TemplateBreakout>
            <FeaturedContent
              imageProps={{
                alt: "",
                src: getPlaceholderImage("smaller"),
                position: "end",
                width: "",
              }}
              isFullWidth
              my="l"
              textContent={
                <>
                  <Heading mb="s" size="heading5">
                    Sit Dapibus Elit
                  </Heading>
                  Donec id elit non mi porta gravida at eget metus. Nulla vitae
                  elit libero, a pharetra augue. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Cras
                  mattis consectetur purus sit amet fermentum.
                </>
              }
            />
          </TemplateBreakout>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
            <FeaturedContent
              imageProps={{
                alt: "",
                src: getPlaceholderImage("smaller"),
                position: "end",
                width: "",
              }}
              isFullWidth={false}
              mt={responsiveSpacing.gridGap}
              textContent={
                <>
                  <Heading size="heading5">Sit Dapibus Elit</Heading>
                  Donec id elit non mi porta gravida at eget metus. Nulla vitae
                  elit libero, a pharetra augue. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Cras
                  mattis consectetur purus sit amet fermentum.
                </>
              }
            />
          </TemplateFull>
          <TemplateFull>
            <Banner
              content="This is a full area!"
              heading="Full"
              variant="informative"
            />
          </TemplateFull>
        </TemplateMain>
        <TemplateFooter>
          <Banner
            content="This is a footer area!"
            heading="Footer region"
            variant="warning"
          />
        </TemplateFooter>
      </Template>
    </>
  );
};
