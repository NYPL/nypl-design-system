/**
 * How to use Chakra responsive styles: https://chakra-ui.com/docs/features/responsive-styles
 *
 * Chakra Value |     DS Variable           | EM/PX value    | NYPL reference
 * --------------------------------------------------------------------------
 *      sm      | --nypl-breakpoint-small   | 30em / 480px   | small mobile
 *      md      | --nypl-breakpoint-medium  | 48em / 768px   | large mobile
 *      lg      | --nypl-breakpoint-large   | 64em / 1024px  | small tablet
 *      xl      | --nypl-breakpoint-xl      | 80em / 1280px  | large tablet
 *     2xl      |        N/A                | 96em / 1536px  | n/a
 *
 * @Note Chakra provides a 2xl option while the DS does not. We don't
 * recommend using this value until further notice.
 */
export default {
  sm: "30em",
  md: "48em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em",
};
