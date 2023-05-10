/** The checkContrast function returns the status of a contrast ratio based on
 * the WCAG 2.1 standards.  WCAG Level AA requires a contrast ratio of at least
 * 4.5:1 for normal text and 3:1 for large text. WCAG Level AAA requires a
 * contrast ratio of at least 7:1 for normal text and 4.5:1 for large text. */
export const checkContrast = (ratio) => {
  const successSmall = ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : "Fail";
  const successLarge = ratio >= 4.5 ? "AAA" : ratio >= 3 ? "AA" : "Fail";
  const result = [ratio, successSmall, successLarge];
  return result;
};
