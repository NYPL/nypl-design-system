/**
 * A custom hook that returns the Chakra-based NYPL theme object. This must be
 * used inside a component that is wrapped in the `DSProvider` component, so
 * that the theme object can be available to use.
 */
declare function useNYPLTheme(): {
    breakpoints?: undefined;
    colors?: undefined;
    fontSizes?: undefined;
    fontWeights?: undefined;
    fonts?: undefined;
    radii?: undefined;
    space?: undefined;
} | {
    breakpoints: any;
    colors: {
        brand: any;
        dark: any;
        section: any;
        transparent: any;
        ui: any;
    };
    fontSizes: {
        "-3": any;
        "-2": any;
        "-1": any;
        "0": any;
        "1": any;
        "2": any;
        "3": any;
        "4": any;
        breadcrumbs: any;
        button: any;
        heading: any;
        helper: any;
        label: any;
        text: any;
    };
    fontWeights: {
        light: any;
        regular: any;
        medium: any;
        bold: any;
        breadcrumbs: any;
        button: any;
        heading: any;
        helper: any;
        label: any;
        text: any;
    };
    fonts: {
        body: any;
        heading: any;
    };
    radii: any;
    space: {
        xxs: any;
        xs: any;
        s: any;
        m: any;
        l: any;
        xl: any;
        xxl: any;
        xxxl: any;
    };
};
export default useNYPLTheme;
