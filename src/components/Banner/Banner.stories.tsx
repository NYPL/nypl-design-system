// import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Banner, { bannerColorsArray, bannerTypesArray } from "./Banner";
import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import Text from "../Text/Text";

const meta: Meta<typeof Banner> = {
  title: "Components/Feedback/Banner",
  component: Banner,
  decorators: [withDesign],
  argTypes: {
    ariaLabel: { control: { type: "text" } },
    backgroundColor: {
      control: { type: "select" },
      options: bannerColorsArray,
    },
    className: { control: false },
    content: { control: false },
    heading: { control: false },
    highlightColor: {
      control: { type: "select" },
      options: bannerColorsArray,
    },
    icon: { control: false },
    id: { control: false },
    isDismissible: { control: { type: "boolean" } },
    type: {
      control: { type: "select" },
      options: bannerTypesArray,
      table: { defaultValue: { summary: "neutral" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

/**
 * Main Story for the Banner component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    ariaLabel: "Banner label",
    backgroundColor: undefined,
    className: undefined,
    content: undefined,
    heading: undefined,
    highlightColor: undefined,
    icon: undefined,
    id: undefined,
    isisDismissible: false,
    type: "neutral",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=86601-97661&mode=design&t=wZy1nqVOOZ4Dzuu2-11",
    },
    jest: ["Banner.test.tsx"],
  },
  render: (args) => <Banner {...args} />,
};

// The following are additional Notification example Stories.
export const heading: Story = {
  render: () => (
    <>
      <Banner
        heading="Standard Notification"
        content={
          <>
            This is a "standard" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
      <Banner
        type="neutral"
        heading="Announcement Notification"
        content={
          <>
            This is an "neutral" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
      <Banner
        type="warning"
        heading="Warning Notification"
        content={
          <>
            This is a "warning" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
      <Banner
        content={
          <>
            This is a "standard" Notification without a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
      <Banner
        type="neutral"
        content={
          <>
            This is an "neutral" Notification without a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
      <Banner
        type="warning"
        content={
          <>
            This is a "warning" Notification without a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
    </>
  ),
};

export const Customheading: Story = {
  render: () => (
    <>
      <Banner
        heading={<Heading level="h3">Custom H3 Heading</Heading>}
        content={
          <>
            This is a "standard" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
      <Banner
        heading={<Heading level="h5">Custom H5 Heading</Heading>}
        content={
          <>
            This is a "standard" Notification with a heading. Cras mattis
            consectetur purus sit amet fermentum. Maecenas faucibus mollis
            interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </>
        }
      />
    </>
  ),
};

export const NotificationIcon: Story = {
  render: () => (
    <>
      <Banner
        heading="Notification with Icon"
        content={
          <>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>
        }
      />
      <Banner
        content={
          <>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>
        }
      />
      <Banner
        heading="Notification without Icon"
        content={
          <>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>
        }
      />
      <Banner
        content={
          <>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </>
        }
      />
    </>
  ),
};
export const CustomIcon: Story = {
  render: () => (
    <Banner
      icon={<Icon name="check" color="section.research.secondary" />}
      heading="Custom Icon"
      content={
        <>
          This is a Notification with a custom icon. Cras mattis consectetur
          purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </>
      }
    />
  ),
};
export const HTMLContent: Story = {
  render: () => (
    <Banner
      heading="Standard Notification with HTML content"
      content={
        <>
          <Text>
            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
            mollis interdum.
          </Text>
          <Text noSpace>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.{" "}
            <b>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus
            </b>
            . <Link href="#">This is a link</Link>.
          </Text>
        </>
      }
    />
  ),
};
export const isDismissible: Story = {
  render: () => (
    <Banner
      isDismissible
      heading="isDismissible Notification"
      content={
        <>
          This is a isDismissible Notification with an X icon. Cras mattis
          consectetur purus sit amet fermentum. Maecenas faucibus mollis
          interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at
          eros. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </>
      }
      type="neutral"
    />
  ),
};
