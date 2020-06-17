import * as React from "react";
import bem from "../../utils/bem";
import { action } from "@storybook/addon-actions";

import Card from "./Card";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Icon from "../Icons/Icon";
import { IconRotationTypes } from "../Icons/IconTypes";
import { LinkTypes } from "../Link/LinkTypes";
import { ButtonTypes, ButtonIconPositions } from "../Button/ButtonTypes";

export default {
    title: "Card",
    component: Card,
};

export const CardWithFullData = () => (
    <Card
        id="cardID"
        heading={<Heading level={3} id="heading1" text={"Optional Header"} />}
        image={
            <Image
                src="https://placeimg.com/400/200/arch"
                isDecorative={true}
            />
        }
        // content={<div>Middle column content</div>}
        ctas={
            <Button
                callback={action("clicked")}
                id="button1"
                buttonType={ButtonTypes.Filled}
                type="submit"
            >
                Example CTA
            </Button>
        }
        footer={<>Optional footer</>}
    ></Card>
);

export const CardWithNoCallsToAction = () => (
    <Card
        id="cardID"
        heading={<Heading level={3} id="heading1" text={"Optional Header"} />}
        image={
            <Image
                src="https://placeimg.com/400/200/arch"
                isDecorative={true}
            />
        }
        content={<div>Middle column content</div>}
    ></Card>
);

export const EditionCard = () => (
    <Card
        id="card#1"
        extraClassName={["edition-card"]}
        heading={
            <Heading level={2} id="editioncardheading1" text={"2004 Edition"} />
        }
        image={
            <Image
                src="https://placeimg.com/300/400/arch"
                isDecorative={true}
            />
        }
        content={
            <>
                <div>Published in New York by Random House</div>
                <div>Written in English</div>
                <div>
                    License: Creative Commons
                    Attribution-NonCommercial-NoDerivatives 4.0 International
                </div>
            </>
        }
        ctas={
            <div className="edition-card__ctas">
                <Link linkType={LinkTypes.Button} href="blah">
                    Read Online
                </Link>
                <div className="edition-card__download">
                    <Link href="#url" linkType={LinkTypes.Action}>
                        <Icon
                            name="download"
                            blockName="more-link"
                            decorative={true}
                            modifiers={["left"]}
                            iconRotation={IconRotationTypes.rotate0}
                        ></Icon>
                        Download
                    </Link>
                </div>
            </div>
        }
    ></Card>
);

export const EditionCardWithOneLink = () => (
    <Card
        extraClassName={["edition-card"]}
        heading={
            <Heading level={2} id="editioncardheading1" text={"2004 Edition"} />
        }
        image={
            <Image
                src="https://placeimg.com/300/400/arch"
                isDecorative={true}
            />
        }
        content={
            <>
                <div>Published in New York by Random House</div>
                <div>Written in English</div>
                <div>
                    License: Creative Commons
                    Attribution-NonCommercial-NoDerivatives 4.0 International
                </div>
            </>
        }
        ctas={
            <div className="edition-card__ctas">
                <div className="edition-card__download">
                    <Link href="#url" linkType={LinkTypes.Action}>
                        <Icon
                            name="download"
                            blockName="more-link"
                            decorative={true}
                            modifiers={["left"]}
                            iconRotation={IconRotationTypes.rotate0}
                        ></Icon>
                        Download
                    </Link>
                </div>
            </div>
        }
    ></Card>
);

export const editionCardNoLinksWithEmptyState = () => (
    <Card
        id="card#1"
        image={
            <Image
                src="https://placeimg.com/300/400/arch"
                isDecorative={true}
            />
        }
        extraClassName={["edition-card"]}
        heading={
            <Heading level={2} id="editioncardheading1" text={"2004 Edition"} />
        }
        content={
            <>
                <div>Published in New York by Random House</div>
                <div>Written in English</div>
                <div>Under Creative Commons License</div>
            </>
        }
        ctas={
            <div className="edition-card__missing-links">
                Unavailable to read online
            </div>
        }
    ></Card>
);

