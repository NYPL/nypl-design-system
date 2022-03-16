import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import { ImageRatios, ImageSizes } from "../Image/ImageTypes";
import StructuredContent from "./StructuredContent";
import { StructuredContentImagePosition } from "./StructuredContentTypes";

const htmlStringBodyContent =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
  "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. " +
  "<a href='#'>Porttitor eget dolor</a> morbi non arcu risus quis varius." +
  "Faucibus in ornare quam viverra orci sagittis.</p><p>Nisl vel pretium lectus" +
  "quam id leo in. Etiam dignissim diam quis enim lobortis scelerisque fermentum." +
  "Diam maecenas sed enim ut sem viverra. <b>Diam quam nulla porttitor massa" +
  "id neque. Sed faucibus turpis in eu mi.</b></p><p>Ornare lectus sit amet est placerat" +
  "in. Quis blandit turpis cursus in. Aliquam ut porttitor leo a diam sollicitudin" +
  "tempor id eu. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras" +
  "fermentum. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Feugiat" +
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
  "pharetra.</i></p>";
const htmlDOMBodyContent = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa
      placerat duis ultricies lacus sed turpis tincidunt.
      <a href="http://nypl.org">Porttitor eget dolor</a> morbi non arcu risus
      quis varius. Faucibus in ornare quam viverra orci sagittis.
    </p>
    <p>
      Nisl vel pretium lectus quam id leo in. Etiam dignissim diam quis enim
      lobortis scelerisque fermentum. Diam maecenas sed enim ut sem viverra.{" "}
      <b>
        Diam quam nulla porttitor massa id neque. Sed faucibus turpis in eu mi.
      </b>
    </p>
    <p>
      Ornare lectus sit amet est placerat in. Quis blandit turpis cursus in.
      Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Pellentesque eu
      tincidunt tortor aliquam nulla facilisi cras fermentum. Porttitor leo a
      diam sollicitudin tempor id eu nisl nunc. Feugiat nisl pretium fusce id
      velit ut tortor. Porttitor leo a diam sollicitudin tempor id eu nisl nunc.
    </p>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
      <li>four</li>
    </ul>
    <p>
      <i>
        Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Purus
        gravida quis blandit turpis cursus in hac. Morbi tempus iaculis urna id
        volutpat. Lectus nulla at volutpat diam ut venenatis. Donec ac odio
        tempor orci dapibus ultrices in iaculis. Dui vivamus arcu felis bibendum
        ut tristique. Cras semper auctor neque vitae tempus quam pellentesque.
        Placerat orci nulla pellentesque dignissim enim sit amet. Feugiat
        pretium nibh ipsum consequat. Placerat orci nulla pellentesque
        dignissim. Suspendisse faucibus interdum posuere lorem. Nullam non nisi
        est sit. Turpis egestas integer eget aliquet nibh praesent. Tortor at
        risus 'viverra adipiscing at. Eu augue ut lectus arcu bibendum at varius
        vel' pharetra.
      </i>
    </p>
  </>
);

