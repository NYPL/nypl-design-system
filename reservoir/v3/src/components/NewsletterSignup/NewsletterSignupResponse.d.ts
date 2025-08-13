/// <reference types="react" />
import { IconColors, IconNames } from "../Icons/Icon";
interface NewsletterSignupResponseProps {
    focusRef: React.MutableRefObject<HTMLDivElement>;
    heading: string;
    headingColor?: string;
    iconName: IconNames;
    iconColor: IconColors;
    text?: string | JSX.Element;
}
export declare const NewsletterSignupResponse: ({ focusRef, heading, headingColor, iconName, iconColor, text, }: NewsletterSignupResponseProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export {};