export const editionCardWithSomeEditionInfo = () => (
    <Card
        id="card#1"
        extraClassName={["edition-card"]}
        image={
            <Image
                src="https://placeimg.com/300/400/arch"
                isDecorative={true}
            />
        }
        heading={
            <Heading
                level={2}
                id="editioncardheading1"
                url="#edition-link"
                text={"2004 Edition"}
            />
        }
        content={
            <>
                <div>Published in New York</div>
                <div>Under Creative Commons License</div>
            </>
        }
        ctas={
            <div className="edition-card__ctas">
                <Link linkType={LinkTypes.Button} href="blah">
                    Read Online
                </Link>
                <div className="edition-card__download">
                    <Link href="#url" linkType={LinkTypes.Action}>
                        <Icon
                            name="download"
                            blockName="more-link"
                            decorative={true}
                            modifiers={["left"]}
                            iconRotation={IconRotationTypes.rotate0}
                        ></Icon>
                        Download
                    </Link>
                </div>
            </div>
        }
    ></Card>
);

export const editionCardWithEmptyEditionInfo = () => (
    <Card
        id="card#1"
        extraClassName={["edition-card"]}
        image={
            <Image
                src="https://placeimg.com/300/400/arch"
                isDecorative={true}
            />
        }
        heading={
            <Heading
                level={2}
                id="editioncardheading1"
                url="#edition-link"
                text={"2004 Edition"}
            />
        }
        ctas={
            <div className="edition-card__ctas">
                <Link linkType={LinkTypes.Button} href="blah">
                    Read Online
                </Link>
                <div className="edition-card__download">
                    <Link href="#url" linkType={LinkTypes.Action}>
                        <Icon
                            name="download"
                            blockName="more-link"
                            decorative={true}
                            modifiers={["left"]}
                            iconRotation={IconRotationTypes.rotate0}
                        ></Icon>
                        Download
                    </Link>
                </div>
            </div>
        }
    ></Card>
);

export const editionCardWithAtypicalImageSize = () => (
    <Card
        id="card#1"
        extraClassName={["edition-card"]}
        image={
            <Image
                src="https://placeimg.com/100/800/arch"
                isDecorative={true}
            />
        }
        heading={
            <Heading
                level={2}
                id="editioncardheading1"
                url="#edition-link"
                text={"2004 Edition"}
            />
        }
        content={
            <>
                <div>Published in New York by Random House</div>
                <div>Written in English</div>
                <div>
                    License: Creative Commons
                    Attribution-NonCommercial-NoDerivatives 4.0 International
                </div>
            </>
        }
        ctas={
            <div className="edition-card__ctas">
                <Link linkType={LinkTypes.Button} href="blah">
                    Read Online
                </Link>
                <div className="edition-card__download">
                    <Link href="#url" linkType={LinkTypes.Action}>
                        <Icon
                            name="download"
                            blockName="more-link"
                            decorative={true}
                            modifiers={["left"]}
                            iconRotation={IconRotationTypes.rotate0}
                        ></Icon>
                        Download
                    </Link>
                </div>
            </div>
        }
    ></Card>
);

export const CirculationPatronWebCard = () => (
    <Card
        extraClassName={["lyrasis-card"]}
        image={
            <Image
                src="https://placeimg.com/300/400/arch"
                isDecorative={true}
            />
        }
        content={
            <>
                <Heading
                    level={2}
                    id="heading1"
                    text={"The Year of Magical Thinking"}
                />
                <div className="book__callout">
                    A portrait of loss and grief
                </div>
                <div>
                    By <Link href="#joan-didion">Joan Didion</Link>,{" "}
                    <Link href="#another-author">Another Author</Link>,{" "}
                    <Link href="#third-author">Third Author</Link>
                </div>
                <div className="book__filetype">
                    <Icon
                        name="headset"
                        decorative={true}
                        modifiers={["left", "small"]}
                        iconRotation={IconRotationTypes.rotate0}
                    ></Icon>
                    Audiobook
                </div>
                <div className="book__description">
                    'An act of consummate literary bravery, a writer known for
                    her clarity allowing us to watch her mind as it becomes
                    clouded... <Link href="#">Read More</Link>
                </div>
            </>
        }
        ctas={
            <>
                <Link linkType={LinkTypes.Button} href="blah">
                    Reserve
                </Link>
                <div className="italicized ui-gray-dark">
                    0 of 11 copies available. 3 patrons in the queue.
                </div>
                <Link href="#url" linkType={LinkTypes.Forwards}>
                    View Book Details
                </Link>
            </>
        }
    ></Card>
);
