import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
// import { cloneElement } from "react";

import Link, { linkTypesArray } from "./Link";
import Icon from "../Icons/Icon";

const meta: Meta<typeof Link> = {
  title: "Components/Navigation/Link",
  component: Link,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
    isUnderlined: { table: { defaultValue: { summary: "true" } } },
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    target: { control: false },
    type: {
      control: { type: "select" },
      options: linkTypesArray,
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/**
 * Main Story for the Link component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: "custom-class",
    href: "https://nypl.org",
    id: "nypl-link",
    isUnderlined: true,
    screenreaderOnlyText: "Screenreader only text",
    target: undefined,
    type: "action",
  },
  render: (args) => <Link {...args}>Link</Link>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387",
    },
    jest: ["Link.test.tsx"],
  },
};

// The following are additional Link example Stories.
export const Accessibility: Story = {
  render: () => (
    <Link type="external" href="https://nypl.org">
      NYPL Website
    </Link>
  ),
};
export const AllLinkTypes: Story = {
  render: () => (
    <VStack spacing="l" align="flex-start">
      <Link type="default" href="#passed-in-link">
        Default
      </Link>
      <Link type="action" href="#passed-in-link">
        Action
      </Link>
      <Link type="external" href="#passed-in-link">
        External
      </Link>
      <Link type="standalone" href="#passed-in-link">
        Standalone
      </Link>
      <Link type="backwards" href="#passed-in-link">
        Backwards
      </Link>
      <Link type="forwards" href="#passed-in-link">
        Forwards
      </Link>
      <Link type="buttonPrimary" href="#passed-in-link">
        Button Primary
      </Link>
      <Link type="buttonSecondary" href="#passed-in-link">
        Button Secondary
      </Link>
      <Link type="buttonPill" href="#passed-in-link">
        Button Pill
      </Link>
      <Link type="buttonCallout" href="#passed-in-link">
        Button Callout
      </Link>
      <Link type="buttonNoBrand" href="#passed-in-link">
        Button No Brand
      </Link>
      <Link type="buttonDisabled" href="#passed-in-link">
        Button Disabled
      </Link>
      <Link type="button" href="#passed-in-link" width="auto">
        Button (deprecated)
      </Link>
    </VStack>
  ),
};
export const LinksWithIcons: Story = {
  render: () => (
    <VStack spacing="xs" align="flex-start">
      <Link type="action" href="#passed-in-link">
        <Icon name="headset" align="left" size="small" />
        Headset Link
      </Link>
      <Link type="action" href="#passed-in-link">
        <Icon name="clock" align="left" size="small" />
        Clock Link
      </Link>
      <Link type="action" href="#passed-in-link">
        <Icon name="check" align="left" size="small" />
        Check Link
      </Link>
      <Link type="action" href="#passed-in-link-right">
        Check Link Right
        <Icon name="check" align="right" size="small" />
      </Link>
    </VStack>
  ),
};
// export const AnchorElementRendering: Story = {
//   render: () => (
//     <>
//       This is a{" "}
//       <Link type="action">
//         <a href="#existing-anchor-tag">link</a>
//       </Link>{" "}
//       with the &lt;a&gt; element as a child of the `Link` component. This is a{" "}
//       <Link type="action" href="#passed-in-link">
//         link
//       </Link>{" "}
//       where the `Link` component uses the `href` prop and has a string-only
//       child. Finally, this is a{" "}
//       <Link type="action">
//         <>
//           <Icon name="check" align="left" size="small" />
//           <a href="#existing-anchor-tag">link</a>
//         </>
//       </Link>{" "}
//       with a check icon.
//     </>
//   ),
// };

// const NextJsLink = (props) =>
//   cloneElement(
//     props.children,
//     { href: props.href },
//     props.children.props.children
//   );

// export const NextJSExample: Story = {
//   render: () => (
//     <NextJsLink href="#" passHref>
//       <Link type="action">Next Page</Link>
//     </NextJsLink>
//   ),
//   name: "Next.js Router example",
// };
