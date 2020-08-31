import * as React from "react";
import bem from "../../utils/bem";
import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";

import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import { IconNames, IconRotationTypes } from "../Icons/IconTypes";
import Image from "../Image/Image";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import List from "./List";
import { ListTypes } from "./ListTypes";

export default {
    title: "List",
    component: List,
};

let listStyling;

let itemList = [];

const itemGroups = [
    "Art",
    "Bushes",
    "Clothing",
    "DIY Recipes",
    "Flowers",
    "Fossils",
    "Fruits",
    "Furniture",
    "Materials",
    "NPC",
    "Songs",
    "Tools",
    "Villagers",
];

for (let i = 0; i < itemGroups.length; i++) {
    itemList.push(<li key={i}>{itemGroups[i]}</li>);
}

export const list = () => (
    <List
        type={select("List Type", ListTypes, ListTypes.Unordered)}
        modifiers={boolean("List Styling", true) ? null : ["no-list-styling"]}
    >
        {itemList}
    </List>
);

list.story = {
    name: "List",
    parameters: {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16115%3A304",
        },
    },
};

const exampleCard = (
    <Card
        className="example-card"
        image={
            <Image
                src="https://placeimg.com/300/400/arch"
                isDecorative={true}
                alt={""}
            />
        }
        ctas={
            <>
                <Link type={LinkTypes.Button} href="blah">
                    Reserve
                </Link>
                <div>0 of 11 copies available. 3 patrons in the queue.</div>
                <Link href="#url" type={LinkTypes.Forwards}>
                    View Book Details
                </Link>
            </>
        }
    >
        <>
            <Heading
                level={2}
                id="heading1"
                text={"The Year of Magical Thinking"}
            />
            <div className="book__callout">A portrait of loss and grief</div>
            <div>
                By <Link href="#joan-didion">Joan Didion</Link>,{" "}
                <Link href="#another-author">Another Author</Link>,{" "}
                <Link href="#third-author">Third Author</Link>
            </div>
            <div className="book__filetype">
                <Icon
                    name={IconNames.headset}
                    decorative={true}
                    modifiers={["left", "small"]}
                    iconRotation={IconRotationTypes.rotate0}
                ></Icon>
                Audiobook
            </div>
            <div className="book__description">
                'An act of consummate literary bravery, a writer known for her
                clarity allowing us to watch her mind as it becomes clouded...{" "}
                <Link href="#">Read More</Link>
            </div>
        </>
    </Card>
);

let cards = [];

for (let i = 0; i < 3; i++) {
    cards.push(<li key={i}>{exampleCard}</li>);
}

export const cardList = () => (
    <>
        <List
            type={select("List Type", ListTypes, ListTypes.Unordered)}
            modifiers={
                boolean("List Styling", false) ? null : ["no-list-styling"]
            }
        >
            {cards}
        </List>
    </>
);