describe("StructuredContent Accessibility", () => {
  it("passes axe accessibility for HTML string text content", async () => {
    const { container } = render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageAlt="Image alt text"
        imageAspectRatio={ImageRatios.Original}
        imageCaption="Image caption"
        imageCredit="Image credit"
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlStringBodyContent}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility for HTML DOM text content", async () => {
    const { container } = render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageAlt="Image alt text"
        imageAspectRatio={ImageRatios.Original}
        imageCaption="Image caption"
        imageCredit="Image credit"
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlDOMBodyContent}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility without an image", async () => {
    const { container } = render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        bodyContent={htmlStringBodyContent}
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("StructuredContent", () => {
  it("renders two headings, an image, and body text", () => {
    render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageAlt="Image alt text"
        imageAspectRatio={ImageRatios.Original}
        imageCaption="Image caption"
        imageCredit="Image credit"
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlStringBodyContent}
      />
    );
    const mainHeading = screen.getByRole("heading", { level: 2 });
    const calloutHeading = screen.getByRole("heading", { level: 3 });

    expect(mainHeading).toHaveTextContent("Heading text");
    expect(calloutHeading).toHaveTextContent("This is the callout text");
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  it("optionally renders without the headings", () => {
    render(
      <StructuredContent
        imageAlt="Image alt text"
        imageAspectRatio={ImageRatios.Original}
        imageCaption="Image caption"
        imageCredit="Image credit"
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlStringBodyContent}
      />
    );
    const mainHeading = screen.queryByRole("heading", { level: 2 });
    const calloutHeading = screen.queryByRole("heading", { level: 3 });

    expect(mainHeading).not.toBeInTheDocument();
    expect(calloutHeading).not.toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  it("optionally renders without the image", () => {
    render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        bodyContent={htmlStringBodyContent}
      />
    );
    const mainHeading = screen.getByRole("heading", { level: 2 });
    const calloutHeading = screen.getByRole("heading", { level: 3 });

    expect(mainHeading).toHaveTextContent("Heading text");
    expect(calloutHeading).toHaveTextContent("This is the callout text");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  it("logs a warning when an image is used but no alt text is passed to `imageAlt`", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageAspectRatio={ImageRatios.Original}
        imageCaption="Image caption"
        imageCredit="Image credit"
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlStringBodyContent}
      />
    );

    expect(warn).toHaveBeenCalledWith(
      "StructuredContent: `imageAlt` prop is required when using an image."
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders an image wrapped in figure when provided an image caption or credit", () => {
    const { rerender } = render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageAlt="Image alt text"
        imageAspectRatio={ImageRatios.Original}
        imageCaption="Image caption"
        imageCredit="Image credit"
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlStringBodyContent}
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByText("Image caption")).toBeInTheDocument();
    expect(screen.getByText("Image credit")).toBeInTheDocument();

    // Not passing in the image's caption
    rerender(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageAlt="Image alt text"
        imageAspectRatio={ImageRatios.Original}
        imageCredit="Image credit"
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlStringBodyContent}
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.queryByText("Image caption")).not.toBeInTheDocument();
    expect(screen.getByText("Image credit")).toBeInTheDocument();
  });

  it("renders a simple image element when no image caption or credit are provided", () => {
    render(
      <StructuredContent
        calloutText="This is the callout text"
        headingText="Heading text"
        imageAlt="Image alt text"
        imageAspectRatio={ImageRatios.Original}
        imagePosition={StructuredContentImagePosition.Left}
        imageSize={ImageSizes.Medium}
        imageSrc="https://placeimg.com/400/300/animals"
        bodyContent={htmlStringBodyContent}
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
    expect(screen.queryByText("Image caption")).not.toBeInTheDocument();
    expect(screen.queryByText("Image credit")).not.toBeInTheDocument();
  });

  it("renders the UI snapshot", () => {
    const withHTMLStringContent = renderer
      .create(
        <StructuredContent
          calloutText="This is the callout text"
          headingText="Heading text"
          id="withHTMLStringContent"
          imageAlt="Image alt text"
          imageAspectRatio={ImageRatios.Original}
          imageCaption="Image caption"
          imageCredit="Image credit"
          imagePosition={StructuredContentImagePosition.Left}
          imageSize={ImageSizes.Medium}
          imageSrc="https://placeimg.com/400/300/animals"
          bodyContent={htmlStringBodyContent}
        />
      )
      .toJSON();
    const withHTMLDOMContent = renderer
      .create(
        <StructuredContent
          calloutText="This is the callout text"
          headingText="Heading text"
          id="withHTMLDOMContent"
          imageAlt="Image alt text"
          imageAspectRatio={ImageRatios.Original}
          imageCaption="Image caption"
          imageCredit="Image credit"
          imagePosition={StructuredContentImagePosition.Left}
          imageSize={ImageSizes.Medium}
          imageSrc="https://placeimg.com/400/300/animals"
          bodyContent={htmlDOMBodyContent}
        />
      )
      .toJSON();
    const withoutAnImage = renderer
      .create(
        <StructuredContent
          calloutText="This is the callout text"
          headingText="Heading text"
          id="withoutAnImage"
          bodyContent={htmlStringBodyContent}
        />
      )
      .toJSON();
    const withImageWithoutCaptionOrCredit = renderer
      .create(
        <StructuredContent
          calloutText="This is the callout text"
          headingText="Heading text"
          id="withImageWithoutCaptionOrCredit"
          imageAlt="Image alt text"
          imageAspectRatio={ImageRatios.Original}
          imagePosition={StructuredContentImagePosition.Left}
          imageSize={ImageSizes.Medium}
          imageSrc="https://placeimg.com/400/300/animals"
          bodyContent={htmlStringBodyContent}
        />
      )
      .toJSON();
    const withoutHeading = renderer
      .create(
        <StructuredContent
          calloutText="This is the callout text"
          id="withoutHeading"
          imageAlt="Image alt text"
          imageAspectRatio={ImageRatios.Original}
          imageCaption="Image caption"
          imageCredit="Image credit"
          imagePosition={StructuredContentImagePosition.Left}
          imageSize={ImageSizes.Medium}
          imageSrc="https://placeimg.com/400/300/animals"
          bodyContent={htmlStringBodyContent}
        />
      )
      .toJSON();
    const withoutCalloutText = renderer
      .create(
        <StructuredContent
          headingText="Heading text"
          id="withoutCalloutText"
          imageAlt="Image alt text"
          imageAspectRatio={ImageRatios.Original}
          imageCaption="Image caption"
          imageCredit="Image credit"
          imagePosition={StructuredContentImagePosition.Left}
          imageSize={ImageSizes.Medium}
          imageSrc="https://placeimg.com/400/300/animals"
          bodyContent={htmlStringBodyContent}
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <StructuredContent
          calloutText="This is the callout text"
          headingText="Heading text"
          id="withChakraProps"
          imageAlt="Image alt text"
          imageAspectRatio={ImageRatios.Original}
          imageCaption="Image caption"
          imageCredit="Image credit"
          imagePosition={StructuredContentImagePosition.Left}
          imageSize={ImageSizes.Medium}
          imageSrc="https://placeimg.com/400/300/animals"
          bodyContent={htmlStringBodyContent}
          p="20px"
          color="ui.error.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <StructuredContent
          calloutText="This is the callout text"
          headingText="Heading text"
          id="withOtherProps"
          imageAlt="Image alt text"
          imageAspectRatio={ImageRatios.Original}
          imageCaption="Image caption"
          imageCredit="Image credit"
          imagePosition={StructuredContentImagePosition.Left}
          imageSize={ImageSizes.Medium}
          imageSrc="https://placeimg.com/400/300/animals"
          bodyContent={htmlStringBodyContent}
          data-testid="props"
        />
      )
      .toJSON();

    expect(withHTMLStringContent).toMatchSnapshot();
    expect(withHTMLDOMContent).toMatchSnapshot();
    expect(withoutAnImage).toMatchSnapshot();
    expect(withImageWithoutCaptionOrCredit).toMatchSnapshot();
    expect(withoutHeading).toMatchSnapshot();
    expect(withoutCalloutText).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
