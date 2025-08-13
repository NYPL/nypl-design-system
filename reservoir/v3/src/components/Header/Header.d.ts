export interface HeaderProps {
    /** Whether to render sitewide alerts or not. True by default. */
    fetchSitewideAlerts?: boolean;
    /** Whether or not the `Header` is in production mode. True by default. */
    isProduction?: boolean;
}
/**
 * The NYPL `Header` component is the top-level component of the site. It
 * contains features for logging in, logging out, searching, and navigating
 * the NYPL.org site.
 */
export declare const Header: import("@chakra-ui/system/dist/system.types").ChakraComponent<({ fetchSitewideAlerts, isProduction }: HeaderProps) => import('../../../node_modules/react/jsx-runtime').JSX.Element, {}>;
export default Header;
