import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import Card, { CardImage, CardHeading, CardContent, CardActions } from "./Card";
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

let showCTAs, showImage, showBorder;

const headerLevels = [1, 2, 3, 4, 5, 6];

const layoutOptions = {
  vertical: "vertical",
  horizontal: "horizontal",
};

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
    {boolean("Show Image", true) ? (showImage = true) : (showImage = false)}
    {boolean("Show CTAs", true) ? (showCTAs = true) : (showCTAs = false)}
    {boolean("Show Border", true) ? (showBorder = true) : (showBorder = false)}
    <Card
      id="cardID"
      layout={select("Layout Orientation", layoutOptions, layoutOptions[0])}
      border={showBorder}
      padding={text("Padding", "")}
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
    >
      <CardImage
        src={select("Image Ratio", imageRatios, imageRatios[2])}
        alt="Alt text"
      />
      <CardHeading
        level={select("Header Level", headerLevels, headerLevels[2])}
        id="heading1"
      >
        Optional Header
      </CardHeading>
      <CardContent>middle column content</CardContent>
      {/* {showCTAs ? (<CardActions>
        <Button
          onClick={action("clicked")}
          id="button1"
          buttonType={ButtonTypes.Primary}
          type="submit"
        >
          {text("CTA Button Text: ", "Example CTA")}
        </Button>
      </CardActions>
      ) : null} */}
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
    <CardImage src={"https://placeimg.com/300/400/arch"} alt={""} />
    <CardHeading level={2} id="heading1">
      The Year of Magical Thinking
    </CardHeading>
    <CardContent>
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
    </CardContent>
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

export const HorizontalCard = () => (
  <Card
    className="example-card"
    layout="horizontal"
    border={true}
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
    <CardImage src={imageRatios["4x3"]} alt="Alt text" />
    <CardHeading headingLevel={2} id="heading1">
      The Year of Magical Thinking
    </CardHeading>
    <CardContent>
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
    </CardContent>
  </Card>
);

HorizontalCard.storyName = "Horizontal Card";

HorizontalCard.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17167%3A58131",
  },
};
