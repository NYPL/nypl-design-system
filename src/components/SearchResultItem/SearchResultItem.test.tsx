import * as Enzyme from "enzyme";
import * as React from "react";

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
                editionInfo={{
                    editionYearHeading: <a href="blah2">2004 Edition</a>,
                    coverUrl: "https://placeimg.com/57/81/arch",
                    editionInfo: [
                        <>Published in New York by Random House</>,
                        <>Written in English</>,
                        <>Under Creative Commons License</>,
                    ],
                    readOnlineLink: <a href="#read-online">read</a>,
                    downloadLink: <a href="#download">download</a>,
                }}
                editionsLinkElement={<a href="blah">bahah</a>}
            />
        );
    };

    // let shortHeadingText = "hello";
    // let longHeadingText = `hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello `;

    it("Search Result Item with a Heading Link, Edition Card and Edition Card", () => {
        const shallow = Enzyme.shallow(EditionInfo(validHeading));

        // Need to render since Heading's child is a component.
        const heading = shallow.find("Heading").render();

        expect(heading).toHaveLength(1);
        expect(heading.find("a")).toHaveLength(1);
        expect(shallow.find("EditionCard")).toHaveLength(1);
    });

    // TODO: Figure out how to do text count between multiple unknown children
    // it("Throws error when Heading Text is too long", () => {
    //     expect(() => Enzyme.mount(EditionInfo(longHeadingText))).to.throw("Section Title (h2) Text must be fewer than 80 characters");
    // });
});
