import * as React from "react";
import bem from "../../utils/bem";
import Link from "../Link/Link";
import Icon from "../Icons/Icon";
import Heading from "../Heading/Heading";
import { iconRotationTypes } from "../Icons/IconTypes";

export interface SectionTitleProps {
    id: string;
    modifiers?: [];
    blockName?: string;

    headingText: string;
    headingAttributes?: {};
    headingModifiers?: string[];

    linkUrl?: string;
    linkAttributes?: {};
    linkModifiers?: string[];
    linkBlockname?: string;
}

export default class SectionTitle extends React.Component<
    SectionTitleProps,
    {}
> {
    constructor(props: SectionTitleProps) {
        super(props);
    }

    render(): JSX.Element {
        const {
            id,
            modifiers,
            blockName,
            headingText,
            headingAttributes,
            linkUrl,
            linkAttributes,
            linkModifiers,
        } = this.props;
        const baseClass = "heading-section";

        if (headingText.length > 80) {
            throw new Error(
                "Section Title (h2) Text must be fewer than 80 characters"
            );
        } else if (headingText.length > 60) {
            console.warn(
                "Section Title (h2) Text should be fewer than 60 characters"
            );
        }

        let link: JSX.Element | undefined;

        if (linkUrl) {
            let passedInAttributes = {
                "aria-describedby": id,
                ...linkAttributes,
            };

            link = (
                <Link url="#passed-in-link" className="more-link">
                    See All
                    <Icon
                        name="arrow_xsmall"
                        blockName="more-link"
                        modifiers={["right"]}
                        decorative={true}
                        iconRotation={iconRotationTypes.rotate270}
                    ></Icon>
                </Link>
            );
        }

        let headingModifiers = linkUrl ? ["has-link"] : [];
        return (
            <div className={bem(baseClass, modifiers, blockName)}>
                <Heading
                    id={id}
                    level={2}
                    text={headingText}
                    blockName={blockName ? blockName : baseClass}
                    modifiers={headingModifiers}
                    attributes={headingAttributes}
                />
                {link}
            </div>
        );
    }
}
