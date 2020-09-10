import * as React from "react";
import { Story } from "@storybook/react/types-6-0";

import Image from "../Image/Image";
import Heading from "../Heading/Heading";
import { HeroTypes } from "./HeroTypes";
import Hero, { HeroProps } from "./Hero";
import Placeholder from "../Placeholder/Placeholder";

export default {
    title: "Hero",
    component: Hero,
};

const HeroTemplate: Story<HeroProps> = (args) => <Hero {...args} />;

export const hero = HeroTemplate.bind({});
hero.args = {
    heroType: HeroTypes.Primary,
    heading: "Heading",
    subHeaderText: "Subheading",
    backgroundImageSrc: "https://placeimg.com/1600/800/arch",
    image: "alskdjf",
};

hero.argTypes = {
    blockName: { table: { disable: true } },
    className: { table: { disable: true } },
    modifiers: { table: { disable: true } },
    children: { table: { disable: true } },
};

export const heroPrimary = () => (
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
    />
);

export const heroSecondary = () => (
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
        subHeaderText={<div className="hero__body-text">Example subtitle</div>}
        image={
            <Image
                src="https://placeimg.com/800/400/arch"
                blockName={"hero"}
                alt={""}
            />
        }
    />
);

export const heroStaffPicks = () => (
    <Hero
        heroType={HeroTypes.Primary}
        heading={
            <Heading
                level={1}
                id={"1"}
                text={"Staff Picks"}
                blockName={"hero"}
            />
        }
        subHeaderText={
            <div className="hero__body-text">
                Nobody loves books more than our experts. Browse and filter
                hundreds of their favorites. Want more suggestions? Check out{" "}
                <a href="#etc">Best Books</a> and{" "}
                <a href="#etc2">125 Books We Love</a>.
            </div>
        }
        foregroundColor="#ffffff"
        backgroundColor="#bb1d12"
        backgroundImageSrc="https://placeimg.com/1600/800/arch"
    />
);

export const ExhibitionsHero = () => (
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
                Placeholder for locationDetails, which doesn't exist yet
            </Placeholder>
        }
        foregroundColor="#ffffff"
        backgroundColor="#0071ce"
        backgroundImageSrc="https://p24.f4.n0.cdn.getcloudapp.com/items/NQuDO4xO/index.jpeg?v=d49888fbe420dd2fd163adc2ad0cdac6"
    />
);

export const DigitalResearchBooksHeader = () => (
    <>
        <Hero
            heroType={HeroTypes.Secondary}
            heading={
                <Heading
                    level={1}
                    id={"1"}
                    text={"ResearchNow"}
                    blockName={"hero"}
                />
            }
            subHeaderText={
                <div className="hero__body-text">
                    The internet’s search engine for research collections and
                    e-books you can use right now. Powered by the New York
                    Public Library.
                </div>
            }
            image={
                <Image
                    src="https://placeimg.com/200/100/arch"
                    blockName={"hero"}
                    alt={""}
                />
            }
        />
    </>
);
