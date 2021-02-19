import * as React from "react";
import range from "lodash/range";

import Accordion from "./Accordion";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";
import Link from "../Link/Link";

// Set up the reusable template to create a list of Accordion components.
const AccordionListTemplate = ({ count, children, ...args }) => (
  <List type={ListTypes.Unordered} modifiers={["no-list-styling"]}>
    {range(count).map(i => (
      <li key={i}>
        <Accordion {...args} inputId={`${args.inputId}-${i}`}>
          {children}
        </Accordion>
      </li>
    ))}
  </List>
);

const faqContent = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </p>

    <p>
      <Link href="#">Learn More</Link>
    </p>
  </>
);

// This is one specific story where it will render a list of FAQs.
export const AccordionAsFAQSet = AccordionListTemplate.bind({});
AccordionAsFAQSet.args = {
  accordionLabel: "FAQ Question Lorem Ipsum",
  modifiers: ["faq"],
  inputId: "accordionBtn",
  children: faqContent,
  count: 3,
};
