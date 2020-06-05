import * as React from "react";
export interface HeadingProps {
    level: number;
    id: string;
    baseClass?: string;
    modifiers?: string[];
    blockName?: string;
    url?: string;
    urlClass?: string;
    text?: string;
    attributes?: {};
}
export default function Heading(
    props: React.PropsWithChildren<HeadingProps>
): React.ReactElement<
    {
        className: string;
        id: string;
    },
    | string
    | ((
          props: any
      ) => React.ReactElement<
          any,
          string | any | (new (props: any) => React.Component<any, any, any>)
      >)
    | (new (props: any) => React.Component<any, any, any>)
>;
