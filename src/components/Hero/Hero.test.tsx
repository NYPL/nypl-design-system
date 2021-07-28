import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

// import Placeholder from "../Placeholder/Placeholder";
import Image from "../Image/Image";
import Heading from "../Heading/Heading";
import { HeroTypes } from "./HeroTypes";
import Hero from "./Hero";

describe("Hero Component", () => {
  describe("Primary Hero", () => {
    const wrapper = Enzyme.shallow(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero Primary"}
            blockName={"hero"}
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      ></Hero>
    );
    it("Renders Primary Hero", () => {
      expect(wrapper.hasClass("hero--primary")).to.equal(true);
    });
    it("Renders background image", () => {
      expect(wrapper.prop("style")).to.deep.equal({
        backgroundImage: "url(https://placeimg.com/1600/800/arch)",
      });
    });
  });

  describe("Secondary Hero", () => {
    const wrapper = Enzyme.shallow(
      <Hero
        heroType={HeroTypes.Secondary}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero Secondary"}
            blockName={"hero"}
          />
        }
        image={
          <Image
            src="https://placeimg.com/800/400/arch"
            blockName={"hero"}
            alt={""}
          />
        }
      ></Hero>
    );
    it("Renders Secondary Hero", () => {
      expect(wrapper.hasClass("hero--secondary")).to.equal(true);
    });
    it("Renders foreground image", () => {
      expect(wrapper.find("Image").dive().find("img")).to.have.lengthOf(1);
    });
  });

  describe("Tertiary Hero", () => {
    const wrapper = Enzyme.shallow(
      <Hero
        heroType={HeroTypes.Tertiary}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero Tertiary"}
            blockName={"hero"}
          />
        }
      ></Hero>
    );
    it("Renders Tertiary Hero", () => {
      expect(wrapper.hasClass("hero--tertiary")).to.equal(true);
    });
  });

  describe("FiftyFifty Hero", () => {
    const wrapper = Enzyme.shallow(
      <Hero
        heroType={HeroTypes.FiftyFifty}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero FiftyFifty"}
            blockName={"hero"}
          />
        }
      ></Hero>
    );
    it("Renders FiftyFifty Hero", () => {
      expect(wrapper.hasClass("hero--50-50")).to.equal(true);
    });
  });

  describe("Campaign Hero", () => {
    const wrapper = Enzyme.shallow(
      <Hero
        heroType={HeroTypes.Campaign}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero Campaign"}
            blockName={"hero"}
          />
        }
        image={
          <Image
            src="https://placeimg.com/800/400/arch"
            blockName={"hero"}
            alt={""}
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      ></Hero>
    );
    it("Renders Campaign Hero", () => {
      expect(wrapper.hasClass("hero--campaign")).to.equal(true);
    });
    it("Renders foreground image", () => {
      expect(wrapper.find("Image").dive().find("img")).to.have.lengthOf(1);
    });
    it("Renders background image", () => {
      expect(wrapper.prop("style")).to.deep.equal({
        backgroundImage: "url(https://placeimg.com/1600/800/arch)",
      });
    });
  });

  describe("Custom Colors", () => {
    const wrapper = Enzyme.mount(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero Campaign"}
            blockName={"hero"}
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
        foregroundColor="#123456"
        backgroundColor="#654321"
      ></Hero>
    );
    it("Renders custom foreground color", () => {
      expect(
        wrapper.find(".hero__content").get(0).props.style
      ).to.have.property("color", "#123456");
    });
    it("Renders custom background color", () => {
      expect(
        wrapper.find(".hero__content").get(0).props.style
      ).to.have.property("backgroundColor", "#654321");
    });
  });

  describe("Warnings", () => {
    const wrapper = Enzyme.shallow(
      <Hero
        heroType={HeroTypes.Primary}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero Campaign"}
            blockName={"hero"}
          />
        }
      ></Hero>
    );
    it("Generates warning in browser console", () => {
      expect(wrapper.hasClass("hero--warning")).to.equal(true);
    });
  });

  it("Generates a Campaign Hero with foreground and background images", () => {
    const wrapper = Enzyme.shallow(
      <Hero
        heroType={HeroTypes.Campaign}
        heading={
          <Heading
            level={1}
            id={"1"}
            text={"Hero Campaign"}
            blockName={"hero"}
          />
        }
        image={
          <Image
            src="https://placeimg.com/800/400/arch"
            blockName={"hero"}
            alt={""}
          />
        }
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
      ></Hero>
    );
    expect(wrapper.prop("style")).to.deep.equal({
      backgroundImage: "url(https://placeimg.com/1600/800/arch)",
    });
    expect(wrapper.find("Image").dive().find("img")).to.have.lengthOf(1);
  });
});
