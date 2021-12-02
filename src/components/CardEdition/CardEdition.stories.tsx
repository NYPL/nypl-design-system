import * as React from "react";
import { action } from "@storybook/addon-actions";

import CardEdition from "./CardEdition";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Link from "../Link/Link";
import Icon from "../Icons/Icon";
import {
  IconRotationTypes,
  IconNames,
  IconSizes,
  IconAlign,
} from "../Icons/IconTypes";
import { LinkTypes } from "../Link/LinkTypes";
import { ButtonTypes } from "../Button/ButtonTypes";
import { getCategory } from "../../utils/componentCategories";

export default {
  title: getCategory("CardEdition"),
  component: CardEdition,
};

const imageRatios = {
  "1x1": "https://placeimg.com/100/100/animals",
  "2x1": "https://placeimg.com/200/100/animals",
  "3x4": "https://placeimg.com/150/200/animals",
  "4x1": "https://placeimg.com/400/100/animals",
  "4x3": "https://placeimg.com/200/150/animals",
  "16x9": "https://placeimg.com/400/225/animals",
};

export const cardEdition = () => (
  <>
    <CardEdition
      id="cardID"
      heading={<Heading level={2} id="heading1" text="Header Content" />}
      image={<Image src={imageRatios[2]} alt="" />}
      ctas={
        <Button
          onClick={action("clicked")}
          id="button1"
          buttonType={ButtonTypes.Primary}
          type="submit"
        >
          CTA Button Text
        </Button>
      }
      footer={<>Footer content: </>}
    >
      Card Content:
    </CardEdition>
  </>
);

cardEdition.storyName = "CardEdition";

cardEdition.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17167%3A58131",
  },
};

export const ExampleCardEdition = () => (
  <CardEdition
    className="example-card-edition"
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
      <Heading
        level={HeadingLevels.Two}
        id="heading1"
        text="The Year of Magical Thinking"
      />
      <div className="book__callout">A portrait of loss and grief</div>
      <div>
        By <Link href="#joan-didion">Joan Didion</Link>,{" "}
        <Link href="#another-author">Another Author</Link>,{" "}
        <Link href="#third-author">Third Author</Link>
      </div>
      <div className="book__filetype">
        <Icon
          name={IconNames.Headset}
          size={IconSizes.Small}
          align={IconAlign.Left}
          iconRotation={IconRotationTypes.Rotate0}
        />
        Audiobook
      </div>
      <div className="book__description">
        An act of consummate literary bravery, a writer known for her clarity
        allowing us to watch her mind as it becomes clouded...{" "}
        <Link href="#">Read More</Link>
      </div>
    </>
  </CardEdition>
);

ExampleCardEdition.storyName = "Example Card Edition";

ExampleCardEdition.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=17167%3A58131",
  },
};
