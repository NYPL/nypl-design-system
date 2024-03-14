/**
 * This hook is used to determine if the current screen size is larger than
 * the specific NYPL breakpoint values. The returned value is an object with
 * boolean values for each breakpoint.
 */
declare const useNYPLBreakpoints: () => {
    isLargerThanSmall: any;
    isLargerThanMedium: any;
    isLargerThanMobile: any;
    isLargerThanLarge: any;
    isLargerThanXLarge: any;
};
export default useNYPLBreakpoints;
