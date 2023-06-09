import React from "react";
import { ChakraProvider, ChakraProviderProps } from "./internalProvider";
import theme from "./index";

const DSProvider = ({
  children,
  colorModeManager,
  resetCSS = true,
  disableGlobalStyle = false,
}: React.PropsWithChildren<ChakraProviderProps>) => (
  <ChakraProvider
    colorModeManager={colorModeManager}
    theme={theme}
    resetCSS={resetCSS}
    disableGlobalStyle={disableGlobalStyle}
  >
    {children}
  </ChakraProvider>
);

export default DSProvider;
