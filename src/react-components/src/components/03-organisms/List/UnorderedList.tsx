import * as React from "react";
import bem from "../../../utils/bem";
import { findFirst } from "../../../helpers/util/Utils";
import { boolean } from "@storybook/addon-knobs";

export interface UnorderedListOptions {
  id: string;
  modifiers?: any[];
  blockName?: string;
  scroll?: boolean;
  content?: JSX.Element[];
}

export interface UnorderedListProps {
  id: string;
  modifiers?: any[];
  blockName?: string;
  scroll?: boolean;
  content?: JSX.Element[];
}

export default function UnorderedList(props: React.PropsWithChildren<UnorderedListProps>) {
  const { id, modifiers = [], blockName, scroll = false, content } = props;

  const baseClass = "unordered-list";

  const listContent = findFirst(props.children, content);
  if (scroll) { modifiers.push("scroll"); }

  const blah = listContent.map((content, i) => {
    return <li className={bem("list-item", [], baseClass)} key={id + "-li-" + i}>{content}</li>;
  });


  return (
    <div className={bem("list-container", modifiers, baseClass)}>
      <ul id={id} className={bem(baseClass)}>
        {blah}
      </ul>
    </div>
  );
}
