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
        heading={<Heading level={3} id="heading1" text={"Optional Header"} />}
        image={
            <Image
                src="https://placeimg.com/400/200/arch"
                isDecorative={true}
            />
        }
        content={<div>Required middle column content</div>}
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
    ></Card>
);

export const EditionCard = () => (
    <Card
        extraClassName={["edition-card"]}
        heading={<Heading level={3} id="heading1" text={"2004 Edition"} />}
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
                <Link
                    linkType={LinkTypes.Button}
                    blockName="edition-card"
                    href="blah"
                >
                    Read Online
                </Link>
                <div className="edition-card__card-info-link">
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
