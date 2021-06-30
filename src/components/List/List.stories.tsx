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
    term: "Balrogs",
    definition:
      'Demonic creatures of fire and shadow, Balrogs were fallen Maiar, loyal to the first Dark Lord, Morgoth. They participated in the wars of the First Age of Middle-earth but were mostly destroyed during the War of Wrath which ended the Age. By the Third Age, the only remaining Balrog was "Durin\'s Bane," the Balrog of Moria, killed by Gandalf.',
  },
  {
    term: "Dwarves",
    definition:
      "The race of Dwarves preferred to live in mountains and caves, settling in places such as Erebor (the Lonely Mountain), the Iron Hills, the Blue Mountains, and Moria (Khazad-dûm) in the Misty Mountains. Aulë the Smith created Dwarves; he also invented the Dwarven language, known as Khuzdul. Dwarves mined and worked precious metals throughout the mountains of Middle-earth. The seven different groups of Dwarf-folk originated in the locations where the Seven Fathers of the Dwarves first awoke before the First Age.",
  },
  {
    term: "Elves",
    definition:
      'The Elves, or Firstborn, were the first of Eru\'s Children to awaken. Born under the stars before the ascension of the Moon and the Sun, they retain a special love for light and an inner spirit endowed with unique gifts. They call themselves the Quendi, or "Speakers", for they were the first to utter words; and, even now, no race understands language and song like the Firstborn. Fair and fine featured, brilliant and proud, immortal and strong, tall and agile, they are the most blessed of the Free Peoples. They can see as well under moon or starlight as a man at the height of day. They cannot become sick or scarred, but if an Elf should die, from violence or losing the will to live from grief, their spirit goes to the halls of Mandos, and as they are bound to Arda and cannot leave until the world is broken and remade. Elven skill and agility is legendary: for instance, walking atop freshly fallen snow without leaving a trace of their passing. On a clear day they can see ten miles with perfect clarity and detail up to 100 miles. These gifts come at great cost, though: they are strongly bound to Fate (see Mandos) and hated by Morgoth. No other race has been blessed and cursed more than the Quendi.',
  },
  {
    term: "Ents",
    definition:
      "Ents were an ancient race of tree-like creatures, having become like the trees that they shepherd. They were created by Yavanna and given life by Ilúvatar. By the Third Age, they were a dwindling race, having long ago lost their mates, the Entwives.",
  },
  {
    term: "Hobbits",
    definition:
      'Hobbits are a race of Middle-earth, also known as "halflings" on account of their short stature, roughly half the size of men. They are characterized by curly hair on their heads and leathery feet that have furry insteps, for which they did not wear shoes. Many hobbits live in the Shire as well as Bree, and they once lived in the vales of the Anduin. They are fond of an unadventurous life of farming, eating, and socializing. There were three types of Hobbits: The Harfoots were the most numerous. The Stoors had an affinity for water, boats and swimming; the Fallohides were an adventurous people. The origin of hobbits is unclear, but of all the races they have the closest affinity to men, and in the Prologue to The Lord of the Rings Tolkien calls them relatives of men.',
  },
];

const ListTemplate = ({ type, ...args }) => (
  <List type={type} {...args}>
    {type !== ListTypes.Definition
      ? itemGroups.map((item, i) => <li key={i}>{item}</li>)
      : definitions.map((item, i) => [
          <dt key={`dt_${i}`}>{item.term}</dt>,
          <dd key={`dd_${i}`}>{item.definition}</dd>,
        ])}
  </List>
);

export const list = ListTemplate.bind({});

list.args = {
  type: ListTypes.Unordered,
  itemGroups: itemGroups,
  definitions: definitions,
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
    {items.map((item, i) => [
      <dt key={`dt_${i}`}>{...item.term}</dt>,
      <dd key={`dd_${i}`}>{...item.definition}</dd>,
    ])}
  </List>
);

export const definitionList = DefinitionListTemplate.bind({});
definitionList.args = {
  items: definitions,
  title: "Middle-Earth Peoples",
};

definitionList.argTypes = {
  type: {
    table: { disable: true },
  },
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
      {cards}
    </List>
  </>
);
/* eslint-disable jsx-a11y/anchor-is-valid */
export const listOfLinks = () => (
  <List title="Details" type={ListTypes.Definition}>
    <dt>Authors</dt>
    <dd>
      <a href="#">Chirwa, Ephraim Wadonda, author</a>
      <br />
      <a href="#">Dorward, Andrew, author</a>
    </dd>
    <dt>Subjects</dt>
    <dd>
      <a href="#">Ackerbau</a>
      <br />
      <a href="#">Ackerbau.</a>
      <br />
      <a href="#">Africa.</a>
      <br />
      <a href="#">Afrika.</a>
      <br />
      <a href="#">Agrarsubvention</a>
      <br />
      <a href="#">Agrarsubvention.</a>
      <br />
      <a href="#">Agricultura -- Subvencions -- Malawi.</a>
      <br />
      <a href="#">Agricultural economics New.</a>
      <br />
      <a href="#">Agricultural subsidies</a>
      <br />
      <a href="#">Agricultural subsidies -- Developing countries.</a>
      <br />
      <a href="#">Agricultural subsidies -- Malawi.</a>
      <br />
      <a href="#">Agricultural subsidies.</a>
      <br />
      <a href="#">BUSINESS &amp; ECONOMICS -- Industries</a>
      <br />
    </dd>
  </List>
);
/* eslint-enable jsx-a11y/anchor-is-valid */

listOfLinks.storyName = "Definition List of Links";
listOfLinks.parameters = {
  docs: {
    source: {
      type: "dynamic",
    },
  },
};
