/** Wrapper component for an unordered list of objects */
import * as React from "react";
import bem from "../../../utils/bem";
import { boolean } from "@storybook/addon-knobs";

export interface UnorderedListOptions {
  content?: JSX.Element[];

  id: string;
  modifiers?: any[];
  blockName?: string;
}

interface UnorderedListProps {
  /** The unique ID of UnorderedList */
  id: string;

  /** Used for BEM css convention. */
  modifiers?: any[];
  /** Used for BEM css convention. */
  blockName?: string;
}

export default function UnorderedList(props: React.PropsWithChildren<UnorderedListProps>) {
  const { id, modifiers = [], blockName } = props;

  const baseClass = "unordered-list";

  if (!Array.isArray(props.children)) {
    throw new Error("Please pass only an Array as a child of UnorderedList");
  }

  const content = props.children.map((content, i) => {
    return <li className={bem("list-item", [], baseClass)} key={id + "-li-" + i}>{content}</li>;
  });

  return (
    <div className={bem("list-container", modifiers, blockName)}>
      <ul id={id} className={bem(baseClass)}>
        {content}
      </ul>
    </div>
  );
}
