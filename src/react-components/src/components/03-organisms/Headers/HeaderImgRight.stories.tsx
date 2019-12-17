import * as React from "react";

import HeaderImgRight from "./HeaderImgRight";
import { action } from "@storybook/addon-actions";

export default {
  title: "Header Image Right",
  component: HeaderImgRight,
};

export const headerImgRight = () => <HeaderImgRight
  headerId="bigheaderthing"
  isImageDecorative={true}
  bodyText={<p>The internet’s search engine for research collections and e-books you can use right now. Powered by the New York Public Library.</p>}
  pageTitleText="Title Of Page"
  imgUrl="https://placeimg.com/200/100/arch">
  Once upon a time the King of Woody Valley had a daughter named Zoza,
  who was never seen to laugh. The unhappy father, who had no other comfort in
   life but this only daughter, left nothing untried to drive away her melancholy.
   So he sent for folks who walk on stilts, fellows who jump through hoops, for boxers, <a href="#fake-link">for conjurers</a>,
  for jugglers who perform sleight-of-hand tricks, for strong men, for dancing dogs, for leaping clowns, for the donkey that drinks out of
   a tumbler—in short, he tried first one thing and then another to make her laugh. But all was time lost, for nothing could bring a
    smile to her lips.
  </HeaderImgRight>;
