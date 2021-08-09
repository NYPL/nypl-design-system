import * as React from "react";

import Card, { CardImage, CardHeading, CardContent, CardActions } from "./Card";

import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";

export default {
  title: "Card",
  component: Card,
};

export const ExampleCard = () => (
  <Card className="example-card">
    <CardImage src={"https://placeimg.com/300/400/arch"} alt={""} />
    <CardHeading level={2} id="heading1">
      The Year of Magical Thinking
    </CardHeading>
    <CardContent>
      <div>Published in New York by Random House</div>
      <div>Written in English</div>
      <div>
        License: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
        International
      </div>
    </CardContent>
    <CardActions>
      <Link type={LinkTypes.Button} href="blah">
        Reserve
      </Link>
      <div className="italicized ui-gray-dark">
        0 of 11 copies available. 3 patrons in the queue.
      </div>
      <Link href="#url" type={LinkTypes.Forwards}>
        View Book Details
      </Link>
    </CardActions>
  </Card>
);
