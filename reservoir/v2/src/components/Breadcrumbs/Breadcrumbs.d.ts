import React from "react";
export declare const breadcrumbTypeArray: readonly ["blogs", "booksAndMore", "brand", "connect", "education", "locations", "research", "whatsOn"];
export type BreadcrumbsTypes = typeof breadcrumbTypeArray[number];
export interface BreadcrumbsDataProps {
    url: string;
    text: string | React.ReactNode;
}
export interface BreadcrumbProps {
    /** Breadcrumb links as an array */
    breadcrumbsData: BreadcrumbsDataProps[];
    /** Used to control how the `Hero` component will be rendered. */
    breadcrumbsType?: BreadcrumbsTypes;
    /** className you can add in addition to 'input' */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
}
/**
 * The `Breadcrumbs` component is a navigation element that provides a
 * breadcrumb path that reflects the site structure and allows a user to
 * navigate to any page available in the breadcrumb hierarchy.
 */
export declare const Breadcrumbs: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>, {}>;
export default Breadcrumbs;
