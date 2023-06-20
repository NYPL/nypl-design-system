/**
 * DS Maintainer note:
 * This file is a copy of the ChakraProvider component from the Chakra UI v1.8.8
 * library. The fixes we want are available in v2.7.0 but that is not compatible
 * with our current implementation. The workaround is to copy the entire component
 * and add the fixes ourselves. The prop names are kept the same as the fixed
 * 2.7.0 version to allow an easier upgrade path in the future.
 *
 * https://github.com/chakra-ui/chakra-ui/blob/%40chakra-ui/react%401.8.8/packages/provider/src/chakra-provider.tsx
 */

import CSSReset from "@chakra-ui/css-reset";
import { PortalManager } from "@chakra-ui/portal";
import {
  ColorModeProvider,
  ColorModeProviderProps,
  GlobalStyle,
  ThemeProvider,
  ThemeProviderProps,
} from "@chakra-ui/system";
import { Dict } from "@chakra-ui/utils";
import {
  EnvironmentProvider,
  EnvironmentProviderProps,
} from "@chakra-ui/react-env";
import * as React from "react";
import { IdProvider } from "@chakra-ui/hooks";

export interface ChakraProviderProps
  extends Pick<ThemeProviderProps, "cssVarsRoot"> {
  /**
   * a theme. if omitted, uses the default theme provided by chakra
   */
  theme?: Dict;
  /**
   * Common z-index to use for `Portal`
   *
   * @default undefined
   */
  portalZIndex?: number;
  /**
   * If `true`, `CSSReset` component will be mounted to help
   * you reset browser styles
   *
   * @default true
   */
  resetCSS?: boolean;
  /**
   * The selector to scope the css reset styles to.
   */
  resetScope?: string;
  /**
   * manager to persist a users color mode preference in
   *
   * omit if you don't render server-side
   * for SSR: choose `cookieStorageManager`
   *
   * @default localStorageManager
   */
  colorModeManager?: ColorModeProviderProps["colorModeManager"];
  /**
   * Your application content
   */
  children?: React.ReactNode;
  /**
   * The environment (`window` and `document`) to be used by
   * all components and hooks.
   *
   * By default, we smartly determine the ownerDocument and defaultView
   * based on where `ChakraProvider` is rendered.
   */
  environment?: EnvironmentProviderProps["environment"];
  /**
   * If `true`, Chakra will not mount the global styles defined in the theme.
   */
  disableGlobalStyle?: boolean;
}

/**
 * The global provider that must be added to make all Chakra components
 * work correctly
 */
export const ChakraProvider: React.FC<ChakraProviderProps> = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot,
    disableGlobalStyle = false,
  } = props;

  const _children = (
    <EnvironmentProvider environment={environment}>
      {children}
    </EnvironmentProvider>
  );

  return (
    <IdProvider>
      <ThemeProvider theme={theme as Dict} cssVarsRoot={cssVarsRoot}>
        <ColorModeProvider
          colorModeManager={colorModeManager}
          options={theme.config}
        >
          {resetCSS ? <CSSReset /> : null}
          {!disableGlobalStyle && <GlobalStyle />}
          {portalZIndex ? (
            <PortalManager zIndex={portalZIndex}>{_children}</PortalManager>
          ) : (
            _children
          )}
        </ColorModeProvider>
      </ThemeProvider>
    </IdProvider>
  );
};
