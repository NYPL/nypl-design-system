import * as React from "react";
import bem from "../../utils/bem";

interface CardProps {
    /** Uh id  */
    id?: string;

    /** ClassName that appears in addition to "card" */
    extraClassName?: string[];

    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];

    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;

    /** Heading that appears within the card but above the three columns within it */
    heading?: JSX.Element;

    /** Footer that appears within the card but below the three columns within it */
    footer?: JSX.Element;

    /** First column within the card */
    image?: JSX.Element;

    /** Main content within the card */
    content?: JSX.Element;

    /** Calls to Action for the card, such as "download" on a card for a book */
    ctas?: JSX.Element;
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
    const {
        id,
        extraClassName,
        heading,
        image,
        content,
        ctas,
        footer,
        blockName,
        modifiers = [],
    } = props;
    const baseClass = "card";

    return (
        <div
            className={bem(baseClass, modifiers, blockName, extraClassName)}
            id={id}
        >
            {heading && (
                <div className={bem("heading", modifiers, baseClass)}>
                    {heading}
                </div>
            )}
            <div className={bem("columns", modifiers, baseClass)}>
                {image && (
                    <div className={bem("image", modifiers, baseClass)}>
                        {image}
                    </div>
                )}
                {content && (
                    <div className={bem("content", modifiers, baseClass)}>
                        {content}
                    </div>
                )}
                {ctas && (
                    <div className={bem("ctas", modifiers, baseClass)}>
                        {ctas}
                    </div>
                )}
            </div>
            {footer && (
                <div className={bem("footer", modifiers, baseClass)}>
                    {footer}
                </div>
            )}
        </div>
    );
}
