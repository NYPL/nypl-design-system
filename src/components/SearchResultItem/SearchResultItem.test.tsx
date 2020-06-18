import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import Button from "../Button/Button";
import { ButtonTypes } from "../Button/ButtonTypes";
import Card from "../Card/Card";
import Image from "../Image/Image";
import SearchResultItem from "./SearchResultItem";

describe("SearchResultItem", () => {
    const validHeading = <a href="hello">headingText</a>;
    const invalidHeading = (
        <>
            <a href="hello"> headingText</a> <span>badText</span>
        </>
    );

    const EditionInfo = (heading: JSX.Element) => {
        return (
            <SearchResultItem
                id="Result1"
                resultIndex={1}
                modifiers={[]}
                blockName={""}
                headingContent={heading}
                subtitleContent={
                    <>
                        "Subtitle need max character count Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua."
                    </>
                }
                authorLinkElement={<a href="blah">bahah</a>}
                card={
                    <Card
                        id="edition-2"
                        key="edition-2"
                        ClassName={["edition-card"]}
                        image={
                            <Image
                                src="https://placeimg.com/400/200/arch"
                                isDecorative={true}
                            />
                        }
                        content={<div>Middle column content</div>}
                        ctas={
                            <Button
                                callback={function () {
                                    console.log(this);
                                }}
                                id="button1"
                                buttonType={ButtonTypes.Filled}
                                type="submit"
                            >
                                Example CTA
                            </Button>
                        }
                    />
                }
                editionsLinkElement={<a href="blah">bahah</a>}
            />
        );
    };

    it("Search Result Item with a Heading Link and Card", () => {
        let shallow = Enzyme.shallow(EditionInfo(validHeading));

        // Need to render since Heading's child is a component.
        const heading = shallow.find("Heading").render();

        expect(heading).to.have.lengthOf(1);
        expect(heading.find("a")).to.have.lengthOf(1);
        expect(shallow.find("Card")).to.have.lengthOf(1);
    });
});
