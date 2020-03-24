import * as React from "react";

import Accordion from "./Accordion";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import Checkbox from "../../01-atoms/Forms/Checkbox";
import UnorderedList from "../../03-organisms/List/UnorderedList";


export default {
  title: "Accordion",
  component: Accordion
};
const checkboxes = [
  <Checkbox onChange={action("changed")}  checkboxId="checkbox-1" labelOptions={{ id: "checkbox-1-label", labelContent: <>Checkbox 1</> }}></Checkbox>,
  <Checkbox onChange={action("changed")}  checkboxId="checkbox-2" labelOptions={{ id: "checkbox-1-label", labelContent: <>Checkbox 2</> }}></Checkbox>,
  <Checkbox onChange={action("changed")}  checkboxId="checkbox-3" labelOptions={{ id: "checkbox-1-label", labelContent: <>Checkbox 3</> }}></Checkbox>
];

export const accordionWithCheckboxes = () => <Accordion
    buttonOptions={ {id: "accordionBtn", content: <>Click to expand</>}}
> <UnorderedList id="checkbox-list">{checkboxes}</UnorderedList> </Accordion>;
