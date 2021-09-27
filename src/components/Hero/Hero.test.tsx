import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import Image from "../Image/Image";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import { HeroTypes } from "./HeroTypes";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="a11y-hero"
            text="Hero Primary"
            blockName="hero"
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders Primary Hero with background image", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="primary-hero"
            text="Hero Primary"
            blockName="hero"
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      />
    );
    expect(utils.container.querySelector(".hero--primary")).toBeInTheDocument();
    expect(utils.container.querySelector(".hero")).toHaveAttribute(
      "style",
      "background-image: url(https://placeimg.com/1600/800/arch);"
    );
  });

  it("renders Secondary Hero with foreground image", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.Secondary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="secondary-hero"
            text="Hero Secondary"
            blockName="hero"
          />
        }
        image={
          <Image
            src="https://placeimg.com/800/400/arch"
            blockName="hero"
            alt="Image alt text."
          />
        }
      />
    );
    expect(
      utils.container.querySelector(".hero--secondary")
    ).toBeInTheDocument();
    expect(utils.container.querySelector(".hero__image ")).toHaveAttribute(
      "src",
      "https://placeimg.com/800/400/arch"
    );
  });

  it("renders Tertiary Hero without any images", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.Tertiary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="tertiary-hero"
            text="Hero Tertiary"
            blockName="hero"
          />
        }
      />
    );
    expect(
      utils.container.querySelector(".hero--tertiary")
    ).toBeInTheDocument();
    expect(
      utils.container.querySelector(".hero--tertiary")
    ).not.toHaveAttribute("style");
    expect(
      utils.container.querySelector(".hero__image ")
    ).not.toBeInTheDocument();
  });

  it("renders Fifty-Fifty Hero with foreground image", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.FiftyFifty}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="fifty-fifty-hero"
            text="Hero Fifty-Fifty"
            blockName="hero"
          />
        }
        image={
          <Image
            src="https://placeimg.com/600/200/arch"
            blockName="hero"
            alt="Image alt text."
          />
        }
      />
    );
    expect(utils.container.querySelector(".hero--50-50")).toBeInTheDocument();
    expect(utils.container.querySelector(".hero__image ")).toHaveAttribute(
      "src",
      "https://placeimg.com/600/200/arch"
    );
  });

  it("renders Campaign Hero with background and foreground images", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.Campaign}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="campaign-hero"
            text="Hero campaign"
            blockName="hero"
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
        image={
          <Image
            src="https://placeimg.com/800/400/arch"
            blockName="hero"
            alt="Image alt text."
          />
        }
      />
    );
    expect(
      utils.container.querySelector(".hero--campaign")
    ).toBeInTheDocument();
    expect(utils.container.querySelector(".hero")).toHaveAttribute(
      "style",
      "background-image: url(https://placeimg.com/1600/800/arch);"
    );
    expect(utils.container.querySelector(".hero__image ")).toHaveAttribute(
      "src",
      "https://placeimg.com/800/400/arch"
    );
  });

  it("renders custom background and foreground colors", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="custom-colors-hero"
            text="Hero with Cusotm Colors"
            blockName="hero"
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
        foregroundColor="#123456"
        backgroundColor="#654321"
      />
    );
    expect(utils.container.querySelector(".hero__content")).toHaveAttribute(
      "style",
      "color: rgb(18, 52, 86); background-color: rgb(101, 67, 33);"
    );
  });

  it("renders Hero with warnings in browser console", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={HeadingLevels.One}
            id="hero-errors"
            text="Hero with Error Warnings"
            blockName="hero"
          />
        }
      />
    );
    expect(utils.container.querySelector(".hero--warning")).toBeInTheDocument();
  });
});
