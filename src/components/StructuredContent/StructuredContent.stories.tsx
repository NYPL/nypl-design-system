/* eslint-disable jsx-a11y/anchor-is-valid */
import type { Meta, StoryObj } from "@storybook/react";

import Heading from "../Heading/Heading";
import StructuredContent from "./StructuredContent";
import { getPlaceholderImage } from "../../utils/utils";

const meta: Meta<typeof StructuredContent> = {
  title: "Components/Page Layout/StructuredContent",
  component: StructuredContent,
  argTypes: {
    className: { control: false },
    id: { control: false },
    "imageProps.aspectRatio": {
      table: {
        defaultValue: { summary: "square" },
      },
    },
    "imageProps.component": { control: false },
    "imageProps.position": {
      table: {
        defaultValue: { summary: "left" },
      },
    },
    "imageProps.size": {
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StructuredContent>;

/**
 * Main Story for the StructuredContent component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const Controls: Story = {
  args: {
    bodyContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
      " tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa" +
      " placerat duis ultricies lacus sed turpis tincidunt. Porttitor eget " +
      "dolor morbi non arcu risus quis varius. Faucibus in ornare quam viverra" +
      " orci sagittis. Nisl vel pretium lectus quam id leo in. Etiam dignissim" +
      " diam quis enim lobortis scelerisque fermentum. Diam maecenas sed enim" +
      " ut sem viverra. Diam quam nulla porttitor massa id neque. Sed " +
      "faucibus turpis in eu mi. Ornare lectus sit amet est placerat in. " +
      "Quis blandit turpis cursus in. Aliquam ut porttitor leo a diam " +
      "sollicitudin tempor id eu. Pellentesque eu tincidunt tortor aliquam " +
      "nulla facilisi cras fermentum. Porttitor leo a diam sollicitudin " +
      "tempor id eu nisl nunc. Feugiat nisl pretium fusce id velit ut tortor. " +
      "Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Purus " +
      "gravida quis blandit turpis cursus in hac. Morbi tempus iaculis urna id " +
      "volutpat. Lectus nulla at volutpat diam ut venenatis. Donec ac odio " +
      "tempor orci dapibus ultrices in iaculis. Dui vivamus arcu felis " +
      "bibendum ut tristique. Cras semper auctor neque vitae tempus quam " +
      "pellentesque. Placerat orci nulla pellentesque dignissim enim sit " +
      "amet. Feugiat pretium nibh ipsum consequat. Placerat orci nulla " +
      "pellentesque dignissim. Suspendisse faucibus interdum posuere lorem. " +
      "Nullam non nisi est sit. Turpis egestas integer eget aliquet nibh " +
      "praesent. Tortor at risus viverra adipiscing at. Eu augue ut lectus " +
      "arcu bibendum at varius vel pharetra.",
    calloutText: "This is the callout text",
    className: undefined,
    headingText: "Heading text",
    id: "structured-content",
    "imageProps.alt": "Image alt text",
    "imageProps.aspectRatio": "square",
    "imageProps.caption": "Image caption",
    "imageProps.component": undefined,
    "imageProps.credit": "Image credit",
    "imageProps.position": "left",
    "imageProps.size": "medium",
    "imageProps.src": getPlaceholderImage(),
  },
  render: (args) => (
    <StructuredContent
      bodyContent={args.bodyContent}
      calloutText={args.calloutText}
      className={args.className}
      headingText={args.headingText}
      id={args.id}
      imageProps={{
        alt: args["imageProps.alt"],
        aspectRatio: args["imageProps.aspectRatio"],
        caption: args["imageProps.caption"],
        credit: args["imageProps.credit"],
        position: args["imageProps.position"],
        size: args["imageProps.size"],
        src: args["imageProps.src"],
      }}
    />
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36818%3A24923",
    },
    jest: ["StructuredContent.test.tsx"],
  },
};

/**
 * The following are additional StructuredContent example Stories.
 */
export const WithHTMLStringTextContent: Story = {
  render: () => (
    <StructuredContent
      calloutText="This is the callout text"
      headingText="Heading text"
      imageProps={{
        alt: "Image alt text",
        aspectRatio: "original",
        caption: "Image caption",
        credit: "Image credit",
        position: "left",
        size: "medium",
        src: getPlaceholderImage("smaller"),
      }}
      bodyContent={
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
        "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius. " +
        "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium " +
        "lectus quam id leo in. Etiam dignissim diam quis enim lobortis " +
        "scelerisque fermentum. Diam maecenas sed enim ut sem viverra. <b>Diam " +
        "quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi. " +
        "</b></p><p>Ornare lectus sit amet est placerat in. Quis blandit turpis " +
        "cursus in. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. " +
        "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. " +
        "Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Feugiat" +
        "nisl pretium fusce id velit ut tortor. Porttitor leo a diam sollicitudin " +
        "tempor id eu nisl nunc.</p><ul><li>one</li><li>two</li>" +
        "<li>three</li><li>four</li></ul><p><i>Mauris nunc congue nisi vitae suscipit" +
        "tellus mauris a diam. Purus gravida quis blandit turpis cursus in hac." +
        "Morbi tempus iaculis urna id volutpat. Lectus nulla at volutpat diam ut" +
        "venenatis. Donec ac odio tempor orci dapibus ultrices in iaculis. Dui vivamus" +
        "arcu felis bibendum ut tristique. Cras semper auctor neque vitae tempus" +
        "quam pellentesque. Placerat orci nulla pellentesque dignissim enim sit" +
        "amet. Feugiat pretium nibh ipsum consequat. Placerat orci nulla pellentesque" +
        "dignissim. Suspendisse faucibus interdum posuere lorem. Nullam non nisi" +
        "est sit. Turpis egestas integer eget aliquet nibh praesent. Tortor at risus" +
        "viverra adipiscing at. Eu augue ut lectus arcu bibendum at varius vel" +
        "pharetra.</i></p>"
      }
    />
  ),
  name: "HTML String Text Content",
};

export const WithHTMLElementTextContent: Story = {
  render: () => (
    <StructuredContent
      calloutText="This is the callout text"
      headingText="Heading text"
      imageProps={{
        alt: "Image alt text",
        aspectRatio: "original",
        caption: "Image caption",
        credit: "Image credit",
        position: "left",
        size: "medium",
        src: getPlaceholderImage("smaller"),
      }}
      bodyContent={
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque massa placerat duis ultricies lacus sed turpis
            tincidunt. <a href="#">Porttitor eget dolor</a> morbi non arcu risus
            quis varius. Faucibus in ornare quam viverra orci sagittis.
          </p>
          <p>
            Nisl vel pretium lectus quam id leo in. Etiam dignissim diam quis
            enim lobortis scelerisque fermentum. Diam maecenas sed enim ut sem
            viverra.{" "}
            <b>
              Diam quam nulla porttitor massa id neque. Sed faucibus turpis in
              eu mi.
            </b>
          </p>
          <p>
            Ornare lectus sit amet est placerat in. Quis blandit turpis cursus
            in. Aliquam ut porttitor leo a diam sollicitudin tempor id eu.
            Pellentesque eu tincidunt tortor aliquam nulla facilisi cras
            fermentum. Porttitor leo a diam sollicitudin tempor id eu nisl nunc.
            Feugiat nisl pretium fusce id velit ut tortor. Porttitor leo a diam
            sollicitudin tempor id eu nisl nunc.
          </p>
          <h3 id="dates-times">Dates and Times</h3>
          <table role="table" id="times-table">
            <thead>
              <tr role="row">
                <th scope="col">Day</th>
                <th scope="col">Time</th>
                <th scope="col">Presentation</th>
                <th scope="col">Topic</th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td>Sunday</td>
                <td>7:00 PM</td>
                <td>Tom Nook</td>
                <td>Manhattan</td>
              </tr>
              <tr role="row">
                <td>Monday</td>
                <td>7:00 PM</td>
                <td>Tom Nook</td>
                <td>The Bronx</td>
              </tr>
              <tr role="row">
                <td>Tuesday</td>
                <td>7:00 PM</td>
                <td>Tom Nook</td>
                <td>Queens</td>
              </tr>
              <tr role="row">
                <td>Wednesday</td>
                <td>7:00 PM</td>
                <td>Tom Nook</td>
                <td>Staten Island</td>
              </tr>
              <tr role="row">
                <td>Thursday</td>
                <td>7:00 PM</td>
                <td>Tom Nook</td>
                <td>Brooklyn</td>
              </tr>
              <tr role="row">
                <td>Friday</td>
                <td>7:00 PM</td>
                <td>Tom Nook</td>
                <td>Long Island</td>
              </tr>
              <tr role="row">
                <td>Saturday</td>
                <td>7:00 PM</td>
                <td>Tom Nook</td>
                <td>Upstate</td>
              </tr>
            </tbody>
          </table>
          <h3 id="parting-thoughts">Parting Thoughts</h3>
          <ol id="thoughts-list">
            <li>All text was read</li>
            <li>The two videos were watched</li>
            <li>All images were reviewed</li>
            <li>Notes were taken on a small notepad</li>
            <li>You enjoyed yourself</li>
          </ol>
          <p>
            <i>
              Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Purus
              gravida quis blandit turpis cursus in hac. Morbi tempus iaculis
              urna id volutpat. Lectus nulla at volutpat diam ut venenatis.
              Donec ac odio tempor orci dapibus ultrices in iaculis. Dui vivamus
              arcu felis bibendum ut tristique. Cras semper auctor neque vitae
              tempus quam pellentesque. Placerat orci nulla pellentesque
              dignissim enim sit amet. Feugiat pretium nibh ipsum consequat.
              Placerat orci nulla pellentesque dignissim. Suspendisse faucibus
              interdum posuere lorem. Nullam non nisi est sit. Turpis egestas
              integer eget aliquet nibh praesent. Tortor at risus 'viverra
              adipiscing at. Eu augue ut lectus arcu bibendum at varius vel'
              pharetra.
            </i>
          </p>
          <section id="definition-doc-list">
            <h2>Episode Forty-Two: Readings and Resources</h2>
            <dl>
              <dt>Hillary Ballon and Kenneth T. Jackson, eds.</dt>
              <dd>
                <em>
                  <a
                    id="link-10"
                    href="https://www.nypl.org/research/research-catalog/bib/b22154388"
                  >
                    Robert Moses and the Modern City: The Transformation of New
                    York
                  </a>
                </em>{" "}
                (W.W. Norton &amp; Co., 2007).
              </dd>
              <dt>The Brooklyn Battery Bridge</dt>
              <dd>
                "
                <a
                  id="link-11"
                  href="https://www.nypap.org/preservation-history/brooklyn-battery-bridge/"
                >
                  The Brooklyn Battery Bridge
                </a>
                ," New York Preservation Archives Project.
              </dd>
              <dt>Robert Caro</dt>
              <dd>
                <em>
                  <a
                    id="link-12"
                    href="https://www.nypl.org/research/research-catalog/bib/b21586756"
                  >
                    The Power Broker: Robert Moses and the Fall of New York
                  </a>
                </em>{" "}
                (Vintage Books, 1975).&nbsp;
              </dd>
              <dt>Anthony Flint</dt>
              <dd>
                <em>
                  <a
                    id="link-13"
                    href="https://www.nypl.org/research/research-catalog/bib/b20538453"
                  >
                    Wrestling with Moses: How Jane Jacobs Took on New York's
                    Master Builder and Transformed the American City
                  </a>
                </em>{" "}
                (Random House, 2009).
              </dd>
            </dl>
          </section>
        </>
      }
    />
  ),
  name: "HTML Element Text Content",
};

export const WithCustomHeadingsLevels: Story = {
  render: () => (
    <StructuredContent
      calloutText={<Heading level="h4">Custom H4 callout Text</Heading>}
      headingText={<Heading level="h3">Custom H3 Heading Text</Heading>}
      imageProps={{
        alt: "Image alt text",
        aspectRatio: "original",
        caption: "Image caption",
        credit: "Image credit",
        position: "left",
        size: "medium",
        src: getPlaceholderImage("smaller"),
      }}
      bodyContent={
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua</p>"
      }
    />
  ),
  name: "Custom Heading Levels",
};

export const ExampleWithTwoComponents: Story = {
  render: () => (
    <>
      <StructuredContent
        headingText="Heading text"
        imageProps={{
          alt: "Image alt text",
          aspectRatio: "original",
          caption: "Image caption",
          credit: "Image credit",
          position: "left",
          size: "medium",
          src: getPlaceholderImage("smaller"),
        }}
        bodyContent={
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
          "eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
          "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius. " +
          "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium " +
          "lectus quam id leo in. Etiam dignissim diam quis enim lobortis " +
          "scelerisque fermentum. Diam maecenas sed enim ut sem viverra. <b>Diam " +
          "quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi. " +
          "</b></p><p>Ornare lectus sit amet est placerat in. Quis blandit turpis " +
          "cursus in. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. " +
          "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. " +
          "Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Feugiat" +
          "nisl pretium fusce id velit ut tortor. Porttitor leo a diam sollicitudin " +
          "tempor id eu nisl nunc.</p><ul><li>one</li><li>two</li>" +
          "<li>three</li><li>four</li></ul><p><i>Mauris nunc congue nisi vitae suscipit" +
          "tellus mauris a diam. Purus gravida quis blandit turpis cursus in hac." +
          "Morbi tempus iaculis urna id volutpat. Lectus nulla at volutpat diam ut" +
          "venenatis. Donec ac odio tempor orci dapibus ultrices in iaculis. Dui vivamus" +
          "arcu felis bibendum ut tristique. Cras semper auctor neque vitae tempus" +
          "quam pellentesque. Placerat orci nulla pellentesque dignissim enim sit" +
          "amet. Feugiat pretium nibh ipsum consequat. Placerat orci nulla pellentesque" +
          "dignissim. Suspendisse faucibus interdum posuere lorem. Nullam non nisi" +
          "est sit. Turpis egestas integer eget aliquet nibh praesent. Tortor at risus" +
          "viverra adipiscing at. Eu augue ut lectus arcu bibendum at varius vel" +
          "pharetra.</i></p>"
        }
      />
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        bodyContent={
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
          "eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
          "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius. " +
          "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium " +
          "lectus quam id leo in. Etiam dignissim diam quis enim lobortis " +
          "scelerisque fermentum. Diam maecenas sed enim ut sem viverra. <b>Diam " +
          "quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.</b></p>"
        }
      />
    </>
  ),
};
export const ExampleWithThreeComponents: Story = {
  render: () => (
    <>
      <StructuredContent
        bodyContent={<p>This is the body text</p>}
        calloutText="This is the callout text"
        headingText="Heading text"
      />
      <StructuredContent
        headingText="Heading text"
        imageProps={{
          alt: "Image alt text",
          aspectRatio: "original",
          caption: "Image caption",
          credit: "Image credit",
          position: "left",
          size: "medium",
          src: getPlaceholderImage("smaller"),
        }}
        bodyContent={
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
          "eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
          "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius. " +
          "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium " +
          "lectus quam id leo in. Etiam dignissim diam quis enim lobortis " +
          "scelerisque fermentum. Diam maecenas sed enim ut sem viverra. <b>Diam " +
          "quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi. " +
          "</b></p><p>Ornare lectus sit amet est placerat in. Quis blandit turpis " +
          "cursus in. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. " +
          "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. " +
          "Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Feugiat nisl " +
          "pretium fusce id velit ut tortor. </p><p><i>Mauris nunc congue nisi " +
          "vitae suscipit tellus mauris a diam. Purus gravida quis blandit turpis " +
          "cursus in hac. Morbi tempus iaculis urna id volutpat. Lectus nulla at " +
          "volutpat diam ut venenatis. Donec ac odio tempor orci dapibus ultrices " +
          "in iaculis. Dui vivamus arcu felis bibendum ut tristique. Cras semper " +
          "auctor neque vitae tempus quam pellentesque. Placerat orci nulla " +
          "pellentesque dignissim enim sit amet. Feugiat pretium nibh ipsum " +
          "consequat. Placerat orci nulla pellentesque dignissim. Suspendisse " +
          "faucibus interdum posuere lorem. Nullam non nisi est sit. Turpis " +
          "egestas integer eget aliquet nibh praesent. Tortor at risus viverra " +
          "sadipiscing at. Eu augue ut lectus arcu bibendum at varius vel" +
          "pharetra.</i></p>"
        }
      />
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        bodyContent={
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
          "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
          "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius. " +
          "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium " +
          "lectus quam id leo in. Etiam dignissim diam quis enim lobortis " +
          "scelerisque fermentum. Diam maecenas sed enim ut sem viverra. <b>Diam " +
          "quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.</b></p>"
        }
      />
    </>
  ),
};
export const ExampleWithMixedContent: Story = {
  render: () => (
    <>
      <StructuredContent
        bodyContent={
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
          "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
          "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius. " +
          "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium " +
          "lectus quam id leo in. Etiam dignissim diam quis enim lobortis " +
          "scelerisque fermentum. Diam maecenas sed enim ut sem viverra. <b>Diam " +
          "quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.</b></p>"
        }
      />
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageProps={{
          alt: "Image alt text",
          aspectRatio: "original",
          position: "center",
          size: "medium",
          src: getPlaceholderImage(),
        }}
        bodyContent={
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
          "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
          "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius. " +
          "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium " +
          "lectus quam id leo in. Etiam dignissim diam quis enim lobortis " +
          "scelerisque fermentum. Diam maecenas sed enim ut sem viverra. <b>Diam " +
          "quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi. " +
          "</b></p><p>Ornare lectus sit amet est placerat in. Quis blandit turpis " +
          "cursus in. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. " +
          "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. " +
          "Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Feugiat nisl " +
          "pretium fusce id velit ut tortor. Porttitor leo a diam sollicitudin " +
          "tempor id eu nisl nunc.</p><ul><li>one</li><li>two</li><li>three</li>" +
          "<li>four</li></ul><p><i>Mauris nunc congue nisi vitae suscipit" +
          "tellus mauris a diam. Purus gravida quis blandit turpis cursus in hac." +
          "Morbi tempus iaculis urna id volutpat. Lectus nulla at volutpat diam ut" +
          "venenatis. Donec ac odio tempor orci dapibus ultrices in iaculis. Dui " +
          "vivamus arcu felis bibendum ut tristique. Cras semper auctor neque " +
          "vitae tempus quam pellentesque. Placerat orci nulla pellentesque " +
          "dignissim enim sit amet. Feugiat pretium nibh ipsum consequat. " +
          "Placerat orci nulla pellentesque dignissim. Suspendisse faucibus " +
          "interdum posuere lorem. Nullam non nisi est sit. Turpis egestas " +
          "integer eget aliquet nibh praesent. Tortor at risus viverra adipiscing " +
          "at. Eu augue ut lectus arcu bibendum at varius vel pharetra.</i></p>"
        }
      />
    </>
  ),
};
