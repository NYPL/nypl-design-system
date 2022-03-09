import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import { HeroTypes } from "./HeroTypes";
import Hero from "./Hero";

export const subHeaderText = (
  <>
    Explore our collection of hundreds of online resources and databases. Use
    our free online content to help with your research, whether it's finding a
    single article, tracing a family tree, learning a new language, or anything
    in between.
  </>
);
export const otherSubHeaderText =
  "With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";
const imageAlt = "Image example";
const imageSrc = "https://placeimg.com/800/400/animals";

describe("Hero", () => {
  describe("axe accessbility tests", () => {
    it("passes for type Primary", async () => {
      const { container } = render(
        <Hero
          heroType={HeroTypes.Primary}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="a11y-hero"
              text="Hero Primary"
            />
          }
          subHeaderText="Example Subtitle"
          backgroundImageSrc="https://placeimg.com/1600/800/arch"
        />
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("passes for type Secondary", async () => {
      const { container } = render(
        <Hero
          heroType={HeroTypes.Secondary}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="a11y-hero"
              text="Hero Secondary"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={subHeaderText}
        />
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("passes for type Tertiary", async () => {
      const { container } = render(
        <Hero
          heroType={HeroTypes.Tertiary}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="a11y-hero"
              text="Hero Tertiary"
            />
          }
          subHeaderText={otherSubHeaderText}
        />
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("passes for type Campaign", async () => {
      const { container } = render(
        <Hero
          backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
          heroType={HeroTypes.Campaign}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="a11y-hero"
              text="Hero Campaign"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={otherSubHeaderText}
        />
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("passes for type FiftyFifty", async () => {
      const { container } = render(
        <Hero
          heroType={HeroTypes.FiftyFifty}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={otherSubHeaderText}
        />
      );
      expect(await axe(container)).toHaveNoViolations();
    });
  });

  it("renders Primary Hero", () => {
    render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="primary-hero"
            text="Hero Primary"
          />
        }
        subHeaderText="Example Subtitle"
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      />
    );

    expect(screen.getByText("Hero Primary")).toBeInTheDocument();
    expect(screen.getByText("Example Subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toHaveAttribute(
      "style",
      "background-image: url(https://placeimg.com/1600/800/arch);"
    );
  });

  it("renders Secondary Hero", () => {
    render(
      <Hero
        heroType={HeroTypes.Secondary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="secondary-hero"
            text="Hero Secondary"
          />
        }
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={subHeaderText}
      />
    );

    expect(screen.getByText("Hero Secondary")).toBeInTheDocument();
    expect(screen.getByText(/Explore our collection of/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://placeimg.com/800/400/animals"
    );
  });

  it("renders Tertiary Hero", () => {
    render(
      <Hero
        heroType={HeroTypes.Tertiary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="tertiary-hero"
            text="Hero Tertiary"
          />
        }
        subHeaderText={otherSubHeaderText}
      />
    );

    expect(screen.getByText("Hero Tertiary")).toBeInTheDocument();
    expect(screen.getByText(/With 92 locations across/i)).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders Campaign Hero", () => {
    render(
      <Hero
        backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
        heroType={HeroTypes.Campaign}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="campaign-hero"
            text="Hero Campaign"
          />
        }
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={otherSubHeaderText}
      />
    );

    expect(screen.getByText("Hero Campaign")).toBeInTheDocument();
    expect(screen.getByText(/With 92 locations across/i)).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toHaveAttribute(
      "style",
      "background-image: url(https://placeimg.com/2400/800/nature/grayscale);"
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://placeimg.com/800/400/animals"
    );
  });

  it("renders Fifty-Fifty Hero", () => {
    render(
      <Hero
        heroType={HeroTypes.FiftyFifty}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={otherSubHeaderText}
      />
    );

    expect(screen.getByText(/With 92 locations across/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://placeimg.com/800/400/animals"
    );
  });

  it("renders custom background and foreground colors for all but the Secondary type", () => {
    const { rerender } = render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="custom-colors-hero"
            text="Hero with Custom Colors"
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
        foregroundColor="#123456"
        backgroundColor="#654321"
      />
    );

    expect(screen.getByTestId("hero-content")).toHaveAttribute(
      "style",
      "color: rgb(18, 52, 86); background-color: rgb(101, 67, 33);"
    );

    rerender(
      <Hero
        backgroundColor="#654321"
        foregroundColor="#123456"
        heroType={HeroTypes.FiftyFifty}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={otherSubHeaderText}
      />
    );

    expect(screen.getByTestId("hero-content")).toHaveAttribute(
      "style",
      "color: rgb(18, 52, 86); background-color: rgb(101, 67, 33);"
    );

    rerender(
      <Hero
        backgroundColor="#654321"
        foregroundColor="#123456"
        heroType={HeroTypes.Secondary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="secondary-hero"
            text="Hero Secondary"
          />
        }
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={subHeaderText}
      />
    );

    expect(screen.getByTestId("hero-content")).not.toHaveAttribute(
      "style",
      "color: rgb(18, 52, 86); background-color: rgb(101, 67, 33);"
    );
  });

  it("renders Primary Hero with warnings in browser console", () => {
    const warn = jest.spyOn(console, "warn");
    const heading = (
      <Heading
        level={HeadingLevels.One}
        id="hero-errors"
        text="Hero with Error Warnings"
      />
    );
    const { rerender } = render(
      <Hero heroType={HeroTypes.Primary} heading={heading} />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: it is recommended to use the "backgroundImageSrc" prop for the PRIMARY Hero.`
    );

    rerender(
      <Hero
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
        heroType={HeroTypes.Primary}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: the "imageSrc" and "imageAlt" props have been passed, but the "PRIMARY" Hero will not use it.`
    );
  });

  it("renders Secondary Hero with warnings in browser console", () => {
    const warn = jest.spyOn(console, "warn");
    const heading = (
      <Heading
        level={HeadingLevels.One}
        id="hero-errors"
        text="Hero with Error Warnings"
      />
    );
    const { rerender } = render(
      <Hero
        heroType={HeroTypes.Secondary}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        locationDetails={<>Some location details.</>}
        subHeaderText={subHeaderText}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: Please provide "locationDetails" only to PRIMARY hero.`
    );

    rerender(
      <Hero
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
        heroType={HeroTypes.Secondary}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={subHeaderText}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: the "backgroundImageSrc" prop has been passed, but SECONDARY hero will not use it.`
    );

    rerender(
      <Hero
        backgroundColor="#654321"
        foregroundColor="#123456"
        heroType={HeroTypes.Secondary}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={subHeaderText}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: the "foregroundColor" and/or "backgroundColor" props have been passed, but SECONDARY Hero will not use them.`
    );
  });

  it("renders Tertiary Hero with warnings in browser console", () => {
    const warn = jest.spyOn(console, "warn");
    const heading = (
      <Heading
        level={HeadingLevels.One}
        id="hero-errors"
        text="Hero with Error Warnings"
      />
    );
    const { rerender } = render(
      <Hero
        heroType={HeroTypes.Tertiary}
        heading={heading}
        subHeaderText={otherSubHeaderText}
        locationDetails={<>Some location details.</>}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: Please provide "locationDetails" only to PRIMARY hero.`
    );

    rerender(
      <Hero
        heroType={HeroTypes.Tertiary}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={otherSubHeaderText}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: TERTIARY hero will not use any of the image props.`
    );

    rerender(
      <Hero
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
        heroType={HeroTypes.Tertiary}
        heading={heading}
        subHeaderText={otherSubHeaderText}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: TERTIARY hero will not use any of the image props.`
    );
  });

  it("renders Campaign Hero with warnings in browser console", () => {
    const warn = jest.spyOn(console, "warn");
    const heading = (
      <Heading
        level={HeadingLevels.One}
        id="hero-errors"
        text="Hero with Error Warnings"
      />
    );
    const { rerender } = render(
      <Hero
        backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
        heroType={HeroTypes.Campaign}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        locationDetails={<>Some location details.</>}
        subHeaderText={otherSubHeaderText}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: Please provide "locationDetails" only to PRIMARY hero.`
    );

    rerender(
      <Hero
        heroType={HeroTypes.Campaign}
        heading={heading}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={otherSubHeaderText}
        locationDetails={<>Some location details.</>}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: it is recommended to use both "backgroundImageSrc" and "image" props for CAMPAIGN hero.`
    );

    rerender(
      <Hero
        heroType={HeroTypes.Campaign}
        heading={heading}
        subHeaderText={otherSubHeaderText}
        backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
        locationDetails={<>Some location details.</>}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: it is recommended to use both "backgroundImageSrc" and "image" props for CAMPAIGN hero.`
    );
  });

  it("renders FiftyFifty Hero with warnings in browser console", () => {
    const warn = jest.spyOn(console, "warn");
    const { rerender } = render(
      <Hero
        heroType={HeroTypes.FiftyFifty}
        subHeaderText={otherSubHeaderText}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        locationDetails={<>Some location details.</>}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: Please provide "locationDetails" only to PRIMARY hero.`
    );

    rerender(
      <Hero
        backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
        heroType={HeroTypes.FiftyFifty}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        subHeaderText={otherSubHeaderText}
      />
    );
    expect(warn).toHaveBeenCalledWith(
      `Hero: the "backgroundImageSrc" prop has been passed, but FIFTYFIFTY hero will not use it.`
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const primary = renderer
      .create(
        <Hero
          heroType={HeroTypes.Primary}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="primary-hero"
              text="Hero Primary"
            />
          }
          subHeaderText="Example Subtitle"
          backgroundImageSrc="https://placeimg.com/1600/800/arch"
        />
      )
      .toJSON();
    const secondary = renderer
      .create(
        <Hero
          heroType={HeroTypes.Secondary}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="secondary-hero"
              text="Hero Secondary"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={subHeaderText}
        />
      )
      .toJSON();
    const secondaryBooksAndMore = renderer
      .create(
        <Hero
          heroType={HeroTypes.SecondaryBooksAndMore}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="secondary-hero"
              text="Hero Secondary Books and More"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={subHeaderText}
        />
      )
      .toJSON();
    const secondaryLocations = renderer
      .create(
        <Hero
          heroType={HeroTypes.SecondaryLocations}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="secondary-hero"
              text="Hero Secondary Locations"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={subHeaderText}
        />
      )
      .toJSON();
    const secondaryResearch = renderer
      .create(
        <Hero
          heroType={HeroTypes.SecondaryResearch}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="secondary-hero"
              text="Hero Secondary"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={subHeaderText}
        />
      )
      .toJSON();
    const secondaryWhatsOn = renderer
      .create(
        <Hero
          heroType={HeroTypes.SecondaryWhatsOn}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="secondary-hero"
              text="Hero Secondary What's On"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={subHeaderText}
        />
      )
      .toJSON();
    const campaign = renderer
      .create(
        <Hero
          backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
          heroType={HeroTypes.Campaign}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="campaign-hero"
              text="Hero Campaign"
            />
          }
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={otherSubHeaderText}
        />
      )
      .toJSON();
    const tertiary = renderer
      .create(
        <Hero
          heroType={HeroTypes.Tertiary}
          heading={
            <Heading
              level={HeadingLevels.One}
              id="tertiary-hero"
              text="Hero Tertiary"
            />
          }
          subHeaderText={otherSubHeaderText}
        />
      )
      .toJSON();
    const fiftyFifty = renderer
      .create(
        <Hero
          heroType={HeroTypes.FiftyFifty}
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          subHeaderText={otherSubHeaderText}
        />
      )
      .toJSON();

    expect(primary).toMatchSnapshot();
    expect(secondary).toMatchSnapshot();
    expect(secondaryBooksAndMore).toMatchSnapshot();
    expect(secondaryLocations).toMatchSnapshot();
    expect(secondaryResearch).toMatchSnapshot();
    expect(secondaryWhatsOn).toMatchSnapshot();
    expect(tertiary).toMatchSnapshot();
    expect(campaign).toMatchSnapshot();
    expect(fiftyFifty).toMatchSnapshot();
  });
});
