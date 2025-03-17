import breakpoints from "../theme/foundations/breakpoints";

/**
 * Generates container query styles based on the provided breakpoint and styles.
 *
 * @param {string} props.breakpoint - The breakpoint at which the container query should apply. It can be "base" or a key from the breakpoints object.
 * @param {object} props.styles - The styles to apply within the container query.
 * @returns {object} An object containing the container query styles.
 */
export const setContainerStyles = (props: {
  breakpoint: string;
  styles: object;
}): object => {
  const { breakpoint, styles } = props;
  const minWidth = breakpoint === "base" ? "0px" : breakpoints[breakpoint];
  return {
    [`@container (min-width: ${minWidth})`]: styles,
  };
};
