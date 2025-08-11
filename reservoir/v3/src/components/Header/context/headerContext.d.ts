import * as React from '../../../../node_modules/react';
/**
 * Context used for patron and production status data.
 */
export declare const HeaderContext: React.Context<any>;
/**
 * Context Provider used only in the Header component.
 */
export declare const HeaderProvider: ({ children, isProduction, patronName, }: {
    children: any;
    isProduction?: boolean;
    patronName?: string;
}) => import('../../../../node_modules/react/jsx-runtime').JSX.Element;
