export interface HeaderLoginButtonProps {
  isMobile?: boolean;
}
/**
 * This is the button that will render the login menu when it is clicked
 * and keep focus trapped within the menu. Its display text will be "Log In"
 * when the user is not logged in and "My Account" when the user is logged in.
 */
declare const HeaderLoginButton: import("@chakra-ui/system/dist/system.types").ChakraComponent<
  ({
    isMobile,
  }: HeaderLoginButtonProps) => import("../../../../node_modules/react/jsx-runtime").JSX.Element,
  {}
>;
export default HeaderLoginButton;
