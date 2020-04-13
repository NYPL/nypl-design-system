import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Image from "../../components/01-atoms/Images/Image/Image";
import Heading from "../../components/01-atoms/Text/Headings/Heading";
import { HeroTypes } from "../../components/03-organisms/Hero/HeroTypes";
import Hero from "../../components/03-organisms/Hero/Hero";

describe("Hero Test", () => {
  it("Generates a Hero with a background image", () => {
    let wrapper = Enzyme.shallow(<Hero
      heroType={HeroTypes.Primary}
      heading={<Heading
        level={1}
        id={"1"}
        text={"Hero Primary"}
        blockName={"hero"}
      />}
      backgroundImageSrc="https://placeimg.com/1600/800/arch">
    ></Hero>);
    expect(wrapper.find(".hero")).to.have.lengthOf(1);
  });

  it("Generates a Hero with a foreground image", () => {
    let wrapper = Enzyme.shallow(<Hero
      heroType={HeroTypes.Secondary}
      heading={<Heading
        level={1}
        id={"1"}
        text={"Hero Secondary"}
        blockName={"hero"}
      />}
      image={<Image
        src="https://placeimg.com/800/400/arch"
        isDecorative={true}
        imageBlockname={"hero"}
      />}
    ></Hero>);
    expect(wrapper.find("Image").dive().find("img")).to.have.lengthOf(1);
  });

  it("On primary hero, background image is required", () => {
    expect(() => Enzyme.mount(<Hero
      heroType={HeroTypes.Primary}
      heading={<Heading
        level={1}
        id={"1"}
        text={"Hero Primary"}
        blockName={"hero"}
      />}
      image={<Image
        src="https://placeimg.com/800/400/arch"
        isDecorative={true}
        imageBlockname={"hero"}
      />}
    ></Hero>))
    .to.throw("backgroundImageSrc required on PRIMARY heroTypes");
  });

  it("Throws error if both backgroundImage and foregroundImage are passed", () => {
    expect(() => Enzyme.mount(<Hero
      heroType={HeroTypes.Secondary}
      heading={<Heading
        level={1}
        id={"1"}
        text={"Hero Secondary"}
        blockName={"hero"}
      />}
      image={<Image
        src="https://placeimg.com/800/400/arch"
        isDecorative={true}
        imageBlockname={"hero"}
      />}
      backgroundImageSrc="https://placeimg.com/1600/800/arch"
    ></Hero>))
    .to.throw("Please only either backgroundImageSrc or image into Hero, got both");
  });
});
