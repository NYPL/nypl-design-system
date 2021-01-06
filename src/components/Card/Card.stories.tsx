import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import Card from "./Card";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";
import { LinkTypes } from "../Link/LinkTypes";
import { ButtonTypes } from "../Button/ButtonTypes";

export default {
  title: "Card",
  component: Card,
};

let showCTAs, showImage, showHeader, showFooter;

const headerLevels = [1, 2, 3, 4, 5, 6];

const imageRatios = {
  "1x1": "https://placeimg.com/100/100/animals",
  "2x1": "https://placeimg.com/200/100/animals",
  "3x4": "https://placeimg.com/150/200/animals",
  "4x1": "https://placeimg.com/400/100/animals",
  "4x3": "https://placeimg.com/200/150/animals",
  "16x9": "https://placeimg.com/400/225/animals",
};

export const card = () => (
  <>
    {boolean("Show Header", true) ? (showHeader = true) : (showHeader = false)}
    {boolean("Show Image", true) ? (showImage = true) : (showImage = false)}
    {boolean("Show CTAs", true) ? (showCTAs = true) : (showCTAs = false)}
    {boolean("Show Footer", true) ? (showFooter = true) : (showFooter = false)}
    <Card
      id="cardID"
      heading={
        showHeader ? (
          <Heading
            level={select("Header Level", headerLevels, headerLevels[2])}
            id="heading1"
            text={text("Header Content", "Optional Header")}
          />
        ) : (
          false
        )
      }
      image={
        showImage ? (
          <Image
            src={select("Image Ratio", imageRatios, imageRatios[2])}
            alt={""}
          />
        ) : null
      }
      ctas={
        showCTAs ? (
          <Button
            onClick={action("clicked")}
            id="button1"
            buttonType={ButtonTypes.Primary}
            type="submit"
          >
            {text("CTA Button Text: ", "Example CTA")}
          </Button>
        ) : null
      }
      footer={
        showFooter ? <>{text("Footer content: ", "Optional footer")}</> : null
      }
    >
      {text("Card Content: ", "Middle column content")}
    </Card>
  </>
);

card.storyName = "Card";

card.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17167%3A58131",
  },
};

export const ExampleCard = () => (
  <Card
    className="example-card"
    image={<Image src="https://placeimg.com/300/400/arch" alt={""} />}
    ctas={
      <>
        <Link type={LinkTypes.Button} href="blah">
          Reserve
        </Link>
        <div className="italicized ui-gray-dark">
          0 of 11 copies available. 3 patrons in the queue.
        </div>
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

ExampleCard.storyName = "Example Card";

ExampleCard.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17167%3A58131",
  },
};
