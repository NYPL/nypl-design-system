import * as React from "react";
import bem from "../../utils/bem";

interface CardProps {
    /** ID  */
    id?: string;

    /** ClassName that appears in addition to "card" */
    ClassName?: string[];

    /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
    modifiers?: string[];

    /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
    blockName?: string;

    /** Heading that appears within the card but above the three columns within it */
    heading?: React.ReactNode;

    /** Footer that appears within the card but below the three columns within it */
    footer?: React.ReactNode;

    /** First column within the card */
    image?: React.ReactNode;

    /** Main content within the card */
    content?: React.ReactNode;

    /** Calls to Action for the card, such as "download" on a card for a book */
    ctas?: React.ReactNode;
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
    const {
        id,
        ClassName,
        heading,
        image,
        content,
        ctas,
        footer,
        blockName,
        children,
        modifiers = [],
    } = props;
    const baseClass = "card";

    return (
        <div
            className={bem(baseClass, modifiers, blockName, ClassName)}
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
