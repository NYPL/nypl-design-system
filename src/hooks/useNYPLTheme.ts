import { useTheme } from "@chakra-ui/react";

/**
 * A custom hook that returns the Chakra-based NYPL theme object. This must be
 * used inside a component that is wrapped in the `DSProvider` component, so
 * that the theme object can be available to use.
 */
function useNYPLTheme() {
  const theme = useTheme();
  if (!theme || Object.keys(theme).length === 0) {
    console.warn(
      "NYPL Reservoir useNYPLTheme: hook must be used inside of `<DSProvider />`."
    );
    return {};
  }

  // Chakra provides a lot of their own styles but
  // only NYPL styles should be exported.
  return {
    // base, sm, md, lg, xl, 2xl
    breakpoints: theme.breakpoints,
    colors: {
      // primary, secondary
      brand: theme.colors.brand,
      // blogs, books-and-more, education, locations,
      // research, research-library, whats-on
      section: theme.colors.section,
      transparent: theme.colors.transparent,
      // black, disabled, error, focus, gray, link,
      // status, success, test, warning, white
      ui: theme.colors.ui,
    },
    fontSizes: {
      "-3": theme.fontSizes["-3"],
      "-2": theme.fontSizes["-2"],
      "-1": theme.fontSizes["-1"],
      "0": theme.fontSizes["0"],
      "1": theme.fontSizes["1"],
      "2": theme.fontSizes["2"],
      "3": theme.fontSizes["3"],
      "4": theme.fontSizes["4"],
      // default
      breadcrumbs: theme.fontSizes.breadcrumbs,
      // default
      button: theme.fontSizes.button,
      // primary, secondary, tertiary, callout
      heading: theme.fontSizes.heading,
      // default
      helper: theme.fontSizes.helper,
      // default, secondary
      label: theme.fontSizes.label,
      // default, caption, tag, mini
      text: theme.fontSizes.text,
    },
    fontWeights: {
      light: theme.fontWeights.light,
      regular: theme.fontWeights.regular,
      medium: theme.fontWeights.medium,
      bold: theme.fontWeights.bold,
      // default, lastChild
      breadcrumbs: theme.fontWeights.breadcrumbs,
      // default
      button: theme.fontWeights.button,
      // primary, secondary, tertiary, callout
      heading: theme.fontWeights.heading,
      // default
      helper: theme.fontWeights.helper,
      // default
      label: theme.fontWeights.label,
      // default, caption, tag, mini
      text: theme.fontWeights.text,
    },
    fonts: {
      body: theme.fonts.body,
      heading: theme.fonts.heading,
    },
    radii: theme.radii,
    space: {
      xxs: theme.space.xxs,
      xs: theme.space.xs,
      s: theme.space.s,
      m: theme.space.m,
      l: theme.space.l,
      xl: theme.space.xl,
      xxl: theme.space.xxl,
      xxxl: theme.space.xxxl,
    },
  };
}

export default useNYPLTheme;
