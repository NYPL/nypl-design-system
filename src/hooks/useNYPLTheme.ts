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
      "The `useNYPLTheme` hook must be used inside of `<DSProvider />`."
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
      // blogs, books-and-more, locations, research,
      // research-library, whats-on
      section: theme.colors.section,
      transparent: theme.colors.transparent,
      // black, disabled, error, focus, gray, link,
      // status, success, test, warning, white
      ui: theme.colors.ui,
    },
    fontSizes: {
      "-3": theme.fontSizes["-3"],
      "-2": theme.fontSizes.xs,
      "-1": theme.fontSizes.sm,
      "0": theme.fontSizes.md,
      "1": theme.fontSizes.lg,
      "2": theme.fontSizes["2"],
      "3": theme.fontSizes["3"],
      "4": theme.fontSizes["4"],
    },
    fontWeights: {
      light: theme.fontWeights.light,
      regular: theme.fontWeights.regular,
      medium: theme.fontWeights.medium,
      bold: theme.fontWeights.bold,
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
