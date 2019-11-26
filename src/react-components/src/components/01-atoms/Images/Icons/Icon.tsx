
import * as React from "react";
import Icons from "@nypl/design-system-icons/dist/img/sprite/sprite.svg";
import bem from "../../../../utils/bem";

  // Wrapper Class for Icon
  export interface IconProps {
    name: string;
    blockName: string;
    modifiers?: string[];
    decorative: boolean;
    role?: string;
    title?: boolean;
    desc?: boolean;
  }

  export default class Icon extends React.Component<IconProps, {}> {
    constructor(props: IconProps) {
      super(props);
    }

    render(): JSX.Element {
      let { modifiers, blockName, name, decorative, role, title, desc } = this.props;
      let icon_base_class = "icon";

      let iconProps = {
        "className": bem(icon_base_class, modifiers),
        "role": decorative ? "img" : role,
        "aria-hidden": decorative,
        "aria-labelledby": title ? "title-" + name : undefined,
        "aria-describedby": desc ? "desc-" + name : undefined
      };

      return (
        <svg {...iconProps} >
            {title &&
              <title id={`title-${name}`}>{ title }</title>
            }
            {desc &&
              <desc id={`title-${name}`}>{ desc }</desc>
            }
            <use href={`${Icons}#${name}`} />
        </svg>
      );
    }
  }
