import React from '../../../node_modules/react';
import { ChakraComponent } from "@chakra-ui/react";
export declare const actionBackgroundColorsArray: readonly ["brand.primary-05", "section.blogs.primary-05", "section.books-and-more.primary-05", "section.connect.primary-05", "section.education.primary-05", "section.locations.primary-05", "section.research.primary-05", "section.research-library.lpa-05", "section.research-library.schomburg-05", "section.research-library.schwarzman-05", "section.whats-on.primary-05", "dark.brand.primary-05", "dark.section.blogs.primary-05", "dark.section.books-and-more.primary-05", "dark.section.connect.primary-05", "dark.section.education.primary-05", "dark.section.locations.primary-05", "dark.section.research.secondary-05", "dark.section.research-library.lpa-05", "dark.section.research-library.schomburg-05", "dark.section.research-library.schwarzman-05", "dark.section.whats-on.primary-05"];
export type actionBackgroundColors = typeof actionBackgroundColorsArray[number];
export declare const highlightColorsArray: string[];
export type highlightColors = typeof highlightColorsArray[number];
export interface SubNavProps {
    /**
     * The background color to be applied to the hover and active states
     * of the SubNavLink and SubNavButton components.
     * This allows for customization of the action items.
     */
    actionBackgroundColor?: actionBackgroundColors;
    /** Additional class name for the `SubNav` component. */
    className?: string;
    /**
     * Custom color for SubNavLink, SubNavButton, and icons.
     */
    highlightColor?: highlightColors;
    /**
     * Optional unique ID for accessibility, allowing other components
     * to reference this element.
     */
    id?: string;
    /**
     * Primary actions displayed on the left side of the SubNav.
     * Use SubNavButton and SubNavLink components, which mirror
     * the DS Button and Link.
     */
    primaryActions: React.ReactNode;
    /**
     * Secondary actions displayed on the right side of the SubNav.
     * Use SubNavButton and SubNavLink components, which mirror
     * the DS Button and Link.
     */
    secondaryActions?: React.ReactNode;
}
interface SubNavItemProps {
    id: string;
    children: React.ReactNode;
    isOutlined?: boolean;
    isSelected?: boolean;
    screenreaderOnlyText?: string;
}
interface SubNavLinkProps extends SubNavItemProps {
    href: string;
}
interface SubNavButtonProps extends SubNavItemProps {
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}
export declare const SubNavButton: React.FC<React.PropsWithChildren<SubNavButtonProps>>;
export declare const SubNavLink: React.FC<React.PropsWithChildren<SubNavLinkProps>>;
/**
 * The `SubNav` component is a navigation element that displays a group of
 * related action items (buttons or links) in a horizontal layout.  The action
 * items in the `SubNav` component will link to children within or perform
 * actions related to the current section of a website.
 */
export declare const SubNav: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<SubNavProps> & React.RefAttributes<HTMLDivElement>>, SubNavProps>;
export default SubNav;
