import * as React from "react";
import bem from "../../utils/bem";
import Link from "../Link/Link";
import { LinkTypes } from "../Link/LinkTypes";
import Icon from "../Icons/Icon";
import Heading from "../Heading/Heading";
import { IconRotationTypes } from "../Icons/IconTypes";

export interface SectionTitleProps {
    /** Additional attributes passed to the wrapping div */
    attributes?: {};
    /** blockName for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    headingAttributes?: {};
    headingModifiers?: string[];
    headingText: string;
    id?: string;
    linkAttributes?: {};
    linkBlockname?: string;
    linkModifiers?: string[];
    linkUrl?: string;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
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
                <Link href="#passed-in-link" linkType={LinkTypes.Forwards}>
                    See All
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
