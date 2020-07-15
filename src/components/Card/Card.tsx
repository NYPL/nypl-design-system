import * as React from "react";
import bem from "../../utils/bem";

interface CardProps {
    /** Additional attributes passed to the card */
    attributes?: {};
    /** ClassName that appears in addition to "card" */
    className?: string;
    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;
    /** Calls to Action for the card, such as "download" on a card for a book */
    ctas?: React.ReactNode;
    /** Footer that appears within the card but below the three columns within it */
    footer?: React.ReactNode;
    /** Heading that appears within the card but above the three columns within it */
    heading?: React.ReactNode;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** First column within the card */
    image?: React.ReactNode;
    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
    const {
        attributes,
        blockName,
        children,
        className,
        ctas,
        footer,
        heading,
        id,
        image,
        modifiers = [],
    } = props;
    const baseClass = "card";

    return (
        <div
            className={bem(baseClass, modifiers, blockName, [className])}
            id={id}
            {...attributes}
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
                {children && (
                    <div className={bem("content", modifiers, baseClass)}>
                        {children}
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
