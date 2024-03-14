/**
 * Breakpoints from "src/styles/base/_01-breakpoints.scss"
 * How to use Chakra responsive styles: https://chakra-ui.com/docs/features/responsive-styles
 *
 * Chakra Value |     DS Variable           | EM/PX value
 * ------------------------------------------------------
 *      sm      | --nypl-breakpoint-small   | 20em/320px
 *      md      | --nypl-breakpoint-medium  | 37.5em/600px
 *      lg      | --nypl-breakpoint-large   | 60em/960px
 *      xl      | --nypl-breakpoint-xl      | 80em/1280px
 *     2xl      |        N/A                | 96em/1536px
 *
 * @Note Chakra provides a 2xl option while the DS does not. We don't
 * recommend using this value until further notice.
 */
declare const _default: import("@chakra-ui/theme-tools").Breakpoints<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
}>;
export default _default;
