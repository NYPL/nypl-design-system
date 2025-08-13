export interface HeaderSearchFormProps {
    isMobile?: boolean;
}
export type SearchOptionType = "circulatingCatalog" | "researchCatalog" | "website";
/**
 * Displays the search form for the Header's search interface. On mobile, two
 * buttons are displayed and on desktop, two radio inputs are displayed.
 */
declare const HeaderSearchForm: import("@chakra-ui/system/dist/system.types").ChakraComponent<({ isMobile }: HeaderSearchFormProps) => import('../../../../node_modules/react/jsx-runtime').JSX.Element, {}>;
export default HeaderSearchForm;
