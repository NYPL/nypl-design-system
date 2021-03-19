import * as React from "react";
import { boolean, select } from "@storybook/addon-knobs";

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

const definitions = [
  {
    term: "Summary",
    definition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    term: "term2",
    definition: "definition2",
  },
];

const ListTemplate = ({ listType, items, ...args }) => (
  <List type={listType} {...args}>
    {items.map((item, i) => (
      <li key={i}>{...item}</li>
    ))}
  </List>
);

export const list = ListTemplate.bind({});

list.args = {
  type: ListTypes.Unordered,
  items: itemGroups,
};

list.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=16115%3A304",
  },
};

const DefinitionListTemplate = ({ items, ...args }) => (
  <List type={ListTypes.Definition} {...args}>
    {items.map((item, i) => (
      <React.Fragment key={i}>
        <dt>{...item.term}</dt>
        <dd>{...item.definition}</dd>
      </React.Fragment>
    ))}
  </List>
);

export const definitionList = DefinitionListTemplate.bind({});
definitionList.args = {
  items: definitions,
};

definitionList.storyName = "Definition List";
definitionList.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10734%3A5178",
  },
};

const exampleCard = (
  <Card
    className="example-card"
    image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
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
      <Heading level={2} id="heading1" text={"The Year of Magical Thinking"} />
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
        An act of consummate literary bravery, a writer known for her clarity
        allowing us to watch her mind as it becomes clouded...{" "}
        <Link href="#">Read More</Link>
      </div>
    </>
  </Card>
);

const cards = [];

for (let i = 0; i < 3; i++) {
  cards.push(<li key={i}>{exampleCard}</li>);
}

export const cardList = () => (
  <>
    <List
      type={select("List Type", ListTypes, ListTypes.Unordered)}
      modifiers={boolean("List Styling", false) ? null : ["no-list-styling"]}
    >
      <p>test</p> {cards}
    </List>
  </>
);
