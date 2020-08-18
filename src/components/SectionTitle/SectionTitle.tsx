import * as React from "react";
import bem from "../../utils/bem";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Icon from "../Icons/Icon";
import Heading from "../Heading/Heading";
import { IconRotationTypes } from "../Icons/IconTypes";

export interface SectionTitleProps {
    /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** className that appears in addition to "heading-section" */
    className?: string;
    headingModifiers?: string[];
    headingText: string;
    id?: string;
    linkAttributes?: {};
    linkBlockname?: string;
    linkModifiers?: string[];
    linkUrl?: string;
    /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
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
            blockName,
            className,
            headingText,
            id,
            linkAttributes,
            linkModifiers,
            linkUrl,
            modifiers,
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
                <Link href="#passed-in-link" type={LinkTypes.Forwards}>
                    See All
                </Link>
            );
        }

        let headingModifiers = linkUrl ? ["has-link"] : [];
        return (
            <div className={bem(baseClass, modifiers, blockName, [className])}>
                <Heading
                    id={id}
                    level={2}
                    text={headingText}
                    blockName={blockName ? blockName : baseClass}
                    modifiers={headingModifiers}
                />
                {link}
            </div>
        );
    }
}
