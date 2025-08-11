/**
 * This function formats a number with commas and handles a range of numbers.
 *
 * 1. If one number is passed, it formats that number with commas.
 * 2. If two numbers are passed, it creates a range:
 *    - Numbers are formatted with commas.
 *    - En dash (`–`) is used for the range.
 *    - Consecutive numbers (e.g., 100–101) are formatted properly.
 *    - Repeating hundreds (e.g., 100–102) are handled to avoid redundancy.
 *
 * Examples:
 *  - (4382) -> "4,382"
 *  - (4276835) -> "4,276,835"
 *  - (1, 99) -> "1–99"
 *  - (141, 58) -> "58–141"
 *  - (100, 102) -> "100–102"
 *  - (10, 100) -> "10–100"
 */
declare const useFormatNumber: (
  num1: string | number,
  num2?: string | number
) => string | null;
export default useFormatNumber;
