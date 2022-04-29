import { chakra, Stack } from "@chakra-ui/react";
import * as React from "react";

import Button from "../Button/Button";
import { LayoutTypes } from "../../helpers/types";

export type ButtonGroupWidths = "default" | "full";

interface ButtonGroupProps {
  buttonWidth: ButtonGroupWidths;
  /** Additional className to use. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  layout?: LayoutTypes;
}

/**
 */
export const ButtonGroup = chakra(
  (props: React.PropsWithChildren<ButtonGroupProps>) => {
    const {
      // buttonWidth = "default",
      children,
      className = "",
      id,
      layout = "row",
      ...rest
    } = props;
    React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
      if (
        child.type !== Button ||
        (child.props && child.props.mdxType !== "Button")
      ) {
        console.warn(
          "NYPL Reservoir ButtonGroup: Only Button components can be children of ButtonGroup."
        );
      }
    });

    // const styles = useStyleConfig("ButtonGroup", { buttonWidth });

    return (
      <Stack
        id={id}
        className={className}
        direction={layout}
        spacing="xs"
        {...rest}
      >
        {children}
      </Stack>
    );
  }
);

export default ButtonGroup;
