import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Placeholder from "../Placeholder/Placeholder";
import Image from "../Image/Image";
import Heading from "../Heading/Heading";
import { HeroTypes } from "./HeroTypes";
import Hero from "./Hero";

describe("Hero Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading level={1} id="1" text="Hero Primary" blockName="hero" />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Hero Test", () => {
  it("Generates a Hero with a background image", () => {
    const utils = render(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading level={1} id="1" text="Hero Primary" blockName="hero" />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      />
    );
    expect(screen.getByText("Hero Primary")).toBeInTheDocument();
    expect(utils.container.querySelector(".hero")).toHaveAttribute(
      "style",
      "background-image: url(https://placeimg.com/1600/800/arch);"
    );
  });

  it("Generates a Hero with a foreground image", () => {
    render(
      <Hero
        heroType={HeroTypes.Secondary}
        heading={
          <Heading level={1} id="1" text="Hero Secondary" blockName="hero" />
        }
        image={
          <Image
            src="https://placeimg.com/800/400/arch"
            blockName="hero"
            alt=""
          />
        }
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://placeimg.com/800/400/arch"
    );
  });

  it("On primary hero, background image is required", () => {
    expect(() =>
      render(
        <Hero
          heroType={HeroTypes.Primary}
          heading={
            <Heading level={1} id="1" text="Hero Primary" blockName="hero" />
          }
          image={
            <Image
              src="https://placeimg.com/800/400/arch"
              blockName="hero"
              alt=""
            />
          }
        />
      )
    ).toThrowError("backgroundImageSrc required on PRIMARY heroTypes");
  });

  it("Throws error if both backgroundImage and foregroundImage are passed", () => {
    expect(() =>
      render(
        <Hero
          heroType={HeroTypes.Secondary}
          heading={
            <Heading level={1} id="1" text="Hero Secondary" blockName="hero" />
          }
          image={
            <Image
              src="https://placeimg.com/800/400/arch"
              blockName="hero"
              alt=""
            />
          }
          backgroundImageSrc="https://placeimg.com/1600/800/arch"
        />
      )
    ).toThrowError(
      "Please only either backgroundImageSrc or image into Hero, got both"
    );
  });

  it("Throws error if locationDetails are based to non-primary hero types", () => {
    expect(() =>
      render(
        <Hero
          heroType={HeroTypes.Secondary}
          heading={
            <Heading level={1} id="1" text="Hero Secondary" blockName="hero" />
          }
          image={
            <Image
              src="https://placeimg.com/800/400/arch"
              blockName="hero"
              alt=""
            />
          }
          locationDetails={
            <Placeholder>
              Placeholder for locationDetails, which doesn't exist yet
            </Placeholder>
          }
        />
      )
    ).toThrowError("Please provide locationDetails only to PRIMARY heroTypes");
  });

  it("Throws error if only one var is passed between foregroundColor and backgroundColor", () => {
    expect(() =>
      render(
        <Hero
          heroType={HeroTypes.Primary}
          heading={
            <Heading
              level={1}
              id="1"
              text="Syncretic Vibrations: Exploring the Mosaic of Blackness through the Melville J. and Frances S.Herskovits Collection"
              blockName="hero"
            />
          }
          locationDetails={
            <Placeholder>
              Placeholder for locationDetails, which doesn't exist yet
            </Placeholder>
          }
          foregroundColor="#ffffff"
          backgroundImageSrc="https://p24.f4.n0.cdn.getcloudapp.com/items/NQuDO4xO/index.jpeg?v=d49888fbe420dd2fd163adc2ad0cdac6"
        />
      )
    ).toThrowError(
      "Please provide both foregroundColor and backgroundColor to Hero, only got foregroundColor"
    );
  });
});
