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
      // dark mode colors:
      // ui.disabled, ui.error, ui.focus, ui.link,
      // ui.status, ui.success, ui.test, ui.warning,
      // ui.bg, ui.border, ui.typography
      dark: theme.colors.dark,
      // blogs, books-and-more, education, locations,
      // research, research-library, whats-on
      section: theme.colors.section,
      transparent: theme.colors.transparent,
      // black, white, gray, disabled, error, focus, link,
      // status, success, test, warning, bg, border, typography
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
      // small, default, large
      button: theme.fontSizes.button,
      // body, breadcrumbs, button, caption, default
      // heading, helper, label, overline, subtitle
      desktop: theme.fontSizes.desktop,
      // primary, secondary, tertiary, callout
      heading: theme.fontSizes.heading,
      // default
      helper: theme.fontSizes.helper,
      // default, secondary
      label: theme.fontSizes.label,
      // body, breadcrumbs, button, caption, default
      // heading, helper, label, overline, subtitle
      mobile: theme.fontSizes.mobile,
      // default, caption, tag, mini
      text: theme.fontSizes.text,
    },
    fontWeights: {
      light: theme.fontWeights.light,
      regular: theme.fontWeights.regular,
      medium: theme.fontWeights.medium,
      semibold: theme.fontWeights.semibold,
      bold: theme.fontWeights.bold,
      // default, body1, body2
      body: theme.fontWeights.body,
      // default, lastChild
      breadcrumbs: theme.fontWeights.breadcrumbs,
      // default
      button: theme.fontWeights.button,
      caption: theme.fontWeights.caption,
      default: theme.fontWeights.default,
      // display1, heading1, heading2, heading3, heading4,
      // heading5, heading6
      // deprecated: primary, secondary, tertiary, callout
      heading: theme.fontWeights.heading,
      // default
      helper: theme.fontWeights.helper,
      // default, secondary
      label: theme.fontWeights.label,
      // overline1, overline2
      overline: theme.fontWeights.overline,
      // subtitle1, subtitle2
      subtitle: theme.fontWeights.subtitle,
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
