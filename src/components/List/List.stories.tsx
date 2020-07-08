import * as React from "react";
import bem from "../../utils/bem";
import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs";

import Card from "../Card/Card";
import Heading from "../Heading/Heading";
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
    <>
        <List
            type={select("List Type", ListTypes, ListTypes.Unordered)}
            modifiers={
                boolean("List Styling", true) ? null : ["no-list-styling"]
            }
        >
            {itemList}
        </List>
    </>
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

export const cardList = () => (
    <>
        <List
            type={select("List Type", ListTypes, ListTypes.Unordered)}
            modifiers={
                boolean("List Styling", true) ? null : ["no-list-styling"]
            }
        >
            {itemList}
        </List>
    </>
);
