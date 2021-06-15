import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Placeholder from "../Placeholder/Placeholder";
import Image from "../Image/Image";
import Heading from "../Heading/Heading";
import { HeroTypes } from "./HeroTypes";
import Hero from "./Hero";

describe("Hero Test", () => {
  it("Generates a Hero with a background image", () => {
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
    expect(wrapper.prop("style")).to.deep.equal({
      backgroundImage: "url(https://placeimg.com/1600/800/arch)",
    });
  });

  it("Generates a Hero with a foreground image", () => {
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
    expect(wrapper.find("Image").dive().find("img")).to.have.lengthOf(1);
  });

  it("On primary hero, background image is required", () => {
    expect(() =>
      Enzyme.mount(
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
          image={
            <Image
              src="https://placeimg.com/800/400/arch"
              blockName={"hero"}
              alt={""}
            />
          }
        ></Hero>
      )
    ).to.throw("backgroundImageSrc required on PRIMARY heroTypes");
  });

  it("Throws error if both backgroundImage and foregroundImage are passed", () => {
    expect(() =>
      Enzyme.mount(
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
          backgroundImageSrc="https://placeimg.com/1600/800/arch"
        ></Hero>
      )
    ).to.throw(
      "Please only either backgroundImageSrc or image into Hero, got both"
    );
  });

  it("Throws error if locationDetails are based to non-primary hero types", () => {
    expect(() =>
      Enzyme.mount(
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
          locationDetails={
            <Placeholder>
              {"Placeholder for locationDetails, which doesn't exist yet"}
            </Placeholder>
          }
        ></Hero>
      )
    ).to.throw("Please provide locationDetails only to PRIMARY heroTypes");
  });

  it("Throws error if only one var is passed between foregroundColor and backgroundColor", () => {
    expect(() =>
      Enzyme.mount(
        <Hero
          heroType={HeroTypes.Primary}
          heading={
            <Heading
              level={1}
              id={"1"}
              text={
                "Syncretic Vibrations: Exploring the Mosaic of Blackness through the Melville J. and Frances S.Herskovits Collection"
              }
              blockName={"hero"}
            />
          }
          locationDetails={
            <Placeholder>
              {"Placeholder for locationDetails, which doesn't exist yet"}
            </Placeholder>
          }
          foregroundColor="#ffffff"
          backgroundImageSrc="https://p24.f4.n0.cdn.getcloudapp.com/items/NQuDO4xO/index.jpeg?v=d49888fbe420dd2fd163adc2ad0cdac6"
        />
      )
    ).to.throw(
      "Please provide both foregroundColor and backgroundColor to Hero, only got foregroundColor"
    );
  });
});
