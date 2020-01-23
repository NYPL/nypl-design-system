
import * as React from "react";
import bem from "../../../utils/bem";

export interface ContainerProps {
  modifiers?: string[];
  blockName?: string;
}

export default function Container(props: React.PropsWithChildren<ContainerProps>) {
  const { modifiers = [], blockName } = props;
  return (
    <div className={bem("container")}>{props.children}</div>
  );
}
