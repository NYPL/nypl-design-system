import React from "../../../../node_modules/react";
export interface HeaderLoginProps {
  catalogRef?: React.RefObject<HTMLDivElement & HTMLAnchorElement>;
  isMobile?: boolean;
}
/**
 * The content of the login dropdown menu. Initially, this renders links to log
 * in and log out. When the patron is logged in, it will also display the patron's
 * name, links to the catalogs, and a log out link.
 */
declare const HeaderLogin: import("@chakra-ui/system/dist/system.types").ChakraComponent<
  ({
    catalogRef,
    isMobile,
  }: HeaderLoginProps) => import("../../../../node_modules/react/jsx-runtime").JSX.Element,
  {}
>;
export default HeaderLogin;
