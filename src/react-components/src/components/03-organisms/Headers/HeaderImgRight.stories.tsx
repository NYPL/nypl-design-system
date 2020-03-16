import * as React from "react";

import HeaderImgRight from "./HeaderImgRight";

export default {
  title: "Header Image Right",
  component: HeaderImgRight,
};

export const headerImgRight = () => <HeaderImgRight
  headerId="bigheaderthing"
  isImageDecorative={true}
  bodyText={<p>The internet’s search engine for research collections and e-books you can use right now. Powered by the New York Public Library.</p>}
  pageTitleText={<>Title Of Page</>}
  imgUrl="https://placeimg.com/200/100/arch">
</HeaderImgRight>;
