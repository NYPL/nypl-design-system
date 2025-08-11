/**
 * Generates container query styles based on the provided breakpoint and styles.
 *
 * @param {string} props.breakpoint - The breakpoint at which the container query should apply. It can be "base" or a key from the breakpoints object.
 * @param {object} props.styles - The styles to apply within the container query.
 * @returns {object} An object containing the container query styles.
 */
export declare const setContainerStyles: (props: {
  breakpoint: string;
  styles: object;
}) => object;
