
import { expect } from "chai";
import { stub } from "sinon";
import * as Enzyme from "enzyme";
import * as React from "react";
import * as Mocha from "mocha";

import Heading from "../../components/01-atoms/Text/Headings/Heading";
import { HeroTypes } from "../../components/03-organisms/Hero/HeroTypes";
import Hero from "../../components/03-organisms/Hero/Hero";

describe("Hero Test", () => {

  let blurCallback;
  let changeCallback;
  let submitCallback;

  beforeEach(() => {
    changeCallback = stub();
    blurCallback = stub();
  });

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
    expect(wrapper.find("Hero")).to.have.lengthOf(1);
  });
});
